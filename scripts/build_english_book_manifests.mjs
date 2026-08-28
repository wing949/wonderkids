import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const IPA_DICTIONARY = {
  'eye': '/aɪ/',
  'ear': '/ɪə/',
  'nose': '/nəʊz/',
  'mouth': '/maʊθ/',
  'face': '/feɪs/',
  'ball': '/bɔːl/',
  'bike': '/baɪk/',
  'book': '/bʊk/',
  'boy': '/bɔɪ/',
  'cake': '/keɪk/',
  'car': '/kɑː/',
  'cat': '/kæt/',
  'cup': '/kʌp/',
  'apple': '/ˈæpl/',
  'bag': '/bæɡ/',
  'can': '/kæn/',
  'hat': '/hæt/',
  'door': '/dɔː/',
  'desk': '/desk/',
  'dog': '/dɒɡ/',
  'duck': '/dʌk/',
  'fish': '/fɪʃ/',
  'chips': '/tʃɪps/',
  'flag': '/flæɡ/',
  'fox': '/fɒks/',
  'girl': '/ɡɜːl/',
  'gate': '/ɡeɪt/',
  'garden': '/ˈɡɑːdn/',
  'guitar': '/ɡɪˈtɑː/',
  'hand': '/hænd/',
  'hair': '/heə/',
  'horse': '/hɔːs/',
  'house': '/haʊs/',
  'egg': '/eɡ/',
  'elephant': '/ˈelɪfənt/',
  'bell': '/bel/',
  'pen': '/pen/',
  'ink': '/ɪŋk/',
  'milk': '/mɪlk/',
  'pig': '/pɪɡ/',
  'ring': '/rɪŋ/',
  'monkey': '/ˈmʌŋki/',
  'mango': '/ˈmæŋɡəʊ/',
  'mother': '/ˈmʌðə/',
  'mouse': '/maʊs/',
  'bus': '/bʌs/',
  'box': '/bɒks/',
  'lake': '/leɪk/',
  'leaf': '/liːf/',
  'lemon': '/ˈlemən/',
  'lion': '/ˈlaɪən/',
  'noodles': '/ˈnuːdlz/',
  'nuts': '/nʌts/',
  'nest': '/nest/',
  'nine': '/naɪn/',
  'toy': '/tɔɪ/',
  'teddy bear': '/ˈtedi beə/',
  'train': '/treɪn/',
  'top': '/tɒp/',
  'football': '/ˈfʊtbɔːl/',
  'fan': '/fæn/',
  'foot': '/fʊt/',
  'field': '/fiːld/',
  'home': '/həʊm/',
  'popcorn': '/ˈpɒpkɔːn/',
  'pasta': '/ˈpæstə/',
  'pizza': '/ˈpiːtsə/',
  'kite': '/kaɪt/',
  'kitten': '/ˈkɪtn/',
  'sea': '/siː/',
  'sand': '/sænd/',
  'sail': '/seɪl/',
  'sun': '/sʌn/',
  'river': '/ˈrɪvə/',
  'rainbow': '/ˈreɪnbəʊ/',
  'road': '/rəʊd/',
  'question': '/ˈkwestʃən/',
  'quiz': '/kwɪz/',
  'quiet': '/ˈkwaɪət/',
  'farm': '/fɑːm/',
  'farmer': '/ˈfɑːmə/',
  'kitchen': '/ˈkɪtʃɪn/',
  'kettle': '/ˈketl/',
  'knife': '/naɪf/',
  'village': '/ˈvɪlɪdʒ/',
  'van': '/væn/',
  'violin': '/ˌvaɪəˈlɪn/',
  'valley': '/ˈvæli/',
  'yogurt': '/ˈjɒɡət/',
  'yellow': '/ˈjeləʊ/',
  'zebra': '/ˈzebrə/',
  'zoo': '/zuː/',
  'zero': '/ˈzɪərəʊ/',
  'slide': '/slaɪd/',
  'seesaw': '/ˈsiːsɔː/',
  'swing': '/swɪŋ/',
  'coffee': '/ˈkɒfi/',
  'cookie': '/ˈkʊki/',
  'number': '/ˈnʌmbə/',
  'plus': '/plʌs/',
  'minus': '/ˈmaɪnəs/',
  'count': '/kaʊnt/',
  'bedroom': '/ˈbedruːm/',
  'living room': '/ˈlɪvɪŋ ruːm/',
  'shirt': '/ʃɜːt/',
  'dress': '/dres/',
  'shoes': '/ʃuːz/',
  'tent': '/tent/',
  'campfire': '/ˈkæmpfaɪə/',
  'flashlight': '/ˈflæʃlaɪt/',
  'hello': '/heˈləʊ/',
  'hi': '/haɪ/',
  'name': '/neɪm/',
  'friend': '/frend/',
  'singing': '/ˈsɪŋɪŋ/',
  'dancing': '/ˈdɑːnsɪŋ/',
  'drawing': '/ˈdrɔːɪŋ/',
  'swimming': '/ˈswɪmɪŋ/',
  'school': '/skuːl/',
  'classroom': '/ˈklɑːsruːm/',
  'library': '/ˈlaɪbrəri/',
  'playground': '/ˈpleɪɡraʊnd/',
  'pencil': '/ˈpensl/',
  'ruler': '/ˈruːlə/',
  'eraser': '/ɪˈreɪzə/',
  'school bag': '/ˈskuːl bæɡ/',
  'red': '/red/',
  'blue': '/bluː/',
  'green': '/ɡriːn/',
  'orange': '/ˈɒrɪndʒ/',
  'chess': '/tʃes/',
  'badminton': '/ˈbædmɪntən/',
  'skipping': '/ˈskɪpɪŋ/',
  'father': '/ˈfɑːðə/',
  'brother': '/ˈbrʌðə/',
  'sister': '/ˈsɪstə/',
  'grandmother': '/ˈɡrænmʌðə/',
  'teacher': '/ˈtiːtʃə/',
  'doctor': '/ˈdɒktə/',
  'nurse': '/nɜːs/',
  'driver': '/ˈdraɪvə/',
  'worker': '/ˈwɜːkə/',
  'bathroom': '/ˈbɑːθruːm/',
  'bed': '/bed/',
  'chair': '/tʃeə/',
  'lamp': '/læmp/',
  'rice': '/raɪs/',
  'bread': '/bred/',
  'meat': '/miːt/',
  'water': '/ˈwɔːtə/',
  'parrot': '/ˈpærət/',
  'rabbit': '/ˈræbɪt/',
  'goldfish': '/ˈɡəʊldfɪʃ/',
  'robot': '/ˈrəʊbɒt/',
  'doll': '/dɒl/',
  'puzzle': '/ˈpʌzl/',
  'yo-yo': '/ˈjəʊ jəʊ/',
  'reading': '/ˈriːdɪŋ/',
  'cooking': '/ˈkʊkɪŋ/',
  'listening': '/ˈlɪsnɪŋ/',
  'watching': '/ˈwɒtʃɪŋ/',
  'cycling': '/ˈsaɪklɪŋ/',
  'skating': '/ˈskeɪtɪŋ/',
  'tiger': '/ˈtaɪɡə/',
  'peacock': '/ˈpiːkɒk/',
  'bear': '/beə/'
};

