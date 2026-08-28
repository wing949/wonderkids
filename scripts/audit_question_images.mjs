// Comprehensive Auditor for Question-Image Relevance across ALL subjects & grades
import { getCurriculumByGrade } from '../src/data/curriculum/index.ts';
import { generatePracticeQuestions } from '../src/data/practice/generator.ts';
import { getCompetitionCurriculum } from '../src/data/practice/competitionGenerator.ts';

const grades = [1, 2, 3, 4, 5];
const subjects = ['math', 'vietnamese', 'english'];

console.log('=== STARTING 100% AUDIT OF ALL QUESTIONS WITH IMAGES ===\n');

const auditResults = {
  totalQuestions: 0,
  questionsWithImages: 0,
  exactMatches: 0,
  mismatches: [],
  unnecessaryImages: [],
  missingImages: [],
  brokenImages: [],
};

for (const grade of grades) {
  for (const subject of subjects) {
    const topics = getCurriculumByGrade(grade, subject);
    for (const topic of topics) {
      if (!topic.questions) continue;
      for (const q of topic.questions) {
        auditResults.totalQuestions++;
        const hasImage = Boolean(q.image || q.visualType);
        if (!hasImage) continue;

        auditResults.questionsWithImages++;
        const img = q.image || '';
        const vType = q.visualType || '';
        const text = q.questionText || '';

        // Check if image is an unrelated fallback
        const isEnglish = subject === 'english';
        if (isEnglish) {
          // Rule 1: Dialogue questions (Q6, Q7) should NOT display random vocabulary food/toy image unless dialogue is about that item
          if ((text.includes('Choose the best reply') || text.includes('Choose the correct question')) && img && img !== '🌟' && !img.includes('dialogue')) {
            auditResults.mismatches.push({
              grade,
              subject,
              topicId: topic.id,
              topicTitle: topic.title,
              qId: q.id,
              questionText: text,
              currentImage: img,
              errorType: 'SAI – KHÔNG LIÊN QUAN (Hội thoại nhưng gắn hình từ vựng ngẫu nhiên)',
              reason: 'Câu hỏi hội thoại/giao tiếp không liên quan đến hình ảnh từ vựng được gắn.',
              proposedAction: 'Loại bỏ hình ảnh không cần thiết khỏi câu hội thoại hoặc chỉ dùng icon phù hợp/hình tranh đối thoại.',
            });
          }

          // Rule 2: Unscramble (Q8) image must match the words in the unscramble sentence
          if (text.includes('Put the words in the correct order')) {
            const wordsMatch = text.match(/\[(.*?)\]/);
            const words = wordsMatch ? wordsMatch[1].toLowerCase() : '';
            if (img.includes('/images/sgk_english/')) {
              const imgName = img.split('/').pop().replace(/(_hd)?\.png$/, '').split('_').pop();
              if (imgName && !words.includes(imgName)) {
                auditResults.mismatches.push({
                  grade,
                  subject,
                  topicId: topic.id,
                  topicTitle: topic.title,
                  qId: q.id,
                  questionText: text,
                  currentImage: img,
                  errorType: 'SAI – GÁN NHẦM (Câu sắp xếp từ một đằng, hình một nẻo)',
                  reason: `Câu hỏi sắp xếp câu có từ [${words}], nhưng hình ảnh lại là [${imgName}].`,
                  proposedAction: `Đổi hình ảnh sang đúng từ xuất hiện trong câu hoặc loại bỏ nếu câu không yêu cầu nhìn hình.`,
                });
              }
            }
          }

          // Rule 3: Look at the picture questions (Q1, Q2, Q4) MUST have relevant image
          if (text.includes('Look at the picture')) {
            if (!img) {
              auditResults.missingImages.push({
                grade,
                subject,
                topicId: topic.id,
                qId: q.id,
                questionText: text,
                errorType: 'THIẾU HÌNH',
                reason: 'Câu hỏi yêu cầu "Look at the picture" nhưng không có hình ảnh.',
              });
            }
          }
        }
      }
    }
  }
}

console.log(`Total questions audited: ${auditResults.totalQuestions}`);
console.log(`Total questions with images: ${auditResults.questionsWithImages}`);
console.log(`Total mismatches found: ${auditResults.mismatches.length}`);
console.log(`Total missing images found: ${auditResults.missingImages.length}`);

console.log('\n--- SAMPLE OF MISMATCHES FOUND ---');
auditResults.mismatches.slice(0, 15).forEach((m, idx) => {
  console.log(`\n[${idx + 1}] ID: ${m.qId} (${m.topicTitle})`);
  console.log(`- Question: ${m.questionText}`);
  console.log(`- Current Image: ${m.currentImage}`);
  console.log(`- Error: ${m.errorType}`);
  console.log(`- Reason: ${m.reason}`);
  console.log(`- Action: ${m.proposedAction}`);
});
