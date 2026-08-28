import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const PASSAGES_DATA = {
  // ================= GRADE 1 SEMESTER 1 (Supplementary Passages) =================
  'eng-g1-u1': {
    title: 'Unit 1: In the school playground',
    genre: 'poem',
    content: [
      'Look at the boy in the playground.',
      'He has a shiny red ball.',
      'He rides a bright blue bike.',
      'He reads a wonderful story book.',
      'Let\'s play and learn together!'
    ],
    vocabularyNotes: [
      { word: 'ball', meaning: 'quả bóng (dùng để chơi đá bóng, ném bóng)' },
      { word: 'bike', meaning: 'xe đạp (phương tiện hai bánh bé đi dạo)' },
      { word: 'book', meaning: 'cuốn sách (chứa các câu chuyện và bài học bổ ích)' },
      { word: 'boy', meaning: 'cậu bé, bạn nam' }
    ]
  },
  'eng-g1-u2': {
    title: 'Unit 2: In the dining room',
    genre: 'prose',
    content: [
      'Welcome to the dining room!',
      'Mother brings a sweet birthday cake.',
      'The little ginger cat sits by the chair.',
      'Baby plays with a toy car on the floor.',
      'Have some cake and a cup of milk, please!'
    ],
    vocabularyNotes: [
      { word: 'cake', meaning: 'bánh ngọt, bánh kem sinh nhật' },
      { word: 'car', meaning: 'xe ô tô, xe hơi' },
      { word: 'cat', meaning: 'con mèo (bạn mèo nhỏ đáng yêu)' },
      { word: 'cup', meaning: 'cái tách, cái cốc uống nước' }
    ]
  },
  'eng-g1-u3': {
    title: 'Unit 3: At the street market',
    genre: 'prose',
    content: [
      'We are walking in the bustling street market.',
      'Look at the fresh red apples in the basket.',
      'Mother carries a colorful shopping bag.',
      'Grandpa wears a handsome sun hat.',
      'We buy sweet fruits for everyone!'
    ],
    vocabularyNotes: [
      { word: 'apple', meaning: 'quả táo (trái cây màu đỏ ngọt giòn)' },
      { word: 'bag', meaning: 'cái túi xách, ba lô' },
      { word: 'can', meaning: 'lon nước ngọt, hộp thiếc' },
      { word: 'hat', meaning: 'cái mũ, cái nón đội đầu' }
    ]
  },
  'eng-g1-u4': {
    title: 'Unit 4: In the bedroom',
    genre: 'prose',
    content: [
      'This is my neat and cozy bedroom.',
      'Please open the door and come in.',
      'My study desk is next to the bright window.',
      'The friendly little dog sleeps on the carpet.',
      'I keep my bedroom clean every day!'
    ],
    vocabularyNotes: [
      { word: 'door', meaning: 'cánh cửa ra vào' },
      { word: 'desk', meaning: 'bàn học, bàn làm việc' },
      { word: 'dog', meaning: 'con chó, bạn cún cưng' },
      { word: 'duck', meaning: 'con vịt bơi dưới nước' }
    ]
  },
  'eng-g1-u5': {
    title: 'Unit 5: At the fish and chip shop',
    genre: 'prose',
    content: [
      'Letter I/i phonics: Learn words with the short /ɪ/ sound.',
      'We visit a fish and chip shop. I like fish and crispy chips.',
      'I like fish, milk and chicken for lunch.',
      'A colorful flag waves outside the window.',
      'The food smells so delicious!'
    ],
    vocabularyNotes: [
      { word: 'fish', meaning: 'con cá, món cá rán giòn' },
      { word: 'chips', meaning: 'khoai tây chiên giòn tan' },
      { word: 'milk', meaning: 'sữa tươi dinh dưỡng' },
      { word: 'chicken', meaning: 'thịt gà, gà rán' }
    ]
  },
  'eng-g1-u6': {
    title: 'Unit 6: In the classroom',
    genre: 'prose',
    content: [
      'Good morning! Welcome to our happy classroom.',
      'Look at the smiling girl sitting in front.',
      'She has an acoustic guitar in her hands.',
      'Outside the gate, the flowers bloom in the garden.',
      'Let\'s sing an English song together!'
    ],
    vocabularyNotes: [
      { word: 'girl', meaning: 'cô bé, bạn nữ' },
      { word: 'guitar', meaning: 'đàn ghi-ta' },
      { word: 'gate', meaning: 'cổng trường, cổng nhà' },
      { word: 'garden', meaning: 'khu vườn xanh mát' }
    ]
  },
  'eng-g1-u7': {
    title: 'Unit 7: In the garden',
    genre: 'prose',
    content: [
      'Grandpa and I walk in the sunny garden.',
      'Touch your hair and wave your hand to say hello.',
      'A handsome brown horse runs across the green field.',
      'Our cozy house looks beautiful in the morning light.',
      'Nature is full of wonderful wonders!'
    ],
    vocabularyNotes: [
      { word: 'hand', meaning: 'bàn tay' },
      { word: 'hair', meaning: 'mái tóc' },
      { word: 'horse', meaning: 'con ngựa phi nhanh' },
      { word: 'house', meaning: 'ngôi nhà ấm áp' }
    ]
  },
  'eng-g1-u8': {
    title: 'Unit 8: In the park',
    genre: 'prose',
    content: [
      'It is a sunny Sunday in the green park.',
      'Look! An elephant eats fresh grass over there.',
      'A tiny brown bird sits near a speckled egg in the nest.',
      'The school bell rings softly in the distance.',
      'We take our notebook and pen to draw nature.'
    ],
    vocabularyNotes: [
      { word: 'egg', meaning: 'quả trứng' },
      { word: 'elephant', meaning: 'con voi to lớn' },
      { word: 'bell', meaning: 'cái chuông reo' },
      { word: 'pen', meaning: 'cây bút mực' }
    ]
  },

  // ================= GRADE 1 SEMESTER 2 =================
  'eng-g1-u9': {
    title: 'Unit 9: In the shop',
    genre: 'prose',
    content: [
      'Ben and Mum are at the grocery shop.',
      'Ben: "Good morning! Can I have some fresh milk, please?"',
      'Shopkeeper: "Here you are, young boy. Fresh and cold milk for you."',
      'Ben: "Thank you very much! Look at that cute pink pig toy, Mum!"',
      'Mum: "It is very adorable, Ben."'
    ],
    vocabularyNotes: [
      { word: 'milk', meaning: 'sữa tươi dinh dưỡng' },
      { word: 'pig', meaning: 'con lợn, con heo' },
      { word: 'ink', meaning: 'mực viết' },
      { word: 'ring', meaning: 'chiếc nhẫn đeo tay' }
    ]
  },
  'eng-g1-u10': {
    title: 'Unit 10: At the zoo',
    genre: 'prose',
    content: [
      'Our class goes to the city zoo today.',
      'Look at the lively monkey swinging on the tree branches!',
      'Mother gives baby a sweet yellow mango.',
      'A tiny grey mouse scampers near the flowers.',
      'We love exploring the animal world!'
    ],
    vocabularyNotes: [
      { word: 'monkey', meaning: 'con khỉ nhanh nhẹn' },
      { word: 'mango', meaning: 'quả xoài chín vàng ngọt' },
      { word: 'mouse', meaning: 'con chuột' },
      { word: 'mother', meaning: 'mẹ, người mẹ yêu quý' }
    ]
  },
  'eng-g1-u11': {
    title: 'Unit 11: At the bus stop',
    genre: 'prose',
    content: [
      'Mai and her brother wait at the bus stop.',
      'Here comes the big yellow school bus!',
      'Mai holds her school bag and textbook carefully.',
      'The driver opens the bus door with a warm smile.',
      '"Good morning students! Hop on the bus!"'
    ],
    vocabularyNotes: [
      { word: 'bus', meaning: 'xe buýt công cộng' },
      { word: 'bag', meaning: 'cặp sách, túi đựng đồ' },
      { word: 'box', meaning: 'chiếc hộp đựng đồ' },
      { word: 'stop', meaning: 'trạm dừng, điểm dừng xe' }
    ]
  },
  'eng-g1-u12': {
    title: 'Unit 12: At the lake',
    genre: 'poem',
    content: [
      'Look at the clear blue lake under the sun.',
      'A yellow leaf floats gently on the water.',
      'Two white ducks swim gracefully side by side.',
      'A small wooden boat rests near the shore.',
      'The breeze is cool and peaceful today.'
    ],
    vocabularyNotes: [
      { word: 'lake', meaning: 'hồ nước' },
      { word: 'leaf', meaning: 'chiếc lá cây' },
      { word: 'lemon', meaning: 'quả chanh vàng' },
      { word: 'lion', meaning: 'sư tử dũng mãnh' }
    ]
  },
  'eng-g1-u13': {
    title: 'Unit 13: In the school canteen',
    genre: 'prose',
    content: [
      'It is lunchtime in the bright school canteen.',
      'Nam: "I would like hot noodles and crunchy nuts, please."',
      'Teacher: "Here is your nutritious lunch, Nam."',
      'A little sparrow builds a nest outside the canteen window.',
      'Eating healthy food makes us strong and smart!'
    ],
    vocabularyNotes: [
      { word: 'noodles', meaning: 'mì, phở, bún sợi' },
      { word: 'nuts', meaning: 'các loại hạt ngũ cốc' },
      { word: 'nest', meaning: 'tổ chim trên cành cây' },
      { word: 'nine', meaning: 'số 9' }
    ]
  },
  'eng-g1-u14': {
    title: 'Unit 14: In the toy shop',
    genre: 'prose',
    content: [
      'Lucy steps into the wonderful toy shop with her father.',
      'Lucy: "Dad, look at that soft brown teddy bear on the top shelf!"',
      'Father: "Would you like to have it for your good grades?"',
      'Lucy: "Yes, please! I love this teddy bear and the toy train!"',
      'The shopkeeper wraps the gift with a sparkling ribbon.'
    ],
    vocabularyNotes: [
      { word: 'toy', meaning: 'đồ chơi trẻ em' },
      { word: 'teddy bear', meaning: 'gấu bông nhồi bông' },
      { word: 'train', meaning: 'xe lửa, tàu hỏa đồ chơi' },
      { word: 'top', meaning: 'con quay đồ chơi, đỉnh trên cùng' }
    ]
  },
  'eng-g1-u15': {
    title: 'Unit 15: At the football match',
    genre: 'prose',
    content: [
      'The school football match is exciting today!',
      'The football players wear vibrant red and blue shirts.',
      'Minh kicks the football straight into the net.',
      '"GOAL! What an amazing goal!" the crowd cheers loudly.',
      'Everyone celebrates the victory with high-fives!'
    ],
    vocabularyNotes: [
      { word: 'football', meaning: 'môn bóng đá, quả bóng đá' },
      { word: 'fan', meaning: 'người hâm mộ, cổ động viên' },
      { word: 'foot', meaning: 'bàn chân' },
      { word: 'field', meaning: 'sân cỏ, sân bóng' }
    ]
  },
  'eng-g1-u16': {
    title: 'Unit 16: At home',
    genre: 'prose',
    content: [
      'Home is the sweetest place of all.',
      'Father waters the flowers in front of the house.',
      'Mother and I prepare dinner in the warm kitchen.',
      'We sit together, share stories and laugh happily.',
      'I love my warm family and peaceful home.'
    ],
    vocabularyNotes: [
      { word: 'home', meaning: 'tổ ấm gia đình' },
      { word: 'house', meaning: 'ngôi nhà' },
      { word: 'hand', meaning: 'bàn tay' },
      { word: 'hat', meaning: 'cái mũ' }
    ]
  },

  // ================= GRADE 2 SEMESTER 1 (Units 1-8) =================
  'eng-g2-u1': {
    title: 'Unit 1: At my birthday party',
    genre: 'prose',
    content: [
      'Today is Peter\'s seventh birthday party!',
      'Friends arrive with colorful gift boxes and balloons.',
      'Peter: "Welcome to my party! Let\'s enjoy delicious pizza and pasta!"',
      'Mai: "Happy birthday, Peter! The popcorn smells so yummy!"',
      'Everyone sings the Happy Birthday song and makes a wish.'
    ],
    vocabularyNotes: [
      { word: 'popcorn', meaning: 'bỏng ngô thơm lừng' },
      { word: 'pasta', meaning: 'mì Ý sốt cà chua' },
      { word: 'pizza', meaning: 'bánh pizza phô mai nướng' },
      { word: 'party', meaning: 'bữa tiệc sinh nhật' }
    ]
  },
  'eng-g2-u2': {
    title: 'Unit 2: In the backyard',
    genre: 'prose',
    content: [
      'The sun shines warmly in the green backyard.',
      'A fluffy white kitten plays playfully with a ball of wool.',
      'Tony rides his new red bicycle along the garden path.',
      'High in the clear sky, a colorful diamond kite soars.',
      'Spending time in the fresh backyard is full of joy!'
    ],
    vocabularyNotes: [
      { word: 'kite', meaning: 'con diều bay trên trời' },
      { word: 'kitten', meaning: 'mèo con nhỏ xíu' },
      { word: 'bike', meaning: 'xe đạp' },
      { word: 'backyard', meaning: 'sân sau ngôi nhà' }
    ]
  },
  'eng-g2-u3': {
    title: 'Unit 3: At the seaside',
    genre: 'poem',
    content: [
      'Golden sand beneath our bare feet,',
      'The blue sea waves roll and meet.',
      'A white sailboat glides far away,',
      'Under the warm and cheerful sun of May.',
      'We build sandcastles on the lovely shore.'
    ],
    vocabularyNotes: [
      { word: 'sea', meaning: 'biển cả mênh mông' },
      { word: 'sand', meaning: 'bãi cát vàng mịn' },
      { word: 'sail', meaning: 'cánh buồm, lướt buồm' },
      { word: 'sun', meaning: 'mặt trời rực rỡ' }
    ]
  },
  'eng-g2-u4': {
    title: 'Unit 4: In the countryside',
    genre: 'prose',
    content: [
      'We visit our grandparents in the peaceful countryside.',
      'A calm blue river flows gently through the green fields.',
      'After the light summer shower, a bright rainbow appears in the sky.',
      'We walk along the country road and breathe fresh air.',
      'Life in the countryside is so relaxing and serene!'
    ],
    vocabularyNotes: [
      { word: 'river', meaning: 'dòng sông' },
      { word: 'rainbow', meaning: 'cầu vồng nhiều màu' },
      { word: 'road', meaning: 'con đường quê' },
      { word: 'countryside', meaning: 'vùng nông thôn yên bình' }
    ]
  },
  'eng-g2-u5': {
    title: 'Unit 5: In the classroom',
    genre: 'prose',
    content: [
      'Teacher: "Good morning class! Today we have an exciting English quiz."',
      'Students: "We are ready, teacher!"',
      'Teacher: "Please raise your hand if you have a question."',
      'The classroom is quiet as students think carefully.',
      'Learning together is fun and rewarding!'
    ],
    vocabularyNotes: [
      { word: 'question', meaning: 'câu hỏi' },
      { word: 'quiz', meaning: 'câu đố, bài kiểm tra nhanh' },
      { word: 'quiet', meaning: 'yên lặng, trật tự' },
      { word: 'classroom', meaning: 'lớp học' }
    ]
  },
  'eng-g2-u6': {
    title: 'Unit 6: On the farm',
    genre: 'prose',
    content: [
      'Uncle Ba is a hardworking farmer on a big green farm.',
      'He grows sweet corn, fresh tomatoes and golden wheat in the field.',
      'In the morning, he feeds the chickens, ducks and cows.',
      'We help him pick ripe red apples in the orchard.',
      'A day on the farm is full of energy and smiles!'
    ],
    vocabularyNotes: [
      { word: 'farm', meaning: 'nông trại, trang trại' },
      { word: 'farmer', meaning: 'bác nông dân' },
      { word: 'field', meaning: 'cánh đồng xanh' },
      { word: 'duck', meaning: 'con vịt' }
    ]
  },
  'eng-g2-u7': {
    title: 'Unit 7: In the kitchen',
    genre: 'prose',
    content: [
      'Mother is busy cooking a delicious meal in the kitchen.',
      'The silver kettle whistles on the stove with boiling water.',
      'Mother slices fresh carrots with a kitchen knife carefully.',
      'The kitchen smells wonderful with warm soup and bread.',
      'We set the table and enjoy dinner together.'
    ],
    vocabularyNotes: [
      { word: 'kitchen', meaning: 'nhà bếp' },
      { word: 'kettle', meaning: 'ấm đun nước' },
      { word: 'knife', meaning: 'con dao thái gọt' },
      { word: 'house', meaning: 'ngôi nhà' }
    ]
  },
  'eng-g2-u8': {
    title: 'Unit 8: In the village',
    genre: 'prose',
    content: [
      'Our small village lies nestled in a green valley.',
      'A blue delivery van drives slowly along the village lane.',
      'An old musician plays sweet melodies on his violin.',
      'Children laugh and play traditional games under the banyan tree.',
      'We love the warmth and harmony of our village.'
    ],
    vocabularyNotes: [
      { word: 'village', meaning: 'ngôi làng yên bình' },
      { word: 'van', meaning: 'xe tải nhỏ' },
      { word: 'violin', meaning: 'đàn vĩ cầm' },
      { word: 'valley', meaning: 'thung lũng xanh' }
    ]
  },

  // ================= GRADE 2 SEMESTER 2 (Units 9-16) =================
  'eng-g2-u9': {
    title: 'Unit 9: In the grocery store',
    genre: 'prose',
    content: [
      'Linda and her mother visit the local grocery store.',
      'Linda: "Can I have some strawberry yogurt and yellow bananas, please?"',
      'Mother: "Sure! Let\'s also get fresh milk for breakfast."',
      'The cashier smiles and packs everything into paper bags.',
      'Shopping for healthy food is a great habit!'
    ],
    vocabularyNotes: [
      { word: 'yogurt', meaning: 'sữa chua bổ dưỡng' },
      { word: 'yellow', meaning: 'màu vàng' },
      { word: 'milk', meaning: 'sữa tươi' },
      { word: 'grocery', meaning: 'cửa hàng tạp hóa' }
    ]
  },
  'eng-g2-u10': {
    title: 'Unit 10: At the zoo',
    genre: 'prose',
    content: [
      'Today is our weekend trip to the city zoo.',
      'Look at the beautiful zebra with black and white stripes!',
      'There are zero clouds in the bright blue sky.',
      'Children take photos of friendly animals from all over the world.',
      'Protecting wildlife keeps our planet beautiful!'
    ],
    vocabularyNotes: [
      { word: 'zebra', meaning: 'ngựa vằn' },
      { word: 'zoo', meaning: 'sở thú, vườn thú' },
      { word: 'zero', meaning: 'số 0' },
      { word: 'monkey', meaning: 'con khỉ' }
    ]
  },
  'eng-g2-u11': {
    title: 'Unit 11: In the playground',
    genre: 'prose',
    content: [
      'After school, we gather at the school playground.',
      'Mai slides down the tall red slide with a cheer.',
      'Nam and Peter play on the wooden seesaw happily.',
      'Lucy swings high on the swing into the afternoon air.',
      'Active play keeps us healthy and joyful!'
    ],
    vocabularyNotes: [
      { word: 'slide', meaning: 'cầu trượt' },
      { word: 'seesaw', meaning: 'bập bênh' },
      { word: 'swing', meaning: 'xích đu' },
      { word: 'playground', meaning: 'sân chơi' }
    ]
  },
  'eng-g2-u12': {
    title: 'Unit 12: At the café',
    genre: 'prose',
    content: [
      'Father takes us to a cozy garden café on Saturday.',
      'Father orders a warm cup of coffee.',
      'Mother and I enjoy chocolate cookies and fresh fruit juice.',
      'We listen to soft music and talk about our school week.',
      'The sweet aroma of cookies fills the entire café.'
    ],
    vocabularyNotes: [
      { word: 'coffee', meaning: 'cà phê' },
      { word: 'cookie', meaning: 'bánh quy giòn' },
      { word: 'café', meaning: 'quán cà phê' },
      { word: 'cup', meaning: 'tách, cốc' }
    ]
  },
  'eng-g2-u13': {
    title: 'Unit 13: In the maths class',
    genre: 'prose',
    content: [
      'Teacher: "Let\'s practice our numbers and addition today!"',
      'Teacher: "What is seven plus five?"',
      'Minh: "Seven plus five is twelve!"',
      'Teacher: "Excellent! Let\'s count together from one to twenty."',
      'Maths helps us solve puzzles and think logically!'
    ],
    vocabularyNotes: [
      { word: 'number', meaning: 'con số' },
      { word: 'plus', meaning: 'cộng (+)' },
      { word: 'minus', meaning: 'trừ (-)' },
      { word: 'count', meaning: 'đếm số' },
      { word: 'maths', meaning: 'môn Toán' }
    ]
  },
  'eng-g2-u14': {
    title: 'Unit 14: At home',
    genre: 'prose',
    content: [
      'Where is everyone in our home this afternoon?',
      'Dad is reading a newspaper in the living room.',
      'Grandma is resting quietly in the bedroom.',
      'My brother and I are studying at our desks.',
      'Every room in our home is filled with warmth and love.'
    ],
    vocabularyNotes: [
      { word: 'bedroom', meaning: 'phòng ngủ' },
      { word: 'living room', meaning: 'phòng khách' },
      { word: 'garden', meaning: 'khu vườn' },
      { word: 'home', meaning: 'tổ ấm gia đình' }
    ]
  },
  'eng-g2-u15': {
    title: 'Unit 15: In the clothes shop',
    genre: 'prose',
    content: [
      'Mother takes me to the fashion clothes shop.',
      'I try on a smart white shirt and a blue school dress.',
      'Mother checks the soft fabric and matching shoes.',
      '"This outfit looks very neat and pretty on you!"',
      'We thank the shop assistant and carry our new clothes home.'
    ],
    vocabularyNotes: [
      { word: 'shirt', meaning: 'áo sơ mi' },
      { word: 'dress', meaning: 'chiếc váy liền' },
      { word: 'shoes', meaning: 'đôi giày' },
      { word: 'clothes', meaning: 'quần áo' }
    ]
  },
  'eng-g2-u16': {
    title: 'Unit 16: At the campsite',
    genre: 'prose',
    content: [
      'We set up our green tent on the grassy campsite.',
      'At night, we build a bright campfire to keep warm.',
      'Father turns on the flashlight to guide our path in the woods.',
      'We gaze up at the sparkling stars and sing camping songs.',
      'Camping under the open sky is an unforgettable adventure!'
    ],
    vocabularyNotes: [
      { word: 'tent', meaning: 'lều cắm trại' },
      { word: 'campfire', meaning: 'lửa trại bập bùng' },
      { word: 'flashlight', meaning: 'đèn pin' },
      { word: 'campsite', meaning: 'khu cắm trại' }
    ]
  },

  // ================= GRADE 3 SEMESTER 1 (Units 1-10) =================
  'eng-g3-u1': {
    title: 'Unit 1: Hello',
    genre: 'prose',
    content: [
      'It is the first day of the new school year.',
      'Ben: "Hello! My name is Ben. What\'s your name?"',
      'Mai: "Hi Ben! I\'m Mai. Nice to meet you."',
      'Ben: "How are you today, Mai?"',
      'Mai: "I\'m fine, thank you. Let\'s go to our new classroom!"'
    ],
    vocabularyNotes: [
      { word: 'hello', meaning: 'xin chào (lịch sự)' },
      { word: 'hi', meaning: 'chào bạn (thân mật)' },
      { word: 'fine', meaning: 'khỏe, tốt đẹp' },
      { word: 'name', meaning: 'tên gọi' },
      { word: 'friend', meaning: 'người bạn' }
    ]
  },
  'eng-g3-u2': {
    title: 'Unit 2: Our names',
    genre: 'prose',
    content: [
      'Teacher: "Welcome to class 3A! Let\'s introduce our names."',
      'Lucy: "My name is Lucy. I am eight years old."',
      'Bill: "My name is Bill. I am from London."',
      'Teacher: "Welcome Lucy and Bill! Let\'s all be good friends."',
      'Every student introduces their name with a happy smile.'
    ],
    vocabularyNotes: [
      { word: 'name', meaning: 'tên gọi' },
      { word: 'friend', meaning: 'người bạn' },
      { word: 'boy', meaning: 'cậu bé' },
      { word: 'girl', meaning: 'cô bé' },
      { word: 'classmate', meaning: 'bạn cùng lớp' }
    ]
  },
  'eng-g3-u3': {
    title: 'Unit 3: Our friends',
    genre: 'prose',
    content: [
      'Mary: "Hi Nam! Who is that boy standing by the tree?"',
      'Nam: "That is my friend Quan. He is very kind and smart."',
      'Mary: "Let\'s invite him to play football with us!"',
      'Friends share toys, help each other and study together.',
      'True friendship makes school days bright and wonderful!'
    ],
    vocabularyNotes: [
      { word: 'friend', meaning: 'người bạn thân' },
      { word: 'classmate', meaning: 'bạn cùng lớp' },
      { word: 'boy', meaning: 'bạn nam' },
      { word: 'girl', meaning: 'bạn nữ' },
      { word: 'teacher', meaning: 'giáo viên' }
    ]
  },
  'eng-g3-u4': {
    title: 'Unit 4: Our bodies',
    genre: 'prose',
    content: [
      'Teacher: "Class, let\'s play the body parts game!"',
      'Teacher: "Touch your ears! Open your mouth!"',
      'Students: "We touch our ears and point to our nose!"',
      'Teacher: "Look at your bright eyes and lovely smiles. Good job everyone!"'
    ],
    vocabularyNotes: [
      { word: 'eye', meaning: 'mắt (dùng để nhìn)' },
      { word: 'ear', meaning: 'tai (dùng để nghe)' },
      { word: 'nose', meaning: 'mũi (dùng để ngửi)' },
      { word: 'mouth', meaning: 'miệng (dùng để nói và cười)' },
      { word: 'face', meaning: 'khuôn mặt' }
    ]
  },
  'eng-g3-u5': {
    title: 'Unit 5: My hobbies',
    genre: 'prose',
    content: [
      'Everyone in our class has a special hobby.',
      'Mai loves singing English songs and dancing.',
      'Minh enjoys drawing colorful landscape pictures.',
      'Tony likes swimming in the cool pool on weekends.',
      'Having hobbies makes our lives colorful and creative!'
    ],
    vocabularyNotes: [
      { word: 'singing', meaning: 'hát ca' },
      { word: 'dancing', meaning: 'nhảy múa' },
      { word: 'drawing', meaning: 'vẽ tranh' },
      { word: 'swimming', meaning: 'bơi lội' },
      { word: 'hobby', meaning: 'sở thích' }
    ]
  },
  'eng-g3-u6': {
    title: 'Unit 6: Our school',
    genre: 'prose',
    content: [
      'Our elementary school is large, modern and beautiful.',
      'There is a spacious library with thousands of books.',
      'Students practice typing in the computer room.',
      'During break time, we run and play in the green playground.',
      'We are proud of our lovely school and caring teachers.'
    ],
    vocabularyNotes: [
      { word: 'school', meaning: 'trường học' },
      { word: 'classroom', meaning: 'lớp học' },
      { word: 'library', meaning: 'thư viện' },
      { word: 'computer room', meaning: 'phòng máy tính' },
      { word: 'playground', meaning: 'sân chơi' }
    ]
  },
  'eng-g3-u7': {
    title: 'Unit 7: Classroom instructions',
    genre: 'prose',
    content: [
      'Teacher: "Good morning class! Please sit down."',
      'Teacher: "Open your English books to page fifty, please."',
      'Teacher: "Listen carefully, speak clearly, read aloud and write neatly."',
      'Students follow instructions attentively and learn effectively.'
    ],
    vocabularyNotes: [
      { word: 'instruction', meaning: 'lời chỉ dẫn, mệnh lệnh' },
      { word: 'listen', meaning: 'lắng nghe' },
      { word: 'speak', meaning: 'nói chuyện' },
      { word: 'read', meaning: 'đọc bài' },
      { word: 'write', meaning: 'viết bài' }
    ]
  },
  'eng-g3-u8': {
    title: 'Unit 8: My school things',
    genre: 'prose',
    content: [
      'I pack my school bag carefully every morning.',
      'I have two sharpened pencils, a plastic ruler and an eraser.',
      'My pencil case is decorated with cute cartoon stickers.',
      'Keeping our school things tidy helps us study much better.'
    ],
    vocabularyNotes: [
      { word: 'pencil', meaning: 'bút chì' },
      { word: 'ruler', meaning: 'thước kẻ' },
      { word: 'eraser', meaning: 'cục tẩy' },
      { word: 'pencil case', meaning: 'hộp bút' },
      { word: 'school bag', meaning: 'cặp sách' }
    ]
  },
  'eng-g3-u9': {
    title: 'Unit 9: Colours',
    genre: 'poem',
    content: [
      'Red is the apple sweet and bright,',
      'Blue is the ocean shining in light.',
      'Green is the grass on the garden hill,',
      'Orange is the sunset calm and still.',
      'A world of colours for you and me!'
    ],
    vocabularyNotes: [
      { word: 'red', meaning: 'màu đỏ' },
      { word: 'blue', meaning: 'màu xanh dương' },
      { word: 'green', meaning: 'màu xanh lá' },
      { word: 'orange', meaning: 'màu cam' },
      { word: 'colour', meaning: 'màu sắc' }
    ]
  },
  'eng-g3-u10': {
    title: 'Unit 10: Break time activities',
    genre: 'prose',
    content: [
      'The school bell rings! It is break time at last!',
      'Minh and Peter play a thrilling game of chess in the room.',
      'Mai and Lucy play badminton in the courtyard.',
      'A group of friends enjoy skipping rope together.',
      'Break time gives us energy and big smiles!'
    ],
    vocabularyNotes: [
      { word: 'chess', meaning: 'cờ vua' },
      { word: 'badminton', meaning: 'cầu lông' },
      { word: 'skipping', meaning: 'nhảy dây' },
      { word: 'football', meaning: 'bóng đá' },
      { word: 'break time', meaning: 'giờ ra chơi' }
    ]
  },

  // ================= GRADE 3 SEMESTER 2 (Units 11-20) =================
  'eng-g3-u11': {
    title: 'Unit 11: My family',
    genre: 'prose',
    content: [
      'This is a cherished photo of my happy family.',
      'My father is an engineer, and my mother is a kind teacher.',
      'My older brother is in grade five, and my sister is in grade one.',
      'Grandma and Grandpa tell us wonderful folk stories every evening.',
      'I love my family with all my heart.'
    ],
    vocabularyNotes: [
      { word: 'father', meaning: 'người bố' },
      { word: 'brother', meaning: 'anh/em trai' },
      { word: 'sister', meaning: 'chị/em gái' },
      { word: 'grandmother', meaning: 'người bà' },
      { word: 'family', meaning: 'gia đình' }
    ]
  },
  'eng-g3-u12': {
    title: 'Unit 12: Jobs',
    genre: 'prose',
    content: [
      'Every job in our society is important and noble.',
      'A doctor cures sick people in the city hospital.',
      'A dedicated nurse takes care of patients gently.',
      'A bus driver takes students safely to school every morning.',
      'A factory worker produces goods for our community.'
    ],
    vocabularyNotes: [
      { word: 'doctor', meaning: 'bác sĩ' },
      { word: 'nurse', meaning: 'y tá' },
      { word: 'driver', meaning: 'tài xế' },
      { word: 'worker', meaning: 'công nhân' },
      { word: 'job', meaning: 'nghề nghiệp' }
    ]
  },
  'eng-g3-u13': {
    title: 'Unit 13: My house',
    genre: 'prose',
    content: [
      'Welcome to our cozy two-storey house!',
      'On the ground floor, we have a bright living room and a kitchen.',
      'Upstairs, there are two bedrooms and a clean bathroom.',
      'Outside the house, there is a small garden with blooming roses.',
      'Our house is our warmest shelter.'
    ],
    vocabularyNotes: [
      { word: 'house', meaning: 'ngôi nhà' },
      { word: 'living room', meaning: 'phòng khách' },
      { word: 'kitchen', meaning: 'nhà bếp' },
      { word: 'bathroom', meaning: 'phòng tắm' }
    ]
  },
  'eng-g3-u14': {
    title: 'Unit 14: My bedroom',
    genre: 'prose',
    content: [
      'My bedroom is my favorite private space.',
      'There is a soft wooden bed with a blue blanket.',
      'My study desk has a modern lamp and a laptop.',
      'I hang my school uniform neatly inside the wardrobe.',
      'I always keep my bedroom clean and tidy.'
    ],
    vocabularyNotes: [
      { word: 'bed', meaning: 'chiếc giường' },
      { word: 'chair', meaning: 'cái ghế' },
      { word: 'lamp', meaning: 'đèn bàn' },
      { word: 'wardrobe', meaning: 'tủ quần áo' },
      { word: 'desk', meaning: 'bàn học' }
    ]
  },
  'eng-g3-u15': {
    title: 'Unit 15: At the dining table',
    genre: 'prose',
    content: [
      'Dinner is ready on the family dining table!',
      'Mother serves fragrant steamed rice, fresh fish and roasted meat.',
      'There is also a loaf of crusty bread and a pitcher of water.',
      'Mother: "Would you like some fish, Nam?" — Nam: "Yes, please!"',
      'Family meals are the warmest moments of the day.'
    ],
    vocabularyNotes: [
      { word: 'rice', meaning: 'cơm, gạo' },
      { word: 'bread', meaning: 'bánh mì' },
      { word: 'meat', meaning: 'thịt' },
      { word: 'water', meaning: 'nước uống' },
      { word: 'dining table', meaning: 'bàn ăn' }
    ]
  },
  'eng-g3-u16': {
    title: 'Unit 16: My pets',
    genre: 'prose',
    content: [
      'Do you have any cute pets at home?',
      'I have a playful puppy, a soft kitten and a colorful parrot.',
      'My brother has a tiny white rabbit and three goldfish in a bowl.',
      'Taking care of our pets teaches us love and responsibility.'
    ],
    vocabularyNotes: [
      { word: 'parrot', meaning: 'con vẹt' },
      { word: 'rabbit', meaning: 'con thỏ' },
      { word: 'goldfish', meaning: 'cá vàng' },
      { word: 'dog', meaning: 'chó cưng' },
      { word: 'pet', meaning: 'thú cưng' }
    ]
  },
  'eng-g3-u17': {
    title: 'Unit 17: Our toys',
    genre: 'prose',
    content: [
      'We have a toy shelf full of wonderful playthings.',
      'There is a battery-powered robot that walks and talks.',
      'My sister loves dressing up her pretty porcelain doll.',
      'Together, we assemble a 500-piece jigsaw puzzle on the rug.',
      'Playing with educational toys sparks our imagination!'
    ],
    vocabularyNotes: [
      { word: 'robot', meaning: 'người máy' },
      { word: 'doll', meaning: 'búp bê' },
      { word: 'puzzle', meaning: 'tranh ghép hình' },
      { word: 'yo-yo', meaning: 'con quay yo-yo' },
      { word: 'toy', meaning: 'đồ chơi' }
    ]
  },
  'eng-g3-u18': {
    title: 'Unit 18: Playing and doing',
    genre: 'prose',
    content: [
      'What is everyone in the family doing on Sunday morning?',
      'Dad is reading a science magazine on the sofa.',
      'Mum is cooking a hearty lunch in the kitchen.',
      'Sister is listening to sweet music, and brother is watching TV.',
      'Everyone enjoys their favorite relaxing activities.'
    ],
    vocabularyNotes: [
      { word: 'reading', meaning: 'đọc sách' },
      { word: 'cooking', meaning: 'nấu ăn' },
      { word: 'listening', meaning: 'lắng nghe' },
      { word: 'watching', meaning: 'xem tivi' }
    ]
  },
  'eng-g3-u19': {
    title: 'Unit 19: Outdoor activities',
    genre: 'prose',
    content: [
      'Sunny days are perfect for outdoor adventures.',
      'Minh and Quan are cycling along the lake path.',
      'Lan and Hoa are skating gracefully on the park rink.',
      'High in the breeze, a giant dragon kite dances in the sky.',
      'Being active outdoors makes us fit and cheerful!'
    ],
    vocabularyNotes: [
      { word: 'cycling', meaning: 'đạp xe' },
      { word: 'skating', meaning: 'trượt pa-tanh' },
      { word: 'kite', meaning: 'con diều' },
      { word: 'ball', meaning: 'quả bóng' },
      { word: 'outdoor', meaning: 'hoạt động ngoài trời' }
    ]
  },
  'eng-g3-u20': {
    title: 'Unit 20: At the zoo',
    genre: 'prose',
    content: [
      'The wildlife zoo is teeming with amazing creatures.',
      'A majestic tiger rests under the shade of a rock.',
      'A proud peacock spreads its magnificent iridescent feathers.',
      'A playful bear splashes water in the cool stream.',
      'Animals make our natural world so vibrant and magical!'
    ],
    vocabularyNotes: [
      { word: 'tiger', meaning: 'con hổ' },
      { word: 'peacock', meaning: 'con công' },
      { word: 'bear', meaning: 'con gấu' },
      { word: 'elephant', meaning: 'con voi' },
      { word: 'zoo', meaning: 'sở thú' }
    ]
  },

  // ================= GRADE 4 SEMESTER 1 (Units 1-10) =================
  'eng-g4-u1': {
    title: 'Unit 1: My friends',
    genre: 'prose',
    content: [
      'Our international summer camp brings friends together from around the globe.',
      'Nam: "Hi! I\'m Nam from Hanoi, Vietnam. Where are you from, Lucy?"',
      'Lucy: "Hello Nam! I\'m from London, Britain. It\'s lovely to meet you."',
      'Akiko: "I\'m Akiko from Tokyo, Japan. We are all good friends now!"',
      'Together, we share our cultures, traditional songs, and wonderful stories.'
    ],
    vocabularyNotes: [
      { word: 'Vietnam', meaning: 'nước Việt Nam thân yêu' },
      { word: 'America', meaning: 'nước Mỹ (Hoa Kỳ)' },
      { word: 'Britain', meaning: 'nước Anh (Vương quốc Anh)' },
      { word: 'Japan', meaning: 'nước Nhật Bản' },
      { word: 'friend', meaning: 'bạn bè thân thiết' }
    ]
  },
  'eng-g4-u2': {
    title: 'Unit 2: Time and daily routines',
    genre: 'prose',
    content: [
      'Following a regular daily routine keeps our life organized.',
      'I wake up at six o\'clock in the morning and do light exercises.',
      'At twelve noon, our family has a healthy lunch together.',
      'In the evening, I finish my homework before going to bed at nine thirty.',
      'Managing time wisely helps us succeed in school and life!'
    ],
    vocabularyNotes: [
      { word: 'morning', meaning: 'buổi sáng' },
      { word: 'afternoon', meaning: 'buổi chiều' },
      { word: 'evening', meaning: 'buổi tối' },
      { word: 'routine', meaning: 'thói quen hàng ngày' }
    ]
  },
  'eng-g4-u3': {
    title: 'Unit 3: My week',
    genre: 'prose',
    content: [
      'Every day of the week brings new learning opportunities.',
      'On Monday, Wednesday and Friday, we have English and Maths.',
      'On Tuesday and Thursday, we practice music and art.',
      'On Sunday, we visit our grandparents and relax in the garden.',
      'A balanced week makes our student life happy and fulfilling!'
    ],
    vocabularyNotes: [
      { word: 'Monday', meaning: 'thứ Hai' },
      { word: 'Wednesday', meaning: 'thứ Tư' },
      { word: 'Friday', meaning: 'thứ Sáu' },
      { word: 'Sunday', meaning: 'Chủ Nhật' },
      { word: 'week', meaning: 'tuần lễ' }
    ]
  },
  'eng-g4-u4': {
    title: 'Unit 4: My birthday party',
    genre: 'prose',
    content: [
      'Today I sent out invitation cards for my tenth birthday party.',
      'My friends brought wonderful gifts and colorful greeting cards.',
      'We gathered around the three-tiered birthday cake and sang together.',
      'Everyone enjoyed delicious treats and played fun party games.',
      'Birthdays are special milestones shared with loved ones!'
    ],
    vocabularyNotes: [
      { word: 'birthday', meaning: 'ngày sinh nhật' },
      { word: 'invitation', meaning: 'thiệp mời' },
      { word: 'gift', meaning: 'món quà' },
      { word: 'cake', meaning: 'bánh kem' },
      { word: 'party', meaning: 'bữa tiệc' }
    ]
  },
  'eng-g4-u5': {
    title: 'Unit 5: Things we can do',
    genre: 'prose',
    content: [
      'Each of us has unique talents and abilities.',
      'Nam can swim across the pool and play the guitar skillfully.',
      'Mai can cook delicious fried rice and play the piano gracefully.',
      'We encourage each other to practice hard and develop new skills.',
      'Believing in yourself helps you achieve amazing things!'
    ],
    vocabularyNotes: [
      { word: 'swim', meaning: 'bơi lội' },
      { word: 'cook', meaning: 'nấu ăn' },
      { word: 'piano', meaning: 'đàn piano' },
      { word: 'bike', meaning: 'xe đạp' }
    ]
  },
  'eng-g4-u6': {
    title: 'Unit 6: Our school facilities',
    genre: 'prose',
    content: [
      'Our school has state-of-the-art learning facilities.',
      'The music room is equipped with pianos, violins and drums.',
      'The art room has bright easels and watercolours for young artists.',
      'In the gymnasium, students practice basketball and gymnastics.',
      'Modern facilities make learning inspiring and enjoyable!'
    ],
    vocabularyNotes: [
      { word: 'facility', meaning: 'cơ sở vật chất' },
      { word: 'gym', meaning: 'phòng tập thể dục' },
      { word: 'music room', meaning: 'phòng âm nhạc' },
      { word: 'art room', meaning: 'phòng mỹ thuật' }
    ]
  },
  'eng-g4-u7': {
    title: 'Unit 7: Our timetables',
    genre: 'prose',
    content: [
      'Our weekly timetable is thoughtfully organized.',
      'We study English, Maths, Science, History and Vietnamese.',
      'Each subject expands our knowledge and curiosity about the universe.',
      'We always prepare our books and notebooks according to the timetable.',
      'Being well-prepared is the first step toward great academic results!'
    ],
    vocabularyNotes: [
      { word: 'timetable', meaning: 'thời khóa biểu' },
      { word: 'english', meaning: 'môn Tiếng Anh' },
      { word: 'science', meaning: 'môn Khoa học' },
      { word: 'vietnamese', meaning: 'môn Tiếng Việt' },
      { word: 'maths', meaning: 'môn Toán' }
    ]
  },
  'eng-g4-u8': {
    title: 'Unit 8: My favourite subjects',
    genre: 'prose',
    content: [
      'What is your favorite school subject and why?',
      'Minh loves Science because he enjoys discovering how things work.',
      'Hoa is passionate about Art because she loves expressing feelings in colors.',
      'Peter enjoys Physical Education (PE) to stay fit and strong.',
      'Every subject opens a door to new wisdom and discovery!'
    ],
    vocabularyNotes: [
      { word: 'subject', meaning: 'môn học' },
      { word: 'music', meaning: 'âm nhạc' },
      { word: 'art', meaning: 'mỹ thuật' },
      { word: 'pe', meaning: 'thể dục' },
      { word: 'science', meaning: 'khoa học' }
    ]
  },
  'eng-g4-u9': {
    title: 'Unit 9: Our sports day',
    genre: 'prose',
    content: [
      'The annual school Sports Day is full of cheers and energy!',
      'Athletes compete in the 100-meter race, high jump and relay races.',
      'Our football match ended with a thrilling penalty shootout victory.',
      'The headmaster awarded gold medals and trophies to outstanding teams.',
      'Sportsmanship and teamwork are the true champions of the day!'
    ],
    vocabularyNotes: [
      { word: 'sports day', meaning: 'ngày hội thể thao' },
      { word: 'match', meaning: 'trận đấu' },
      { word: 'race', meaning: 'cuộc đua' },
      { word: 'medal', meaning: 'huy chương' },
      { word: 'football', meaning: 'bóng đá' }
    ]
  },
  'eng-g4-u10': {
    title: 'Unit 10: Our summer holidays',
    genre: 'prose',
    content: [
      'Where did you spend your memorable summer holiday?',
      'I went to Da Nang beach with my family and swam in the turquoise sea.',
      'We explored ancient caves in the mountains and watched the sunset.',
      'Summer holidays allow us to recharge and discover our beautiful country.',
      'We return to school refreshed and ready for new milestones!'
    ],
    vocabularyNotes: [
      { word: 'holiday', meaning: 'kỳ nghỉ' },
      { word: 'summer', meaning: 'mùa hè' },
      { word: 'beach', meaning: 'bãi biển' },
      { word: 'mountains', meaning: 'núi non' },
      { word: 'sea', meaning: 'biển cả' }
    ]
  },

  // ================= GRADE 4 SEMESTER 2 (Units 11-20) =================
  'eng-g4-u11': {
    title: 'Unit 11: My home',
    genre: 'prose',
    content: [
      'Where do you live in our vibrant town?',
      'I live with my family in a comfortable apartment on Nguyen Trai street.',
      'Our home is close to the school, a bustling market and a green park.',
      'We love our neighborhood because the people are friendly and welcoming.',
      'There is no place like home!'
    ],
    vocabularyNotes: [
      { word: 'house', meaning: 'ngôi nhà' },
      { word: 'living room', meaning: 'phòng khách' },
      { word: 'kitchen', meaning: 'nhà bếp' },
      { word: 'garden', meaning: 'khu vườn' },
      { word: 'apartment', meaning: 'căn hộ chung cư' }
    ]
  },
  'eng-g4-u12': {
    title: 'Unit 12: Jobs',
    genre: 'prose',
    content: [
      'Let\'s learn about diverse careers in our community.',
      'My uncle is a surgeon in a central hospital.',
      'My aunt is a talented architect who designs modern buildings.',
      'Every worker contributes their skills to build a better future.',
      'Dreaming about your future career gives you a clear goal to pursue!'
    ],
    vocabularyNotes: [
      { word: 'doctor', meaning: 'bác sĩ' },
      { word: 'nurse', meaning: 'y tá' },
      { word: 'farmer', meaning: 'nông dân' },
      { word: 'teacher', meaning: 'giáo viên' },
      { word: 'job', meaning: 'nghề nghiệp' }
    ]
  },
  'eng-g4-u13': {
    title: 'Unit 13: Appearance',
    genre: 'prose',
    content: [
      'How would you describe your best friend\'s appearance?',
      'Linda is tall, slim and has bright smiling eyes.',
      'Tom is energetic, strong and has short curly hair.',
      'While outer appearances differ, inner kindness is what truly shines.',
      'Respecting everyone\'s unique appearance makes a loving community!'
    ],
    vocabularyNotes: [
      { word: 'tall', meaning: 'cao lớn' },
      { word: 'short', meaning: 'thấp bé' },
      { word: 'slim', meaning: 'thanh mảnh' },
      { word: 'young', meaning: 'trẻ trung' },
      { word: 'appearance', meaning: 'ngoại hình' }
    ]
  },
  'eng-g4-u14': {
    title: 'Unit 14: Daily activities',
    genre: 'prose',
    content: [
      'A healthy daily routine builds strong minds and bodies.',
      'We eat a nutritious breakfast with eggs, milk and whole grain bread.',
      'After school, we do homework and help parents with light chores.',
      'Going to bed early ensures we wake up refreshed and full of energy.'
    ],
    vocabularyNotes: [
      { word: 'breakfast', meaning: 'bữa sáng' },
      { word: 'lunch', meaning: 'bữa trưa' },
      { word: 'daily', meaning: 'hàng ngày' },
      { word: 'routine', meaning: 'thói quen sinh hoạt' }
    ]
  },
  'eng-g4-u15': {
    title: 'Unit 15: My family\'s weekends',
    genre: 'prose',
    content: [
      'Weekends are precious times for family bonding.',
      'On Saturday afternoon, we watch an animated movie at the cinema.',
      'On Sunday morning, we have a picnic in the botanical park.',
      'Sharing laughs and delicious food strengthens our family affection.'
    ],
    vocabularyNotes: [
      { word: 'weekend', meaning: 'cuối tuần' },
      { word: 'cinema', meaning: 'rạp chiếu phim' },
      { word: 'park', meaning: 'công viên' },
      { word: 'family', meaning: 'gia đình' }
    ]
  },
  'eng-g4-u16': {
    title: 'Unit 16: Weather',
    genre: 'prose',
    content: [
      'The weather changes across different seasons and days.',
      'Today the sky is sunny and clear, with a gentle cool breeze.',
      'When it is rainy and cloudy, we read books and play indoor games.',
      'Observing weather patterns helps us plan our outdoor activities wisely.'
    ],
    vocabularyNotes: [
      { word: 'weather', meaning: 'thời tiết' },
      { word: 'sunny', meaning: 'có nắng' },
      { word: 'rainy', meaning: 'có mưa' },
      { word: 'windy', meaning: 'có gió' },
      { word: 'cloudy', meaning: 'nhiều mây' }
    ]
  },
  'eng-g4-u17': {
    title: 'Unit 17: In the city',
    genre: 'prose',
    content: [
      'Our modern city is vibrant and full of fascinating places.',
      'Across the street from my house, there is a fragrant bakery and a bookshop.',
      'The city museum preserves precious historical artifacts of our nation.',
      'Walking along the illuminated city boulevards at night is enchanting.'
    ],
    vocabularyNotes: [
      { word: 'city', meaning: 'thành phố' },
      { word: 'street', meaning: 'đường phố' },
      { word: 'building', meaning: 'tòa nhà' },
      { word: 'museum', meaning: 'bảo tàng' },
      { word: 'bookshop', meaning: 'hiệu sách' }
    ]
  },
  'eng-g4-u18': {
    title: 'Unit 18: At the shopping centre',
    genre: 'prose',
    content: [
      'We visit the modern shopping mall on Sunday afternoon.',
      'Mother selects fresh groceries at the supermarket on the ground floor.',
      'I browse through the children\'s clothing department for new school shirts.',
      'Shopping with family is a fun and practical learning experience.'
    ],
    vocabularyNotes: [
      { word: 'shopping centre', meaning: 'trung tâm mua sắm' },
      { word: 'supermarket', meaning: 'siêu thị' },
      { word: 'bakery', meaning: 'tiệm bánh' },
      { word: 'bookshop', meaning: 'hiệu sách' },
      { word: 'shirt', meaning: 'áo sơ mi' }
    ]
  },
  'eng-g4-u19': {
    title: 'Unit 19: The animal world',
    genre: 'prose',
    content: [
      'The animal kingdom is filled with fascinating wonders.',
      'The tall giraffe stretches its long neck to reach high green leaves.',
      'The mighty crocodile basks on the sunny riverbank.',
      'Every animal species plays an essential role in the ecological balance.'
    ],
    vocabularyNotes: [
      { word: 'animal', meaning: 'động vật' },
      { word: 'crocodile', meaning: 'con cá sấu' },
      { word: 'giraffe', meaning: 'hươu cao cổ' },
      { word: 'hippo', meaning: 'hà mã' },
      { word: 'tiger', meaning: 'con hổ' }
    ]
  },
  'eng-g4-u20': {
    title: 'Unit 20: At summer camp',
    genre: 'prose',
    content: [
      'Summer camp was an extraordinary learning journey for all of us.',
      'We set up canvas tents, learned wilderness survival skills and cooked outdoors.',
      'Around the blazing campfire, we sang folk songs under the starry sky.',
      'The memories and friendships made at camp will last forever!'
    ],
    vocabularyNotes: [
      { word: 'summer camp', meaning: 'trại hè' },
      { word: 'tent', meaning: 'lều trại' },
      { word: 'campfire', meaning: 'lửa trại' },
      { word: 'activity', meaning: 'hoạt động' },
      { word: 'singing', meaning: 'ca hát' }
    ]
  },

  // ================= GRADE 5 SEMESTER 1 (Units 1-10) =================
  'eng-g5-u1': {
    title: 'Unit 1: All about me!',
    genre: 'prose',
    content: [
      'Trung and Linda meet on their first day back in Grade 5.',
      'Linda: "Hi Trung! Nice to see you again. Where do you live now?"',
      'Trung: "Hello Linda! I live with my parents at 105 Hoa Binh Lane, Ba Dinh District."',
      'Linda: "What is your neighborhood like?"',
      'Trung: "It is very peaceful and friendly. There is a green park near my home."',
      'Linda: "That sounds wonderful! I would love to visit your home this weekend."'
    ],
    vocabularyNotes: [
      { word: 'address', meaning: 'địa chỉ nhà ở' },
      { word: 'lane', meaning: 'ngõ, hẻm nhỏ' },
      { word: 'street', meaning: 'đường phố lớn' },
      { word: 'hometown', meaning: 'quê hương nơi sinh ra' },
      { word: 'district', meaning: 'quận, huyện' }
    ]
  },
  'eng-g5-u2': {
    title: 'Unit 2: Our homes',
    genre: 'prose',
    content: [
      'People live in diverse and interesting types of homes.',
      'Some families live in modern high-rise tower apartments in big cities.',
      'Others reside in peaceful houses surrounded by orchards in the countryside.',
      'No matter where we live, home is the sweetest sanctuary of all.'
    ],
    vocabularyNotes: [
      { word: 'apartment', meaning: 'căn hộ' },
      { word: 'tower', meaning: 'tòa tháp, nhà cao tầng' },
      { word: 'peaceful', meaning: 'yên bình' },
      { word: 'house', meaning: 'ngôi nhà' }
    ]
  },
  'eng-g5-u3': {
    title: 'Unit 3: My foreign friends',
    genre: 'prose',
    content: [
      'In our globalized world, we connect with friends across continents.',
      'Akiko is Japanese from Tokyo, and John is American from New York.',
      'Siti is Malaysian from Kuala Lumpur, and David is British from London.',
      'Sharing our cultural traditions enriches our worldview and understanding.'
    ],
    vocabularyNotes: [
      { word: 'nationality', meaning: 'quốc tịch' },
      { word: 'Japanese', meaning: 'người Nhật Bản' },
      { word: 'Malaysian', meaning: 'người Malaysia' },
      { word: 'American', meaning: 'người Mỹ' },
      { word: 'friend', meaning: 'người bạn' }
    ]
  },
  'eng-g5-u4': {
    title: 'Unit 4: Our free-time activities',
    genre: 'prose',
    content: [
      'How do you make the most of your free time?',
      'Minh practices karate at the community sports centre twice a week.',
      'Grandpa enjoys fishing by the serene lake on sunny afternoons.',
      'Mother and I love gardening and caring for blossoming orchids in the yard.'
    ],
    vocabularyNotes: [
      { word: 'free-time', meaning: 'thời gian rảnh rỗi' },
      { word: 'karate', meaning: 'môn võ ka-ra-te' },
      { word: 'fishing', meaning: 'câu cá' },
      { word: 'gardening', meaning: 'làm vườn' }
    ]
  },
  'eng-g5-u5': {
    title: 'Unit 5: My future job',
    genre: 'prose',
    content: [
      'What career would you like to pursue in the future?',
      'Nam dreams of becoming an airline pilot to fly planes across the skies.',
      'Mai aspires to be an architect to design eco-friendly green cities.',
      'Working hard in school today lays the solid foundation for our future careers!'
    ],
    vocabularyNotes: [
      { word: 'future', meaning: 'tương lai' },
      { word: 'pilot', meaning: 'phi công' },
      { word: 'architect', meaning: 'kiến trúc sư' },
      { word: 'astronaut', meaning: 'phi hành gia' },
      { word: 'writer', meaning: 'nhà văn' }
    ]
  },
  'eng-g5-u6': {
    title: 'Unit 6: Our school rooms',
    genre: 'prose',
    content: [
      'Our school campus features specialized educational facilities.',
      'In the science lab, we conduct safe physics and chemistry experiments.',
      'In the computer lab, students learn coding and digital creativity.',
      'The school canteen serves nutritious meals to keep us energized throughout the day.'
    ],
    vocabularyNotes: [
      { word: 'school room', meaning: 'phòng học chức năng' },
      { word: 'science lab', meaning: 'phòng thí nghiệm khoa học' },
      { word: 'canteen', meaning: 'nhà ăn trường' },
      { word: 'library', meaning: 'thư viện' }
    ]
  },
  'eng-g5-u7': {
    title: 'Unit 7: Our favourite school activities',
    genre: 'prose',
    content: [
      'School is a joyful place of exploration and shared activities.',
      'Doing science experiments stimulates our analytical thinking.',
      'Reading illustrated comic books and classic literature enriches our vocabulary.',
      'Participating actively in class discussions makes learning deeply engaging.'
    ],
    vocabularyNotes: [
      { word: 'favourite', meaning: 'yêu thích' },
      { word: 'story', meaning: 'câu chuyện' },
      { word: 'comic book', meaning: 'truyện tranh' },
      { word: 'reading', meaning: 'đọc sách' }
    ]
  },
  'eng-g5-u8': {
    title: 'Unit 8: In our classroom',
    genre: 'prose',
    content: [
      'Our Grade 5 classroom is well-organized, bright and welcoming.',
      'Each student maintains a tidy desk and cares for our shared classroom library.',
      'We collaborate in study groups to complete multidisciplinary projects.',
      'Mutual respect and cooperation make our classroom a second home.'
    ],
    vocabularyNotes: [
      { word: 'project', meaning: 'dự án học tập' },
      { word: 'presentation', meaning: 'bài thuyết trình' },
      { word: 'discussion', meaning: 'thảo luận nhóm' },
      { word: 'classroom', meaning: 'lớp học' }
    ]
  },
  'eng-g5-u9': {
    title: 'Unit 9: Our outdoor activities',
    genre: 'prose',
    content: [
      'Our school regularly organizes environmental outdoor activities.',
      'Students plant shade trees and flower beds around the school campus.',
      'We collect recyclable waste to promote environmental sustainability.',
      'Taking action to protect nature keeps our school and community green!'
    ],
    vocabularyNotes: [
      { word: 'gardening', meaning: 'trồng cây làm vườn' },
      { word: 'camping', meaning: 'cắm trại' },
      { word: 'football', meaning: 'bóng đá' },
      { word: 'badminton', meaning: 'cầu lông' }
    ]
  },
  'eng-g5-u10': {
    title: 'Unit 10: Our school trip',
    genre: 'prose',
    content: [
      'Our annual school field trip was a tremendous educational experience.',
      'We traveled by coach to Cuc Phuong National Park and the Botanical Garden.',
      'We observed ancient trees, rare butterflies and diverse wildlife in their natural habitat.',
      'Field trips turn textbook lessons into vivid, unforgettable reality!'
    ],
    vocabularyNotes: [
      { word: 'school trip', meaning: 'chuyến tham quan trường' },
      { word: 'botanical garden', meaning: 'thảo cầm viên / vườn bách thảo' },
      { word: 'national park', meaning: 'vườn quốc gia' },
      { word: 'museum', meaning: 'bảo tàng' }
    ]
  },

  // ================= GRADE 5 SEMESTER 2 (Units 11-20) =================
  'eng-g5-u11': {
    title: 'Unit 11: Family time',
    genre: 'prose',
    content: [
      'Family time is the most cherished part of our week.',
      'On Sunday evenings, we cook a special family dinner together.',
      'We share stories about our week, express gratitude and give warm advice.',
      'A supportive and loving family is our greatest source of happiness and strength.'
    ],
    vocabularyNotes: [
      { word: 'family', meaning: 'gia đình yêu thương' },
      { word: 'dinner', meaning: 'bữa tối' },
      { word: 'cooking', meaning: 'nấu ăn' },
      { word: 'house', meaning: 'ngôi nhà' }
    ]
  },
  'eng-g5-u12': {
    title: 'Unit 12: Our Tet holiday',
    genre: 'prose',
    content: [
      'Lunar New Year (Tet) is the most sacred and joyful festival in Vietnam.',
      'Families clean and decorate their homes with pink peach blossoms and yellow kumquat trees.',
      'Children dress in traditional Ao Dai, visit grandparents and receive lucky money envelopes.',
      'Tet is a time of renewal, family reunion and heartfelt blessings.'
    ],
    vocabularyNotes: [
      { word: 'tet holiday', meaning: 'dịp Tết cổ truyền' },
      { word: 'lunar new year', meaning: 'năm mới âm lịch' },
      { word: 'blossom', meaning: 'hoa nở rộ (hoa đào, hoa mai)' },
      { word: 'lucky money', meaning: 'tiền lì xì may mắn' }
    ]
  },
  'eng-g5-u13': {
    title: 'Unit 13: Our special days',
    genre: 'prose',
    content: [
      'Throughout the school year, we celebrate meaningful special days.',
      'On Vietnamese Teachers\' Day (November 20th), we present fresh flowers to our beloved teachers.',
      'On International Children\'s Day (June 1st), schools host musical concerts and games.',
      'Celebrating special days teaches us gratitude and appreciation for life!'
    ],
    vocabularyNotes: [
      { word: 'special day', meaning: 'ngày lễ đặc biệt' },
      { word: 'teachers\' day', meaning: 'ngày Nhà giáo' },
      { word: 'children\'s day', meaning: 'ngày Quốc tế Thiếu nhi' },
      { word: 'flower', meaning: 'bông hoa tươi thắm' }
    ]
  },
  'eng-g5-u14': {
    title: 'Unit 14: Staying healthy',
    genre: 'prose',
    content: [
      'Maintaining good health requires wholesome daily habits.',
      'We should drink plenty of clean water, eat fresh vegetables and fruits daily.',
      'Regular physical exercise and getting eight hours of sleep keep our immune system robust.',
      'A healthy body fosters a sharp mind and joyful spirit!'
    ],
    vocabularyNotes: [
      { word: 'health', meaning: 'sức khỏe' },
      { word: 'healthy', meaning: 'khỏe mạnh' },
      { word: 'exercise', meaning: 'tập thể dục' },
      { word: 'vegetables', meaning: 'rau củ quả' },
      { word: 'fruit', meaning: 'trái cây' }
    ]
  },
  'eng-g5-u15': {
    title: 'Unit 15: Our health',
    genre: 'prose',
    content: [
      'When you feel unwell, it is crucial to seek medical advice promptly.',
      'If you have a fever, headache or toothache, rest quietly and visit a doctor.',
      'The school nurse provides first aid and teaches us proper hygiene practices.',
      'Knowing how to care for our health protects ourselves and our friends.'
    ],
    vocabularyNotes: [
      { word: 'fever', meaning: 'cơn sốt' },
      { word: 'headache', meaning: 'đau đầu' },
      { word: 'toothache', meaning: 'đau răng' },
      { word: 'stomach ache', meaning: 'đau bụng, đau dạ dày' },
      { word: 'hospital', meaning: 'bệnh viện' }
    ]
  },
  'eng-g5-u16': {
    title: 'Unit 16: Seasons and the weather',
    genre: 'prose',
    content: [
      'The four seasons bring distinct beauty to our country.',
      'Spring brings warm rains and blossoming flowers.',
      'Summer brings radiant sunshine and azure beaches, while Autumn has golden leaves.',
      'Winter brings crisp cool air, inviting warm family gatherings around the hearth.'
    ],
    vocabularyNotes: [
      { word: 'season', meaning: 'mùa trong năm' },
      { word: 'spring', meaning: 'mùa xuân' },
      { word: 'summer', meaning: 'mùa hè' },
      { word: 'autumn', meaning: 'mùa thu' },
      { word: 'winter', meaning: 'mùa đông' }
    ]
  },
  'eng-g5-u17': {
    title: 'Unit 17: Stories for children',
    genre: 'prose',
    content: [
      'Classic folktales and fables contain profound moral wisdom.',
      'The Fox and the Crow teaches us to be discerning and beware of false flattery.',
      'The Legend of Watermelon demonstrates the virtues of hard work and resilience.',
      'Reading timeless stories nurtures our character and empathy!'
    ],
    vocabularyNotes: [
      { word: 'story', meaning: 'câu chuyện' },
      { word: 'folktale', meaning: 'truyện dân gian' },
      { word: 'fable', meaning: 'truyện ngụ ngôn' },
      { word: 'character', meaning: 'nhân vật' },
      { word: 'crow', meaning: 'con quạ' }
    ]
  },
  'eng-g5-u18': {
    title: 'Unit 18: Means of transport',
    genre: 'prose',
    content: [
      'Modern transportation connects people across cities and nations.',
      'We can travel long distances swiftly by airplane or high-speed train.',
      'In metropolitan cities, clean underground metro lines reduce traffic congestion.',
      'Choosing public transport helps reduce emissions and protect our atmosphere.'
    ],
    vocabularyNotes: [
      { word: 'transport', meaning: 'phương tiện giao thông' },
      { word: 'plane', meaning: 'máy bay' },
      { word: 'motorbike', meaning: 'xe máy' },
      { word: 'underground', meaning: 'tàu điện ngầm' },
      { word: 'bus', meaning: 'xe buýt' }
    ]
  },
  'eng-g5-u19': {
    title: 'Unit 19: Places of interest',
    genre: 'prose',
    content: [
      'Vietnam is blessed with breathtaking landscapes and historic heritage sites.',
      'Ha Long Bay features thousands of majestic limestone islands rising from emerald waters.',
      'Hoi An Ancient Town enchants visitors with lantern-lit streets and preserved architecture.',
      'Exploring our nation\'s treasures instills pride in our cultural heritage.'
    ],
    vocabularyNotes: [
      { word: 'place of interest', meaning: 'địa điểm thú vị, danh lam thắng cảnh' },
      { word: 'historic site', meaning: 'di tích lịch sử' },
      { word: 'bay', meaning: 'vịnh biển' },
      { word: 'mountain', meaning: 'ngọn núi' },
      { word: 'pagoda', meaning: 'ngôi chùa' }
    ]
  },
  'eng-g5-u20': {
    title: 'Unit 20: Our summer holidays',
    genre: 'prose',
    content: [
      'Summer vacation is an eagerly awaited time for exploration and growth.',
      'We plan to travel to the coastal island of Phu Quoc, take boat tours and swim.',
      'We will also read inspiring books, learn swimming and volunteer in community projects.',
      'A fruitful summer vacation prepares us for new achievements in the coming academic year!'
    ],
    vocabularyNotes: [
      { word: 'summer', meaning: 'mùa hè' },
      { word: 'beach', meaning: 'bãi biển' },
      { word: 'island', meaning: 'hòn đảo' },
      { word: 'boat', meaning: 'con thuyền' },
      { word: 'holiday', meaning: 'kỳ nghỉ' }
    ]
  }
};