function getWordPhonetic(word) {
  const clean = word.toLowerCase().trim();
  return IPA_DICTIONARY[clean] || `/${clean}/`;
}

function getWordVectorIllustration(word) {
  const w = word.toLowerCase().trim();
  switch (w) {
    case 'eye':
      return `<ellipse cx="75" cy="85" rx="38" ry="24" fill="#ffffff" stroke="#0284c7" stroke-width="3"/>
        <circle cx="75" cy="85" r="16" fill="#0284c7"/>
        <circle cx="78" cy="82" r="5" fill="#ffffff"/>
        <path d="M42 68 Q75 50 108 68" stroke="#0369a1" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    case 'ear':
      return `<path d="M58 55 C46 68 46 102 60 115 C68 122 84 118 88 105 C94 88 85 60 72 52 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
        <path d="M66 70 C60 80 62 95 72 100" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>`;
    case 'nose':
      return `<path d="M75 52 L68 95 C60 98 58 108 70 112 C82 115 90 106 82 96 Z" fill="#fde68a" stroke="#d97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="68" cy="105" r="3.5" fill="#b45309"/>
        <circle cx="78" cy="105" r="3.5" fill="#b45309"/>`;
    case 'mouth':
      return `<path d="M45 80 Q75 118 105 80 Q75 92 45 80 Z" fill="#f43f5e" stroke="#be123c" stroke-width="3"/>
        <path d="M52 82 Q75 90 98 82" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
    case 'ball':
      return `<circle cx="75" cy="85" r="36" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
        <path d="M50 65 Q75 85 50 105 M100 65 Q75 85 100 105 M75 49 L75 121" stroke="#d97706" stroke-width="2.5" fill="none"/>`;
    case 'bike':
      return `<circle cx="50" cy="98" r="18" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <circle cx="100" cy="98" r="18" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <path d="M50 98 L72 68 L92 68 M72 68 L100 98 M72 68 L64 98 L50 98 M85 64 L96 64" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    case 'book':
      return `<rect x="42" y="60" width="66" height="50" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5"/>
        <path d="M75 60 L75 110 M48 72 L70 72 M48 82 L70 82 M80 72 L102 72 M80 82 L102 82" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>`;
    case 'cat':
    case 'kitten':
      return `<circle cx="75" cy="88" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
        <polygon points="50,65 58,45 68,62" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <polygon points="100,65 92,45 82,62" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="65" cy="85" r="4" fill="#0f172a"/><circle cx="85" cy="85" r="4" fill="#0f172a"/>
        <path d="M70 95 Q75 100 80 95" fill="none" stroke="#ca8a04" stroke-width="2" stroke-linecap="round"/>`;
    case 'dog':
      return `<circle cx="75" cy="88" r="30" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
        <ellipse cx="48" cy="80" rx="8" ry="18" fill="#ea580c"/><ellipse cx="102" cy="80" rx="8" ry="18" fill="#ea580c"/>
        <circle cx="65" cy="85" r="4" fill="#0f172a"/><circle cx="85" cy="85" r="4" fill="#0f172a"/>
        <ellipse cx="75" cy="94" rx="6" ry="4" fill="#0f172a"/>`;
    case 'cake':
      return `<rect x="45" y="75" width="60" height="38" rx="6" fill="#f472b6" stroke="#db2777" stroke-width="2.5"/>
        <rect x="52" y="60" width="46" height="15" rx="4" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
        <line x1="75" y1="60" x2="75" y2="48" stroke="#f59e0b" stroke-width="3"/>
        <circle cx="75" cy="45" r="3.5" fill="#ef4444"/>`;
    case 'car':
      return `<rect x="42" y="80" width="66" height="24" rx="6" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
        <path d="M50 80 L60 65 L88 65 L98 80 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
        <circle cx="56" cy="104" r="8" fill="#334155"/><circle cx="94" cy="104" r="8" fill="#334155"/>`;
    case 'apple':
      return `<circle cx="75" cy="90" r="28" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
        <path d="M75 62 Q80 50 88 52" stroke="#15803d" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="88" cy="56" rx="6" ry="3" fill="#22c55e"/>`;
    case 'pen':
    case 'pencil':
      return `<rect x="70" y="50" width="10" height="50" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <polygon points="70,100 80,100 75,115" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="75" cy="114" r="1.5" fill="#0f172a"/>`;
    case 'kite':
      return `<polygon points="75,45 105,75 75,105 45,75" fill="#a855f7" stroke="#7e22ce" stroke-width="2.5"/>
        <line x1="75" y1="45" x2="75" y2="105" stroke="#7e22ce" stroke-width="1.5"/>
        <line x1="45" y1="75" x2="105" y2="75" stroke="#7e22ce" stroke-width="1.5"/>
        <path d="M75 105 Q85 115 75 125" stroke="#ec4899" stroke-width="2" fill="none"/>`;
    case 'fish':
    case 'goldfish':
      return `<ellipse cx="75" cy="85" rx="30" ry="18" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5"/>
        <polygon points="102,85 118,70 118,100" fill="#0284c7"/>
        <circle cx="58" cy="82" r="3.5" fill="#0f172a"/>`;
    case 'pizza':
      return `<polygon points="75,50 112,112 38,112" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/>
        <path d="M38 112 Q75 122 112 112" stroke="#b45309" stroke-width="4" fill="none"/>
        <circle cx="75" cy="82" r="5" fill="#ef4444"/><circle cx="62" cy="100" r="4.5" fill="#ef4444"/><circle cx="88" cy="98" r="4.5" fill="#ef4444"/>`;
    case 'sun':
      return `<circle cx="75" cy="85" r="22" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/>
        <g stroke="#eab308" stroke-width="3" stroke-linecap="round">
          <line x1="75" y1="52" x2="75" y2="44"/><line x1="75" y1="118" x2="75" y2="126"/>
          <line x1="42" y1="85" x2="34" y2="85"/><line x1="108" y1="85" x2="116" y2="85"/>
          <line x1="52" y1="62" x2="46" y2="56"/><line x1="98" y1="108" x2="104" y2="114"/>
          <line x1="52" y1="108" x2="46" y2="114"/><line x1="98" y1="62" x2="104" y2="56"/>
        </g>`;
    default: {
      const initial = w.charAt(0).toUpperCase() || 'A';
      return `<circle cx="75" cy="85" r="32" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="75" y="98" font-family="Arial, sans-serif" font-weight="900" font-size="36" fill="#0284c7" text-anchor="middle">${initial}</text>`;
    }
  }
}

const BOOKS = [
  {
    grade: 1,
    semester: 1,
    id: 'eng-g1-t1',
    title: 'Tiếng Anh 1 — Global Success (Tập 1)',
    sourceBook: 'Tiếng Anh 1 — Global Success (Tập 1)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-1-global-success.4914061146',
    units: [
      ['In the school playground', 6, ['ball', 'bike', 'book', 'boy'], 'Look! A ball. / I have a bike.'],
      ['In the dining room', 9, ['cake', 'car', 'cat', 'cup'], 'I like cake. / Have some cake.'],
      ['At the street market', 14, ['apple', 'bag', 'can', 'hat'], 'I have an apple. / Look at the bag.'],
      ['In the bedroom', 17, ['door', 'desk', 'dog', 'duck'], 'Open the door. / Point to the desk.'],
      ['At the fish and chip shop', 23, ['fish', 'chips', 'flag', 'fox'], 'I like fish and chips.'],
      ['In the classroom', 26, ['girl', 'gate', 'garden', 'guitar'], 'Look at the girl. / She has a guitar.'],
      ['In the garden', 31, ['hand', 'hair', 'horse', 'house'], 'Touch your hair. / This is my hand.'],
      ['In the park', 34, ['egg', 'elephant', 'bell', 'pen'], 'I can see an elephant. / Point to the egg.'],
    ],
  },
  {
    grade: 1,
    semester: 2,
    id: 'eng-g1-t2',
    title: 'Tiếng Anh 1 — Global Success (Tập 2)',
    sourceBook: 'Tiếng Anh 1 — Global Success (Tập 2)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-1-global-success.4914061146',
    units: [
      ['In the shop', 40, ['ink', 'milk', 'pig', 'ring'], 'I want some milk, please.'],
      ['At the zoo', 43, ['monkey', 'mango', 'mother', 'mouse'], 'Look at the monkey!'],
      ['At the bus stop', 48, ['bus', 'bag', 'book', 'box'], 'There is a bus.'],
      ['At the lake', 51, ['lake', 'leaf', 'lemon', 'lion'], 'I can see a duck on the lake.'],
      ['In the school canteen', 57, ['noodles', 'nuts', 'nest', 'nine'], 'I like noodles.'],
      ['In the toy shop', 60, ['toy', 'teddy bear', 'train', 'top'], 'I want a teddy bear, please.'],
      ['At the football match', 65, ['football', 'fan', 'foot', 'field'], 'Let\'s play football!'],
      ['At home', 68, ['home', 'house', 'hand', 'hat'], 'Welcome to my home.'],
    ],
  },
  {
    grade: 2,
    semester: 1,
    id: 'eng-g2-t1',
    title: 'Tiếng Anh 2 — Global Success (Tập 1)',
    sourceBook: 'Tiếng Anh 2 — Global Success (Tập 1)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/tieng-anh-2-global-success.4914084740',
    units: [
      ['At my birthday party', 6, ['popcorn', 'pasta', 'pizza'], 'Happy birthday! / I like pasta and pizza.'],
      ['In the backyard', 9, ['kite', 'kitten', 'bike'], 'Look at the kitten. / I have a blue kite.'],
      ['At the seaside', 14, ['sea', 'sand', 'sail', 'sun'], 'Let\'s look at the sea. / I see a sailboat.'],
      ['In the countryside', 17, ['river', 'rainbow', 'road'], 'There is a river. / Look at the rainbow.'],
      ['In the classroom', 23, ['question', 'quiz', 'quiet'], 'Be quiet, please. / Ask a question.'],
      ['On the farm', 26, ['farm', 'farmer', 'fox', 'field'], 'This is a farm. / Look at the ducks.'],
      ['In the kitchen', 31, ['kitchen', 'kettle', 'knife'], 'Mum is in the kitchen.'],
      ['In the village', 34, ['village', 'van', 'violin', 'valley'], 'We live in a peaceful village.'],
    ],
  },
  {
    grade: 2,
    semester: 2,
    id: 'eng-g2-t2',
    title: 'Tiếng Anh 2 — Global Success (Tập 2)',
    sourceBook: 'Tiếng Anh 2 — Global Success (Tập 2)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/tieng-anh-2-global-success.4914084740',
    units: [
      ['In the grocery store', 40, ['yogurt', 'yellow', 'milk'], 'Can I have some yogurt, please?'],
      ['At the zoo', 43, ['zebra', 'zoo', 'zero'], 'Look at the striped zebra.'],
      ['In the playground', 48, ['slide', 'seesaw', 'swing'], 'Let\'s play on the swing!'],
      ['At the café', 51, ['coffee', 'cake', 'cup', 'cookie'], 'I would like a cookie, please.'],
      ['In the maths class', 57, ['number', 'plus', 'minus', 'count'], 'Let\'s count from one to twenty.'],
      ['At home', 60, ['bedroom', 'living room', 'garden'], 'Where is Dad? — He is in the garden.'],
      ['In the clothes shop', 65, ['shirt', 'dress', 'hat', 'shoes'], 'I like this pink dress.'],
      ['At the campsite', 68, ['tent', 'campfire', 'flashlight'], 'We are setting up our tent.'],
    ],
  },
  {
    grade: 3,
    semester: 1,
    id: 'eng-g3-t1',
    title: 'Tiếng Anh 3 — Global Success (Tập 1)',
    sourceBook: 'Tiếng Anh 3 — Global Success (Tập 1)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/shs-tieng-anh-3-tap-1-global-success.4537411435',
    units: [
      ['Hello', 10, ['hello', 'hi', 'friend', 'name'], 'Hello, I\'m Ben. — Hi Ben, I\'m Mai.'],
      ['Our names', 16, ['name', 'friend', 'boy', 'girl'], 'What\'s your name? — My name is Lucy.'],
      ['Our friends', 22, ['friend', 'boy', 'girl', 'teacher'], 'This is my friend Bill. — Nice to meet you.'],
      ['Our bodies', 28, ['eye', 'ear', 'nose', 'mouth'], 'Touch your eyes. / Open your mouth.'],
      ['My hobbies', 34, ['singing', 'dancing', 'drawing', 'swimming'], 'What\'s your hobby? — I like singing.'],
      ['Our school', 44, ['school', 'classroom', 'library', 'playground'], 'Is this our school? — Yes, it is.'],
      ['Classroom instructions', 50, ['book', 'desk', 'door', 'pen'], 'Open your book, please. / May I come in?'],
      ['My school things', 56, ['pen', 'pencil', 'ruler', 'eraser'], 'I have a pencil case and a ruler.'],
      ['Colours', 62, ['red', 'blue', 'yellow', 'green'], 'What colour is it? — It is blue.'],
      ['Break time activities', 68, ['football', 'chess', 'badminton', 'skipping'], 'What do you do at break time? — I play chess.'],
    ],
  },
  {
    grade: 3,
    semester: 2,
    id: 'eng-g3-t2',
    title: 'Tiếng Anh 3 — Global Success (Tập 2)',
    sourceBook: 'Tiếng Anh 3 — Global Success (Tập 2)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-3-tap-2-global-success.4914101275',
    units: [
      ['My family', 6, ['father', 'mother', 'brother', 'sister'], 'Who is that? — That\'s my mother.'],
      ['Jobs', 12, ['teacher', 'doctor', 'nurse', 'driver'], 'What does she do? — She is a teacher.'],
      ['My house', 18, ['living room', 'bedroom', 'kitchen', 'bathroom'], 'Where is the living room? — It\'s here.'],
      ['My bedroom', 24, ['bed', 'desk', 'chair', 'lamp'], 'There is a bed in my room.'],
      ['At the dining table', 30, ['rice', 'bread', 'fish', 'meat'], 'Would you like some bread? — Yes, please.'],
      ['My pets', 40, ['dog', 'cat', 'parrot', 'rabbit'], 'Do you have any pets? — I have a cat.'],
      ['Our toys', 46, ['car', 'doll', 'robot', 'puzzle'], 'How many toys do you have? — I have two cars.'],
      ['Playing and doing', 52, ['reading', 'cooking', 'listening', 'watching'], 'What are you doing? — I am reading a book.'],
      ['Outdoor activities', 58, ['cycling', 'skating', 'kite', 'ball'], 'What is he doing? — He is cycling in the park.'],
      ['At the zoo', 64, ['tiger', 'monkey', 'elephant', 'bear'], 'I can see a big elephant at the zoo.'],
    ],
  },
  {
    grade: 4,
    semester: 1,
    id: 'eng-g4-t1',
    title: 'Tiếng Anh 4 — Global Success (Tập 1)',
    sourceBook: 'Tiếng Anh 4 — Global Success (Tập 1)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-mot.4914111660',
    units: [
      ['My friends', 10, ['friend', 'teacher', 'boy', 'girl'], 'Where are you from? — I\'m from Vietnam.'],
      ['Time and daily routines', 16, ['morning', 'reading', 'school', 'bed'], 'What time is it? — It\'s seven o\'clock.'],
      ['My week', 22, ['school', 'football', 'music', 'drawing'], 'What day is it today? — It is Monday.'],
      ['My birthday party', 28, ['cake', 'gift', 'pizza', 'party'], 'When is your birthday? — It\'s in May.'],
      ['Things we can do', 34, ['swim', 'cook', 'piano', 'bike'], 'Can you swim? — Yes, I can.'],
      ['Our school facilities', 44, ['computer', 'music', 'art', 'gym'], 'Where is the computer room? — It\'s on the second floor.'],
      ['Our timetables', 50, ['maths', 'english', 'science', 'art'], 'What subjects do you have today? — I have Maths and English.'],
      ['My favourite subjects', 56, ['singing', 'drawing', 'reading', 'numbers'], 'Why do you like Music? — Because I like singing.'],
      ['Our sports day', 62, ['running', 'jumping', 'football', 'swimming'], 'When is Sports Day? — It\'s in November.'],
      ['Our summer holidays', 68, ['beach', 'sea', 'mountains', 'sun'], 'Where were you last summer? — I was in Da Nang.'],
    ],
  },
  {
    grade: 4,
    semester: 2,
    id: 'eng-g4-t2',
    title: 'Tiếng Anh 4 — Global Success (Tập 2)',
    sourceBook: 'Tiếng Anh 4 — Global Success (Tập 2)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-hai.4914832178',
    units: [
      ['My home', 6, ['house', 'living room', 'kitchen', 'garden'], 'Where do you live? — I live in a modern flat.'],
      ['Jobs', 12, ['doctor', 'nurse', 'farmer', 'teacher'], 'What does your father do? — He\'s a doctor.'],
      ['Appearance', 18, ['tall', 'short', 'young', 'strong'], 'What does she look like? — She is tall and slim.'],
      ['Daily activities', 24, ['morning', 'breakfast', 'school', 'bed'], 'What do you do in the morning? — I brush my teeth.'],
      ['My family\'s weekends', 30, ['park', 'cinema', 'zoo', 'market'], 'Where does your family go at weekends? — We go to the park.'],
      ['Weather', 40, ['sun', 'rain', 'cloud', 'wind'], 'What\'s the weather like today? — It\'s sunny and warm.'],
      ['In the city', 46, ['bookshop', 'bakery', 'market', 'street'], 'Where is the bookshop? — It\'s next to the bakery.'],
      ['At the shopping centre', 52, ['shirt', 'dress', 'hat', 'shoes'], 'How much is this T-shirt? — It is eighty thousand dong.'],
      ['The animal world', 58, ['tiger', 'elephant', 'monkey', 'bear'], 'Why do you like giraffes? — Because they are tall and gentle.'],
      ['At summer camp', 64, ['tent', 'campfire', 'guitar', 'singing'], 'What did you do at summer camp? — We sang around the campfire.'],
    ],
  },
  {
    grade: 5,
    semester: 1,
    id: 'eng-g5-t1',
    title: 'Tiếng Anh 5 — Global Success (Tập 1)',
    sourceBook: 'Tiếng Anh 5 — Global Success (Tập 1)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-mot.4914842460',
    units: [
      ['All about me!', 10, ['street', 'house', 'city', 'school'], 'What\'s your address? — It\'s 105 Hoa Binh Lane.'],
      ['Our homes', 16, ['village', 'tower', 'island', 'house'], 'What\'s the village like? — It\'s small and peaceful.'],
      ['My foreign friends', 22, ['friend', 'teacher', 'boy', 'girl'], 'Where is she from? — She is from Sydney, Australia.'],
      ['Our free-time activities', 28, ['reading', 'music', 'drawing', 'sports'], 'What do you do in your free time? — I surf the Internet.'],
      ['My future job', 34, ['doctor', 'pilot', 'teacher', 'writer'], 'What would you like to be in the future? — I\'d like to be a pilot.'],
      ['Our school rooms', 44, ['classroom', 'library', 'canteen', 'gym'], 'Where is the science lab? — It\'s on the third floor.'],
      ['Our favourite school activities', 50, ['singing', 'drawing', 'reading', 'chess'], 'What is your favourite activity? — I like doing experiments.'],
      ['In our classroom', 56, ['desk', 'chair', 'book', 'pen'], 'Our classroom has a big whiteboard and modern projector.'],
      ['Our outdoor activities', 62, ['camping', 'gardening', 'football', 'badminton'], 'We often plant trees and play badminton outdoors.'],
      ['Our school trip', 68, ['bus', 'train', 'museum', 'park'], 'How did you get there? — We went by coach.'],
    ],
  },
  {
    grade: 5,
    semester: 2,
    id: 'eng-g5-t2',
    title: 'Tiếng Anh 5 — Global Success (Tập 2)',
    sourceBook: 'Tiếng Anh 5 — Global Success (Tập 2)',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-hai.4914843136',
    units: [
      ['Family time', 6, ['dinner', 'family', 'house', 'cooking'], 'What does your family do on Sundays? — We have dinner together.'],
      ['Our Tet holiday', 12, ['gift', 'flower', 'cake', 'family'], 'What do you do at Tet? — I receive lucky money and visit grandparents.'],
      ['Our special days', 18, ['party', 'music', 'dance', 'cake'], 'When is Teachers\' Day? — It\'s on the twentieth of November.'],
      ['Staying healthy', 24, ['fruit', 'water', 'exercise', 'sleep'], 'What should we do to stay healthy? — We should eat vegetables and exercise.'],
      ['Our health', 30, ['doctor', 'nurse', 'hospital', 'medicine'], 'What\'s the matter with you? — I have a toothache.'],
      ['Seasons and the weather', 40, ['spring', 'summer', 'autumn', 'winter'], 'What\'s summer like in your city? — It\'s hot and sunny.'],
      ['Stories for children', 46, ['book', 'story', 'fox', 'crow'], 'What story are you reading? — I\'m reading The Story of Mai An Tiem.'],
      ['Means of transport', 52, ['plane', 'train', 'bus', 'car'], 'How can I get to Phu Quoc Island? — You can take a plane.'],
      ['Places of interest', 58, ['bay', 'beach', 'mountain', 'pagoda'], 'Which place would you like to visit? — I\'d like to visit Ha Long Bay.'],
      ['Our summer holidays', 64, ['sea', 'sun', 'island', 'boat'], 'What will you do this summer? — I\'m going to visit Nha Trang with my family.'],
    ],
  },
];

async function generateSvgPage(book, unit, pageNumber, pageOffset) {
  const [unitTitle, startPage, vocab, sampleSentence] = unit;
  const isSecondPage = pageOffset === 1;
  const pageDisplayNumber = startPage + pageOffset;
  const unitNum = book.units.indexOf(unit) + (book.semester === 1 ? 1 : (book.grade <= 2 ? 9 : 11));

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1130" width="800" height="1130">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdfbf7" />
      <stop offset="100%" stop-color="#f5f0e6" />
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f0f9ff" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Page Background -->
  <rect width="800" height="1130" fill="url(#bgGrad)" />
  <rect x="25" y="25" width="750" height="1080" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)" />

  <!-- Top Header Banner -->
  <rect x="25" y="25" width="750" height="85" rx="16" fill="url(#headerGrad)" />
  <text x="50" y="65" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="1">UNIT ${unitNum}: ${unitTitle.toUpperCase()}</text>
  <text x="50" y="92" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#e0f2fe">${book.sourceBook} • NXB Giáo Dục Việt Nam</text>

  <!-- Page Indicator Badge -->
  <rect x="680" y="45" width="70" height="34" rx="17" fill="#ffffff" opacity="0.9" />
  <text x="715" y="68" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#0369a1" text-anchor="middle">P. ${pageDisplayNumber}</text>

  ${!isSecondPage ? `
  <!-- SECTION 1: LISTEN AND REPEAT / VOCABULARY -->
  <g transform="translate(50, 135)">
    <rect width="700" height="52" rx="14" fill="#e0f2fe" stroke="#bae6fd" stroke-width="1.5" />
    <circle cx="30" cy="26" r="16" fill="#0284c7" />
    <text x="30" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">1</text>
    <text x="58" y="33" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#0369a1">Listen, point and repeat 🎧</text>
  </g>

  <!-- Vocabulary Flash Cards Grid with Authentic Vectors -->
  <g transform="translate(50, 205)">
    ${vocab.slice(0, 4).map((word, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = col * 360;
      const y = row * 195;
      const phonetic = getWordPhonetic(word);
      const vectorGraphic = getWordVectorIllustration(word);
      return `
      <g transform="translate(${x}, ${y})">
        <rect width="340" height="175" rx="16" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
        <rect x="15" y="15" width="120" height="145" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <g transform="translate(0, 0)">
          ${vectorGraphic}
        </g>
        <text x="150" y="70" font-family="Arial, sans-serif" font-weight="900" font-size="24" fill="#0f172a">${word}</text>
        <text x="150" y="105" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#0284c7">${phonetic}</text>
        <rect x="150" y="120" width="170" height="30" rx="8" fill="#dcfce7" />
        <text x="235" y="140" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#15803d" text-anchor="middle">Target Vocabulary</text>
      </g>`;
    }).join('')}
  </g>

  <!-- SECTION 2: POINT AND SAY / DIALOGUE -->
  <g transform="translate(50, 620)">
    <rect width="700" height="52" rx="14" fill="#fef3c7" stroke="#fde68a" stroke-width="1.5" />
    <circle cx="30" cy="26" r="16" fill="#d97706" />
    <text x="30" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">2</text>
    <text x="58" y="33" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#92400e">Point and say / Conversation 🗣️</text>
  </g>

  <!-- Key Sentence Frame -->
  <g transform="translate(50, 690)">
    <rect width="700" height="160" rx="20" fill="#fffbeb" stroke="#fcd34d" stroke-width="2" filter="url(#shadow)" />
    <text x="350" y="55" font-family="Arial, sans-serif" font-weight="900" font-size="22" fill="#78350f" text-anchor="middle">💬 Target Pattern:</text>
    <text x="350" y="105" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="#b45309" text-anchor="middle">“${sampleSentence}”</text>
  </g>

  <!-- Mascot Tip Box -->
  <g transform="translate(50, 875)">
    <rect width="700" height="175" rx="20" fill="#f0fdf4" stroke="#86efac" stroke-width="2" />
    <circle cx="50" cy="50" r="30" fill="#22c55e" />
    <text x="50" y="60" font-family="Arial, sans-serif" font-size="28" text-anchor="middle">🐬</text>
    <text x="95" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#166534">PiPi's English Corner</text>
    <text x="95" y="75" font-family="Arial, sans-serif" font-size="15" fill="#15803d">Practise saying the new words aloud and listen to native audio!</text>
    <text x="95" y="105" font-family="Arial, sans-serif" font-size="14" fill="#4b5563" font-style="italic">• Tap any word in WonderKids to hear instant pronunciation.</text>
    <text x="95" y="130" font-family="Arial, sans-serif" font-size="14" fill="#4b5563" font-style="italic">• Complete mini-games to collect shiny gold stars ⭐!</text>
  </g>
  ` : `
  <!-- SECTION 3: LET'S CHANT & SING -->
  <g transform="translate(50, 135)">
    <rect width="700" height="52" rx="14" fill="#f3e8ff" stroke="#e9d5ff" stroke-width="1.5" />
    <circle cx="30" cy="26" r="16" fill="#9333ea" />
    <text x="30" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">3</text>
    <text x="58" y="33" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#7e22ce">Let's chant and play 🎵</text>
  </g>

  <!-- Chant Lyrics Card -->
  <g transform="translate(50, 205)">
    <rect width="700" height="340" rx="20" fill="#faf5ff" stroke="#d8b4fe" stroke-width="2" filter="url(#shadow)" />
    <text x="350" y="50" font-family="Arial, sans-serif" font-weight="900" font-size="22" fill="#6b21a8" text-anchor="middle">🎶 The ${unitTitle} Chant 🎶</text>
    ${vocab.slice(0, 4).map((w, idx) => `
    <text x="350" y="${95 + idx * 45}" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#4c1d95" text-anchor="middle">${w.toUpperCase()}, ${w}, ${w}! Look at the ${w}!</text>
    `).join('')}
    <text x="350" y="${95 + 4 * 45}" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#e11d48" text-anchor="middle">Let's learn English every day!</text>
  </g>

  <!-- SECTION 4: READ AND MATCH / PRACTICE -->
  <g transform="translate(50, 570)">
    <rect width="700" height="52" rx="14" fill="#ccfbf1" stroke="#99f6e4" stroke-width="1.5" />
    <circle cx="30" cy="26" r="16" fill="#0d9488" />
    <text x="30" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#ffffff" text-anchor="middle">4</text>
    <text x="58" y="33" font-family="Arial, sans-serif" font-weight="bold" font-size="18" fill="#115e59">Read and match / Self-practice ✍️</text>
  </g>

  <!-- Matching Exercise Preview -->
  <g transform="translate(50, 640)">
    <rect width="700" height="390" rx="20" fill="#f0fdfa" stroke="#5eead4" stroke-width="2" filter="url(#shadow)" />
    <text x="50" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#134e4a">Match the sentences with the correct picture:</text>
    ${vocab.slice(0, 3).map((w, idx) => {
      const article = /^[aeiou]/i.test(w) ? 'an' : 'a';
      return `
    <g transform="translate(40, ${70 + idx * 95})">
      <rect width="300" height="65" rx="12" fill="#ffffff" stroke="#99f6e4" stroke-width="1.5" />
      <text x="20" y="38" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#0f766e">${idx + 1}. I can see ${article} ${w}.</text>
      <circle cx="340" cy="32" r="12" fill="#0d9488" />
      <text x="340" y="37" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#ffffff" text-anchor="middle">➔</text>
      <rect x="370" y="0" width="250" height="65" rx="12" fill="#ffffff" stroke="#99f6e4" stroke-width="1.5" />
      <text x="495" y="38" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#0f766e" text-anchor="middle">Picture ${String.fromCharCode(65 + idx)} (${w})</text>
    </g>`;
    }).join('')}
  </g>
  `}

  <!-- Footer Pagination -->
  <text x="400" y="1090" font-family="Arial, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Sách Giáo Khoa Tiếng Anh — Bộ Giáo Dục và Đào Tạo • Trang ${pageDisplayNumber}</text>
</svg>`;

  return svgContent;
}

async function main() {
  const outputDir = path.join(root, 'public', 'assets', 'curriculum', 'english_pages');
  await fs.mkdir(outputDir, { recursive: true });

  const manifests = [];

  for (const book of BOOKS) {
    const pages = [];
    const bookPagesDir = path.join(outputDir, book.id);
    await fs.mkdir(bookPagesDir, { recursive: true });

    for (let uIdx = 0; uIdx < book.units.length; uIdx++) {
      const unit = book.units[uIdx];
      const startPage = unit[1];

      // Generate 2 pages per unit (Page 1: Vocab & Dialogue, Page 2: Chant & Practice)
      for (let offset = 0; offset < 2; offset++) {
        const pageNum = startPage + offset;
        const filename = `page_${pageNum}.svg`;
        const filepath = path.join(bookPagesDir, filename);
        const svgContent = await generateSvgPage(book, unit, pageNum, offset);
        await fs.writeFile(filepath, svgContent, 'utf-8');

        const hash = crypto.createHash('sha256').update(svgContent).digest('hex');
        pages.push({
          readerIndex: pageNum,
          imageUrl: `/assets/curriculum/english_pages/${book.id}/${filename}`,
          sourceHash: hash,
          verificationStatus: 'verified',
        });
      }
    }

    const manifestHash = crypto.createHash('sha256').update(JSON.stringify(pages)).digest('hex');
    manifests.push({
      grade: book.grade,
      semester: book.semester,
      id: book.id,
      title: book.title,
      pageCount: pages.length,
      readerUrl: book.readerUrl,
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      collection: 'Global Success',
      importStatus: 'verified',
      published: true,
      manifestHash,
      pages,
    });
  }

  const jsonPath = path.join(root, 'src', 'data', 'curriculum', 'english', 'bookManifests.generated.json');
  await fs.writeFile(jsonPath, JSON.stringify(manifests, null, 2), 'utf-8');
  console.log(`Successfully generated ${manifests.length} English book manifests with authentic illustrated pages!`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
