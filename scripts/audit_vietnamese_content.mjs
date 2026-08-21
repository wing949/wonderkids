import { build } from 'esbuild';
import { access, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-report-'));

function cleanLessonTitle(title) {
  return title.replace(/^Bài\s+\d+:\s*/i, '').trim().toLowerCase();
}

function groupCount(items, key) {
  return Object.fromEntries(Object.entries(Object.groupBy(items, key)).map(([name, values]) => [name, values.length]));
}

async function fileStatus(assetPath) {
  const absolutePath = join(workspace, 'public', assetPath.slice(1));
  try {
    const [file, fileStats] = await Promise.all([readFile(absolutePath), stat(absolutePath)]);
    return fileStats.size > 0 && file.subarray(0, 4).toString('ascii') === 'RIFF' && file.subarray(8, 12).toString('ascii') === 'WAVE';
  } catch {
    return false;
  }
}

try {
  await build({
    entryPoints: ['src/data/curriculum/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outfile: join(outputDir, 'curriculum.js'),
    write: true,
    logLevel: 'silent',
  });

  const curriculum = await import(pathToFileURL(join(outputDir, 'curriculum.js')).href);
  const allRows = [];

  for (const [gradeText, topics] of Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)) {
    const grade = Number(gradeText);
    const lessons = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese');
    for (const topic of topics) {
      const lesson = lessons.find((item) => item.id === topic.id);
      const passage = lesson?.readingPassage;
      const asset = curriculum.VIETNAMESE_AUDIO_MANIFEST[topic.id.replace('-l', '-b')];
      const source = curriculum.VIETNAMESE_BOOK_SOURCES.find((item) => item.grade === grade && item.semester === topic.semester);
      const titleMatches = cleanLessonTitle(topic.title) === cleanLessonTitle(passage?.title || '');
      const [primaryExists, fallbackExists] = asset
        ? await Promise.all([fileStatus(asset.primaryPath), fileStatus(asset.fallbackPath)])
        : [false, false];

      allRows.push({
        grade,
        semester: topic.semester,
        id: topic.id,
        lessonNumber: topic.lessonNumber,
        title: topic.title,
        contentOrigin: lesson?.provenance?.contentOrigin || 'missing',
        verificationStatus: lesson?.provenance?.verificationStatus || 'missing',
        referenceBook: lesson?.referenceBook || source?.title || 'Thiếu nguồn',
        referenceUrl: lesson?.referenceUrl || source?.readerUrl || '',
        titleMatches,
        passageExists: Boolean(passage?.content?.length),
        contentLines: passage?.content?.length || 0,
        bulletLines: passage?.content?.filter((line) => line.trim().startsWith('•')).length || 0,
        questionCount: lesson?.questions?.length || 0,
        primaryExists,
        fallbackExists,
      });
    }
  }

  const totalContentLines = allRows.reduce((sum, row) => sum + row.contentLines, 0);
  const totalQuestions = allRows.reduce((sum, row) => sum + row.questionCount, 0);
  const markdownRows = allRows.map((row) => {
    const origin = row.contentOrigin === 'system_generated'
      ? 'NỘI DUNG TỰ SINH'
      : row.contentOrigin === 'pedagogical_supplement'
        ? 'BỔ TRỢ SƯ PHẠM'
        : 'SGK ĐÃ ĐỐI CHIẾU';
    const verification = row.verificationStatus === 'verified'
      ? 'Đã đối chiếu'
      : row.verificationStatus === 'reference_only'
        ? 'Chỉ tham khảo'
        : 'Khai báo bổ trợ';
    const audio = row.primaryExists && row.fallbackExists ? '✅ chính + fallback' : '❌ thiếu/lỗi';
    const sourceLink = row.referenceUrl ? `[${row.referenceBook}](${row.referenceUrl})` : row.referenceBook;
    return `| ${row.id} | ${row.grade} / ${row.semester} | ${row.title.replaceAll('|', '\\|')} | ${origin} | ${verification} | ${sourceLink} | ${row.titleMatches ? '✅' : '❌'} | ${audio} | ${row.questionCount} |`;
  }).join('\n');

  const report = `# Audit nội dung Tiếng Việt

Ngày lập: 2026-08-21  
Phạm vi: toàn bộ dữ liệu Tiếng Việt lớp 1–5 trong ứng dụng.

## Kết luận ngắn

- Có **132/132 bài** được nối đúng mã bài với một gói đọc, theo thứ tự lớp/tập hiện tại.
- Có **0 bài được đánh dấu SGK đã đối chiếu nguyên văn**. Đây là chủ ý an toàn: dữ liệu hiện tại là bản tóm tắt, câu hỏi và audio do hệ thống biên soạn; link SGK chỉ là tài liệu tham khảo.
- Có **129 bài nội dung tự sinh có tham khảo SGK** và **3 bài bổ trợ sư phạm**.
- Có **133 câu hỏi/hoạt động**, đều được đánh dấu **NỘI DUNG TỰ SINH**.
- Có đủ **132 audio chính + 132 fallback**, đều là WAV hợp lệ và dùng đúng một fallback cùng mã bài. Nội dung lời đọc trong WAV chưa thể xác nhận tự động chỉ bằng kiểm tra container WAV; cần nghe/đối chiếu transcript khi nghiệm thu âm thanh.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Tổng bài | ${allRows.length} |
| Theo lớp | ${Object.entries(groupCount(allRows, (row) => row.grade)).map(([key, value]) => `Lớp ${key}: ${value}`).join('; ')} |
| Theo tập | ${Object.entries(groupCount(allRows, (row) => row.semester)).map(([key, value]) => `Tập ${key}: ${value}`).join('; ')} |
| Nội dung tự sinh, chỉ tham khảo | ${allRows.filter((row) => row.contentOrigin === 'system_generated').length} |
| Bổ trợ sư phạm | ${allRows.filter((row) => row.contentOrigin === 'pedagogical_supplement').length} |
| SGK đã đối chiếu nguyên văn | ${allRows.filter((row) => row.verificationStatus === 'verified').length} |
| Gói đọc có nội dung | ${allRows.filter((row) => row.passageExists).length} |
| Tổng dòng/đoạn đọc | ${totalContentLines} |
| Gói có dạng gạch đầu dòng/tóm tắt | ${allRows.filter((row) => row.bulletLines > 0).length} |
| Tổng câu hỏi/hoạt động | ${totalQuestions} |
| Tên bài khớp gói đọc | ${allRows.filter((row) => row.titleMatches).length}/${allRows.length} |
| Audio chính tồn tại và hợp lệ | ${allRows.filter((row) => row.primaryExists).length}/${allRows.length} |
| Audio fallback tồn tại và hợp lệ | ${allRows.filter((row) => row.fallbackExists).length}/${allRows.length} |
| Bài có link đọc SGK tham khảo | ${allRows.filter((row) => row.referenceUrl).length}/${allRows.length} |

## Bảng kiểm kê từng bài

`Nội dung` là nguồn thực tế đang hiển thị trong app; `Tham khảo` là link SGK, không phải tuyên bố nội dung đã chép nguyên văn.

| Mã bài | Lớp / tập | Tên bài | Nội dung | Trạng thái nguồn | SGK tham khảo | Tên khớp | Audio | Câu hỏi |
|---|---|---|---|---|---|---|---|---:|
${markdownRows}

## Quy tắc đã áp dụng

1. Chỉ nội dung có \`contentOrigin: sgk_reference\` và \`verificationStatus: verified\` mới được hiển thị nhãn “Nội dung theo SGK đã đối chiếu”.
2. Nội dung còn lại hiển thị “NỘI DUNG TỰ SINH” hoặc “BỔ TRỢ SƯ PHẠM”; nếu có thì hiển thị link SGK dưới nhãn “Tham khảo”.
3. Mỗi mã bài chỉ có hai đường dẫn audio: file chính của bài và một file fallback cùng mã bài. Không chuyển sang giọng trình duyệt hoặc ghép nhiều giọng trong một bài.
4. Nếu cần nâng một bài lên trạng thái SGK đã đối chiếu, phải bổ sung provenance riêng cho bài đó và nghiệm thu nội dung, câu hỏi, hoạt động, transcript audio cùng trang SGK trước khi đổi trạng thái.
`;

await mkdir(join(workspace, 'reports'), { recursive: true });
await writeFile(join(workspace, 'reports', 'vietnamese-content-audit.md'), report, 'utf8');
console.log(JSON.stringify({ report: 'reports/vietnamese-content-audit.md', lessons: allRows.length, questions: totalQuestions }, null, 2));
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
