# -*- coding: utf-8 -*-
import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
DOCS_DIR = os.path.join(WORKSPACE_DIR, 'docs')
os.makedirs(DOCS_DIR, exist_ok=True)

from data_grade1 import G1_DATA
from data_grade2 import G2_DATA
from data_grade3 import G3_DATA
from data_grade4 import G4_DATA
from data_grade5 import G5_DATA

all_grades = [
    (1, "Tiếng Việt Lớp 1 (30 Bài)", G1_DATA),
    (2, "Tiếng Việt Lớp 2 (30 Bài)", G2_DATA),
    (3, "Tiếng Việt Lớp 3 (25 Bài)", G3_DATA),
    (4, "Tiếng Việt Lớp 4 (22 Bài)", G4_DATA),
    (5, "Tiếng Việt Lớp 5 (25 Bài)", G5_DATA)
]

# Style prefix and suffix following the 4 reference images (MiuMiu, BoBo, BipBip, PiPi)
STYLE_PREFIX = "3D Pixar Disney animation style cute educational mascot illustration of"
STYLE_SUFFIX = "Floating glowing magical elements, colorful 3D letters and sparkles in the air, smooth pastel toy building blocks on the floor, soft warm honey and peach studio rim lighting, 3D clay render, highly detailed, vibrant colors, ultra cute, kid-friendly edtech art, 8k resolution, no text watermark."

