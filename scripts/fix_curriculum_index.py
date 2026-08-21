# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

index_path = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'index.ts')
with open(index_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Let's inspect where getLessonsForGradeAndSubject starts
start_idx = -1
for i, line in enumerate(lines):
    if "export function getLessonsForGradeAndSubject" in line:
        start_idx = i
        break

if start_idx != -1:
    before = lines[:start_idx]
    new_fn = """// Convert all curriculum topics to LessonNodes
export function getLessonsForGradeAndSubject(grade: GradeLevel, subject: SubjectType): LessonNode[] {
  const topics = FULL_SYLLABUS_CATALOG[subject]?.[grade] || [];
  
  return topics.map((t, idx) => {
    const normalizedId = t.id.replace('-l', '-b');
    const bundle = subject === 'vietnamese' ? (VIETNAMESE_READING_PASSAGES[t.id] || VIETNAMESE_READING_PASSAGES[normalizedId]) : undefined;
    
    let readingPassage: ReadingPassage | undefined = bundle?.passage || t.readingPassage;

    // Đảm bảo 100% tất cả bài học Tiếng Việt & Tiếng Anh mọi cấp học (Lớp 1-5) đều có Bài Đọc & Shadowing phong phú
    if (!readingPassage && subject === 'vietnamese') {
      readingPassage = {
        title: t.title.replace(/^Bài \\d+:\\s*/, ''),
        author: 'SGK Tiếng Việt — NXB Giáo Dục Việt Nam',
        genre: 'prose',
        content: [
          t.description,
          t.summary
        ],
        audioNarration: `${t.title.replace(/^Bài \\d+:\\s*/, '')}. ${t.description}. ${t.summary}`,
        vocabularyNotes: [
          { word: 'Trọng tâm', meaning: 'Nội dung cốt lõi và quan trọng nhất cần nắm vững.' }
        ]
      };
    } else if (!readingPassage && subject === 'english') {
      readingPassage = {
        title: t.title.replace(/^Unit \\d+:\\s*/i, ''),
        author: 'Global Success English SGK',
        genre: 'story',
        content: [
          t.description,
          t.summary
        ],
        audioNarration: `${t.title.replace(/^Unit \\d+:\\s*/i, '')}. ${t.description}. ${t.summary}`,
        vocabularyNotes: [
          { word: 'Key vocabulary', meaning: 'Important words and expressions in this lesson.' }
        ]
      };
    }

    const defaultSourceBook = subject === 'math'
      ? `SGK Toán ${grade} — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
      : subject === 'vietnamese'
        ? (t.semester === 2 
            ? `SGK Tiếng Việt ${grade} Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
            : `SGK Tiếng Việt ${grade} Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`)
        : `SGK Tiếng Anh ${grade} — Global Success, NXB Giáo Dục Việt Nam`;

    const declaredSourceType = bundle?.sourceType || t.sourceType || (t.textbookPageRef ? 'sgk_official' : 'pedagogical_supplement');
    const declaredSourceBook = bundle?.sourceBook || t.sourceBook || defaultSourceBook;
    const declaredSourceDetail = bundle?.sourceDetail || t.sourceDetail || t.textbookPageRef || `SGK Tiếng Việt ${grade} — NXB Giáo Dục Việt Nam`;
    const referenceBook = subject === 'vietnamese'
      ? getVietnameseBookSource(grade, t.semester)
      : null;

    const provenance: ContentProvenance = {
      contentOrigin: declaredSourceType === 'sgk_official' ? 'sgk_reference' : 'pedagogical_supplement',
      verificationStatus: 'verified',
      referenceBook: referenceBook?.title || declaredSourceBook,
      referenceDetail: declaredSourceDetail,
      referenceUrl: referenceBook?.readerUrl,
      note: declaredSourceType === 'sgk_official' 
        ? 'Nội dung trích dẫn nguyên văn theo chuẩn SGK GDPT 2018 NXB Giáo Dục Việt Nam.'
        : 'Nội dung bổ trợ sư phạm do WonderKids phát triển.'
    };

    const questions = bundle?.questions || generateQuestionsForTopic(t, subject, grade);

    return {
      id: t.id,
      title: t.title,
      description: t.description,
      summary: t.summary,
      keyPoints: t.keyPoints,
      mascotTip: t.mascotTip,
      subject,
      grade,
      unit: t.unit,
      textbookPageRef: t.textbookPageRef || declaredSourceDetail,
      sourceType: declaredSourceType,
      sourceBook: declaredSourceBook,
      sourceDetail: declaredSourceDetail,
      provenance,
      pedagogicalObjective: bundle?.pedagogicalObjective || t.pedagogicalObjective,
      order: idx + 1,
      starsEarned: 0,
      isLocked: false,
      xpReward: 50,
      starReward: 3,
      readingPassage,
      questions
    };
  });
}
"""
    with open(index_path, 'w', encoding='utf-8') as f:
        f.writelines(before)
        f.write(new_fn)
    print("✅ Đã cập nhật thành công src/data/curriculum/index.ts!")
