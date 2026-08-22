import { build } from 'esbuild';
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

try {
  await build({
    entryPoints: ['src/data/curriculum/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: outputDir,
    write: true,
    logLevel: 'silent',
  });

  const { getLessonsForGradeAndSubject } = await import(
    pathToFileURL(join(outputDir, 'index.js')).href
  );
  const runtimeLessons = new Map(
    [1, 2, 3, 4, 5]
      .flatMap((grade) => getLessonsForGradeAndSubject(grade, 'vietnamese'))
      .map((lesson) => [lesson.id, lesson]),
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
  const manifestIds = Object.keys(manifest);
  const uniqueTaskIds = new Set(taskIds);
  const uniqueManifestIds = new Set(manifestIds);

  if (tasks.length !== 293) {
    errors.push(`danh sách sinh audio có ${tasks.length} bài, yêu cầu đúng 293 bài`);
  }
  if (manifestIds.length !== 293) {
    errors.push(`manifest audio có ${manifestIds.length} bài, yêu cầu đúng 293 bài`);
  }
  if (uniqueTaskIds.size !== taskIds.length) {
    errors.push('danh sách sinh audio có lessonId bị trùng');
  }
  const missingFromManifest = [...uniqueTaskIds].filter((lessonId) => !uniqueManifestIds.has(lessonId));
  const missingFromTasks = [...uniqueManifestIds].filter((lessonId) => !uniqueTaskIds.has(lessonId));
  if (missingFromManifest.length > 0 || missingFromTasks.length > 0) {
    errors.push(
      `task/manifest không cùng tập lessonId (thiếu ở manifest: ${missingFromManifest.join(', ') || '0'}; thiếu ở task: ${missingFromTasks.join(', ') || '0'})`,
    );
  }

  function getRuntimePages(lessonId) {
    const lesson = runtimeLessons.get(lessonId);
    const pages = lesson?.readingPassage?.sourcePages;
    if (!lesson) {
      errors.push(`${lessonId}: không tồn tại trong chương trình runtime`);
      return null;
    }
    if (!Array.isArray(pages) || pages.length === 0 || pages.some((page) => !Number.isInteger(page) || page < 1)) {
      errors.push(`${lessonId}: transcript runtime không có sourcePages hợp lệ`);
      return null;
    }
    return [...pages];
  }

  for (const task of tasks) {
    const pages = getRuntimePages(task.lessonId);
    if (!pages) continue;
    if (!samePages(task.sourcePages, pages)) {
      taskChanges.push({ lessonId: task.lessonId, from: task.sourcePages, to: pages });
      task.sourcePages = pages;
    }
  }

  for (const [manifestId, asset] of Object.entries(manifest)) {
    if (asset.lessonId !== manifestId) {
      errors.push(`${manifestId}: lessonId trong manifest là ${asset.lessonId || '(trống)'}`);
      continue;
    }
    const pages = getRuntimePages(asset.lessonId);
    if (!pages) continue;
    if (!samePages(asset.sourcePages, pages)) {
      manifestChanges.push({ lessonId: asset.lessonId, from: asset.sourcePages, to: pages });
      asset.sourcePages = pages;
    }
  }

  if (errors.length > 0) {
    throw new Error(`Không thể đồng bộ metadata audio:\n- ${errors.join('\n- ')}`);
  }

  const result = {
    checkedTasks: tasks.length,
    checkedManifestAssets: Object.keys(manifest).length,
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
      await writeFile(manifestPath, serializeJson(manifest), 'utf8');
    }
    console.log(JSON.stringify(result, null, 2));
  }
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