def get_scene_description(grade, key, title, author, genre):
    num = int(key.split('-b')[-1])
    
    # GRADE 1
    if grade == 1:
        if num == 1:
            return "two cute 6-year-old Vietnamese children (Nam and Ha) singing happily into a golden microphone in a sunny classroom."
        elif num == 2:
            return "a kind grandmother 3D character lovingly holding and hugging a cute happy baby in a cozy room."
        elif num == 3:
            return "a cute colorful fighting fish (cá cờ) swimming happily in a glass bowl next to a little green cricket on a garden leaf."
        elif num == 4:
            return "a cute little girl happily drawing and painting ripe yellow pears with crayons on a wooden easel."
        elif num == 5:
            return "a brave little baby goat wearing a yellow bell wandering joyfully in a sunny meadow with blooming flowers."
        elif num == 6:
            return "a cute fluffy mother cow and little baby calf grazing peacefully on fresh green grass under blue skies."
        elif num == 7:
            return "a happy family riding a cute colorful motorboat (ca nô) gliding over sparkling blue water under morning sunshine."
        elif num == 8:
            return "a cute little girl sitting on a soft carpet telling fairy tales to her smiling grandmother with a glowing book."
        elif num == 9:
            return "a kind grandmother giving sweet ripe yellow papayas and juicy fruits to a cheerful little child."
        elif num == 10:
            return "a friendly turtle with a cute patterned shell and a fast energetic bunny shaking hands at the finish line in a green forest."
        elif num == 11:
            return "a sweet mother carrying a basket of fresh purple plums and yellow pears smiling at her happy child in a sunny fruit orchard."
        elif num == 12:
            return "a blooming pink rosebud unfolding its soft petals with sparkling morning dew drops under golden sunrise."
        elif num == 13:
            return "a cute little turtle and a cheerful blackbird (chim sáo) singing and playing together like best friends on a mossy log."
        elif num == 14:
            return "a cute fluffy white bunny happily eating a crunchy orange carrot next to a green bamboo grove."
        elif num == 15:
            return "a lush tropical fruit garden full of ripe purple star-apples and yellow fruits with a cheerful child riding a small bicycle."
        elif num == 16:
            return "a playful mischievous little monkey swinging on a branch and picking golden starfruits in a sunny orchard."
        elif num == 17:
            return "a cozy farmyard with a fluffy mother hen and a group of tiny yellow chicks chirping around a basket of ripe purple grapes."
        elif num == 18:
            return "a cute baby water buffalo (nghé con) resting under a big blooming red silk-cotton tree (cây gạo)."
        elif num == 19:
            return "happy children carrying schoolbags walking out of the school gate at dismissal time with swallow birds flying above."
        elif num == 20:
            return "cheerful swallow birds flying over golden spring rice fields under warm sunlight celebrating the new semester."
        elif num == 21:
            return "a cute 6-year-old Vietnamese boy named Nam with neat hair, wearing a white and navy blue school uniform with red backpack, proudly standing in front of primary school gate."
        elif num == 22:
            return "a cute white bunny with long expressive ears listening attentively and alerting forest animal friends about a wolf."
        elif num == 23:
            return "a colorful sailboat gliding on waves and a high-flying diamond kite fluttering in the clear blue sky with gentle wind swirls."
        elif num == 24:
            return "a cute child washing hands under a flowing clean water faucet with rich fluffy soap bubbles and sparkling clean water drops."
        elif num == 25:
            return "a polite little child bowing respectfully to greet mother and teacher, with blooming colorful flower petals spreading joy."
        elif num == 26:
            return "a loving mother on one side and a gentle teacher on the other, warmly holding the hands of a cheerful little child walking into class."
        elif num == 27:
            return "a majestic green banyan/almond tree (cây bàng) spreading wide umbrella-like shade over happy children playing in the schoolyard."
        elif num == 28:
            return "a clever little boy standing in a royal court solving a puzzle before the smiling king and palace guards."
        elif num == 29:
            return "a scenic Vietnamese countryside with lush green rice fields, a winding river, and children flying flute kites at sunset."
        elif num == 30:
            return "blooming pink lotus flowers in a peaceful pond with a glowing golden portrait of Uncle Ho surrounded by joyful children."

    # GRADE 2
    elif grade == 2:
        if num == 1:
            return "a confident second-grader standing in front of a mirror wearing a neat new school uniform with a bright proud smile on opening day."
        elif num == 2:
            return "a smiling mother showing a calendar to her child, opening a pink notebook with neat handwriting and golden rice field in the background."
        elif num == 3:
            return "two loving siblings (Bi and Bong) looking up with wide eyes at a glowing seven-color rainbow with a golden treasure pot."
        elif num == 4:
            return "a fluffy rooster crowing on a fence, a smiling pendulum clock ticking, blooming peach blossoms, and a girl sweeping the house."
        elif num == 5:
            return "a cute baby elephant looking at its reflection in a pond, discovering its natural beauty with its long trunk and big ears."
        elif num == 6:
            return "a shy student named Quang bravely standing up to introduce himself in class while classmates and teacher applaud warmly."
        elif num == 7:
            return "a gentle mimosa plant (cây xấu hổ) slowly opening its delicate green leaves to welcome warm sunlight and a singing bird."
        elif num == 8:
            return "a passionate boy footballer in yellow jersey scoring a spectacular winning goal into the net with teammates cheering."
        elif num == 9:
            return "a gentle teacher guiding a student's hand to write beautiful letters, with white jasmine flowers on the windowsill."
        elif num == 10:
            return "a colorful interactive weekly school timetable board surrounded by books, pencils, and clock showing organized study habits."
        elif num == 11:
            return "a tidy wooden study desk with a glowing lamp, neatly stacked textbooks, colored pencils, and a little potted succulent plant."
        elif num == 12:
            return "a group of diverse primary school students standing together proudly holding class duty badges in alphabetical order."
        elif num == 13:
            return "sunlight streaming through a classroom window onto open books, with lush green trees and chirping birds outside."
        elif num == 14:
            return "a creative student painting a bright red sun, winding river, and red-roofed school on a large canvas."
        elif num == 15:
            return "an open magical textbook revealing a wonderland of fairy tales, nature, and knowledge with glowing book pages."
        elif num == 16:
            return "a child opening a storybook that expands into a vast magical world of ocean waves, lush forests, and friendly wild animals."
        elif num == 17:
            return "two devoted animal friends, a Golden Calf (Bê Vàng) and a White Goat (Dê Trắng), wandering together by a clear forest stream."
        elif num == 18:
            return "a shy brown hedgehog and a friendly white hedgehog happily sharing ripe forest acorns and fresh mushrooms together."
        elif num == 19:
            return "four enchanting seasonal fairy princesses (Spring flowers, Summer sun, Autumn moon, Winter snowflake) holding hands in a magical circle."
        elif num == 20:
            return "golden ripe rice fields stretching to the horizon with a cheerful farmer harvesting rice under autumn golden sunlight."
        elif num == 21:
            return "a refreshing summer rain shower with raindrops tapping on green leaves, followed by a radiant rainbow breaking through clouds."
        elif num == 22:
            return "colorful wild birds of the Central Highlands including dancing peacocks with fan-like tail feathers in a majestic primeval forest."
        elif num == 23:
            return "a clever horse outsmarting a sly wolf disguised as a doctor with a stethoscope by kicking the wolf away."
        elif num == 24:
            return "a brave crayfish (Tôm Càng) flexing its claws to push a shiny little fish friend into a safe rock crevice away from danger."
        elif num == 25:
            return "Uncle Ho doing morning exercises, hiking mountains, and playing volleyball with soldiers in a misty mountain base."
        elif num == 26:
            return "Uncle Ho warmly handing pink candies to a group of joyful children in an orphanage with a child honestly admitting a mistake."
        elif num == 27:
            return "a glowing Vietnamese national flag with a bright five-pointed golden star proudly waving on a flagpole under blue skies."
        elif num == 28:
            return "brave naval soldiers standing guard beside a lighthouse on a remote island in turquoise ocean waters."
        elif num == 29:
            return "a child carefully picking fallen golden rice grains on a drying yard, treasuring every single grain of food."
        elif num == 30:
            return "a cute tiny water droplet evaporating into fluffy white clouds, raining down onto green hills, and flowing back to the ocean."

    # GRADE 3
    elif grade == 3:
        if num == 1:
            return "a third-grade student carefully writing her name on a beautiful new notebook label on the first day of school."
        elif num == 2:
            return "children imagining their future dreams with miniature floating symbols of a doctor stethoscope, pilot airplane, and teacher blackboard."
        elif num == 3:
            return "excited children walking along a sunny path lined with pomelo trees towards their cheerful primary school."
        elif num == 4:
            return "young Louis Pasteur standing by the serene riverbank of Arbois observing nature with intense curiosity."
        elif num == 5:
            return "vibrant red flamboyant flowers (hoa phượng) blooming under summer sun with buzzing cicadas and children flying kites."
        elif num == 6:
            return "an expansive green countryside field where children run freely catching grasshoppers and flying singing flute kites."
        elif num == 7:
            return "ethnic minority children in vibrant brocade outfits walking along a misty mountain trail across a rocky stream to school."
        elif num == 8:
            return "young Victor Hugo presenting a clever mathematical solution written entirely as a beautiful poem to amazed examiners."
        elif num == 9:
            return "gentle hands of a teacher folding colorful origami paper into a boat, a rising sun, and ocean waves."
        elif num == 10:
            return "a majestic traditional communal stilt house (Nhà Rông) in the Central Highlands with a towering axe-shaped roof against blue sky."
        elif num == 11:
            return "a lively morning garden filled with singing magpie robins, a diligent woodpecker tapping on tree bark, and white pomelo blossoms."
        elif num == 12:
            return "a bright cozy school library with tall wooden shelves of colorful books and students reading quietly at wooden tables."
        elif num == 13:
            return "a school teacher and students looking up together at a crystal clear autumn blue sky with soft white cotton clouds."
        elif num == 14:
            return "a loving grandchild gently waving a paper fan to soothe an ailing grandmother asleep beside fragrant garden orange blossoms."
        elif num == 15:
            return "a brave heroic green toad wearing a red warrior headband striking a heavenly drum surrounded by a crab, bear, and tiger to demand rain."
        elif num == 16:
            return "the legendary Trung Sisters (Hai Bà Trưng) in golden armor riding a mighty war elephant leading a victorious uprising army."
        elif num == 17:
            return "a beautiful panoramic map of Vietnam shaped like an S with lush mountains, golden rice terraces, and flowing Mekong River."
        elif num == 18:
            return "a student writing a heartfelt letter to a naval soldier stationed on a distant island with naval ships in the background."
        elif num == 19:
            return "a vigilant naval soldier in blue-striped uniform standing on a rocky island cliff looking through binoculars across the sea."
        elif num == 20:
            return "kind-hearted Dr. Alexandre Yersin wearing a white lab coat caring for fishing village children on the sunny beach of Nha Trang."
        elif num == 21:
            return "Professor Dang Van Ngu conducting medical research in a bamboo jungle laboratory creating penicillin during the resistance war."
        elif num == 22:
            return "children from around the world joining hands around a green healthy Earth globe with planted trees and clean blue oceans."
        elif num == 23:
            return "cheerful children playing jump rope, shuttlecock kicking, and tag in a sunlit schoolyard during recess."
        elif num == 24:
            return "golden ripe sticky rice ears laden with milky fragrant grains swaying in the crisp autumn breeze."
        elif num == 25:
            return "children wearing miniature scholar hats (Mũ Trạng Nguyên) celebrating Vietnamese language knowledge with books and golden trophies."

    # GRADE 4
    elif grade == 4:
        if num == 1:
            return "heroic green cricket warrior Dế Mèn extending his strong armor arms to protect a fragile weeping moth girl (Nhà Trò) by a stone."
        elif num == 2:
            return "an ancient illuminated fairy tale book opening to reveal fairyland characters, coconut palms, and peaceful Vietnamese village life."
        elif num == 3:
            return "a student writing an empathetic letter and packing a box of donated books and stationery for flood-affected friends."
        elif num == 4:
            return "Dế Mèn stomping his strong legs to shatter an evil giant spiderweb, demanding justice and burning the debt contract."
        elif num == 5:
            return "a loyal young boy cheerfully carrying his disabled friend on his back along a winding mountain trail to school."
        elif num == 6:
            return "the Earth represented as a giant blue ball in space surrounded by white peace doves and flying seagulls."
        elif num == 7:
            return "an honest young boy named Chôm kneeling before the wise king admitting his boiled rice seeds did not sprout."
        elif num == 8:
            return "magical glowing seeds instantly growing into giant fruit trees and bombs magically turning into sweet candies."
        elif num == 9:
            return "a young man named Thanh returning to his peaceful ancestral wooden home, being warmly welcomed by his silver-haired grandmother."
        elif num == 10:
            return "a thousand-year-old giant banyan tree with hanging aerial roots sheltering villagers and birds in its immense canopy."
        elif num == 11:
            return "a sweet girl named Chi receiving two glowing blue-violet chrysanthemum flowers from her teacher to bring to her sick father in hospital."
        elif num == 12:
            return "four mythical heroes: Cẩu Khây eating from nine rice steamers, alongside brothers with magical super-strength, super-ears, and chisel-nails."
        elif num == 13:
            return "the four mythical heroes battling a ferocious mountain monster by redirecting flood waters and shattering rocks."
        elif num == 14:
            return "an ancient Đông Sơn bronze drum gleaming with intricate sunburst patterns, flying Lac birds, and ancient dancing warriors."
        elif num == 15:
            return "the breathtaking emerald waters of Hạ Long Bay dotted with limestone karst islands (Fighting Cocks Islet) and red-sailed junks."
        elif num == 16:
            return "the colossal natural wonder of Sơn Đoòng Cave with underground river, towering stalagmites, and a subterranean rainforest under a sinkhole."
        elif num == 17:
            return "agricultural scientist Luong Dinh Cua wrapping precious rice seeds in a cloth pouch against his chest to keep them warm in freezing weather."
        elif num == 18:
            return "a green leaf on a tree branch absorbing golden sunlight and morning dew, feeding vibrant blooming flowers and sweet fruits."
        elif num == 19:
            return "the heroic child courier Lượm with a jaunty cap and satchel, whistling cheerfully and skipping across golden rice fields."
        elif num == 20:
            return "a loving ethnic mother carrying her sleeping baby on her back while harvesting corn on the majestic Ka-lui mountain slope."
        elif num == 21:
            return "a royal court bursting into joyful laughter and bright colors as a cheerful boy shares funny jokes with the king."
        elif num == 22:
            return "a grand golden arena of Vietnamese linguistic scholars with students solving grammar puzzles and holding golden laurel wreaths."

    # GRADE 5
    elif grade == 5:
        if num == 1:
            return "an illuminated historic letter scroll with red wax seal 1945, a waving gold-starred red flag, and blooming lotus flowers on water."
        elif num == 2:
            return "a rich autumn harvest village bathed in various vibrant shades of golden yellow: golden rice fields, golden sun, and golden straw stacks."
        elif num == 3:
            return "a mosaic of colors: red national flag, green mountains and ocean, yellow autumn chrysanthemums, and white school notebook pages."
        elif num == 4:
            return "a cozy Southern Vietnamese thatched house where a brave mother in bà ba shirt calmly protects a resistance soldier eating at a bamboo table."
        elif num == 5:
            return "a brave southern mother and her young son outsmarting colonial soldiers to protect the revolutionary soldier, symbolizing people's loyalty."
        elif num == 6:
            return "children of diverse ethnicities and skin colors holding hands around the Earth surrounded by blooming flowers and peace doves."
        elif num == 7:
            return "a warm handshake between a Vietnamese excavator operator and a tall blond Russian specialist (Alexei) on a sunny hydroelectric dam site."
        elif num == 8:
            return "a magical kingdom of giant mushroom umbrellas under the golden autumn canopy of a dry dipterocarp forest with silver-cheeked gibbons."
        elif num == 9:
            return "a breathtaking high mountain pass called Heaven's Gate (Cổng Trời) overlooking misty valleys, terraced cornfields, and ethnic women in colorful skirts."
        elif num == 10:
            return "dense mangrove forests of Cà Mau with tangled stilt roots anchoring into fertile mud, reclaiming land from crashing ocean waves."
        elif num == 11:
            return "red ripe cardamom fruits glowing like embers beneath green leaves in the misty forest of Đản Khao, releasing sweet fragrant aroma."
        elif num == 12:
            return "a diligent swarm of honeybees flying over mountain passes and ocean waves, collecting nectar from thousands of blossoms."
        elif num == 13:
            return "a brave young boy forest ranger quietly tracking illegal loggers and alerting forest police to protect ancient timber trees."
        elif num == 14:
            return "coastal communities planting young mangrove trees, creating a dense green barrier protecting sea dikes from typhoons."
        elif num == 15:
            return "a mother wading in hot flooded rice paddies under scorching midday sun to transplant rice seedlings for the resistance."
        elif num == 16:
            return "a kind jeweler Pierre wrapping a precious turquoise necklace into a velvet box for a sweet little girl who gave all her savings for her sister."
        elif num == 17:
            return "young patriotic Nguyen Tat Thanh raising his two working hands firmly, determined to travel abroad to find national liberation."
        elif num == 18:
            return "young Nguyen Tat Thanh boarding the steamship Amiral Latouche-Tréville at Nha Rong port in 1911 under starry night skies."
        elif num == 19:
            return "grand Chancellor Tran Thu Do uprightly rewarding a dedicated low-ranking gate guard who strictly upheld national law."
        elif num == 20:
            return "the sacred Hung Kings Temple on top of Nghia Linh mountain overlooking the convergence of three mighty rivers and Mount Ba Vi."
        elif num == 21:
            return "a poet standing on autumn hills overlooking liberated mountains, rivers, and boundless golden rice fields of an independent nation."
        elif num == 22:
            return "venerable teacher Chu Van An leading his high-ranking official students to pay deep homage to his own elderly primary teacher."
        elif num == 23:
            return "traditional Dong Ho folk woodcut prints featuring fat lucky pigs with yin-yang swirls, roosters, and sparkling seashell-powder white paper."
        elif num == 24:
            return "brave schoolboy Út Vịnh heroically diving onto railroad tracks to push two playing toddlers to safety just before an oncoming train."
        elif num == 25:
            return "young top Vietnamese language champions in academic gowns holding golden trophies and scrolls, celebrating mastery of literature and grammar."

    return "a beautiful Vietnamese primary school educational illustration with glowing books and happy mascot."

