import { ENGLISH_CURRICULUM_BY_GRADE } from '../src/data/curriculum/english/index.js';
import { generateEnglishQuestions } from '../src/data/curriculum/english/englishQuestionEngine.js';

const grades = [1, 2, 3, 4, 5];
let totalUnits = 0;
let totalQuestions = 0;

console.log('======================================================================');
console.log('   BẢNG THỐNG KÊ CHƯƠNG TRÌNH & CÂU HỎI TIẾNG ANH SGK (GLOBAL SUCCESS)');
console.log('======================================================================\n');

for (const grade of grades) {
  const topics = ENGLISH_CURRICULUM_BY_GRADE[grade] || [];
  const term1 = topics.filter(t => t.semester === 1);
  const term2 = topics.filter(t => t.semester === 2);
  
  let gradeQuestions = 0;
  for (const topic of topics) {
    const qs = generateEnglishQuestions(topic, grade);
    gradeQuestions += qs.length;
  }
  
  totalUnits += topics.length;
  totalQuestions += gradeQuestions;
  
  console.log(`📘 TIẾNG ANH LỚP ${grade}:`);
  console.log(`   - Tổng số bài học (Units): ${topics.length} Units`);
  console.log(`     + Học kỳ 1 (Tập 1): ${term1.length} Units (Unit 1 -> Unit ${term1.length})`);
  console.log(`     + Học kỳ 2 (Tập 2): ${term2.length} Units (Unit ${term1.length + 1} -> Unit ${topics.length})`);
  console.log(`   - Số câu hỏi mỗi bài học: 10 câu hỏi tương tác / Unit`);
  console.log(`   - Tổng số câu hỏi Lớp ${grade}: ${gradeQuestions} câu hỏi\n`);
}

console.log('======================================================================');
console.log(`🎉 TỔNG KẾT TOÀN BỘ CHƯƠNG TRÌNH TIẾNG ANH TIỂU HỌC (LỚP 1 - 5):`);
console.log(`   - Số cấp lớp học: 5 Lớp (Lớp 1, Lớp 2, Lớp 3, Lớp 4, Lớp 5)`);
console.log(`   - Tổng số bài học (Units): ${totalUnits} Units`);
console.log(`   - Tổng số câu hỏi tương tác có hình ảnh: ${totalQuestions} câu hỏi`);
console.log('======================================================================');
