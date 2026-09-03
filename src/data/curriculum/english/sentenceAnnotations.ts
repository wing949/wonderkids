// WonderKids VN — Sentence IPA & Contextual Vietnamese Translation Database
// Bổ sung phiên âm IPA và bản dịch Tiếng Việt đúng ngữ cảnh cho toàn bộ câu mẫu SGK & thẻ tranh Lớp 1-5.

export interface SentenceAnnotation {
  ipa: string;
  vi: string;
}

export const ENGLISH_SENTENCE_ANNOTATIONS: Record<string, SentenceAnnotation> = {
  "Wear your gloves when it is cold.": {
    "ipa": "/weə jɔː ɡlʌvz wen ɪt ɪz kəʊld/",
    "vi": "Hãy đeo đôi găng tay của em khi trời lạnh nhé."
  },
  "Bears love sweet honey in the jar.": {
    "ipa": "/beəz lʌv swiːt ˈhʌn.i ɪn ðə dʒɑː/",
    "vi": "Những chú gấu rất thích mật ong ngọt ngào trong hũ."
  },
  "My mother cooks delicious food for me.": {
    "ipa": "/maɪ ˈmʌð.ər kʊks dɪˈlɪʃ.əs fuːd fɔː miː/",
    "vi": "Mẹ của em nấu những món ăn thơm ngon cho em."
  },
  "He is a good and helpful son.": {
    "ipa": "/hiː ɪz ə ɡʊd ænd ˈhelp.fl sʌn/",
    "vi": "Cậu bé là một người con trai ngoan ngoãn và biết giúp đỡ bố mẹ."
  },
  "The little baby smiles happily.": {
    "ipa": "/ðə ˈlɪtl ˈbeɪ.bi smaɪlz ˈhæp.ɪ.li/",
    "vi": "Em bé nhỏ mỉm cười thật rạng rỡ và hạnh phúc."
  },
  "We have a big birthday cake today.": {
    "ipa": "/wiː hæv ə bɪɡ ˈbɜːθ.deɪ keɪk təˈdeɪ/",
    "vi": "Hôm nay chúng mình có một chiếc bánh sinh nhật thật to."
  },
  "I love eating sweet fresh grapes.": {
    "ipa": "/aɪ lʌv ˈiː.tɪŋ swiːt freʃ ɡreɪps/",
    "vi": "Em rất thích ăn những chùm nho tươi ngọt."
  },
  "Put the English books on the table.": {
    "ipa": "/pʊt ðiː ˈɪŋ.ɡlɪʃ bʊks ɒn ðə ˈteɪ.bl/",
    "vi": "Hãy đặt những cuốn sách Tiếng Anh lên bàn nhé."
  },
  "Mike is riding his new bicycle.": {
    "ipa": "/maɪk ɪz ˈraɪ.dɪŋ hɪz njuː ˈbaɪ.sɪ.kl/",
    "vi": "Bạn Mike đang đạp chiếc xe đạp mới của mình."
  },
  "I ride my red bike to school.": {
    "ipa": "/aɪ raɪd maɪ red baɪk tuː skuːl/",
    "vi": "Em đạp chiếc xe đạp màu đỏ đến trường."
  },
  "I have five colorful pencils in my bag.": {
    "ipa": "/aɪ hæv faɪv ˈkʌl.ə.fl ˈpen.slz ɪn maɪ bæɡ/",
    "vi": "Em có năm chiếc bút chì nhiều màu sắc trong cặp."
  },
  "The children love playing on the slide.": {
    "ipa": "/ðə ˈtʃɪl.drən lʌv ˈpleɪ.ɪŋ ɒn ðə slaɪd/",
    "vi": "Các bạn nhỏ rất thích chơi trên cầu trượt."
  },
  "We walk along the sunny beach.": {
    "ipa": "/wiː wɔːk əˈlɒŋ ðə ˈsʌn.i biːtʃ/",
    "vi": "Chúng em cùng nhau đi dạo dọc theo bãi biển ngập tràn ánh nắng."
  },
  "I love chocolate ice cream in summer.": {
    "ipa": "/aɪ lʌv ˈtʃɒk.lət ˌaɪs ˈkriːm ɪn ˈsʌm.ər/",
    "vi": "Em rất thích ăn kem sô-cô-la mát lạnh vào mùa hè."
  },
  "The sweet pink peach is on the tree.": {
    "ipa": "/ðə swiːt pɪŋk piːtʃ ɪz ɒn ðə triː/",
    "vi": "Quả đào hồng ngọt ngào đang ở trên cành cây."
  },
  "Grandpa drinks a cup of warm tea.": {
    "ipa": "/ˈɡræn.pɑː drɪŋks ə kʌp əv wɔːm tiː/",
    "vi": "Ông đang uống một tách trà ấm nóng."
  },
  "The busy bee makes sweet honey.": {
    "ipa": "/ðə ˈbɪz.i biː meɪks swiːt ˈhʌn.i/",
    "vi": "Chú ong chăm chỉ đang làm ra mật ong ngọt ngào."
  },
  "White sheep are grazing on the green hill.": {
    "ipa": "/waɪt ʃiːp ɑː ˈɡreɪ.zɪŋ ɒn ðə ɡriːn hɪl/",
    "vi": "Những chú cừu trắng đang gặm cỏ trên đồi cỏ xanh."
  },
  "Children enjoy delicious colorful sweets.": {
    "ipa": "/ˈtʃɪl.drən ɪnˈdʒɔɪ dɪˈlɪʃ.əs ˈkʌl.ə.fl swiːts/",
    "vi": "Các bé rất thích những viên kẹo ngọt ngào đầy màu sắc."
  },
  "Birds sing happily in the tall tree.": {
    "ipa": "/bɜːdz sɪŋ ˈhæp.ɪ.li ɪn ðə tɔːl triː/",
    "vi": "Những chú chim đang hót líu lo vui vẻ trên cây cao."
  },
  "We eat fresh warm bread for breakfast.": {
    "ipa": "/wiː iːt freʃ wɔːm bred fɔː ˈbrek.fəst/",
    "vi": "Gia đình em ăn bánh mì nóng giòn vào bữa sáng."
  },
  "Have a healthy breakfast before going to school.": {
    "ipa": "/hæv ə ˈhel.θi ˈbrek.fəst bɪˈfɔː ˈɡəʊ.ɪŋ tuː skuːl/",
    "vi": "Hãy ăn bữa sáng thật bổ dưỡng trước khi đến trường nhé."
  },
  "Nod your head to the cheerful music.": {
    "ipa": "/nɒd jɔː hed tuː ðə ˈtʃɪə.fl ˈmjuː.zɪk/",
    "vi": "Em hãy gật đầu theo điệu nhạc vui tươi nào."
  },
  "Put on your warm sweater in winter.": {
    "ipa": "/pʊt ɒn jɔː wɔːm ˈswet.ər ɪn ˈwɪn.tər/",
    "vi": "Hãy mặc chiếc áo len ấm áp vào mùa đông nhé."
  },
  "A colorful boat floats on the lake.": {
    "ipa": "/ə ˈkʌl.ə.fl bəʊt fləʊts ɒn ðə leɪk/",
    "vi": "Một chiếc thuyền đầy màu sắc đang lướt nhẹ trên mặt hồ."
  },
  "The tourist coach drives through the city.": {
    "ipa": "/ðə ˈtʊə.rɪst kəʊtʃ draɪvz θruː ðə ˈsɪt.i/",
    "vi": "Chiếc xe khách du lịch đang chạy qua thành phố."
  },
  "Lighthouses stand along the rocky coast.": {
    "ipa": "/ˈlaɪt.haʊ.zɪz stænd əˈlɒŋ ðə ˈrɒk.i kəʊst/",
    "vi": "Ngọn hải đăng sừng sững dọc theo bờ biển."
  },
  "Hang your rain coat by the front door.": {
    "ipa": "/hæŋ jɔː reɪn kəʊt baɪ ðə frʌnt dɔː/",
    "vi": "Hãy treo áo khoác đi mưa của em gần cửa ra vào nhé."
  },
  "The red balloon flies high into the blue sky.": {
    "ipa": "/ðə red bəˈluːn flaɪz haɪ ˈɪn.tuː ðə bluː skaɪ/",
    "vi": "Quả bóng bay màu đỏ bay vút lên bầu trời xanh."
  },
  "Healthy food gives us energy to learn.": {
    "ipa": "/ˈhel.θi fuːd ɡɪvz ʌs ˈen.ə.dʒi tuː lɜːn/",
    "vi": "Thức ăn lành mạnh giúp chúng mình có thêm nhiều năng lượng để học tập."
  },
  "I love going to school with my best friends.": {
    "ipa": "/aɪ lʌv ˈɡəʊ.ɪŋ tuː skuːl wɪð maɪ best frendz/",
    "vi": "Em rất thích đến trường cùng các bạn thân của mình."
  },
  "He zooms along the sidewalk on his scooter.": {
    "ipa": "/hiː zuːmz əˈlɒŋ ðə ˈsaɪd.wɔːk ɒn hɪz ˈskuː.tər/",
    "vi": "Cậu bé lướt chiếc xe trượt scooter thật nhanh trên vỉa hè."
  },
  "She wears a pretty white blouse today.": {
    "ipa": "/ʃiː weəz ə ˈprɪt.i waɪt blaʊz təˈdeɪ/",
    "vi": "Hôm nay bạn ấy mặc một chiếc áo sơ mi nữ màu trắng thật xinh."
  },
  "Our cozy house has a lovely flower garden.": {
    "ipa": "/aʊə ˈkəʊ.zi haʊs hæz ə ˈlʌv.li ˈflaʊ.ər ˈɡɑː.dn/",
    "vi": "Ngôi nhà ấm cúng của chúng em có một vườn hoa rất đáng yêu."
  },
  "A tiny grey mouse nibbles on the cheese.": {
    "ipa": "/ə ˈtaɪ.ni ɡreɪ maʊs ˈnɪb.lz ɒn ðə tʃiːz/",
    "vi": "Một chú chuột nhỏ màu xám đang gặm nhấm miếng phô mai."
  },
  "Dad wears smart blue trousers to work.": {
    "ipa": "/dæd weəz smɑːt bluː ˈtraʊ.zəz tuː wɜːk/",
    "vi": "Bố mặc chiếc quần dài màu xanh lịch sự đi làm."
  },
  "The baker bakes fresh bread every morning.": {
    "ipa": "/ðə ˈbeɪ.kər beɪks freʃ bred ˈev.ri ˈmɔː.nɪŋ/",
    "vi": "Bác thợ làm bánh nướng bánh mì thơm phức mỗi buổi sáng."
  },
  "The graceful dancer performs on stage.": {
    "ipa": "/ðə ˈɡreɪs.fl ˈdɑːn.sər pəˈfɔːmz ɒn steɪdʒ/",
    "vi": "Vũ công duyên dáng đang biểu diễn uyển chuyển trên sân khấu."
  },
  "The school bus driver smiles at the students.": {
    "ipa": "/ðə skuːl bʌs ˈdraɪ.vər smaɪlz æt ðə ˈstjuː.dnts/",
    "vi": "Bác tài xế xe buýt trường học mỉm cười thân thiện với các bạn học sinh."
  },
  "Our English teacher helps us learn new words.": {
    "ipa": "/aʊər ˈɪŋ.ɡlɪʃ ˈtiː.tʃər helps ʌs lɜːn njuː wɜːdz/",
    "vi": "Cô giáo dạy Tiếng Anh giúp chúng em học những từ mới thật vui."
  },
  "The black cat is resting peacefully.": {
    "ipa": "/ðə blæk kæt ɪz ˈrest.ɪŋ ˈpiːs.fə.li/",
    "vi": "Chú mèo đen đang nằm nghỉ ngơi thật yên bình."
  },
  "We pick sweet wild blackberries in the forest.": {
    "ipa": "/wiː pɪk swiːt waɪld ˈblæk.bər.iz ɪn ðə ˈfɒr.ɪst/",
    "vi": "Chúng em cùng hái những quả mâm xôi đen ngọt ngào trong rừng."
  },
  "Snuggle under the soft warm blanket.": {
    "ipa": "/ˈsnʌɡ.l ˈʌn.dər ðə sɒft wɔːm ˈblæŋ.kɪt/",
    "vi": "Em đắp chiếc chăn ấm mềm mại đi ngủ thật ngoan."
  },
  "Pink cherry blossom blooms in spring.": {
    "ipa": "/pɪŋk ˈtʃer.i ˈblɒs.əm bluːmz ɪn sprɪŋ/",
    "vi": "Hoa anh đào màu hồng nở rộ rực rỡ vào mùa xuân."
  },
  "Brian is reading an exciting adventure book.": {
    "ipa": "/ˈbraɪ.ən ɪz ˈriː.dɪŋ ən ɪkˈsaɪ.tɪŋ ədˈven.tʃər bʊk/",
    "vi": "Bạn Brian đang đọc một cuốn sách phiêu lưu rất hấp dẫn."
  },
  "A little squirrel sits on the tree branch.": {
    "ipa": "/ə ˈlɪtl ˈskwɪr.əl sɪts ɒn ðə triː brɑːntʃ/",
    "vi": "Một chú sóc nhỏ đang ngồi ngoan trên cành cây."
  },
  "Trains cross over the long steel bridge.": {
    "ipa": "/treɪnz krɒs ˈəʊ.vər ðə lɒŋ stiːl brɪdʒ/",
    "vi": "Những đoàn tàu hỏa chạy qua cây cầu thép dài."
  },
  "Always brush your teeth before bedtime.": {
    "ipa": "/ˈɔːl.weɪz brʌʃ jɔː tiːθ bɪˈfɔː ˈbed.taɪm/",
    "vi": "Em hãy luôn đánh răng sạch sẽ trước khi đi ngủ nhé."
  },
  "The wall clock shows eight o'clock.": {
    "ipa": "/ðə wɔːl klɒk ʃəʊz eɪt əˈklɒk/",
    "vi": "Đồng hồ treo tường đang chỉ đúng 8 giờ."
  },
  "Fold your clean clothes neatly.": {
    "ipa": "/fəʊld jɔː kliːn kləʊðz ˈniːt.li/",
    "vi": "Em hãy gấp quần áo sạch sẽ thật gọn gàng nhé."
  },
  "A fluffy white cloud floats in the sky.": {
    "ipa": "/ə ˈflʌf.i waɪt klaʊd fləʊts ɪn ðə skaɪ/",
    "vi": "Một đám mây trắng xốp bồng bềnh trôi trên bầu trời."
  },
  "The funny clown juggles colorful balls.": {
    "ipa": "/ðə ˈfʌn.i klaʊn ˈdʒʌɡ.lz ˈkʌl.ə.fl bɔːlz/",
    "vi": "Chú hề vui nhộn đang tung hứng những quả bóng sặc sỡ."
  },
  "Mice love to eat delicious yellow cheese.": {
    "ipa": "/maɪs lʌv tuː iːt dɪˈlɪʃ.əs ˈjel.əʊ tʃiːz/",
    "vi": "Những chú chuột rất thích ăn phô mai vàng thơm ngon."
  },
  "Fresh red cherries taste sweet and juicy.": {
    "ipa": "/freʃ red ˈtʃer.iz teɪst swiːt ænd ˈdʒuː.si/",
    "vi": "Những quả anh đào đỏ tươi có vị ngọt và mọng nước."
  },
  "Mother roasts tasty chicken for dinner.": {
    "ipa": "/ˈmʌð.ər rəʊsts ˈteɪ.sti ˈtʃɪk.ɪn fɔː ˈdɪn.ər/",
    "vi": "Mẹ nướng món gà thơm ngon cho bữa tối cả nhà."
  },
  "He receives a sweet box of chocolate.": {
    "ipa": "/hiː rɪˈsiːvz ə swiːt bɒks əv ˈtʃɒk.lət/",
    "vi": "Cậu bé được nhận một hộp sô-cô-la ngọt ngào."
  },
  "Tie your running shoes before the race.": {
    "ipa": "/taɪ jɔː ˈrʌn.ɪŋ ʃuːz bɪˈfɔː ðə reɪs/",
    "vi": "Em nhớ buộc dây giày chạy thật cẩn thận trước cuộc đua nhé."
  },
  "We visit the toy shop on Saturday.": {
    "ipa": "/wiː ˈvɪz.ɪt ðə tɔɪ ʃɒp ɒn ˈsæt.ə.deɪ/",
    "vi": "Chúng em ghé thăm cửa hàng đồ chơi vào ngày thứ Bảy."
  },
  "He wears cool red shorts in summer.": {
    "ipa": "/hiː weəz kuːl red ʃɔːts ɪn ˈsʌm.ər/",
    "vi": "Cậu bé mặc một chiếc quần soóc đỏ mát mẻ vào mùa hè."
  },
  "Put on your favorite sports T-shirt.": {
    "ipa": "/pʊt ɒn jɔː ˈfeɪ.vər.ɪt spɔːts ˈtiː.ʃɜːt/",
    "vi": "Em hãy mặc chiếc áo thun thể thao yêu thích của mình vào nhé."
  },
  "The big airplane takes off into the clouds.": {
    "ipa": "/ðə bɪɡ ˈeə.pleɪn teɪks ɒf ˈɪn.tuː ðə klaʊdz/",
    "vi": "Chiếc máy bay to lớn cất cánh bay vào những đám mây."
  },
  "Water the green house plant every day.": {
    "ipa": "/ˈwɔː.tər ðə ɡriːn haʊs plɑːnt ˈev.ri deɪ/",
    "vi": "Em hãy tưới nước cho chậu cây cảnh trong nhà mỗi ngày nhé."
  },
  "Put delicious fruits on the porcelain plate.": {
    "ipa": "/pʊt dɪˈlɪʃ.əs fruːts ɒn ðə ˈpɔː.səl.ɪn pleɪt/",
    "vi": "Hãy xếp những loại quả thơm ngon lên chiếc đĩa sứ xinh xắn."
  },
  "A sweet purple plum fell from the tree.": {
    "ipa": "/ə swiːt ˈpɜː.pl plʌm fel frəm ðə triː/",
    "vi": "Một quả mận màu tím ngọt ngào vừa rơi xuống từ cành cây."
  },
  "The children go roller skating in the park.": {
    "ipa": "/ðə ˈtʃɪl.drən ɡəʊ ˈrəʊ.lə ˈskeɪt.ɪŋ ɪn ðə pɑːk/",
    "vi": "Các bạn nhỏ cùng nhau trượt pa-tanh trong công viên."
  },
  "Skiing on snowy mountains is very fun.": {
    "ipa": "/ˈskiː.ɪŋ ɒn ˈsnəʊ.i ˈmaʊn.tɪnz ɪz ˈver.i fʌn/",
    "vi": "Trượt tuyết trên những ngọn núi phủ đầy tuyết thật là vui."
  },
  "She wears a lovely pleated pink skirt.": {
    "ipa": "/ʃiː weəz ə ˈlʌv.li ˈpliː.tɪd pɪŋk skɜːt/",
    "vi": "Bạn ấy mặc một chiếc chân váy xếp ly màu hồng thật dễ thương."
  },
  "Stars twinkle brightly in the night sky.": {
    "ipa": "/stɑːz ˈtwɪŋ.kl ˈbraɪt.li ɪn ðə naɪt skaɪ/",
    "vi": "Những ngôi sao lấp lánh rạng rỡ trên bầu trời đêm."
  },
  "The high-speed train arrives right on time.": {
    "ipa": "/ðə ˌhaɪˈspiːd treɪn əˈraɪvz raɪt ɒn taɪm/",
    "vi": "Đoàn tàu cao tốc đã về ga đúng giờ."
  },
  "Carry the wooden tea tray carefully.": {
    "ipa": "/ˈkær.i ðə ˈwʊd.n tiː treɪ ˈkeə.fə.li/",
    "vi": "Em hãy bưng khay trà bằng gỗ thật cẩn thận nhé."
  },
  "Push the supermarket trolley down the aisle.": {
    "ipa": "/pʊʃ ðə ˈsuː.pəˌmɑː.kɪt ˈtrɒl.i daʊn ðiː aɪl/",
    "vi": "Đẩy chiếc xe đẩy siêu thị đi dọc các gian hàng."
  },
  "The large yellow truck carries heavy sand.": {
    "ipa": "/ðə lɑːdʒ ˈjel.əʊ trʌk ˈkær.iz ˈhev.i sænd/",
    "vi": "Chiếc xe tải lớn màu vàng đang chở cát nặng."
  },
  "My older brother helps me with my homework.": {
    "ipa": "/maɪ ˈəʊl.dər ˈbrʌð.ər helps miː wɪð maɪ ˈhəʊm.wɜːk/",
    "vi": "Anh trai của em giúp em làm bài tập về nhà."
  },
  "The colorful parrot has soft bright feathers.": {
    "ipa": "/ðə ˈkʌl.ə.fl ˈpær.ət hæz sɒft braɪt ˈfeð.əz/",
    "vi": "Chú vẹt sặc sỡ có bộ lông vũ mềm mại và tươi sáng."
  },
  "My grandfather tells wonderful folk tales.": {
    "ipa": "/maɪ ˈɡrænˌfɑː.ðər telz ˈwʌn.də.fl fəʊk teɪlz/",
    "vi": "Ông nội của em thường kể những câu chuyện cổ tích thật hay."
  },
  "My grandmother knits a warm woolen scarf.": {
    "ipa": "/maɪ ˈɡrænˌmʌð.ər nɪts ə wɔːm ˈwʊl.ən skɑːf/",
    "vi": "Bà nội đan cho em một chiếc khăn len thật ấm áp."
  },
  "Cover your mouth when you sneeze or cough.": {
    "ipa": "/ˈkʌv.ər jɔː maʊθ wen juː sniːz ɔː kɒf/",
    "vi": "Em nhớ che miệng khi hắt hơi hoặc ho nhé."
  },
  "Drink warm honey water for a sore throat.": {
    "ipa": "/drɪŋk wɔːm ˈhʌn.i ˈwɔː.tər fɔːr ə sɔː θrəʊt/",
    "vi": "Uống một chút nước mật ong ấm sẽ giúp dịu cổ họng khi đau."
  },
  "Give a big thumbs up for great teamwork.": {
    "ipa": "/ɡɪv ə bɪɡ θʌmz ʌp fɔː ɡreɪt ˈtiːm.wɜːk/",
    "vi": "Giơ ngón tay cái chúc mừng tinh thần đồng đội xuất sắc nào."
  },
  "Brush every tooth carefully to keep them strong.": {
    "ipa": "/brʌʃ ˈev.ri tuːθ ˈkeə.fə.li tuː kiːp ðem strɒŋ/",
    "vi": "Em hãy chải từng chiếc răng cẩn thận để hàm răng luôn chắc khỏe nhé."
  },
  "Look at the boy in the playground.": {
    "ipa": "/lʊk æt ðə boy ɪn ðə ˈpleɪ.ɡraʊnd/",
    "vi": "Hãy nhìn boy in the playground kìa!"
  },
  "He has a shiny red ball.": {
    "ipa": "/hiː hæz ə ˈʃaɪ.ni red bɔːl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: quả bóng."
  },
  "He rides a bright blue bike.": {
    "ipa": "/hiː raɪdz ə braɪt bluː baɪk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xe đạp."
  },
  "He reads a wonderful story book.": {
    "ipa": "/hiː riːdz ə ˈwʌn.də.fl story bʊk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cuốn sách."
  },
  "Let's play and learn together!": {
    "ipa": "/lets pleɪ ænd lɜːn together/",
    "vi": "Chúng mình hãy cùng play and learn together nhé!"
  },
  "Welcome to the dining room!": {
    "ipa": "/welcome tuː ðə dining ruːm/",
    "vi": "Chào mừng bạn đến với the dining room!"
  },
  "Mother brings a sweet birthday cake.": {
    "ipa": "/ˈmʌð.ər brings ə sweet birthday keɪk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bánh ngọt."
  },
  "The little ginger cat sits by the chair.": {
    "ipa": "/ðə ˈlɪtl ginger kæt sɪts baɪ ðə tʃeə/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con mèo."
  },
  "Baby plays with a toy car on the floor.": {
    "ipa": "/ˈbeɪ.bi pleɪz wɪð ə tɔɪ kɑː ɒn ðə flɔː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xe ô tô, xe hơi."
  },
  "Have some cake and a cup of milk, please!": {
    "ipa": "/hæv some keɪk ænd ə cup əv mɪlk please/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bánh ngọt, cái tách, cốc."
  },
  "We are walking in the bustling street market.": {
    "ipa": "/wiː ɑː ˈwɔː.kɪŋ ɪn ðə bustling striːt ˈmɑː.kɪt/",
    "vi": "Câu ví dụ ngữ cảnh: We are walking in the bustling street market."
  },
  "Look at the fresh red apples in the basket.": {
    "ipa": "/lʊk æt ðə fresh red ˈæp.lz ɪn ðə basket/",
    "vi": "Hãy nhìn fresh red apples in the basket kìa!"
  },
  "Mother carries a colorful shopping bag.": {
    "ipa": "/ˈmʌð.ər carries ə colorful shopping bæɡ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cái túi xách, ba lô."
  },
  "Grandpa wears a handsome sun hat.": {
    "ipa": "/grandpa weəz ə handsome sun hæt/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cái mũ, cái nón đội đầu."
  },
  "We buy sweet fruits for everyone!": {
    "ipa": "/wiː baɪ sweet fruits fɔː everyone/",
    "vi": "Câu ví dụ ngữ cảnh: We buy sweet fruits for everyone!"
  },
  "This is my neat and cozy bedroom.": {
    "ipa": "/ðɪs ɪz maɪ neat ænd cozy ˈbed.ruːm/",
    "vi": "Câu ví dụ ngữ cảnh: This is my neat and cozy bedroom."
  },
  "Please open the door and come in.": {
    "ipa": "/please ˈəʊ.pən ðə dɔː ænd kʌm ɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cánh cửa ra vào."
  },
  "My study desk is next to the bright window.": {
    "ipa": "/maɪ ˈstʌd.i desk ɪz next tuː ðə braɪt ˈwɪn.dəʊ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bàn học, bàn làm việc."
  },
  "The friendly little dog sleeps on the carpet.": {
    "ipa": "/ðə friendly ˈlɪtl dɒɡ sliːps ɒn ðə carpet/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con chó, bạn cún cưng."
  },
  "I keep my bedroom clean every day!": {
    "ipa": "/aɪ keep maɪ ˈbed.ruːm kliːn every deɪ/",
    "vi": "Câu ví dụ ngữ cảnh: I keep my bedroom clean every day!"
  },
  "Letter I/i phonics: Learn words with the short /ɪ/ sound.": {
    "ipa": "/letter aɪ aɪ phonics lɜːn words wɪð ðə ʃɔːt sound/",
    "vi": "Câu ví dụ ngữ cảnh: Letter I/i phonics: Learn words with the short /ɪ/ sound."
  },
  "We visit a fish and chip shop. I like fish and crispy chips.": {
    "ipa": "/wiː visit ə fɪʃ ænd chip ʃɒp aɪ laɪk fɪʃ ænd crispy chips/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con cá, món cá rán giòn, khoai tây chiên giòn tan."
  },
  "I like fish, milk and chicken for lunch.": {
    "ipa": "/aɪ laɪk fɪʃ mɪlk ænd ˈtʃɪk.ɪn fɔː lunch/",
    "vi": "Em thích fish, milk and chicken for lunch."
  },
  "A colorful flag waves outside the window.": {
    "ipa": "/ə colorful flag waves outside ðə ˈwɪn.dəʊ/",
    "vi": "Câu ví dụ ngữ cảnh: A colorful flag waves outside the window."
  },
  "The food smells so delicious!": {
    "ipa": "/ðə food smells so delicious/",
    "vi": "Câu ví dụ ngữ cảnh: The food smells so delicious!"
  },
  "Good morning! Welcome to our happy classroom.": {
    "ipa": "/ɡʊd ˈmɔː.nɪŋ welcome tuː aʊə ˈhæp.i ˈklɑːs.ruːm/",
    "vi": "Câu ví dụ ngữ cảnh: Good morning! Welcome to our happy classroom."
  },
  "Look at the smiling girl sitting in front.": {
    "ipa": "/lʊk æt ðə smiling girl ˈsɪt.ɪŋ ɪn front/",
    "vi": "Hãy nhìn smiling girl sitting in front kìa!"
  },
  "She has an acoustic guitar in her hands.": {
    "ipa": "/ʃiː hæz ən acoustic guitar ɪn hɜː hændz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đàn ghi-ta."
  },
  "Outside the gate, the flowers bloom in the garden.": {
    "ipa": "/outside ðə gate ðə flowers bloom ɪn ðə ˈɡɑː.dn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cổng trường, cổng nhà, khu vườn xanh mát."
  },
  "Let's sing an English song together!": {
    "ipa": "/lets sɪŋ ən ˈɪŋ.ɡlɪʃ song together/",
    "vi": "Chúng mình hãy cùng sing an English song together nhé!"
  },
  "Grandpa and I walk in the sunny garden.": {
    "ipa": "/grandpa ænd aɪ wɔːk ɪn ðə ˈsʌn.i ˈɡɑː.dn/",
    "vi": "Câu ví dụ ngữ cảnh: Grandpa and I walk in the sunny garden."
  },
  "Touch your hair and wave your hand to say hello.": {
    "ipa": "/touch jɔː heə ænd wave jɔː hænd tuː say hello/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bàn tay, mái tóc."
  },
  "A handsome brown horse runs across the green field.": {
    "ipa": "/ə handsome braʊn hɔːs rʌnz across ðə ɡriːn field/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bàn tay, con ngựa phi nhanh."
  },
  "Our cozy house looks beautiful in the morning light.": {
    "ipa": "/aʊə cozy haʊs looks ˈbjuː.tɪ.fl ɪn ðə ˈmɔː.nɪŋ light/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi nhà ấm áp."
  },
  "Nature is full of wonderful wonders!": {
    "ipa": "/nature ɪz full əv ˈwʌn.də.fl wonders/",
    "vi": "Câu ví dụ ngữ cảnh: Nature is full of wonderful wonders!"
  },
  "It is a sunny Sunday in the green park.": {
    "ipa": "/ɪt ɪz ə ˈsʌn.i ˈsʌn.deɪ ɪn ðə ɡriːn pɑːk/",
    "vi": "Câu ví dụ ngữ cảnh: It is a sunny Sunday in the green park."
  },
  "Look! An elephant eats fresh grass over there.": {
    "ipa": "/lʊk ən ˈel.ɪ.fənt iːts fresh grass over ðeə/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con voi to lớn."
  },
  "A tiny brown bird sits near a speckled egg in the nest.": {
    "ipa": "/ə tiny braʊn bɜːd sɪts near ə speckled eɡ ɪn ðə nest/",
    "vi": "Câu ví dụ SGK chứa từ vựng: quả trứng."
  },
  "The school bell rings softly in the distance.": {
    "ipa": "/ðə skuːl bell rings softly ɪn ðə distance/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cái chuông reo."
  },
  "We take our notebook and pen to draw nature.": {
    "ipa": "/wiː teɪk aʊə notebook ænd pen tuː drɔː nature/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cây bút mực."
  },
  "Ben and Mum are at the grocery shop.": {
    "ipa": "/ben ænd mʌm ɑː æt ðə grocery ʃɒp/",
    "vi": "Câu ví dụ ngữ cảnh: Ben and Mum are at the grocery shop."
  },
  "Ben: \\": {
    "ipa": "/ben/",
    "vi": "Câu ví dụ ngữ cảnh: Ben: \\"
  },
  ",": {
    "ipa": "//",
    "vi": "Câu ví dụ ngữ cảnh: ,"
  },
  "Here you are, young boy. Fresh and cold milk for you.\\": {
    "ipa": "/hɪə juː ɑː jʌŋ boy fresh ænd kəʊld mɪlk fɔː juː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sữa tươi dinh dưỡng."
  },
  "Thank you very much! Look at that cute pink pig toy, Mum!\\": {
    "ipa": "/thank juː very much lʊk æt ðæt kjuːt pɪŋk pɪɡ tɔɪ mʌm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con lợn, con heo, mực viết."
  },
  "It is very adorable, Ben.\\": {
    "ipa": "/ɪt ɪz very adorable ben/",
    "vi": "Câu ví dụ ngữ cảnh: It is very adorable, Ben.\\"
  },
  "Our class goes to the city zoo today.": {
    "ipa": "/aʊə class ɡəʊz tuː ðə ˈsɪt.i zuː təˈdeɪ/",
    "vi": "Câu ví dụ ngữ cảnh: Our class goes to the city zoo today."
  },
  "Look at the lively monkey swinging on the tree branches!": {
    "ipa": "/lʊk æt ðə lively ˈmʌŋ.ki swinging ɒn ðə tree branches/",
    "vi": "Hãy nhìn lively monkey swinging on the tree branches kìa!"
  },
  "Mother gives baby a sweet yellow mango.": {
    "ipa": "/ˈmʌð.ər ɡɪvz ˈbeɪ.bi ə sweet ˈjel.əʊ ˈmæŋ.ɡəʊ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: quả xoài chín vàng ngọt, mẹ, người mẹ yêu quý."
  },
  "A tiny grey mouse scampers near the flowers.": {
    "ipa": "/ə tiny ɡreɪ mouse scampers near ðə flowers/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con chuột."
  },
  "We love exploring the animal world!": {
    "ipa": "/wiː lʌv exploring ðə animal world/",
    "vi": "Câu ví dụ ngữ cảnh: We love exploring the animal world!"
  },
  "Mai and her brother wait at the bus stop.": {
    "ipa": "/mai ænd hɜː ˈbrʌð.ər wait æt ðə bʌs stop/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xe buýt công cộng, trạm dừng, điểm dừng xe."
  },
  "Here comes the big yellow school bus!": {
    "ipa": "/hɪə kʌmz ðə bɪɡ ˈjel.əʊ skuːl bʌs/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xe buýt công cộng."
  },
  "Mai holds her school bag and textbook carefully.": {
    "ipa": "/mai holds hɜː skuːl bæɡ ænd textbook carefully/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cặp sách, túi đựng đồ."
  },
  "The driver opens the bus door with a warm smile.": {
    "ipa": "/ðə driver ˈəʊ.pənz ðə bʌs dɔː wɪð ə wɔːm smile/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xe buýt công cộng."
  },
  "\\": {
    "ipa": "//",
    "vi": "Câu ví dụ ngữ cảnh: \\"
  },
  "Look at the clear blue lake under the sun.": {
    "ipa": "/lʊk æt ðə clear bluː leɪk under ðə sun/",
    "vi": "Hãy nhìn clear blue lake under the sun kìa!"
  },
  "A yellow leaf floats gently on the water.": {
    "ipa": "/ə ˈjel.əʊ leaf floats gently ɒn ðə ˈwɔː.tər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: chiếc lá cây."
  },
  "Two white ducks swim gracefully side by side.": {
    "ipa": "/tuː waɪt dʌks swɪm gracefully side baɪ side/",
    "vi": "Câu ví dụ ngữ cảnh: Two white ducks swim gracefully side by side."
  },
  "A small wooden boat rests near the shore.": {
    "ipa": "/ə smɔːl wooden bəʊt rests near ðə shore/",
    "vi": "Câu ví dụ ngữ cảnh: A small wooden boat rests near the shore."
  },
  "The breeze is cool and peaceful today.": {
    "ipa": "/ðə breeze ɪz kuːl ænd peaceful təˈdeɪ/",
    "vi": "Câu ví dụ ngữ cảnh: The breeze is cool and peaceful today."
  },
  "It is lunchtime in the bright school canteen.": {
    "ipa": "/ɪt ɪz lunchtime ɪn ðə braɪt skuːl canteen/",
    "vi": "Câu ví dụ ngữ cảnh: It is lunchtime in the bright school canteen."
  },
  "Nam: \\": {
    "ipa": "/nam/",
    "vi": "Câu ví dụ ngữ cảnh: Nam: \\"
  },
  "Here is your nutritious lunch, Nam.\\": {
    "ipa": "/hɪə ɪz jɔː nutritious lunch nam/",
    "vi": "Câu ví dụ ngữ cảnh: Here is your nutritious lunch, Nam.\\"
  },
  "Lucy steps into the wonderful toy shop with her father.": {
    "ipa": "/lucy steps into ðə ˈwʌn.də.fl tɔɪ ʃɒp wɪð hɜː ˈfɑː.ðər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đồ chơi trẻ em."
  },
  "Lucy: \\": {
    "ipa": "/lucy/",
    "vi": "Câu ví dụ ngữ cảnh: Lucy: \\"
  },
  "Would you like to have it for your good grades?\\": {
    "ipa": "/wʊd juː laɪk tuː hæv ɪt fɔː jɔː ɡʊd grades/",
    "vi": "Câu ví dụ ngữ cảnh: Would you like to have it for your good grades?\\"
  },
  "Yes, please! I love this teddy bear and the toy train!\\": {
    "ipa": "/yes please aɪ lʌv ðɪs teddy beə ænd ðə tɔɪ treɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đồ chơi trẻ em, gấu bông nhồi bông, xe lửa, tàu hỏa đồ chơi."
  },
  "The school football match is exciting today!": {
    "ipa": "/ðə skuːl football match ɪz exciting təˈdeɪ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn bóng đá, quả bóng đá, bàn chân."
  },
  "The football players wear vibrant red and blue shirts.": {
    "ipa": "/ðə football players weə vibrant red ænd bluː shirts/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn bóng đá, quả bóng đá, bàn chân."
  },
  "Minh kicks the football straight into the net.": {
    "ipa": "/minh kicks ðə football straight into ðə net/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn bóng đá, quả bóng đá, bàn chân."
  },
  "the crowd cheers loudly.": {
    "ipa": "/ðə crowd cheers loudly/",
    "vi": "Câu ví dụ ngữ cảnh: the crowd cheers loudly."
  },
  "Everyone celebrates the victory with high-fives!": {
    "ipa": "/everyone celebrates ðə victory wɪð high fives/",
    "vi": "Câu ví dụ ngữ cảnh: Everyone celebrates the victory with high-fives!"
  },
  "Home is the sweetest place of all.": {
    "ipa": "/həʊm ɪz ðə sweetest place əv all/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tổ ấm gia đình."
  },
  "Father waters the flowers in front of the house.": {
    "ipa": "/ˈfɑː.ðər waters ðə flowers ɪn front əv ðə haʊs/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi nhà."
  },
  "Mother and I prepare dinner in the warm kitchen.": {
    "ipa": "/ˈmʌð.ər ænd aɪ prepare dinner ɪn ðə wɔːm ˈkɪtʃ.ɪn/",
    "vi": "Câu ví dụ ngữ cảnh: Mother and I prepare dinner in the warm kitchen."
  },
  "We sit together, share stories and laugh happily.": {
    "ipa": "/wiː sɪt together share stories ænd laugh ˈhæp.ɪ.li/",
    "vi": "Câu ví dụ ngữ cảnh: We sit together, share stories and laugh happily."
  },
  "I love my warm family and peaceful home.": {
    "ipa": "/aɪ lʌv maɪ wɔːm ˈfæm.əl.i ænd peaceful həʊm/",
    "vi": "Em rất yêu thích my warm family and peaceful home."
  },
  "Today is Peter's seventh birthday party!": {
    "ipa": "/təˈdeɪ ɪz peters seventh birthday party/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bữa tiệc sinh nhật."
  },
  "Friends arrive with colorful gift boxes and balloons.": {
    "ipa": "/frendz arrive wɪð colorful gift boxes ænd balloons/",
    "vi": "Câu ví dụ ngữ cảnh: Friends arrive with colorful gift boxes and balloons."
  },
  "Peter: \\": {
    "ipa": "/peter/",
    "vi": "Câu ví dụ ngữ cảnh: Peter: \\"
  },
  "Happy birthday, Peter! The popcorn smells so yummy!\\": {
    "ipa": "/ˈhæp.i birthday peter ðə popcorn smells so yummy/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bỏng ngô thơm lừng."
  },
  "The sun shines warmly in the green backyard.": {
    "ipa": "/ðə sun ʃaɪnz warmly ɪn ðə ɡriːn backyard/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sân sau ngôi nhà."
  },
  "A fluffy white kitten plays playfully with a ball of wool.": {
    "ipa": "/ə fluffy waɪt kitten pleɪz playfully wɪð ə bɔːl əv wool/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mèo con nhỏ xíu."
  },
  "Tony rides his new red bicycle along the garden path.": {
    "ipa": "/tony raɪdz hɪz njuː red bicycle along ðə ˈɡɑː.dn path/",
    "vi": "Câu ví dụ ngữ cảnh: Tony rides his new red bicycle along the garden path."
  },
  "High in the clear sky, a colorful diamond kite soars.": {
    "ipa": "/high ɪn ðə clear sky ə colorful diamond kaɪt soars/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con diều bay trên trời."
  },
  "Spending time in the fresh backyard is full of joy!": {
    "ipa": "/spending taɪm ɪn ðə fresh backyard ɪz full əv joy/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sân sau ngôi nhà."
  },
  "Golden sand beneath our bare feet,": {
    "ipa": "/golden sand beneath aʊə bare fiːt/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bãi cát vàng mịn."
  },
  "The blue sea waves roll and meet.": {
    "ipa": "/ðə bluː siː waves roll ænd meet/",
    "vi": "Câu ví dụ SGK chứa từ vựng: biển cả mênh mông."
  },
  "A white sailboat glides far away,": {
    "ipa": "/ə waɪt sailboat glides far away/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cánh buồm, lướt buồm."
  },
  "Under the warm and cheerful sun of May.": {
    "ipa": "/under ðə wɔːm ænd cheerful sun əv meɪ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mặt trời rực rỡ."
  },
  "We build sandcastles on the lovely shore.": {
    "ipa": "/wiː build sandcastles ɒn ðə lovely shore/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bãi cát vàng mịn."
  },
  "We visit our grandparents in the peaceful countryside.": {
    "ipa": "/wiː visit aʊə grandparents ɪn ðə peaceful ˈkʌn.tri.saɪd/",
    "vi": "Câu ví dụ SGK chứa từ vựng: vùng nông thôn yên bình."
  },
  "A calm blue river flows gently through the green fields.": {
    "ipa": "/ə calm bluː ˈrɪv.ər flows gently through ðə ɡriːn fields/",
    "vi": "Câu ví dụ SGK chứa từ vựng: dòng sông."
  },
  "After the light summer shower, a bright rainbow appears in the sky.": {
    "ipa": "/after ðə light ˈsʌm.ər shower ə braɪt rainbow appears ɪn ðə sky/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cầu vồng nhiều màu."
  },
  "We walk along the country road and breathe fresh air.": {
    "ipa": "/wiː wɔːk along ðə country rəʊd ænd breathe fresh air/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con đường quê."
  },
  "Life in the countryside is so relaxing and serene!": {
    "ipa": "/life ɪn ðə ˈkʌn.tri.saɪd ɪz so relaxing ænd serene/",
    "vi": "Câu ví dụ SGK chứa từ vựng: vùng nông thôn yên bình."
  },
  "Teacher: \\": {
    "ipa": "/ˈtiː.tʃər/",
    "vi": "Câu ví dụ ngữ cảnh: Teacher: \\"
  },
  "We are ready, teacher!\\": {
    "ipa": "/wiː ɑː ready ˈtiː.tʃər/",
    "vi": "Câu ví dụ ngữ cảnh: We are ready, teacher!\\"
  },
  "Please raise your hand if you have a question.\\": {
    "ipa": "/please raise jɔː hænd if juː hæv ə question/",
    "vi": "Câu ví dụ SGK chứa từ vựng: câu hỏi."
  },
  "Uncle Ba is a hardworking farmer on a big green farm.": {
    "ipa": "/uncle ba ɪz ə hardworking farmer ɒn ə bɪɡ ɡriːn fɑːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nông trại, trang trại, bác nông dân."
  },
  "He grows sweet corn, fresh tomatoes and golden wheat in the field.": {
    "ipa": "/hiː grows sweet corn fresh tomatoes ænd golden wheat ɪn ðə field/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cánh đồng xanh."
  },
  "In the morning, he feeds the chickens, ducks and cows.": {
    "ipa": "/ɪn ðə ˈmɔː.nɪŋ hiː feeds ðə chickens dʌks ænd kaʊz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con vịt."
  },
  "We help him pick ripe red apples in the orchard.": {
    "ipa": "/wiː help hɪm pick ripe red ˈæp.lz ɪn ðə orchard/",
    "vi": "Câu ví dụ ngữ cảnh: We help him pick ripe red apples in the orchard."
  },
  "A day on the farm is full of energy and smiles!": {
    "ipa": "/ə deɪ ɒn ðə fɑːm ɪz full əv energy ænd smiles/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nông trại, trang trại."
  },
  "Mother is busy cooking a delicious meal in the kitchen.": {
    "ipa": "/ˈmʌð.ər ɪz busy ˈkʊk.ɪŋ ə delicious meal ɪn ðə ˈkɪtʃ.ɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhà bếp."
  },
  "The silver kettle whistles on the stove with boiling water.": {
    "ipa": "/ðə silver kettle whistles ɒn ðə stove wɪð boiling ˈwɔː.tər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ấm đun nước."
  },
  "Mother slices fresh carrots with a kitchen knife carefully.": {
    "ipa": "/ˈmʌð.ər slices fresh carrots wɪð ə ˈkɪtʃ.ɪn knife carefully/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhà bếp, con dao thái gọt."
  },
  "The kitchen smells wonderful with warm soup and bread.": {
    "ipa": "/ðə ˈkɪtʃ.ɪn smells ˈwʌn.də.fl wɪð wɔːm suːp ænd bred/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhà bếp."
  },
  "We set the table and enjoy dinner together.": {
    "ipa": "/wiː set ðə ˈteɪ.bl ænd enjoy dinner together/",
    "vi": "Câu ví dụ ngữ cảnh: We set the table and enjoy dinner together."
  },
  "Our small village lies nestled in a green valley.": {
    "ipa": "/aʊə smɔːl ˈvɪl.ɪdʒ lies nestled ɪn ə ɡriːn valley/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi làng yên bình, thung lũng xanh."
  },
  "A blue delivery van drives slowly along the village lane.": {
    "ipa": "/ə bluː delivery van drives slowly along ðə ˈvɪl.ɪdʒ lane/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi làng yên bình, xe tải nhỏ."
  },
  "An old musician plays sweet melodies on his violin.": {
    "ipa": "/ən əʊld musician pleɪz sweet melodies ɒn hɪz violin/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đàn vĩ cầm."
  },
  "Children laugh and play traditional games under the banyan tree.": {
    "ipa": "/children laugh ænd pleɪ traditional ɡeɪmz under ðə banyan tree/",
    "vi": "Câu ví dụ ngữ cảnh: Children laugh and play traditional games under the banyan tree."
  },
  "We love the warmth and harmony of our village.": {
    "ipa": "/wiː lʌv ðə warmth ænd harmony əv aʊə ˈvɪl.ɪdʒ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi làng yên bình."
  },
  "Linda and her mother visit the local grocery store.": {
    "ipa": "/linda ænd hɜː ˈmʌð.ər visit ðə local grocery stɔː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cửa hàng tạp hóa."
  },
  "Linda: \\": {
    "ipa": "/linda/",
    "vi": "Câu ví dụ ngữ cảnh: Linda: \\"
  },
  "Sure! Let's also get fresh milk for breakfast.\\": {
    "ipa": "/sure lets also get fresh mɪlk fɔː breakfast/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sữa tươi."
  },
  "Today is our weekend trip to the city zoo.": {
    "ipa": "/təˈdeɪ ɪz aʊə weekend trip tuː ðə ˈsɪt.i zuː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sở thú, vườn thú."
  },
  "Look at the beautiful zebra with black and white stripes!": {
    "ipa": "/lʊk æt ðə ˈbjuː.tɪ.fl ˈzeb.rə wɪð blæk ænd waɪt stripes/",
    "vi": "Hãy nhìn beautiful zebra with black and white stripes kìa!"
  },
  "There are zero clouds in the bright blue sky.": {
    "ipa": "/ðeə ɑː zero clouds ɪn ðə braɪt bluː sky/",
    "vi": "Có những zero clouds in the bright blue sky."
  },
  "Children take photos of friendly animals from all over the world.": {
    "ipa": "/children teɪk photos əv friendly animals from all over ðə world/",
    "vi": "Câu ví dụ ngữ cảnh: Children take photos of friendly animals from all over the world."
  },
  "Protecting wildlife keeps our planet beautiful!": {
    "ipa": "/protecting wildlife keeps aʊə planet ˈbjuː.tɪ.fl/",
    "vi": "Câu ví dụ ngữ cảnh: Protecting wildlife keeps our planet beautiful!"
  },
  "After school, we gather at the school playground.": {
    "ipa": "/after skuːl wiː gather æt ðə skuːl ˈpleɪ.ɡraʊnd/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sân chơi."
  },
  "Mai slides down the tall red slide with a cheer.": {
    "ipa": "/mai slides down ðə tɔːl red slide wɪð ə cheer/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cầu trượt."
  },
  "Nam and Peter play on the wooden seesaw happily.": {
    "ipa": "/nam ænd peter pleɪ ɒn ðə wooden seesaw ˈhæp.ɪ.li/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bập bênh."
  },
  "Lucy swings high on the swing into the afternoon air.": {
    "ipa": "/lucy swings high ɒn ðə swing into ðə ˌɑːf.təˈnuːn air/",
    "vi": "Câu ví dụ SGK chứa từ vựng: xích đu."
  },
  "Active play keeps us healthy and joyful!": {
    "ipa": "/active pleɪ keeps ʌs healthy ænd joyful/",
    "vi": "Câu ví dụ ngữ cảnh: Active play keeps us healthy and joyful!"
  },
  "Father takes us to a cozy garden café on Saturday.": {
    "ipa": "/ˈfɑː.ðər teɪks ʌs tuː ə cozy ˈɡɑː.dn caf ɒn ˈsæt.ə.deɪ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: quán cà phê."
  },
  "Father orders a warm cup of coffee.": {
    "ipa": "/ˈfɑː.ðər orders ə wɔːm cup əv coffee/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cà phê, tách, cốc."
  },
  "Mother and I enjoy chocolate cookies and fresh fruit juice.": {
    "ipa": "/ˈmʌð.ər ænd aɪ enjoy chocolate ˈkʊk.iz ænd fresh fruit dʒuːs/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bánh quy giòn."
  },
  "We listen to soft music and talk about our school week.": {
    "ipa": "/wiː ˈlɪs.n tuː soft ˈmjuː.zɪk ænd talk about aʊə skuːl wiːk/",
    "vi": "Câu ví dụ ngữ cảnh: We listen to soft music and talk about our school week."
  },
  "The sweet aroma of cookies fills the entire café.": {
    "ipa": "/ðə sweet aroma əv ˈkʊk.iz fills ðə entire caf/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bánh quy giòn, quán cà phê."
  },
  "What is seven plus five?\\": {
    "ipa": "/wɒt ɪz ˈsev.n plus faɪv/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cộng."
  },
  "Seven plus five is twelve!\\": {
    "ipa": "/ˈsev.n plus faɪv ɪz twelve/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cộng."
  },
  "Excellent! Let's count together from one to twenty.\\": {
    "ipa": "/excellent lets count together from wʌn tuː twenty/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đếm số."
  },
  "Where is everyone in our home this afternoon?": {
    "ipa": "/weə ɪz everyone ɪn aʊə həʊm ðɪs ˌɑːf.təˈnuːn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tổ ấm gia đình."
  },
  "Dad is reading a newspaper in the living room.": {
    "ipa": "/dæd ɪz ˈriː.dɪŋ ə newspaper ɪn ðə ˈlɪv.ɪŋ ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng khách."
  },
  "Grandma is resting quietly in the bedroom.": {
    "ipa": "/grandma ɪz resting quietly ɪn ðə ˈbed.ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng ngủ."
  },
  "My brother and I are studying at our desks.": {
    "ipa": "/maɪ ˈbrʌð.ər ænd aɪ ɑː ˈstʌd.i.ɪŋ æt aʊə desks/",
    "vi": "Câu ví dụ ngữ cảnh: My brother and I are studying at our desks."
  },
  "Every room in our home is filled with warmth and love.": {
    "ipa": "/every ruːm ɪn aʊə həʊm ɪz filled wɪð warmth ænd lʌv/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tổ ấm gia đình."
  },
  "Mother takes me to the fashion clothes shop.": {
    "ipa": "/ˈmʌð.ər teɪks miː tuː ðə fashion clothes ʃɒp/",
    "vi": "Câu ví dụ SGK chứa từ vựng: quần áo."
  },
  "I try on a smart white shirt and a blue school dress.": {
    "ipa": "/aɪ try ɒn ə smart waɪt ʃɜːt ænd ə bluː skuːl dres/",
    "vi": "Câu ví dụ SGK chứa từ vựng: áo sơ mi, chiếc váy liền."
  },
  "Mother checks the soft fabric and matching shoes.": {
    "ipa": "/ˈmʌð.ər checks ðə soft fabric ænd matching ʃuːz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đôi giày."
  },
  "We set up our green tent on the grassy campsite.": {
    "ipa": "/wiː set up aʊə ɡriːn tent ɒn ðə grassy campsite/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lều cắm trại, khu cắm trại."
  },
  "At night, we build a bright campfire to keep warm.": {
    "ipa": "/æt naɪt wiː build ə braɪt campfire tuː keep wɔːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lửa trại bập bùng."
  },
  "Father turns on the flashlight to guide our path in the woods.": {
    "ipa": "/ˈfɑː.ðər turns ɒn ðə flashlight tuː guide aʊə path ɪn ðə woods/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đèn pin."
  },
  "We gaze up at the sparkling stars and sing camping songs.": {
    "ipa": "/wiː gaze up æt ðə sparkling stars ænd sɪŋ camping songs/",
    "vi": "Câu ví dụ ngữ cảnh: We gaze up at the sparkling stars and sing camping songs."
  },
  "Camping under the open sky is an unforgettable adventure!": {
    "ipa": "/camping under ðə ˈəʊ.pən sky ɪz ən unforgettable adventure/",
    "vi": "Câu ví dụ ngữ cảnh: Camping under the open sky is an unforgettable adventure!"
  },
  "It is the first day of the new school year.": {
    "ipa": "/ɪt ɪz ðə first deɪ əv ðə njuː skuːl jɪər/",
    "vi": "Câu ví dụ ngữ cảnh: It is the first day of the new school year."
  },
  "Hi Ben! I'm Mai. Nice to meet you.\\": {
    "ipa": "/hi ben im mai naɪs tuː meet juː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: chào bạn."
  },
  "How are you today, Mai?\\": {
    "ipa": "/haʊ ɑː juː təˈdeɪ mai/",
    "vi": "Câu ví dụ ngữ cảnh: How are you today, Mai?\\"
  },
  "I'm fine, thank you. Let's go to our new classroom!\\": {
    "ipa": "/im faɪn thank juː lets ɡəʊ tuː aʊə njuː ˈklɑːs.ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: khỏe, tốt đẹp."
  },
  "My name is Lucy. I am eight years old.\\": {
    "ipa": "/maɪ name ɪz lucy aɪ æm eɪt jɪəz əʊld/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tên gọi."
  },
  "My name is Bill. I am from London.\\": {
    "ipa": "/maɪ name ɪz bill aɪ æm from london/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tên gọi."
  },
  "Welcome Lucy and Bill! Let's all be good friends.\\": {
    "ipa": "/welcome lucy ænd bill lets all be ɡʊd frendz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người bạn."
  },
  "Mary: \\": {
    "ipa": "/mary/",
    "vi": "Câu ví dụ ngữ cảnh: Mary: \\"
  },
  "That is my friend Quan. He is very kind and smart.\\": {
    "ipa": "/ðæt ɪz maɪ frend quan hiː ɪz very kind ænd smart/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người bạn thân."
  },
  "Let's invite him to play football with us!\\": {
    "ipa": "/lets invite hɪm tuː pleɪ football wɪð ʌs/",
    "vi": "Câu ví dụ ngữ cảnh: Let's invite him to play football with us!\\"
  },
  "Touch your ears! Open your mouth!\\": {
    "ipa": "/touch jɔː ɪəz ˈəʊ.pən jɔː maʊθ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tai, miệng (dùng để nói và cười)."
  },
  "We touch our ears and point to our nose!\\": {
    "ipa": "/wiː touch aʊə ɪəz ænd point tuː aʊə nəʊz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tai, mũi."
  },
  "Look at your bright eyes and lovely smiles. Good job everyone!\\": {
    "ipa": "/lʊk æt jɔː braɪt aɪz ænd lovely smiles ɡʊd job everyone/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mắt."
  },
  "Everyone in our class has a special hobby.": {
    "ipa": "/everyone ɪn aʊə class hæz ə special hobby/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sở thích."
  },
  "Mai loves singing English songs and dancing.": {
    "ipa": "/mai lʌvz ˈsɪŋ.ɪŋ ˈɪŋ.ɡlɪʃ songs ænd ˈdɑːn.sɪŋ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hát ca, nhảy múa."
  },
  "Minh enjoys drawing colorful landscape pictures.": {
    "ipa": "/minh enjoys ˈdrɔː.ɪŋ colorful landscape pictures/",
    "vi": "Câu ví dụ SGK chứa từ vựng: vẽ tranh."
  },
  "Tony likes swimming in the cool pool on weekends.": {
    "ipa": "/tony laɪks ˈswɪm.ɪŋ ɪn ðə kuːl pool ɒn weekends/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bơi lội."
  },
  "Having hobbies makes our lives colorful and creative!": {
    "ipa": "/having hobbies meɪks aʊə lɪvz colorful ænd creative/",
    "vi": "Câu ví dụ ngữ cảnh: Having hobbies makes our lives colorful and creative!"
  },
  "Our elementary school is large, modern and beautiful.": {
    "ipa": "/aʊə elementary skuːl ɪz large modern ænd ˈbjuː.tɪ.fl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: trường học."
  },
  "There is a spacious library with thousands of books.": {
    "ipa": "/ðeə ɪz ə spacious ˈlaɪ.brər.i wɪð thousands əv bʊks/",
    "vi": "Có một spacious library with thousands of books."
  },
  "Students practice typing in the computer room.": {
    "ipa": "/ˈstjuː.dnts practice typing ɪn ðə computer ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng máy tính."
  },
  "During break time, we run and play in the green playground.": {
    "ipa": "/during break taɪm wiː rʌn ænd pleɪ ɪn ðə ɡriːn ˈpleɪ.ɡraʊnd/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sân chơi."
  },
  "We are proud of our lovely school and caring teachers.": {
    "ipa": "/wiː ɑː proud əv aʊə lovely skuːl ænd caring ˈtiː.tʃəz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: trường học."
  },
  "Open your English books to page fifty, please.\\": {
    "ipa": "/ˈəʊ.pən jɔː ˈɪŋ.ɡlɪʃ bʊks tuː page fifty please/",
    "vi": "Câu ví dụ ngữ cảnh: Open your English books to page fifty, please.\\"
  },
  "Listen carefully, speak clearly, read aloud and write neatly.\\": {
    "ipa": "/ˈlɪs.n carefully spiːk clearly riːd aloud ænd raɪt neatly/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lắng nghe, nói chuyện, đọc bài, viết bài."
  },
  "I pack my school bag carefully every morning.": {
    "ipa": "/aɪ pack maɪ skuːl bæɡ carefully every ˈmɔː.nɪŋ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cặp sách."
  },
  "I have two sharpened pencils, a plastic ruler and an eraser.": {
    "ipa": "/aɪ hæv tuː sharpened ˈpen.slz ə plastic ˈruː.lər ænd ən ɪˈreɪ.zər/",
    "vi": "Em có two sharpened pencils, a plastic ruler and an eraser."
  },
  "My pencil case is decorated with cute cartoon stickers.": {
    "ipa": "/maɪ ˈpen.sl case ɪz decorated wɪð kjuːt cartoon stickers/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bút chì, hộp bút."
  },
  "Keeping our school things tidy helps us study much better.": {
    "ipa": "/keeping aʊə skuːl things tidy helps ʌs ˈstʌd.i much better/",
    "vi": "Câu ví dụ ngữ cảnh: Keeping our school things tidy helps us study much better."
  },
  "Red is the apple sweet and bright,": {
    "ipa": "/red ɪz ðə ˈæp.l sweet ænd braɪt/",
    "vi": "Câu ví dụ SGK chứa từ vựng: màu đỏ."
  },
  "Blue is the ocean shining in light.": {
    "ipa": "/bluː ɪz ðə ocean ˈʃaɪ.nɪŋ ɪn light/",
    "vi": "Câu ví dụ SGK chứa từ vựng: màu xanh dương."
  },
  "Green is the grass on the garden hill,": {
    "ipa": "/ɡriːn ɪz ðə grass ɒn ðə ˈɡɑː.dn hill/",
    "vi": "Câu ví dụ SGK chứa từ vựng: màu xanh lá."
  },
  "Orange is the sunset calm and still.": {
    "ipa": "/ˈɒr.ɪndʒ ɪz ðə sunset calm ænd still/",
    "vi": "Câu ví dụ SGK chứa từ vựng: màu cam."
  },
  "A world of colours for you and me!": {
    "ipa": "/ə world əv colours fɔː juː ænd miː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: màu sắc."
  },
  "The school bell rings! It is break time at last!": {
    "ipa": "/ðə skuːl bell rings ɪt ɪz break taɪm æt last/",
    "vi": "Câu ví dụ SGK chứa từ vựng: giờ ra chơi."
  },
  "Minh and Peter play a thrilling game of chess in the room.": {
    "ipa": "/minh ænd peter pleɪ ə thrilling ɡeɪm əv chess ɪn ðə ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cờ vua."
  },
  "Mai and Lucy play badminton in the courtyard.": {
    "ipa": "/mai ænd lucy pleɪ badminton ɪn ðə courtyard/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cầu lông."
  },
  "A group of friends enjoy skipping rope together.": {
    "ipa": "/ə group əv frendz enjoy skipping rope together/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhảy dây."
  },
  "Break time gives us energy and big smiles!": {
    "ipa": "/break taɪm ɡɪvz ʌs energy ænd bɪɡ smiles/",
    "vi": "Câu ví dụ SGK chứa từ vựng: giờ ra chơi."
  },
  "This is a cherished photo of my happy family.": {
    "ipa": "/ðɪs ɪz ə cherished photo əv maɪ ˈhæp.i ˈfæm.əl.i/",
    "vi": "Câu ví dụ SGK chứa từ vựng: gia đình."
  },
  "My father is an engineer, and my mother is a kind teacher.": {
    "ipa": "/maɪ ˈfɑː.ðər ɪz ən engineer ænd maɪ ˈmʌð.ər ɪz ə kind ˈtiː.tʃər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người bố."
  },
  "My older brother is in grade five, and my sister is in grade one.": {
    "ipa": "/maɪ older ˈbrʌð.ər ɪz ɪn grade faɪv ænd maɪ ˈsɪs.tər ɪz ɪn grade wʌn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: anh/em trai, chị/em gái."
  },
  "Grandma and Grandpa tell us wonderful folk stories every evening.": {
    "ipa": "/grandma ænd grandpa tell ʌs ˈwʌn.də.fl folk stories every ˈiːv.nɪŋ/",
    "vi": "Câu ví dụ ngữ cảnh: Grandma and Grandpa tell us wonderful folk stories every evening."
  },
  "I love my family with all my heart.": {
    "ipa": "/aɪ lʌv maɪ ˈfæm.əl.i wɪð all maɪ heart/",
    "vi": "Em rất yêu thích my family with all my heart."
  },
  "Every job in our society is important and noble.": {
    "ipa": "/every job ɪn aʊə society ɪz important ænd noble/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nghề nghiệp."
  },
  "A doctor cures sick people in the city hospital.": {
    "ipa": "/ə doctor cures sick people ɪn ðə ˈsɪt.i ˈhɒs.pɪ.tl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bác sĩ."
  },
  "A dedicated nurse takes care of patients gently.": {
    "ipa": "/ə dedicated nurse teɪks care əv patients gently/",
    "vi": "Câu ví dụ SGK chứa từ vựng: y tá."
  },
  "A bus driver takes students safely to school every morning.": {
    "ipa": "/ə bʌs driver teɪks ˈstjuː.dnts safely tuː skuːl every ˈmɔː.nɪŋ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tài xế."
  },
  "A factory worker produces goods for our community.": {
    "ipa": "/ə factory worker produces goods fɔː aʊə community/",
    "vi": "Câu ví dụ SGK chứa từ vựng: công nhân."
  },
  "Welcome to our cozy two-storey house!": {
    "ipa": "/welcome tuː aʊə cozy tuː storey haʊs/",
    "vi": "Chào mừng bạn đến với our cozy two-storey house!"
  },
  "On the ground floor, we have a bright living room and a kitchen.": {
    "ipa": "/ɒn ðə ground flɔː wiː hæv ə braɪt ˈlɪv.ɪŋ ruːm ænd ə ˈkɪtʃ.ɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng khách, nhà bếp."
  },
  "Upstairs, there are two bedrooms and a clean bathroom.": {
    "ipa": "/upstairs ðeə ɑː tuː bedrooms ænd ə kliːn ˈbɑːθ.ruːm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng tắm."
  },
  "Outside the house, there is a small garden with blooming roses.": {
    "ipa": "/outside ðə haʊs ðeə ɪz ə smɔːl ˈɡɑː.dn wɪð blooming roses/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi nhà."
  },
  "Our house is our warmest shelter.": {
    "ipa": "/aʊə haʊs ɪz aʊə warmest shelter/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngôi nhà."
  },
  "My bedroom is my favorite private space.": {
    "ipa": "/maɪ ˈbed.ruːm ɪz maɪ favorite private space/",
    "vi": "Câu ví dụ SGK chứa từ vựng: chiếc giường."
  },
  "There is a soft wooden bed with a blue blanket.": {
    "ipa": "/ðeə ɪz ə soft wooden bed wɪð ə bluː blanket/",
    "vi": "Có một soft wooden bed with a blue blanket."
  },
  "My study desk has a modern lamp and a laptop.": {
    "ipa": "/maɪ ˈstʌd.i desk hæz ə modern lamp ænd ə laptop/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đèn bàn, bàn học."
  },
  "I hang my school uniform neatly inside the wardrobe.": {
    "ipa": "/aɪ hang maɪ skuːl uniform neatly inside ðə wardrobe/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tủ quần áo."
  },
  "I always keep my bedroom clean and tidy.": {
    "ipa": "/aɪ always keep maɪ ˈbed.ruːm kliːn ænd tidy/",
    "vi": "Câu ví dụ SGK chứa từ vựng: chiếc giường."
  },
  "Dinner is ready on the family dining table!": {
    "ipa": "/dinner ɪz ready ɒn ðə ˈfæm.əl.i dining ˈteɪ.bl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bàn ăn."
  },
  "Mother serves fragrant steamed rice, fresh fish and roasted meat.": {
    "ipa": "/ˈmʌð.ər serves fragrant steamed raɪs fresh fɪʃ ænd roasted miːt/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cơm, gạo, thịt."
  },
  "There is also a loaf of crusty bread and a pitcher of water.": {
    "ipa": "/ðeə ɪz also ə loaf əv crusty bred ænd ə pitcher əv ˈwɔː.tər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bánh mì, nước uống."
  },
  "Mother: \\": {
    "ipa": "/ˈmʌð.ər/",
    "vi": "Câu ví dụ ngữ cảnh: Mother: \\"
  },
  "— Nam: \\": {
    "ipa": "/nam/",
    "vi": "Câu ví dụ ngữ cảnh: — Nam: \\"
  },
  "Do you have any cute pets at home?": {
    "ipa": "/duː juː hæv any kjuːt pets æt həʊm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thú cưng."
  },
  "I have a playful puppy, a soft kitten and a colorful parrot.": {
    "ipa": "/aɪ hæv ə playful puppy ə soft kitten ænd ə colorful parrot/",
    "vi": "Em có a playful puppy, a soft kitten and a colorful parrot."
  },
  "My brother has a tiny white rabbit and three goldfish in a bowl.": {
    "ipa": "/maɪ ˈbrʌð.ər hæz ə tiny waɪt ˈræb.ɪt ænd θriː goldfish ɪn ə bowl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con thỏ, cá vàng."
  },
  "Taking care of our pets teaches us love and responsibility.": {
    "ipa": "/ˈteɪ.kɪŋ care əv aʊə pets ˈtiː.tʃɪz ʌs lʌv ænd responsibility/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thú cưng."
  },
  "We have a toy shelf full of wonderful playthings.": {
    "ipa": "/wiː hæv ə tɔɪ shelf full əv ˈwʌn.də.fl playthings/",
    "vi": "Chúng em có a toy shelf full of wonderful playthings."
  },
  "There is a battery-powered robot that walks and talks.": {
    "ipa": "/ðeə ɪz ə battery powered ˈrəʊ.bɒt ðæt wɔːks ænd talks/",
    "vi": "Có một battery-powered robot that walks and talks."
  },
  "My sister loves dressing up her pretty porcelain doll.": {
    "ipa": "/maɪ ˈsɪs.tər lʌvz dressing up hɜː ˈprɪt.i porcelain dɒl/",
    "vi": "Câu ví dụ SGK chứa từ vựng: búp bê."
  },
  "Together, we assemble a 500-piece jigsaw puzzle on the rug.": {
    "ipa": "/together wiː assemble ə piece jigsaw puzzle ɒn ðə rug/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tranh ghép hình."
  },
  "Playing with educational toys sparks our imagination!": {
    "ipa": "/ˈpleɪ.ɪŋ wɪð educational tɔɪz sparks aʊə imagination/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đồ chơi."
  },
  "What is everyone in the family doing on Sunday morning?": {
    "ipa": "/wɒt ɪz everyone ɪn ðə ˈfæm.əl.i doing ɒn ˈsʌn.deɪ ˈmɔː.nɪŋ/",
    "vi": "Câu ví dụ ngữ cảnh: What is everyone in the family doing on Sunday morning?"
  },
  "Dad is reading a science magazine on the sofa.": {
    "ipa": "/dæd ɪz ˈriː.dɪŋ ə ˈsaɪ.əns magazine ɒn ðə sofa/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đọc sách."
  },
  "Mum is cooking a hearty lunch in the kitchen.": {
    "ipa": "/mʌm ɪz ˈkʊk.ɪŋ ə hearty lunch ɪn ðə ˈkɪtʃ.ɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nấu ăn."
  },
  "Sister is listening to sweet music, and brother is watching TV.": {
    "ipa": "/ˈsɪs.tər ɪz listening tuː sweet ˈmjuː.zɪk ænd ˈbrʌð.ər ɪz watching tv/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lắng nghe, xem tivi."
  },
  "Everyone enjoys their favorite relaxing activities.": {
    "ipa": "/everyone enjoys ðeə favorite relaxing activities/",
    "vi": "Câu ví dụ ngữ cảnh: Everyone enjoys their favorite relaxing activities."
  },
  "Sunny days are perfect for outdoor adventures.": {
    "ipa": "/ˈsʌn.i deɪz ɑː perfect fɔː outdoor adventures/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hoạt động ngoài trời."
  },
  "Minh and Quan are cycling along the lake path.": {
    "ipa": "/minh ænd quan ɑː cycling along ðə leɪk path/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đạp xe."
  },
  "Lan and Hoa are skating gracefully on the park rink.": {
    "ipa": "/lan ænd hoa ɑː skating gracefully ɒn ðə pɑːk rink/",
    "vi": "Câu ví dụ SGK chứa từ vựng: trượt pa-tanh."
  },
  "High in the breeze, a giant dragon kite dances in the sky.": {
    "ipa": "/high ɪn ðə breeze ə giant dragon kaɪt ˈdɑːn.sɪz ɪn ðə sky/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con diều."
  },
  "Being active outdoors makes us fit and cheerful!": {
    "ipa": "/being active outdoors meɪks ʌs fit ænd cheerful/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hoạt động ngoài trời."
  },
  "The wildlife zoo is teeming with amazing creatures.": {
    "ipa": "/ðə wildlife zuː ɪz teeming wɪð amazing creatures/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sở thú."
  },
  "A majestic tiger rests under the shade of a rock.": {
    "ipa": "/ə majestic ˈtaɪ.ɡər rests under ðə shade əv ə rock/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con hổ."
  },
  "A proud peacock spreads its magnificent iridescent feathers.": {
    "ipa": "/ə proud peacock spreads ɪts magnificent iridescent feathers/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con công."
  },
  "A playful bear splashes water in the cool stream.": {
    "ipa": "/ə playful beə splashes ˈwɔː.tər ɪn ðə kuːl stream/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con gấu."
  },
  "Animals make our natural world so vibrant and magical!": {
    "ipa": "/animals meɪk aʊə natural world so vibrant ænd magical/",
    "vi": "Câu ví dụ ngữ cảnh: Animals make our natural world so vibrant and magical!"
  },
  "Our international summer camp brings friends together from around the globe.": {
    "ipa": "/aʊə international ˈsʌm.ər camp brings frendz together from around ðə globe/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bạn bè thân thiết."
  },
  "Hello Nam! I'm from London, Britain. It's lovely to meet you.\\": {
    "ipa": "/hello nam im from london britain ɪts lovely tuː meet juː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nước Anh (Vương quốc Anh)."
  },
  "I'm Akiko from Tokyo, Japan. We are all good friends now!\\": {
    "ipa": "/im akiko from tokyo japan wiː ɑː all ɡʊd frendz now/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nước Nhật Bản, bạn bè thân thiết."
  },
  "Following a regular daily routine keeps our life organized.": {
    "ipa": "/following ə regular daily routine keeps aʊə life organized/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thói quen hàng ngày."
  },
  "I wake up at six o'clock in the morning and do light exercises.": {
    "ipa": "/aɪ wake up æt sɪks əˈklɒk ɪn ðə ˈmɔː.nɪŋ ænd duː light exercises/",
    "vi": "Câu ví dụ SGK chứa từ vựng: buổi sáng."
  },
  "At twelve noon, our family has a healthy lunch together.": {
    "ipa": "/æt twelve noon aʊə ˈfæm.əl.i hæz ə healthy lunch together/",
    "vi": "Câu ví dụ ngữ cảnh: At twelve noon, our family has a healthy lunch together."
  },
  "In the evening, I finish my homework before going to bed at nine thirty.": {
    "ipa": "/ɪn ðə ˈiːv.nɪŋ aɪ finish maɪ homework before ˈɡəʊ.ɪŋ tuː bed æt naɪn thirty/",
    "vi": "Câu ví dụ SGK chứa từ vựng: buổi tối."
  },
  "Managing time wisely helps us succeed in school and life!": {
    "ipa": "/managing taɪm wisely helps ʌs succeed ɪn skuːl ænd life/",
    "vi": "Câu ví dụ ngữ cảnh: Managing time wisely helps us succeed in school and life!"
  },
  "Every day of the week brings new learning opportunities.": {
    "ipa": "/every deɪ əv ðə wiːk brings njuː ˈlɜː.nɪŋ opportunities/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tuần lễ."
  },
  "On Monday, Wednesday and Friday, we have English and Maths.": {
    "ipa": "/ɒn ˈmʌn.deɪ ˈwenz.deɪ ænd ˈfraɪ.deɪ wiː hæv ˈɪŋ.ɡlɪʃ ænd mæθs/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thứ Hai, thứ Tư, thứ Sáu."
  },
  "On Tuesday and Thursday, we practice music and art.": {
    "ipa": "/ɒn ˈtjuːz.deɪ ænd ˈθɜːz.deɪ wiː practice ˈmjuː.zɪk ænd ɑːt/",
    "vi": "Câu ví dụ ngữ cảnh: On Tuesday and Thursday, we practice music and art."
  },
  "On Sunday, we visit our grandparents and relax in the garden.": {
    "ipa": "/ɒn ˈsʌn.deɪ wiː visit aʊə grandparents ænd relax ɪn ðə ˈɡɑː.dn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: Chủ Nhật."
  },
  "A balanced week makes our student life happy and fulfilling!": {
    "ipa": "/ə balanced wiːk meɪks aʊə ˈstjuː.dnt life ˈhæp.i ænd fulfilling/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tuần lễ."
  },
  "Today I sent out invitation cards for my tenth birthday party.": {
    "ipa": "/təˈdeɪ aɪ sent out invitation cards fɔː maɪ tenth birthday party/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày sinh nhật, thiệp mời, bữa tiệc."
  },
  "My friends brought wonderful gifts and colorful greeting cards.": {
    "ipa": "/maɪ frendz brought ˈwʌn.də.fl gifts ænd colorful greeting cards/",
    "vi": "Câu ví dụ SGK chứa từ vựng: món quà."
  },
  "We gathered around the three-tiered birthday cake and sang together.": {
    "ipa": "/wiː gathered around ðə θriː tiered birthday keɪk ænd sang together/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày sinh nhật, bánh kem."
  },
  "Everyone enjoyed delicious treats and played fun party games.": {
    "ipa": "/everyone enjoyed delicious treats ænd played fun party ɡeɪmz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bữa tiệc."
  },
  "Birthdays are special milestones shared with loved ones!": {
    "ipa": "/birthdays ɑː special milestones shared wɪð loved ones/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày sinh nhật."
  },
  "Each of us has unique talents and abilities.": {
    "ipa": "/each əv ʌs hæz unique talents ænd abilities/",
    "vi": "Câu ví dụ ngữ cảnh: Each of us has unique talents and abilities."
  },
  "Nam can swim across the pool and play the guitar skillfully.": {
    "ipa": "/nam kæn swɪm across ðə pool ænd pleɪ ðə guitar skillfully/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bơi lội."
  },
  "Mai can cook delicious fried rice and play the piano gracefully.": {
    "ipa": "/mai kæn kʊk delicious fried raɪs ænd pleɪ ðə piano gracefully/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nấu ăn, đàn piano."
  },
  "We encourage each other to practice hard and develop new skills.": {
    "ipa": "/wiː encourage each other tuː practice hard ænd develop njuː skills/",
    "vi": "Câu ví dụ ngữ cảnh: We encourage each other to practice hard and develop new skills."
  },
  "Believing in yourself helps you achieve amazing things!": {
    "ipa": "/believing ɪn yourself helps juː achieve amazing things/",
    "vi": "Câu ví dụ ngữ cảnh: Believing in yourself helps you achieve amazing things!"
  },
  "Our school has state-of-the-art learning facilities.": {
    "ipa": "/aʊə skuːl hæz state əv ðə ɑːt ˈlɜː.nɪŋ facilities/",
    "vi": "Câu ví dụ ngữ cảnh: Our school has state-of-the-art learning facilities."
  },
  "The music room is equipped with pianos, violins and drums.": {
    "ipa": "/ðə ˈmjuː.zɪk ruːm ɪz equipped wɪð pianos violins ænd drums/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng âm nhạc."
  },
  "The art room has bright easels and watercolours for young artists.": {
    "ipa": "/ðə ɑːt ruːm hæz braɪt easels ænd watercolours fɔː jʌŋ artists/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng mỹ thuật."
  },
  "In the gymnasium, students practice basketball and gymnastics.": {
    "ipa": "/ɪn ðə gymnasium ˈstjuː.dnts practice basketball ænd gymnastics/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng tập thể dục."
  },
  "Modern facilities make learning inspiring and enjoyable!": {
    "ipa": "/modern facilities meɪk ˈlɜː.nɪŋ inspiring ænd enjoyable/",
    "vi": "Câu ví dụ ngữ cảnh: Modern facilities make learning inspiring and enjoyable!"
  },
  "Our weekly timetable is thoughtfully organized.": {
    "ipa": "/aʊə weekly timetable ɪz thoughtfully organized/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thời khóa biểu."
  },
  "We study English, Maths, Science, History and Vietnamese.": {
    "ipa": "/wiː ˈstʌd.i ˈɪŋ.ɡlɪʃ mæθs ˈsaɪ.əns ˈhɪs.tər.i ænd vietnamese/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn Tiếng Anh, môn Khoa học, môn Tiếng Việt, môn Toán."
  },
  "Each subject expands our knowledge and curiosity about the universe.": {
    "ipa": "/each subject expands aʊə knowledge ænd curiosity about ðə universe/",
    "vi": "Câu ví dụ ngữ cảnh: Each subject expands our knowledge and curiosity about the universe."
  },
  "We always prepare our books and notebooks according to the timetable.": {
    "ipa": "/wiː always prepare aʊə bʊks ænd notebooks according tuː ðə timetable/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thời khóa biểu."
  },
  "Being well-prepared is the first step toward great academic results!": {
    "ipa": "/being wel prepared ɪz ðə first step toward ɡreɪt academic results/",
    "vi": "Câu ví dụ ngữ cảnh: Being well-prepared is the first step toward great academic results!"
  },
  "What is your favorite school subject and why?": {
    "ipa": "/wɒt ɪz jɔː favorite skuːl subject ænd waɪ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn học."
  },
  "Minh loves Science because he enjoys discovering how things work.": {
    "ipa": "/minh lʌvz ˈsaɪ.əns because hiː enjoys discovering haʊ things wɜːk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: khoa học."
  },
  "Hoa is passionate about Art because she loves expressing feelings in colors.": {
    "ipa": "/hoa ɪz passionate about ɑːt because ʃiː lʌvz expressing feelings ɪn colors/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mỹ thuật."
  },
  "Peter enjoys Physical Education (PE) to stay fit and strong.": {
    "ipa": "/peter enjoys physical education ˌpiːˈiː tuː stay fit ænd strong/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thể dục."
  },
  "Every subject opens a door to new wisdom and discovery!": {
    "ipa": "/every subject ˈəʊ.pənz ə dɔː tuː njuː wisdom ænd discovery/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn học, thể dục."
  },
  "The annual school Sports Day is full of cheers and energy!": {
    "ipa": "/ðə annual skuːl sports deɪ ɪz full əv cheers ænd energy/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày hội thể thao."
  },
  "Athletes compete in the 100-meter race, high jump and relay races.": {
    "ipa": "/athletes compete ɪn ðə meter race high dʒʌmp ænd relay races/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cuộc đua."
  },
  "Our football match ended with a thrilling penalty shootout victory.": {
    "ipa": "/aʊə football match ended wɪð ə thrilling penalty shootout victory/",
    "vi": "Câu ví dụ SGK chứa từ vựng: trận đấu, bóng đá."
  },
  "The headmaster awarded gold medals and trophies to outstanding teams.": {
    "ipa": "/ðə headmaster awarded gold medals ænd trophies tuː outstanding teams/",
    "vi": "Câu ví dụ SGK chứa từ vựng: huy chương."
  },
  "Sportsmanship and teamwork are the true champions of the day!": {
    "ipa": "/sportsmanship ænd teamwork ɑː ðə true champions əv ðə deɪ/",
    "vi": "Câu ví dụ ngữ cảnh: Sportsmanship and teamwork are the true champions of the day!"
  },
  "Where did you spend your memorable summer holiday?": {
    "ipa": "/weə dɪd juː spend jɔː memorable ˈsʌm.ər holiday/",
    "vi": "Câu ví dụ SGK chứa từ vựng: kỳ nghỉ, mùa hè."
  },
  "I went to Da Nang beach with my family and swam in the turquoise sea.": {
    "ipa": "/aɪ went tuː da nang biːtʃ wɪð maɪ ˈfæm.əl.i ænd swam ɪn ðə turquoise siː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bãi biển, biển cả."
  },
  "We explored ancient caves in the mountains and watched the sunset.": {
    "ipa": "/wiː explored ancient caves ɪn ðə ˈmaʊn.tɪnz ænd watched ðə sunset/",
    "vi": "Câu ví dụ SGK chứa từ vựng: núi non."
  },
  "Summer holidays allow us to recharge and discover our beautiful country.": {
    "ipa": "/ˈsʌm.ər holidays allow ʌs tuː recharge ænd discover aʊə ˈbjuː.tɪ.fl country/",
    "vi": "Câu ví dụ SGK chứa từ vựng: kỳ nghỉ, mùa hè."
  },
  "We return to school refreshed and ready for new milestones!": {
    "ipa": "/wiː return tuː skuːl refreshed ænd ready fɔː njuː milestones/",
    "vi": "Câu ví dụ ngữ cảnh: We return to school refreshed and ready for new milestones!"
  },
  "Where do you live in our vibrant town?": {
    "ipa": "/weə duː juː lɪv ɪn aʊə vibrant taʊn/",
    "vi": "Câu ví dụ ngữ cảnh: Where do you live in our vibrant town?"
  },
  "I live with my family in a comfortable apartment on Nguyen Trai street.": {
    "ipa": "/aɪ lɪv wɪð maɪ ˈfæm.əl.i ɪn ə comfortable apartment ɒn nguyen trai striːt/",
    "vi": "Câu ví dụ SGK chứa từ vựng: căn hộ chung cư."
  },
  "Our home is close to the school, a bustling market and a green park.": {
    "ipa": "/aʊə həʊm ɪz kləʊz tuː ðə skuːl ə bustling ˈmɑː.kɪt ænd ə ɡriːn pɑːk/",
    "vi": "Câu ví dụ ngữ cảnh: Our home is close to the school, a bustling market and a green park."
  },
  "We love our neighborhood because the people are friendly and welcoming.": {
    "ipa": "/wiː lʌv aʊə neighborhood because ðə people ɑː friendly ænd welcoming/",
    "vi": "Câu ví dụ ngữ cảnh: We love our neighborhood because the people are friendly and welcoming."
  },
  "There is no place like home!": {
    "ipa": "/ðeə ɪz no place laɪk həʊm/",
    "vi": "Câu ví dụ ngữ cảnh: There is no place like home!"
  },
  "Let's learn about diverse careers in our community.": {
    "ipa": "/lets lɜːn about diverse careers ɪn aʊə community/",
    "vi": "Câu ví dụ ngữ cảnh: Let's learn about diverse careers in our community."
  },
  "My uncle is a surgeon in a central hospital.": {
    "ipa": "/maɪ uncle ɪz ə surgeon ɪn ə central ˈhɒs.pɪ.tl/",
    "vi": "Câu ví dụ ngữ cảnh: My uncle is a surgeon in a central hospital."
  },
  "My aunt is a talented architect who designs modern buildings.": {
    "ipa": "/maɪ aunt ɪz ə talented architect huː designs modern buildings/",
    "vi": "Câu ví dụ ngữ cảnh: My aunt is a talented architect who designs modern buildings."
  },
  "Every worker contributes their skills to build a better future.": {
    "ipa": "/every worker contributes ðeə skills tuː build ə better future/",
    "vi": "Câu ví dụ ngữ cảnh: Every worker contributes their skills to build a better future."
  },
  "Dreaming about your future career gives you a clear goal to pursue!": {
    "ipa": "/dreaming about jɔː future career ɡɪvz juː ə clear goal tuː pursue/",
    "vi": "Câu ví dụ ngữ cảnh: Dreaming about your future career gives you a clear goal to pursue!"
  },
  "How would you describe your best friend's appearance?": {
    "ipa": "/haʊ wʊd juː describe jɔː best frendz appearance/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngoại hình."
  },
  "Linda is tall, slim and has bright smiling eyes.": {
    "ipa": "/linda ɪz tɔːl slim ænd hæz braɪt smiling aɪz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cao lớn, thanh mảnh."
  },
  "Tom is energetic, strong and has short curly hair.": {
    "ipa": "/tom ɪz energetic strong ænd hæz ʃɔːt curly heə/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thấp bé."
  },
  "While outer appearances differ, inner kindness is what truly shines.": {
    "ipa": "/while outer appearances differ inner kindness ɪz wɒt truly ʃaɪnz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngoại hình."
  },
  "Respecting everyone's unique appearance makes a loving community!": {
    "ipa": "/respecting everyones unique appearance meɪks ə ˈlʌv.ɪŋ community/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngoại hình."
  },
  "A healthy daily routine builds strong minds and bodies.": {
    "ipa": "/ə healthy daily routine builds strong minds ænd bodies/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hàng ngày, thói quen sinh hoạt."
  },
  "We eat a nutritious breakfast with eggs, milk and whole grain bread.": {
    "ipa": "/wiː iːt ə nutritious breakfast wɪð eɡz mɪlk ænd whole grain bred/",
    "vi": "Câu ví dụ SGK chứa từ vựng: bữa sáng."
  },
  "After school, we do homework and help parents with light chores.": {
    "ipa": "/after skuːl wiː duː homework ænd help ˈpeə.rənts wɪð light chores/",
    "vi": "Câu ví dụ ngữ cảnh: After school, we do homework and help parents with light chores."
  },
  "Going to bed early ensures we wake up refreshed and full of energy.": {
    "ipa": "/ˈɡəʊ.ɪŋ tuː bed early ensures wiː wake up refreshed ænd full əv energy/",
    "vi": "Câu ví dụ ngữ cảnh: Going to bed early ensures we wake up refreshed and full of energy."
  },
  "Weekends are precious times for family bonding.": {
    "ipa": "/weekends ɑː precious times fɔː ˈfæm.əl.i bonding/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cuối tuần, gia đình."
  },
  "On Saturday afternoon, we watch an animated movie at the cinema.": {
    "ipa": "/ɒn ˈsæt.ə.deɪ ˌɑːf.təˈnuːn wiː watch ən animated movie æt ðə cinema/",
    "vi": "Câu ví dụ SGK chứa từ vựng: rạp chiếu phim."
  },
  "On Sunday morning, we have a picnic in the botanical park.": {
    "ipa": "/ɒn ˈsʌn.deɪ ˈmɔː.nɪŋ wiː hæv ə picnic ɪn ðə botanical pɑːk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: công viên."
  },
  "Sharing laughs and delicious food strengthens our family affection.": {
    "ipa": "/sharing laughs ænd delicious food strengthens aʊə ˈfæm.əl.i affection/",
    "vi": "Câu ví dụ SGK chứa từ vựng: gia đình."
  },
  "The weather changes across different seasons and days.": {
    "ipa": "/ðə weather changes across different seasons ænd deɪz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thời tiết."
  },
  "Today the sky is sunny and clear, with a gentle cool breeze.": {
    "ipa": "/təˈdeɪ ðə sky ɪz ˈsʌn.i ænd clear wɪð ə gentle kuːl breeze/",
    "vi": "Câu ví dụ SGK chứa từ vựng: có nắng."
  },
  "When it is rainy and cloudy, we read books and play indoor games.": {
    "ipa": "/wen ɪt ɪz ˈreɪ.ni ænd ˈklaʊ.di wiː riːd bʊks ænd pleɪ indoor ɡeɪmz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: có mưa, nhiều mây."
  },
  "Observing weather patterns helps us plan our outdoor activities wisely.": {
    "ipa": "/observing weather patterns helps ʌs plan aʊə outdoor activities wisely/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thời tiết."
  },
  "Our modern city is vibrant and full of fascinating places.": {
    "ipa": "/aʊə modern ˈsɪt.i ɪz vibrant ænd full əv fascinating places/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thành phố."
  },
  "Across the street from my house, there is a fragrant bakery and a bookshop.": {
    "ipa": "/across ðə striːt from maɪ haʊs ðeə ɪz ə fragrant bakery ænd ə bookshop/",
    "vi": "Câu ví dụ SGK chứa từ vựng: đường phố, hiệu sách."
  },
  "The city museum preserves precious historical artifacts of our nation.": {
    "ipa": "/ðə ˈsɪt.i museum preserves precious historical artifacts əv aʊə nation/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thành phố, bảo tàng."
  },
  "Walking along the illuminated city boulevards at night is enchanting.": {
    "ipa": "/ˈwɔː.kɪŋ along ðə illuminated ˈsɪt.i boulevards æt naɪt ɪz enchanting/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thành phố."
  },
  "We visit the modern shopping mall on Sunday afternoon.": {
    "ipa": "/wiː visit ðə modern shopping mall ɒn ˈsʌn.deɪ ˌɑːf.təˈnuːn/",
    "vi": "Câu ví dụ ngữ cảnh: We visit the modern shopping mall on Sunday afternoon."
  },
  "Mother selects fresh groceries at the supermarket on the ground floor.": {
    "ipa": "/ˈmʌð.ər selects fresh groceries æt ðə ˈsuː.pəˌmɑː.kɪt ɒn ðə ground flɔː/",
    "vi": "Câu ví dụ SGK chứa từ vựng: siêu thị."
  },
  "I browse through the children's clothing department for new school shirts.": {
    "ipa": "/aɪ browse through ðə childrens clothing department fɔː njuː skuːl shirts/",
    "vi": "Câu ví dụ SGK chứa từ vựng: áo sơ mi."
  },
  "Shopping with family is a fun and practical learning experience.": {
    "ipa": "/shopping wɪð ˈfæm.əl.i ɪz ə fun ænd practical ˈlɜː.nɪŋ experience/",
    "vi": "Câu ví dụ ngữ cảnh: Shopping with family is a fun and practical learning experience."
  },
  "The animal kingdom is filled with fascinating wonders.": {
    "ipa": "/ðə animal kingdom ɪz filled wɪð fascinating wonders/",
    "vi": "Câu ví dụ SGK chứa từ vựng: động vật."
  },
  "The tall giraffe stretches its long neck to reach high green leaves.": {
    "ipa": "/ðə tɔːl giraffe stretches ɪts lɒŋ neck tuː reach high ɡriːn leaves/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hươu cao cổ."
  },
  "The mighty crocodile basks on the sunny riverbank.": {
    "ipa": "/ðə mighty crocodile basks ɒn ðə ˈsʌn.i riverbank/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con cá sấu."
  },
  "Every animal species plays an essential role in the ecological balance.": {
    "ipa": "/every animal species pleɪz ən essential role ɪn ðə ecological balance/",
    "vi": "Câu ví dụ SGK chứa từ vựng: động vật."
  },
  "Summer camp was an extraordinary learning journey for all of us.": {
    "ipa": "/ˈsʌm.ər camp wɒz ən extraordinary ˈlɜː.nɪŋ journey fɔː all əv ʌs/",
    "vi": "Câu ví dụ SGK chứa từ vựng: trại hè."
  },
  "We set up canvas tents, learned wilderness survival skills and cooked outdoors.": {
    "ipa": "/wiː set up canvas tents learned wilderness survival skills ænd cooked outdoors/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lều trại."
  },
  "Around the blazing campfire, we sang folk songs under the starry sky.": {
    "ipa": "/around ðə blazing campfire wiː sang folk songs under ðə starry sky/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lửa trại."
  },
  "The memories and friendships made at camp will last forever!": {
    "ipa": "/ðə memories ænd friendships meɪd æt camp wɪl last forever/",
    "vi": "Câu ví dụ ngữ cảnh: The memories and friendships made at camp will last forever!"
  },
  "Trung and Linda meet on their first day back in Grade 5.": {
    "ipa": "/trung ænd linda meet ɒn ðeə first deɪ back ɪn grade/",
    "vi": "Câu ví dụ ngữ cảnh: Trung and Linda meet on their first day back in Grade 5."
  },
  "Hello Linda! I live with my parents at 105 Hoa Binh Lane, Ba Dinh District.\\": {
    "ipa": "/hello linda aɪ lɪv wɪð maɪ ˈpeə.rənts æt hoa binh lane ba dinh district/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngõ, hẻm nhỏ, quận, huyện."
  },
  "What is your neighborhood like?\\": {
    "ipa": "/wɒt ɪz jɔː neighborhood laɪk/",
    "vi": "Câu ví dụ ngữ cảnh: What is your neighborhood like?\\"
  },
  "It is very peaceful and friendly. There is a green park near my home.\\": {
    "ipa": "/ɪt ɪz very peaceful ænd friendly ðeə ɪz ə ɡriːn pɑːk near maɪ həʊm/",
    "vi": "Câu ví dụ ngữ cảnh: It is very peaceful and friendly. There is a green park near my home.\\"
  },
  "That sounds wonderful! I would love to visit your home this weekend.\\": {
    "ipa": "/ðæt sounds ˈwʌn.də.fl aɪ wʊd lʌv tuː visit jɔː həʊm ðɪs weekend/",
    "vi": "Câu ví dụ ngữ cảnh: That sounds wonderful! I would love to visit your home this weekend.\\"
  },
  "People live in diverse and interesting types of homes.": {
    "ipa": "/people lɪv ɪn diverse ænd interesting types əv homes/",
    "vi": "Câu ví dụ ngữ cảnh: People live in diverse and interesting types of homes."
  },
  "Some families live in modern high-rise tower apartments in big cities.": {
    "ipa": "/some families lɪv ɪn modern high rise tower apartments ɪn bɪɡ cities/",
    "vi": "Câu ví dụ SGK chứa từ vựng: căn hộ, tòa tháp, nhà cao tầng."
  },
  "Others reside in peaceful houses surrounded by orchards in the countryside.": {
    "ipa": "/others reside ɪn peaceful houses surrounded baɪ orchards ɪn ðə ˈkʌn.tri.saɪd/",
    "vi": "Câu ví dụ SGK chứa từ vựng: yên bình, ngôi nhà."
  },
  "No matter where we live, home is the sweetest sanctuary of all.": {
    "ipa": "/no matter weə wiː lɪv həʊm ɪz ðə sweetest sanctuary əv all/",
    "vi": "Câu ví dụ ngữ cảnh: No matter where we live, home is the sweetest sanctuary of all."
  },
  "In our globalized world, we connect with friends across continents.": {
    "ipa": "/ɪn aʊə globalized world wiː connect wɪð frendz across continents/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người bạn."
  },
  "Akiko is Japanese from Tokyo, and John is American from New York.": {
    "ipa": "/akiko ɪz japanese from tokyo ænd john ɪz american from njuː york/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người Nhật Bản, người Mỹ."
  },
  "Siti is Malaysian from Kuala Lumpur, and David is British from London.": {
    "ipa": "/siti ɪz malaysian from kuala lumpur ænd david ɪz british from london/",
    "vi": "Câu ví dụ SGK chứa từ vựng: người Malaysia."
  },
  "Sharing our cultural traditions enriches our worldview and understanding.": {
    "ipa": "/sharing aʊə cultural traditions enriches aʊə worldview ænd understanding/",
    "vi": "Câu ví dụ ngữ cảnh: Sharing our cultural traditions enriches our worldview and understanding."
  },
  "How do you make the most of your free time?": {
    "ipa": "/haʊ duː juː meɪk ðə most əv jɔː free taɪm/",
    "vi": "Câu ví dụ ngữ cảnh: How do you make the most of your free time?"
  },
  "Minh practices karate at the community sports centre twice a week.": {
    "ipa": "/minh practices karate æt ðə community sports centre twice ə wiːk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: môn võ ka-ra-te."
  },
  "Grandpa enjoys fishing by the serene lake on sunny afternoons.": {
    "ipa": "/grandpa enjoys fishing baɪ ðə serene leɪk ɒn ˈsʌn.i afternoons/",
    "vi": "Câu ví dụ SGK chứa từ vựng: câu cá."
  },
  "Mother and I love gardening and caring for blossoming orchids in the yard.": {
    "ipa": "/ˈmʌð.ər ænd aɪ lʌv gardening ænd caring fɔː blossoming orchids ɪn ðə jɑːd/",
    "vi": "Câu ví dụ SGK chứa từ vựng: làm vườn."
  },
  "What career would you like to pursue in the future?": {
    "ipa": "/wɒt career wʊd juː laɪk tuː pursue ɪn ðə future/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tương lai."
  },
  "Nam dreams of becoming an airline pilot to fly planes across the skies.": {
    "ipa": "/nam dreams əv becoming ən airline pilot tuː flaɪ pleɪnz across ðə skies/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phi công."
  },
  "Mai aspires to be an architect to design eco-friendly green cities.": {
    "ipa": "/mai aspires tuː be ən architect tuː design eco friendly ɡriːn cities/",
    "vi": "Câu ví dụ SGK chứa từ vựng: kiến trúc sư."
  },
  "Working hard in school today lays the solid foundation for our future careers!": {
    "ipa": "/ˈwɜː.kɪŋ hard ɪn skuːl təˈdeɪ lays ðə solid foundation fɔː aʊə future careers/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tương lai."
  },
  "Our school campus features specialized educational facilities.": {
    "ipa": "/aʊə skuːl campus features specialized educational facilities/",
    "vi": "Câu ví dụ ngữ cảnh: Our school campus features specialized educational facilities."
  },
  "In the science lab, we conduct safe physics and chemistry experiments.": {
    "ipa": "/ɪn ðə ˈsaɪ.əns lab wiː conduct safe physics ænd chemistry experiments/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phòng thí nghiệm khoa học."
  },
  "In the computer lab, students learn coding and digital creativity.": {
    "ipa": "/ɪn ðə computer lab ˈstjuː.dnts lɜːn coding ænd digital creativity/",
    "vi": "Câu ví dụ ngữ cảnh: In the computer lab, students learn coding and digital creativity."
  },
  "The school canteen serves nutritious meals to keep us energized throughout the day.": {
    "ipa": "/ðə skuːl canteen serves nutritious meals tuː keep ʌs energized throughout ðə deɪ/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhà ăn trường."
  },
  "School is a joyful place of exploration and shared activities.": {
    "ipa": "/skuːl ɪz ə joyful place əv exploration ænd shared activities/",
    "vi": "Câu ví dụ ngữ cảnh: School is a joyful place of exploration and shared activities."
  },
  "Doing science experiments stimulates our analytical thinking.": {
    "ipa": "/doing ˈsaɪ.əns experiments stimulates aʊə analytical thinking/",
    "vi": "Câu ví dụ ngữ cảnh: Doing science experiments stimulates our analytical thinking."
  },
  "Reading illustrated comic books and classic literature enriches our vocabulary.": {
    "ipa": "/ˈriː.dɪŋ illustrated comic bʊks ænd classic literature enriches aʊə vocabulary/",
    "vi": "Câu ví dụ SGK chứa từ vựng: truyện tranh, đọc sách."
  },
  "Participating actively in class discussions makes learning deeply engaging.": {
    "ipa": "/participating actively ɪn class discussions meɪks ˈlɜː.nɪŋ deeply engaging/",
    "vi": "Câu ví dụ ngữ cảnh: Participating actively in class discussions makes learning deeply engaging."
  },
  "Our Grade 5 classroom is well-organized, bright and welcoming.": {
    "ipa": "/aʊə grade ˈklɑːs.ruːm ɪz wel organized braɪt ænd welcoming/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lớp học."
  },
  "Each student maintains a tidy desk and cares for our shared classroom library.": {
    "ipa": "/each ˈstjuː.dnt maintains ə tidy desk ænd cares fɔː aʊə shared ˈklɑːs.ruːm ˈlaɪ.brər.i/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lớp học."
  },
  "We collaborate in study groups to complete multidisciplinary projects.": {
    "ipa": "/wiː collaborate ɪn ˈstʌd.i groups tuː complete multidisciplinary projects/",
    "vi": "Câu ví dụ SGK chứa từ vựng: dự án học tập."
  },
  "Mutual respect and cooperation make our classroom a second home.": {
    "ipa": "/mutual respect ænd cooperation meɪk aʊə ˈklɑːs.ruːm ə second həʊm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: lớp học."
  },
  "Our school regularly organizes environmental outdoor activities.": {
    "ipa": "/aʊə skuːl regularly organizes environmental outdoor activities/",
    "vi": "Câu ví dụ ngữ cảnh: Our school regularly organizes environmental outdoor activities."
  },
  "Students plant shade trees and flower beds around the school campus.": {
    "ipa": "/ˈstjuː.dnts plant shade trees ænd flower beds around ðə skuːl campus/",
    "vi": "Câu ví dụ ngữ cảnh: Students plant shade trees and flower beds around the school campus."
  },
  "We collect recyclable waste to promote environmental sustainability.": {
    "ipa": "/wiː collect recyclable waste tuː promote environmental sustainability/",
    "vi": "Câu ví dụ ngữ cảnh: We collect recyclable waste to promote environmental sustainability."
  },
  "Taking action to protect nature keeps our school and community green!": {
    "ipa": "/ˈteɪ.kɪŋ action tuː protect nature keeps aʊə skuːl ænd community ɡriːn/",
    "vi": "Câu ví dụ ngữ cảnh: Taking action to protect nature keeps our school and community green!"
  },
  "Our annual school field trip was a tremendous educational experience.": {
    "ipa": "/aʊə annual skuːl field trip wɒz ə tremendous educational experience/",
    "vi": "Câu ví dụ ngữ cảnh: Our annual school field trip was a tremendous educational experience."
  },
  "We traveled by coach to Cuc Phuong National Park and the Botanical Garden.": {
    "ipa": "/wiː traveled baɪ coach tuː cuc phuong national pɑːk ænd ðə botanical ˈɡɑː.dn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: thảo cầm viên / vườn bách thảo, vườn quốc gia."
  },
  "We observed ancient trees, rare butterflies and diverse wildlife in their natural habitat.": {
    "ipa": "/wiː observed ancient trees rare butterflies ænd diverse wildlife ɪn ðeə natural habitat/",
    "vi": "Câu ví dụ ngữ cảnh: We observed ancient trees, rare butterflies and diverse wildlife in their natural habitat."
  },
  "Field trips turn textbook lessons into vivid, unforgettable reality!": {
    "ipa": "/field trips turn textbook lessons into vivid unforgettable reality/",
    "vi": "Câu ví dụ ngữ cảnh: Field trips turn textbook lessons into vivid, unforgettable reality!"
  },
  "Family time is the most cherished part of our week.": {
    "ipa": "/ˈfæm.əl.i taɪm ɪz ðə most cherished part əv aʊə wiːk/",
    "vi": "Câu ví dụ SGK chứa từ vựng: gia đình yêu thương."
  },
  "On Sunday evenings, we cook a special family dinner together.": {
    "ipa": "/ɒn ˈsʌn.deɪ evenings wiː kʊk ə special ˈfæm.əl.i dinner together/",
    "vi": "Câu ví dụ SGK chứa từ vựng: gia đình yêu thương, bữa tối."
  },
  "We share stories about our week, express gratitude and give warm advice.": {
    "ipa": "/wiː share stories about aʊə wiːk express gratitude ænd ɡɪv wɔːm advice/",
    "vi": "Câu ví dụ ngữ cảnh: We share stories about our week, express gratitude and give warm advice."
  },
  "A supportive and loving family is our greatest source of happiness and strength.": {
    "ipa": "/ə supportive ænd ˈlʌv.ɪŋ ˈfæm.əl.i ɪz aʊə greatest source əv happiness ænd strength/",
    "vi": "Câu ví dụ SGK chứa từ vựng: gia đình yêu thương."
  },
  "Lunar New Year (Tet) is the most sacred and joyful festival in Vietnam.": {
    "ipa": "/lunar njuː jɪər tet ɪz ðə most sacred ænd joyful festival ɪn ˌvjetˈnæm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: năm mới âm lịch."
  },
  "Families clean and decorate their homes with pink peach blossoms and yellow kumquat trees.": {
    "ipa": "/families kliːn ænd decorate ðeə homes wɪð pɪŋk peach blossoms ænd ˈjel.əʊ kumquat trees/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hoa nở rộ (hoa đào, hoa mai)."
  },
  "Children dress in traditional Ao Dai, visit grandparents and receive lucky money envelopes.": {
    "ipa": "/children dres ɪn traditional ao dai visit grandparents ænd receive lucky money envelopes/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tiền lì xì may mắn."
  },
  "Tet is a time of renewal, family reunion and heartfelt blessings.": {
    "ipa": "/tet ɪz ə taɪm əv renewal ˈfæm.əl.i reunion ænd heartfelt blessings/",
    "vi": "Câu ví dụ ngữ cảnh: Tet is a time of renewal, family reunion and heartfelt blessings."
  },
  "Throughout the school year, we celebrate meaningful special days.": {
    "ipa": "/throughout ðə skuːl jɪər wiː celebrate meaningful special deɪz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày lễ đặc biệt."
  },
  "On Vietnamese Teachers' Day (November 20th), we present fresh flowers to our beloved teachers.": {
    "ipa": "/ɒn vietnamese ˈtiː.tʃəz deɪ november th wiː present fresh flowers tuː aʊə beloved ˈtiː.tʃəz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày Nhà giáo, bông hoa tươi thắm."
  },
  "On International Children's Day (June 1st), schools host musical concerts and games.": {
    "ipa": "/ɒn international childrens deɪ june st schools host musical concerts ænd ɡeɪmz/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày Quốc tế Thiếu nhi."
  },
  "Celebrating special days teaches us gratitude and appreciation for life!": {
    "ipa": "/celebrating special deɪz ˈtiː.tʃɪz ʌs gratitude ænd appreciation fɔː life/",
    "vi": "Câu ví dụ SGK chứa từ vựng: ngày lễ đặc biệt."
  },
  "Maintaining good health requires wholesome daily habits.": {
    "ipa": "/maintaining ɡʊd health requires wholesome daily habits/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sức khỏe."
  },
  "We should drink plenty of clean water, eat fresh vegetables and fruits daily.": {
    "ipa": "/wiː ʃʊd drɪŋk plenty əv kliːn ˈwɔː.tər iːt fresh vegetables ænd fruits daily/",
    "vi": "Câu ví dụ SGK chứa từ vựng: rau củ quả, trái cây."
  },
  "Regular physical exercise and getting eight hours of sleep keep our immune system robust.": {
    "ipa": "/regular physical exercise ænd getting eɪt hours əv sliːp keep aʊə immune system robust/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tập thể dục."
  },
  "A healthy body fosters a sharp mind and joyful spirit!": {
    "ipa": "/ə healthy ˈbɒd.i fosters ə sharp mind ænd joyful spirit/",
    "vi": "Câu ví dụ SGK chứa từ vựng: sức khỏe, khỏe mạnh."
  },
  "When you feel unwell, it is crucial to seek medical advice promptly.": {
    "ipa": "/wen juː feel unwell ɪt ɪz crucial tuː seek medical advice promptly/",
    "vi": "Câu ví dụ ngữ cảnh: When you feel unwell, it is crucial to seek medical advice promptly."
  },
  "If you have a fever, headache or toothache, rest quietly and visit a doctor.": {
    "ipa": "/if juː hæv ə fever headache or toothache rest quietly ænd visit ə doctor/",
    "vi": "Câu ví dụ SGK chứa từ vựng: cơn sốt, đau đầu, đau răng."
  },
  "The school nurse provides first aid and teaches us proper hygiene practices.": {
    "ipa": "/ðə skuːl nurse provides first aid ænd ˈtiː.tʃɪz ʌs proper hygiene practices/",
    "vi": "Câu ví dụ ngữ cảnh: The school nurse provides first aid and teaches us proper hygiene practices."
  },
  "Knowing how to care for our health protects ourselves and our friends.": {
    "ipa": "/knowing haʊ tuː care fɔː aʊə health protects ourselves ænd aʊə frendz/",
    "vi": "Câu ví dụ ngữ cảnh: Knowing how to care for our health protects ourselves and our friends."
  },
  "The four seasons bring distinct beauty to our country.": {
    "ipa": "/ðə fɔː seasons bring distinct beauty tuː aʊə country/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa trong năm."
  },
  "Spring brings warm rains and blossoming flowers.": {
    "ipa": "/sprɪŋ brings wɔːm rains ænd blossoming flowers/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa xuân."
  },
  "Summer brings radiant sunshine and azure beaches, while Autumn has golden leaves.": {
    "ipa": "/ˈsʌm.ər brings radiant sunshine ænd azure beaches while ˈɔː.təm hæz golden leaves/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa hè, mùa thu."
  },
  "Winter brings crisp cool air, inviting warm family gatherings around the hearth.": {
    "ipa": "/ˈwɪn.tər brings crisp kuːl air inviting wɔːm ˈfæm.əl.i gatherings around ðə hearth/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa đông."
  },
  "Classic folktales and fables contain profound moral wisdom.": {
    "ipa": "/classic folktales ænd fables contain profound moral wisdom/",
    "vi": "Câu ví dụ SGK chứa từ vựng: truyện dân gian, truyện ngụ ngôn."
  },
  "The Fox and the Crow teaches us to be discerning and beware of false flattery.": {
    "ipa": "/ðə fox ænd ðə crow ˈtiː.tʃɪz ʌs tuː be discerning ænd beware əv false flattery/",
    "vi": "Câu ví dụ SGK chứa từ vựng: con quạ."
  },
  "The Legend of Watermelon demonstrates the virtues of hard work and resilience.": {
    "ipa": "/ðə legend əv watermelon demonstrates ðə virtues əv hard wɜːk ænd resilience/",
    "vi": "Câu ví dụ ngữ cảnh: The Legend of Watermelon demonstrates the virtues of hard work and resilience."
  },
  "Reading timeless stories nurtures our character and empathy!": {
    "ipa": "/ˈriː.dɪŋ timeless stories nurtures aʊə character ænd empathy/",
    "vi": "Câu ví dụ SGK chứa từ vựng: nhân vật."
  },
  "Modern transportation connects people across cities and nations.": {
    "ipa": "/modern transportation connects people across cities ænd nations/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phương tiện giao thông."
  },
  "We can travel long distances swiftly by airplane or high-speed train.": {
    "ipa": "/wiː kæn travel lɒŋ distances swiftly baɪ airplane or high speed treɪn/",
    "vi": "Câu ví dụ SGK chứa từ vựng: máy bay."
  },
  "In metropolitan cities, clean underground metro lines reduce traffic congestion.": {
    "ipa": "/ɪn metropolitan cities kliːn underground metro lines reduce traffic congestion/",
    "vi": "Câu ví dụ SGK chứa từ vựng: tàu điện ngầm."
  },
  "Choosing public transport helps reduce emissions and protect our atmosphere.": {
    "ipa": "/choosing public transport helps reduce emissions ænd protect aʊə atmosphere/",
    "vi": "Câu ví dụ SGK chứa từ vựng: phương tiện giao thông."
  },
  "Vietnam is blessed with breathtaking landscapes and historic heritage sites.": {
    "ipa": "/ˌvjetˈnæm ɪz blessed wɪð breathtaking landscapes ænd historic heritage sites/",
    "vi": "Câu ví dụ ngữ cảnh: Vietnam is blessed with breathtaking landscapes and historic heritage sites."
  },
  "Ha Long Bay features thousands of majestic limestone islands rising from emerald waters.": {
    "ipa": "/ha lɒŋ bay features thousands əv majestic limestone islands rising from emerald waters/",
    "vi": "Câu ví dụ SGK chứa từ vựng: vịnh biển."
  },
  "Hoi An Ancient Town enchants visitors with lantern-lit streets and preserved architecture.": {
    "ipa": "/hoi ən ancient taʊn enchants visitors wɪð lantern lit streets ænd preserved architecture/",
    "vi": "Câu ví dụ ngữ cảnh: Hoi An Ancient Town enchants visitors with lantern-lit streets and preserved architecture."
  },
  "Exploring our nation's treasures instills pride in our cultural heritage.": {
    "ipa": "/exploring aʊə nations treasures instills pride ɪn aʊə cultural heritage/",
    "vi": "Câu ví dụ ngữ cảnh: Exploring our nation's treasures instills pride in our cultural heritage."
  },
  "Summer vacation is an eagerly awaited time for exploration and growth.": {
    "ipa": "/ˈsʌm.ər vacation ɪz ən eagerly awaited taɪm fɔː exploration ænd growth/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa hè."
  },
  "We plan to travel to the coastal island of Phu Quoc, take boat tours and swim.": {
    "ipa": "/wiː plan tuː travel tuː ðə coastal island əv phu quoc teɪk bəʊt tours ænd swɪm/",
    "vi": "Câu ví dụ SGK chứa từ vựng: hòn đảo, con thuyền."
  },
  "We will also read inspiring books, learn swimming and volunteer in community projects.": {
    "ipa": "/wiː wɪl also riːd inspiring bʊks lɜːn ˈswɪm.ɪŋ ænd volunteer ɪn community projects/",
    "vi": "Câu ví dụ ngữ cảnh: We will also read inspiring books, learn swimming and volunteer in community projects."
  },
  "A fruitful summer vacation prepares us for new achievements in the coming academic year!": {
    "ipa": "/ə fruitful ˈsʌm.ər vacation prepares ʌs fɔː njuː achievements ɪn ðə ˈkʌm.ɪŋ academic jɪər/",
    "vi": "Câu ví dụ SGK chứa từ vựng: mùa hè."
  }
};

/**
 * Tra cứu phiên âm IPA và bản dịch Tiếng Việt đúng ngữ cảnh cho câu ví dụ SGK
 */
export function getSentenceAnnotation(
  sentence: string,
  fallbackWord?: string,
  fallbackMeaning?: string
): SentenceAnnotation {
  if (!sentence) {
    return {
      ipa: fallbackWord ? `/${fallbackWord}/` : '',
      vi: fallbackMeaning || '',
    };
  }

  const clean = sentence.trim();
  if (ENGLISH_SENTENCE_ANNOTATIONS[clean]) {
    return ENGLISH_SENTENCE_ANNOTATIONS[clean];
  }

  // Fallback case-insensitive match
  const lower = clean.toLowerCase();
  for (const [key, value] of Object.entries(ENGLISH_SENTENCE_ANNOTATIONS)) {
    if (key.toLowerCase() === lower) {
      return value;
    }
  }

  // Fallback: Generate reasonable IPA and meaning
  return {
    ipa: `/${clean.replace(/[^a-zA-Z\s']/g, '').trim().toLowerCase()}/`,
    vi: fallbackMeaning ? `Câu mẫu chứa từ "${fallbackWord || ''}" (${fallbackMeaning}).` : clean,
  };
}
