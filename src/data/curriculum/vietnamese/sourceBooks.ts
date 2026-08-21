import type { GradeLevel } from '../../../types';

export interface VietnameseBookSource {
  grade: GradeLevel;
  semester: 1 | 2;
  title: string;
  detailUrl: string;
  readerUrl: string;
}

/**
 * Danh mục nguồn SGK do người quản trị cung cấp.
 * Đây là nguồn tham khảo để đối chiếu, không tự biến nội dung hệ thống thành
 * trích nguyên văn SGK.
 */
export const VIETNAMESE_BOOK_SOURCES: VietnameseBookSource[] = [
  {
    grade: 1,
    semester: 1,
    title: 'Tiếng Việt 1, tập một',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-1-tap-mot-940092412.940092412',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-mot.4695822132',
  },
  {
    grade: 1,
    semester: 2,
    title: 'Tiếng Việt 1, tập hai',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-1-tap-hai-939724784.939724784',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-hai.4698214319',
  },
  {
    grade: 2,
    semester: 1,
    title: 'Tiếng Việt 2, tập một',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-2-tap-mot-940104293.940104293',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-mot.4698590737',
  },
  {
    grade: 2,
    semester: 2,
    title: 'Tiếng Việt 2, tập hai',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-2-tap-hai-940040335.940040335',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-hai.4698600732',
  },
  {
    grade: 3,
    semester: 1,
    title: 'Tiếng Việt 3, tập một',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-3-tap-mot-940169244.940169244',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-mot.4698680579',
  },
  {
    grade: 3,
    semester: 2,
    title: 'Tiếng Việt 3, tập hai',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-3-tap-hai-940192790.940192790',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-hai.4698697436',
  },
  {
    grade: 4,
    semester: 1,
    title: 'Tiếng Việt 4, tập một',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-4-tap-mot-939811319.939811319',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-mot.4698846675',
  },
  {
    grade: 4,
    semester: 2,
    title: 'Tiếng Việt 4, tập hai',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-4-tap-hai-940215495.940215495',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-hai.4698852686',
  },
  {
    grade: 5,
    semester: 1,
    title: 'Tiếng Việt 5, tập một',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-5-tap-mot-939751774.939751774',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-mot.4699740998',
  },
  {
    grade: 5,
    semester: 2,
    title: 'Tiếng Việt 5, tập hai',
    detailUrl: 'https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-5-tap-hai-940254580.940254580',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-hai.4699750731',
  },
];

const sourceByGradeAndSemester = new Map(
  VIETNAMESE_BOOK_SOURCES.map((source) => [`${source.grade}-${source.semester}`, source])
);

export function getVietnameseBookSource(grade: GradeLevel, semester: 1 | 2): VietnameseBookSource {
  const source = sourceByGradeAndSemester.get(`${grade}-${semester}`);
  if (!source) throw new Error(`Thiếu nguồn SGK Tiếng Việt lớp ${grade}, tập ${semester}.`);
  return source;
}
