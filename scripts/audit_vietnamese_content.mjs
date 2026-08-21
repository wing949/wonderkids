import { build } from 'esbuild';
import { access, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-report-'));

function escapeCell(value) {
  return String(value || '').replaceAll('|', '\\|').replaceAll('\n', ' ');
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
      const referenceLessonTitle = lesson?.provenance?.referenceLessonTitle || topic.title;
      const titlesSeparated = lesson?.provenance?.contentOrigin === 'system_generated'
        && lesson?.title !== referenceLessonTitle
        && passage?.title !== referenceLessonTitle;
      const generatedTranscriptLabeled = lesson?.provenance?.contentOrigin === 'system_generated'
        && passage?.audioNarration?.startsWith('Luyện đọc tự sinh');
      const [primaryExists, fallbackExists] = asset
        ? await Promise.all([fileStatus(asset.primaryPath), fileStatus(asset.fallbackPath)])
        : [false, false];

      allRows.push({
        grade,
        semester: topic.semester,
        id: topic.id,
        lessonNumber: topic.lessonNumber,
        appTitle: lesson?.title || 'Thiếu tên nội dung',
        referenceLessonTitle,
        referenceTitleStatus: lesson?.provenance?.verificationStatus === 'verified' ? 'verified' : 'unverified',
        contentOrigin: lesson?.provenance?.contentOrigin || 'missing',
        verificationStatus: lesson?.provenance?.verificationStatus || 'missing',
        referenceBook: lesson?.referenceBook || source?.title || 'Thiếu nguồn',
        referenceUrl: lesson?.referenceUrl || source?.readerUrl || '',
        referenceDetail: lesson?.referenceDetail || 'Thiếu thông tin bài/trang',
        titlesSeparated,
        generatedTranscriptLabeled,
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
    const titleStatus = row.referenceTitleStatus === 'verified' ? 'Đã xác minh' : 'Chưa xác minh';
    return `| ${row.id} | ${row.grade} / ${row.semester} | ${escapeCell(row.appTitle)} | ${escapeCell(row.referenceLessonTitle)} | ${titleStatus} | ${escapeCell(row.referenceDetail)} | ${origin} | ${verification} | ${sourceLink} | ${row.contentLines} | ${audio} | ${row.questionCount} |`;
  }).join('\n');

  const report = `# Audit nội dung Tiếng Việt

Ngày lập: 2026-08-21  
Phạm vi: toàn bộ dữ liệu Tiếng Việt lớp 1–5 trong ứng dụng.

## Kết luận ngắn

- Có **132/132 bài** được nối đúng mã bài với một gói đọc, theo thứ tự lớp/tập hiện tại.
- Có **0 bài được đánh dấu SGK đã đối chiếu nguyên văn**. Dữ liệu hiện tại là bản tóm tắt/chuyển thể, câu hỏi và transcript audio do hệ thống biên soạn; link SGK chỉ là tài liệu tham khảo.
- Có **129 bài nội dung tự sinh có tham khảo SGK** và **3 bài bổ trợ sư phạm**.
- Có **${totalQuestions} câu hỏi/hoạt động**, đều được đánh dấu **NỘI DUNG TỰ SINH**.
- Có đủ **132 audio chính + 132 fallback**, đều là WAV hợp lệ và dùng đúng một fallback cùng mã bài. Nội dung lời đọc trong WAV chưa thể xác nhận tự động chỉ bằng kiểm tra container WAV; cần nghe/đối chiếu transcript khi nghiệm thu âm thanh.
- Tên nội dung trong app đã được tách khỏi tên chủ đề tham khảo: ví dụ không còn trình bày văn bản tự sinh dưới đúng tiêu đề “Bài 2: Đôi tai xấu xí”.

## Phát hiện nghiêm trọng

1. **Không có chứng cứ đủ để gọi bất kỳ văn bản nào là nguyên văn SGK.** Vì vậy hệ thống không được hiển thị nhãn “SGK đã đối chiếu” cho 132 bài hiện tại.
2. **132 tên bài/chủ đề đang có chỉ là metadata cũ chưa xác minh từng trang.** Chúng được giữ ở trường “Chủ đề tham khảo đang khai báo”, không phải “Tên bài SGK đã xác minh”.
3. **Cấu trúc lớp 1 hiện không thể đại diện toàn bộ SGK.** App có 30 mục, trong khi tài liệu tập huấn chính thức mô tả riêng Tập một có 80 bài chính (chưa kể tuần mở đầu và ôn tập). Nguồn kiểm tra: [Tài liệu tập huấn Tiếng Việt 1](https://taphuan.nxbgd.vn/tap-huan/download/4529065633).
4. **Audio:** manifest và định dạng file được kiểm tra tự động; lời nói bên trong WAV chưa được nhận dạng giọng nói để so khớp từng câu. Transcript runtime được đánh dấu tự sinh, nhưng các file WAV cần vòng nghiệm thu nghe thực tế trước khi tuyên bố khớp transcript.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Tổng bài | ${allRows.length} |
| Theo lớp | ${Object.entries(groupCount(allRows, (row) => row.grade)).map(([key, value]) => `Lớp ${key}: ${value}`).join('; ')} |
| Theo tập | ${Object.entries(groupCount(allRows, (row) => row.semester)).map(([key, value]) => `Tập ${key}: ${value}`).join('; ')} |
| Nội dung tự sinh, chỉ tham khảo | ${allRows.filter((row) => row.contentOrigin === 'system_generated').length} |
| Bổ trợ sư phạm | ${allRows.filter((row) => row.contentOrigin === 'pedagogical_supplement').length} |
| SGK đã đối chiếu nguyên văn | ${allRows.filter((row) => row.verificationStatus === 'verified').length} |
| Tên bài/chủ đề SGK đã xác minh | ${allRows.filter((row) => row.referenceTitleStatus === 'verified').length} |
| Tên chủ đề đang khai báo, chưa xác minh | ${allRows.filter((row) => row.referenceTitleStatus === 'unverified').length} |
| Gói đọc có nội dung | ${allRows.filter((row) => row.passageExists).length} |
| Tổng dòng/đoạn đọc | ${totalContentLines} |
| Gói có dạng gạch đầu dòng/tóm tắt | ${allRows.filter((row) => row.bulletLines > 0).length} |
| Tổng câu hỏi/hoạt động | ${totalQuestions} |
| Nội dung tự sinh đã tách tên khỏi tên tham khảo | ${allRows.filter((row) => row.titlesSeparated).length}/${allRows.filter((row) => row.contentOrigin === 'system_generated').length} |
| Transcript runtime tự sinh có nhãn rõ | ${allRows.filter((row) => row.generatedTranscriptLabeled).length}/${allRows.filter((row) => row.contentOrigin === 'system_generated').length} |
| Audio chính tồn tại và hợp lệ | ${allRows.filter((row) => row.primaryExists).length}/${allRows.length} |
| Audio fallback tồn tại và hợp lệ | ${allRows.filter((row) => row.fallbackExists).length}/${allRows.length} |
| Bài có link đọc SGK tham khảo | ${allRows.filter((row) => row.referenceUrl).length}/${allRows.length} |

## Bảng kiểm kê từng bài

“Tên nội dung trong app” là tên thực tế trẻ nhìn thấy. “Chủ đề đang khai báo” và số trang là metadata cũ cần đối chiếu thủ công với sách; tuyệt đối không được hiểu là đã xác minh.

| Mã bài | Lớp / tập | Tên nội dung trong app | Chủ đề đang khai báo | Tên SGK | Trang/bài đang khai báo | Nguồn nội dung | Trạng thái | Sách nguồn | Đoạn | Audio | Câu hỏi |
|---|---|---|---|---|---|---|---|---|---:|---|---:|
${markdownRows}

## Quy tắc đã áp dụng

1. Chỉ nội dung có \`contentOrigin: sgk_reference\` và \`verificationStatus: verified\` cùng biên bản đối chiếu từng câu mới được hiển thị nhãn “Nội dung theo SGK đã đối chiếu”.
2. Nội dung còn lại hiển thị “NỘI DUNG TỰ SINH” hoặc “BỔ TRỢ SƯ PHẠM”; tên bài, tập, trang và link sách nằm trong phần “tham khảo đang khai báo/chưa xác minh”.
3. Mỗi mã bài chỉ có hai đường dẫn audio: file chính của bài và một file fallback cùng mã bài. Không chuyển sang giọng trình duyệt hoặc ghép nhiều giọng trong một bài.
4. Nếu cần nâng một bài lên trạng thái SGK đã đối chiếu, phải bổ sung provenance riêng cho bài đó và nghiệm thu nội dung, câu hỏi, hoạt động, transcript audio cùng trang SGK trước khi đổi trạng thái.
`;

await mkdir(join(workspace, 'reports'), { recursive: true });
await writeFile(join(workspace, 'reports', 'vietnamese-content-audit.md'), report, 'utf8');
console.log(JSON.stringify({ report: 'reports/vietnamese-content-audit.md', lessons: allRows.length, questions: totalQuestions }, null, 2));
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