const IPA_DICT = {
  'ball': '/bɔːl/', 'bike': '/baɪk/', 'book': '/bʊk/', 'boy': '/bɔɪ/',
  'cake': '/keɪk/', 'car': '/kɑː/', 'cat': '/kæt/', 'cup': '/kʌp/',
  'apple': '/ˈæpl/', 'bag': '/bæɡ/', 'can': '/kæn/', 'hat': '/hæt/',
  'door': '/dɔː/', 'desk': '/desk/', 'dog': '/dɒɡ/', 'duck': '/dʌk/',
  'fish': '/fɪʃ/', 'chips': '/tʃɪps/', 'milk': '/mɪlk/', 'chicken': '/ˈtʃɪkɪn/',
  'flag': '/flæɡ/', 'fox': '/fɒks/',
  'girl': '/ɡɜːl/', 'guitar': '/ɡɪˈtɑː/', 'gate': '/ɡeɪt/', 'garden': '/ˈɡɑːdn/',
  'hand': '/hænd/', 'hair': '/heə/', 'horse': '/hɔːs/', 'house': '/haʊs/',
  'egg': '/eɡ/', 'elephant': '/ˈelɪfənt/', 'bell': '/bel/', 'pen': '/pen/',
  'ink': '/ɪŋk/', 'pig': '/pɪɡ/', 'ring': '/rɪŋ/',
  'monkey': '/ˈmʌŋki/', 'mango': '/ˈmæŋɡəʊ/', 'mouse': '/maʊs/', 'mother': '/ˈmʌðə/',
  'bus': '/bʌs/', 'box': '/bɒks/', 'stop': '/stɒp/',
  'lake': '/leɪk/', 'leaf': '/liːf/', 'lemon': '/ˈlemən/', 'lion': '/ˈlaɪən/',
  'noodles': '/ˈnuːdlz/', 'nuts': '/nʌts/', 'nest': '/nest/', 'nine': '/naɪn/',
  'toy': '/tɔɪ/', 'teddy bear': '/ˈtedi beə/', 'train': '/treɪn/', 'top': '/tɒp/',
  'football': '/ˈfʊtbɔːl/', 'fan': '/fæn/', 'foot': '/fʊt/', 'field': '/fiːld/',
  'home': '/həʊm/', 'hairbrush': '/ˈheəbrʌʃ/', 'handbag': '/ˈhændbæɡ/',
  'popcorn': '/ˈpɒpkɔːn/', 'pasta': '/ˈpæstə/', 'pizza': '/ˈpiːtsə/', 'party': '/ˈpɑːti/',
  'kite': '/kaɪt/', 'kitten': '/ˈkɪtn/', 'backyard': '/ˌbækˈjɑːd/',
  'sea': '/siː/', 'sand': '/sænd/', 'sail': '/seɪl/', 'sun': '/sʌn/',
  'river': '/ˈrɪvə/', 'rainbow': '/ˈreɪnbəʊ/', 'road': '/rəʊd/', 'countryside': '/ˈkʌntrisaɪd/',
  'question': '/ˈkwestʃən/', 'quiz': '/kwɪz/', 'quiet': '/ˈkwaɪət/',
  'farm': '/fɑːm/', 'farmer': '/ˈfɑːmə/',
  'kitchen': '/ˈkɪtʃɪn/', 'kettle': '/ˈketl/', 'knife': '/naɪf/',
  'village': '/ˈvɪlɪdʒ/', 'van': '/væn/', 'violin': '/ˌvaɪəˈlɪn/', 'valley': '/ˈvæli/',
  'yogurt': '/ˈjɒɡət/', 'yellow': '/ˈjeləʊ/', 'grocery': '/ˈɡrəʊsəri/',
  'zebra': '/ˈzebrə/', 'zoo': '/zuː/', 'zero': '/ˈzɪərəʊ/',
  'slide': '/slaɪd/', 'seesaw': '/ˈsiːsɔː/', 'swing': '/swɪŋ/', 'playground': '/ˈpleɪɡraʊnd/',
  'coffee': '/ˈkɒfi/', 'cookie': '/ˈkʊki/', 'café': '/ˈkæfeɪ/',
  'number': '/ˈnʌmbə/', 'plus': '/plʌs/', 'minus': '/ˈmaɪnəs/', 'count': '/kaʊnt/', 'maths': '/mæθs/',
  'bedroom': '/ˈbedruːm/', 'living room': '/ˈlɪvɪŋ ruːm/',
  'shirt': '/ʃɜːt/', 'dress': '/dres/', 'shoes': '/ʃuːz/', 'clothes': '/kləʊðz/',
  'tent': '/tent/', 'campfire': '/ˈkæmpfaɪə/', 'flashlight': '/ˈflæʃlaɪt/', 'campsite': '/ˈkæmpsaɪt/',
  'hello': '/həˈləʊ/', 'hi': '/haɪ/', 'fine': '/faɪn/', 'name': '/neɪm/', 'friend': '/frend/',
  'classmate': '/ˈklɑːsmeɪt/', 'teacher': '/ˈtiːtʃə/',
  'eye': '/aɪ/', 'ear': '/ɪə/', 'nose': '/nəʊz/', 'mouth': '/maʊθ/', 'face': '/feɪs/',
  'singing': '/ˈsɪŋɪŋ/', 'dancing': '/ˈdɑːnsɪŋ/', 'drawing': '/ˈdrɔːɪŋ/', 'swimming': '/ˈswɪmɪŋ/', 'hobby': '/ˈhɒbi/',
  'school': '/skuːl/', 'classroom': '/ˈklɑːsruːm/', 'library': '/ˈlaɪbrəri/', 'computer room': '/kəmˈpjuːtə ruːm/',
  'instruction': '/ɪnˈstrʌkʃn/', 'listen': '/ˈlɪsn/', 'speak': '/spiːk/', 'read': '/riːd/', 'write': '/raɪt/',
  'pencil': '/ˈpensl/', 'ruler': '/ˈruːlə/', 'eraser': '/ɪˈreɪzə/', 'pencil case': '/ˈpensl keɪs/', 'school bag': '/ˈskuːl bæɡ/',
  'red': '/red/', 'blue': '/bluː/', 'green': '/ɡriːn/', 'orange': '/ˈɒrɪndʒ/', 'colour': '/ˈkʌlə/',
  'chess': '/tʃes/', 'badminton': '/ˈbædmɪntən/', 'skipping': '/ˈskɪpɪŋ/', 'break time': '/ˈbreɪk taɪm/',
  'father': '/ˈfɑːðə/', 'brother': '/ˈbrʌðə/', 'sister': '/ˈsɪstə/', 'grandmother': '/ˈɡrænmʌðə/', 'family': '/ˈfæməli/',
  'doctor': '/ˈdɒktə/', 'nurse': '/nɜːs/', 'driver': '/ˈdraɪvə/', 'worker': '/ˈwɜːkə/', 'job': '/dʒɒb/',
  'bathroom': '/ˈbɑːθruːm/',
  'bed': '/bed/', 'chair': '/tʃeə/', 'lamp': '/læmp/', 'wardrobe': '/ˈwɔːdrəʊb/',
  'rice': '/raɪs/', 'bread': '/bred/', 'meat': '/miːt/', 'water': '/ˈwɔːtə/', 'dining table': '/ˈdaɪnɪŋ ˈteɪbl/',
  'parrot': '/ˈpærət/', 'rabbit': '/ˈræbɪt/', 'goldfish': '/ˈɡəʊldfɪʃ/', 'pet': '/pet/',
  'robot': '/ˈrəʊbɒt/', 'doll': '/dɒl/', 'puzzle': '/ˈpʌzl/', 'yo-yo': '/ˈjəʊ jəʊ/',
  'reading': '/ˈriːdɪŋ/', 'cooking': '/ˈkʊkɪŋ/', 'listening': '/ˈlɪsnɪŋ/', 'watching': '/ˈwɒtʃɪŋ/',
  'cycling': '/ˈsaɪklɪŋ/', 'skating': '/ˈskeɪtɪŋ/', 'outdoor': '/ˈaʊtdɔː/',
  'tiger': '/ˈtaɪɡə/', 'peacock': '/ˈpiːkɒk/', 'bear': '/beə/',
  'vietnam': '/ˌvjetˈnæm/', 'america': '/əˈmerɪkə/', 'britain': '/ˈbrɪtn/', 'japan': '/dʒəˈpæn/', 'australia': '/ɒˈstreɪliə/',
  'morning': '/ˈmɔːnɪŋ/', 'afternoon': '/ˌɑːftəˈnuːn/', 'evening': '/ˈiːvnɪŋ/', 'routine': '/ruːˈtiːn/',
  'monday': '/ˈmʌndeɪ/', 'wednesday': '/ˈwenzdeɪ/', 'friday': '/ˈfraɪdeɪ/', 'sunday': '/ˈsʌndeɪ/', 'week': '/wiːk/',
  'birthday': '/ˈbɜːθdeɪ/', 'invitation': '/ˌɪnvɪˈteɪʃn/', 'gift': '/ɡɪft/',
  'swim': '/swɪm/', 'cook': '/kʊk/', 'piano': '/piˈænəʊ/',
  'facility': '/fəˈsɪləti/', 'gym': '/dʒɪm/', 'music room': '/ˈmjuːzɪk ruːm/', 'art room': '/ɑːt ruːm/',
  'timetable': '/ˈtaɪmteɪbl/', 'english': '/ˈɪŋɡlɪʃ/', 'science': '/ˈsaɪəns/', 'vietnamese': '/ˌvjetnəˈmiːz/',
  'subject': '/ˈsʌbdʒɪkt/', 'music': '/ˈmjuːzɪk/', 'art': '/ɑːt/', 'pe': '/ˌpiː ˈiː/',
  'sports day': '/spɔːts deɪ/', 'match': '/mætʃ/', 'race': '/reɪs/', 'medal': '/ˈmedl/',
  'holiday': '/ˈhɒlədeɪ/', 'summer': '/ˈsʌmə/', 'beach': '/biːtʃ/', 'mountains': '/ˈmaʊntɪnz/',
  'tall': '/tɔːl/', 'short': '/ʃɔːt/', 'slim': '/slɪm/', 'young': '/jʌŋ/', 'appearance': '/əˈpɪərəns/',
  'breakfast': '/ˈbrekfəst/', 'lunch': '/lʌntʃ/', 'daily': '/ˈdeɪli/',
  'weekend': '/ˌwiːkˈend/', 'cinema': '/ˈsɪnəmɑː/', 'park': '/pɑːk/',
  'weather': '/ˈweðə/', 'sunny': '/ˈsʌni/', 'rainy': '/ˈreɪni/', 'windy': '/ˈwɪndi/', 'cloudy': '/ˈklaʊdi/',
  'city': '/ˈsɪti/', 'street': '/striːt/', 'building': '/ˈbɪldɪŋ/', 'museum': '/mjuˈziːəm/',
  'shopping centre': '/ˈʃɒpɪŋ ˈsentə/', 'supermarket': '/ˈsuːpəmɑːkɪt/', 'bakery': '/ˈbeɪkəri/', 'bookshop': '/ˈbʊkʃɒp/',
  'animal': '/ˈænɪml/', 'crocodile': '/ˈkrɒkədaɪl/', 'giraffe': '/dʒəˈrɑːf/', 'hippo': '/ˈhɪpəʊ/',
  'summer camp': '/ˈsʌmə kæmp/', 'activity': '/ækˈtɪvəti/',
  'address': '/əˈdres/', 'lane': '/leɪn/', 'hometown': '/ˈhəʊmtaʊn/', 'district': '/ˈdɪstrɪkt/',
  'apartment': '/əˈpɑːtmənt/', 'tower': '/ˈtaʊə/', 'peaceful': '/ˈpiːsfl/',
  'nationality': '/ˌnæʃəˈnæləti/', 'japanese': '/ˌdʒæpəˈniːz/', 'malaysian': '/məˈleɪʒn/', 'american': '/əˈmerɪkən/',
  'free-time': '/friː taɪm/', 'karate': '/kəˈrɑːti/', 'fishing': '/ˈfɪʃɪŋ/', 'gardening': '/ˈɡɑːdnɪŋ/',
  'future': '/ˈfjuːtʃə/', 'pilot': '/ˈpaɪlət/', 'architect': '/ˈɑːkɪtekt/', 'astronaut': '/ˈæstrənɔːt/', 'writer': '/ˈraɪtə/',
  'school room': '/skuːl ruːm/', 'science lab': '/ˈsaɪəns læb/', 'canteen': '/kænˈtiːn/',
  'favourite': '/ˈfeɪvərɪt/', 'story': '/ˈstɔːri/', 'comic book': '/ˈkɒmɪk bʊk/',
  'project': '/ˈprɒdʒekt/', 'presentation': '/ˌpreznˈteɪʃn/', 'discussion': '/dɪˈskʌʃn/',
  'school trip': '/skuːl trɪp/', 'botanical garden': '/bəˈtænɪkl ˈɡɑːdn/', 'national park': '/ˈnæʃnəl pɑːk/',
  'tet holiday': '/tet ˈhɒlədeɪ/', 'lunar new year': '/ˈluːnə njuː jɪə/', 'blossom': '/ˈblɒsəm/', 'lucky money': '/ˈlʌki ˈmʌni/',
  'special day': '/ˈspeʃl deɪ/', 'teachers\' day': '/ˈtiːtʃəz deɪ/', 'children\'s day': '/ˈtʃɪldrənz deɪ/',
  'health': '/helθ/', 'healthy': '/ˈhelθi/', 'exercise': '/ˈeksəsaɪz/', 'vegetables': '/ˈvedʒtəblz/',
  'fruit': '/fruːt/',
  'fever': '/ˈfiːvə/', 'headache': '/ˈhedeɪk/', 'toothache': '/ˈtuːθeɪk/', 'stomach ache': '/ˈstʌmək eɪk/',
  'hospital': '/ˈhɒspɪtl/',
  'season': '/ˈsiːzn/', 'spring': '/sprɪŋ/', 'autumn': '/ˈɔːtəm/', 'winter': '/ˈwɪntə/',
  'folktale': '/ˈfəʊkteɪl/', 'fable': '/ˈfeɪbl/', 'character': '/ˈkærəktə/', 'crow': '/krəʊ/',
  'transport': '/ˈtrænspɔːt/', 'plane': '/pleɪn/', 'motorbike': '/ˈməʊtəbaɪk/', 'underground': '/ˈʌndəɡraʊnd/',
  'place of interest': '/pleɪs əv ˈɪntrəst/', 'historic site': '/hɪˈstɒrɪk saɪt/', 'bay': '/beɪ/', 'mountain': '/ˈmaʊntn/', 'pagoda': '/pəˈɡəʊdə/'
};

async function main() {
  // Inject phonetic into all vocabularyNotes
  for (const passage of Object.values(PASSAGES_DATA)) {
    if (passage.vocabularyNotes) {
      passage.vocabularyNotes = passage.vocabularyNotes.map((vocab) => {
        const key = vocab.word.trim().toLowerCase();
        const phonetic = vocab.phonetic || IPA_DICT[key] || `/${key}/`;
        return {
          word: vocab.word,
          phonetic,
          meaning: vocab.meaning,
        };
      });
    }
  }

  const tsContent = `import type { ReadingPassage } from '../../../types';

export const ENGLISH_READING_PASSAGES: Record<string, ReadingPassage> = ${JSON.stringify(PASSAGES_DATA, null, 2)};

export function getEnglishReadingPassage(lessonId: string): ReadingPassage | undefined {
  if (ENGLISH_READING_PASSAGES[lessonId]) {
    return ENGLISH_READING_PASSAGES[lessonId];
  }
  return undefined;
}
`;

  const outputPath = path.join(root, 'src', 'data', 'curriculum', 'english', 'readingPassages.ts');
  await fs.writeFile(outputPath, tsContent, 'utf-8');
  console.log('Successfully generated src/data/curriculum/english/readingPassages.ts with IPA phonetics!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
