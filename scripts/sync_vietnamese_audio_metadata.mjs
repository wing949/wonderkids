import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const checkOnly = process.argv.includes('--check');
const tasksPath = join(workspace, 'scripts', 'target_293_structured_reading_passages.json');
const manifestPath = join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'audioManifest.generated.json');
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audio-sync-'));

function samePages(left, right) {
  return Array.isArray(left)
    && Array.isArray(right)
    && left.length === right.length
    && left.every((page, index) => page === right[index]);
}

function serializeJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

try {
  await build({
    entryPoints: {
      curriculum: 'src/data/curriculum/index.ts',
      narration: 'src/utils/lessonNarration.ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: outputDir,
    write: true,
    logLevel: 'silent',
  });

  const { getLessonsForGradeAndSubject } = await import(
    pathToFileURL(join(outputDir, 'curriculum.js')).href
  );
  const { buildLessonNarration } = await import(
    pathToFileURL(join(outputDir, 'narration.js')).href
  );
  const runtimeLessons = new Map(
    [1, 2, 3, 4, 5]
      .flatMap((grade) => getLessonsForGradeAndSubject(grade, 'vietnamese'))
      .map((lesson) => [lesson.id.replace('-l', '-b'), lesson]),
  );
  const tasks = JSON.parse(await readFile(tasksPath, 'utf8'));
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

  if (!Array.isArray(tasks)) {
    throw new Error('Danh sách tác vụ audio phải là một mảng.');
  }

  const errors = [];
  const taskChanges = [];
  const manifestChanges = [];
  const taskIds = tasks.map((task) => task.lessonId);
  const uniqueTaskIds = new Set(taskIds);
  const rebuiltManifest = {};

  if (tasks.length !== 293) {
    errors.push(`danh sách sinh audio có ${tasks.length} bài, yêu cầu đúng 293 bài`);
  }
  if (uniqueTaskIds.size !== taskIds.length) {
    errors.push('danh sách sinh audio có lessonId bị trùng');
  }
  function getRuntimeLesson(lessonId) {
    const lesson = runtimeLessons.get(lessonId);
    if (!lesson) {
      errors.push(`${lessonId}: không tồn tại trong chương trình runtime`);
      return null;
    }
    const pages = lesson.readingPassage?.sourcePages;
    if (!Array.isArray(pages) || pages.length === 0 || pages.some((page) => !Number.isInteger(page) || page < 1)) {
      errors.push(`${lessonId}: transcript runtime không có sourcePages hợp lệ`);
      return null;
    }
    return lesson;
  }

  for (const task of tasks) {
    const lesson = getRuntimeLesson(task.lessonId);
    if (!lesson) continue;
    const pages = [...lesson.readingPassage.sourcePages];
    const text = buildLessonNarration(lesson.readingPassage);
    const textHash = sha256(text);
    const changedFields = [];
    if (!samePages(task.sourcePages, pages)) {
      task.sourcePages = pages;
      changedFields.push('sourcePages');
    }
    if (task.text !== text) {
      task.text = text;
      task.textLength = text.length;
      changedFields.push('text');
    }
    if (task.textHash !== textHash) {
      task.textHash = textHash;
      changedFields.push('textHash');
    }
    if (changedFields.length > 0) taskChanges.push({ lessonId: task.lessonId, fields: changedFields });

    const previous = manifest[task.lessonId] || {};
    const next = {
      lessonId: task.lessonId,
      primaryPath: `/audio/curriculum/${task.lessonId}.mp3`,
      primaryVoice: 'Cô Giáo Vy',
      transcriptHash: textHash,
      lessonVersion: Math.max(1, Number(previous.lessonVersion || 1)),
      sourcePages: pages,
    };
    rebuiltManifest[task.lessonId] = next;
    if (JSON.stringify(previous) !== JSON.stringify(next)) {
      manifestChanges.push({ lessonId: task.lessonId, fields: ['primary-only-manifest'] });
    }
  }

  if (errors.length > 0) {
    throw new Error(`Không thể đồng bộ metadata audio:\n- ${errors.join('\n- ')}`);
  }

  const result = {
    checkedTasks: tasks.length,
    checkedManifestAssets: Object.keys(rebuiltManifest).length,
    uniqueLessonIds: uniqueTaskIds.size,
    taskUpdates: taskChanges.length,
    manifestUpdates: manifestChanges.length,
    mode: checkOnly ? 'check' : 'sync',
    samples: [...taskChanges, ...manifestChanges].slice(0, 5),
  };

  if (checkOnly && (taskChanges.length > 0 || manifestChanges.length > 0)) {
    console.error(JSON.stringify(result, null, 2));
    process.exitCode = 1;
  } else {
    if (!checkOnly && taskChanges.length > 0) {
      await writeFile(tasksPath, serializeJson(tasks), 'utf8');
    }
    if (!checkOnly && manifestChanges.length > 0) {
      await writeFile(manifestPath, serializeJson(rebuiltManifest), 'utf8');
    }
    console.log(JSON.stringify(result, null, 2));
  }
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