markdown_output = []
markdown_output.append("# 🎨 BỘ PROMPT 3D PIXAR TẠO ẢNH CHO TOÀN BỘ 132 BÀI HỌC TIẾNG VIỆT (LỚP 1 — 5)\n")
markdown_output.append("> **Phong cách thiết kế chuẩn mực**: Đồng bộ $100\%$ với 4 Mascot độc quyền của WonderKids (Cáo MiuMiu, Cú BoBo, Robot BipBip, Cá Heo PiPi) theo phong cách **3D Pixar / Disney Cinematic Render** (nhân vật nổi khối, mắt to long lanh, texture bông xù hoặc đất sét mượt, ánh sáng studio ấm áp, đạo cụ phát sáng, các chữ cái/từ ngữ 3D bay bổng xung quanh).\n")

count = 0
for g_num, g_title, g_dict in all_grades:
    markdown_output.append(f"\n---\n\n## 📖 {g_title}\n")
    markdown_output.append("| STT | Mã Bài | Tên Bài Học & Tác Giả | Tên File Ảnh Quy Ước | Prompt Tạo Ảnh 3D Pixar (English) |")
    markdown_output.append("| :---: | :---: | :--- | :---: | :--- |")
    
    keys_sorted = sorted(g_dict.keys(), key=lambda x: int(x.split('-b')[-1]))
    for idx, key in enumerate(keys_sorted, 1):
        count += 1
        item = g_dict[key]
        title = item["title"]
        author = item["author"]
        genre = item["genre"]
        scene = get_scene_description(g_num, key, title, author, genre)
        filename = f"{key}.jpg"
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        
        markdown_output.append(f"| {idx} | `{key}` | **{title}**<br>*(Tác giả: {author})* | `{filename}` | `{full_prompt}` |")

output_text = "\n".join(markdown_output)
report_file = os.path.join(DOCS_DIR, 'prompts_132_vietnamese_lessons.md')
with open(report_file, 'w', encoding='utf-8') as f:
    f.write(output_text)

print(f"✅ Đã tạo thành công bộ {count} prompts tại: {report_file}")
