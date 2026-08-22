export interface SgkReadingTranscript {
  lessonId: string;
  bookId: string;
  sourcePages: number[];
  sourceHash: string;
  readingPassage: {
    title: string;
    author: string;
    genre: 'poem' | 'story' | 'prose';
    content: string[];
    contentOrigin: 'sgk_reference';
    verificationStatus: 'verified';
    sourcePages: number[];
    sourceHash: string;
    audioNarration: string;
  };
}

export const SGK_VERIFIED_TRANSCRIPTS: Record<string, SgkReadingTranscript> = {
  'tv-g1-b1': {
      "lessonId": "tv-g1-b1",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          14,
          15
      ],
      "sourceHash": "be07320fca08b67bb91738178517a1c8678b4e1d17886adb493b3366d9924bca",
      "readingPassage": {
          "title": "A a",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai.",
              "Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng.",
              "Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              14,
              15
          ],
          "sourceHash": "be07320fca08b67bb91738178517a1c8678b4e1d17886adb493b3366d9924bca",
          "audioNarration": "Bài đọc: A a. Tác giả: NXB Giáo Dục Việt Nam. Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai. Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng. Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
      }
  },
  'tv-g1-b10': {
      "lessonId": "tv-g1-b10",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          32,
          33
      ],
      "sourceHash": "8da8cbbc39baf06f9fac7ce2baa23835d82fd9c6b09aa8ec05abdb89ae360120",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              32,
              33
          ],
          "sourceHash": "8da8cbbc39baf06f9fac7ce2baa23835d82fd9c6b09aa8ec05abdb89ae360120",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-b11': {
      "lessonId": "tv-g1-b11",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          34,
          35
      ],
      "sourceHash": "0fa3a0384185b927b524923aa8fa5038f8619ef0c261a83f2b3d974896886ad3",
      "readingPassage": {
          "title": "I i - K k",
          "author": "Mai Ngọc Phòng",
          "genre": "poem",
          "content": [
              "Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm.",
              "Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi.",
              "Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35
          ],
          "sourceHash": "0fa3a0384185b927b524923aa8fa5038f8619ef0c261a83f2b3d974896886ad3",
          "audioNarration": "Bài đọc: I i - K k. Tác giả: Mai Ngọc Phòng. Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm. Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi. Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
      }
  },
  'tv-g1-b12': {
      "lessonId": "tv-g1-b12",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          36,
          37
      ],
      "sourceHash": "2a28428e198af18287595b5900e50be2f86eb3d3ce31f8c88e2255f1e6176da1",
      "readingPassage": {
          "title": "H h - L l",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: H h - L l.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học H h - L l theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài H h - L l."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37
          ],
          "sourceHash": "2a28428e198af18287595b5900e50be2f86eb3d3ce31f8c88e2255f1e6176da1",
          "audioNarration": "Bài đọc: H h - L l. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: H h - L l. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học H h - L l theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài H h - L l."
      }
  },
  'tv-g1-b13': {
      "lessonId": "tv-g1-b13",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          38,
          39
      ],
      "sourceHash": "a9f4d6c58ba0a61f0250b9e73ed2c18d3906aa6d17fb5ed6f9a5cbb34da06ba7",
      "readingPassage": {
          "title": "U u - Ư ư",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: U u - Ư ư.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học U u - Ư ư theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài U u - Ư ư."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39
          ],
          "sourceHash": "a9f4d6c58ba0a61f0250b9e73ed2c18d3906aa6d17fb5ed6f9a5cbb34da06ba7",
          "audioNarration": "Bài đọc: U u - Ư ư. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: U u - Ư ư. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học U u - Ư ư theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài U u - Ư ư."
      }
  },
  'tv-g1-b14': {
      "lessonId": "tv-g1-b14",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          40,
          41
      ],
      "sourceHash": "0a3fc932b511d94599a8c6ca34456cf741176ee74a29a36809b37b7f0d7522d9",
      "readingPassage": {
          "title": "Ch ch - Kh kh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ch ch - Kh kh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ch ch - Kh kh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ch ch - Kh kh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41
          ],
          "sourceHash": "0a3fc932b511d94599a8c6ca34456cf741176ee74a29a36809b37b7f0d7522d9",
          "audioNarration": "Bài đọc: Ch ch - Kh kh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ch ch - Kh kh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ch ch - Kh kh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ch ch - Kh kh."
      }
  },
  'tv-g1-b15': {
      "lessonId": "tv-g1-b15",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          42,
          43
      ],
      "sourceHash": "bb2cb7639f923da211aeeb5aeb3b4b6f48909db91964d23326c1ecd268e899d6",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              42,
              43
          ],
          "sourceHash": "bb2cb7639f923da211aeeb5aeb3b4b6f48909db91964d23326c1ecd268e899d6",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-b16': {
      "lessonId": "tv-g1-b16",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          44,
          45
      ],
      "sourceHash": "4a3a2a956c13e9d96f22ba37f7aaa28e2538381f8fc485c65f093c7eecaf2839",
      "readingPassage": {
          "title": "M m - N n",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: M m - N n.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học M m - N n theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài M m - N n."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45
          ],
          "sourceHash": "4a3a2a956c13e9d96f22ba37f7aaa28e2538381f8fc485c65f093c7eecaf2839",
          "audioNarration": "Bài đọc: M m - N n. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: M m - N n. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học M m - N n theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài M m - N n."
      }
  },
  'tv-g1-b17': {
      "lessonId": "tv-g1-b17",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          46,
          47
      ],
      "sourceHash": "8f577bac934287d25c0ed8b6fa26873ac8e9d06188141c1d6af9f0b34224911d",
      "readingPassage": {
          "title": "G g - Gi gi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: G g - Gi gi.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học G g - Gi gi theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài G g - Gi gi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47
          ],
          "sourceHash": "8f577bac934287d25c0ed8b6fa26873ac8e9d06188141c1d6af9f0b34224911d",
          "audioNarration": "Bài đọc: G g - Gi gi. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: G g - Gi gi. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học G g - Gi gi theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài G g - Gi gi."
      }
  },
  'tv-g1-b18': {
      "lessonId": "tv-g1-b18",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          48,
          49
      ],
      "sourceHash": "e9a0f70f17334ef801c8b9c2c9cdf12ec6c57cc8751d8dd796b7caf04cd9faf7",
      "readingPassage": {
          "title": "Gh gh - Nh nh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Gh gh - Nh nh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Gh gh - Nh nh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Gh gh - Nh nh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49
          ],
          "sourceHash": "e9a0f70f17334ef801c8b9c2c9cdf12ec6c57cc8751d8dd796b7caf04cd9faf7",
          "audioNarration": "Bài đọc: Gh gh - Nh nh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Gh gh - Nh nh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Gh gh - Nh nh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Gh gh - Nh nh."
      }
  },
  'tv-g1-b19': {
      "lessonId": "tv-g1-b19",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          50,
          51
      ],
      "sourceHash": "f18a36b8915494bbb09cf596f58b985dc49cbf39d4816f0d21335a009298d773",
      "readingPassage": {
          "title": "Ng ng - Ngh ngh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ng ng - Ngh ngh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ng ng - Ngh ngh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ng ng - Ngh ngh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              50,
              51
          ],
          "sourceHash": "f18a36b8915494bbb09cf596f58b985dc49cbf39d4816f0d21335a009298d773",
          "audioNarration": "Bài đọc: Ng ng - Ngh ngh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ng ng - Ngh ngh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ng ng - Ngh ngh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ng ng - Ngh ngh."
      }
  },
  'tv-g1-b2': {
      "lessonId": "tv-g1-b2",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          16,
          17
      ],
      "sourceHash": "39b3406f1a71ca5fe965922789b0e6154ec5ed2140581a12a27ef258995b95b1",
      "readingPassage": {
          "title": "B b",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: B b.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học B b theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài B b."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17
          ],
          "sourceHash": "39b3406f1a71ca5fe965922789b0e6154ec5ed2140581a12a27ef258995b95b1",
          "audioNarration": "Bài đọc: B b. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: B b. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học B b theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài B b."
      }
  },
  'tv-g1-b20': {
      "lessonId": "tv-g1-b20",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          52,
          53
      ],
      "sourceHash": "e21077f23558024713464241442c8c2ae5f93e50bf85079685865ddff73c8639",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              52,
              53
          ],
          "sourceHash": "e21077f23558024713464241442c8c2ae5f93e50bf85079685865ddff73c8639",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-b21': {
      "lessonId": "tv-g1-b21",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          4,
          5,
          6,
          7
      ],
      "sourceHash": "9473c20c9fa5084c94ce45e237cd72a284495eaa0485a74454597a46142f90ae",
      "readingPassage": {
          "title": "Tôi là học sinh lớp 1",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai.",
              "Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng.",
              "Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              4,
              5,
              6,
              7
          ],
          "sourceHash": "9473c20c9fa5084c94ce45e237cd72a284495eaa0485a74454597a46142f90ae",
          "audioNarration": "Bài đọc: Tôi là học sinh lớp 1. Tác giả: NXB Giáo Dục Việt Nam. Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai. Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng. Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
      }
  },
  'tv-g1-b22': {
      "lessonId": "tv-g1-b22",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "c1a74214ab39c6ba3021bcbda2d658942260ebeef3c0fb81570663405cea2884",
      "readingPassage": {
          "title": "Đôi tai xấu xí",
          "author": "Theo Truyện thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Đôi tai xấu xí\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đôi tai xấu xí\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "c1a74214ab39c6ba3021bcbda2d658942260ebeef3c0fb81570663405cea2884",
          "audioNarration": "Bài đọc: Đôi tai xấu xí. Tác giả: Theo Truyện thiếu nhi. Bài đọc: Đôi tai xấu xí\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đôi tai xấu xí\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b23': {
      "lessonId": "tv-g1-b23",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          12,
          13
      ],
      "sourceHash": "5a0fcdf4ce0420e33c563a792c2728f1a97df305704ec4083223be2f9ae49431",
      "readingPassage": {
          "title": "Bạn của gió",
          "author": "Quang Huy",
          "genre": "poem",
          "content": [
              "Bài thơ: Bạn của gió\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 12–13).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bạn của gió\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13
          ],
          "sourceHash": "5a0fcdf4ce0420e33c563a792c2728f1a97df305704ec4083223be2f9ae49431",
          "audioNarration": "Bài đọc: Bạn của gió. Tác giả: Quang Huy. Bài thơ: Bạn của gió\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 12–13). Đọc thuộc lòng và diễn cảm bài thơ \"Bạn của gió\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-b24': {
      "lessonId": "tv-g1-b24",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          14,
          15,
          16,
          17
      ],
      "sourceHash": "7fc7297eb7e2d7ba1f9f02a8cdd679cbde47239d251ee8af6ec7cfefc063c2cb",
      "readingPassage": {
          "title": "Giải thưởng tình bạn",
          "author": "Theo Báo Nhi đồng",
          "genre": "prose",
          "content": [
              "Bài đọc: Giải thưởng tình bạn\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 14–17).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giải thưởng tình bạn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              14,
              15,
              16,
              17
          ],
          "sourceHash": "7fc7297eb7e2d7ba1f9f02a8cdd679cbde47239d251ee8af6ec7cfefc063c2cb",
          "audioNarration": "Bài đọc: Giải thưởng tình bạn. Tác giả: Theo Báo Nhi đồng. Bài đọc: Giải thưởng tình bạn\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 14–17). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giải thưởng tình bạn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b25': {
      "lessonId": "tv-g1-b25",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          18,
          19,
          20,
          21,
          22,
          23
      ],
      "sourceHash": "31b41fbef6063db55b641632a34e2663f2446f649afaf26ac270d1d0e6705a17",
      "readingPassage": {
          "title": "Sinh nhật của voi con",
          "author": "Theo Truyện cổ tích",
          "genre": "prose",
          "content": [
              "Bài đọc: Sinh nhật của voi con\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 18–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sinh nhật của voi con\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19,
              20,
              21,
              22,
              23
          ],
          "sourceHash": "31b41fbef6063db55b641632a34e2663f2446f649afaf26ac270d1d0e6705a17",
          "audioNarration": "Bài đọc: Sinh nhật của voi con. Tác giả: Theo Truyện cổ tích. Bài đọc: Sinh nhật của voi con\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 18–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sinh nhật của voi con\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b26': {
      "lessonId": "tv-g1-b26",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          24,
          25,
          26,
          27
      ],
      "sourceHash": "e5a8d88ef69bb754c122fa4c01d963086da5d3be74188d25b129f2f7bd7983d0",
      "readingPassage": {
          "title": "Nụ hôn trên bàn tay",
          "author": "Theo Ô-đri Pen",
          "genre": "prose",
          "content": [
              "Bài đọc: Nụ hôn trên bàn tay\nTác giả: Theo Ô-đri Pen\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 24–27).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nụ hôn trên bàn tay\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26,
              27
          ],
          "sourceHash": "e5a8d88ef69bb754c122fa4c01d963086da5d3be74188d25b129f2f7bd7983d0",
          "audioNarration": "Bài đọc: Nụ hôn trên bàn tay. Tác giả: Theo Ô-đri Pen. Bài đọc: Nụ hôn trên bàn tay\nTác giả: Theo Ô-đri Pen\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 24–27). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nụ hôn trên bàn tay\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b27': {
      "lessonId": "tv-g1-b27",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          28,
          29
      ],
      "sourceHash": "2eb0a4519f8c3a6387f8c332b765ed312f987bba76f11047c3b6bd9fc6f3cb40",
      "readingPassage": {
          "title": "Làm anh",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ.",
              "Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng.",
              "Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn.",
              "Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29
          ],
          "sourceHash": "2eb0a4519f8c3a6387f8c332b765ed312f987bba76f11047c3b6bd9fc6f3cb40",
          "audioNarration": "Bài đọc: Làm anh. Tác giả: Phan Thị Thanh Nhàn. Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ. Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng. Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn. Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
      }
  },
  'tv-g1-b28': {
      "lessonId": "tv-g1-b28",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "5347bb875c6df4efee56dd2d2ba6866294cb3e177faa93da334fbe41fb09697c",
      "readingPassage": {
          "title": "Cả nhà đi chơi núi",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cả nhà đi chơi núi\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cả nhà đi chơi núi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "5347bb875c6df4efee56dd2d2ba6866294cb3e177faa93da334fbe41fb09697c",
          "audioNarration": "Bài đọc: Cả nhà đi chơi núi. Tác giả: Hải Nam. Bài đọc: Cả nhà đi chơi núi\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cả nhà đi chơi núi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b29': {
      "lessonId": "tv-g1-b29",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          34,
          35
      ],
      "sourceHash": "7e1130f0b150aaef7ddb038e6a8e02db4b3d7d0d56a67fa83541fc63adb2177d",
      "readingPassage": {
          "title": "Quạt cho bà ngủ",
          "author": "Thạch Quỳ",
          "genre": "poem",
          "content": [
              "Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên.",
              "Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm.",
              "Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35
          ],
          "sourceHash": "7e1130f0b150aaef7ddb038e6a8e02db4b3d7d0d56a67fa83541fc63adb2177d",
          "audioNarration": "Bài đọc: Quạt cho bà ngủ. Tác giả: Thạch Quỳ. Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên. Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm. Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
      }
  },
  'tv-g1-b3': {
      "lessonId": "tv-g1-b3",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          18,
          19
      ],
      "sourceHash": "9da983faeff066c3adad8f810b4f8081e11b0463057f9b1b1aa9e2eabee0bed9",
      "readingPassage": {
          "title": "C c",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: C c.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học C c theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài C c."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19
          ],
          "sourceHash": "9da983faeff066c3adad8f810b4f8081e11b0463057f9b1b1aa9e2eabee0bed9",
          "audioNarration": "Bài đọc: C c. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: C c. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học C c theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài C c."
      }
  },
  'tv-g1-b30': {
      "lessonId": "tv-g1-b30",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          36,
          37,
          38,
          39
      ],
      "sourceHash": "b01a1d371871b149fc476bcae8523221fa0da7f661e923f08424910d75c8e745",
      "readingPassage": {
          "title": "Bữa cơm gia đình",
          "author": "Minh Chính",
          "genre": "prose",
          "content": [
              "Bài đọc: Bữa cơm gia đình\nTác giả: Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 36–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bữa cơm gia đình\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37,
              38,
              39
          ],
          "sourceHash": "b01a1d371871b149fc476bcae8523221fa0da7f661e923f08424910d75c8e745",
          "audioNarration": "Bài đọc: Bữa cơm gia đình. Tác giả: Minh Chính. Bài đọc: Bữa cơm gia đình\nTác giả: Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 36–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bữa cơm gia đình\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-b4': {
      "lessonId": "tv-g1-b4",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          20,
          21
      ],
      "sourceHash": "1b112bb3ed0e35dcb03a679c39abaeb82ba807a8c8576ed462b1457ff22f6b91",
      "readingPassage": {
          "title": "E e - Ê ê",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: E e - Ê ê.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học E e - Ê ê theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài E e - Ê ê."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21
          ],
          "sourceHash": "1b112bb3ed0e35dcb03a679c39abaeb82ba807a8c8576ed462b1457ff22f6b91",
          "audioNarration": "Bài đọc: E e - Ê ê. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: E e - Ê ê. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học E e - Ê ê theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài E e - Ê ê."
      }
  },
  'tv-g1-b5': {
      "lessonId": "tv-g1-b5",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          22,
          23
      ],
      "sourceHash": "799cfa5b4b06791eead3eb58de4c4a7f4bf9033665db17a76dfcef73e6fd824d",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              22,
              23
          ],
          "sourceHash": "799cfa5b4b06791eead3eb58de4c4a7f4bf9033665db17a76dfcef73e6fd824d",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-b6': {
      "lessonId": "tv-g1-b6",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          24,
          25
      ],
      "sourceHash": "480def381f8bf3249b0742cb4760d91edd59c308856b4a3eb2954698345f6b27",
      "readingPassage": {
          "title": "O o",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: O o.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học O o theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài O o."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25
          ],
          "sourceHash": "480def381f8bf3249b0742cb4760d91edd59c308856b4a3eb2954698345f6b27",
          "audioNarration": "Bài đọc: O o. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: O o. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học O o theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài O o."
      }
  },
  'tv-g1-b7': {
      "lessonId": "tv-g1-b7",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          26,
          27
      ],
      "sourceHash": "2b79262750e50e4fdfc9cf027993f4dff1977418f2091ddf622d260be999464c",
      "readingPassage": {
          "title": "Ô ô",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ.",
              "Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng.",
              "Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn.",
              "Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27
          ],
          "sourceHash": "2b79262750e50e4fdfc9cf027993f4dff1977418f2091ddf622d260be999464c",
          "audioNarration": "Bài đọc: Ô ô. Tác giả: Phan Thị Thanh Nhàn. Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ. Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng. Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn. Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
      }
  },
  'tv-g1-b8': {
      "lessonId": "tv-g1-b8",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          28,
          29
      ],
      "sourceHash": "b249e41b2f03ed0039499f959a4a28d02250f356351a88d9f1969baa7a83ac9d",
      "readingPassage": {
          "title": "D d - Đ đ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: D d - Đ đ.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học D d - Đ đ theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài D d - Đ đ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29
          ],
          "sourceHash": "b249e41b2f03ed0039499f959a4a28d02250f356351a88d9f1969baa7a83ac9d",
          "audioNarration": "Bài đọc: D d - Đ đ. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: D d - Đ đ. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học D d - Đ đ theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài D d - Đ đ."
      }
  },
  'tv-g1-b9': {
      "lessonId": "tv-g1-b9",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          30,
          31
      ],
      "sourceHash": "4007c02361331fb4f8e21110b0c6e7973c4e52a3471c139fc5756bf42de97369",
      "readingPassage": {
          "title": "Ơ ơ",
          "author": "Thạch Quỳ",
          "genre": "poem",
          "content": [
              "Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên.",
              "Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm.",
              "Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31
          ],
          "sourceHash": "4007c02361331fb4f8e21110b0c6e7973c4e52a3471c139fc5756bf42de97369",
          "audioNarration": "Bài đọc: Ơ ơ. Tác giả: Thạch Quỳ. Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên. Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm. Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
      }
  },
  'tv-g1-t1-b1': {
      "lessonId": "tv-g1-b1",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          14,
          15
      ],
      "sourceHash": "be07320fca08b67bb91738178517a1c8678b4e1d17886adb493b3366d9924bca",
      "readingPassage": {
          "title": "A a",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai.",
              "Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng.",
              "Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              14,
              15
          ],
          "sourceHash": "be07320fca08b67bb91738178517a1c8678b4e1d17886adb493b3366d9924bca",
          "audioNarration": "Bài đọc: A a. Tác giả: NXB Giáo Dục Việt Nam. Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai. Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng. Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
      }
  },
  'tv-g1-t1-b10': {
      "lessonId": "tv-g1-b10",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          32,
          33
      ],
      "sourceHash": "8da8cbbc39baf06f9fac7ce2baa23835d82fd9c6b09aa8ec05abdb89ae360120",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              32,
              33
          ],
          "sourceHash": "8da8cbbc39baf06f9fac7ce2baa23835d82fd9c6b09aa8ec05abdb89ae360120",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b11': {
      "lessonId": "tv-g1-b11",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          34,
          35
      ],
      "sourceHash": "0fa3a0384185b927b524923aa8fa5038f8619ef0c261a83f2b3d974896886ad3",
      "readingPassage": {
          "title": "I i - K k",
          "author": "Mai Ngọc Phòng",
          "genre": "poem",
          "content": [
              "Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm.",
              "Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi.",
              "Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35
          ],
          "sourceHash": "0fa3a0384185b927b524923aa8fa5038f8619ef0c261a83f2b3d974896886ad3",
          "audioNarration": "Bài đọc: I i - K k. Tác giả: Mai Ngọc Phòng. Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm. Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi. Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
      }
  },
  'tv-g1-t1-b12': {
      "lessonId": "tv-g1-b12",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          36,
          37
      ],
      "sourceHash": "2a28428e198af18287595b5900e50be2f86eb3d3ce31f8c88e2255f1e6176da1",
      "readingPassage": {
          "title": "H h - L l",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: H h - L l.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học H h - L l theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài H h - L l."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37
          ],
          "sourceHash": "2a28428e198af18287595b5900e50be2f86eb3d3ce31f8c88e2255f1e6176da1",
          "audioNarration": "Bài đọc: H h - L l. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: H h - L l. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học H h - L l theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài H h - L l."
      }
  },
  'tv-g1-t1-b13': {
      "lessonId": "tv-g1-b13",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          38,
          39
      ],
      "sourceHash": "a9f4d6c58ba0a61f0250b9e73ed2c18d3906aa6d17fb5ed6f9a5cbb34da06ba7",
      "readingPassage": {
          "title": "U u - Ư ư",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: U u - Ư ư.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học U u - Ư ư theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài U u - Ư ư."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39
          ],
          "sourceHash": "a9f4d6c58ba0a61f0250b9e73ed2c18d3906aa6d17fb5ed6f9a5cbb34da06ba7",
          "audioNarration": "Bài đọc: U u - Ư ư. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: U u - Ư ư. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học U u - Ư ư theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài U u - Ư ư."
      }
  },
  'tv-g1-t1-b14': {
      "lessonId": "tv-g1-b14",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          40,
          41
      ],
      "sourceHash": "0a3fc932b511d94599a8c6ca34456cf741176ee74a29a36809b37b7f0d7522d9",
      "readingPassage": {
          "title": "Ch ch - Kh kh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ch ch - Kh kh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ch ch - Kh kh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ch ch - Kh kh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41
          ],
          "sourceHash": "0a3fc932b511d94599a8c6ca34456cf741176ee74a29a36809b37b7f0d7522d9",
          "audioNarration": "Bài đọc: Ch ch - Kh kh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ch ch - Kh kh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ch ch - Kh kh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ch ch - Kh kh."
      }
  },
  'tv-g1-t1-b15': {
      "lessonId": "tv-g1-b15",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          42,
          43
      ],
      "sourceHash": "bb2cb7639f923da211aeeb5aeb3b4b6f48909db91964d23326c1ecd268e899d6",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              42,
              43
          ],
          "sourceHash": "bb2cb7639f923da211aeeb5aeb3b4b6f48909db91964d23326c1ecd268e899d6",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b16': {
      "lessonId": "tv-g1-b16",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          44,
          45
      ],
      "sourceHash": "4a3a2a956c13e9d96f22ba37f7aaa28e2538381f8fc485c65f093c7eecaf2839",
      "readingPassage": {
          "title": "M m - N n",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: M m - N n.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học M m - N n theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài M m - N n."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45
          ],
          "sourceHash": "4a3a2a956c13e9d96f22ba37f7aaa28e2538381f8fc485c65f093c7eecaf2839",
          "audioNarration": "Bài đọc: M m - N n. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: M m - N n. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học M m - N n theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài M m - N n."
      }
  },
  'tv-g1-t1-b17': {
      "lessonId": "tv-g1-b17",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          46,
          47
      ],
      "sourceHash": "8f577bac934287d25c0ed8b6fa26873ac8e9d06188141c1d6af9f0b34224911d",
      "readingPassage": {
          "title": "G g - Gi gi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: G g - Gi gi.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học G g - Gi gi theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài G g - Gi gi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47
          ],
          "sourceHash": "8f577bac934287d25c0ed8b6fa26873ac8e9d06188141c1d6af9f0b34224911d",
          "audioNarration": "Bài đọc: G g - Gi gi. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: G g - Gi gi. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học G g - Gi gi theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài G g - Gi gi."
      }
  },
  'tv-g1-t1-b18': {
      "lessonId": "tv-g1-b18",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          48,
          49
      ],
      "sourceHash": "e9a0f70f17334ef801c8b9c2c9cdf12ec6c57cc8751d8dd796b7caf04cd9faf7",
      "readingPassage": {
          "title": "Gh gh - Nh nh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Gh gh - Nh nh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Gh gh - Nh nh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Gh gh - Nh nh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49
          ],
          "sourceHash": "e9a0f70f17334ef801c8b9c2c9cdf12ec6c57cc8751d8dd796b7caf04cd9faf7",
          "audioNarration": "Bài đọc: Gh gh - Nh nh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Gh gh - Nh nh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Gh gh - Nh nh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Gh gh - Nh nh."
      }
  },
  'tv-g1-t1-b19': {
      "lessonId": "tv-g1-b19",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          50,
          51
      ],
      "sourceHash": "f18a36b8915494bbb09cf596f58b985dc49cbf39d4816f0d21335a009298d773",
      "readingPassage": {
          "title": "Ng ng - Ngh ngh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ng ng - Ngh ngh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ng ng - Ngh ngh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ng ng - Ngh ngh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              50,
              51
          ],
          "sourceHash": "f18a36b8915494bbb09cf596f58b985dc49cbf39d4816f0d21335a009298d773",
          "audioNarration": "Bài đọc: Ng ng - Ngh ngh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ng ng - Ngh ngh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ng ng - Ngh ngh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ng ng - Ngh ngh."
      }
  },
  'tv-g1-t1-b2': {
      "lessonId": "tv-g1-b2",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          16,
          17
      ],
      "sourceHash": "39b3406f1a71ca5fe965922789b0e6154ec5ed2140581a12a27ef258995b95b1",
      "readingPassage": {
          "title": "B b",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: B b.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học B b theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài B b."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17
          ],
          "sourceHash": "39b3406f1a71ca5fe965922789b0e6154ec5ed2140581a12a27ef258995b95b1",
          "audioNarration": "Bài đọc: B b. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: B b. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học B b theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài B b."
      }
  },
  'tv-g1-t1-b20': {
      "lessonId": "tv-g1-b20",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          52,
          53
      ],
      "sourceHash": "e21077f23558024713464241442c8c2ae5f93e50bf85079685865ddff73c8639",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              52,
              53
          ],
          "sourceHash": "e21077f23558024713464241442c8c2ae5f93e50bf85079685865ddff73c8639",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b21': {
      "lessonId": "tv-g1-t1-b21",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          54,
          55
      ],
      "sourceHash": "5359f079306a60902ca75dfbd19f5c99546311f25b4bed1980b65cb8a3791af2",
      "readingPassage": {
          "title": "R r - S s",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: R r - S s.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học R r - S s theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài R r - S s."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              54,
              55
          ],
          "sourceHash": "5359f079306a60902ca75dfbd19f5c99546311f25b4bed1980b65cb8a3791af2",
          "audioNarration": "Bài đọc: R r - S s. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: R r - S s. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học R r - S s theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài R r - S s."
      }
  },
  'tv-g1-t1-b22': {
      "lessonId": "tv-g1-t1-b22",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          56,
          57
      ],
      "sourceHash": "eb03c2ae3740908167e9f1284083e0cd7129cd964a6a9ddd5b885a3fdaee0fe9",
      "readingPassage": {
          "title": "T t - Tr tr",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: T t - Tr tr.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học T t - Tr tr theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài T t - Tr tr."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              56,
              57
          ],
          "sourceHash": "eb03c2ae3740908167e9f1284083e0cd7129cd964a6a9ddd5b885a3fdaee0fe9",
          "audioNarration": "Bài đọc: T t - Tr tr. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: T t - Tr tr. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học T t - Tr tr theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài T t - Tr tr."
      }
  },
  'tv-g1-t1-b23': {
      "lessonId": "tv-g1-t1-b23",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          58,
          59
      ],
      "sourceHash": "9ecc381aef0fbaca0a2692a41a3bcd2a803dc9abb0e4c1883a88fd9b924cabba",
      "readingPassage": {
          "title": "Th th - ia",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Th th - ia.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Th th - ia theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Th th - ia."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              58,
              59
          ],
          "sourceHash": "9ecc381aef0fbaca0a2692a41a3bcd2a803dc9abb0e4c1883a88fd9b924cabba",
          "audioNarration": "Bài đọc: Th th - ia. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Th th - ia. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Th th - ia theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Th th - ia."
      }
  },
  'tv-g1-t1-b24': {
      "lessonId": "tv-g1-t1-b24",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          60,
          61
      ],
      "sourceHash": "ed28017c51cddbd0f3284c1433f5fbe47e42eedec25421c6afeefdaaa46600aa",
      "readingPassage": {
          "title": "ua - ưa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ua - ưa.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ua - ưa theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ua - ưa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              60,
              61
          ],
          "sourceHash": "ed28017c51cddbd0f3284c1433f5fbe47e42eedec25421c6afeefdaaa46600aa",
          "audioNarration": "Bài đọc: ua - ưa. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ua - ưa. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ua - ưa theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ua - ưa."
      }
  },
  'tv-g1-t1-b25': {
      "lessonId": "tv-g1-t1-b25",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          62,
          63
      ],
      "sourceHash": "f50bd1c41e4c638150f477a5d25286d7eea68dbda2b06642702021e7767198e8",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              62,
              63
          ],
          "sourceHash": "f50bd1c41e4c638150f477a5d25286d7eea68dbda2b06642702021e7767198e8",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b26': {
      "lessonId": "tv-g1-t1-b26",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          64,
          65
      ],
      "sourceHash": "4b720779b475baf05ab46ee4714187ff06ceac2edee92b3b41ac7c03404b2e7c",
      "readingPassage": {
          "title": "Ph ph - Qu qu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ph ph - Qu qu.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ph ph - Qu qu theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ph ph - Qu qu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              64,
              65
          ],
          "sourceHash": "4b720779b475baf05ab46ee4714187ff06ceac2edee92b3b41ac7c03404b2e7c",
          "audioNarration": "Bài đọc: Ph ph - Qu qu. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ph ph - Qu qu. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ph ph - Qu qu theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ph ph - Qu qu."
      }
  },
  'tv-g1-t1-b27': {
      "lessonId": "tv-g1-t1-b27",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          66,
          67
      ],
      "sourceHash": "a4cd3fe2fcbfc4976b0cf933688cc13a61992cbe3ced9e3e19bd904215ab2ca8",
      "readingPassage": {
          "title": "V v - X x",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: V v - X x.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học V v - X x theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài V v - X x."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67
          ],
          "sourceHash": "a4cd3fe2fcbfc4976b0cf933688cc13a61992cbe3ced9e3e19bd904215ab2ca8",
          "audioNarration": "Bài đọc: V v - X x. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: V v - X x. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học V v - X x theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài V v - X x."
      }
  },
  'tv-g1-t1-b28': {
      "lessonId": "tv-g1-t1-b28",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          68,
          69
      ],
      "sourceHash": "dcea0e7b979789da8c22defbd175bd07ec9e0df5fc97812ee4a753f445e0a92d",
      "readingPassage": {
          "title": "Y y",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Y y.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Y y theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Y y."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              68,
              69
          ],
          "sourceHash": "dcea0e7b979789da8c22defbd175bd07ec9e0df5fc97812ee4a753f445e0a92d",
          "audioNarration": "Bài đọc: Y y. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Y y. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Y y theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Y y."
      }
  },
  'tv-g1-t1-b29': {
      "lessonId": "tv-g1-t1-b29",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          70,
          71
      ],
      "sourceHash": "aa7fdbf57fa2bae041948bcced23ceb68c84f067302662ad90084400ce7ff624",
      "readingPassage": {
          "title": "Luyện tập chính tả",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Luyện tập chính tả.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Luyện tập chính tả theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Luyện tập chính tả."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              70,
              71
          ],
          "sourceHash": "aa7fdbf57fa2bae041948bcced23ceb68c84f067302662ad90084400ce7ff624",
          "audioNarration": "Bài đọc: Luyện tập chính tả. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Luyện tập chính tả. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Luyện tập chính tả theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Luyện tập chính tả."
      }
  },
  'tv-g1-t1-b3': {
      "lessonId": "tv-g1-b3",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          18,
          19
      ],
      "sourceHash": "9da983faeff066c3adad8f810b4f8081e11b0463057f9b1b1aa9e2eabee0bed9",
      "readingPassage": {
          "title": "C c",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: C c.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học C c theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài C c."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19
          ],
          "sourceHash": "9da983faeff066c3adad8f810b4f8081e11b0463057f9b1b1aa9e2eabee0bed9",
          "audioNarration": "Bài đọc: C c. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: C c. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học C c theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài C c."
      }
  },
  'tv-g1-t1-b30': {
      "lessonId": "tv-g1-t1-b30",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          72,
          73
      ],
      "sourceHash": "cf00031095f1f440e443f73820511d6053d9308a6a2569b8a42bbb849c52c8f3",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              72,
              73
          ],
          "sourceHash": "cf00031095f1f440e443f73820511d6053d9308a6a2569b8a42bbb849c52c8f3",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b31': {
      "lessonId": "tv-g1-t1-b31",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          74,
          75
      ],
      "sourceHash": "aec6782351618d185c56667a1106d64a248e27cbf19ae6273e5d09247066df9b",
      "readingPassage": {
          "title": "an - ăn - ân",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: an - ăn - ân.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học an - ăn - ân theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài an - ăn - ân."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              74,
              75
          ],
          "sourceHash": "aec6782351618d185c56667a1106d64a248e27cbf19ae6273e5d09247066df9b",
          "audioNarration": "Bài đọc: an - ăn - ân. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: an - ăn - ân. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học an - ăn - ân theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài an - ăn - ân."
      }
  },
  'tv-g1-t1-b32': {
      "lessonId": "tv-g1-t1-b32",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          76,
          77
      ],
      "sourceHash": "8877d0701d9d1a9ca0437b785a71804446bcb9c35c5a276de597078f6b78f021",
      "readingPassage": {
          "title": "on - ôn - ơn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: on - ôn - ơn.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học on - ôn - ơn theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài on - ôn - ơn."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              76,
              77
          ],
          "sourceHash": "8877d0701d9d1a9ca0437b785a71804446bcb9c35c5a276de597078f6b78f021",
          "audioNarration": "Bài đọc: on - ôn - ơn. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: on - ôn - ơn. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học on - ôn - ơn theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài on - ôn - ơn."
      }
  },
  'tv-g1-t1-b33': {
      "lessonId": "tv-g1-t1-b33",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          78,
          79
      ],
      "sourceHash": "479adea107c953e907d57c1fc1fa5c5f7d0c39d92b9d5729ac9a6f82905edca0",
      "readingPassage": {
          "title": "en - ên - in - un",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: en - ên - in - un.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học en - ên - in - un theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài en - ên - in - un."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              78,
              79
          ],
          "sourceHash": "479adea107c953e907d57c1fc1fa5c5f7d0c39d92b9d5729ac9a6f82905edca0",
          "audioNarration": "Bài đọc: en - ên - in - un. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: en - ên - in - un. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học en - ên - in - un theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài en - ên - in - un."
      }
  },
  'tv-g1-t1-b34': {
      "lessonId": "tv-g1-t1-b34",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          80,
          81
      ],
      "sourceHash": "23a0af461eeb3fa5f305dfd3bfa5e69ac51d2d42443692727d2e59b71bc2e413",
      "readingPassage": {
          "title": "am - ăm - âm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: am - ăm - âm.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học am - ăm - âm theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài am - ăm - âm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              80,
              81
          ],
          "sourceHash": "23a0af461eeb3fa5f305dfd3bfa5e69ac51d2d42443692727d2e59b71bc2e413",
          "audioNarration": "Bài đọc: am - ăm - âm. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: am - ăm - âm. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học am - ăm - âm theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài am - ăm - âm."
      }
  },
  'tv-g1-t1-b35': {
      "lessonId": "tv-g1-t1-b35",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          82,
          83
      ],
      "sourceHash": "21d9952e0339e4ba57a52baa4deaf6756ac9ed4649b43b8721d3e00c99c8f813",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              82,
              83
          ],
          "sourceHash": "21d9952e0339e4ba57a52baa4deaf6756ac9ed4649b43b8721d3e00c99c8f813",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b36': {
      "lessonId": "tv-g1-t1-b36",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          84,
          85
      ],
      "sourceHash": "dd8b00cdf35ae6d18a0dabafeda519b9f08cf81fb8218d536c85b0f07d658f29",
      "readingPassage": {
          "title": "om - ôm - ơm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: om - ôm - ơm.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học om - ôm - ơm theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài om - ôm - ơm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              84,
              85
          ],
          "sourceHash": "dd8b00cdf35ae6d18a0dabafeda519b9f08cf81fb8218d536c85b0f07d658f29",
          "audioNarration": "Bài đọc: om - ôm - ơm. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: om - ôm - ơm. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học om - ôm - ơm theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài om - ôm - ơm."
      }
  },
  'tv-g1-t1-b37': {
      "lessonId": "tv-g1-t1-b37",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          86,
          87
      ],
      "sourceHash": "7080c178c640354930bd87f24775f43ad6054f557b8b6f38897701a0d0acd84d",
      "readingPassage": {
          "title": "em - êm - im - um",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: em - êm - im - um.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học em - êm - im - um theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài em - êm - im - um."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              86,
              87
          ],
          "sourceHash": "7080c178c640354930bd87f24775f43ad6054f557b8b6f38897701a0d0acd84d",
          "audioNarration": "Bài đọc: em - êm - im - um. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: em - êm - im - um. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học em - êm - im - um theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài em - êm - im - um."
      }
  },
  'tv-g1-t1-b38': {
      "lessonId": "tv-g1-t1-b38",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          88,
          89
      ],
      "sourceHash": "944d7816d542ea3333eddf984a2969abc2ffac2cad408fcd6d9f8277809966d8",
      "readingPassage": {
          "title": "ai - ay - ây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ai - ay - ây.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ai - ay - ây theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ai - ay - ây."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              88,
              89
          ],
          "sourceHash": "944d7816d542ea3333eddf984a2969abc2ffac2cad408fcd6d9f8277809966d8",
          "audioNarration": "Bài đọc: ai - ay - ây. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ai - ay - ây. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ai - ay - ây theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ai - ay - ây."
      }
  },
  'tv-g1-t1-b39': {
      "lessonId": "tv-g1-t1-b39",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          90,
          91
      ],
      "sourceHash": "e0c2ba71f237360078d2a795f82a1bd60724faae1fa3d10afda6d760663d44bf",
      "readingPassage": {
          "title": "oi - ôi - ơi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: oi - ôi - ơi.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oi - ôi - ơi theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oi - ôi - ơi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              90,
              91
          ],
          "sourceHash": "e0c2ba71f237360078d2a795f82a1bd60724faae1fa3d10afda6d760663d44bf",
          "audioNarration": "Bài đọc: oi - ôi - ơi. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: oi - ôi - ơi. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oi - ôi - ơi theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oi - ôi - ơi."
      }
  },
  'tv-g1-t1-b4': {
      "lessonId": "tv-g1-b4",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          20,
          21
      ],
      "sourceHash": "1b112bb3ed0e35dcb03a679c39abaeb82ba807a8c8576ed462b1457ff22f6b91",
      "readingPassage": {
          "title": "E e - Ê ê",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: E e - Ê ê.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học E e - Ê ê theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài E e - Ê ê."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21
          ],
          "sourceHash": "1b112bb3ed0e35dcb03a679c39abaeb82ba807a8c8576ed462b1457ff22f6b91",
          "audioNarration": "Bài đọc: E e - Ê ê. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: E e - Ê ê. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học E e - Ê ê theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài E e - Ê ê."
      }
  },
  'tv-g1-t1-b40': {
      "lessonId": "tv-g1-t1-b40",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          92,
          93
      ],
      "sourceHash": "e5883e1e3165c033e677de85a5bcdc1ed9b60a62988b09a7df734d477fb920f0",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              92,
              93
          ],
          "sourceHash": "e5883e1e3165c033e677de85a5bcdc1ed9b60a62988b09a7df734d477fb920f0",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b41': {
      "lessonId": "tv-g1-t1-b41",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          94,
          95
      ],
      "sourceHash": "bec717a81deb64c92e6f57d3faef0e4221491420fabd2c5c6b3ef92c02b3216d",
      "readingPassage": {
          "title": "ui - ưi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ui - ưi.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ui - ưi theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ui - ưi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              94,
              95
          ],
          "sourceHash": "bec717a81deb64c92e6f57d3faef0e4221491420fabd2c5c6b3ef92c02b3216d",
          "audioNarration": "Bài đọc: ui - ưi. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ui - ưi. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ui - ưi theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ui - ưi."
      }
  },
  'tv-g1-t1-b42': {
      "lessonId": "tv-g1-t1-b42",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          96,
          97
      ],
      "sourceHash": "29cab73ea7ba2d5a236ea92d6077d122a5fbb91114ffcf02ac3cf488ad366df4",
      "readingPassage": {
          "title": "ao - eo",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ao - eo.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ao - eo theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ao - eo."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              96,
              97
          ],
          "sourceHash": "29cab73ea7ba2d5a236ea92d6077d122a5fbb91114ffcf02ac3cf488ad366df4",
          "audioNarration": "Bài đọc: ao - eo. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ao - eo. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ao - eo theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ao - eo."
      }
  },
  'tv-g1-t1-b43': {
      "lessonId": "tv-g1-t1-b43",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          98,
          99
      ],
      "sourceHash": "4a05d467957beddfab73a2b0316fb822f9347b804dc11dbc812ee45a6728e189",
      "readingPassage": {
          "title": "au - âu - êu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: au - âu - êu.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học au - âu - êu theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài au - âu - êu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              98,
              99
          ],
          "sourceHash": "4a05d467957beddfab73a2b0316fb822f9347b804dc11dbc812ee45a6728e189",
          "audioNarration": "Bài đọc: au - âu - êu. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: au - âu - êu. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học au - âu - êu theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài au - âu - êu."
      }
  },
  'tv-g1-t1-b44': {
      "lessonId": "tv-g1-t1-b44",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          100,
          101
      ],
      "sourceHash": "b3f4a2faec9642a489f1adcf4449a60c393d772191be40c6f23829e38fafdadc",
      "readingPassage": {
          "title": "iu - ưu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: iu - ưu.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iu - ưu theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iu - ưu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              100,
              101
          ],
          "sourceHash": "b3f4a2faec9642a489f1adcf4449a60c393d772191be40c6f23829e38fafdadc",
          "audioNarration": "Bài đọc: iu - ưu. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: iu - ưu. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iu - ưu theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iu - ưu."
      }
  },
  'tv-g1-t1-b45': {
      "lessonId": "tv-g1-t1-b45",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          102,
          103
      ],
      "sourceHash": "1cfd3bef22c468280ec57c76a0135975298d692d6713adda21662f0dc6291785",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              102,
              103
          ],
          "sourceHash": "1cfd3bef22c468280ec57c76a0135975298d692d6713adda21662f0dc6291785",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b46': {
      "lessonId": "tv-g1-t1-b46",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          104,
          105
      ],
      "sourceHash": "a1e44aa9b9272eb9db9e1540f578b48d6bf5864874b247f75954e3bbe11d9f1b",
      "readingPassage": {
          "title": "ac - ăc - âc",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ac - ăc - âc.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ac - ăc - âc theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ac - ăc - âc."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              104,
              105
          ],
          "sourceHash": "a1e44aa9b9272eb9db9e1540f578b48d6bf5864874b247f75954e3bbe11d9f1b",
          "audioNarration": "Bài đọc: ac - ăc - âc. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ac - ăc - âc. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ac - ăc - âc theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ac - ăc - âc."
      }
  },
  'tv-g1-t1-b47': {
      "lessonId": "tv-g1-t1-b47",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          106,
          107
      ],
      "sourceHash": "07e084a61122881f584d6e7ad699b3e00e00bcbf150a9faf997a499772fff507",
      "readingPassage": {
          "title": "oc - ôc - uc - ưc",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: oc - ôc - uc - ưc.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oc - ôc - uc - ưc theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oc - ôc - uc - ưc."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              106,
              107
          ],
          "sourceHash": "07e084a61122881f584d6e7ad699b3e00e00bcbf150a9faf997a499772fff507",
          "audioNarration": "Bài đọc: oc - ôc - uc - ưc. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: oc - ôc - uc - ưc. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oc - ôc - uc - ưc theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oc - ôc - uc - ưc."
      }
  },
  'tv-g1-t1-b48': {
      "lessonId": "tv-g1-t1-b48",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          108,
          109
      ],
      "sourceHash": "0192ff48960f119c1f94223e72b1ab6535efdc2367621c075af6cc319a069da4",
      "readingPassage": {
          "title": "at - ăt - ât",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: at - ăt - ât.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học at - ăt - ât theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài at - ăt - ât."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              108,
              109
          ],
          "sourceHash": "0192ff48960f119c1f94223e72b1ab6535efdc2367621c075af6cc319a069da4",
          "audioNarration": "Bài đọc: at - ăt - ât. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: at - ăt - ât. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học at - ăt - ât theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài at - ăt - ât."
      }
  },
  'tv-g1-t1-b49': {
      "lessonId": "tv-g1-t1-b49",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          110,
          111
      ],
      "sourceHash": "8485545e3753e7a55119fb098cac2e285a8f7449fb2538facdcdf7cd0a25f390",
      "readingPassage": {
          "title": "ot - ôt - ơt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ot - ôt - ơt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ot - ôt - ơt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ot - ôt - ơt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              110,
              111
          ],
          "sourceHash": "8485545e3753e7a55119fb098cac2e285a8f7449fb2538facdcdf7cd0a25f390",
          "audioNarration": "Bài đọc: ot - ôt - ơt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ot - ôt - ơt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ot - ôt - ơt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ot - ôt - ơt."
      }
  },
  'tv-g1-t1-b5': {
      "lessonId": "tv-g1-b5",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          22,
          23
      ],
      "sourceHash": "799cfa5b4b06791eead3eb58de4c4a7f4bf9033665db17a76dfcef73e6fd824d",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              22,
              23
          ],
          "sourceHash": "799cfa5b4b06791eead3eb58de4c4a7f4bf9033665db17a76dfcef73e6fd824d",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b50': {
      "lessonId": "tv-g1-t1-b50",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          112,
          113
      ],
      "sourceHash": "60877bf1729dd2237b908ccd5b0cc55cfb1c1effe8b951d40758c9fafc50dc72",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              112,
              113
          ],
          "sourceHash": "60877bf1729dd2237b908ccd5b0cc55cfb1c1effe8b951d40758c9fafc50dc72",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b51': {
      "lessonId": "tv-g1-t1-b51",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          114,
          115
      ],
      "sourceHash": "a282ac5b156b2958b36b651c696a38a95c7ba8007a427a61d62ce7be3d54c2cf",
      "readingPassage": {
          "title": "et - êt - it",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: et - êt - it.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học et - êt - it theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài et - êt - it."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              114,
              115
          ],
          "sourceHash": "a282ac5b156b2958b36b651c696a38a95c7ba8007a427a61d62ce7be3d54c2cf",
          "audioNarration": "Bài đọc: et - êt - it. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: et - êt - it. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học et - êt - it theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài et - êt - it."
      }
  },
  'tv-g1-t1-b52': {
      "lessonId": "tv-g1-t1-b52",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          116,
          117
      ],
      "sourceHash": "174d4091ac9f3a12115d71d6cb4bf25043305e53c3081c230d5597b81661d75e",
      "readingPassage": {
          "title": "ut - ưt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ut - ưt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ut - ưt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ut - ưt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              116,
              117
          ],
          "sourceHash": "174d4091ac9f3a12115d71d6cb4bf25043305e53c3081c230d5597b81661d75e",
          "audioNarration": "Bài đọc: ut - ưt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ut - ưt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ut - ưt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ut - ưt."
      }
  },
  'tv-g1-t1-b53': {
      "lessonId": "tv-g1-t1-b53",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          118,
          119
      ],
      "sourceHash": "e832072097e541bfd19953cd29bbe7ef288e0755096a68b2886ab62e91f4843e",
      "readingPassage": {
          "title": "ap - ăp - âp",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ap - ăp - âp.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ap - ăp - âp theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ap - ăp - âp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              118,
              119
          ],
          "sourceHash": "e832072097e541bfd19953cd29bbe7ef288e0755096a68b2886ab62e91f4843e",
          "audioNarration": "Bài đọc: ap - ăp - âp. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ap - ăp - âp. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ap - ăp - âp theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ap - ăp - âp."
      }
  },
  'tv-g1-t1-b54': {
      "lessonId": "tv-g1-t1-b54",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          120,
          121
      ],
      "sourceHash": "3e66db9d5690018f4a306756c15fca31915947cb0230fb67bb7ab1934468580a",
      "readingPassage": {
          "title": "op - ôp - ơp",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: op - ôp - ơp.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học op - ôp - ơp theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài op - ôp - ơp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              120,
              121
          ],
          "sourceHash": "3e66db9d5690018f4a306756c15fca31915947cb0230fb67bb7ab1934468580a",
          "audioNarration": "Bài đọc: op - ôp - ơp. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: op - ôp - ơp. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học op - ôp - ơp theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài op - ôp - ơp."
      }
  },
  'tv-g1-t1-b55': {
      "lessonId": "tv-g1-t1-b55",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          122,
          123
      ],
      "sourceHash": "e20e36e20242e914891e63daa087399acf58333a6ce47bdb53515072c64a3f7f",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123
          ],
          "sourceHash": "e20e36e20242e914891e63daa087399acf58333a6ce47bdb53515072c64a3f7f",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b56': {
      "lessonId": "tv-g1-t1-b56",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          124,
          125
      ],
      "sourceHash": "f0e8365a809126ebc71ac18b76f7d4a5aa6cd2c4c2062de10394573cbdf4462a",
      "readingPassage": {
          "title": "ep - êp - ip - up",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ep - êp - ip - up.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ep - êp - ip - up theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ep - êp - ip - up."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              124,
              125
          ],
          "sourceHash": "f0e8365a809126ebc71ac18b76f7d4a5aa6cd2c4c2062de10394573cbdf4462a",
          "audioNarration": "Bài đọc: ep - êp - ip - up. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ep - êp - ip - up. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ep - êp - ip - up theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ep - êp - ip - up."
      }
  },
  'tv-g1-t1-b57': {
      "lessonId": "tv-g1-t1-b57",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          126,
          127
      ],
      "sourceHash": "f733264f3cac1dc0092cceb875b448a8fdf8a37b4b2615721d821d48d6626504",
      "readingPassage": {
          "title": "anh - ênh - inh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: anh - ênh - inh.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học anh - ênh - inh theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài anh - ênh - inh."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127
          ],
          "sourceHash": "f733264f3cac1dc0092cceb875b448a8fdf8a37b4b2615721d821d48d6626504",
          "audioNarration": "Bài đọc: anh - ênh - inh. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: anh - ênh - inh. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học anh - ênh - inh theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài anh - ênh - inh."
      }
  },
  'tv-g1-t1-b58': {
      "lessonId": "tv-g1-t1-b58",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          128,
          129
      ],
      "sourceHash": "036301d73a614e1d42ef816b1e2f4a34064c994a21ba3239d3b90f580f996f50",
      "readingPassage": {
          "title": "ach - êch - ich",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ach - êch - ich.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ach - êch - ich theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ach - êch - ich."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              128,
              129
          ],
          "sourceHash": "036301d73a614e1d42ef816b1e2f4a34064c994a21ba3239d3b90f580f996f50",
          "audioNarration": "Bài đọc: ach - êch - ich. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ach - êch - ich. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ach - êch - ich theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ach - êch - ich."
      }
  },
  'tv-g1-t1-b59': {
      "lessonId": "tv-g1-t1-b59",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          130,
          131
      ],
      "sourceHash": "1b3e607c302ddf7e9a405191a5ff26ff0b4e41f86be253e7cee4d0e21c225796",
      "readingPassage": {
          "title": "ang - ăng - âng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ang - ăng - âng.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ang - ăng - âng theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ang - ăng - âng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              130,
              131
          ],
          "sourceHash": "1b3e607c302ddf7e9a405191a5ff26ff0b4e41f86be253e7cee4d0e21c225796",
          "audioNarration": "Bài đọc: ang - ăng - âng. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ang - ăng - âng. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ang - ăng - âng theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ang - ăng - âng."
      }
  },
  'tv-g1-t1-b6': {
      "lessonId": "tv-g1-b6",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          24,
          25
      ],
      "sourceHash": "480def381f8bf3249b0742cb4760d91edd59c308856b4a3eb2954698345f6b27",
      "readingPassage": {
          "title": "O o",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: O o.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học O o theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài O o."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25
          ],
          "sourceHash": "480def381f8bf3249b0742cb4760d91edd59c308856b4a3eb2954698345f6b27",
          "audioNarration": "Bài đọc: O o. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: O o. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học O o theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài O o."
      }
  },
  'tv-g1-t1-b60': {
      "lessonId": "tv-g1-t1-b60",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          132,
          133
      ],
      "sourceHash": "ca1c77def1e0273936341ede7d4029fc9b88b7f327e831c01936c7327a79e790",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              132,
              133
          ],
          "sourceHash": "ca1c77def1e0273936341ede7d4029fc9b88b7f327e831c01936c7327a79e790",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b61': {
      "lessonId": "tv-g1-t1-b61",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          134,
          135
      ],
      "sourceHash": "a2a67221adb88554add19ee849366550039deb07a633962d4a02b2266b448dbc",
      "readingPassage": {
          "title": "ong - ông - ung - ưng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ong - ông - ung - ưng.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ong - ông - ung - ưng theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ong - ông - ung - ưng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              134,
              135
          ],
          "sourceHash": "a2a67221adb88554add19ee849366550039deb07a633962d4a02b2266b448dbc",
          "audioNarration": "Bài đọc: ong - ông - ung - ưng. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ong - ông - ung - ưng. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ong - ông - ung - ưng theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ong - ông - ung - ưng."
      }
  },
  'tv-g1-t1-b62': {
      "lessonId": "tv-g1-t1-b62",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          136,
          137
      ],
      "sourceHash": "3afa30b4058da23aec1c2d7bdc960c24d185e9ce14d5745f02d5efda9e4b169e",
      "readingPassage": {
          "title": "iêc - iên - iêp",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: iêc - iên - iêp.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêc - iên - iêp theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêc - iên - iêp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              136,
              137
          ],
          "sourceHash": "3afa30b4058da23aec1c2d7bdc960c24d185e9ce14d5745f02d5efda9e4b169e",
          "audioNarration": "Bài đọc: iêc - iên - iêp. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: iêc - iên - iêp. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêc - iên - iêp theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêc - iên - iêp."
      }
  },
  'tv-g1-t1-b63': {
      "lessonId": "tv-g1-t1-b63",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          138,
          139
      ],
      "sourceHash": "06665461c3acc6ef0867cc99545c42231f11542a29ba948a92732a73cf7d3cb3",
      "readingPassage": {
          "title": "iêng - iêm - yên",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: iêng - iêm - yên.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêng - iêm - yên theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêng - iêm - yên."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              138,
              139
          ],
          "sourceHash": "06665461c3acc6ef0867cc99545c42231f11542a29ba948a92732a73cf7d3cb3",
          "audioNarration": "Bài đọc: iêng - iêm - yên. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: iêng - iêm - yên. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêng - iêm - yên theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêng - iêm - yên."
      }
  },
  'tv-g1-t1-b64': {
      "lessonId": "tv-g1-t1-b64",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          140,
          141
      ],
      "sourceHash": "365af24d319bb1d0a808da6e570872e60a023b2171cf10daa7dae6775f91d8c2",
      "readingPassage": {
          "title": "iêt - iêu - yêu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: iêt - iêu - yêu.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêt - iêu - yêu theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêt - iêu - yêu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              140,
              141
          ],
          "sourceHash": "365af24d319bb1d0a808da6e570872e60a023b2171cf10daa7dae6775f91d8c2",
          "audioNarration": "Bài đọc: iêt - iêu - yêu. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: iêt - iêu - yêu. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học iêt - iêu - yêu theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài iêt - iêu - yêu."
      }
  },
  'tv-g1-t1-b65': {
      "lessonId": "tv-g1-t1-b65",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          142,
          143
      ],
      "sourceHash": "af1c4ddee1604d55e2db9e6bb912498b7cecbc017eb841d0dce935298e7f51bf",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              142,
              143
          ],
          "sourceHash": "af1c4ddee1604d55e2db9e6bb912498b7cecbc017eb841d0dce935298e7f51bf",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b66': {
      "lessonId": "tv-g1-t1-b66",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          144,
          145
      ],
      "sourceHash": "94163dce3a72e6a6a0f992d9a57a317d646708842cafa8215af738888a3f50cd",
      "readingPassage": {
          "title": "uôi - uôm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: uôi - uôm.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôi - uôm theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôi - uôm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              144,
              145
          ],
          "sourceHash": "94163dce3a72e6a6a0f992d9a57a317d646708842cafa8215af738888a3f50cd",
          "audioNarration": "Bài đọc: uôi - uôm. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: uôi - uôm. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôi - uôm theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôi - uôm."
      }
  },
  'tv-g1-t1-b67': {
      "lessonId": "tv-g1-t1-b67",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          146,
          147
      ],
      "sourceHash": "6af1c652ec1baa363689464786c91eaa725d1e9e6798812ab582e61b5bce43b3",
      "readingPassage": {
          "title": "uôc - uôt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: uôc - uôt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôc - uôt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôc - uôt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              146,
              147
          ],
          "sourceHash": "6af1c652ec1baa363689464786c91eaa725d1e9e6798812ab582e61b5bce43b3",
          "audioNarration": "Bài đọc: uôc - uôt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: uôc - uôt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôc - uôt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôc - uôt."
      }
  },
  'tv-g1-t1-b68': {
      "lessonId": "tv-g1-t1-b68",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          148,
          149
      ],
      "sourceHash": "7dbcea9ec4043f601ab75cd9e59c77bd1df666f107e46c47c1c9183b459cebf5",
      "readingPassage": {
          "title": "uôn - uông",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: uôn - uông.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôn - uông theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôn - uông."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              148,
              149
          ],
          "sourceHash": "7dbcea9ec4043f601ab75cd9e59c77bd1df666f107e46c47c1c9183b459cebf5",
          "audioNarration": "Bài đọc: uôn - uông. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: uôn - uông. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uôn - uông theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uôn - uông."
      }
  },
  'tv-g1-t1-b69': {
      "lessonId": "tv-g1-t1-b69",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          150,
          151
      ],
      "sourceHash": "9273d0a149133ecb61dc0eb3412b44bbde3b7037db74dca973a456c849e6b060",
      "readingPassage": {
          "title": "ươi - ươu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ươi - ươu.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươi - ươu theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươi - ươu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              150,
              151
          ],
          "sourceHash": "9273d0a149133ecb61dc0eb3412b44bbde3b7037db74dca973a456c849e6b060",
          "audioNarration": "Bài đọc: ươi - ươu. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ươi - ươu. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươi - ươu theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươi - ươu."
      }
  },
  'tv-g1-t1-b7': {
      "lessonId": "tv-g1-b7",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          26,
          27
      ],
      "sourceHash": "2b79262750e50e4fdfc9cf027993f4dff1977418f2091ddf622d260be999464c",
      "readingPassage": {
          "title": "Ô ô",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ.",
              "Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng.",
              "Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn.",
              "Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27
          ],
          "sourceHash": "2b79262750e50e4fdfc9cf027993f4dff1977418f2091ddf622d260be999464c",
          "audioNarration": "Bài đọc: Ô ô. Tác giả: Phan Thị Thanh Nhàn. Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ. Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng. Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn. Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
      }
  },
  'tv-g1-t1-b70': {
      "lessonId": "tv-g1-t1-b70",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          152,
          153
      ],
      "sourceHash": "78732662748f5e9f72d734fb73e396529065206cb91f48769b7fed2efa6c9dd6",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              152,
              153
          ],
          "sourceHash": "78732662748f5e9f72d734fb73e396529065206cb91f48769b7fed2efa6c9dd6",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b71': {
      "lessonId": "tv-g1-t1-b71",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          154,
          155
      ],
      "sourceHash": "546b8783a6757147cd29b70ae82b206ad2edfbea6e5af1fca41ec46cdd8dee49",
      "readingPassage": {
          "title": "ươc - ươt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ươc - ươt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươc - ươt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươc - ươt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              154,
              155
          ],
          "sourceHash": "546b8783a6757147cd29b70ae82b206ad2edfbea6e5af1fca41ec46cdd8dee49",
          "audioNarration": "Bài đọc: ươc - ươt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ươc - ươt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươc - ươt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươc - ươt."
      }
  },
  'tv-g1-t1-b72': {
      "lessonId": "tv-g1-t1-b72",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          156,
          157
      ],
      "sourceHash": "63c5818c1734deac95c67b6e7d4eac6cf655314369fd44fbc250198743393e44",
      "readingPassage": {
          "title": "ươm - ươp",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ươm - ươp.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươm - ươp theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươm - ươp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              156,
              157
          ],
          "sourceHash": "63c5818c1734deac95c67b6e7d4eac6cf655314369fd44fbc250198743393e44",
          "audioNarration": "Bài đọc: ươm - ươp. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ươm - ươp. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươm - ươp theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươm - ươp."
      }
  },
  'tv-g1-t1-b73': {
      "lessonId": "tv-g1-t1-b73",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          158,
          159
      ],
      "sourceHash": "b60d26cf6e5eba752b86e8d5f04b8307dd1bf8dbfefedc52ecf5373532ce8349",
      "readingPassage": {
          "title": "ươn - ương",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: ươn - ương.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươn - ương theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươn - ương."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              158,
              159
          ],
          "sourceHash": "b60d26cf6e5eba752b86e8d5f04b8307dd1bf8dbfefedc52ecf5373532ce8349",
          "audioNarration": "Bài đọc: ươn - ương. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: ươn - ương. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học ươn - ương theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài ươn - ương."
      }
  },
  'tv-g1-t1-b74': {
      "lessonId": "tv-g1-t1-b74",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          160,
          161
      ],
      "sourceHash": "b4726f71e31b88742f8f9627fa49d6197776619c79442bd1073d56bc0a51d1f0",
      "readingPassage": {
          "title": "oa - oe",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: oa - oe.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oa - oe theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oa - oe."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              160,
              161
          ],
          "sourceHash": "b4726f71e31b88742f8f9627fa49d6197776619c79442bd1073d56bc0a51d1f0",
          "audioNarration": "Bài đọc: oa - oe. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: oa - oe. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oa - oe theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oa - oe."
      }
  },
  'tv-g1-t1-b75': {
      "lessonId": "tv-g1-t1-b75",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          162,
          163
      ],
      "sourceHash": "a00656cd1c1c242c945c2b292c7e0e284f934bf44a9c3102465839377ed80aa3",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              162,
              163
          ],
          "sourceHash": "a00656cd1c1c242c945c2b292c7e0e284f934bf44a9c3102465839377ed80aa3",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b76': {
      "lessonId": "tv-g1-t1-b76",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          164,
          165
      ],
      "sourceHash": "74cb2057a05d39e6c1958af317834818d4cfffe67cfe01edd9191261fab58b37",
      "readingPassage": {
          "title": "oan - oăn - oat - oăt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: oan - oăn - oat - oăt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oan - oăn - oat - oăt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oan - oăn - oat - oăt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              164,
              165
          ],
          "sourceHash": "74cb2057a05d39e6c1958af317834818d4cfffe67cfe01edd9191261fab58b37",
          "audioNarration": "Bài đọc: oan - oăn - oat - oăt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: oan - oăn - oat - oăt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oan - oăn - oat - oăt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oan - oăn - oat - oăt."
      }
  },
  'tv-g1-t1-b77': {
      "lessonId": "tv-g1-t1-b77",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          166,
          167
      ],
      "sourceHash": "fae67d4748abce46f932152eb93e7ff747543ea80556fb2c6729d4aedc4d2464",
      "readingPassage": {
          "title": "oai - uê - uy",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: oai - uê - uy.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oai - uê - uy theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oai - uê - uy."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              166,
              167
          ],
          "sourceHash": "fae67d4748abce46f932152eb93e7ff747543ea80556fb2c6729d4aedc4d2464",
          "audioNarration": "Bài đọc: oai - uê - uy. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: oai - uê - uy. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học oai - uê - uy theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài oai - uê - uy."
      }
  },
  'tv-g1-t1-b78': {
      "lessonId": "tv-g1-t1-b78",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          168,
          169
      ],
      "sourceHash": "100acc35263dabbcba4c00f51e41c8058d40fa89b66ca6ff7f704af06caf12aa",
      "readingPassage": {
          "title": "uân - uât",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: uân - uât.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uân - uât theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uân - uât."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              168,
              169
          ],
          "sourceHash": "100acc35263dabbcba4c00f51e41c8058d40fa89b66ca6ff7f704af06caf12aa",
          "audioNarration": "Bài đọc: uân - uât. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: uân - uât. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uân - uât theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uân - uât."
      }
  },
  'tv-g1-t1-b79': {
      "lessonId": "tv-g1-t1-b79",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          170,
          171
      ],
      "sourceHash": "f0ec542fd9176eff76d543cb1c4ea1886ccd49132b3173cdde1cd24c157ffe3e",
      "readingPassage": {
          "title": "uyên - uyêt",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: uyên - uyêt.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uyên - uyêt theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uyên - uyêt."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              170,
              171
          ],
          "sourceHash": "f0ec542fd9176eff76d543cb1c4ea1886ccd49132b3173cdde1cd24c157ffe3e",
          "audioNarration": "Bài đọc: uyên - uyêt. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: uyên - uyêt. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học uyên - uyêt theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài uyên - uyêt."
      }
  },
  'tv-g1-t1-b8': {
      "lessonId": "tv-g1-b8",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          28,
          29
      ],
      "sourceHash": "b249e41b2f03ed0039499f959a4a28d02250f356351a88d9f1969baa7a83ac9d",
      "readingPassage": {
          "title": "D d - Đ đ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: D d - Đ đ.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học D d - Đ đ theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài D d - Đ đ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29
          ],
          "sourceHash": "b249e41b2f03ed0039499f959a4a28d02250f356351a88d9f1969baa7a83ac9d",
          "audioNarration": "Bài đọc: D d - Đ đ. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: D d - Đ đ. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học D d - Đ đ theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài D d - Đ đ."
      }
  },
  'tv-g1-t1-b80': {
      "lessonId": "tv-g1-t1-b80",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          172,
          173
      ],
      "sourceHash": "052571e211f7ed1d7cfd8177716ceb87fba5ebd5435467bbd8419161fec6406b",
      "readingPassage": {
          "title": "Ôn tập và kể chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập và kể chuyện.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              172,
              173
          ],
          "sourceHash": "052571e211f7ed1d7cfd8177716ceb87fba5ebd5435467bbd8419161fec6406b",
          "audioNarration": "Bài đọc: Ôn tập và kể chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập và kể chuyện. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập và kể chuyện theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập và kể chuyện."
      }
  },
  'tv-g1-t1-b81': {
      "lessonId": "tv-g1-t1-b81",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          174,
          175
      ],
      "sourceHash": "da7d74a9ede8f20b0582177f4e0c9216adef2428d5b8a19428ade107ba7c79a5",
      "readingPassage": {
          "title": "Ôn tập",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              174,
              175
          ],
          "sourceHash": "da7d74a9ede8f20b0582177f4e0c9216adef2428d5b8a19428ade107ba7c79a5",
          "audioNarration": "Bài đọc: Ôn tập. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập."
      }
  },
  'tv-g1-t1-b82': {
      "lessonId": "tv-g1-t1-b82",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          176,
          177
      ],
      "sourceHash": "3a7996c28d6b5a72a2e1803ec6a585e89e5a782cf25f5abd9665956f1f381470",
      "readingPassage": {
          "title": "Ôn tập",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Ôn tập.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              176,
              177
          ],
          "sourceHash": "3a7996c28d6b5a72a2e1803ec6a585e89e5a782cf25f5abd9665956f1f381470",
          "audioNarration": "Bài đọc: Ôn tập. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Ôn tập. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Ôn tập theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Ôn tập."
      }
  },
  'tv-g1-t1-b83': {
      "lessonId": "tv-g1-t1-b83",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          178,
          179,
          180,
          181
      ],
      "sourceHash": "cbed628227ab8c9ef7555da089d9d30ffb6c24b71c2152255aeb16d153aa88da",
      "readingPassage": {
          "title": "Voi, hổ và khỉ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài học âm vần: Voi, hổ và khỉ.",
              "Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Voi, hổ và khỉ theo sách giáo khoa Tiếng Việt 1.",
              "Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Voi, hổ và khỉ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              178,
              179,
              180,
              181
          ],
          "sourceHash": "cbed628227ab8c9ef7555da089d9d30ffb6c24b71c2152255aeb16d153aa88da",
          "audioNarration": "Bài đọc: Voi, hổ và khỉ. Tác giả: NXB Giáo Dục Việt Nam. Bài học âm vần: Voi, hổ và khỉ. Luyện đọc các âm, vần và từ ngữ ứng dụng trong bài học Voi, hổ và khỉ theo sách giáo khoa Tiếng Việt 1. Tập đọc câu ứng dụng và thực hành giao tiếp theo chủ điểm của bài Voi, hổ và khỉ."
      }
  },
  'tv-g1-t1-b9': {
      "lessonId": "tv-g1-b9",
      "bookId": "tv-g1-t1",
      "sourcePages": [
          30,
          31
      ],
      "sourceHash": "4007c02361331fb4f8e21110b0c6e7973c4e52a3471c139fc5756bf42de97369",
      "readingPassage": {
          "title": "Ơ ơ",
          "author": "Thạch Quỳ",
          "genre": "poem",
          "content": [
              "Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên.",
              "Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm.",
              "Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31
          ],
          "sourceHash": "4007c02361331fb4f8e21110b0c6e7973c4e52a3471c139fc5756bf42de97369",
          "audioNarration": "Bài đọc: Ơ ơ. Tác giả: Thạch Quỳ. Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên. Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm. Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
      }
  },
  'tv-g1-t2-b1': {
      "lessonId": "tv-g1-b21",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          4,
          5,
          6,
          7
      ],
      "sourceHash": "9473c20c9fa5084c94ce45e237cd72a284495eaa0485a74454597a46142f90ae",
      "readingPassage": {
          "title": "Tôi là học sinh lớp 1",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai.",
              "Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng.",
              "Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              4,
              5,
              6,
              7
          ],
          "sourceHash": "9473c20c9fa5084c94ce45e237cd72a284495eaa0485a74454597a46142f90ae",
          "audioNarration": "Bài đọc: Tôi là học sinh lớp 1. Tác giả: NXB Giáo Dục Việt Nam. Hôm nay là ngày đầu tiên tôi đi học. Tôi mặc bộ đồng phục mới, mang cặp sách trên vai. Trường học của tôi thật đẹp và rộng rãi. Cô giáo đón chúng tôi vào lớp với nụ cười dịu dàng. Tôi rất vui vì được làm quen với nhiều bạn mới. Tôi tự hào là học sinh lớp 1."
      }
  },
  'tv-g1-t2-b10': {
      "lessonId": "tv-g1-b30",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          36,
          37,
          38,
          39
      ],
      "sourceHash": "b01a1d371871b149fc476bcae8523221fa0da7f661e923f08424910d75c8e745",
      "readingPassage": {
          "title": "Bữa cơm gia đình",
          "author": "Minh Chính",
          "genre": "prose",
          "content": [
              "Bài đọc: Bữa cơm gia đình\nTác giả: Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 36–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bữa cơm gia đình\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37,
              38,
              39
          ],
          "sourceHash": "b01a1d371871b149fc476bcae8523221fa0da7f661e923f08424910d75c8e745",
          "audioNarration": "Bài đọc: Bữa cơm gia đình. Tác giả: Minh Chính. Bài đọc: Bữa cơm gia đình\nTác giả: Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 36–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bữa cơm gia đình\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b11': {
      "lessonId": "tv-g1-t2-b11",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          40,
          41,
          42,
          43
      ],
      "sourceHash": "338e326594d00995aea084b6dabc1855e7d57fc324d3ba8336278cc7304a7f3c",
      "readingPassage": {
          "title": "Ngôi nhà",
          "author": "Mai Ngọc Phòng",
          "genre": "poem",
          "content": [
              "Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm.",
              "Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi.",
              "Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42,
              43
          ],
          "sourceHash": "338e326594d00995aea084b6dabc1855e7d57fc324d3ba8336278cc7304a7f3c",
          "audioNarration": "Bài đọc: Ngôi nhà. Tác giả: Mai Ngọc Phòng. Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm. Em yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi. Em yêu ngôi nhà\nGỗ xoan mộc mạc\nCó bạn bè ngoan\nCùng em đến lớp."
      }
  },
  'tv-g1-t2-b12': {
      "lessonId": "tv-g1-t2-b12",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "eee9983d892c25c25fd224df6c2f1e5b3099dc8f51f0ce9619808ccdffbf9dbc",
      "readingPassage": {
          "title": "Tôi đi học",
          "author": "Thanh Tịnh",
          "genre": "prose",
          "content": [
              "Bài đọc: Tôi đi học\nTác giả: Thanh Tịnh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 44–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi đi học\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "eee9983d892c25c25fd224df6c2f1e5b3099dc8f51f0ce9619808ccdffbf9dbc",
          "audioNarration": "Bài đọc: Tôi đi học. Tác giả: Thanh Tịnh. Bài đọc: Tôi đi học\nTác giả: Thanh Tịnh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 44–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi đi học\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b13': {
      "lessonId": "tv-g1-t2-b13",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          48,
          49
      ],
      "sourceHash": "62dc72e858f55b09c72ce05401db7b4ff61b23476b5f72800ee9c6f5f65d385f",
      "readingPassage": {
          "title": "Đi học",
          "author": "Hoàng Minh Chính",
          "genre": "poem",
          "content": [
              "Bài thơ: Đi học\nTác giả: Hoàng Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 48–49).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Đi học\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49
          ],
          "sourceHash": "62dc72e858f55b09c72ce05401db7b4ff61b23476b5f72800ee9c6f5f65d385f",
          "audioNarration": "Bài đọc: Đi học. Tác giả: Hoàng Minh Chính. Bài thơ: Đi học\nTác giả: Hoàng Minh Chính\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 48–49). Đọc thuộc lòng và diễn cảm bài thơ \"Đi học\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b14': {
      "lessonId": "tv-g1-t2-b14",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          50,
          51,
          52,
          53
      ],
      "sourceHash": "0607a298fa5ce0fceb10d02af099562a57799606131112537c05d97c08aea7d3",
      "readingPassage": {
          "title": "Hoa yêu thương",
          "author": "Thuỵ Anh",
          "genre": "prose",
          "content": [
              "Bài đọc: Hoa yêu thương\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 50–53).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa yêu thương\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              50,
              51,
              52,
              53
          ],
          "sourceHash": "0607a298fa5ce0fceb10d02af099562a57799606131112537c05d97c08aea7d3",
          "audioNarration": "Bài đọc: Hoa yêu thương. Tác giả: Thuỵ Anh. Bài đọc: Hoa yêu thương\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 50–53). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa yêu thương\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b15': {
      "lessonId": "tv-g1-t2-b15",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          54,
          55
      ],
      "sourceHash": "fecc54607bceb129ad7640a139777d0d1c55593eeb251fe00d91c8b3499e1422",
      "readingPassage": {
          "title": "Cây bàng và lớp học",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cây bàng và lớp học\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 54–55).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây bàng và lớp học\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              54,
              55
          ],
          "sourceHash": "fecc54607bceb129ad7640a139777d0d1c55593eeb251fe00d91c8b3499e1422",
          "audioNarration": "Bài đọc: Cây bàng và lớp học. Tác giả: Hải Nam. Bài đọc: Cây bàng và lớp học\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 54–55). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây bàng và lớp học\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b16': {
      "lessonId": "tv-g1-t2-b16",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          56,
          57,
          58,
          59
      ],
      "sourceHash": "051e7441625aac96982335300fac1bdbe08df434ab0a905be8d9a4a85be6bfc4",
      "readingPassage": {
          "title": "Bác trống trường",
          "author": "Phạm Hổ",
          "genre": "poem",
          "content": [
              "Bài thơ: Bác trống trường\nTác giả: Phạm Hổ\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 56–59).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bác trống trường\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              56,
              57,
              58,
              59
          ],
          "sourceHash": "051e7441625aac96982335300fac1bdbe08df434ab0a905be8d9a4a85be6bfc4",
          "audioNarration": "Bài đọc: Bác trống trường. Tác giả: Phạm Hổ. Bài thơ: Bác trống trường\nTác giả: Phạm Hổ\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 56–59). Đọc thuộc lòng và diễn cảm bài thơ \"Bác trống trường\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b17': {
      "lessonId": "tv-g1-t2-b17",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          60,
          61,
          62,
          63
      ],
      "sourceHash": "d9e6ece2603dd834b722ef4721c8fc36eea8ca37d3191d914b3ff64ed67ccf38",
      "readingPassage": {
          "title": "Giờ ra chơi",
          "author": "Nguyễn Lãm Thắng",
          "genre": "poem",
          "content": [
              "Bài thơ: Giờ ra chơi\nTác giả: Nguyễn Lãm Thắng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 60–63).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Giờ ra chơi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              60,
              61,
              62,
              63
          ],
          "sourceHash": "d9e6ece2603dd834b722ef4721c8fc36eea8ca37d3191d914b3ff64ed67ccf38",
          "audioNarration": "Bài đọc: Giờ ra chơi. Tác giả: Nguyễn Lãm Thắng. Bài thơ: Giờ ra chơi\nTác giả: Nguyễn Lãm Thắng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 60–63). Đọc thuộc lòng và diễn cảm bài thơ \"Giờ ra chơi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b18': {
      "lessonId": "tv-g1-t2-b18",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          64,
          65,
          66,
          67
      ],
      "sourceHash": "dbdc1d11b1ae600e065c98c2ad3c34da77acd7ce7e692718bb8e76ed8df55802",
      "readingPassage": {
          "title": "Rửa tay trước khi ăn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Rửa tay trước khi ăn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 64–67).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Rửa tay trước khi ăn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              64,
              65,
              66,
              67
          ],
          "sourceHash": "dbdc1d11b1ae600e065c98c2ad3c34da77acd7ce7e692718bb8e76ed8df55802",
          "audioNarration": "Bài đọc: Rửa tay trước khi ăn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Rửa tay trước khi ăn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 64–67). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Rửa tay trước khi ăn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b19': {
      "lessonId": "tv-g1-t2-b19",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          68,
          69
      ],
      "sourceHash": "0d294531337cba3d4e093a48971e4716d2ceeec25cb9617af72823185b77bca6",
      "readingPassage": {
          "title": "Lời chào đi trước",
          "author": "Nguyễn Hoàng Sơn",
          "genre": "poem",
          "content": [
              "Bài thơ: Lời chào đi trước\nTác giả: Nguyễn Hoàng Sơn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 68–69).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Lời chào đi trước\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              68,
              69
          ],
          "sourceHash": "0d294531337cba3d4e093a48971e4716d2ceeec25cb9617af72823185b77bca6",
          "audioNarration": "Bài đọc: Lời chào đi trước. Tác giả: Nguyễn Hoàng Sơn. Bài thơ: Lời chào đi trước\nTác giả: Nguyễn Hoàng Sơn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 68–69). Đọc thuộc lòng và diễn cảm bài thơ \"Lời chào đi trước\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b2': {
      "lessonId": "tv-g1-b22",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "c1a74214ab39c6ba3021bcbda2d658942260ebeef3c0fb81570663405cea2884",
      "readingPassage": {
          "title": "Đôi tai xấu xí",
          "author": "Theo Truyện thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Đôi tai xấu xí\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đôi tai xấu xí\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "c1a74214ab39c6ba3021bcbda2d658942260ebeef3c0fb81570663405cea2884",
          "audioNarration": "Bài đọc: Đôi tai xấu xí. Tác giả: Theo Truyện thiếu nhi. Bài đọc: Đôi tai xấu xí\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đôi tai xấu xí\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b20': {
      "lessonId": "tv-g1-t2-b20",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          70,
          71,
          72,
          73
      ],
      "sourceHash": "86a1a2749a0be305a286f9c98912c2099e444b37279c85cfccdca03ef8656bed",
      "readingPassage": {
          "title": "Khi mẹ vắng nhà",
          "author": "Theo Truyện kể thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Khi mẹ vắng nhà\nTác giả: Theo Truyện kể thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 70–73).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khi mẹ vắng nhà\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              70,
              71,
              72,
              73
          ],
          "sourceHash": "86a1a2749a0be305a286f9c98912c2099e444b37279c85cfccdca03ef8656bed",
          "audioNarration": "Bài đọc: Khi mẹ vắng nhà. Tác giả: Theo Truyện kể thiếu nhi. Bài đọc: Khi mẹ vắng nhà\nTác giả: Theo Truyện kể thiếu nhi\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 70–73). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khi mẹ vắng nhà\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b21': {
      "lessonId": "tv-g1-t2-b21",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          74,
          75,
          76,
          77
      ],
      "sourceHash": "e584fd01544bfd947823573d6a3fad5787320fdca51ad6a5793c5039c3d1dea6",
      "readingPassage": {
          "title": "Nếu không may bị lạc",
          "author": "Kĩ năng sống",
          "genre": "prose",
          "content": [
              "Bài đọc: Nếu không may bị lạc\nTác giả: Kĩ năng sống\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 74–77).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu không may bị lạc\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              74,
              75,
              76,
              77
          ],
          "sourceHash": "e584fd01544bfd947823573d6a3fad5787320fdca51ad6a5793c5039c3d1dea6",
          "audioNarration": "Bài đọc: Nếu không may bị lạc. Tác giả: Kĩ năng sống. Bài đọc: Nếu không may bị lạc\nTác giả: Kĩ năng sống\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 74–77). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu không may bị lạc\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b22': {
      "lessonId": "tv-g1-t2-b22",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          78,
          79,
          80,
          81,
          82,
          83
      ],
      "sourceHash": "b5d3341cb4bd94f76a8acea6abf4fa67951e27c0f3e362ddb586692000f04dc3",
      "readingPassage": {
          "title": "Đèn giao thông",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đèn giao thông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 78–83).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đèn giao thông\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              78,
              79,
              80,
              81,
              82,
              83
          ],
          "sourceHash": "b5d3341cb4bd94f76a8acea6abf4fa67951e27c0f3e362ddb586692000f04dc3",
          "audioNarration": "Bài đọc: Đèn giao thông. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đèn giao thông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 78–83). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đèn giao thông\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b23': {
      "lessonId": "tv-g1-t2-b23",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          84,
          85,
          86,
          87
      ],
      "sourceHash": "406f4df97fb3c1a01d74687fa6713d375557c035afa05f75a86316ea5c1aba3c",
      "readingPassage": {
          "title": "Kiến và chim bồ câu",
          "author": "Truyện ngụ ngôn Ê-sốp",
          "genre": "prose",
          "content": [
              "Bài đọc: Kiến và chim bồ câu\nTác giả: Truyện ngụ ngôn Ê-sốp\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 84–87).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kiến và chim bồ câu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              84,
              85,
              86,
              87
          ],
          "sourceHash": "406f4df97fb3c1a01d74687fa6713d375557c035afa05f75a86316ea5c1aba3c",
          "audioNarration": "Bài đọc: Kiến và chim bồ câu. Tác giả: Truyện ngụ ngôn Ê-sốp. Bài đọc: Kiến và chim bồ câu\nTác giả: Truyện ngụ ngôn Ê-sốp\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 84–87). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kiến và chim bồ câu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b24': {
      "lessonId": "tv-g1-t2-b24",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          88,
          89
      ],
      "sourceHash": "cdfa7abc9791617c4c538f48883f8ff188c4ba78a2a13b77c1e0719ea426847a",
      "readingPassage": {
          "title": "Câu chuyện của rễ",
          "author": "Theo Truyện cổ tích",
          "genre": "prose",
          "content": [
              "Bài đọc: Câu chuyện của rễ\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 88–89).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Câu chuyện của rễ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              88,
              89
          ],
          "sourceHash": "cdfa7abc9791617c4c538f48883f8ff188c4ba78a2a13b77c1e0719ea426847a",
          "audioNarration": "Bài đọc: Câu chuyện của rễ. Tác giả: Theo Truyện cổ tích. Bài đọc: Câu chuyện của rễ\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 88–89). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Câu chuyện của rễ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b25': {
      "lessonId": "tv-g1-t2-b25",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          90,
          91,
          92,
          93
      ],
      "sourceHash": "d441045f3001f3b10be1bc785f0515112ea8bfecebc3cba251fd0590470ef885",
      "readingPassage": {
          "title": "Câu hỏi của sói",
          "author": "Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Câu hỏi của sói\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 90–93).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Câu hỏi của sói\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              90,
              91,
              92,
              93
          ],
          "sourceHash": "d441045f3001f3b10be1bc785f0515112ea8bfecebc3cba251fd0590470ef885",
          "audioNarration": "Bài đọc: Câu hỏi của sói. Tác giả: Truyện ngụ ngôn. Bài đọc: Câu hỏi của sói\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 90–93). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Câu hỏi của sói\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b26': {
      "lessonId": "tv-g1-t2-b26",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          94,
          95,
          96,
          97
      ],
      "sourceHash": "4d143d8339a6483c21e584236983b370af6cd09e4ddb6910def01a3ec126071d",
      "readingPassage": {
          "title": "Chú bé chăn cừu",
          "author": "Truyện ngụ ngôn Ê-sốp",
          "genre": "prose",
          "content": [
              "Bài đọc: Chú bé chăn cừu\nTác giả: Truyện ngụ ngôn Ê-sốp\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 94–97).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chú bé chăn cừu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              94,
              95,
              96,
              97
          ],
          "sourceHash": "4d143d8339a6483c21e584236983b370af6cd09e4ddb6910def01a3ec126071d",
          "audioNarration": "Bài đọc: Chú bé chăn cừu. Tác giả: Truyện ngụ ngôn Ê-sốp. Bài đọc: Chú bé chăn cừu\nTác giả: Truyện ngụ ngôn Ê-sốp\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 94–97). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chú bé chăn cừu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b27': {
      "lessonId": "tv-g1-t2-b27",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          98,
          99,
          100,
          101,
          102,
          103
      ],
      "sourceHash": "34c128b19458958a5b96a58490f763dcab7bb37f1f1699e8b9cbbe7cf9ba0967",
      "readingPassage": {
          "title": "Tiếng vọng của núi",
          "author": "Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Tiếng vọng của núi\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 98–103).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng vọng của núi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              98,
              99,
              100,
              101,
              102,
              103
          ],
          "sourceHash": "34c128b19458958a5b96a58490f763dcab7bb37f1f1699e8b9cbbe7cf9ba0967",
          "audioNarration": "Bài đọc: Tiếng vọng của núi. Tác giả: Truyện ngụ ngôn. Bài đọc: Tiếng vọng của núi\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 98–103). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng vọng của núi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b28': {
      "lessonId": "tv-g1-t2-b28",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          104,
          105,
          106,
          107
      ],
      "sourceHash": "4e4f8215f5edc82ef0ea36a914332f624b36928cbc4c7e412c773a4e69cbf060",
      "readingPassage": {
          "title": "Loài chim của biển cả",
          "author": "Khám phá thiên nhiên",
          "genre": "prose",
          "content": [
              "Bài đọc: Loài chim của biển cả\nTác giả: Khám phá thiên nhiên\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 104–107).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Loài chim của biển cả\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              104,
              105,
              106,
              107
          ],
          "sourceHash": "4e4f8215f5edc82ef0ea36a914332f624b36928cbc4c7e412c773a4e69cbf060",
          "audioNarration": "Bài đọc: Loài chim của biển cả. Tác giả: Khám phá thiên nhiên. Bài đọc: Loài chim của biển cả\nTác giả: Khám phá thiên nhiên\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 104–107). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Loài chim của biển cả\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b29': {
      "lessonId": "tv-g1-t2-b29",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          108,
          109
      ],
      "sourceHash": "d4dbe14dff0b37a0e4d587a2b9507ff21a55977003f30067df79f0d31bc675bd",
      "readingPassage": {
          "title": "Bảy sắc cầu vồng",
          "author": "Khám phá tự nhiên",
          "genre": "prose",
          "content": [
              "Bài đọc: Bảy sắc cầu vồng\nTác giả: Khám phá tự nhiên\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 108–109).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bảy sắc cầu vồng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              108,
              109
          ],
          "sourceHash": "d4dbe14dff0b37a0e4d587a2b9507ff21a55977003f30067df79f0d31bc675bd",
          "audioNarration": "Bài đọc: Bảy sắc cầu vồng. Tác giả: Khám phá tự nhiên. Bài đọc: Bảy sắc cầu vồng\nTác giả: Khám phá tự nhiên\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 108–109). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bảy sắc cầu vồng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b3': {
      "lessonId": "tv-g1-b23",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          12,
          13
      ],
      "sourceHash": "5a0fcdf4ce0420e33c563a792c2728f1a97df305704ec4083223be2f9ae49431",
      "readingPassage": {
          "title": "Bạn của gió",
          "author": "Quang Huy",
          "genre": "poem",
          "content": [
              "Bài thơ: Bạn của gió\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 12–13).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bạn của gió\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13
          ],
          "sourceHash": "5a0fcdf4ce0420e33c563a792c2728f1a97df305704ec4083223be2f9ae49431",
          "audioNarration": "Bài đọc: Bạn của gió. Tác giả: Quang Huy. Bài thơ: Bạn của gió\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 12–13). Đọc thuộc lòng và diễn cảm bài thơ \"Bạn của gió\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b30': {
      "lessonId": "tv-g1-t2-b30",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          110,
          111,
          112,
          113
      ],
      "sourceHash": "784fff1ad5ec6ab26a7362c8ea99e23d2cbe74427ce99ca6b0cce60ff581838a",
      "readingPassage": {
          "title": "Chúa tể rừng xanh",
          "author": "Thế giới động vật",
          "genre": "prose",
          "content": [
              "Bài đọc: Chúa tể rừng xanh\nTác giả: Thế giới động vật\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 110–113).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chúa tể rừng xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              110,
              111,
              112,
              113
          ],
          "sourceHash": "784fff1ad5ec6ab26a7362c8ea99e23d2cbe74427ce99ca6b0cce60ff581838a",
          "audioNarration": "Bài đọc: Chúa tể rừng xanh. Tác giả: Thế giới động vật. Bài đọc: Chúa tể rừng xanh\nTác giả: Thế giới động vật\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 110–113). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chúa tể rừng xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b31': {
      "lessonId": "tv-g1-t2-b31",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          114,
          115,
          116,
          117
      ],
      "sourceHash": "d4edeaf89af259575fd4cd540f097ea0c64874946d72bf5b595ec01167de37d6",
      "readingPassage": {
          "title": "Cuộc thi tài năng rừng xanh",
          "author": "Theo Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Cuộc thi tài năng rừng xanh\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 114–117).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc thi tài năng rừng xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              114,
              115,
              116,
              117
          ],
          "sourceHash": "d4edeaf89af259575fd4cd540f097ea0c64874946d72bf5b595ec01167de37d6",
          "audioNarration": "Bài đọc: Cuộc thi tài năng rừng xanh. Tác giả: Theo Truyện ngụ ngôn. Bài đọc: Cuộc thi tài năng rừng xanh\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 114–117). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc thi tài năng rừng xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b32': {
      "lessonId": "tv-g1-t2-b32",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          118,
          119,
          120,
          121,
          122,
          123
      ],
      "sourceHash": "196d00a3948ffc6c936b0ed534fa0675d0770f44e79c4859f7205c138ffa511f",
      "readingPassage": {
          "title": "Cây liễu dẻo dai",
          "author": "Theo Vũ Tú Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cây liễu dẻo dai\nTác giả: Theo Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 118–123).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây liễu dẻo dai\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              118,
              119,
              120,
              121,
              122,
              123
          ],
          "sourceHash": "196d00a3948ffc6c936b0ed534fa0675d0770f44e79c4859f7205c138ffa511f",
          "audioNarration": "Bài đọc: Cây liễu dẻo dai. Tác giả: Theo Vũ Tú Nam. Bài đọc: Cây liễu dẻo dai\nTác giả: Theo Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 118–123). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây liễu dẻo dai\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b33': {
      "lessonId": "tv-g1-t2-b33",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          124,
          125
      ],
      "sourceHash": "19ffdf583e70fd9fb7928d924502287a66ef4008a09632099b35c97de3a12c97",
      "readingPassage": {
          "title": "Tia nắng đi đâu?",
          "author": "Thuỵ Anh",
          "genre": "poem",
          "content": [
              "Bài thơ: Tia nắng đi đâu?\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 124–125).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tia nắng đi đâu?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              124,
              125
          ],
          "sourceHash": "19ffdf583e70fd9fb7928d924502287a66ef4008a09632099b35c97de3a12c97",
          "audioNarration": "Bài đọc: Tia nắng đi đâu?. Tác giả: Thuỵ Anh. Bài thơ: Tia nắng đi đâu?\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 124–125). Đọc thuộc lòng và diễn cảm bài thơ \"Tia nắng đi đâu?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b34': {
      "lessonId": "tv-g1-t2-b34",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          126,
          127
      ],
      "sourceHash": "353fd1ccd1f5e7cf566c4b60eb21c90810914d86913416ea933e029142b74358",
      "readingPassage": {
          "title": "Trong giấc mơ buổi sáng",
          "author": "Trương Nam Hương",
          "genre": "poem",
          "content": [
              "Bài thơ: Trong giấc mơ buổi sáng\nTác giả: Trương Nam Hương\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 126–127).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Trong giấc mơ buổi sáng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127
          ],
          "sourceHash": "353fd1ccd1f5e7cf566c4b60eb21c90810914d86913416ea933e029142b74358",
          "audioNarration": "Bài đọc: Trong giấc mơ buổi sáng. Tác giả: Trương Nam Hương. Bài thơ: Trong giấc mơ buổi sáng\nTác giả: Trương Nam Hương\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 126–127). Đọc thuộc lòng và diễn cảm bài thơ \"Trong giấc mơ buổi sáng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b35': {
      "lessonId": "tv-g1-t2-b35",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          128,
          129,
          130,
          131
      ],
      "sourceHash": "3d8264e424bef2fa60900e8d9f1e5eac0177ce1e441171b061b2244ef90230ce",
      "readingPassage": {
          "title": "Ngày mới bắt đầu",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngày mới bắt đầu\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 128–131).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày mới bắt đầu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              128,
              129,
              130,
              131
          ],
          "sourceHash": "3d8264e424bef2fa60900e8d9f1e5eac0177ce1e441171b061b2244ef90230ce",
          "audioNarration": "Bài đọc: Ngày mới bắt đầu. Tác giả: Hải Nam. Bài đọc: Ngày mới bắt đầu\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 128–131). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày mới bắt đầu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b36': {
      "lessonId": "tv-g1-t2-b36",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          132,
          133
      ],
      "sourceHash": "f18cd4238568c76b548f9290bd9722249efe106f4c1c41e22abf0d0c889bc835",
      "readingPassage": {
          "title": "Hỏi mẹ",
          "author": "Đỗ Nhật Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Hỏi mẹ\nTác giả: Đỗ Nhật Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 132–133).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Hỏi mẹ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              132,
              133
          ],
          "sourceHash": "f18cd4238568c76b548f9290bd9722249efe106f4c1c41e22abf0d0c889bc835",
          "audioNarration": "Bài đọc: Hỏi mẹ. Tác giả: Đỗ Nhật Nam. Bài thơ: Hỏi mẹ\nTác giả: Đỗ Nhật Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 132–133). Đọc thuộc lòng và diễn cảm bài thơ \"Hỏi mẹ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b37': {
      "lessonId": "tv-g1-t2-b37",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          134,
          135,
          136,
          137
      ],
      "sourceHash": "e9af9c70463523f67d0ce9327a849770117ee6bc1bccea83ad94ba202bc617dd",
      "readingPassage": {
          "title": "Những cánh cò",
          "author": "Đồng dao",
          "genre": "poem",
          "content": [
              "Bài thơ: Những cánh cò\nTác giả: Đồng dao\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 134–137).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Những cánh cò\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              134,
              135,
              136,
              137
          ],
          "sourceHash": "e9af9c70463523f67d0ce9327a849770117ee6bc1bccea83ad94ba202bc617dd",
          "audioNarration": "Bài đọc: Những cánh cò. Tác giả: Đồng dao. Bài thơ: Những cánh cò\nTác giả: Đồng dao\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 134–137). Đọc thuộc lòng và diễn cảm bài thơ \"Những cánh cò\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b38': {
      "lessonId": "tv-g1-t2-b38",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          138,
          139
      ],
      "sourceHash": "070fec7a39b95ebab50038e8f7748a10cef1d4e044d5c8402e25d4d6550d0cf1",
      "readingPassage": {
          "title": "Buổi trưa hè",
          "author": "Huy Cận",
          "genre": "poem",
          "content": [
              "Bài thơ: Buổi trưa hè\nTác giả: Huy Cận\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 138–139).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Buổi trưa hè\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              138,
              139
          ],
          "sourceHash": "070fec7a39b95ebab50038e8f7748a10cef1d4e044d5c8402e25d4d6550d0cf1",
          "audioNarration": "Bài đọc: Buổi trưa hè. Tác giả: Huy Cận. Bài thơ: Buổi trưa hè\nTác giả: Huy Cận\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 138–139). Đọc thuộc lòng và diễn cảm bài thơ \"Buổi trưa hè\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b39': {
      "lessonId": "tv-g1-t2-b39",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          140,
          141,
          142,
          143
      ],
      "sourceHash": "385f783a36d80cfe46c63a6984c7fa8ee3ddc4813c624aa88639a153455e4513",
      "readingPassage": {
          "title": "Hoa phượng",
          "author": "Xuân Diệu",
          "genre": "prose",
          "content": [
              "Bài đọc: Hoa phượng\nTác giả: Xuân Diệu\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 140–143).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa phượng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              140,
              141,
              142,
              143
          ],
          "sourceHash": "385f783a36d80cfe46c63a6984c7fa8ee3ddc4813c624aa88639a153455e4513",
          "audioNarration": "Bài đọc: Hoa phượng. Tác giả: Xuân Diệu. Bài đọc: Hoa phượng\nTác giả: Xuân Diệu\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 140–143). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa phượng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b4': {
      "lessonId": "tv-g1-b24",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          14,
          15,
          16,
          17
      ],
      "sourceHash": "7fc7297eb7e2d7ba1f9f02a8cdd679cbde47239d251ee8af6ec7cfefc063c2cb",
      "readingPassage": {
          "title": "Giải thưởng tình bạn",
          "author": "Theo Báo Nhi đồng",
          "genre": "prose",
          "content": [
              "Bài đọc: Giải thưởng tình bạn\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 14–17).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giải thưởng tình bạn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              14,
              15,
              16,
              17
          ],
          "sourceHash": "7fc7297eb7e2d7ba1f9f02a8cdd679cbde47239d251ee8af6ec7cfefc063c2cb",
          "audioNarration": "Bài đọc: Giải thưởng tình bạn. Tác giả: Theo Báo Nhi đồng. Bài đọc: Giải thưởng tình bạn\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 14–17). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giải thưởng tình bạn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b40': {
      "lessonId": "tv-g1-t2-b40",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          144,
          145,
          146,
          147
      ],
      "sourceHash": "b3115beb8bfcfe5d63897a1b1ef57059af38ed78b3ef1fd8a7ffe8b5e7218e8d",
      "readingPassage": {
          "title": "Cậu bé thông minh",
          "author": "Truyện cổ tích Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cậu bé thông minh\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 144–147).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cậu bé thông minh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              144,
              145,
              146,
              147
          ],
          "sourceHash": "b3115beb8bfcfe5d63897a1b1ef57059af38ed78b3ef1fd8a7ffe8b5e7218e8d",
          "audioNarration": "Bài đọc: Cậu bé thông minh. Tác giả: Truyện cổ tích Việt Nam. Bài đọc: Cậu bé thông minh\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 144–147). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cậu bé thông minh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b41': {
      "lessonId": "tv-g1-t2-b41",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          148,
          149,
          150,
          151
      ],
      "sourceHash": "8293aa668e86aca41d31e0f44cd6e96be76e5fb2f012257ed26655ca30c0c037",
      "readingPassage": {
          "title": "Lính cứu hoả",
          "author": "Theo Báo Nhi đồng",
          "genre": "prose",
          "content": [
              "Bài đọc: Lính cứu hoả\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 148–151).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lính cứu hoả\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              148,
              149,
              150,
              151
          ],
          "sourceHash": "8293aa668e86aca41d31e0f44cd6e96be76e5fb2f012257ed26655ca30c0c037",
          "audioNarration": "Bài đọc: Lính cứu hoả. Tác giả: Theo Báo Nhi đồng. Bài đọc: Lính cứu hoả\nTác giả: Theo Báo Nhi đồng\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 148–151). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lính cứu hoả\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b42': {
      "lessonId": "tv-g1-t2-b42",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          152,
          153
      ],
      "sourceHash": "c8ea1fbc81ff81f220cda05e6534bd7facd28222f017a265031e42eda4b967f9",
      "readingPassage": {
          "title": "Lớn lên bạn làm gì?",
          "author": "Trần Quốc Toàn",
          "genre": "poem",
          "content": [
              "Bài thơ: Lớn lên bạn làm gì?\nTác giả: Trần Quốc Toàn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 152–153).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Lớn lên bạn làm gì?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              152,
              153
          ],
          "sourceHash": "c8ea1fbc81ff81f220cda05e6534bd7facd28222f017a265031e42eda4b967f9",
          "audioNarration": "Bài đọc: Lớn lên bạn làm gì?. Tác giả: Trần Quốc Toàn. Bài thơ: Lớn lên bạn làm gì?\nTác giả: Trần Quốc Toàn\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 152–153). Đọc thuộc lòng và diễn cảm bài thơ \"Lớn lên bạn làm gì?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b43': {
      "lessonId": "tv-g1-t2-b43",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          154,
          155
      ],
      "sourceHash": "3439558b1e2b9dfd7e1b7d528cdef6335d48c31bcc1608dc8c835afbad7259ba",
      "readingPassage": {
          "title": "Ruộng bậc thang ở Sa Pa",
          "author": "Theo Báo Ảnh Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ruộng bậc thang ở Sa Pa\nTác giả: Theo Báo Ảnh Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 154–155).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ruộng bậc thang ở Sa Pa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              154,
              155
          ],
          "sourceHash": "3439558b1e2b9dfd7e1b7d528cdef6335d48c31bcc1608dc8c835afbad7259ba",
          "audioNarration": "Bài đọc: Ruộng bậc thang ở Sa Pa. Tác giả: Theo Báo Ảnh Việt Nam. Bài đọc: Ruộng bậc thang ở Sa Pa\nTác giả: Theo Báo Ảnh Việt Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 154–155). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ruộng bậc thang ở Sa Pa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b44': {
      "lessonId": "tv-g1-t2-b44",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          156,
          157
      ],
      "sourceHash": "b5305e543204fc2b81f0cf5fd8f6689bb1a6a0393935cd712415e5d2857f06e4",
      "readingPassage": {
          "title": "Nhớ ơn",
          "author": "Đồng dao",
          "genre": "poem",
          "content": [
              "Bài thơ: Nhớ ơn\nTác giả: Đồng dao\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 156–157).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Nhớ ơn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              156,
              157
          ],
          "sourceHash": "b5305e543204fc2b81f0cf5fd8f6689bb1a6a0393935cd712415e5d2857f06e4",
          "audioNarration": "Bài đọc: Nhớ ơn. Tác giả: Đồng dao. Bài thơ: Nhớ ơn\nTác giả: Đồng dao\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 156–157). Đọc thuộc lòng và diễn cảm bài thơ \"Nhớ ơn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g1-t2-b45': {
      "lessonId": "tv-g1-t2-b45",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          158,
          159,
          160,
          161
      ],
      "sourceHash": "efc946a0b5118097bcb7e712823c59f8c1c72d5010445b56f68b732a048fb2bc",
      "readingPassage": {
          "title": "Du lịch biển Việt Nam",
          "author": "Khám phá quê hương",
          "genre": "prose",
          "content": [
              "Bài đọc: Du lịch biển Việt Nam\nTác giả: Khám phá quê hương\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 158–161).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Du lịch biển Việt Nam\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              158,
              159,
              160,
              161
          ],
          "sourceHash": "efc946a0b5118097bcb7e712823c59f8c1c72d5010445b56f68b732a048fb2bc",
          "audioNarration": "Bài đọc: Du lịch biển Việt Nam. Tác giả: Khám phá quê hương. Bài đọc: Du lịch biển Việt Nam\nTác giả: Khám phá quê hương\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 158–161). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Du lịch biển Việt Nam\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b5': {
      "lessonId": "tv-g1-b25",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          18,
          19,
          20,
          21,
          22,
          23
      ],
      "sourceHash": "31b41fbef6063db55b641632a34e2663f2446f649afaf26ac270d1d0e6705a17",
      "readingPassage": {
          "title": "Sinh nhật của voi con",
          "author": "Theo Truyện cổ tích",
          "genre": "prose",
          "content": [
              "Bài đọc: Sinh nhật của voi con\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 18–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sinh nhật của voi con\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19,
              20,
              21,
              22,
              23
          ],
          "sourceHash": "31b41fbef6063db55b641632a34e2663f2446f649afaf26ac270d1d0e6705a17",
          "audioNarration": "Bài đọc: Sinh nhật của voi con. Tác giả: Theo Truyện cổ tích. Bài đọc: Sinh nhật của voi con\nTác giả: Theo Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 18–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sinh nhật của voi con\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b6': {
      "lessonId": "tv-g1-b26",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          24,
          25,
          26,
          27
      ],
      "sourceHash": "e5a8d88ef69bb754c122fa4c01d963086da5d3be74188d25b129f2f7bd7983d0",
      "readingPassage": {
          "title": "Nụ hôn trên bàn tay",
          "author": "Theo Ô-đri Pen",
          "genre": "prose",
          "content": [
              "Bài đọc: Nụ hôn trên bàn tay\nTác giả: Theo Ô-đri Pen\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 24–27).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nụ hôn trên bàn tay\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26,
              27
          ],
          "sourceHash": "e5a8d88ef69bb754c122fa4c01d963086da5d3be74188d25b129f2f7bd7983d0",
          "audioNarration": "Bài đọc: Nụ hôn trên bàn tay. Tác giả: Theo Ô-đri Pen. Bài đọc: Nụ hôn trên bàn tay\nTác giả: Theo Ô-đri Pen\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 24–27). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nụ hôn trên bàn tay\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b7': {
      "lessonId": "tv-g1-b27",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          28,
          29
      ],
      "sourceHash": "2eb0a4519f8c3a6387f8c332b765ed312f987bba76f11047c3b6bd9fc6f3cb40",
      "readingPassage": {
          "title": "Làm anh",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ.",
              "Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng.",
              "Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn.",
              "Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29
          ],
          "sourceHash": "2eb0a4519f8c3a6387f8c332b765ed312f987bba76f11047c3b6bd9fc6f3cb40",
          "audioNarration": "Bài đọc: Làm anh. Tác giả: Phan Thị Thanh Nhàn. Làm anh khó đấy\nPhải đâu chuyện đùa\nVới em gái bé\nPhải người lớn cơ. Khi em bé khóc\nAnh phải dỗ dành\nNếu em bé ngã\nAnh nâng dịu dàng. Mẹ cho quà bánh\nChia em phần hơn\nCó đồ chơi đẹp\nCũng nhường em luôn. Làm anh thật khó\nNhưng mà thật vui\nAi yêu em bé\nThì làm được thôi."
      }
  },
  'tv-g1-t2-b8': {
      "lessonId": "tv-g1-b28",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "5347bb875c6df4efee56dd2d2ba6866294cb3e177faa93da334fbe41fb09697c",
      "readingPassage": {
          "title": "Cả nhà đi chơi núi",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cả nhà đi chơi núi\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cả nhà đi chơi núi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "5347bb875c6df4efee56dd2d2ba6866294cb3e177faa93da334fbe41fb09697c",
          "audioNarration": "Bài đọc: Cả nhà đi chơi núi. Tác giả: Hải Nam. Bài đọc: Cả nhà đi chơi núi\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 1 tập 2 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cả nhà đi chơi núi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g1-t2-b9': {
      "lessonId": "tv-g1-b29",
      "bookId": "tv-g1-t2",
      "sourcePages": [
          34,
          35
      ],
      "sourceHash": "7e1130f0b150aaef7ddb038e6a8e02db4b3d7d0d56a67fa83541fc63adb2177d",
      "readingPassage": {
          "title": "Quạt cho bà ngủ",
          "author": "Thạch Quỳ",
          "genre": "poem",
          "content": [
              "Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên.",
              "Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm.",
              "Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35
          ],
          "sourceHash": "7e1130f0b150aaef7ddb038e6a8e02db4b3d7d0d56a67fa83541fc63adb2177d",
          "audioNarration": "Bài đọc: Quạt cho bà ngủ. Tác giả: Thạch Quỳ. Ơi chích chòe ơi\nChim đừng hót nữa\nBà em bị ốm\nLặng lặng ngoài hiên. Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgôi nhà vắng lặng\nGió đưa êm đềm. Hoa cam, hoa khế\nChín lặng trong vườn\nBà mơ tay cháu\nQuạt đầy hương thơm."
      }
  },
  'tv-g2-b1': {
      "lessonId": "tv-g2-b1",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          10,
          11,
          12
      ],
      "sourceHash": "8cb13208a42f5f05dbd836743dcf4d8ab1b61de9ffa3f992e572a1ba670f8546",
      "readingPassage": {
          "title": "Tôi là học sinh lớp 2",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tôi là học sinh lớp 2\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 10–12).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi là học sinh lớp 2\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              10,
              11,
              12
          ],
          "sourceHash": "8cb13208a42f5f05dbd836743dcf4d8ab1b61de9ffa3f992e572a1ba670f8546",
          "audioNarration": "Bài đọc: Tôi là học sinh lớp 2. Tác giả: Hải Nam. Bài đọc: Tôi là học sinh lớp 2\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 10–12). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi là học sinh lớp 2\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b10': {
      "lessonId": "tv-g2-b10",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          43,
          44,
          45,
          46,
          47
      ],
      "sourceHash": "38b4f8580828367f786863806dfe5663ea6a6d3207b617e8869521be7a939db1",
      "readingPassage": {
          "title": "Thời khoá biểu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thời khoá biểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 43–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thời khoá biểu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45,
              46,
              47
          ],
          "sourceHash": "38b4f8580828367f786863806dfe5663ea6a6d3207b617e8869521be7a939db1",
          "audioNarration": "Bài đọc: Thời khoá biểu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thời khoá biểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 43–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thời khoá biểu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b11': {
      "lessonId": "tv-g2-b11",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "9edb6a3cd9133e04af3d8fa40224df2eb28ef8f7ddc4244e8ac74762505bad34",
      "readingPassage": {
          "title": "Cái trống trường em",
          "author": "Thanh Hào",
          "genre": "poem",
          "content": [
              "Bài thơ: Cái trống trường em\nTác giả: Thanh Hào\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 48–50).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Cái trống trường em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "9edb6a3cd9133e04af3d8fa40224df2eb28ef8f7ddc4244e8ac74762505bad34",
          "audioNarration": "Bài đọc: Cái trống trường em. Tác giả: Thanh Hào. Bài thơ: Cái trống trường em\nTác giả: Thanh Hào\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 48–50). Đọc thuộc lòng và diễn cảm bài thơ \"Cái trống trường em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b12': {
      "lessonId": "tv-g2-b12",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          51,
          52,
          53,
          54
      ],
      "sourceHash": "743be3719589ca203643f3762ac18b525278f5ff844bc82f4fc5ae9b3eab54a6",
      "readingPassage": {
          "title": "Danh sách học sinh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Danh sách học sinh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 51–54).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh sách học sinh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54
          ],
          "sourceHash": "743be3719589ca203643f3762ac18b525278f5ff844bc82f4fc5ae9b3eab54a6",
          "audioNarration": "Bài đọc: Danh sách học sinh. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Danh sách học sinh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 51–54). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh sách học sinh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b13': {
      "lessonId": "tv-g2-b13",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          55,
          56,
          57
      ],
      "sourceHash": "911f7970469888bea43b338353db0834e664309063c1936c4c08accd3bc9ff36",
      "readingPassage": {
          "title": "Yêu lắm trường ơi!",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng.",
              "Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui.",
              "Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              55,
              56,
              57
          ],
          "sourceHash": "911f7970469888bea43b338353db0834e664309063c1936c4c08accd3bc9ff36",
          "audioNarration": "Bài đọc: Yêu lắm trường ơi!. Tác giả: Nguyễn Trọng Hoàn. Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng. Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui. Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
      }
  },
  'tv-g2-b14': {
      "lessonId": "tv-g2-b14",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          58,
          59,
          60,
          61,
          62
      ],
      "sourceHash": "c29591bd15a347d740bdcc36c688faa7004fa00fd34db90dcb5fd949e3250daa",
      "readingPassage": {
          "title": "Em học vẽ",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Bài thơ: Em học vẽ\nTác giả: Phan Thị Thanh Nhàn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 58–62).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Em học vẽ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              58,
              59,
              60,
              61,
              62
          ],
          "sourceHash": "c29591bd15a347d740bdcc36c688faa7004fa00fd34db90dcb5fd949e3250daa",
          "audioNarration": "Bài đọc: Em học vẽ. Tác giả: Phan Thị Thanh Nhàn. Bài thơ: Em học vẽ\nTác giả: Phan Thị Thanh Nhàn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 58–62). Đọc thuộc lòng và diễn cảm bài thơ \"Em học vẽ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b15': {
      "lessonId": "tv-g2-b15",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          63,
          64,
          65
      ],
      "sourceHash": "97569d43c615375736fde0a5d6c1d877ced99ac3e6e5c065af959da00ae59965",
      "readingPassage": {
          "title": "Cuốn sách của em",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cuốn sách của em\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 63–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuốn sách của em\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              63,
              64,
              65
          ],
          "sourceHash": "97569d43c615375736fde0a5d6c1d877ced99ac3e6e5c065af959da00ae59965",
          "audioNarration": "Bài đọc: Cuốn sách của em. Tác giả: Hải Nam. Bài đọc: Cuốn sách của em\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 63–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuốn sách của em\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b16': {
      "lessonId": "tv-g2-b16",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78
      ],
      "sourceHash": "f06704a1edd77a595c0779572886c0e5db4698ff161eb416984ce875507150ea",
      "readingPassage": {
          "title": "Khi trang sách mở ra",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Khi trang sách mở ra\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 66–78).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Khi trang sách mở ra\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78
          ],
          "sourceHash": "f06704a1edd77a595c0779572886c0e5db4698ff161eb416984ce875507150ea",
          "audioNarration": "Bài đọc: Khi trang sách mở ra. Tác giả: Định Hải. Bài thơ: Khi trang sách mở ra\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 66–78). Đọc thuộc lòng và diễn cảm bài thơ \"Khi trang sách mở ra\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b17': {
      "lessonId": "tv-g2-b17",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          79,
          80,
          81
      ],
      "sourceHash": "094451d88425b0c9ab24a9f7c87a41b1b4531fff3f07bebc54c4cb57f8752578",
      "readingPassage": {
          "title": "Gọi bạn",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Gọi bạn\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 79–81).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Gọi bạn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              79,
              80,
              81
          ],
          "sourceHash": "094451d88425b0c9ab24a9f7c87a41b1b4531fff3f07bebc54c4cb57f8752578",
          "audioNarration": "Bài đọc: Gọi bạn. Tác giả: Định Hải. Bài thơ: Gọi bạn\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 79–81). Đọc thuộc lòng và diễn cảm bài thơ \"Gọi bạn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b18': {
      "lessonId": "tv-g2-b18",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          82,
          83,
          84,
          85
      ],
      "sourceHash": "1da1b793ad13c7b3ea57581076da0b6df034a7d839f5c543c5dceac2881a82c4",
      "readingPassage": {
          "title": "Tớ nhớ cậu",
          "author": "Theo Truyện thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Tớ nhớ cậu\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 82–85).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ nhớ cậu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              82,
              83,
              84,
              85
          ],
          "sourceHash": "1da1b793ad13c7b3ea57581076da0b6df034a7d839f5c543c5dceac2881a82c4",
          "audioNarration": "Bài đọc: Tớ nhớ cậu. Tác giả: Theo Truyện thiếu nhi. Bài đọc: Tớ nhớ cậu\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 82–85). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ nhớ cậu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b19': {
      "lessonId": "tv-g2-b19",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          9,
          10,
          11
      ],
      "sourceHash": "a069f6060b874780bbef28071469fdd66f4c261bb24e3aa982e04cecc6e786c9",
      "readingPassage": {
          "title": "Chuyện bốn mùa",
          "author": "Theo Hoàng Anh Tú",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyện bốn mùa\nTác giả: Theo Hoàng Anh Tú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 9–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bốn mùa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              9,
              10,
              11
          ],
          "sourceHash": "a069f6060b874780bbef28071469fdd66f4c261bb24e3aa982e04cecc6e786c9",
          "audioNarration": "Bài đọc: Chuyện bốn mùa. Tác giả: Theo Hoàng Anh Tú. Bài đọc: Chuyện bốn mùa\nTác giả: Theo Hoàng Anh Tú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 9–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bốn mùa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b2': {
      "lessonId": "tv-g2-b2",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "cec3de02aa54181364f6f04bf8be6e6c7ef3d3e09f55355b04f23a0a9de6e6a5",
      "readingPassage": {
          "title": "Ngày hôm qua đâu rồi?",
          "author": "Bế Kiến Quốc",
          "genre": "poem",
          "content": [
              "Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông.",
              "Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn.",
              "Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ.",
              "– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
              "– Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "cec3de02aa54181364f6f04bf8be6e6c7ef3d3e09f55355b04f23a0a9de6e6a5",
          "audioNarration": "Bài đọc: Ngày hôm qua đâu rồi?. Tác giả: Bế Kiến Quốc. Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông. Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn. Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ. – Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong. – Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
      }
  },
  'tv-g2-b20': {
      "lessonId": "tv-g2-b20",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "16e5aca8aea70eba11eebec6917f5db0878e3520c5a24ef7116218f1cd1e8a2f",
      "readingPassage": {
          "title": "Mùa nước nổi",
          "author": "Bế Kiến Quốc",
          "genre": "poem",
          "content": [
              "Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông.",
              "Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn.",
              "Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ.",
              "– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
              "– Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "16e5aca8aea70eba11eebec6917f5db0878e3520c5a24ef7116218f1cd1e8a2f",
          "audioNarration": "Bài đọc: Mùa nước nổi. Tác giả: Bế Kiến Quốc. Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông. Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn. Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ. – Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong. – Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
      }
  },
  'tv-g2-b21': {
      "lessonId": "tv-g2-b21",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          16,
          17,
          18
      ],
      "sourceHash": "9d051d388b09e3f6e74a6cecd6925ab741484ffbc2d2d9fbec8324f1f2d874dd",
      "readingPassage": {
          "title": "Hoa mi hót",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hoa mi hót\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 16–18).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa mi hót\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18
          ],
          "sourceHash": "9d051d388b09e3f6e74a6cecd6925ab741484ffbc2d2d9fbec8324f1f2d874dd",
          "audioNarration": "Bài đọc: Hoa mi hót. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hoa mi hót\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 16–18). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa mi hót\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b22': {
      "lessonId": "tv-g2-b22",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          19,
          20,
          21,
          22
      ],
      "sourceHash": "54e4cfbf51afe16b0e522e0f6d81b4b69bf8755ad30cea5eb7c5a8d70b120c5d",
      "readingPassage": {
          "title": "Tết đến rồi",
          "author": "Theo Mai Chi",
          "genre": "prose",
          "content": [
              "Bài đọc: Tết đến rồi\nTác giả: Theo Mai Chi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 19–22).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tết đến rồi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              19,
              20,
              21,
              22
          ],
          "sourceHash": "54e4cfbf51afe16b0e522e0f6d81b4b69bf8755ad30cea5eb7c5a8d70b120c5d",
          "audioNarration": "Bài đọc: Tết đến rồi. Tác giả: Theo Mai Chi. Bài đọc: Tết đến rồi\nTác giả: Theo Mai Chi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 19–22). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tết đến rồi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b23': {
      "lessonId": "tv-g2-b23",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          23,
          24,
          25
      ],
      "sourceHash": "ccb9735e804fe76b11ad021fd46247e8875ca7097536c1dfb95acc012134052e",
      "readingPassage": {
          "title": "Giọt nước và biển lớn",
          "author": "Theo Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Giọt nước và biển lớn\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 23–25).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giọt nước và biển lớn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25
          ],
          "sourceHash": "ccb9735e804fe76b11ad021fd46247e8875ca7097536c1dfb95acc012134052e",
          "audioNarration": "Bài đọc: Giọt nước và biển lớn. Tác giả: Theo Truyện ngụ ngôn. Bài đọc: Giọt nước và biển lớn\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 23–25). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giọt nước và biển lớn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b24': {
      "lessonId": "tv-g2-b24",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          26,
          27,
          28,
          29,
          30
      ],
      "sourceHash": "5dd4751810228c767c1a0d2459ac480bf71e03a992b17bda88cd1fb66efdad2b",
      "readingPassage": {
          "title": "Mùa vàng",
          "author": "Nguyễn Viết Bình",
          "genre": "poem",
          "content": [
              "Bài thơ: Mùa vàng\nTác giả: Nguyễn Viết Bình\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 26–30).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Mùa vàng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29,
              30
          ],
          "sourceHash": "5dd4751810228c767c1a0d2459ac480bf71e03a992b17bda88cd1fb66efdad2b",
          "audioNarration": "Bài đọc: Mùa vàng. Tác giả: Nguyễn Viết Bình. Bài thơ: Mùa vàng\nTác giả: Nguyễn Viết Bình\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 26–30). Đọc thuộc lòng và diễn cảm bài thơ \"Mùa vàng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b25': {
      "lessonId": "tv-g2-b25",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          31,
          32,
          33
      ],
      "sourceHash": "29c26f38ae74d6e07bd9b7c1496456041552845deb656d11f6c03f919caa0ee4",
      "readingPassage": {
          "title": "Hạt thóc",
          "author": "Quang Huy",
          "genre": "poem",
          "content": [
              "Bài thơ: Hạt thóc\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 31–33).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Hạt thóc\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33
          ],
          "sourceHash": "29c26f38ae74d6e07bd9b7c1496456041552845deb656d11f6c03f919caa0ee4",
          "audioNarration": "Bài đọc: Hạt thóc. Tác giả: Quang Huy. Bài thơ: Hạt thóc\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 31–33). Đọc thuộc lòng và diễn cảm bài thơ \"Hạt thóc\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b26': {
      "lessonId": "tv-g2-b26",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38
      ],
      "sourceHash": "15657d038b1e21cf15c98624666cc5dcba5e6829a46052011d09aeecb457661d",
      "readingPassage": {
          "title": "Luỹ tre",
          "author": "Nguyễn Công Dương",
          "genre": "poem",
          "content": [
              "Bài thơ: Luỹ tre\nTác giả: Nguyễn Công Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 34–38).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Luỹ tre\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38
          ],
          "sourceHash": "15657d038b1e21cf15c98624666cc5dcba5e6829a46052011d09aeecb457661d",
          "audioNarration": "Bài đọc: Luỹ tre. Tác giả: Nguyễn Công Dương. Bài thơ: Luỹ tre\nTác giả: Nguyễn Công Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 34–38). Đọc thuộc lòng và diễn cảm bài thơ \"Luỹ tre\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b27': {
      "lessonId": "tv-g2-b27",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          39,
          40,
          41
      ],
      "sourceHash": "77e7b28fa28303fed68d7e4ec2b3ca2cd286fd3c0313c90deed8ba65c02e1825",
      "readingPassage": {
          "title": "Vè chim",
          "author": "Nguyễn Xuân Sanh",
          "genre": "poem",
          "content": [
              "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
              "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
              "Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              39,
              40,
              41
          ],
          "sourceHash": "77e7b28fa28303fed68d7e4ec2b3ca2cd286fd3c0313c90deed8ba65c02e1825",
          "audioNarration": "Bài đọc: Vè chim. Tác giả: Nguyễn Xuân Sanh. Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi. Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài. Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
      }
  },
  'tv-g2-b28': {
      "lessonId": "tv-g2-b28",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          42,
          43,
          44,
          45
      ],
      "sourceHash": "8fdafd80005f739711c9bbede4bda45c53e2cbe76ab1a20156e39250718c07ec",
      "readingPassage": {
          "title": "Khủng long",
          "author": "Khám phá thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Khủng long\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 42–45).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khủng long\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              42,
              43,
              44,
              45
          ],
          "sourceHash": "8fdafd80005f739711c9bbede4bda45c53e2cbe76ab1a20156e39250718c07ec",
          "audioNarration": "Bài đọc: Khủng long. Tác giả: Khám phá thế giới. Bài đọc: Khủng long\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 42–45). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khủng long\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b29': {
      "lessonId": "tv-g2-b29",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          46,
          47,
          48
      ],
      "sourceHash": "d1264912ac90d7e5750d7c4fa2d3fe342a48485cf29034e2899d25a8cad0c077",
      "readingPassage": {
          "title": "Sự tích cây thì là",
          "author": "Truyện cổ tích Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích cây thì là\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 46–48).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích cây thì là\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48
          ],
          "sourceHash": "d1264912ac90d7e5750d7c4fa2d3fe342a48485cf29034e2899d25a8cad0c077",
          "audioNarration": "Bài đọc: Sự tích cây thì là. Tác giả: Truyện cổ tích Việt Nam. Bài đọc: Sự tích cây thì là\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 46–48). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích cây thì là\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b3': {
      "lessonId": "tv-g2-b3",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          17,
          18,
          19
      ],
      "sourceHash": "d214fd14218687b988e7c72c5c858930e49a2f75edcf71ff8d277e4e3a4d54f8",
      "readingPassage": {
          "title": "Niềm vui của Bi và Bống",
          "author": "Phương Thảo",
          "genre": "prose",
          "content": [
              "Bài đọc: Niềm vui của Bi và Bống\nTác giả: Phương Thảo\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 17–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Niềm vui của Bi và Bống\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19
          ],
          "sourceHash": "d214fd14218687b988e7c72c5c858930e49a2f75edcf71ff8d277e4e3a4d54f8",
          "audioNarration": "Bài đọc: Niềm vui của Bi và Bống. Tác giả: Phương Thảo. Bài đọc: Niềm vui của Bi và Bống\nTác giả: Phương Thảo\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 17–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Niềm vui của Bi và Bống\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b30': {
      "lessonId": "tv-g2-b30",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          49,
          50,
          51,
          52,
          53
      ],
      "sourceHash": "3e1639982e2776ea206c488fcca383ccafb8b03de95b4deed33a0697d4e399de",
      "readingPassage": {
          "title": "Bờ tre đón khách",
          "author": "Võ Quảng",
          "genre": "poem",
          "content": [
              "Bài thơ: Bờ tre đón khách\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 49–53).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bờ tre đón khách\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              49,
              50,
              51,
              52,
              53
          ],
          "sourceHash": "3e1639982e2776ea206c488fcca383ccafb8b03de95b4deed33a0697d4e399de",
          "audioNarration": "Bài đọc: Bờ tre đón khách. Tác giả: Võ Quảng. Bài thơ: Bờ tre đón khách\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 49–53). Đọc thuộc lòng và diễn cảm bài thơ \"Bờ tre đón khách\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-b4': {
      "lessonId": "tv-g2-b4",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          20,
          21,
          22,
          23
      ],
      "sourceHash": "045ab2083965bba36b2fb66406189d10869c4dc66814551fdeff9bfabf9ce2ac",
      "readingPassage": {
          "title": "Làm việc thật là vui",
          "author": "Tô Hoài",
          "genre": "prose",
          "content": [
              "Bài đọc: Làm việc thật là vui\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 20–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm việc thật là vui\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22,
              23
          ],
          "sourceHash": "045ab2083965bba36b2fb66406189d10869c4dc66814551fdeff9bfabf9ce2ac",
          "audioNarration": "Bài đọc: Làm việc thật là vui. Tác giả: Tô Hoài. Bài đọc: Làm việc thật là vui\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 20–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm việc thật là vui\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b5': {
      "lessonId": "tv-g2-b5",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          24,
          25,
          26
      ],
      "sourceHash": "2e4b0f28b46ee7e5dfa41a7d9f293ef92919848e201e91a41402878d6e2fb539",
      "readingPassage": {
          "title": "Em có xinh không?",
          "author": "Theo Voi con tìm bạn",
          "genre": "prose",
          "content": [
              "Bài đọc: Em có xinh không?\nTác giả: Theo Voi con tìm bạn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 24–26).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Em có xinh không?\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26
          ],
          "sourceHash": "2e4b0f28b46ee7e5dfa41a7d9f293ef92919848e201e91a41402878d6e2fb539",
          "audioNarration": "Bài đọc: Em có xinh không?. Tác giả: Theo Voi con tìm bạn. Bài đọc: Em có xinh không?\nTác giả: Theo Voi con tìm bạn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 24–26). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Em có xinh không?\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b6': {
      "lessonId": "tv-g2-b6",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          27,
          28,
          29,
          30
      ],
      "sourceHash": "93edce4b9b680d779849e3b31394f7054618376797476368b9b122d7cc70f1e4",
      "readingPassage": {
          "title": "Một giờ học",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Một giờ học\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 27–30).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một giờ học\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              27,
              28,
              29,
              30
          ],
          "sourceHash": "93edce4b9b680d779849e3b31394f7054618376797476368b9b122d7cc70f1e4",
          "audioNarration": "Bài đọc: Một giờ học. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Một giờ học\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 27–30). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một giờ học\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b7': {
      "lessonId": "tv-g2-b7",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          31,
          32,
          33
      ],
      "sourceHash": "f9de3a55e3f971ddfe0155600e01fb9cffded7335127d5f4d4b42a326eec9844",
      "readingPassage": {
          "title": "Cây xấu hổ",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Cây xấu hổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 31–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây xấu hổ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33
          ],
          "sourceHash": "f9de3a55e3f971ddfe0155600e01fb9cffded7335127d5f4d4b42a326eec9844",
          "audioNarration": "Bài đọc: Cây xấu hổ. Tác giả: Trần Hoài Dương. Bài đọc: Cây xấu hổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 31–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây xấu hổ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b8': {
      "lessonId": "tv-g2-b8",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "03d889d76a9ee584d8cf17092230cbe2caed91e9b4cfa22cf92772df4827ebba",
      "readingPassage": {
          "title": "Cầu thủ dự bị",
          "author": "Minh Khang",
          "genre": "prose",
          "content": [
              "Bài đọc: Cầu thủ dự bị\nTác giả: Minh Khang\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 34–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cầu thủ dự bị\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "03d889d76a9ee584d8cf17092230cbe2caed91e9b4cfa22cf92772df4827ebba",
          "audioNarration": "Bài đọc: Cầu thủ dự bị. Tác giả: Minh Khang. Bài đọc: Cầu thủ dự bị\nTác giả: Minh Khang\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 34–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cầu thủ dự bị\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-b9': {
      "lessonId": "tv-g2-b9",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          40,
          41,
          42
      ],
      "sourceHash": "9ee761a364d0d3379a221764801de381a0891f64cfc5ab55fe312d9d80d7abf6",
      "readingPassage": {
          "title": "Cô giáo lớp em",
          "author": "Nguyễn Xuân Sanh",
          "genre": "poem",
          "content": [
              "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
              "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
              "Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42
          ],
          "sourceHash": "9ee761a364d0d3379a221764801de381a0891f64cfc5ab55fe312d9d80d7abf6",
          "audioNarration": "Bài đọc: Cô giáo lớp em. Tác giả: Nguyễn Xuân Sanh. Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi. Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài. Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
      }
  },
  'tv-g2-t1-b1': {
      "lessonId": "tv-g2-b1",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          10,
          11,
          12
      ],
      "sourceHash": "8cb13208a42f5f05dbd836743dcf4d8ab1b61de9ffa3f992e572a1ba670f8546",
      "readingPassage": {
          "title": "Tôi là học sinh lớp 2",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tôi là học sinh lớp 2\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 10–12).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi là học sinh lớp 2\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              10,
              11,
              12
          ],
          "sourceHash": "8cb13208a42f5f05dbd836743dcf4d8ab1b61de9ffa3f992e572a1ba670f8546",
          "audioNarration": "Bài đọc: Tôi là học sinh lớp 2. Tác giả: Hải Nam. Bài đọc: Tôi là học sinh lớp 2\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 10–12). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tôi là học sinh lớp 2\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b10': {
      "lessonId": "tv-g2-b10",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          43,
          44,
          45,
          46,
          47
      ],
      "sourceHash": "38b4f8580828367f786863806dfe5663ea6a6d3207b617e8869521be7a939db1",
      "readingPassage": {
          "title": "Thời khoá biểu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thời khoá biểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 43–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thời khoá biểu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45,
              46,
              47
          ],
          "sourceHash": "38b4f8580828367f786863806dfe5663ea6a6d3207b617e8869521be7a939db1",
          "audioNarration": "Bài đọc: Thời khoá biểu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thời khoá biểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 43–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thời khoá biểu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b11': {
      "lessonId": "tv-g2-b11",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "9edb6a3cd9133e04af3d8fa40224df2eb28ef8f7ddc4244e8ac74762505bad34",
      "readingPassage": {
          "title": "Cái trống trường em",
          "author": "Thanh Hào",
          "genre": "poem",
          "content": [
              "Bài thơ: Cái trống trường em\nTác giả: Thanh Hào\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 48–50).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Cái trống trường em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "9edb6a3cd9133e04af3d8fa40224df2eb28ef8f7ddc4244e8ac74762505bad34",
          "audioNarration": "Bài đọc: Cái trống trường em. Tác giả: Thanh Hào. Bài thơ: Cái trống trường em\nTác giả: Thanh Hào\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 48–50). Đọc thuộc lòng và diễn cảm bài thơ \"Cái trống trường em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b12': {
      "lessonId": "tv-g2-b12",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          51,
          52,
          53,
          54
      ],
      "sourceHash": "743be3719589ca203643f3762ac18b525278f5ff844bc82f4fc5ae9b3eab54a6",
      "readingPassage": {
          "title": "Danh sách học sinh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Danh sách học sinh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 51–54).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh sách học sinh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54
          ],
          "sourceHash": "743be3719589ca203643f3762ac18b525278f5ff844bc82f4fc5ae9b3eab54a6",
          "audioNarration": "Bài đọc: Danh sách học sinh. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Danh sách học sinh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 51–54). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh sách học sinh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b13': {
      "lessonId": "tv-g2-b13",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          55,
          56,
          57
      ],
      "sourceHash": "911f7970469888bea43b338353db0834e664309063c1936c4c08accd3bc9ff36",
      "readingPassage": {
          "title": "Yêu lắm trường ơi!",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng.",
              "Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui.",
              "Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              55,
              56,
              57
          ],
          "sourceHash": "911f7970469888bea43b338353db0834e664309063c1936c4c08accd3bc9ff36",
          "audioNarration": "Bài đọc: Yêu lắm trường ơi!. Tác giả: Nguyễn Trọng Hoàn. Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng. Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui. Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
      }
  },
  'tv-g2-t1-b14': {
      "lessonId": "tv-g2-b14",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          58,
          59,
          60,
          61,
          62
      ],
      "sourceHash": "c29591bd15a347d740bdcc36c688faa7004fa00fd34db90dcb5fd949e3250daa",
      "readingPassage": {
          "title": "Em học vẽ",
          "author": "Phan Thị Thanh Nhàn",
          "genre": "poem",
          "content": [
              "Bài thơ: Em học vẽ\nTác giả: Phan Thị Thanh Nhàn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 58–62).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Em học vẽ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              58,
              59,
              60,
              61,
              62
          ],
          "sourceHash": "c29591bd15a347d740bdcc36c688faa7004fa00fd34db90dcb5fd949e3250daa",
          "audioNarration": "Bài đọc: Em học vẽ. Tác giả: Phan Thị Thanh Nhàn. Bài thơ: Em học vẽ\nTác giả: Phan Thị Thanh Nhàn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 58–62). Đọc thuộc lòng và diễn cảm bài thơ \"Em học vẽ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b15': {
      "lessonId": "tv-g2-b15",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          63,
          64,
          65
      ],
      "sourceHash": "97569d43c615375736fde0a5d6c1d877ced99ac3e6e5c065af959da00ae59965",
      "readingPassage": {
          "title": "Cuốn sách của em",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cuốn sách của em\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 63–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuốn sách của em\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              63,
              64,
              65
          ],
          "sourceHash": "97569d43c615375736fde0a5d6c1d877ced99ac3e6e5c065af959da00ae59965",
          "audioNarration": "Bài đọc: Cuốn sách của em. Tác giả: Hải Nam. Bài đọc: Cuốn sách của em\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 63–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuốn sách của em\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b16': {
      "lessonId": "tv-g2-b16",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78
      ],
      "sourceHash": "f06704a1edd77a595c0779572886c0e5db4698ff161eb416984ce875507150ea",
      "readingPassage": {
          "title": "Khi trang sách mở ra",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Khi trang sách mở ra\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 66–78).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Khi trang sách mở ra\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78
          ],
          "sourceHash": "f06704a1edd77a595c0779572886c0e5db4698ff161eb416984ce875507150ea",
          "audioNarration": "Bài đọc: Khi trang sách mở ra. Tác giả: Định Hải. Bài thơ: Khi trang sách mở ra\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 66–78). Đọc thuộc lòng và diễn cảm bài thơ \"Khi trang sách mở ra\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b17': {
      "lessonId": "tv-g2-b17",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          79,
          80,
          81
      ],
      "sourceHash": "094451d88425b0c9ab24a9f7c87a41b1b4531fff3f07bebc54c4cb57f8752578",
      "readingPassage": {
          "title": "Gọi bạn",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Gọi bạn\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 79–81).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Gọi bạn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              79,
              80,
              81
          ],
          "sourceHash": "094451d88425b0c9ab24a9f7c87a41b1b4531fff3f07bebc54c4cb57f8752578",
          "audioNarration": "Bài đọc: Gọi bạn. Tác giả: Định Hải. Bài thơ: Gọi bạn\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 79–81). Đọc thuộc lòng và diễn cảm bài thơ \"Gọi bạn\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b18': {
      "lessonId": "tv-g2-b18",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          82,
          83,
          84,
          85
      ],
      "sourceHash": "1da1b793ad13c7b3ea57581076da0b6df034a7d839f5c543c5dceac2881a82c4",
      "readingPassage": {
          "title": "Tớ nhớ cậu",
          "author": "Theo Truyện thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Tớ nhớ cậu\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 82–85).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ nhớ cậu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              82,
              83,
              84,
              85
          ],
          "sourceHash": "1da1b793ad13c7b3ea57581076da0b6df034a7d839f5c543c5dceac2881a82c4",
          "audioNarration": "Bài đọc: Tớ nhớ cậu. Tác giả: Theo Truyện thiếu nhi. Bài đọc: Tớ nhớ cậu\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 82–85). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ nhớ cậu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b19': {
      "lessonId": "tv-g2-t1-b19",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          86,
          87,
          88
      ],
      "sourceHash": "fa5a689265c67a360e5a4ac17bb755f6a6e5d1711a081c046e5cecc2c600fa8e",
      "readingPassage": {
          "title": "Chữ A và những người bạn",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Chữ A và những người bạn\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 86–88).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chữ A và những người bạn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              86,
              87,
              88
          ],
          "sourceHash": "fa5a689265c67a360e5a4ac17bb755f6a6e5d1711a081c046e5cecc2c600fa8e",
          "audioNarration": "Bài đọc: Chữ A và những người bạn. Tác giả: Trần Hoài Dương. Bài đọc: Chữ A và những người bạn\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 86–88). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chữ A và những người bạn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b2': {
      "lessonId": "tv-g2-b2",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "cec3de02aa54181364f6f04bf8be6e6c7ef3d3e09f55355b04f23a0a9de6e6a5",
      "readingPassage": {
          "title": "Ngày hôm qua đâu rồi?",
          "author": "Bế Kiến Quốc",
          "genre": "poem",
          "content": [
              "Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông.",
              "Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn.",
              "Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ.",
              "– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
              "– Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "cec3de02aa54181364f6f04bf8be6e6c7ef3d3e09f55355b04f23a0a9de6e6a5",
          "audioNarration": "Bài đọc: Ngày hôm qua đâu rồi?. Tác giả: Bế Kiến Quốc. Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông. Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn. Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ. – Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong. – Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
      }
  },
  'tv-g2-t1-b20': {
      "lessonId": "tv-g2-t1-b20",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          89,
          90,
          91,
          92,
          93
      ],
      "sourceHash": "9aafec25f22685a889f332c42a24370ad725d1f27ddf6216f1dec7d989d84020",
      "readingPassage": {
          "title": "Nhím nâu kết bạn",
          "author": "Theo Truyện đồng thoại",
          "genre": "prose",
          "content": [
              "Bài đọc: Nhím nâu kết bạn\nTác giả: Theo Truyện đồng thoại\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 89–93).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nhím nâu kết bạn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              89,
              90,
              91,
              92,
              93
          ],
          "sourceHash": "9aafec25f22685a889f332c42a24370ad725d1f27ddf6216f1dec7d989d84020",
          "audioNarration": "Bài đọc: Nhím nâu kết bạn. Tác giả: Theo Truyện đồng thoại. Bài đọc: Nhím nâu kết bạn\nTác giả: Theo Truyện đồng thoại\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 89–93). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nhím nâu kết bạn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b21': {
      "lessonId": "tv-g2-t1-b21",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          94,
          95,
          96
      ],
      "sourceHash": "b30006dcf41e1f4135a74a96d046ff517340a37eb6139c8fa7fa91e52d1d4023",
      "readingPassage": {
          "title": "Thả diều",
          "author": "Trần Đăng Khoa",
          "genre": "poem",
          "content": [
              "Bài thơ: Thả diều\nTác giả: Trần Đăng Khoa\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 94–96).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Thả diều\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              94,
              95,
              96
          ],
          "sourceHash": "b30006dcf41e1f4135a74a96d046ff517340a37eb6139c8fa7fa91e52d1d4023",
          "audioNarration": "Bài đọc: Thả diều. Tác giả: Trần Đăng Khoa. Bài thơ: Thả diều\nTác giả: Trần Đăng Khoa\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 94–96). Đọc thuộc lòng và diễn cảm bài thơ \"Thả diều\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b22': {
      "lessonId": "tv-g2-t1-b22",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          97,
          98,
          99,
          100
      ],
      "sourceHash": "bd8360f6804864da285ad27dc1adc082ccbab3d0e59adfbd7639fcabd26a0941",
      "readingPassage": {
          "title": "Tớ là lê-gô",
          "author": "Đồ chơi tuổi thơ",
          "genre": "prose",
          "content": [
              "Bài đọc: Tớ là lê-gô\nTác giả: Đồ chơi tuổi thơ\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 97–100).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ là lê-gô\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              97,
              98,
              99,
              100
          ],
          "sourceHash": "bd8360f6804864da285ad27dc1adc082ccbab3d0e59adfbd7639fcabd26a0941",
          "audioNarration": "Bài đọc: Tớ là lê-gô. Tác giả: Đồ chơi tuổi thơ. Bài đọc: Tớ là lê-gô\nTác giả: Đồ chơi tuổi thơ\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 97–100). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tớ là lê-gô\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b23': {
      "lessonId": "tv-g2-t1-b23",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          101,
          102,
          103
      ],
      "sourceHash": "bc1d056bf9f612f7efd4651f8783f0565760e3f9666338e77767aea71c4f2833",
      "readingPassage": {
          "title": "Rồng rắn lên mây",
          "author": "Trò chơi dân gian",
          "genre": "poem",
          "content": [
              "Bài thơ: Rồng rắn lên mây\nTác giả: Trò chơi dân gian\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 101–103).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Rồng rắn lên mây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              101,
              102,
              103
          ],
          "sourceHash": "bc1d056bf9f612f7efd4651f8783f0565760e3f9666338e77767aea71c4f2833",
          "audioNarration": "Bài đọc: Rồng rắn lên mây. Tác giả: Trò chơi dân gian. Bài thơ: Rồng rắn lên mây\nTác giả: Trò chơi dân gian\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 101–103). Đọc thuộc lòng và diễn cảm bài thơ \"Rồng rắn lên mây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b24': {
      "lessonId": "tv-g2-t1-b24",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          104,
          105,
          106,
          107,
          108
      ],
      "sourceHash": "ddf9a277c42c747b62724bc3e7ef199e7ef0f35d21b5be5787700d83dbf44120",
      "readingPassage": {
          "title": "Nặn đồ chơi",
          "author": "Nông Quốc Chấn",
          "genre": "poem",
          "content": [
              "Bài thơ: Nặn đồ chơi\nTác giả: Nông Quốc Chấn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 104–108).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Nặn đồ chơi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              104,
              105,
              106,
              107,
              108
          ],
          "sourceHash": "ddf9a277c42c747b62724bc3e7ef199e7ef0f35d21b5be5787700d83dbf44120",
          "audioNarration": "Bài đọc: Nặn đồ chơi. Tác giả: Nông Quốc Chấn. Bài thơ: Nặn đồ chơi\nTác giả: Nông Quốc Chấn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 104–108). Đọc thuộc lòng và diễn cảm bài thơ \"Nặn đồ chơi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b25': {
      "lessonId": "tv-g2-t1-b25",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          109,
          110,
          111
      ],
      "sourceHash": "997306142314f635f4e864702bb61bfdb2d09d3af1f9e0dec083f8b7be27b79b",
      "readingPassage": {
          "title": "Sự tích hoa tỉ muội",
          "author": "Truyện cổ tích",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích hoa tỉ muội\nTác giả: Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 109–111).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích hoa tỉ muội\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              109,
              110,
              111
          ],
          "sourceHash": "997306142314f635f4e864702bb61bfdb2d09d3af1f9e0dec083f8b7be27b79b",
          "audioNarration": "Bài đọc: Sự tích hoa tỉ muội. Tác giả: Truyện cổ tích. Bài đọc: Sự tích hoa tỉ muội\nTác giả: Truyện cổ tích\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 109–111). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích hoa tỉ muội\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b26': {
      "lessonId": "tv-g2-t1-b26",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          112,
          113,
          114,
          115
      ],
      "sourceHash": "aae0d08e5df908d30ecd36d51d0b9a2a8517cd0cc1e5c869caad3cccc1306041",
      "readingPassage": {
          "title": "Em mang về yêu thương",
          "author": "Minh Quyên",
          "genre": "poem",
          "content": [
              "Bài thơ: Em mang về yêu thương\nTác giả: Minh Quyên\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 112–115).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Em mang về yêu thương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              112,
              113,
              114,
              115
          ],
          "sourceHash": "aae0d08e5df908d30ecd36d51d0b9a2a8517cd0cc1e5c869caad3cccc1306041",
          "audioNarration": "Bài đọc: Em mang về yêu thương. Tác giả: Minh Quyên. Bài thơ: Em mang về yêu thương\nTác giả: Minh Quyên\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 112–115). Đọc thuộc lòng và diễn cảm bài thơ \"Em mang về yêu thương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b27': {
      "lessonId": "tv-g2-t1-b27",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          116,
          117,
          118
      ],
      "sourceHash": "9b5300d1c96a50025409f64a62fa66bb9896bc27451800db3501cfbb7fe37bb1",
      "readingPassage": {
          "title": "Mẹ",
          "author": "Trần Quốc Minh",
          "genre": "poem",
          "content": [
              "Lặng rồi cả tiếng con ve\nCon ve cũng mệt vì hè nắng oi.\nNhà em vẫn tiếng ạ ời\nKẽo cà tiếng võng mẹ ngồi mẹ ru.",
              "Lời ru có gió mùa thu\nBàn tay mẹ quạt mẹ đưa gió về.\nNhững ngôi sao thức ngoài kia\nChẳng bằng mẹ đã thức vì chúng con.",
              "Đêm nay con ngủ giấc tròn\nMẹ là ngọn gió của con suốt đời."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              116,
              117,
              118
          ],
          "sourceHash": "9b5300d1c96a50025409f64a62fa66bb9896bc27451800db3501cfbb7fe37bb1",
          "audioNarration": "Bài đọc: Mẹ. Tác giả: Trần Quốc Minh. Lặng rồi cả tiếng con ve\nCon ve cũng mệt vì hè nắng oi.\nNhà em vẫn tiếng ạ ời\nKẽo cà tiếng võng mẹ ngồi mẹ ru. Lời ru có gió mùa thu\nBàn tay mẹ quạt mẹ đưa gió về.\nNhững ngôi sao thức ngoài kia\nChẳng bằng mẹ đã thức vì chúng con. Đêm nay con ngủ giấc tròn\nMẹ là ngọn gió của con suốt đời."
      }
  },
  'tv-g2-t1-b28': {
      "lessonId": "tv-g2-t1-b28",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          119,
          120,
          121,
          122
      ],
      "sourceHash": "f88ad02b455aad7acf220a9844c981cb0208b4bf6df8cb315c008ea9982f5b53",
      "readingPassage": {
          "title": "Trò chơi của bố",
          "author": "Nguyễn Thị Mai",
          "genre": "prose",
          "content": [
              "Bài đọc: Trò chơi của bố\nTác giả: Nguyễn Thị Mai\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 119–122).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trò chơi của bố\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              119,
              120,
              121,
              122
          ],
          "sourceHash": "f88ad02b455aad7acf220a9844c981cb0208b4bf6df8cb315c008ea9982f5b53",
          "audioNarration": "Bài đọc: Trò chơi của bố. Tác giả: Nguyễn Thị Mai. Bài đọc: Trò chơi của bố\nTác giả: Nguyễn Thị Mai\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 119–122). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trò chơi của bố\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b29': {
      "lessonId": "tv-g2-t1-b29",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          123,
          124,
          125
      ],
      "sourceHash": "bb4abfa3191ee5349e4cc6339809ce6b76d1756e7c64e77c65368fb0e0d5ab50",
      "readingPassage": {
          "title": "Cánh cửa nhớ bà",
          "author": "Đoàn Thị Lam Luyến",
          "genre": "poem",
          "content": [
              "Bài thơ: Cánh cửa nhớ bà\nTác giả: Đoàn Thị Lam Luyến\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 123–125).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Cánh cửa nhớ bà\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              123,
              124,
              125
          ],
          "sourceHash": "bb4abfa3191ee5349e4cc6339809ce6b76d1756e7c64e77c65368fb0e0d5ab50",
          "audioNarration": "Bài đọc: Cánh cửa nhớ bà. Tác giả: Đoàn Thị Lam Luyến. Bài thơ: Cánh cửa nhớ bà\nTác giả: Đoàn Thị Lam Luyến\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 123–125). Đọc thuộc lòng và diễn cảm bài thơ \"Cánh cửa nhớ bà\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b3': {
      "lessonId": "tv-g2-b3",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          17,
          18,
          19
      ],
      "sourceHash": "d214fd14218687b988e7c72c5c858930e49a2f75edcf71ff8d277e4e3a4d54f8",
      "readingPassage": {
          "title": "Niềm vui của Bi và Bống",
          "author": "Phương Thảo",
          "genre": "prose",
          "content": [
              "Bài đọc: Niềm vui của Bi và Bống\nTác giả: Phương Thảo\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 17–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Niềm vui của Bi và Bống\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19
          ],
          "sourceHash": "d214fd14218687b988e7c72c5c858930e49a2f75edcf71ff8d277e4e3a4d54f8",
          "audioNarration": "Bài đọc: Niềm vui của Bi và Bống. Tác giả: Phương Thảo. Bài đọc: Niềm vui của Bi và Bống\nTác giả: Phương Thảo\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 17–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Niềm vui của Bi và Bống\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b30': {
      "lessonId": "tv-g2-t1-b30",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          126,
          127,
          128,
          129
      ],
      "sourceHash": "dff1675d30387acb9c4e31ddcfbd30d80e6f109ec71b04820241575fd4a682aa",
      "readingPassage": {
          "title": "Thương ông",
          "author": "Tú Mỡ",
          "genre": "poem",
          "content": [
              "Bài thơ: Thương ông\nTác giả: Tú Mỡ\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 126–129).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Thương ông\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127,
              128,
              129
          ],
          "sourceHash": "dff1675d30387acb9c4e31ddcfbd30d80e6f109ec71b04820241575fd4a682aa",
          "audioNarration": "Bài đọc: Thương ông. Tác giả: Tú Mỡ. Bài thơ: Thương ông\nTác giả: Tú Mỡ\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 126–129). Đọc thuộc lòng và diễn cảm bài thơ \"Thương ông\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b31': {
      "lessonId": "tv-g2-t1-b31",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          130,
          131,
          132
      ],
      "sourceHash": "1f3e3e0386d947839857daf550468496e43bc241309c5e65d869f2c862b70cfc",
      "readingPassage": {
          "title": "Ánh sáng của yêu thương",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Ánh sáng của yêu thương\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 130–132).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ánh sáng của yêu thương\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              130,
              131,
              132
          ],
          "sourceHash": "1f3e3e0386d947839857daf550468496e43bc241309c5e65d869f2c862b70cfc",
          "audioNarration": "Bài đọc: Ánh sáng của yêu thương. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Ánh sáng của yêu thương\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 130–132). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ánh sáng của yêu thương\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b32': {
      "lessonId": "tv-g2-t1-b32",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          133,
          134,
          135,
          136
      ],
      "sourceHash": "83e1e79c8bf8666aea21b3ad6da07decece8735bd84b1d4a42952c7f45489acd",
      "readingPassage": {
          "title": "Chơi chong chóng",
          "author": "Nguyễn Khoa Điềm",
          "genre": "poem",
          "content": [
              "Bài thơ: Chơi chong chóng\nTác giả: Nguyễn Khoa Điềm\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 133–136).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Chơi chong chóng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              133,
              134,
              135,
              136
          ],
          "sourceHash": "83e1e79c8bf8666aea21b3ad6da07decece8735bd84b1d4a42952c7f45489acd",
          "audioNarration": "Bài đọc: Chơi chong chóng. Tác giả: Nguyễn Khoa Điềm. Bài thơ: Chơi chong chóng\nTác giả: Nguyễn Khoa Điềm\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 133–136). Đọc thuộc lòng và diễn cảm bài thơ \"Chơi chong chóng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t1-b4': {
      "lessonId": "tv-g2-b4",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          20,
          21,
          22,
          23
      ],
      "sourceHash": "045ab2083965bba36b2fb66406189d10869c4dc66814551fdeff9bfabf9ce2ac",
      "readingPassage": {
          "title": "Làm việc thật là vui",
          "author": "Tô Hoài",
          "genre": "prose",
          "content": [
              "Bài đọc: Làm việc thật là vui\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 20–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm việc thật là vui\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22,
              23
          ],
          "sourceHash": "045ab2083965bba36b2fb66406189d10869c4dc66814551fdeff9bfabf9ce2ac",
          "audioNarration": "Bài đọc: Làm việc thật là vui. Tác giả: Tô Hoài. Bài đọc: Làm việc thật là vui\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 20–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm việc thật là vui\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b5': {
      "lessonId": "tv-g2-b5",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          24,
          25,
          26
      ],
      "sourceHash": "2e4b0f28b46ee7e5dfa41a7d9f293ef92919848e201e91a41402878d6e2fb539",
      "readingPassage": {
          "title": "Em có xinh không?",
          "author": "Theo Voi con tìm bạn",
          "genre": "prose",
          "content": [
              "Bài đọc: Em có xinh không?\nTác giả: Theo Voi con tìm bạn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 24–26).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Em có xinh không?\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26
          ],
          "sourceHash": "2e4b0f28b46ee7e5dfa41a7d9f293ef92919848e201e91a41402878d6e2fb539",
          "audioNarration": "Bài đọc: Em có xinh không?. Tác giả: Theo Voi con tìm bạn. Bài đọc: Em có xinh không?\nTác giả: Theo Voi con tìm bạn\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 24–26). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Em có xinh không?\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b6': {
      "lessonId": "tv-g2-b6",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          27,
          28,
          29,
          30
      ],
      "sourceHash": "93edce4b9b680d779849e3b31394f7054618376797476368b9b122d7cc70f1e4",
      "readingPassage": {
          "title": "Một giờ học",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Một giờ học\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 27–30).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một giờ học\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              27,
              28,
              29,
              30
          ],
          "sourceHash": "93edce4b9b680d779849e3b31394f7054618376797476368b9b122d7cc70f1e4",
          "audioNarration": "Bài đọc: Một giờ học. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Một giờ học\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 27–30). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một giờ học\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b7': {
      "lessonId": "tv-g2-b7",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          31,
          32,
          33
      ],
      "sourceHash": "f9de3a55e3f971ddfe0155600e01fb9cffded7335127d5f4d4b42a326eec9844",
      "readingPassage": {
          "title": "Cây xấu hổ",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Cây xấu hổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 31–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây xấu hổ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33
          ],
          "sourceHash": "f9de3a55e3f971ddfe0155600e01fb9cffded7335127d5f4d4b42a326eec9844",
          "audioNarration": "Bài đọc: Cây xấu hổ. Tác giả: Trần Hoài Dương. Bài đọc: Cây xấu hổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 31–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây xấu hổ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b8': {
      "lessonId": "tv-g2-b8",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "03d889d76a9ee584d8cf17092230cbe2caed91e9b4cfa22cf92772df4827ebba",
      "readingPassage": {
          "title": "Cầu thủ dự bị",
          "author": "Minh Khang",
          "genre": "prose",
          "content": [
              "Bài đọc: Cầu thủ dự bị\nTác giả: Minh Khang\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 34–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cầu thủ dự bị\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "03d889d76a9ee584d8cf17092230cbe2caed91e9b4cfa22cf92772df4827ebba",
          "audioNarration": "Bài đọc: Cầu thủ dự bị. Tác giả: Minh Khang. Bài đọc: Cầu thủ dự bị\nTác giả: Minh Khang\nSách giáo khoa Tiếng Việt lớp 2 tập 1 (Trang 34–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cầu thủ dự bị\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t1-b9': {
      "lessonId": "tv-g2-b9",
      "bookId": "tv-g2-t1",
      "sourcePages": [
          40,
          41,
          42
      ],
      "sourceHash": "9ee761a364d0d3379a221764801de381a0891f64cfc5ab55fe312d9d80d7abf6",
      "readingPassage": {
          "title": "Cô giáo lớp em",
          "author": "Nguyễn Xuân Sanh",
          "genre": "poem",
          "content": [
              "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
              "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
              "Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42
          ],
          "sourceHash": "9ee761a364d0d3379a221764801de381a0891f64cfc5ab55fe312d9d80d7abf6",
          "audioNarration": "Bài đọc: Cô giáo lớp em. Tác giả: Nguyễn Xuân Sanh. Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi. Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài. Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
      }
  },
  'tv-g2-t2-b1': {
      "lessonId": "tv-g2-b19",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          9,
          10,
          11
      ],
      "sourceHash": "a069f6060b874780bbef28071469fdd66f4c261bb24e3aa982e04cecc6e786c9",
      "readingPassage": {
          "title": "Chuyện bốn mùa",
          "author": "Theo Hoàng Anh Tú",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyện bốn mùa\nTác giả: Theo Hoàng Anh Tú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 9–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bốn mùa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              9,
              10,
              11
          ],
          "sourceHash": "a069f6060b874780bbef28071469fdd66f4c261bb24e3aa982e04cecc6e786c9",
          "audioNarration": "Bài đọc: Chuyện bốn mùa. Tác giả: Theo Hoàng Anh Tú. Bài đọc: Chuyện bốn mùa\nTác giả: Theo Hoàng Anh Tú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 9–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bốn mùa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b10': {
      "lessonId": "tv-g2-b28",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          42,
          43,
          44,
          45
      ],
      "sourceHash": "8fdafd80005f739711c9bbede4bda45c53e2cbe76ab1a20156e39250718c07ec",
      "readingPassage": {
          "title": "Khủng long",
          "author": "Khám phá thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Khủng long\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 42–45).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khủng long\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              42,
              43,
              44,
              45
          ],
          "sourceHash": "8fdafd80005f739711c9bbede4bda45c53e2cbe76ab1a20156e39250718c07ec",
          "audioNarration": "Bài đọc: Khủng long. Tác giả: Khám phá thế giới. Bài đọc: Khủng long\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 42–45). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khủng long\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b11': {
      "lessonId": "tv-g2-b29",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          46,
          47,
          48
      ],
      "sourceHash": "d1264912ac90d7e5750d7c4fa2d3fe342a48485cf29034e2899d25a8cad0c077",
      "readingPassage": {
          "title": "Sự tích cây thì là",
          "author": "Truyện cổ tích Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích cây thì là\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 46–48).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích cây thì là\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48
          ],
          "sourceHash": "d1264912ac90d7e5750d7c4fa2d3fe342a48485cf29034e2899d25a8cad0c077",
          "audioNarration": "Bài đọc: Sự tích cây thì là. Tác giả: Truyện cổ tích Việt Nam. Bài đọc: Sự tích cây thì là\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 46–48). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích cây thì là\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b12': {
      "lessonId": "tv-g2-b30",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          49,
          50,
          51,
          52,
          53
      ],
      "sourceHash": "3e1639982e2776ea206c488fcca383ccafb8b03de95b4deed33a0697d4e399de",
      "readingPassage": {
          "title": "Bờ tre đón khách",
          "author": "Võ Quảng",
          "genre": "poem",
          "content": [
              "Bài thơ: Bờ tre đón khách\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 49–53).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bờ tre đón khách\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              49,
              50,
              51,
              52,
              53
          ],
          "sourceHash": "3e1639982e2776ea206c488fcca383ccafb8b03de95b4deed33a0697d4e399de",
          "audioNarration": "Bài đọc: Bờ tre đón khách. Tác giả: Võ Quảng. Bài thơ: Bờ tre đón khách\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 49–53). Đọc thuộc lòng và diễn cảm bài thơ \"Bờ tre đón khách\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b13': {
      "lessonId": "tv-g2-t2-b13",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          54,
          55,
          56
      ],
      "sourceHash": "3583f811b52b7e44d845bc958d404d1bf0691b2727e694b3c859c5e6a5e7fd69",
      "readingPassage": {
          "title": "Tiếng chổi tre",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng.",
              "Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui.",
              "Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              54,
              55,
              56
          ],
          "sourceHash": "3583f811b52b7e44d845bc958d404d1bf0691b2727e694b3c859c5e6a5e7fd69",
          "audioNarration": "Bài đọc: Tiếng chổi tre. Tác giả: Nguyễn Trọng Hoàn. Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng. Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui. Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
      }
  },
  'tv-g2-t2-b14': {
      "lessonId": "tv-g2-t2-b14",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          57,
          58,
          59,
          60
      ],
      "sourceHash": "e3b5aa2310b53e0de0d1759a4664590c1f179b6d8f5fe8c0028037cff5fc7e8a",
      "readingPassage": {
          "title": "Cỏ non cười rồi",
          "author": "Theo Văn học thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Cỏ non cười rồi\nTác giả: Theo Văn học thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 57–60).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cỏ non cười rồi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              57,
              58,
              59,
              60
          ],
          "sourceHash": "e3b5aa2310b53e0de0d1759a4664590c1f179b6d8f5fe8c0028037cff5fc7e8a",
          "audioNarration": "Bài đọc: Cỏ non cười rồi. Tác giả: Theo Văn học thiếu nhi. Bài đọc: Cỏ non cười rồi\nTác giả: Theo Văn học thiếu nhi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 57–60). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cỏ non cười rồi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b15': {
      "lessonId": "tv-g2-t2-b15",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          61,
          62,
          63
      ],
      "sourceHash": "c93c5cc199a50474667538a3af79473eb47e32904ba0683e4834aff905b630b1",
      "readingPassage": {
          "title": "Những con sao biển",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Những con sao biển\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 61–63).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những con sao biển\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              61,
              62,
              63
          ],
          "sourceHash": "c93c5cc199a50474667538a3af79473eb47e32904ba0683e4834aff905b630b1",
          "audioNarration": "Bài đọc: Những con sao biển. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Những con sao biển\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 61–63). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những con sao biển\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b16': {
      "lessonId": "tv-g2-t2-b16",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76
      ],
      "sourceHash": "e978ff4bbd3973513961bc8b9b836bcbe74234685b76fcbe628b1607c3b04c54",
      "readingPassage": {
          "title": "Tạm biệt cánh cam",
          "author": "Vũ Tú Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tạm biệt cánh cam\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 64–76).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tạm biệt cánh cam\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76
          ],
          "sourceHash": "e978ff4bbd3973513961bc8b9b836bcbe74234685b76fcbe628b1607c3b04c54",
          "audioNarration": "Bài đọc: Tạm biệt cánh cam. Tác giả: Vũ Tú Nam. Bài đọc: Tạm biệt cánh cam\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 64–76). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tạm biệt cánh cam\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b17': {
      "lessonId": "tv-g2-t2-b17",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          77,
          78,
          79
      ],
      "sourceHash": "d1651000ed826c65db092a68aae664b65d9e1a7ff96a9bcf992a5a3208da4e3d",
      "readingPassage": {
          "title": "Những cách chào độc đáo",
          "author": "Khám phá thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Những cách chào độc đáo\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 77–79).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những cách chào độc đáo\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              77,
              78,
              79
          ],
          "sourceHash": "d1651000ed826c65db092a68aae664b65d9e1a7ff96a9bcf992a5a3208da4e3d",
          "audioNarration": "Bài đọc: Những cách chào độc đáo. Tác giả: Khám phá thế giới. Bài đọc: Những cách chào độc đáo\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 77–79). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những cách chào độc đáo\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b18': {
      "lessonId": "tv-g2-t2-b18",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          80,
          81,
          82,
          83
      ],
      "sourceHash": "d86265a0eadd0a5a2a533f65a2eb867d3784f70933e303fad0005417d5503722",
      "readingPassage": {
          "title": "Thư viện biết đi",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư viện biết đi\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 80–83).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư viện biết đi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              80,
              81,
              82,
              83
          ],
          "sourceHash": "d86265a0eadd0a5a2a533f65a2eb867d3784f70933e303fad0005417d5503722",
          "audioNarration": "Bài đọc: Thư viện biết đi. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Thư viện biết đi\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 80–83). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư viện biết đi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b19': {
      "lessonId": "tv-g2-t2-b19",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          84,
          85,
          86
      ],
      "sourceHash": "a1b92c61f703f770b7823ef08d21073d8a20dd822957db0174428b3129862f64",
      "readingPassage": {
          "title": "Cảm ơn anh hà mã",
          "author": "Theo Truyện đồng thoại",
          "genre": "prose",
          "content": [
              "Bài đọc: Cảm ơn anh hà mã\nTác giả: Theo Truyện đồng thoại\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 84–86).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm ơn anh hà mã\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              84,
              85,
              86
          ],
          "sourceHash": "a1b92c61f703f770b7823ef08d21073d8a20dd822957db0174428b3129862f64",
          "audioNarration": "Bài đọc: Cảm ơn anh hà mã. Tác giả: Theo Truyện đồng thoại. Bài đọc: Cảm ơn anh hà mã\nTác giả: Theo Truyện đồng thoại\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 84–86). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm ơn anh hà mã\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b2': {
      "lessonId": "tv-g2-b20",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "16e5aca8aea70eba11eebec6917f5db0878e3520c5a24ef7116218f1cd1e8a2f",
      "readingPassage": {
          "title": "Mùa nước nổi",
          "author": "Bế Kiến Quốc",
          "genre": "poem",
          "content": [
              "Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông.",
              "Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn.",
              "Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ.",
              "– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
              "– Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "16e5aca8aea70eba11eebec6917f5db0878e3520c5a24ef7116218f1cd1e8a2f",
          "audioNarration": "Bài đọc: Mùa nước nổi. Tác giả: Bế Kiến Quốc. Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông. Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn. Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ. – Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong. – Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
      }
  },
  'tv-g2-t2-b20': {
      "lessonId": "tv-g2-t2-b20",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          87,
          88,
          89,
          90,
          91
      ],
      "sourceHash": "37c42c09495aabf5fd85b61611e2fa02a7c632ab62a3b3641971886c6cc8c404",
      "readingPassage": {
          "title": "Từ chú bồ câu đến in-tơ-nét",
          "author": "Theo Khám phá khoa học",
          "genre": "prose",
          "content": [
              "Bài đọc: Từ chú bồ câu đến in-tơ-nét\nTác giả: Theo Khám phá khoa học\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 87–91).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Từ chú bồ câu đến in-tơ-nét\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              87,
              88,
              89,
              90,
              91
          ],
          "sourceHash": "37c42c09495aabf5fd85b61611e2fa02a7c632ab62a3b3641971886c6cc8c404",
          "audioNarration": "Bài đọc: Từ chú bồ câu đến in-tơ-nét. Tác giả: Theo Khám phá khoa học. Bài đọc: Từ chú bồ câu đến in-tơ-nét\nTác giả: Theo Khám phá khoa học\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 87–91). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Từ chú bồ câu đến in-tơ-nét\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b21': {
      "lessonId": "tv-g2-t2-b21",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          92,
          93,
          94
      ],
      "sourceHash": "b119795ae9b3e9d17671a4cd10bf55167a0db9060a6217da06696fad6580f4ca",
      "readingPassage": {
          "title": "Mai An Tiêm",
          "author": "Truyện cổ tích Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Mai An Tiêm\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 92–94).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Mai An Tiêm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              92,
              93,
              94
          ],
          "sourceHash": "b119795ae9b3e9d17671a4cd10bf55167a0db9060a6217da06696fad6580f4ca",
          "audioNarration": "Bài đọc: Mai An Tiêm. Tác giả: Truyện cổ tích Việt Nam. Bài đọc: Mai An Tiêm\nTác giả: Truyện cổ tích Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 92–94). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Mai An Tiêm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b22': {
      "lessonId": "tv-g2-t2-b22",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          95,
          96,
          97,
          98,
          99
      ],
      "sourceHash": "3d90b111e8c04be6069712b3b9474940f638d08ba547b53c80e15ccd07076613",
      "readingPassage": {
          "title": "Thư gửi bố ngoài đảo",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Bài thơ: Thư gửi bố ngoài đảo\nTác giả: Xuân Quỳnh\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 95–99).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Thư gửi bố ngoài đảo\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              95,
              96,
              97,
              98,
              99
          ],
          "sourceHash": "3d90b111e8c04be6069712b3b9474940f638d08ba547b53c80e15ccd07076613",
          "audioNarration": "Bài đọc: Thư gửi bố ngoài đảo. Tác giả: Xuân Quỳnh. Bài thơ: Thư gửi bố ngoài đảo\nTác giả: Xuân Quỳnh\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 95–99). Đọc thuộc lòng và diễn cảm bài thơ \"Thư gửi bố ngoài đảo\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b23': {
      "lessonId": "tv-g2-t2-b23",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          100,
          101,
          102,
          103
      ],
      "sourceHash": "acf3f8ac84d1dab0d4bdea4fe024193e051a3e9b1bb1ca1c376216863452b57c",
      "readingPassage": {
          "title": "Bóp nát quả cam",
          "author": "Theo Lịch sử Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bóp nát quả cam\nTác giả: Theo Lịch sử Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 100–103).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bóp nát quả cam\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              100,
              101,
              102,
              103
          ],
          "sourceHash": "acf3f8ac84d1dab0d4bdea4fe024193e051a3e9b1bb1ca1c376216863452b57c",
          "audioNarration": "Bài đọc: Bóp nát quả cam. Tác giả: Theo Lịch sử Việt Nam. Bài đọc: Bóp nát quả cam\nTác giả: Theo Lịch sử Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 100–103). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bóp nát quả cam\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b24': {
      "lessonId": "tv-g2-t2-b24",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          104,
          105,
          106,
          107,
          108,
          109
      ],
      "sourceHash": "3301bd2a23439ab2b73ac817fe97f4b699258e6fe9440badf27d3422d97f67ca",
      "readingPassage": {
          "title": "Chiếc rễ đa tròn",
          "author": "Theo Bác Hồ kính yêu",
          "genre": "prose",
          "content": [
              "Bài đọc: Chiếc rễ đa tròn\nTác giả: Theo Bác Hồ kính yêu\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 104–109).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chiếc rễ đa tròn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              104,
              105,
              106,
              107,
              108,
              109
          ],
          "sourceHash": "3301bd2a23439ab2b73ac817fe97f4b699258e6fe9440badf27d3422d97f67ca",
          "audioNarration": "Bài đọc: Chiếc rễ đa tròn. Tác giả: Theo Bác Hồ kính yêu. Bài đọc: Chiếc rễ đa tròn\nTác giả: Theo Bác Hồ kính yêu\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 104–109). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chiếc rễ đa tròn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b25': {
      "lessonId": "tv-g2-t2-b25",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          110,
          111,
          112
      ],
      "sourceHash": "6bc4fd3d593960e36509b22f73c5dabe72d32b1c42d0c93747aab2584b993db5",
      "readingPassage": {
          "title": "Đất nước chúng mình",
          "author": "Địa lí quê hương",
          "genre": "prose",
          "content": [
              "Bài đọc: Đất nước chúng mình\nTác giả: Địa lí quê hương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 110–112).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đất nước chúng mình\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              110,
              111,
              112
          ],
          "sourceHash": "6bc4fd3d593960e36509b22f73c5dabe72d32b1c42d0c93747aab2584b993db5",
          "audioNarration": "Bài đọc: Đất nước chúng mình. Tác giả: Địa lí quê hương. Bài đọc: Đất nước chúng mình\nTác giả: Địa lí quê hương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 110–112). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đất nước chúng mình\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b26': {
      "lessonId": "tv-g2-t2-b26",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          113,
          114,
          115,
          116,
          117,
          118
      ],
      "sourceHash": "ec1fe00f443f00f206872a5958a2f7391b8506a8003074b46f3ae932ffd4f33e",
      "readingPassage": {
          "title": "Trên các miền đất nước",
          "author": "Bùi Minh Quốc",
          "genre": "prose",
          "content": [
              "Bài đọc: Trên các miền đất nước\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 113–118).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên các miền đất nước\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              113,
              114,
              115,
              116,
              117,
              118
          ],
          "sourceHash": "ec1fe00f443f00f206872a5958a2f7391b8506a8003074b46f3ae932ffd4f33e",
          "audioNarration": "Bài đọc: Trên các miền đất nước. Tác giả: Bùi Minh Quốc. Bài đọc: Trên các miền đất nước\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 113–118). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên các miền đất nước\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b27': {
      "lessonId": "tv-g2-t2-b27",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          119,
          120,
          121
      ],
      "sourceHash": "bea4b50c19b4951e6ce89048d17c5d0c07aef7b589605de280954f15cbfa0c08",
      "readingPassage": {
          "title": "Chuyện quả bầu",
          "author": "Truyện cổ tích Khơ-mú",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyện quả bầu\nTác giả: Truyện cổ tích Khơ-mú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 119–121).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện quả bầu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              119,
              120,
              121
          ],
          "sourceHash": "bea4b50c19b4951e6ce89048d17c5d0c07aef7b589605de280954f15cbfa0c08",
          "audioNarration": "Bài đọc: Chuyện quả bầu. Tác giả: Truyện cổ tích Khơ-mú. Bài đọc: Chuyện quả bầu\nTác giả: Truyện cổ tích Khơ-mú\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 119–121). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện quả bầu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b28': {
      "lessonId": "tv-g2-t2-b28",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          122,
          123,
          124,
          125
      ],
      "sourceHash": "eb58ebeefe92f54dfa55ea1a797d3b102ada92ad8bab8ae9f9b484c6e342454a",
      "readingPassage": {
          "title": "Khám phá đáy biển ở Trường Sa",
          "author": "Theo Báo Hải quân",
          "genre": "prose",
          "content": [
              "Bài đọc: Khám phá đáy biển ở Trường Sa\nTác giả: Theo Báo Hải quân\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 122–125).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khám phá đáy biển ở Trường Sa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123,
              124,
              125
          ],
          "sourceHash": "eb58ebeefe92f54dfa55ea1a797d3b102ada92ad8bab8ae9f9b484c6e342454a",
          "audioNarration": "Bài đọc: Khám phá đáy biển ở Trường Sa. Tác giả: Theo Báo Hải quân. Bài đọc: Khám phá đáy biển ở Trường Sa\nTác giả: Theo Báo Hải quân\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 122–125). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khám phá đáy biển ở Trường Sa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b29': {
      "lessonId": "tv-g2-t2-b29",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          126,
          127,
          128
      ],
      "sourceHash": "adc3514735d4c545a8ac1a00a98433b885c968dfeb30fa37c719ca7ff1fccc2c",
      "readingPassage": {
          "title": "Hồ Gươm",
          "author": "Ngô Quân Miện",
          "genre": "prose",
          "content": [
              "Bài đọc: Hồ Gươm\nTác giả: Ngô Quân Miện\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 126–128).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hồ Gươm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127,
              128
          ],
          "sourceHash": "adc3514735d4c545a8ac1a00a98433b885c968dfeb30fa37c719ca7ff1fccc2c",
          "audioNarration": "Bài đọc: Hồ Gươm. Tác giả: Ngô Quân Miện. Bài đọc: Hồ Gươm\nTác giả: Ngô Quân Miện\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 126–128). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hồ Gươm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b3': {
      "lessonId": "tv-g2-b21",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          16,
          17,
          18
      ],
      "sourceHash": "9d051d388b09e3f6e74a6cecd6925ab741484ffbc2d2d9fbec8324f1f2d874dd",
      "readingPassage": {
          "title": "Hoa mi hót",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hoa mi hót\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 16–18).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa mi hót\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18
          ],
          "sourceHash": "9d051d388b09e3f6e74a6cecd6925ab741484ffbc2d2d9fbec8324f1f2d874dd",
          "audioNarration": "Bài đọc: Hoa mi hót. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hoa mi hót\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 16–18). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hoa mi hót\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b30': {
      "lessonId": "tv-g2-t2-b30",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          129,
          130,
          131,
          132
      ],
      "sourceHash": "43c62abae90225cf8dd22dc21ec3be4f06aeb62fc07676557c74e58a09c5c9bc",
      "readingPassage": {
          "title": "Cánh đồng quê em",
          "author": "Bùi Minh Quốc",
          "genre": "poem",
          "content": [
              "Bài thơ: Cánh đồng quê em\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 129–132).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Cánh đồng quê em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              129,
              130,
              131,
              132
          ],
          "sourceHash": "43c62abae90225cf8dd22dc21ec3be4f06aeb62fc07676557c74e58a09c5c9bc",
          "audioNarration": "Bài đọc: Cánh đồng quê em. Tác giả: Bùi Minh Quốc. Bài thơ: Cánh đồng quê em\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 129–132). Đọc thuộc lòng và diễn cảm bài thơ \"Cánh đồng quê em\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b4': {
      "lessonId": "tv-g2-b22",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          19,
          20,
          21,
          22
      ],
      "sourceHash": "54e4cfbf51afe16b0e522e0f6d81b4b69bf8755ad30cea5eb7c5a8d70b120c5d",
      "readingPassage": {
          "title": "Tết đến rồi",
          "author": "Theo Mai Chi",
          "genre": "prose",
          "content": [
              "Bài đọc: Tết đến rồi\nTác giả: Theo Mai Chi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 19–22).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tết đến rồi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              19,
              20,
              21,
              22
          ],
          "sourceHash": "54e4cfbf51afe16b0e522e0f6d81b4b69bf8755ad30cea5eb7c5a8d70b120c5d",
          "audioNarration": "Bài đọc: Tết đến rồi. Tác giả: Theo Mai Chi. Bài đọc: Tết đến rồi\nTác giả: Theo Mai Chi\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 19–22). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tết đến rồi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b5': {
      "lessonId": "tv-g2-b23",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          23,
          24,
          25
      ],
      "sourceHash": "ccb9735e804fe76b11ad021fd46247e8875ca7097536c1dfb95acc012134052e",
      "readingPassage": {
          "title": "Giọt nước và biển lớn",
          "author": "Theo Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Giọt nước và biển lớn\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 23–25).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giọt nước và biển lớn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25
          ],
          "sourceHash": "ccb9735e804fe76b11ad021fd46247e8875ca7097536c1dfb95acc012134052e",
          "audioNarration": "Bài đọc: Giọt nước và biển lớn. Tác giả: Theo Truyện ngụ ngôn. Bài đọc: Giọt nước và biển lớn\nTác giả: Theo Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 23–25). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giọt nước và biển lớn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g2-t2-b6': {
      "lessonId": "tv-g2-b24",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          26,
          27,
          28,
          29,
          30
      ],
      "sourceHash": "5dd4751810228c767c1a0d2459ac480bf71e03a992b17bda88cd1fb66efdad2b",
      "readingPassage": {
          "title": "Mùa vàng",
          "author": "Nguyễn Viết Bình",
          "genre": "poem",
          "content": [
              "Bài thơ: Mùa vàng\nTác giả: Nguyễn Viết Bình\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 26–30).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Mùa vàng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29,
              30
          ],
          "sourceHash": "5dd4751810228c767c1a0d2459ac480bf71e03a992b17bda88cd1fb66efdad2b",
          "audioNarration": "Bài đọc: Mùa vàng. Tác giả: Nguyễn Viết Bình. Bài thơ: Mùa vàng\nTác giả: Nguyễn Viết Bình\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 26–30). Đọc thuộc lòng và diễn cảm bài thơ \"Mùa vàng\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b7': {
      "lessonId": "tv-g2-b25",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          31,
          32,
          33
      ],
      "sourceHash": "29c26f38ae74d6e07bd9b7c1496456041552845deb656d11f6c03f919caa0ee4",
      "readingPassage": {
          "title": "Hạt thóc",
          "author": "Quang Huy",
          "genre": "poem",
          "content": [
              "Bài thơ: Hạt thóc\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 31–33).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Hạt thóc\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33
          ],
          "sourceHash": "29c26f38ae74d6e07bd9b7c1496456041552845deb656d11f6c03f919caa0ee4",
          "audioNarration": "Bài đọc: Hạt thóc. Tác giả: Quang Huy. Bài thơ: Hạt thóc\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 31–33). Đọc thuộc lòng và diễn cảm bài thơ \"Hạt thóc\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b8': {
      "lessonId": "tv-g2-b26",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38
      ],
      "sourceHash": "15657d038b1e21cf15c98624666cc5dcba5e6829a46052011d09aeecb457661d",
      "readingPassage": {
          "title": "Luỹ tre",
          "author": "Nguyễn Công Dương",
          "genre": "poem",
          "content": [
              "Bài thơ: Luỹ tre\nTác giả: Nguyễn Công Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 34–38).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Luỹ tre\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38
          ],
          "sourceHash": "15657d038b1e21cf15c98624666cc5dcba5e6829a46052011d09aeecb457661d",
          "audioNarration": "Bài đọc: Luỹ tre. Tác giả: Nguyễn Công Dương. Bài thơ: Luỹ tre\nTác giả: Nguyễn Công Dương\nSách giáo khoa Tiếng Việt lớp 2 tập 2 (Trang 34–38). Đọc thuộc lòng và diễn cảm bài thơ \"Luỹ tre\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g2-t2-b9': {
      "lessonId": "tv-g2-b27",
      "bookId": "tv-g2-t2",
      "sourcePages": [
          39,
          40,
          41
      ],
      "sourceHash": "77e7b28fa28303fed68d7e4ec2b3ca2cd286fd3c0313c90deed8ba65c02e1825",
      "readingPassage": {
          "title": "Vè chim",
          "author": "Nguyễn Xuân Sanh",
          "genre": "poem",
          "content": [
              "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
              "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
              "Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              39,
              40,
              41
          ],
          "sourceHash": "77e7b28fa28303fed68d7e4ec2b3ca2cd286fd3c0313c90deed8ba65c02e1825",
          "audioNarration": "Bài đọc: Vè chim. Tác giả: Nguyễn Xuân Sanh. Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi. Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài. Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
      }
  },
  'tv-g3-b1': {
      "lessonId": "tv-g3-b1",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          10,
          11,
          12
      ],
      "sourceHash": "fd527885a98fe34b203eb2a69d38bf3fdc64543e931a3f9afd89446fc2bbf51a",
      "readingPassage": {
          "title": "Ngày gặp lại",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
              "– Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
              "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              10,
              11,
              12
          ],
          "sourceHash": "fd527885a98fe34b203eb2a69d38bf3fdc64543e931a3f9afd89446fc2bbf51a",
          "audioNarration": "Bài đọc: Ngày gặp lại. Tác giả: Hải Nam. Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau. – Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương. Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
      }
  },
  'tv-g3-b10': {
      "lessonId": "tv-g3-b10",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          46,
          47,
          48,
          49
      ],
      "sourceHash": "07ba19d30d8bea5fe614ad8f8189446ec21cb42b3862da28cec931dc112e3f84",
      "readingPassage": {
          "title": "Con đường đến trường",
          "author": "Đỗ Đăng Dương",
          "genre": "prose",
          "content": [
              "Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp.",
              "Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân.",
              "Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ.",
              "Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48,
              49
          ],
          "sourceHash": "07ba19d30d8bea5fe614ad8f8189446ec21cb42b3862da28cec931dc112e3f84",
          "audioNarration": "Bài đọc: Con đường đến trường. Tác giả: Đỗ Đăng Dương. Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp. Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân. Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ. Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
      }
  },
  'tv-g3-b11': {
      "lessonId": "tv-g3-b11",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          50,
          51,
          52,
          53
      ],
      "sourceHash": "6f670c2db6dca49e9c008179f9131422155c88324d1a16d652b442aa65b55136",
      "readingPassage": {
          "title": "Lời giải toán đặc biệt",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Lời giải toán đặc biệt\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 50–53).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lời giải toán đặc biệt\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              50,
              51,
              52,
              53
          ],
          "sourceHash": "6f670c2db6dca49e9c008179f9131422155c88324d1a16d652b442aa65b55136",
          "audioNarration": "Bài đọc: Lời giải toán đặc biệt. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Lời giải toán đặc biệt\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 50–53). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lời giải toán đặc biệt\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-b12': {
      "lessonId": "tv-g3-b12",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          54,
          55,
          56,
          57,
          58
      ],
      "sourceHash": "cdbdd939b60e0de980f769ade62f643192d02dbe46a24084a58adc3947a27790",
      "readingPassage": {
          "title": "Bài tập làm văn",
          "author": "Theo Pi-vo-va-ro-va",
          "genre": "prose",
          "content": [
              "Bài đọc: Bài tập làm văn\nTác giả: Theo Pi-vo-va-ro-va\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 54–58).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài tập làm văn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              54,
              55,
              56,
              57,
              58
          ],
          "sourceHash": "cdbdd939b60e0de980f769ade62f643192d02dbe46a24084a58adc3947a27790",
          "audioNarration": "Bài đọc: Bài tập làm văn. Tác giả: Theo Pi-vo-va-ro-va. Bài đọc: Bài tập làm văn\nTác giả: Theo Pi-vo-va-ro-va\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 54–58). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài tập làm văn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-b13': {
      "lessonId": "tv-g3-b13",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          59,
          60,
          61
      ],
      "sourceHash": "4d5db3918e8934a6f40bc3f38f7cd3ee8bed98aa22344d62e0815ce8dcc46876",
      "readingPassage": {
          "title": "Bàn tay cô giáo",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá!",
              "Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả.",
              "Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn.",
              "Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ...",
              "Biết bao điều lạ\nTừ bàn tay cô."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              59,
              60,
              61
          ],
          "sourceHash": "4d5db3918e8934a6f40bc3f38f7cd3ee8bed98aa22344d62e0815ce8dcc46876",
          "audioNarration": "Bài đọc: Bàn tay cô giáo. Tác giả: Nguyễn Trọng Hoàn. Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá! Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả. Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn. Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ... Biết bao điều lạ\nTừ bàn tay cô."
      }
  },
  'tv-g3-b14': {
      "lessonId": "tv-g3-b14",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          62,
          63,
          64,
          65
      ],
      "sourceHash": "60a256ddc065dcee9cbf4ca6ef5f1adc61455feca7a04a5f49e84235390b05a1",
      "readingPassage": {
          "title": "Cuộc họp của chữ viết",
          "author": "Trần Ninh Hồ",
          "genre": "prose",
          "content": [
              "Bài đọc: Cuộc họp của chữ viết\nTác giả: Trần Ninh Hồ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 62–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc họp của chữ viết\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              62,
              63,
              64,
              65
          ],
          "sourceHash": "60a256ddc065dcee9cbf4ca6ef5f1adc61455feca7a04a5f49e84235390b05a1",
          "audioNarration": "Bài đọc: Cuộc họp của chữ viết. Tác giả: Trần Ninh Hồ. Bài đọc: Cuộc họp của chữ viết\nTác giả: Trần Ninh Hồ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 62–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc họp của chữ viết\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-b15': {
      "lessonId": "tv-g3-b15",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          8,
          9,
          10
      ],
      "sourceHash": "e37297b2bd1adfd0a1af14de1247cad94400c8a37a0a8a64a1afb43dbc417441",
      "readingPassage": {
          "title": "Bầu trời",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
              "– Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
              "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10
          ],
          "sourceHash": "e37297b2bd1adfd0a1af14de1247cad94400c8a37a0a8a64a1afb43dbc417441",
          "audioNarration": "Bài đọc: Bầu trời. Tác giả: Hải Nam. Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau. – Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương. Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
      }
  },
  'tv-g3-b16': {
      "lessonId": "tv-g3-b16",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          11,
          12,
          13,
          14
      ],
      "sourceHash": "f5ae65059bb9986da6adbe1be55737ad021ee8d5b52cd9e208b206034d75b4f4",
      "readingPassage": {
          "title": "Mưa",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi.",
              "Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi.",
              "Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ.",
              "Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              11,
              12,
              13,
              14
          ],
          "sourceHash": "f5ae65059bb9986da6adbe1be55737ad021ee8d5b52cd9e208b206034d75b4f4",
          "audioNarration": "Bài đọc: Mưa. Tác giả: Xuân Quỳnh. Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi. Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi. Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ. Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
      }
  },
  'tv-g3-b17': {
      "lessonId": "tv-g3-b17",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          15,
          16,
          17,
          18
      ],
      "sourceHash": "7ce1e74a09b050bf6f849e0e03cdba3935fad2998677f6d90b6932f6541f3309",
      "readingPassage": {
          "title": "Cóc kiện Trời",
          "author": "Vũ Hùng",
          "genre": "prose",
          "content": [
              "Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo.",
              "Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác.",
              "Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              15,
              16,
              17,
              18
          ],
          "sourceHash": "7ce1e74a09b050bf6f849e0e03cdba3935fad2998677f6d90b6932f6541f3309",
          "audioNarration": "Bài đọc: Cóc kiện Trời. Tác giả: Vũ Hùng. Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo. Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác. Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
      }
  },
  'tv-g3-b18': {
      "lessonId": "tv-g3-b18",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          19,
          20,
          21,
          22
      ],
      "sourceHash": "e7b30a49a8758591cac25265d501ad047436666e6e316e5126c27b8a235a29af",
      "readingPassage": {
          "title": "Những cái tên đáng yêu",
          "author": "Theo Nguyễn Hoàng",
          "genre": "prose",
          "content": [
              "A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng.",
              "Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển.",
              "Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              19,
              20,
              21,
              22
          ],
          "sourceHash": "e7b30a49a8758591cac25265d501ad047436666e6e316e5126c27b8a235a29af",
          "audioNarration": "Bài đọc: Những cái tên đáng yêu. Tác giả: Theo Nguyễn Hoàng. A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng. Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển. Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
      }
  },
  'tv-g3-b19': {
      "lessonId": "tv-g3-b19",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          23,
          24,
          25,
          26
      ],
      "sourceHash": "dba9abdd7350d1018e5bcc09aae21240c2fd15ea45476669f1672589ac96165d",
      "readingPassage": {
          "title": "Ngày hội rừng xanh",
          "author": "Nguyễn Ngọc Mai Chi",
          "genre": "prose",
          "content": [
              "Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy.",
              "Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành!",
              "Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25,
              26
          ],
          "sourceHash": "dba9abdd7350d1018e5bcc09aae21240c2fd15ea45476669f1672589ac96165d",
          "audioNarration": "Bài đọc: Ngày hội rừng xanh. Tác giả: Nguyễn Ngọc Mai Chi. Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy. Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành! Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
      }
  },
  'tv-g3-b2': {
      "lessonId": "tv-g3-b2",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "3d2611807d135464292b322cb4e12b7aa49bd9fc96315ef44dbd220d3ff9b99c",
      "readingPassage": {
          "title": "Về thăm quê",
          "author": "Xuân Hoài",
          "genre": "poem",
          "content": [
              "Nghỉ hè em thích nhất\nĐược theo mẹ về quê\nBà em cũng mừng ghê\nKhi thấy em vào ngõ.",
              "Mảnh vườn quê bé nhỏ\nBao nhiêu là thứ cây\nBà mỗi năm mỗi gầy\nChắc bà luôn vất vả.",
              "Vườn bà có nhiều quả\nChẳng mấy lúc bà ăn\nBà bảo thích để dành\nCho cháu về ra hái.",
              "Em mồ hôi nhễ nhại\nBà theo quạt liền tay\nTừ tay bà gió đến\nThơm bao hương quả vườn\nThoáng nghe bà kể chuyện\nGió thơm say chập chờn."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "3d2611807d135464292b322cb4e12b7aa49bd9fc96315ef44dbd220d3ff9b99c",
          "audioNarration": "Bài đọc: Về thăm quê. Tác giả: Xuân Hoài. Nghỉ hè em thích nhất\nĐược theo mẹ về quê\nBà em cũng mừng ghê\nKhi thấy em vào ngõ. Mảnh vườn quê bé nhỏ\nBao nhiêu là thứ cây\nBà mỗi năm mỗi gầy\nChắc bà luôn vất vả. Vườn bà có nhiều quả\nChẳng mấy lúc bà ăn\nBà bảo thích để dành\nCho cháu về ra hái. Em mồ hôi nhễ nhại\nBà theo quạt liền tay\nTừ tay bà gió đến\nThơm bao hương quả vườn\nThoáng nghe bà kể chuyện\nGió thơm say chập chờn."
      }
  },
  'tv-g3-b20': {
      "lessonId": "tv-g3-b20",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          27,
          28,
          29,
          30,
          31
      ],
      "sourceHash": "a524c3f000626806567b23dc4dad19378c1c4e0c202304d08ec6e8e26a41bcc4",
      "readingPassage": {
          "title": "Cây gạo",
          "author": "Trung Sơn",
          "genre": "prose",
          "content": [
              "Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô",
              "CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              27,
              28,
              29,
              30,
              31
          ],
          "sourceHash": "a524c3f000626806567b23dc4dad19378c1c4e0c202304d08ec6e8e26a41bcc4",
          "audioNarration": "Bài đọc: Cây gạo. Tác giả: Trung Sơn. Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
      }
  },
  'tv-g3-b21': {
      "lessonId": "tv-g3-b21",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          32,
          33,
          34
      ],
      "sourceHash": "3397d2a63628e019cb458468169a16657f49856ff2d8643293589b57b4c2b7e6",
      "readingPassage": {
          "title": "Một trời xanh của tôi",
          "author": "Nguyễn Quỳnh Mai",
          "genre": "poem",
          "content": [
              "Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm.",
              "Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ.",
              "Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường.",
              "Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              32,
              33,
              34
          ],
          "sourceHash": "3397d2a63628e019cb458468169a16657f49856ff2d8643293589b57b4c2b7e6",
          "audioNarration": "Bài đọc: Một trời xanh của tôi. Tác giả: Nguyễn Quỳnh Mai. Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm. Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ. Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường. Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
      }
  },
  'tv-g3-b22': {
      "lessonId": "tv-g3-b22",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "176e35aac146b1a2d7d885c6c3b3533ff939d3e0832bdaa5906fb14904fad57a",
      "readingPassage": {
          "title": "Bầy voi rừng Trường Sơn",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức.",
              "Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "176e35aac146b1a2d7d885c6c3b3533ff939d3e0832bdaa5906fb14904fad57a",
          "audioNarration": "Bài đọc: Bầy voi rừng Trường Sơn. Tác giả: Văn Thành Lê. Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức. Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
      }
  },
  'tv-g3-b23': {
      "lessonId": "tv-g3-b23",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          40,
          41,
          42,
          43
      ],
      "sourceHash": "dae5bff05fee1190058e6a01bc5e4b6d1f75017fc7b54e2e3531db438f5bcc5e",
      "readingPassage": {
          "title": "Lời kêu gọi toàn dân tập thể dục",
          "author": "Phạm Anh Xuân",
          "genre": "poem",
          "content": [
              "Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào.",
              "Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò.",
              "Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay.",
              "Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa.",
              "Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42,
              43
          ],
          "sourceHash": "dae5bff05fee1190058e6a01bc5e4b6d1f75017fc7b54e2e3531db438f5bcc5e",
          "audioNarration": "Bài đọc: Lời kêu gọi toàn dân tập thể dục. Tác giả: Phạm Anh Xuân. Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào. Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò. Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay. Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa. Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
      }
  },
  'tv-g3-b24': {
      "lessonId": "tv-g3-b24",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "ee78c7cb4e9cfeaedb47d6c98ce7026a498aecfe6d49a00a6b5c94196dbd00e2",
      "readingPassage": {
          "title": "Quả hồng của thỏ con",
          "author": "Đỗ Đăng Dương",
          "genre": "prose",
          "content": [
              "Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp.",
              "Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân.",
              "Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ.",
              "Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "ee78c7cb4e9cfeaedb47d6c98ce7026a498aecfe6d49a00a6b5c94196dbd00e2",
          "audioNarration": "Bài đọc: Quả hồng của thỏ con. Tác giả: Đỗ Đăng Dương. Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp. Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân. Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ. Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
      }
  },
  'tv-g3-b25': {
      "lessonId": "tv-g3-b25",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "1476b07f792cf5452f3a17d6dba12be5d9025eb4408a279bcc4cdaaf301929c6",
      "readingPassage": {
          "title": "Chuyện bên cửa sổ",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyện bên cửa sổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bên cửa sổ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "1476b07f792cf5452f3a17d6dba12be5d9025eb4408a279bcc4cdaaf301929c6",
          "audioNarration": "Bài đọc: Chuyện bên cửa sổ. Tác giả: Trần Hoài Dương. Bài đọc: Chuyện bên cửa sổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bên cửa sổ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-b3': {
      "lessonId": "tv-g3-b3",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          17,
          18,
          19,
          20
      ],
      "sourceHash": "ed1a5084927b027963de51545a36ebb3957964e2b0d02de7d6eaa0433263c419",
      "readingPassage": {
          "title": "Cánh rừng trong nắng",
          "author": "Vũ Hùng",
          "genre": "prose",
          "content": [
              "Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo.",
              "Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác.",
              "Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19,
              20
          ],
          "sourceHash": "ed1a5084927b027963de51545a36ebb3957964e2b0d02de7d6eaa0433263c419",
          "audioNarration": "Bài đọc: Cánh rừng trong nắng. Tác giả: Vũ Hùng. Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo. Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác. Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
      }
  },
  'tv-g3-b4': {
      "lessonId": "tv-g3-b4",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          21,
          22,
          23,
          24,
          25
      ],
      "sourceHash": "4bc26d29a5bec5bb82683dda315881dd775ef591ce475ecb46ff2bed64960a34",
      "readingPassage": {
          "title": "Lần đầu ra biển",
          "author": "Theo Nguyễn Hoàng",
          "genre": "prose",
          "content": [
              "A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng.",
              "Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển.",
              "Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              21,
              22,
              23,
              24,
              25
          ],
          "sourceHash": "4bc26d29a5bec5bb82683dda315881dd775ef591ce475ecb46ff2bed64960a34",
          "audioNarration": "Bài đọc: Lần đầu ra biển. Tác giả: Theo Nguyễn Hoàng. A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng. Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển. Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
      }
  },
  'tv-g3-b5': {
      "lessonId": "tv-g3-b5",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "35a22ca9eff360814c254f0997f5cc05afcd3f8e8b6a62d1a2c9a1ee4427c027",
      "readingPassage": {
          "title": "Nhật kí tập bơi",
          "author": "Nguyễn Ngọc Mai Chi",
          "genre": "prose",
          "content": [
              "Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy.",
              "Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành!",
              "Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "35a22ca9eff360814c254f0997f5cc05afcd3f8e8b6a62d1a2c9a1ee4427c027",
          "audioNarration": "Bài đọc: Nhật kí tập bơi. Tác giả: Nguyễn Ngọc Mai Chi. Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy. Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành! Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
      }
  },
  'tv-g3-b6': {
      "lessonId": "tv-g3-b6",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "e34d63bdc3babce0374db9b2d94aaec5a498159931cb94fb672111082c5f0594",
      "readingPassage": {
          "title": "Tập nấu ăn",
          "author": "Trung Sơn",
          "genre": "prose",
          "content": [
              "Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô",
              "CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "e34d63bdc3babce0374db9b2d94aaec5a498159931cb94fb672111082c5f0594",
          "audioNarration": "Bài đọc: Tập nấu ăn. Tác giả: Trung Sơn. Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
      }
  },
  'tv-g3-b7': {
      "lessonId": "tv-g3-b7",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          34,
          35,
          36,
          37
      ],
      "sourceHash": "69b0623128cdc11549f6191644cf42637a430e6491cfe64e798c06a8a36b58be",
      "readingPassage": {
          "title": "Mùa hè lấp lánh",
          "author": "Nguyễn Quỳnh Mai",
          "genre": "poem",
          "content": [
              "Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm.",
              "Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ.",
              "Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường.",
              "Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37
          ],
          "sourceHash": "69b0623128cdc11549f6191644cf42637a430e6491cfe64e798c06a8a36b58be",
          "audioNarration": "Bài đọc: Mùa hè lấp lánh. Tác giả: Nguyễn Quỳnh Mai. Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm. Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ. Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường. Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
      }
  },
  'tv-g3-b8': {
      "lessonId": "tv-g3-b8",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          38,
          39,
          40,
          41,
          42
      ],
      "sourceHash": "d8a299cfb78c65e4d8d158d128ca7193aa34ddb3baa0f9125e97f2a918d40af1",
      "readingPassage": {
          "title": "Tạm biệt mùa hè",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức.",
              "Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39,
              40,
              41,
              42
          ],
          "sourceHash": "d8a299cfb78c65e4d8d158d128ca7193aa34ddb3baa0f9125e97f2a918d40af1",
          "audioNarration": "Bài đọc: Tạm biệt mùa hè. Tác giả: Văn Thành Lê. Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức. Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
      }
  },
  'tv-g3-b9': {
      "lessonId": "tv-g3-b9",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          43,
          44,
          45
      ],
      "sourceHash": "71ea7202dc64dabc5688a5c8d565d914cab7ec4c3851f7554a32de7b5528e584",
      "readingPassage": {
          "title": "Đi học vui sao",
          "author": "Phạm Anh Xuân",
          "genre": "poem",
          "content": [
              "Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào.",
              "Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò.",
              "Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay.",
              "Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa.",
              "Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45
          ],
          "sourceHash": "71ea7202dc64dabc5688a5c8d565d914cab7ec4c3851f7554a32de7b5528e584",
          "audioNarration": "Bài đọc: Đi học vui sao. Tác giả: Phạm Anh Xuân. Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào. Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò. Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay. Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa. Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
      }
  },
  'tv-g3-t1-b1': {
      "lessonId": "tv-g3-b1",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          10,
          11,
          12
      ],
      "sourceHash": "fd527885a98fe34b203eb2a69d38bf3fdc64543e931a3f9afd89446fc2bbf51a",
      "readingPassage": {
          "title": "Ngày gặp lại",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
              "– Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
              "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              10,
              11,
              12
          ],
          "sourceHash": "fd527885a98fe34b203eb2a69d38bf3fdc64543e931a3f9afd89446fc2bbf51a",
          "audioNarration": "Bài đọc: Ngày gặp lại. Tác giả: Hải Nam. Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau. – Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương. Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
      }
  },
  'tv-g3-t1-b10': {
      "lessonId": "tv-g3-b10",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          46,
          47,
          48,
          49
      ],
      "sourceHash": "07ba19d30d8bea5fe614ad8f8189446ec21cb42b3862da28cec931dc112e3f84",
      "readingPassage": {
          "title": "Con đường đến trường",
          "author": "Đỗ Đăng Dương",
          "genre": "prose",
          "content": [
              "Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp.",
              "Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân.",
              "Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ.",
              "Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48,
              49
          ],
          "sourceHash": "07ba19d30d8bea5fe614ad8f8189446ec21cb42b3862da28cec931dc112e3f84",
          "audioNarration": "Bài đọc: Con đường đến trường. Tác giả: Đỗ Đăng Dương. Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp. Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân. Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ. Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
      }
  },
  'tv-g3-t1-b11': {
      "lessonId": "tv-g3-b11",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          50,
          51,
          52,
          53
      ],
      "sourceHash": "6f670c2db6dca49e9c008179f9131422155c88324d1a16d652b442aa65b55136",
      "readingPassage": {
          "title": "Lời giải toán đặc biệt",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Lời giải toán đặc biệt\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 50–53).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lời giải toán đặc biệt\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              50,
              51,
              52,
              53
          ],
          "sourceHash": "6f670c2db6dca49e9c008179f9131422155c88324d1a16d652b442aa65b55136",
          "audioNarration": "Bài đọc: Lời giải toán đặc biệt. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Lời giải toán đặc biệt\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 50–53). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lời giải toán đặc biệt\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b12': {
      "lessonId": "tv-g3-b12",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          54,
          55,
          56,
          57,
          58
      ],
      "sourceHash": "cdbdd939b60e0de980f769ade62f643192d02dbe46a24084a58adc3947a27790",
      "readingPassage": {
          "title": "Bài tập làm văn",
          "author": "Theo Pi-vo-va-ro-va",
          "genre": "prose",
          "content": [
              "Bài đọc: Bài tập làm văn\nTác giả: Theo Pi-vo-va-ro-va\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 54–58).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài tập làm văn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              54,
              55,
              56,
              57,
              58
          ],
          "sourceHash": "cdbdd939b60e0de980f769ade62f643192d02dbe46a24084a58adc3947a27790",
          "audioNarration": "Bài đọc: Bài tập làm văn. Tác giả: Theo Pi-vo-va-ro-va. Bài đọc: Bài tập làm văn\nTác giả: Theo Pi-vo-va-ro-va\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 54–58). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài tập làm văn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b13': {
      "lessonId": "tv-g3-b13",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          59,
          60,
          61
      ],
      "sourceHash": "4d5db3918e8934a6f40bc3f38f7cd3ee8bed98aa22344d62e0815ce8dcc46876",
      "readingPassage": {
          "title": "Bàn tay cô giáo",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá!",
              "Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả.",
              "Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn.",
              "Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ...",
              "Biết bao điều lạ\nTừ bàn tay cô."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              59,
              60,
              61
          ],
          "sourceHash": "4d5db3918e8934a6f40bc3f38f7cd3ee8bed98aa22344d62e0815ce8dcc46876",
          "audioNarration": "Bài đọc: Bàn tay cô giáo. Tác giả: Nguyễn Trọng Hoàn. Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá! Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả. Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn. Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ... Biết bao điều lạ\nTừ bàn tay cô."
      }
  },
  'tv-g3-t1-b14': {
      "lessonId": "tv-g3-b14",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          62,
          63,
          64,
          65
      ],
      "sourceHash": "60a256ddc065dcee9cbf4ca6ef5f1adc61455feca7a04a5f49e84235390b05a1",
      "readingPassage": {
          "title": "Cuộc họp của chữ viết",
          "author": "Trần Ninh Hồ",
          "genre": "prose",
          "content": [
              "Bài đọc: Cuộc họp của chữ viết\nTác giả: Trần Ninh Hồ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 62–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc họp của chữ viết\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              62,
              63,
              64,
              65
          ],
          "sourceHash": "60a256ddc065dcee9cbf4ca6ef5f1adc61455feca7a04a5f49e84235390b05a1",
          "audioNarration": "Bài đọc: Cuộc họp của chữ viết. Tác giả: Trần Ninh Hồ. Bài đọc: Cuộc họp của chữ viết\nTác giả: Trần Ninh Hồ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 62–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cuộc họp của chữ viết\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b15': {
      "lessonId": "tv-g3-t1-b15",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          66,
          67,
          68,
          69
      ],
      "sourceHash": "fdb23aa2dd38d71d0fd570ba8d1f9637292ff92d5ebbfdd01caf531555dd6f25",
      "readingPassage": {
          "title": "Thư viện",
          "author": "Thuỵ Anh",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư viện\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 66–69).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư viện\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69
          ],
          "sourceHash": "fdb23aa2dd38d71d0fd570ba8d1f9637292ff92d5ebbfdd01caf531555dd6f25",
          "audioNarration": "Bài đọc: Thư viện. Tác giả: Thuỵ Anh. Bài đọc: Thư viện\nTác giả: Thuỵ Anh\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 66–69). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư viện\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b16': {
      "lessonId": "tv-g3-t1-b16",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81
      ],
      "sourceHash": "84f070f4fead1065a9fd167d8a07a9c9792c00632016fecffedd7437e8741000",
      "readingPassage": {
          "title": "Ngày em vào Đội",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi.",
              "Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi.",
              "Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ.",
              "Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81
          ],
          "sourceHash": "84f070f4fead1065a9fd167d8a07a9c9792c00632016fecffedd7437e8741000",
          "audioNarration": "Bài đọc: Ngày em vào Đội. Tác giả: Xuân Quỳnh. Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi. Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi. Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ. Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
      }
  },
  'tv-g3-t1-b17': {
      "lessonId": "tv-g3-t1-b17",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          82,
          83,
          84,
          85
      ],
      "sourceHash": "c1ba1683315df4bbb9fe0db25d146ed6a67db819a21c29a84f608046b035184e",
      "readingPassage": {
          "title": "Ngưỡng cửa",
          "author": "Vũ Quần Phương",
          "genre": "poem",
          "content": [
              "Nơi này ai cũng quen\nNgay từ thời tấm bé\nKhi tay bà, tay mẹ\nCòn dắt vòng đi men.",
              "Nơi bố mẹ ngày đêm\nLúc nào qua cũng vội\nNơi bạn bè chạy tới\nThường lúc nào cũng vui.",
              "Nơi ấy đã đưa tôi\nBuổi đầu tiên đến lớp\nNay con đường xa tắp\nVẫn đang chờ tôi đi.",
              "Nơi ấy ngôi sao khuya\nSoi vào trong giấc ngủ\nNgọn đèn khuya bóng mẹ\nSáng một vầng trên sân."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              82,
              83,
              84,
              85
          ],
          "sourceHash": "c1ba1683315df4bbb9fe0db25d146ed6a67db819a21c29a84f608046b035184e",
          "audioNarration": "Bài đọc: Ngưỡng cửa. Tác giả: Vũ Quần Phương. Nơi này ai cũng quen\nNgay từ thời tấm bé\nKhi tay bà, tay mẹ\nCòn dắt vòng đi men. Nơi bố mẹ ngày đêm\nLúc nào qua cũng vội\nNơi bạn bè chạy tới\nThường lúc nào cũng vui. Nơi ấy đã đưa tôi\nBuổi đầu tiên đến lớp\nNay con đường xa tắp\nVẫn đang chờ tôi đi. Nơi ấy ngôi sao khuya\nSoi vào trong giấc ngủ\nNgọn đèn khuya bóng mẹ\nSáng một vầng trên sân."
      }
  },
  'tv-g3-t1-b18': {
      "lessonId": "tv-g3-t1-b18",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          86,
          87,
          88,
          89
      ],
      "sourceHash": "c3e6ab080d00506e22fecb974438571d7ad97237a86391b02c9cad925f2c63cb",
      "readingPassage": {
          "title": "Món quà đặc biệt",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Món quà đặc biệt\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 86–89).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Món quà đặc biệt\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              86,
              87,
              88,
              89
          ],
          "sourceHash": "c3e6ab080d00506e22fecb974438571d7ad97237a86391b02c9cad925f2c63cb",
          "audioNarration": "Bài đọc: Món quà đặc biệt. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Món quà đặc biệt\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 86–89). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Món quà đặc biệt\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b19': {
      "lessonId": "tv-g3-t1-b19",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          90,
          91,
          92
      ],
      "sourceHash": "1fc2e12a31acd1d34f69d0a18fd8f0f9efafb8eb3e8705f9e4776f10450b91e0",
      "readingPassage": {
          "title": "Khi cả nhà bé tí",
          "author": "Trần Hồng Thắng",
          "genre": "poem",
          "content": [
              "Bài thơ: Khi cả nhà bé tí\nTác giả: Trần Hồng Thắng\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 90–92).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Khi cả nhà bé tí\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              90,
              91,
              92
          ],
          "sourceHash": "1fc2e12a31acd1d34f69d0a18fd8f0f9efafb8eb3e8705f9e4776f10450b91e0",
          "audioNarration": "Bài đọc: Khi cả nhà bé tí. Tác giả: Trần Hồng Thắng. Bài thơ: Khi cả nhà bé tí\nTác giả: Trần Hồng Thắng\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 90–92). Đọc thuộc lòng và diễn cảm bài thơ \"Khi cả nhà bé tí\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t1-b2': {
      "lessonId": "tv-g3-b2",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "3d2611807d135464292b322cb4e12b7aa49bd9fc96315ef44dbd220d3ff9b99c",
      "readingPassage": {
          "title": "Về thăm quê",
          "author": "Xuân Hoài",
          "genre": "poem",
          "content": [
              "Nghỉ hè em thích nhất\nĐược theo mẹ về quê\nBà em cũng mừng ghê\nKhi thấy em vào ngõ.",
              "Mảnh vườn quê bé nhỏ\nBao nhiêu là thứ cây\nBà mỗi năm mỗi gầy\nChắc bà luôn vất vả.",
              "Vườn bà có nhiều quả\nChẳng mấy lúc bà ăn\nBà bảo thích để dành\nCho cháu về ra hái.",
              "Em mồ hôi nhễ nhại\nBà theo quạt liền tay\nTừ tay bà gió đến\nThơm bao hương quả vườn\nThoáng nghe bà kể chuyện\nGió thơm say chập chờn."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "3d2611807d135464292b322cb4e12b7aa49bd9fc96315ef44dbd220d3ff9b99c",
          "audioNarration": "Bài đọc: Về thăm quê. Tác giả: Xuân Hoài. Nghỉ hè em thích nhất\nĐược theo mẹ về quê\nBà em cũng mừng ghê\nKhi thấy em vào ngõ. Mảnh vườn quê bé nhỏ\nBao nhiêu là thứ cây\nBà mỗi năm mỗi gầy\nChắc bà luôn vất vả. Vườn bà có nhiều quả\nChẳng mấy lúc bà ăn\nBà bảo thích để dành\nCho cháu về ra hái. Em mồ hôi nhễ nhại\nBà theo quạt liền tay\nTừ tay bà gió đến\nThơm bao hương quả vườn\nThoáng nghe bà kể chuyện\nGió thơm say chập chờn."
      }
  },
  'tv-g3-t1-b20': {
      "lessonId": "tv-g3-t1-b20",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          93,
          94,
          95,
          96
      ],
      "sourceHash": "140ccd2e23a41c9f62d0722351a3aa42715575d93a7f3b918ff5a945cbdf11f7",
      "readingPassage": {
          "title": "Trò chuyện cùng mẹ",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Trò chuyện cùng mẹ\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 93–96).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trò chuyện cùng mẹ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              93,
              94,
              95,
              96
          ],
          "sourceHash": "140ccd2e23a41c9f62d0722351a3aa42715575d93a7f3b918ff5a945cbdf11f7",
          "audioNarration": "Bài đọc: Trò chuyện cùng mẹ. Tác giả: Hải Nam. Bài đọc: Trò chuyện cùng mẹ\nTác giả: Hải Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 93–96). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trò chuyện cùng mẹ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b21': {
      "lessonId": "tv-g3-t1-b21",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          97,
          98,
          99
      ],
      "sourceHash": "af718ab8cae0afb9b88badda6920e67f25f65ce6dc5ab5876381ff348333ba2d",
      "readingPassage": {
          "title": "Tia nắng bé nhỏ",
          "author": "Theo Truyện thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Tia nắng bé nhỏ\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 97–99).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tia nắng bé nhỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              97,
              98,
              99
          ],
          "sourceHash": "af718ab8cae0afb9b88badda6920e67f25f65ce6dc5ab5876381ff348333ba2d",
          "audioNarration": "Bài đọc: Tia nắng bé nhỏ. Tác giả: Theo Truyện thiếu nhi. Bài đọc: Tia nắng bé nhỏ\nTác giả: Theo Truyện thiếu nhi\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 97–99). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tia nắng bé nhỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b22': {
      "lessonId": "tv-g3-t1-b22",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          100,
          101,
          102,
          103
      ],
      "sourceHash": "c4023bf79eadb6e404025f29aefec35d1aca75e8ac31e5457ede75dcb521ae0a",
      "readingPassage": {
          "title": "Để cháu nắm tay ông",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Để cháu nắm tay ông\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 100–103).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Để cháu nắm tay ông\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              100,
              101,
              102,
              103
          ],
          "sourceHash": "c4023bf79eadb6e404025f29aefec35d1aca75e8ac31e5457ede75dcb521ae0a",
          "audioNarration": "Bài đọc: Để cháu nắm tay ông. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Để cháu nắm tay ông\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 100–103). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Để cháu nắm tay ông\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b23': {
      "lessonId": "tv-g3-t1-b23",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          104,
          105,
          106
      ],
      "sourceHash": "dbf42a3d1ecbcfd38cade1eec5d7dc1e67eaa8fae70e978d525e81131e010889",
      "readingPassage": {
          "title": "Tôi yêu em tôi",
          "author": "Phạm Hổ",
          "genre": "poem",
          "content": [
              "Bài thơ: Tôi yêu em tôi\nTác giả: Phạm Hổ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 104–106).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tôi yêu em tôi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              104,
              105,
              106
          ],
          "sourceHash": "dbf42a3d1ecbcfd38cade1eec5d7dc1e67eaa8fae70e978d525e81131e010889",
          "audioNarration": "Bài đọc: Tôi yêu em tôi. Tác giả: Phạm Hổ. Bài thơ: Tôi yêu em tôi\nTác giả: Phạm Hổ\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 104–106). Đọc thuộc lòng và diễn cảm bài thơ \"Tôi yêu em tôi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t1-b24': {
      "lessonId": "tv-g3-t1-b24",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          107,
          108,
          109,
          110,
          111
      ],
      "sourceHash": "75fad447fcfff0ab44af7507f4977711b9f0a978fc792d544c7aeca0c492f606",
      "readingPassage": {
          "title": "Bạn nhỏ trong nhà",
          "author": "Đồng An",
          "genre": "prose",
          "content": [
              "Bài đọc: Bạn nhỏ trong nhà\nTác giả: Đồng An\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 107–111).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bạn nhỏ trong nhà\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              107,
              108,
              109,
              110,
              111
          ],
          "sourceHash": "75fad447fcfff0ab44af7507f4977711b9f0a978fc792d544c7aeca0c492f606",
          "audioNarration": "Bài đọc: Bạn nhỏ trong nhà. Tác giả: Đồng An. Bài đọc: Bạn nhỏ trong nhà\nTác giả: Đồng An\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 107–111). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bạn nhỏ trong nhà\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b25': {
      "lessonId": "tv-g3-t1-b25",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          112,
          113,
          114,
          115
      ],
      "sourceHash": "7482089005f2847ee52aa486a7e2733c4a0f5e37b60ac353081e10ea88c3a000",
      "readingPassage": {
          "title": "Những bậc đá chạm mây",
          "author": "Nguyễn Phan Hách",
          "genre": "prose",
          "content": [
              "Bài đọc: Những bậc đá chạm mây\nTác giả: Nguyễn Phan Hách\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 112–115).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bậc đá chạm mây\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              112,
              113,
              114,
              115
          ],
          "sourceHash": "7482089005f2847ee52aa486a7e2733c4a0f5e37b60ac353081e10ea88c3a000",
          "audioNarration": "Bài đọc: Những bậc đá chạm mây. Tác giả: Nguyễn Phan Hách. Bài đọc: Những bậc đá chạm mây\nTác giả: Nguyễn Phan Hách\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 112–115). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bậc đá chạm mây\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b26': {
      "lessonId": "tv-g3-t1-b26",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          116,
          117,
          118,
          119
      ],
      "sourceHash": "ba51af92179fa460de5e452762482f48448629925786eadb653012b6b78835f5",
      "readingPassage": {
          "title": "Đi tìm mặt trời",
          "author": "Truyện cổ tích Dao",
          "genre": "prose",
          "content": [
              "Bài đọc: Đi tìm mặt trời\nTác giả: Truyện cổ tích Dao\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 116–119).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đi tìm mặt trời\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              116,
              117,
              118,
              119
          ],
          "sourceHash": "ba51af92179fa460de5e452762482f48448629925786eadb653012b6b78835f5",
          "audioNarration": "Bài đọc: Đi tìm mặt trời. Tác giả: Truyện cổ tích Dao. Bài đọc: Đi tìm mặt trời\nTác giả: Truyện cổ tích Dao\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 116–119). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đi tìm mặt trời\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b27': {
      "lessonId": "tv-g3-t1-b27",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          120,
          121,
          122,
          123
      ],
      "sourceHash": "832bc91cdcf2e9daba18c2e13b8f8764e54129e43ae40800bde9f4ec77029911",
      "readingPassage": {
          "title": "Những chiếc áo ấm",
          "author": "Vũ Tú Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những chiếc áo ấm\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 120–123).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những chiếc áo ấm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              120,
              121,
              122,
              123
          ],
          "sourceHash": "832bc91cdcf2e9daba18c2e13b8f8764e54129e43ae40800bde9f4ec77029911",
          "audioNarration": "Bài đọc: Những chiếc áo ấm. Tác giả: Vũ Tú Nam. Bài đọc: Những chiếc áo ấm\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 120–123). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những chiếc áo ấm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b28': {
      "lessonId": "tv-g3-t1-b28",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          124,
          125,
          126,
          127,
          128
      ],
      "sourceHash": "1feec9a21fa58515e3f159d9ddf0a36b17a3c9e201c044eb57b07b189c671d48",
      "readingPassage": {
          "title": "Con đường của bé",
          "author": "Thanh Thảo",
          "genre": "poem",
          "content": [
              "Bài thơ: Con đường của bé\nTác giả: Thanh Thảo\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 124–128).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Con đường của bé\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              124,
              125,
              126,
              127,
              128
          ],
          "sourceHash": "1feec9a21fa58515e3f159d9ddf0a36b17a3c9e201c044eb57b07b189c671d48",
          "audioNarration": "Bài đọc: Con đường của bé. Tác giả: Thanh Thảo. Bài thơ: Con đường của bé\nTác giả: Thanh Thảo\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 124–128). Đọc thuộc lòng và diễn cảm bài thơ \"Con đường của bé\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t1-b29': {
      "lessonId": "tv-g3-t1-b29",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          129,
          130,
          131,
          132
      ],
      "sourceHash": "d2350818d0abd717e5d2ef0c7d689cc5d72e009ba9405bb22c197d4d8cac9666",
      "readingPassage": {
          "title": "Ngôi nhà trong cỏ",
          "author": "Vũ Tú Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngôi nhà trong cỏ\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 129–132).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi nhà trong cỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              129,
              130,
              131,
              132
          ],
          "sourceHash": "d2350818d0abd717e5d2ef0c7d689cc5d72e009ba9405bb22c197d4d8cac9666",
          "audioNarration": "Bài đọc: Ngôi nhà trong cỏ. Tác giả: Vũ Tú Nam. Bài đọc: Ngôi nhà trong cỏ\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 129–132). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi nhà trong cỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b3': {
      "lessonId": "tv-g3-b3",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          17,
          18,
          19,
          20
      ],
      "sourceHash": "ed1a5084927b027963de51545a36ebb3957964e2b0d02de7d6eaa0433263c419",
      "readingPassage": {
          "title": "Cánh rừng trong nắng",
          "author": "Vũ Hùng",
          "genre": "prose",
          "content": [
              "Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo.",
              "Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác.",
              "Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19,
              20
          ],
          "sourceHash": "ed1a5084927b027963de51545a36ebb3957964e2b0d02de7d6eaa0433263c419",
          "audioNarration": "Bài đọc: Cánh rừng trong nắng. Tác giả: Vũ Hùng. Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo. Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác. Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
      }
  },
  'tv-g3-t1-b30': {
      "lessonId": "tv-g3-t1-b30",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          133,
          134,
          135,
          136
      ],
      "sourceHash": "5eb8c0e9e58a02c5991c2f2bef3509ecadb42f6b3b161c19b9747488a68b51bf",
      "readingPassage": {
          "title": "Những ngọn hải đăng",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Những ngọn hải đăng\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 133–136).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn hải đăng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              133,
              134,
              135,
              136
          ],
          "sourceHash": "5eb8c0e9e58a02c5991c2f2bef3509ecadb42f6b3b161c19b9747488a68b51bf",
          "audioNarration": "Bài đọc: Những ngọn hải đăng. Tác giả: Trần Hoài Dương. Bài đọc: Những ngọn hải đăng\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 133–136). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn hải đăng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b31': {
      "lessonId": "tv-g3-t1-b31",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          137,
          138,
          139
      ],
      "sourceHash": "d3ba5af486234868167a4c59b44d405d87831ad3f45b7fb960d761be65dca1f2",
      "readingPassage": {
          "title": "Người làm đồ chơi",
          "author": "Xuân Quỳnh",
          "genre": "prose",
          "content": [
              "Bài đọc: Người làm đồ chơi\nTác giả: Xuân Quỳnh\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 137–139).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người làm đồ chơi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              137,
              138,
              139
          ],
          "sourceHash": "d3ba5af486234868167a4c59b44d405d87831ad3f45b7fb960d761be65dca1f2",
          "audioNarration": "Bài đọc: Người làm đồ chơi. Tác giả: Xuân Quỳnh. Bài đọc: Người làm đồ chơi\nTác giả: Xuân Quỳnh\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 137–139). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người làm đồ chơi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b32': {
      "lessonId": "tv-g3-t1-b32",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          140,
          141,
          142,
          143
      ],
      "sourceHash": "100d12b9a2a2d586aa983c5a5ec3e0bfe9862a152120aed5b82b13519913ee45",
      "readingPassage": {
          "title": "Cây bút thần",
          "author": "Truyện cổ tích thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Cây bút thần\nTác giả: Truyện cổ tích thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 140–143).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây bút thần\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              140,
              141,
              142,
              143
          ],
          "sourceHash": "100d12b9a2a2d586aa983c5a5ec3e0bfe9862a152120aed5b82b13519913ee45",
          "audioNarration": "Bài đọc: Cây bút thần. Tác giả: Truyện cổ tích thế giới. Bài đọc: Cây bút thần\nTác giả: Truyện cổ tích thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 1 (Trang 140–143). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cây bút thần\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t1-b4': {
      "lessonId": "tv-g3-b4",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          21,
          22,
          23,
          24,
          25
      ],
      "sourceHash": "4bc26d29a5bec5bb82683dda315881dd775ef591ce475ecb46ff2bed64960a34",
      "readingPassage": {
          "title": "Lần đầu ra biển",
          "author": "Theo Nguyễn Hoàng",
          "genre": "prose",
          "content": [
              "A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng.",
              "Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển.",
              "Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              21,
              22,
              23,
              24,
              25
          ],
          "sourceHash": "4bc26d29a5bec5bb82683dda315881dd775ef591ce475ecb46ff2bed64960a34",
          "audioNarration": "Bài đọc: Lần đầu ra biển. Tác giả: Theo Nguyễn Hoàng. A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng. Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển. Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
      }
  },
  'tv-g3-t1-b5': {
      "lessonId": "tv-g3-b5",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "35a22ca9eff360814c254f0997f5cc05afcd3f8e8b6a62d1a2c9a1ee4427c027",
      "readingPassage": {
          "title": "Nhật kí tập bơi",
          "author": "Nguyễn Ngọc Mai Chi",
          "genre": "prose",
          "content": [
              "Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy.",
              "Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành!",
              "Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "35a22ca9eff360814c254f0997f5cc05afcd3f8e8b6a62d1a2c9a1ee4427c027",
          "audioNarration": "Bài đọc: Nhật kí tập bơi. Tác giả: Nguyễn Ngọc Mai Chi. Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy. Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành! Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
      }
  },
  'tv-g3-t1-b6': {
      "lessonId": "tv-g3-b6",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "e34d63bdc3babce0374db9b2d94aaec5a498159931cb94fb672111082c5f0594",
      "readingPassage": {
          "title": "Tập nấu ăn",
          "author": "Trung Sơn",
          "genre": "prose",
          "content": [
              "Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô",
              "CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "e34d63bdc3babce0374db9b2d94aaec5a498159931cb94fb672111082c5f0594",
          "audioNarration": "Bài đọc: Tập nấu ăn. Tác giả: Trung Sơn. Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
      }
  },
  'tv-g3-t1-b7': {
      "lessonId": "tv-g3-b7",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          34,
          35,
          36,
          37
      ],
      "sourceHash": "69b0623128cdc11549f6191644cf42637a430e6491cfe64e798c06a8a36b58be",
      "readingPassage": {
          "title": "Mùa hè lấp lánh",
          "author": "Nguyễn Quỳnh Mai",
          "genre": "poem",
          "content": [
              "Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm.",
              "Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ.",
              "Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường.",
              "Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37
          ],
          "sourceHash": "69b0623128cdc11549f6191644cf42637a430e6491cfe64e798c06a8a36b58be",
          "audioNarration": "Bài đọc: Mùa hè lấp lánh. Tác giả: Nguyễn Quỳnh Mai. Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm. Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ. Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường. Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
      }
  },
  'tv-g3-t1-b8': {
      "lessonId": "tv-g3-b8",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          38,
          39,
          40,
          41,
          42
      ],
      "sourceHash": "d8a299cfb78c65e4d8d158d128ca7193aa34ddb3baa0f9125e97f2a918d40af1",
      "readingPassage": {
          "title": "Tạm biệt mùa hè",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức.",
              "Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39,
              40,
              41,
              42
          ],
          "sourceHash": "d8a299cfb78c65e4d8d158d128ca7193aa34ddb3baa0f9125e97f2a918d40af1",
          "audioNarration": "Bài đọc: Tạm biệt mùa hè. Tác giả: Văn Thành Lê. Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức. Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
      }
  },
  'tv-g3-t1-b9': {
      "lessonId": "tv-g3-b9",
      "bookId": "tv-g3-t1",
      "sourcePages": [
          43,
          44,
          45
      ],
      "sourceHash": "71ea7202dc64dabc5688a5c8d565d914cab7ec4c3851f7554a32de7b5528e584",
      "readingPassage": {
          "title": "Đi học vui sao",
          "author": "Phạm Anh Xuân",
          "genre": "poem",
          "content": [
              "Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào.",
              "Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò.",
              "Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay.",
              "Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa.",
              "Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45
          ],
          "sourceHash": "71ea7202dc64dabc5688a5c8d565d914cab7ec4c3851f7554a32de7b5528e584",
          "audioNarration": "Bài đọc: Đi học vui sao. Tác giả: Phạm Anh Xuân. Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào. Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò. Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay. Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa. Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
      }
  },
  'tv-g3-t2-b1': {
      "lessonId": "tv-g3-b15",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          8,
          9,
          10
      ],
      "sourceHash": "e37297b2bd1adfd0a1af14de1247cad94400c8a37a0a8a64a1afb43dbc417441",
      "readingPassage": {
          "title": "Bầu trời",
          "author": "Hải Nam",
          "genre": "prose",
          "content": [
              "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
              "– Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
              "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10
          ],
          "sourceHash": "e37297b2bd1adfd0a1af14de1247cad94400c8a37a0a8a64a1afb43dbc417441",
          "audioNarration": "Bài đọc: Bầu trời. Tác giả: Hải Nam. Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau. – Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương. Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
      }
  },
  'tv-g3-t2-b10': {
      "lessonId": "tv-g3-b24",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "ee78c7cb4e9cfeaedb47d6c98ce7026a498aecfe6d49a00a6b5c94196dbd00e2",
      "readingPassage": {
          "title": "Quả hồng của thỏ con",
          "author": "Đỗ Đăng Dương",
          "genre": "prose",
          "content": [
              "Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp.",
              "Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân.",
              "Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ.",
              "Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "ee78c7cb4e9cfeaedb47d6c98ce7026a498aecfe6d49a00a6b5c94196dbd00e2",
          "audioNarration": "Bài đọc: Quả hồng của thỏ con. Tác giả: Đỗ Đăng Dương. Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp. Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân. Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ. Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
      }
  },
  'tv-g3-t2-b11': {
      "lessonId": "tv-g3-b25",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "1476b07f792cf5452f3a17d6dba12be5d9025eb4408a279bcc4cdaaf301929c6",
      "readingPassage": {
          "title": "Chuyện bên cửa sổ",
          "author": "Trần Hoài Dương",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyện bên cửa sổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bên cửa sổ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "1476b07f792cf5452f3a17d6dba12be5d9025eb4408a279bcc4cdaaf301929c6",
          "audioNarration": "Bài đọc: Chuyện bên cửa sổ. Tác giả: Trần Hoài Dương. Bài đọc: Chuyện bên cửa sổ\nTác giả: Trần Hoài Dương\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyện bên cửa sổ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b12': {
      "lessonId": "tv-g3-t2-b12",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          51,
          52,
          53,
          54
      ],
      "sourceHash": "36fa2cc71e79747785d1607d4ee2cdb2e719fba8f27c21dcc9a98f52f3a92b30",
      "readingPassage": {
          "title": "Tay trái và tay phải",
          "author": "Truyện ngụ ngôn",
          "genre": "prose",
          "content": [
              "Bài đọc: Tay trái và tay phải\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 51–54).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tay trái và tay phải\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54
          ],
          "sourceHash": "36fa2cc71e79747785d1607d4ee2cdb2e719fba8f27c21dcc9a98f52f3a92b30",
          "audioNarration": "Bài đọc: Tay trái và tay phải. Tác giả: Truyện ngụ ngôn. Bài đọc: Tay trái và tay phải\nTác giả: Truyện ngụ ngôn\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 51–54). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tay trái và tay phải\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b13': {
      "lessonId": "tv-g3-t2-b13",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          55,
          56,
          57
      ],
      "sourceHash": "efaeeacc9cbc63dfa22bdd8b5f97c3933f43380ad307e0a29b59985e0bc529de",
      "readingPassage": {
          "title": "Mèo đi câu cá",
          "author": "Nguyễn Trọng Hoàn",
          "genre": "poem",
          "content": [
              "Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá!",
              "Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả.",
              "Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn.",
              "Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ...",
              "Biết bao điều lạ\nTừ bàn tay cô."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              55,
              56,
              57
          ],
          "sourceHash": "efaeeacc9cbc63dfa22bdd8b5f97c3933f43380ad307e0a29b59985e0bc529de",
          "audioNarration": "Bài đọc: Mèo đi câu cá. Tác giả: Nguyễn Trọng Hoàn. Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá! Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả. Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn. Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ... Biết bao điều lạ\nTừ bàn tay cô."
      }
  },
  'tv-g3-t2-b14': {
      "lessonId": "tv-g3-t2-b14",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          58,
          59,
          60,
          61
      ],
      "sourceHash": "a4f023295ebd4aaae2433f7b6d53874315f1cf69c323a3aa08f5dc45b83988ba",
      "readingPassage": {
          "title": "Học nghề",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Học nghề\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 58–61).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Học nghề\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              58,
              59,
              60,
              61
          ],
          "sourceHash": "a4f023295ebd4aaae2433f7b6d53874315f1cf69c323a3aa08f5dc45b83988ba",
          "audioNarration": "Bài đọc: Học nghề. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Học nghề\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 58–61). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Học nghề\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b15': {
      "lessonId": "tv-g3-t2-b15",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          62,
          63,
          64,
          65
      ],
      "sourceHash": "99f622294992b1869b641029a473580ff2ff6c0a56c1df07f0eeae85c14a7b85",
      "readingPassage": {
          "title": "Ngày như thế nào là đẹp?",
          "author": "Theo V. O-xê-ê-va",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngày như thế nào là đẹp?\nTác giả: Theo V. O-xê-ê-va\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 62–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày như thế nào là đẹp?\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              62,
              63,
              64,
              65
          ],
          "sourceHash": "99f622294992b1869b641029a473580ff2ff6c0a56c1df07f0eeae85c14a7b85",
          "audioNarration": "Bài đọc: Ngày như thế nào là đẹp?. Tác giả: Theo V. O-xê-ê-va. Bài đọc: Ngày như thế nào là đẹp?\nTác giả: Theo V. O-xê-ê-va\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 62–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày như thế nào là đẹp?\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b16': {
      "lessonId": "tv-g3-t2-b16",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79
      ],
      "sourceHash": "db66f734703530f4fdfb32d9c00b61d4179e7aad35d576ffb71f017d7a4c3ba0",
      "readingPassage": {
          "title": "A lô, tớ đây",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi.",
              "Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi.",
              "Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ.",
              "Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79
          ],
          "sourceHash": "db66f734703530f4fdfb32d9c00b61d4179e7aad35d576ffb71f017d7a4c3ba0",
          "audioNarration": "Bài đọc: A lô, tớ đây. Tác giả: Xuân Quỳnh. Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi. Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi. Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ. Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
      }
  },
  'tv-g3-t2-b17': {
      "lessonId": "tv-g3-t2-b17",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          80,
          81,
          82
      ],
      "sourceHash": "cff4ee23100f78de533f3e7d779320a8623199c08e0ce4454386204329af63b9",
      "readingPassage": {
          "title": "Đất nước là gì?",
          "author": "Huỳnh Mai Liên",
          "genre": "poem",
          "content": [
              "Bài thơ: Đất nước là gì?\nTác giả: Huỳnh Mai Liên\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 80–82).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Đất nước là gì?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              80,
              81,
              82
          ],
          "sourceHash": "cff4ee23100f78de533f3e7d779320a8623199c08e0ce4454386204329af63b9",
          "audioNarration": "Bài đọc: Đất nước là gì?. Tác giả: Huỳnh Mai Liên. Bài thơ: Đất nước là gì?\nTác giả: Huỳnh Mai Liên\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 80–82). Đọc thuộc lòng và diễn cảm bài thơ \"Đất nước là gì?\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t2-b18': {
      "lessonId": "tv-g3-t2-b18",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          83,
          84,
          85,
          86
      ],
      "sourceHash": "80f53738996c80c91b3e09728fbfc05e11a6b9a76f1d5faaece11767d623f094",
      "readingPassage": {
          "title": "Núi quê tôi",
          "author": "Bùi Minh Quốc",
          "genre": "prose",
          "content": [
              "Bài đọc: Núi quê tôi\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 83–86).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Núi quê tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              83,
              84,
              85,
              86
          ],
          "sourceHash": "80f53738996c80c91b3e09728fbfc05e11a6b9a76f1d5faaece11767d623f094",
          "audioNarration": "Bài đọc: Núi quê tôi. Tác giả: Bùi Minh Quốc. Bài đọc: Núi quê tôi\nTác giả: Bùi Minh Quốc\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 83–86). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Núi quê tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b19': {
      "lessonId": "tv-g3-t2-b19",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          87,
          88,
          89,
          90
      ],
      "sourceHash": "4cd53c26e61b701ff0274ed9b90a4ad91a78ef5600c0fd9839f83f5bc90b49d7",
      "readingPassage": {
          "title": "Sông Hương",
          "author": "Hoàng Phủ Ngọc Tường",
          "genre": "prose",
          "content": [
              "Bài đọc: Sông Hương\nTác giả: Hoàng Phủ Ngọc Tường\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 87–90).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sông Hương\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              87,
              88,
              89,
              90
          ],
          "sourceHash": "4cd53c26e61b701ff0274ed9b90a4ad91a78ef5600c0fd9839f83f5bc90b49d7",
          "audioNarration": "Bài đọc: Sông Hương. Tác giả: Hoàng Phủ Ngọc Tường. Bài đọc: Sông Hương\nTác giả: Hoàng Phủ Ngọc Tường\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 87–90). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sông Hương\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b2': {
      "lessonId": "tv-g3-b16",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          11,
          12,
          13,
          14
      ],
      "sourceHash": "f5ae65059bb9986da6adbe1be55737ad021ee8d5b52cd9e208b206034d75b4f4",
      "readingPassage": {
          "title": "Mưa",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi.",
              "Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi.",
              "Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ.",
              "Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              11,
              12,
              13,
              14
          ],
          "sourceHash": "f5ae65059bb9986da6adbe1be55737ad021ee8d5b52cd9e208b206034d75b4f4",
          "audioNarration": "Bài đọc: Mưa. Tác giả: Xuân Quỳnh. Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi. Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi. Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ. Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
      }
  },
  'tv-g3-t2-b20': {
      "lessonId": "tv-g3-t2-b20",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          91,
          92,
          93,
          94
      ],
      "sourceHash": "6632b499aeae7e41892688f769bb2f4c841227ce2bb6665e1181556cbf31061f",
      "readingPassage": {
          "title": "Tiếng nước mình",
          "author": "Trúc Thông",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng nước mình\nTác giả: Trúc Thông\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 91–94).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nước mình\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              91,
              92,
              93,
              94
          ],
          "sourceHash": "6632b499aeae7e41892688f769bb2f4c841227ce2bb6665e1181556cbf31061f",
          "audioNarration": "Bài đọc: Tiếng nước mình. Tác giả: Trúc Thông. Bài thơ: Tiếng nước mình\nTác giả: Trúc Thông\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 91–94). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nước mình\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t2-b21': {
      "lessonId": "tv-g3-t2-b21",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          95,
          96,
          97
      ],
      "sourceHash": "a4165d55ef5bfe7f8501e98111557643e4b9bd509c783491918105ffaaf8eb7d",
      "readingPassage": {
          "title": "Nhà rông",
          "author": "Theo Báo Giáo dục & Thời đại",
          "genre": "prose",
          "content": [
              "Bài đọc: Nhà rông\nTác giả: Theo Báo Giáo dục & Thời đại\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 95–97).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nhà rông\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              95,
              96,
              97
          ],
          "sourceHash": "a4165d55ef5bfe7f8501e98111557643e4b9bd509c783491918105ffaaf8eb7d",
          "audioNarration": "Bài đọc: Nhà rông. Tác giả: Theo Báo Giáo dục & Thời đại. Bài đọc: Nhà rông\nTác giả: Theo Báo Giáo dục & Thời đại\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 95–97). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nhà rông\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b22': {
      "lessonId": "tv-g3-t2-b22",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          98,
          99,
          100,
          101
      ],
      "sourceHash": "d34743621f73cc41bc2b117c1bf92972365912dc4b6a428c0dcc4f5b76996b1f",
      "readingPassage": {
          "title": "Sự tích ông Đùng, bà Đùng",
          "author": "Truyện cổ tích Mường",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích ông Đùng, bà Đùng\nTác giả: Truyện cổ tích Mường\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 98–101).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích ông Đùng, bà Đùng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              98,
              99,
              100,
              101
          ],
          "sourceHash": "d34743621f73cc41bc2b117c1bf92972365912dc4b6a428c0dcc4f5b76996b1f",
          "audioNarration": "Bài đọc: Sự tích ông Đùng, bà Đùng. Tác giả: Truyện cổ tích Mường. Bài đọc: Sự tích ông Đùng, bà Đùng\nTác giả: Truyện cổ tích Mường\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 98–101). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích ông Đùng, bà Đùng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b23': {
      "lessonId": "tv-g3-t2-b23",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          102,
          103,
          104,
          105
      ],
      "sourceHash": "0b547af00696818968e682566b1b67613f87466a4cd0494a6fad14f40b27889a",
      "readingPassage": {
          "title": "Hai Bà Trưng",
          "author": "Theo Đại Việt sử ký toàn thư",
          "genre": "prose",
          "content": [
              "Bài đọc: Hai Bà Trưng\nTác giả: Theo Đại Việt sử ký toàn thư\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 102–105).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hai Bà Trưng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              102,
              103,
              104,
              105
          ],
          "sourceHash": "0b547af00696818968e682566b1b67613f87466a4cd0494a6fad14f40b27889a",
          "audioNarration": "Bài đọc: Hai Bà Trưng. Tác giả: Theo Đại Việt sử ký toàn thư. Bài đọc: Hai Bà Trưng\nTác giả: Theo Đại Việt sử ký toàn thư\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 102–105). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hai Bà Trưng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b24': {
      "lessonId": "tv-g3-t2-b24",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          106,
          107,
          108,
          109,
          110
      ],
      "sourceHash": "a579b10f9624ea8f44f1cc96733a6dfcf581a86c8ea7a1c04ad5981435e31911",
      "readingPassage": {
          "title": "Cùng Bác qua suối",
          "author": "Theo Bác Hồ kính yêu",
          "genre": "prose",
          "content": [
              "Bài đọc: Cùng Bác qua suối\nTác giả: Theo Bác Hồ kính yêu\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 106–110).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cùng Bác qua suối\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              106,
              107,
              108,
              109,
              110
          ],
          "sourceHash": "a579b10f9624ea8f44f1cc96733a6dfcf581a86c8ea7a1c04ad5981435e31911",
          "audioNarration": "Bài đọc: Cùng Bác qua suối. Tác giả: Theo Bác Hồ kính yêu. Bài đọc: Cùng Bác qua suối\nTác giả: Theo Bác Hồ kính yêu\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 106–110). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cùng Bác qua suối\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b25': {
      "lessonId": "tv-g3-t2-b25",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          111,
          112,
          113
      ],
      "sourceHash": "c4cca4e606b586ba02e18294f7219a285054e799d941635bca50e569218267df",
      "readingPassage": {
          "title": "Ngọn lửa Ô-lim-pích",
          "author": "Lịch sử thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngọn lửa Ô-lim-pích\nTác giả: Lịch sử thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 111–113).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngọn lửa Ô-lim-pích\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              111,
              112,
              113
          ],
          "sourceHash": "c4cca4e606b586ba02e18294f7219a285054e799d941635bca50e569218267df",
          "audioNarration": "Bài đọc: Ngọn lửa Ô-lim-pích. Tác giả: Lịch sử thế giới. Bài đọc: Ngọn lửa Ô-lim-pích\nTác giả: Lịch sử thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 111–113). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngọn lửa Ô-lim-pích\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b26': {
      "lessonId": "tv-g3-t2-b26",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          114,
          115,
          116,
          117
      ],
      "sourceHash": "c4faa8ab0b7185c920bccd69907f5529705d29bba23ec951f2efb829d8f5b3ed",
      "readingPassage": {
          "title": "Rô-bốt ở quanh ta",
          "author": "Khoa học & Đời sống",
          "genre": "prose",
          "content": [
              "Bài đọc: Rô-bốt ở quanh ta\nTác giả: Khoa học & Đời sống\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 114–117).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Rô-bốt ở quanh ta\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              114,
              115,
              116,
              117
          ],
          "sourceHash": "c4faa8ab0b7185c920bccd69907f5529705d29bba23ec951f2efb829d8f5b3ed",
          "audioNarration": "Bài đọc: Rô-bốt ở quanh ta. Tác giả: Khoa học & Đời sống. Bài đọc: Rô-bốt ở quanh ta\nTác giả: Khoa học & Đời sống\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 114–117). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Rô-bốt ở quanh ta\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b27': {
      "lessonId": "tv-g3-t2-b27",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          118,
          119,
          120,
          121
      ],
      "sourceHash": "aa551ccb27e49aba75568f5a965190c691b09156618e987776423d18d4826ed8",
      "readingPassage": {
          "title": "Thư của ông Trái Đất gửi các bạn nhỏ",
          "author": "Môi trường xanh",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư của ông Trái Đất gửi các bạn nhỏ\nTác giả: Môi trường xanh\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 118–121).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của ông Trái Đất gửi các bạn nhỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              118,
              119,
              120,
              121
          ],
          "sourceHash": "aa551ccb27e49aba75568f5a965190c691b09156618e987776423d18d4826ed8",
          "audioNarration": "Bài đọc: Thư của ông Trái Đất gửi các bạn nhỏ. Tác giả: Môi trường xanh. Bài đọc: Thư của ông Trái Đất gửi các bạn nhỏ\nTác giả: Môi trường xanh\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 118–121). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của ông Trái Đất gửi các bạn nhỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b28': {
      "lessonId": "tv-g3-t2-b28",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          122,
          123,
          124,
          125
      ],
      "sourceHash": "2ea327b3d75495a340726babb0b350671c6a7c036a94b83d5ed81438445bfa54",
      "readingPassage": {
          "title": "Những điều nhỏ tớ làm cho Trái Đất",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Những điều nhỏ tớ làm cho Trái Đất\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 122–125).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những điều nhỏ tớ làm cho Trái Đất\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123,
              124,
              125
          ],
          "sourceHash": "2ea327b3d75495a340726babb0b350671c6a7c036a94b83d5ed81438445bfa54",
          "audioNarration": "Bài đọc: Những điều nhỏ tớ làm cho Trái Đất. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Những điều nhỏ tớ làm cho Trái Đất\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 122–125). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những điều nhỏ tớ làm cho Trái Đất\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b29': {
      "lessonId": "tv-g3-t2-b29",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          126,
          127,
          128,
          129
      ],
      "sourceHash": "6aa52976af3812b2888335b1a09309d043bc84567c26354fccd428d3bb4d449a",
      "readingPassage": {
          "title": "Bác sĩ Y-éc-xanh",
          "author": "Danh nhân thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Bác sĩ Y-éc-xanh\nTác giả: Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 126–129).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bác sĩ Y-éc-xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127,
              128,
              129
          ],
          "sourceHash": "6aa52976af3812b2888335b1a09309d043bc84567c26354fccd428d3bb4d449a",
          "audioNarration": "Bài đọc: Bác sĩ Y-éc-xanh. Tác giả: Danh nhân thế giới. Bài đọc: Bác sĩ Y-éc-xanh\nTác giả: Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 126–129). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bác sĩ Y-éc-xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g3-t2-b3': {
      "lessonId": "tv-g3-b17",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          15,
          16,
          17,
          18
      ],
      "sourceHash": "7ce1e74a09b050bf6f849e0e03cdba3935fad2998677f6d90b6932f6541f3309",
      "readingPassage": {
          "title": "Cóc kiện Trời",
          "author": "Vũ Hùng",
          "genre": "prose",
          "content": [
              "Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo.",
              "Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác.",
              "Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              15,
              16,
              17,
              18
          ],
          "sourceHash": "7ce1e74a09b050bf6f849e0e03cdba3935fad2998677f6d90b6932f6541f3309",
          "audioNarration": "Bài đọc: Cóc kiện Trời. Tác giả: Vũ Hùng. Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo. Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác. Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
      }
  },
  'tv-g3-t2-b30': {
      "lessonId": "tv-g3-t2-b30",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          130,
          131,
          132,
          133
      ],
      "sourceHash": "c6cca4b44000fdae158cacf49c11160967222aab389f725ef1d8808524881672",
      "readingPassage": {
          "title": "Một mái nhà chung",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Một mái nhà chung\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 130–133).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Một mái nhà chung\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              130,
              131,
              132,
              133
          ],
          "sourceHash": "c6cca4b44000fdae158cacf49c11160967222aab389f725ef1d8808524881672",
          "audioNarration": "Bài đọc: Một mái nhà chung. Tác giả: Định Hải. Bài thơ: Một mái nhà chung\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 3 tập 2 (Trang 130–133). Đọc thuộc lòng và diễn cảm bài thơ \"Một mái nhà chung\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g3-t2-b4': {
      "lessonId": "tv-g3-b18",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          19,
          20,
          21,
          22
      ],
      "sourceHash": "e7b30a49a8758591cac25265d501ad047436666e6e316e5126c27b8a235a29af",
      "readingPassage": {
          "title": "Những cái tên đáng yêu",
          "author": "Theo Nguyễn Hoàng",
          "genre": "prose",
          "content": [
              "A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng.",
              "Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển.",
              "Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              19,
              20,
              21,
              22
          ],
          "sourceHash": "e7b30a49a8758591cac25265d501ad047436666e6e316e5126c27b8a235a29af",
          "audioNarration": "Bài đọc: Những cái tên đáng yêu. Tác giả: Theo Nguyễn Hoàng. A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng. Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển. Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
      }
  },
  'tv-g3-t2-b5': {
      "lessonId": "tv-g3-b19",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          23,
          24,
          25,
          26
      ],
      "sourceHash": "dba9abdd7350d1018e5bcc09aae21240c2fd15ea45476669f1672589ac96165d",
      "readingPassage": {
          "title": "Ngày hội rừng xanh",
          "author": "Nguyễn Ngọc Mai Chi",
          "genre": "prose",
          "content": [
              "Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy.",
              "Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành!",
              "Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25,
              26
          ],
          "sourceHash": "dba9abdd7350d1018e5bcc09aae21240c2fd15ea45476669f1672589ac96165d",
          "audioNarration": "Bài đọc: Ngày hội rừng xanh. Tác giả: Nguyễn Ngọc Mai Chi. Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy. Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành! Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
      }
  },
  'tv-g3-t2-b6': {
      "lessonId": "tv-g3-b20",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          27,
          28,
          29,
          30,
          31
      ],
      "sourceHash": "a524c3f000626806567b23dc4dad19378c1c4e0c202304d08ec6e8e26a41bcc4",
      "readingPassage": {
          "title": "Cây gạo",
          "author": "Trung Sơn",
          "genre": "prose",
          "content": [
              "Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô",
              "CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              27,
              28,
              29,
              30,
              31
          ],
          "sourceHash": "a524c3f000626806567b23dc4dad19378c1c4e0c202304d08ec6e8e26a41bcc4",
          "audioNarration": "Bài đọc: Cây gạo. Tác giả: Trung Sơn. Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
      }
  },
  'tv-g3-t2-b7': {
      "lessonId": "tv-g3-b21",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          32,
          33,
          34
      ],
      "sourceHash": "3397d2a63628e019cb458468169a16657f49856ff2d8643293589b57b4c2b7e6",
      "readingPassage": {
          "title": "Một trời xanh của tôi",
          "author": "Nguyễn Quỳnh Mai",
          "genre": "poem",
          "content": [
              "Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm.",
              "Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ.",
              "Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường.",
              "Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              32,
              33,
              34
          ],
          "sourceHash": "3397d2a63628e019cb458468169a16657f49856ff2d8643293589b57b4c2b7e6",
          "audioNarration": "Bài đọc: Một trời xanh của tôi. Tác giả: Nguyễn Quỳnh Mai. Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm. Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ. Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường. Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
      }
  },
  'tv-g3-t2-b8': {
      "lessonId": "tv-g3-b22",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "176e35aac146b1a2d7d885c6c3b3533ff939d3e0832bdaa5906fb14904fad57a",
      "readingPassage": {
          "title": "Bầy voi rừng Trường Sơn",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức.",
              "Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "176e35aac146b1a2d7d885c6c3b3533ff939d3e0832bdaa5906fb14904fad57a",
          "audioNarration": "Bài đọc: Bầy voi rừng Trường Sơn. Tác giả: Văn Thành Lê. Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức. Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
      }
  },
  'tv-g3-t2-b9': {
      "lessonId": "tv-g3-b23",
      "bookId": "tv-g3-t2",
      "sourcePages": [
          40,
          41,
          42,
          43
      ],
      "sourceHash": "dae5bff05fee1190058e6a01bc5e4b6d1f75017fc7b54e2e3531db438f5bcc5e",
      "readingPassage": {
          "title": "Lời kêu gọi toàn dân tập thể dục",
          "author": "Phạm Anh Xuân",
          "genre": "poem",
          "content": [
              "Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào.",
              "Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò.",
              "Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay.",
              "Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa.",
              "Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42,
              43
          ],
          "sourceHash": "dae5bff05fee1190058e6a01bc5e4b6d1f75017fc7b54e2e3531db438f5bcc5e",
          "audioNarration": "Bài đọc: Lời kêu gọi toàn dân tập thể dục. Tác giả: Phạm Anh Xuân. Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào. Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò. Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay. Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa. Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
      }
  },
  'tv-g4-b1': {
      "lessonId": "tv-g4-b1",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "3da8b31f6ad52dbe2acfa022cfac6144398854884f883642a8a2b50c682ca2da",
      "readingPassage": {
          "title": "Điều kì diệu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Điều kì diệu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điều kì diệu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "3da8b31f6ad52dbe2acfa022cfac6144398854884f883642a8a2b50c682ca2da",
          "audioNarration": "Bài đọc: Điều kì diệu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Điều kì diệu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điều kì diệu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b10': {
      "lessonId": "tv-g4-b10",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "25ffbd3af37167daf5f87d7b01f24df355bc4b6fb43b68e550ffa65e9fd5c133",
      "readingPassage": {
          "title": "Tiếng nói của cỏ cây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng nói của cỏ cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 44–47).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nói của cỏ cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "25ffbd3af37167daf5f87d7b01f24df355bc4b6fb43b68e550ffa65e9fd5c133",
          "audioNarration": "Bài đọc: Tiếng nói của cỏ cây. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Tiếng nói của cỏ cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 44–47). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nói của cỏ cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-b11': {
      "lessonId": "tv-g4-b11",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "bd1a30349f90c738c794bd7926d386aaae65430c0fb42d1fa156b805bee1e485",
      "readingPassage": {
          "title": "Tập làm văn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tập làm văn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập làm văn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "bd1a30349f90c738c794bd7926d386aaae65430c0fb42d1fa156b805bee1e485",
          "audioNarration": "Bài đọc: Tập làm văn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tập làm văn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập làm văn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b12': {
      "lessonId": "tv-g4-b12",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "69c72e7e31e06f9623f6e0c3bfefc651b396856b4ab281d1896bc0e8ae9c940a",
      "readingPassage": {
          "title": "Hải Thượng Lãn Ông",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hải Thượng Lãn Ông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hải Thượng Lãn Ông\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "69c72e7e31e06f9623f6e0c3bfefc651b396856b4ab281d1896bc0e8ae9c940a",
          "audioNarration": "Bài đọc: Hải Thượng Lãn Ông. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hải Thượng Lãn Ông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hải Thượng Lãn Ông\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b13': {
      "lessonId": "tv-g4-b13",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "4a2c0db35cbd63fe56af557b8ccb64d02a37ead42757ebd8e4e6999675a56c8a",
      "readingPassage": {
          "title": "Vệt phấn trên mặt bàn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Vệt phấn trên mặt bàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 12–15).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vệt phấn trên mặt bàn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "4a2c0db35cbd63fe56af557b8ccb64d02a37ead42757ebd8e4e6999675a56c8a",
          "audioNarration": "Bài đọc: Vệt phấn trên mặt bàn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Vệt phấn trên mặt bàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 12–15). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vệt phấn trên mặt bàn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b14': {
      "lessonId": "tv-g4-b14",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          16,
          17,
          18,
          19
      ],
      "sourceHash": "9fede10b6dae4ebd845a97b99ce9ce7606113426f7ec0a0dfc3149bf3f9c5f03",
      "readingPassage": {
          "title": "Ông Bụt đã đến",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ông Bụt đã đến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 16–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ông Bụt đã đến\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18,
              19
          ],
          "sourceHash": "9fede10b6dae4ebd845a97b99ce9ce7606113426f7ec0a0dfc3149bf3f9c5f03",
          "audioNarration": "Bài đọc: Ông Bụt đã đến. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Ông Bụt đã đến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 16–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ông Bụt đã đến\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b15': {
      "lessonId": "tv-g4-b15",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          20,
          21,
          22,
          23
      ],
      "sourceHash": "02a40ea95bffbe3c649bdd3bef0cd0fc3a3e5d8cbf1425f0983166e44e2966b9",
      "readingPassage": {
          "title": "Quả ngọt cuối mùa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Quả ngọt cuối mùa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 20–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quả ngọt cuối mùa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22,
              23
          ],
          "sourceHash": "02a40ea95bffbe3c649bdd3bef0cd0fc3a3e5d8cbf1425f0983166e44e2966b9",
          "audioNarration": "Bài đọc: Quả ngọt cuối mùa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Quả ngọt cuối mùa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 20–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quả ngọt cuối mùa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b16': {
      "lessonId": "tv-g4-b16",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          24,
          25,
          26,
          27
      ],
      "sourceHash": "80c2b404fddb0f0f9dc3702d9d4d682315de5ec8564306caac3d796970e86ec6",
      "readingPassage": {
          "title": "Tờ báo tường của tôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tờ báo tường của tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 24–27).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tờ báo tường của tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26,
              27
          ],
          "sourceHash": "80c2b404fddb0f0f9dc3702d9d4d682315de5ec8564306caac3d796970e86ec6",
          "audioNarration": "Bài đọc: Tờ báo tường của tôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tờ báo tường của tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 24–27). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tờ báo tường của tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b17': {
      "lessonId": "tv-g4-b17",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          28,
          29,
          30
      ],
      "sourceHash": "e49929031e3100a1226e4ecd10193beaa2e960fb816026ac8609f65ef0617877",
      "readingPassage": {
          "title": "Tiếng ru",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tiếng ru\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 28–30).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng ru\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29,
              30
          ],
          "sourceHash": "e49929031e3100a1226e4ecd10193beaa2e960fb816026ac8609f65ef0617877",
          "audioNarration": "Bài đọc: Tiếng ru. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tiếng ru\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 28–30). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng ru\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b18': {
      "lessonId": "tv-g4-b18",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          31,
          32,
          33,
          34
      ],
      "sourceHash": "b55da5d09fc976c8580d3ec0a3d6434b89da16fd476467c1a6179d45bc8fd9d9",
      "readingPassage": {
          "title": "Con muốn làm một cái cây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Con muốn làm một cái cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 31–34).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Con muốn làm một cái cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33,
              34
          ],
          "sourceHash": "b55da5d09fc976c8580d3ec0a3d6434b89da16fd476467c1a6179d45bc8fd9d9",
          "audioNarration": "Bài đọc: Con muốn làm một cái cây. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Con muốn làm một cái cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 31–34). Đọc thuộc lòng và diễn cảm bài thơ \"Con muốn làm một cái cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-b19': {
      "lessonId": "tv-g4-b19",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "2ddcbb0c34ed7bd81dbb63e59269b70c7443ec20d4b86937253f5af64f4d93d9",
      "readingPassage": {
          "title": "Trên khóm tre đầu ngõ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Trên khóm tre đầu ngõ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 35–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên khóm tre đầu ngõ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "2ddcbb0c34ed7bd81dbb63e59269b70c7443ec20d4b86937253f5af64f4d93d9",
          "audioNarration": "Bài đọc: Trên khóm tre đầu ngõ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Trên khóm tre đầu ngõ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 35–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên khóm tre đầu ngõ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b2': {
      "lessonId": "tv-g4-b2",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "3090511e397f4fe8736e82dea0f6b9323cabad6eb8d5b2031a470abed54fffa7",
      "readingPassage": {
          "title": "Thi nhạc",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thi nhạc\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 12–15).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thi nhạc\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "3090511e397f4fe8736e82dea0f6b9323cabad6eb8d5b2031a470abed54fffa7",
          "audioNarration": "Bài đọc: Thi nhạc. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thi nhạc\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 12–15). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thi nhạc\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b20': {
      "lessonId": "tv-g4-b20",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          40,
          41,
          42,
          43
      ],
      "sourceHash": "772c687c5a2a931adcdb4e17fc2832af7cd26ec9eeded30c92b7e7b5fc7472f0",
      "readingPassage": {
          "title": "Sự tích con Rồng cháu Tiên",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích con Rồng cháu Tiên\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 40–43).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích con Rồng cháu Tiên\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42,
              43
          ],
          "sourceHash": "772c687c5a2a931adcdb4e17fc2832af7cd26ec9eeded30c92b7e7b5fc7472f0",
          "audioNarration": "Bài đọc: Sự tích con Rồng cháu Tiên. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Sự tích con Rồng cháu Tiên\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 40–43). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích con Rồng cháu Tiên\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b21': {
      "lessonId": "tv-g4-b21",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "06f792ee1ae29193eee7d5a1f894caffec6e210bc84ff0a5354f9481d3014261",
      "readingPassage": {
          "title": "Cảm xúc Trường Sa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cảm xúc Trường Sa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 44–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm xúc Trường Sa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "06f792ee1ae29193eee7d5a1f894caffec6e210bc84ff0a5354f9481d3014261",
          "audioNarration": "Bài đọc: Cảm xúc Trường Sa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Cảm xúc Trường Sa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 44–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm xúc Trường Sa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b22': {
      "lessonId": "tv-g4-b22",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "aeabb95493a1cd484319d75519a490185f2340fc24842dc2bc577ce9aecedf08",
      "readingPassage": {
          "title": "Sáng tháng Năm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sáng tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sáng tháng Năm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "aeabb95493a1cd484319d75519a490185f2340fc24842dc2bc577ce9aecedf08",
          "audioNarration": "Bài đọc: Sáng tháng Năm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Sáng tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sáng tháng Năm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b3': {
      "lessonId": "tv-g4-b3",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          16,
          17,
          18,
          19
      ],
      "sourceHash": "9153c44d42a68a0120769c3cbc31968c6a65a2dab0d077cf22a7abd73ca496cd",
      "readingPassage": {
          "title": "Anh em sinh đôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Anh em sinh đôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 16–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh em sinh đôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18,
              19
          ],
          "sourceHash": "9153c44d42a68a0120769c3cbc31968c6a65a2dab0d077cf22a7abd73ca496cd",
          "audioNarration": "Bài đọc: Anh em sinh đôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Anh em sinh đôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 16–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh em sinh đôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b4': {
      "lessonId": "tv-g4-b4",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          20,
          21,
          22
      ],
      "sourceHash": "9371068e66997f396eddbcde75e2d10affbadd65ff9db07403959b8f780356a0",
      "readingPassage": {
          "title": "Công chúa và người dẫn chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Công chúa và người dẫn chuyện\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 20–22).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Công chúa và người dẫn chuyện\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22
          ],
          "sourceHash": "9371068e66997f396eddbcde75e2d10affbadd65ff9db07403959b8f780356a0",
          "audioNarration": "Bài đọc: Công chúa và người dẫn chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Công chúa và người dẫn chuyện\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 20–22). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Công chúa và người dẫn chuyện\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b5': {
      "lessonId": "tv-g4-b5",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          23,
          24,
          25
      ],
      "sourceHash": "d33b5c9703b70022b518e6895c61b9d8545ed40f251a93a3e15b2826bf5f374d",
      "readingPassage": {
          "title": "Thần lằn xanh và tắc kè",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thần lằn xanh và tắc kè\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 23–25).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thần lằn xanh và tắc kè\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25
          ],
          "sourceHash": "d33b5c9703b70022b518e6895c61b9d8545ed40f251a93a3e15b2826bf5f374d",
          "audioNarration": "Bài đọc: Thần lằn xanh và tắc kè. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thần lằn xanh và tắc kè\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 23–25). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thần lằn xanh và tắc kè\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b6': {
      "lessonId": "tv-g4-b6",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "12f0a96f961f98e5d96b86208458a3bc82f4b1bfb95a8f3937c4d65748922032",
      "readingPassage": {
          "title": "Nghệ sĩ trống",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Nghệ sĩ trống\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 26–29).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ sĩ trống\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "12f0a96f961f98e5d96b86208458a3bc82f4b1bfb95a8f3937c4d65748922032",
          "audioNarration": "Bài đọc: Nghệ sĩ trống. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Nghệ sĩ trống\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 26–29). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ sĩ trống\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b7': {
      "lessonId": "tv-g4-b7",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "a73613b97b2bf7b999e5e5abce4ad251d73383151aea9590833f6de2db7098ce",
      "readingPassage": {
          "title": "Những bức chân dung",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những bức chân dung\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bức chân dung\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "a73613b97b2bf7b999e5e5abce4ad251d73383151aea9590833f6de2db7098ce",
          "audioNarration": "Bài đọc: Những bức chân dung. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Những bức chân dung\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bức chân dung\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b8': {
      "lessonId": "tv-g4-b8",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38
      ],
      "sourceHash": "569d05470812735a7e97b51222eb799126e4e4183df47446ec4157bb6b05ffee",
      "readingPassage": {
          "title": "Đò ngang",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đò ngang\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 34–38).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đò ngang\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38
          ],
          "sourceHash": "569d05470812735a7e97b51222eb799126e4e4183df47446ec4157bb6b05ffee",
          "audioNarration": "Bài đọc: Đò ngang. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đò ngang\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 34–38). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đò ngang\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-b9': {
      "lessonId": "tv-g4-b9",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          39,
          40,
          41,
          42,
          43
      ],
      "sourceHash": "8d6ec0eb03603368c86d3cc495434e1b26a8eda0d84c54427b76cfe4cc3f6810",
      "readingPassage": {
          "title": "Bầu trời trong quả trứng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bầu trời trong quả trứng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 39–43).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời trong quả trứng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              39,
              40,
              41,
              42,
              43
          ],
          "sourceHash": "8d6ec0eb03603368c86d3cc495434e1b26a8eda0d84c54427b76cfe4cc3f6810",
          "audioNarration": "Bài đọc: Bầu trời trong quả trứng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bầu trời trong quả trứng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 39–43). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời trong quả trứng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b1': {
      "lessonId": "tv-g4-b1",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "3da8b31f6ad52dbe2acfa022cfac6144398854884f883642a8a2b50c682ca2da",
      "readingPassage": {
          "title": "Điều kì diệu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Điều kì diệu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điều kì diệu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "3da8b31f6ad52dbe2acfa022cfac6144398854884f883642a8a2b50c682ca2da",
          "audioNarration": "Bài đọc: Điều kì diệu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Điều kì diệu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điều kì diệu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b10': {
      "lessonId": "tv-g4-b10",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "25ffbd3af37167daf5f87d7b01f24df355bc4b6fb43b68e550ffa65e9fd5c133",
      "readingPassage": {
          "title": "Tiếng nói của cỏ cây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng nói của cỏ cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 44–47).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nói của cỏ cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "25ffbd3af37167daf5f87d7b01f24df355bc4b6fb43b68e550ffa65e9fd5c133",
          "audioNarration": "Bài đọc: Tiếng nói của cỏ cây. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Tiếng nói của cỏ cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 44–47). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng nói của cỏ cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t1-b11': {
      "lessonId": "tv-g4-b11",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "bd1a30349f90c738c794bd7926d386aaae65430c0fb42d1fa156b805bee1e485",
      "readingPassage": {
          "title": "Tập làm văn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tập làm văn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập làm văn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "bd1a30349f90c738c794bd7926d386aaae65430c0fb42d1fa156b805bee1e485",
          "audioNarration": "Bài đọc: Tập làm văn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tập làm văn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập làm văn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b12': {
      "lessonId": "tv-g4-t1-b12",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          51,
          52,
          53,
          54
      ],
      "sourceHash": "fede093ea0000e37d461f8baa28fa526f2b4774d308d70eb64d98a919ff95b33",
      "readingPassage": {
          "title": "Nhà phát minh 6 tuổi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Nhà phát minh 6 tuổi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 51–54).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Nhà phát minh 6 tuổi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54
          ],
          "sourceHash": "fede093ea0000e37d461f8baa28fa526f2b4774d308d70eb64d98a919ff95b33",
          "audioNarration": "Bài đọc: Nhà phát minh 6 tuổi. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Nhà phát minh 6 tuổi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 51–54). Đọc thuộc lòng và diễn cảm bài thơ \"Nhà phát minh 6 tuổi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t1-b13': {
      "lessonId": "tv-g4-t1-b13",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          55,
          56,
          57,
          58
      ],
      "sourceHash": "8472941d9b0fa464df491dac7deba9c6901415b5d44bb242b75e7ffc102b120c",
      "readingPassage": {
          "title": "Con vẹt xanh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Con vẹt xanh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 55–58).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Con vẹt xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              55,
              56,
              57,
              58
          ],
          "sourceHash": "8472941d9b0fa464df491dac7deba9c6901415b5d44bb242b75e7ffc102b120c",
          "audioNarration": "Bài đọc: Con vẹt xanh. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Con vẹt xanh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 55–58). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Con vẹt xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b14': {
      "lessonId": "tv-g4-t1-b14",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          59,
          60,
          61,
          62
      ],
      "sourceHash": "84c254f11a70a1f8fed6ad94488714b2fcb32d307cdf71698ee4fcc35c409ff9",
      "readingPassage": {
          "title": "Chân trời cuối phố",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Chân trời cuối phố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 59–62).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chân trời cuối phố\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              59,
              60,
              61,
              62
          ],
          "sourceHash": "84c254f11a70a1f8fed6ad94488714b2fcb32d307cdf71698ee4fcc35c409ff9",
          "audioNarration": "Bài đọc: Chân trời cuối phố. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Chân trời cuối phố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 59–62). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chân trời cuối phố\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b15': {
      "lessonId": "tv-g4-t1-b15",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          63,
          64,
          65
      ],
      "sourceHash": "72d0a72ee76dd6bf59f2302caec34e3cb247fa5e169fbc33bbfd72f553f5a01f",
      "readingPassage": {
          "title": "Gặt chữ trên non",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Gặt chữ trên non\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 63–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Gặt chữ trên non\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              63,
              64,
              65
          ],
          "sourceHash": "72d0a72ee76dd6bf59f2302caec34e3cb247fa5e169fbc33bbfd72f553f5a01f",
          "audioNarration": "Bài đọc: Gặt chữ trên non. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Gặt chữ trên non\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 63–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Gặt chữ trên non\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b16': {
      "lessonId": "tv-g4-t1-b16",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76
      ],
      "sourceHash": "cf342b99de1f40610c606b6a3e4e8a215871971f5daf43a00b42f017f504ff23",
      "readingPassage": {
          "title": "Trước ngày xa quê",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Trước ngày xa quê\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 66–76).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trước ngày xa quê\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76
          ],
          "sourceHash": "cf342b99de1f40610c606b6a3e4e8a215871971f5daf43a00b42f017f504ff23",
          "audioNarration": "Bài đọc: Trước ngày xa quê. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Trước ngày xa quê\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 66–76). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trước ngày xa quê\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b17': {
      "lessonId": "tv-g4-t1-b17",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          77,
          78,
          79,
          80
      ],
      "sourceHash": "c490f9308e2302dc4746fe24039344e3ccdc94771dfdd877d0eee6ed98b0ec2e",
      "readingPassage": {
          "title": "Vẽ màu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Vẽ màu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 77–80).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vẽ màu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              77,
              78,
              79,
              80
          ],
          "sourceHash": "c490f9308e2302dc4746fe24039344e3ccdc94771dfdd877d0eee6ed98b0ec2e",
          "audioNarration": "Bài đọc: Vẽ màu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Vẽ màu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 77–80). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vẽ màu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b18': {
      "lessonId": "tv-g4-t1-b18",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          81,
          82,
          83,
          84
      ],
      "sourceHash": "463a8aef9f4540c81b286f75190a4df2304fdff3aa5f3081ee29569283f09482",
      "readingPassage": {
          "title": "Đồng cỏ nở hoa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đồng cỏ nở hoa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 81–84).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đồng cỏ nở hoa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              81,
              82,
              83,
              84
          ],
          "sourceHash": "463a8aef9f4540c81b286f75190a4df2304fdff3aa5f3081ee29569283f09482",
          "audioNarration": "Bài đọc: Đồng cỏ nở hoa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đồng cỏ nở hoa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 81–84). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đồng cỏ nở hoa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b19': {
      "lessonId": "tv-g4-t1-b19",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          85,
          86,
          87,
          88
      ],
      "sourceHash": "f09c19e337d8cf6c926ce19a843d088eb4b2d03b82b49474f9dbe07fcc753a81",
      "readingPassage": {
          "title": "Thanh âm của núi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Thanh âm của núi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 85–88).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Thanh âm của núi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              85,
              86,
              87,
              88
          ],
          "sourceHash": "f09c19e337d8cf6c926ce19a843d088eb4b2d03b82b49474f9dbe07fcc753a81",
          "audioNarration": "Bài đọc: Thanh âm của núi. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Thanh âm của núi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 85–88). Đọc thuộc lòng và diễn cảm bài thơ \"Thanh âm của núi\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t1-b2': {
      "lessonId": "tv-g4-b2",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "3090511e397f4fe8736e82dea0f6b9323cabad6eb8d5b2031a470abed54fffa7",
      "readingPassage": {
          "title": "Thi nhạc",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thi nhạc\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 12–15).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thi nhạc\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "3090511e397f4fe8736e82dea0f6b9323cabad6eb8d5b2031a470abed54fffa7",
          "audioNarration": "Bài đọc: Thi nhạc. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thi nhạc\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 12–15). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thi nhạc\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b20': {
      "lessonId": "tv-g4-t1-b20",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          89,
          90,
          91,
          92
      ],
      "sourceHash": "5cf11a98c097aaa749e4baf9a11f5fd7016e0d7473b70725f07da5522aa4283f",
      "readingPassage": {
          "title": "Bầu trời mùa thu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bầu trời mùa thu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 89–92).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời mùa thu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              89,
              90,
              91,
              92
          ],
          "sourceHash": "5cf11a98c097aaa749e4baf9a11f5fd7016e0d7473b70725f07da5522aa4283f",
          "audioNarration": "Bài đọc: Bầu trời mùa thu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bầu trời mùa thu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 89–92). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời mùa thu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b21': {
      "lessonId": "tv-g4-t1-b21",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          93,
          94,
          95,
          96
      ],
      "sourceHash": "ffc5d7d23a809c17194f886ebcc10a503d857890d4a1a3e5fff49aeaf552c4f5",
      "readingPassage": {
          "title": "Làm thỏ con bằng giấy",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Làm thỏ con bằng giấy\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 93–96).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm thỏ con bằng giấy\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              93,
              94,
              95,
              96
          ],
          "sourceHash": "ffc5d7d23a809c17194f886ebcc10a503d857890d4a1a3e5fff49aeaf552c4f5",
          "audioNarration": "Bài đọc: Làm thỏ con bằng giấy. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Làm thỏ con bằng giấy\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 93–96). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Làm thỏ con bằng giấy\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b22': {
      "lessonId": "tv-g4-t1-b22",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          97,
          98,
          99,
          100
      ],
      "sourceHash": "df3deb025b1b0d65d7bb5fcac74be1ae8a4e32dbf761f2bbd0a5ded7ae6ba991",
      "readingPassage": {
          "title": "Bức tường có nhiều phép lạ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bức tường có nhiều phép lạ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 97–100).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bức tường có nhiều phép lạ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              97,
              98,
              99,
              100
          ],
          "sourceHash": "df3deb025b1b0d65d7bb5fcac74be1ae8a4e32dbf761f2bbd0a5ded7ae6ba991",
          "audioNarration": "Bài đọc: Bức tường có nhiều phép lạ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bức tường có nhiều phép lạ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 97–100). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bức tường có nhiều phép lạ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b23': {
      "lessonId": "tv-g4-t1-b23",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          101,
          102,
          103,
          104
      ],
      "sourceHash": "0d6b640b0925c313965bec3efa85b1eb36cfcdbdf5472365f7a2475d4bee3734",
      "readingPassage": {
          "title": "Bét-tô-ven và bản xô-nát Ánh trăng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bét-tô-ven và bản xô-nát Ánh trăng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 101–104).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bét-tô-ven và bản xô-nát Ánh trăng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              101,
              102,
              103,
              104
          ],
          "sourceHash": "0d6b640b0925c313965bec3efa85b1eb36cfcdbdf5472365f7a2475d4bee3734",
          "audioNarration": "Bài đọc: Bét-tô-ven và bản xô-nát Ánh trăng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bét-tô-ven và bản xô-nát Ánh trăng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 101–104). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bét-tô-ven và bản xô-nát Ánh trăng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b24': {
      "lessonId": "tv-g4-t1-b24",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          105,
          106,
          107,
          108
      ],
      "sourceHash": "88d9f05204e7266aa08191c0b112ae8c43029aa193b4ae1fd0353227bd7fea35",
      "readingPassage": {
          "title": "Người tìm đường lên các vì sao",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Người tìm đường lên các vì sao\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 105–108).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Người tìm đường lên các vì sao\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              105,
              106,
              107,
              108
          ],
          "sourceHash": "88d9f05204e7266aa08191c0b112ae8c43029aa193b4ae1fd0353227bd7fea35",
          "audioNarration": "Bài đọc: Người tìm đường lên các vì sao. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Người tìm đường lên các vì sao\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 105–108). Đọc thuộc lòng và diễn cảm bài thơ \"Người tìm đường lên các vì sao\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t1-b25': {
      "lessonId": "tv-g4-t1-b25",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          109,
          110,
          111,
          112,
          113
      ],
      "sourceHash": "166262aefdb6f05217583b303117e51f74afbd2fe77d3ba2dd9d58e1da2d0977",
      "readingPassage": {
          "title": "Bay cùng ước mơ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bay cùng ước mơ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 109–113).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bay cùng ước mơ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              109,
              110,
              111,
              112,
              113
          ],
          "sourceHash": "166262aefdb6f05217583b303117e51f74afbd2fe77d3ba2dd9d58e1da2d0977",
          "audioNarration": "Bài đọc: Bay cùng ước mơ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bay cùng ước mơ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 109–113). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bay cùng ước mơ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b26': {
      "lessonId": "tv-g4-t1-b26",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          114,
          115,
          116,
          117
      ],
      "sourceHash": "351bf741b2321799d3acb872b9e756c13855bccb4c4fa10074c3700dceddf60c",
      "readingPassage": {
          "title": "Con trai người làm vườn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Con trai người làm vườn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 114–117).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Con trai người làm vườn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              114,
              115,
              116,
              117
          ],
          "sourceHash": "351bf741b2321799d3acb872b9e756c13855bccb4c4fa10074c3700dceddf60c",
          "audioNarration": "Bài đọc: Con trai người làm vườn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Con trai người làm vườn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 114–117). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Con trai người làm vườn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b27': {
      "lessonId": "tv-g4-t1-b27",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          118,
          119,
          120,
          121
      ],
      "sourceHash": "4e6a36e0fa0079f8b3892e1e53d06a4549e3166c1b454aafe8a2ff84786e3106",
      "readingPassage": {
          "title": "Nếu em có một khu vườn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Nếu em có một khu vườn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 118–121).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu em có một khu vườn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              118,
              119,
              120,
              121
          ],
          "sourceHash": "4e6a36e0fa0079f8b3892e1e53d06a4549e3166c1b454aafe8a2ff84786e3106",
          "audioNarration": "Bài đọc: Nếu em có một khu vườn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Nếu em có một khu vườn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 118–121). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu em có một khu vườn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b28': {
      "lessonId": "tv-g4-t1-b28",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          122,
          123,
          124
      ],
      "sourceHash": "fa6cbf521e12e80bf41514b0af1f20396b60803d7c852d5f0aa44da609d6e77d",
      "readingPassage": {
          "title": "Bốn mùa mơ ước",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bốn mùa mơ ước\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 122–124).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bốn mùa mơ ước\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123,
              124
          ],
          "sourceHash": "fa6cbf521e12e80bf41514b0af1f20396b60803d7c852d5f0aa44da609d6e77d",
          "audioNarration": "Bài đọc: Bốn mùa mơ ước. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bốn mùa mơ ước\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 122–124). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bốn mùa mơ ước\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b29': {
      "lessonId": "tv-g4-t1-b29",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          125,
          126,
          127,
          128
      ],
      "sourceHash": "7498b176c445604fe02c0f1812f46645fad829ed6d91865d7f312b7d79799cf4",
      "readingPassage": {
          "title": "Ở Vương quốc Tương Lai",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ở Vương quốc Tương Lai\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 125–128).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ở Vương quốc Tương Lai\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              125,
              126,
              127,
              128
          ],
          "sourceHash": "7498b176c445604fe02c0f1812f46645fad829ed6d91865d7f312b7d79799cf4",
          "audioNarration": "Bài đọc: Ở Vương quốc Tương Lai. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Ở Vương quốc Tương Lai\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 125–128). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ở Vương quốc Tương Lai\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b3': {
      "lessonId": "tv-g4-b3",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          16,
          17,
          18,
          19
      ],
      "sourceHash": "9153c44d42a68a0120769c3cbc31968c6a65a2dab0d077cf22a7abd73ca496cd",
      "readingPassage": {
          "title": "Anh em sinh đôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Anh em sinh đôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 16–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh em sinh đôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18,
              19
          ],
          "sourceHash": "9153c44d42a68a0120769c3cbc31968c6a65a2dab0d077cf22a7abd73ca496cd",
          "audioNarration": "Bài đọc: Anh em sinh đôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Anh em sinh đôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 16–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh em sinh đôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b30': {
      "lessonId": "tv-g4-t1-b30",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          129,
          130,
          131
      ],
      "sourceHash": "b053917339c3ca981d6ab838f8b211d354c8c235834e6931570dfdd0e10de21c",
      "readingPassage": {
          "title": "Cánh chim nhỏ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cánh chim nhỏ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 129–131).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cánh chim nhỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              129,
              130,
              131
          ],
          "sourceHash": "b053917339c3ca981d6ab838f8b211d354c8c235834e6931570dfdd0e10de21c",
          "audioNarration": "Bài đọc: Cánh chim nhỏ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Cánh chim nhỏ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 129–131). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cánh chim nhỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b31': {
      "lessonId": "tv-g4-t1-b31",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          132,
          133,
          134
      ],
      "sourceHash": "ba6158564a2b70d5d8452d3b690e63d8fb8fccd0d57571bae95df699f7a73f2a",
      "readingPassage": {
          "title": "Nếu chúng mình có phép lạ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Nếu chúng mình có phép lạ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 132–134).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu chúng mình có phép lạ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              132,
              133,
              134
          ],
          "sourceHash": "ba6158564a2b70d5d8452d3b690e63d8fb8fccd0d57571bae95df699f7a73f2a",
          "audioNarration": "Bài đọc: Nếu chúng mình có phép lạ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Nếu chúng mình có phép lạ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 132–134). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nếu chúng mình có phép lạ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b32': {
      "lessonId": "tv-g4-t1-b32",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          135,
          136,
          137,
          138
      ],
      "sourceHash": "fa97228c30067708ec9c6e064442d5d3ff4ed17ec2bb46ab62f5ae872eb4239a",
      "readingPassage": {
          "title": "Anh Ba",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Anh Ba\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 135–138).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh Ba\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              135,
              136,
              137,
              138
          ],
          "sourceHash": "fa97228c30067708ec9c6e064442d5d3ff4ed17ec2bb46ab62f5ae872eb4239a",
          "audioNarration": "Bài đọc: Anh Ba. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Anh Ba\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 135–138). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh Ba\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b4': {
      "lessonId": "tv-g4-b4",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          20,
          21,
          22
      ],
      "sourceHash": "9371068e66997f396eddbcde75e2d10affbadd65ff9db07403959b8f780356a0",
      "readingPassage": {
          "title": "Công chúa và người dẫn chuyện",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Công chúa và người dẫn chuyện\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 20–22).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Công chúa và người dẫn chuyện\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22
          ],
          "sourceHash": "9371068e66997f396eddbcde75e2d10affbadd65ff9db07403959b8f780356a0",
          "audioNarration": "Bài đọc: Công chúa và người dẫn chuyện. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Công chúa và người dẫn chuyện\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 20–22). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Công chúa và người dẫn chuyện\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b5': {
      "lessonId": "tv-g4-b5",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          23,
          24,
          25
      ],
      "sourceHash": "d33b5c9703b70022b518e6895c61b9d8545ed40f251a93a3e15b2826bf5f374d",
      "readingPassage": {
          "title": "Thần lằn xanh và tắc kè",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thần lằn xanh và tắc kè\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 23–25).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thần lằn xanh và tắc kè\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25
          ],
          "sourceHash": "d33b5c9703b70022b518e6895c61b9d8545ed40f251a93a3e15b2826bf5f374d",
          "audioNarration": "Bài đọc: Thần lằn xanh và tắc kè. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thần lằn xanh và tắc kè\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 23–25). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thần lằn xanh và tắc kè\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b6': {
      "lessonId": "tv-g4-b6",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "12f0a96f961f98e5d96b86208458a3bc82f4b1bfb95a8f3937c4d65748922032",
      "readingPassage": {
          "title": "Nghệ sĩ trống",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Nghệ sĩ trống\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 26–29).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ sĩ trống\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "12f0a96f961f98e5d96b86208458a3bc82f4b1bfb95a8f3937c4d65748922032",
          "audioNarration": "Bài đọc: Nghệ sĩ trống. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Nghệ sĩ trống\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 26–29). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ sĩ trống\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b7': {
      "lessonId": "tv-g4-b7",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "a73613b97b2bf7b999e5e5abce4ad251d73383151aea9590833f6de2db7098ce",
      "readingPassage": {
          "title": "Những bức chân dung",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những bức chân dung\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bức chân dung\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "a73613b97b2bf7b999e5e5abce4ad251d73383151aea9590833f6de2db7098ce",
          "audioNarration": "Bài đọc: Những bức chân dung. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Những bức chân dung\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những bức chân dung\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b8': {
      "lessonId": "tv-g4-b8",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          34,
          35,
          36,
          37,
          38
      ],
      "sourceHash": "569d05470812735a7e97b51222eb799126e4e4183df47446ec4157bb6b05ffee",
      "readingPassage": {
          "title": "Đò ngang",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đò ngang\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 34–38).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đò ngang\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37,
              38
          ],
          "sourceHash": "569d05470812735a7e97b51222eb799126e4e4183df47446ec4157bb6b05ffee",
          "audioNarration": "Bài đọc: Đò ngang. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đò ngang\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 34–38). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đò ngang\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t1-b9': {
      "lessonId": "tv-g4-b9",
      "bookId": "tv-g4-t1",
      "sourcePages": [
          39,
          40,
          41,
          42,
          43
      ],
      "sourceHash": "8d6ec0eb03603368c86d3cc495434e1b26a8eda0d84c54427b76cfe4cc3f6810",
      "readingPassage": {
          "title": "Bầu trời trong quả trứng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bầu trời trong quả trứng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 39–43).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời trong quả trứng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              39,
              40,
              41,
              42,
              43
          ],
          "sourceHash": "8d6ec0eb03603368c86d3cc495434e1b26a8eda0d84c54427b76cfe4cc3f6810",
          "audioNarration": "Bài đọc: Bầu trời trong quả trứng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bầu trời trong quả trứng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 1 (Trang 39–43). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bầu trời trong quả trứng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b1': {
      "lessonId": "tv-g4-b12",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          8,
          9,
          10,
          11
      ],
      "sourceHash": "69c72e7e31e06f9623f6e0c3bfefc651b396856b4ab281d1896bc0e8ae9c940a",
      "readingPassage": {
          "title": "Hải Thượng Lãn Ông",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hải Thượng Lãn Ông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 8–11).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hải Thượng Lãn Ông\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11
          ],
          "sourceHash": "69c72e7e31e06f9623f6e0c3bfefc651b396856b4ab281d1896bc0e8ae9c940a",
          "audioNarration": "Bài đọc: Hải Thượng Lãn Ông. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hải Thượng Lãn Ông\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 8–11). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hải Thượng Lãn Ông\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b10': {
      "lessonId": "tv-g4-b21",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          44,
          45,
          46,
          47
      ],
      "sourceHash": "06f792ee1ae29193eee7d5a1f894caffec6e210bc84ff0a5354f9481d3014261",
      "readingPassage": {
          "title": "Cảm xúc Trường Sa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cảm xúc Trường Sa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 44–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm xúc Trường Sa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              44,
              45,
              46,
              47
          ],
          "sourceHash": "06f792ee1ae29193eee7d5a1f894caffec6e210bc84ff0a5354f9481d3014261",
          "audioNarration": "Bài đọc: Cảm xúc Trường Sa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Cảm xúc Trường Sa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 44–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cảm xúc Trường Sa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b11': {
      "lessonId": "tv-g4-b22",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          48,
          49,
          50
      ],
      "sourceHash": "aeabb95493a1cd484319d75519a490185f2340fc24842dc2bc577ce9aecedf08",
      "readingPassage": {
          "title": "Sáng tháng Năm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sáng tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 48–50).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sáng tháng Năm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50
          ],
          "sourceHash": "aeabb95493a1cd484319d75519a490185f2340fc24842dc2bc577ce9aecedf08",
          "audioNarration": "Bài đọc: Sáng tháng Năm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Sáng tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 48–50). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sáng tháng Năm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b12': {
      "lessonId": "tv-g4-t2-b12",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          51,
          52,
          53,
          54
      ],
      "sourceHash": "7a64292580ae0971248da32423003ba581e6824de6cc1356735d9a53cd37b9b5",
      "readingPassage": {
          "title": "Chàng trai làng Phù Ủng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Chàng trai làng Phù Ủng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 51–54).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chàng trai làng Phù Ủng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54
          ],
          "sourceHash": "7a64292580ae0971248da32423003ba581e6824de6cc1356735d9a53cd37b9b5",
          "audioNarration": "Bài đọc: Chàng trai làng Phù Ủng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Chàng trai làng Phù Ủng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 51–54). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chàng trai làng Phù Ủng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b13': {
      "lessonId": "tv-g4-t2-b13",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          55,
          56,
          57,
          58
      ],
      "sourceHash": "b1e3ac1c5c36a66530f0ae4a6877e45f2209775eb4c20dd4b0eec400f9a217f4",
      "readingPassage": {
          "title": "Vườn của ông tôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Vườn của ông tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 55–58).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vườn của ông tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              55,
              56,
              57,
              58
          ],
          "sourceHash": "b1e3ac1c5c36a66530f0ae4a6877e45f2209775eb4c20dd4b0eec400f9a217f4",
          "audioNarration": "Bài đọc: Vườn của ông tôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Vườn của ông tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 55–58). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vườn của ông tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b14': {
      "lessonId": "tv-g4-t2-b14",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          59,
          60,
          61,
          62
      ],
      "sourceHash": "4b3cff2f7e5835860a0352cc73b3e1cc742e8029e2eaf16a46fe57c9393fcf0b",
      "readingPassage": {
          "title": "Trong lời mẹ hát",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Trong lời mẹ hát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 59–62).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Trong lời mẹ hát\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              59,
              60,
              61,
              62
          ],
          "sourceHash": "4b3cff2f7e5835860a0352cc73b3e1cc742e8029e2eaf16a46fe57c9393fcf0b",
          "audioNarration": "Bài đọc: Trong lời mẹ hát. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Trong lời mẹ hát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 59–62). Đọc thuộc lòng và diễn cảm bài thơ \"Trong lời mẹ hát\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t2-b15': {
      "lessonId": "tv-g4-t2-b15",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          63,
          64,
          65,
          66
      ],
      "sourceHash": "b73303f3818d167e894991f89f70209f3a4f4e36ef7591d72e76b3b6f249a60b",
      "readingPassage": {
          "title": "Người thầy đầu tiên của bố tôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Người thầy đầu tiên của bố tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 63–66).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người thầy đầu tiên của bố tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              63,
              64,
              65,
              66
          ],
          "sourceHash": "b73303f3818d167e894991f89f70209f3a4f4e36ef7591d72e76b3b6f249a60b",
          "audioNarration": "Bài đọc: Người thầy đầu tiên của bố tôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Người thầy đầu tiên của bố tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 63–66). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người thầy đầu tiên của bố tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b16': {
      "lessonId": "tv-g4-t2-b16",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79
      ],
      "sourceHash": "e1bbf80bb22f6962690060e67a8646113c3dbd3eae8f8f2e50b92de8d02f1c27",
      "readingPassage": {
          "title": "Ngựa biên phòng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngựa biên phòng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 67–79).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngựa biên phòng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79
          ],
          "sourceHash": "e1bbf80bb22f6962690060e67a8646113c3dbd3eae8f8f2e50b92de8d02f1c27",
          "audioNarration": "Bài đọc: Ngựa biên phòng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Ngựa biên phòng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 67–79). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngựa biên phòng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b17': {
      "lessonId": "tv-g4-t2-b17",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          80,
          81,
          82,
          83,
          84
      ],
      "sourceHash": "c9f790f218e827d1ca018bfcb1a379e6e58c7a3ec3a90c96565756be476e40c3",
      "readingPassage": {
          "title": "Cây đa quê hương",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Cây đa quê hương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 80–84).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Cây đa quê hương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              80,
              81,
              82,
              83,
              84
          ],
          "sourceHash": "c9f790f218e827d1ca018bfcb1a379e6e58c7a3ec3a90c96565756be476e40c3",
          "audioNarration": "Bài đọc: Cây đa quê hương. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Cây đa quê hương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 80–84). Đọc thuộc lòng và diễn cảm bài thơ \"Cây đa quê hương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t2-b18': {
      "lessonId": "tv-g4-t2-b18",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          85,
          86,
          87,
          88
      ],
      "sourceHash": "fdebffaeff061265195be451bdfe8e7b190ea5fd8097031c739250a99c6d544f",
      "readingPassage": {
          "title": "Bước mùa xuân",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bước mùa xuân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 85–88).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bước mùa xuân\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              85,
              86,
              87,
              88
          ],
          "sourceHash": "fdebffaeff061265195be451bdfe8e7b190ea5fd8097031c739250a99c6d544f",
          "audioNarration": "Bài đọc: Bước mùa xuân. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bước mùa xuân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 85–88). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bước mùa xuân\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b19': {
      "lessonId": "tv-g4-t2-b19",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          89,
          90,
          91,
          92
      ],
      "sourceHash": "e0157b3d4f977e0c0c29392c51ad2853d77c82d8eb0888dacac0f7e3924fb1c0",
      "readingPassage": {
          "title": "Đi hội chùa Hương",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đi hội chùa Hương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 89–92).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đi hội chùa Hương\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              89,
              90,
              91,
              92
          ],
          "sourceHash": "e0157b3d4f977e0c0c29392c51ad2853d77c82d8eb0888dacac0f7e3924fb1c0",
          "audioNarration": "Bài đọc: Đi hội chùa Hương. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đi hội chùa Hương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 89–92). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đi hội chùa Hương\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b2': {
      "lessonId": "tv-g4-b13",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          12,
          13,
          14,
          15
      ],
      "sourceHash": "4a2c0db35cbd63fe56af557b8ccb64d02a37ead42757ebd8e4e6999675a56c8a",
      "readingPassage": {
          "title": "Vệt phấn trên mặt bàn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Vệt phấn trên mặt bàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 12–15).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vệt phấn trên mặt bàn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              12,
              13,
              14,
              15
          ],
          "sourceHash": "4a2c0db35cbd63fe56af557b8ccb64d02a37ead42757ebd8e4e6999675a56c8a",
          "audioNarration": "Bài đọc: Vệt phấn trên mặt bàn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Vệt phấn trên mặt bàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 12–15). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vệt phấn trên mặt bàn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b20': {
      "lessonId": "tv-g4-t2-b20",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          93,
          94,
          95,
          96,
          97
      ],
      "sourceHash": "c232d11e26374b4074b65ab1eadd36c8723c1a6a67111446c7c3667389615c8c",
      "readingPassage": {
          "title": "Chiều ngoại ô",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Chiều ngoại ô\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 93–97).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chiều ngoại ô\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              93,
              94,
              95,
              96,
              97
          ],
          "sourceHash": "c232d11e26374b4074b65ab1eadd36c8723c1a6a67111446c7c3667389615c8c",
          "audioNarration": "Bài đọc: Chiều ngoại ô. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Chiều ngoại ô\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 93–97). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chiều ngoại ô\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b21': {
      "lessonId": "tv-g4-t2-b21",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          98,
          99,
          100,
          101
      ],
      "sourceHash": "b3cd1566ea39becb41798d36503805142b2b4f9c71ced1b12d4d3715ce0c7e71",
      "readingPassage": {
          "title": "Những cánh buồm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những cánh buồm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 98–101).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những cánh buồm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              98,
              99,
              100,
              101
          ],
          "sourceHash": "b3cd1566ea39becb41798d36503805142b2b4f9c71ced1b12d4d3715ce0c7e71",
          "audioNarration": "Bài đọc: Những cánh buồm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Những cánh buồm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 98–101). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những cánh buồm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b22': {
      "lessonId": "tv-g4-t2-b22",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          102,
          103,
          104,
          105
      ],
      "sourceHash": "4cc6b9ff96dfb95e2f440f4c35b157ce98971094f7cb9445b72db92eb8fa441c",
      "readingPassage": {
          "title": "Cái cầu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cái cầu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 102–105).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cái cầu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              102,
              103,
              104,
              105
          ],
          "sourceHash": "4cc6b9ff96dfb95e2f440f4c35b157ce98971094f7cb9445b72db92eb8fa441c",
          "audioNarration": "Bài đọc: Cái cầu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Cái cầu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 102–105). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cái cầu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b23': {
      "lessonId": "tv-g4-t2-b23",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          106,
          107,
          108
      ],
      "sourceHash": "a8c0b1e3fa91c8b6b0a06a7e090e578ff71879fdc10137cc4c7c4f5b236774cb",
      "readingPassage": {
          "title": "Đường đi Sa Pa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đường đi Sa Pa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 106–108).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đường đi Sa Pa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              106,
              107,
              108
          ],
          "sourceHash": "a8c0b1e3fa91c8b6b0a06a7e090e578ff71879fdc10137cc4c7c4f5b236774cb",
          "audioNarration": "Bài đọc: Đường đi Sa Pa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đường đi Sa Pa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 106–108). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đường đi Sa Pa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b24': {
      "lessonId": "tv-g4-t2-b24",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          109,
          110,
          111,
          112
      ],
      "sourceHash": "e5fbeec45ce486f9e76b0c7d56f9b799daaf0aa730ae527ef57d8497f64e5635",
      "readingPassage": {
          "title": "Quê ngoại",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Quê ngoại\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 109–112).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quê ngoại\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              109,
              110,
              111,
              112
          ],
          "sourceHash": "e5fbeec45ce486f9e76b0c7d56f9b799daaf0aa730ae527ef57d8497f64e5635",
          "audioNarration": "Bài đọc: Quê ngoại. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Quê ngoại\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 109–112). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quê ngoại\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b25': {
      "lessonId": "tv-g4-t2-b25",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          113,
          114,
          115,
          116
      ],
      "sourceHash": "99df13e6263219e95e843e265c82343af8190ce61422e96712ae5347ed285ce8",
      "readingPassage": {
          "title": "Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 113–116).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              113,
              114,
              115,
              116
          ],
          "sourceHash": "99df13e6263219e95e843e265c82343af8190ce61422e96712ae5347ed285ce8",
          "audioNarration": "Bài đọc: Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 113–116). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b26': {
      "lessonId": "tv-g4-t2-b26",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          117,
          118,
          119
      ],
      "sourceHash": "6339691938db0c1cf59cb0272794f0f8394b5c63772a4eb031b30083e8454787",
      "readingPassage": {
          "title": "Ngôi nhà của yêu thương",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Ngôi nhà của yêu thương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 117–119).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Ngôi nhà của yêu thương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              117,
              118,
              119
          ],
          "sourceHash": "6339691938db0c1cf59cb0272794f0f8394b5c63772a4eb031b30083e8454787",
          "audioNarration": "Bài đọc: Ngôi nhà của yêu thương. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Ngôi nhà của yêu thương\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 117–119). Đọc thuộc lòng và diễn cảm bài thơ \"Ngôi nhà của yêu thương\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t2-b27': {
      "lessonId": "tv-g4-t2-b27",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          120,
          121,
          122
      ],
      "sourceHash": "de8e53f03adab8097a865e1cc1fee8129d10e113d02f36c2458ef5e079568627",
      "readingPassage": {
          "title": "Băng tan",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Băng tan\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 120–122).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Băng tan\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              120,
              121,
              122
          ],
          "sourceHash": "de8e53f03adab8097a865e1cc1fee8129d10e113d02f36c2458ef5e079568627",
          "audioNarration": "Bài đọc: Băng tan. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Băng tan\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 120–122). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Băng tan\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b28': {
      "lessonId": "tv-g4-t2-b28",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          123,
          124,
          125,
          126
      ],
      "sourceHash": "a591e3fb7d65ed0163d510641724592a6162a652962e3127149b57eb0ef96be9",
      "readingPassage": {
          "title": "Chuyến du lịch thú vị",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Chuyến du lịch thú vị\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 123–126).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyến du lịch thú vị\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              123,
              124,
              125,
              126
          ],
          "sourceHash": "a591e3fb7d65ed0163d510641724592a6162a652962e3127149b57eb0ef96be9",
          "audioNarration": "Bài đọc: Chuyến du lịch thú vị. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Chuyến du lịch thú vị\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 123–126). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Chuyến du lịch thú vị\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b29': {
      "lessonId": "tv-g4-t2-b29",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          127,
          128,
          129,
          130
      ],
      "sourceHash": "9053bef94293945a07198cc2c92fc3c3ac9a98bb6471676264f7ba1ac9e21092",
      "readingPassage": {
          "title": "Lễ hội ở Nhật Bản",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Lễ hội ở Nhật Bản\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 127–130).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lễ hội ở Nhật Bản\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              127,
              128,
              129,
              130
          ],
          "sourceHash": "9053bef94293945a07198cc2c92fc3c3ac9a98bb6471676264f7ba1ac9e21092",
          "audioNarration": "Bài đọc: Lễ hội ở Nhật Bản. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Lễ hội ở Nhật Bản\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 127–130). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Lễ hội ở Nhật Bản\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b3': {
      "lessonId": "tv-g4-b14",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          16,
          17,
          18,
          19
      ],
      "sourceHash": "9fede10b6dae4ebd845a97b99ce9ce7606113426f7ec0a0dfc3149bf3f9c5f03",
      "readingPassage": {
          "title": "Ông Bụt đã đến",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ông Bụt đã đến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 16–19).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ông Bụt đã đến\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              16,
              17,
              18,
              19
          ],
          "sourceHash": "9fede10b6dae4ebd845a97b99ce9ce7606113426f7ec0a0dfc3149bf3f9c5f03",
          "audioNarration": "Bài đọc: Ông Bụt đã đến. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Ông Bụt đã đến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 16–19). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ông Bụt đã đến\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b30': {
      "lessonId": "tv-g4-t2-b30",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          131,
          132,
          133,
          134
      ],
      "sourceHash": "a1e2d3ab4bdac14411df09d71995f7dc22c9e286638bec3fc5d298d31d323f2e",
      "readingPassage": {
          "title": "Ngày hội",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngày hội\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 131–134).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày hội\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              131,
              132,
              133,
              134
          ],
          "sourceHash": "a1e2d3ab4bdac14411df09d71995f7dc22c9e286638bec3fc5d298d31d323f2e",
          "audioNarration": "Bài đọc: Ngày hội. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Ngày hội\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 131–134). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngày hội\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b4': {
      "lessonId": "tv-g4-b15",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          20,
          21,
          22,
          23
      ],
      "sourceHash": "02a40ea95bffbe3c649bdd3bef0cd0fc3a3e5d8cbf1425f0983166e44e2966b9",
      "readingPassage": {
          "title": "Quả ngọt cuối mùa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Quả ngọt cuối mùa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 20–23).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quả ngọt cuối mùa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              20,
              21,
              22,
              23
          ],
          "sourceHash": "02a40ea95bffbe3c649bdd3bef0cd0fc3a3e5d8cbf1425f0983166e44e2966b9",
          "audioNarration": "Bài đọc: Quả ngọt cuối mùa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Quả ngọt cuối mùa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 20–23). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Quả ngọt cuối mùa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b5': {
      "lessonId": "tv-g4-b16",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          24,
          25,
          26,
          27
      ],
      "sourceHash": "80c2b404fddb0f0f9dc3702d9d4d682315de5ec8564306caac3d796970e86ec6",
      "readingPassage": {
          "title": "Tờ báo tường của tôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tờ báo tường của tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 24–27).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tờ báo tường của tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              24,
              25,
              26,
              27
          ],
          "sourceHash": "80c2b404fddb0f0f9dc3702d9d4d682315de5ec8564306caac3d796970e86ec6",
          "audioNarration": "Bài đọc: Tờ báo tường của tôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tờ báo tường của tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 24–27). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tờ báo tường của tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b6': {
      "lessonId": "tv-g4-b17",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          28,
          29,
          30
      ],
      "sourceHash": "e49929031e3100a1226e4ecd10193beaa2e960fb816026ac8609f65ef0617877",
      "readingPassage": {
          "title": "Tiếng ru",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tiếng ru\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 28–30).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng ru\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29,
              30
          ],
          "sourceHash": "e49929031e3100a1226e4ecd10193beaa2e960fb816026ac8609f65ef0617877",
          "audioNarration": "Bài đọc: Tiếng ru. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Tiếng ru\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 28–30). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tiếng ru\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b7': {
      "lessonId": "tv-g4-b18",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          31,
          32,
          33,
          34
      ],
      "sourceHash": "b55da5d09fc976c8580d3ec0a3d6434b89da16fd476467c1a6179d45bc8fd9d9",
      "readingPassage": {
          "title": "Con muốn làm một cái cây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Con muốn làm một cái cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 31–34).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Con muốn làm một cái cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33,
              34
          ],
          "sourceHash": "b55da5d09fc976c8580d3ec0a3d6434b89da16fd476467c1a6179d45bc8fd9d9",
          "audioNarration": "Bài đọc: Con muốn làm một cái cây. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Con muốn làm một cái cây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 31–34). Đọc thuộc lòng và diễn cảm bài thơ \"Con muốn làm một cái cây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g4-t2-b8': {
      "lessonId": "tv-g4-b19",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          35,
          36,
          37,
          38,
          39
      ],
      "sourceHash": "2ddcbb0c34ed7bd81dbb63e59269b70c7443ec20d4b86937253f5af64f4d93d9",
      "readingPassage": {
          "title": "Trên khóm tre đầu ngõ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Trên khóm tre đầu ngõ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 35–39).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên khóm tre đầu ngõ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              35,
              36,
              37,
              38,
              39
          ],
          "sourceHash": "2ddcbb0c34ed7bd81dbb63e59269b70c7443ec20d4b86937253f5af64f4d93d9",
          "audioNarration": "Bài đọc: Trên khóm tre đầu ngõ. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Trên khóm tre đầu ngõ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 35–39). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trên khóm tre đầu ngõ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g4-t2-b9': {
      "lessonId": "tv-g4-b20",
      "bookId": "tv-g4-t2",
      "sourcePages": [
          40,
          41,
          42,
          43
      ],
      "sourceHash": "772c687c5a2a931adcdb4e17fc2832af7cd26ec9eeded30c92b7e7b5fc7472f0",
      "readingPassage": {
          "title": "Sự tích con Rồng cháu Tiên",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích con Rồng cháu Tiên\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 40–43).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích con Rồng cháu Tiên\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              40,
              41,
              42,
              43
          ],
          "sourceHash": "772c687c5a2a931adcdb4e17fc2832af7cd26ec9eeded30c92b7e7b5fc7472f0",
          "audioNarration": "Bài đọc: Sự tích con Rồng cháu Tiên. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Sự tích con Rồng cháu Tiên\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 4 tập 2 (Trang 40–43). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích con Rồng cháu Tiên\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b1': {
      "lessonId": "tv-g5-b1",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          8,
          9,
          10,
          11,
          12
      ],
      "sourceHash": "81f132326305490ad1e6985c7c4412ea5651ec98b2891bf7230fe7ea2058bae1",
      "readingPassage": {
          "title": "Thanh âm của gió",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.",
              "Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
              "Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11,
              12
          ],
          "sourceHash": "81f132326305490ad1e6985c7c4412ea5651ec98b2891bf7230fe7ea2058bae1",
          "audioNarration": "Bài đọc: Thanh âm của gió. Tác giả: Văn Thành Lê. Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch. Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình. Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
      }
  },
  'tv-g5-b10': {
      "lessonId": "tv-g5-b10",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          51,
          52,
          53,
          54,
          55
      ],
      "sourceHash": "bf5e334a185da2f73e95fda1f51a55baca2e85f213377950e731c1580e4f93af",
      "readingPassage": {
          "title": "Kì diệu rừng xanh",
          "author": "Mai Văn Tạo",
          "genre": "prose",
          "content": [
              "Bài đọc: Kì diệu rừng xanh\nTác giả: Mai Văn Tạo\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 51–55).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kì diệu rừng xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54,
              55
          ],
          "sourceHash": "bf5e334a185da2f73e95fda1f51a55baca2e85f213377950e731c1580e4f93af",
          "audioNarration": "Bài đọc: Kì diệu rừng xanh. Tác giả: Mai Văn Tạo. Bài đọc: Kì diệu rừng xanh\nTác giả: Mai Văn Tạo\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 51–55). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kì diệu rừng xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b11': {
      "lessonId": "tv-g5-b11",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          56,
          57,
          58,
          59
      ],
      "sourceHash": "79d27751b355ebe2b2e1c9d0eb215f60580d5236f61478c35076df4f4fec5d1f",
      "readingPassage": {
          "title": "Hang Sơn Đoòng - những điều kì thú",
          "author": "Theo Báo Du lịch",
          "genre": "prose",
          "content": [
              "Bài đọc: Hang Sơn Đoòng - những điều kì thú\nTác giả: Theo Báo Du lịch\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 56–59).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hang Sơn Đoòng - những điều kì thú\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              56,
              57,
              58,
              59
          ],
          "sourceHash": "79d27751b355ebe2b2e1c9d0eb215f60580d5236f61478c35076df4f4fec5d1f",
          "audioNarration": "Bài đọc: Hang Sơn Đoòng - những điều kì thú. Tác giả: Theo Báo Du lịch. Bài đọc: Hang Sơn Đoòng - những điều kì thú\nTác giả: Theo Báo Du lịch\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 56–59). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hang Sơn Đoòng - những điều kì thú\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b12': {
      "lessonId": "tv-g5-b12",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          60,
          61,
          62,
          63
      ],
      "sourceHash": "42d32fff698de6d6e20ec7498e22e5afee7b08b0361f1355ed41fb133ee612e7",
      "readingPassage": {
          "title": "Những hòn đảo trên vịnh Hạ Long",
          "author": "Theo Địa lí Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những hòn đảo trên vịnh Hạ Long\nTác giả: Theo Địa lí Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 60–63).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những hòn đảo trên vịnh Hạ Long\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              60,
              61,
              62,
              63
          ],
          "sourceHash": "42d32fff698de6d6e20ec7498e22e5afee7b08b0361f1355ed41fb133ee612e7",
          "audioNarration": "Bài đọc: Những hòn đảo trên vịnh Hạ Long. Tác giả: Theo Địa lí Việt Nam. Bài đọc: Những hòn đảo trên vịnh Hạ Long\nTác giả: Theo Địa lí Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 60–63). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những hòn đảo trên vịnh Hạ Long\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b13': {
      "lessonId": "tv-g5-b13",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          64,
          65,
          66,
          67
      ],
      "sourceHash": "6470318efb4efa702a7409d46006630a783655f8103487904ec8add0e6f87d21",
      "readingPassage": {
          "title": "Mầm non",
          "author": "Võ Quảng",
          "genre": "poem",
          "content": [
              "Bài thơ: Mầm non\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 64–67).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Mầm non\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              64,
              65,
              66,
              67
          ],
          "sourceHash": "6470318efb4efa702a7409d46006630a783655f8103487904ec8add0e6f87d21",
          "audioNarration": "Bài đọc: Mầm non. Tác giả: Võ Quảng. Bài thơ: Mầm non\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 64–67). Đọc thuộc lòng và diễn cảm bài thơ \"Mầm non\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-b14': {
      "lessonId": "tv-g5-b14",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          68,
          69,
          70,
          71
      ],
      "sourceHash": "e584d1758136e99ba62f4bdcdaa49ea7fccfcb63fc1d6dce7f0b51afb3ec8875",
      "readingPassage": {
          "title": "Những ngọn núi nóng rẫy",
          "author": "Khám phá địa chất",
          "genre": "prose",
          "content": [
              "Bài đọc: Những ngọn núi nóng rẫy\nTác giả: Khám phá địa chất\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 68–71).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn núi nóng rẫy\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              68,
              69,
              70,
              71
          ],
          "sourceHash": "e584d1758136e99ba62f4bdcdaa49ea7fccfcb63fc1d6dce7f0b51afb3ec8875",
          "audioNarration": "Bài đọc: Những ngọn núi nóng rẫy. Tác giả: Khám phá địa chất. Bài đọc: Những ngọn núi nóng rẫy\nTác giả: Khám phá địa chất\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 68–71). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn núi nóng rẫy\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b15': {
      "lessonId": "tv-g5-b15",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          72,
          73,
          74,
          75
      ],
      "sourceHash": "24a369d98560093c745b970cfc2b5114eb8052adf78a123d87d4e7dadc212cca",
      "readingPassage": {
          "title": "Bài ca về mặt trời",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Bài ca về mặt trời\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 72–75).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bài ca về mặt trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              72,
              73,
              74,
              75
          ],
          "sourceHash": "24a369d98560093c745b970cfc2b5114eb8052adf78a123d87d4e7dadc212cca",
          "audioNarration": "Bài đọc: Bài ca về mặt trời. Tác giả: Định Hải. Bài thơ: Bài ca về mặt trời\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 72–75). Đọc thuộc lòng và diễn cảm bài thơ \"Bài ca về mặt trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-b16': {
      "lessonId": "tv-g5-b16",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88
      ],
      "sourceHash": "6747bb114f3923b1c439a531f76f8a8946825618e70f63445064520d38028df1",
      "readingPassage": {
          "title": "Xin chào, Xa-ha-ra",
          "author": "Khám phá thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Xin chào, Xa-ha-ra\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 76–88).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xin chào, Xa-ha-ra\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              76,
              77,
              78,
              79,
              80,
              81,
              82,
              83,
              84,
              85,
              86,
              87,
              88
          ],
          "sourceHash": "6747bb114f3923b1c439a531f76f8a8946825618e70f63445064520d38028df1",
          "audioNarration": "Bài đọc: Xin chào, Xa-ha-ra. Tác giả: Khám phá thế giới. Bài đọc: Xin chào, Xa-ha-ra\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 76–88). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xin chào, Xa-ha-ra\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b17': {
      "lessonId": "tv-g5-b17",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          8,
          9,
          10,
          11,
          12
      ],
      "sourceHash": "428c1028057c9891a34dcc2f4c8c75619738a68c2b6c5fc5cf8b48924bb36573",
      "readingPassage": {
          "title": "Tiếng hát của người đá",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.",
              "Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
              "Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11,
              12
          ],
          "sourceHash": "428c1028057c9891a34dcc2f4c8c75619738a68c2b6c5fc5cf8b48924bb36573",
          "audioNarration": "Bài đọc: Tiếng hát của người đá. Tác giả: Văn Thành Lê. Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch. Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình. Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
      }
  },
  'tv-g5-b18': {
      "lessonId": "tv-g5-b18",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "0fbf13eb384ac47adbe8b1295028aafd9661127e7b79fda4bb4096267f241d03",
      "readingPassage": {
          "title": "Khúc hát ru những em bé lớn trên lưng mẹ",
          "author": "Lê Huy Trọng",
          "genre": "prose",
          "content": [
              "Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm.",
              "Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán.",
              "Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "0fbf13eb384ac47adbe8b1295028aafd9661127e7b79fda4bb4096267f241d03",
          "audioNarration": "Bài đọc: Khúc hát ru những em bé lớn trên lưng mẹ. Tác giả: Lê Huy Trọng. Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm. Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán. Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
      }
  },
  'tv-g5-b19': {
      "lessonId": "tv-g5-b19",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          17,
          18,
          19,
          20,
          21
      ],
      "sourceHash": "09eef4b0a09e870729ae3acec95640742979db22ce4829b6b4e90bc18ef96567",
      "readingPassage": {
          "title": "Hạt gạo làng ta",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa.",
              "Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi.",
              "Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19,
              20,
              21
          ],
          "sourceHash": "09eef4b0a09e870729ae3acec95640742979db22ce4829b6b4e90bc18ef96567",
          "audioNarration": "Bài đọc: Hạt gạo làng ta. Tác giả: Xuân Quỳnh. Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa. Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi. Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
      }
  },
  'tv-g5-b2': {
      "lessonId": "tv-g5-b2",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          13,
          14,
          15,
          16,
          17
      ],
      "sourceHash": "68dbb38d56bda8ac09eb57f9f55b98d5d9d507b922229c57647d68201bdd6daa",
      "readingPassage": {
          "title": "Cánh đồng hoa",
          "author": "Lê Huy Trọng",
          "genre": "prose",
          "content": [
              "Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm.",
              "Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán.",
              "Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16,
              17
          ],
          "sourceHash": "68dbb38d56bda8ac09eb57f9f55b98d5d9d507b922229c57647d68201bdd6daa",
          "audioNarration": "Bài đọc: Cánh đồng hoa. Tác giả: Lê Huy Trọng. Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm. Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán. Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
      }
  },
  'tv-g5-b20': {
      "lessonId": "tv-g5-b20",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          22,
          23,
          24,
          25
      ],
      "sourceHash": "d70d6b79cdaa48cc499e52943d7caf4a7dfe6ca1992e0edac91f8e9652254ba6",
      "readingPassage": {
          "title": "Hộp quà màu thiên thanh",
          "author": "Nguyễn Trọng Tạo",
          "genre": "prose",
          "content": [
              "Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua.",
              "Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ.",
              "Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              22,
              23,
              24,
              25
          ],
          "sourceHash": "d70d6b79cdaa48cc499e52943d7caf4a7dfe6ca1992e0edac91f8e9652254ba6",
          "audioNarration": "Bài đọc: Hộp quà màu thiên thanh. Tác giả: Nguyễn Trọng Tạo. Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua. Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ. Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
      }
  },
  'tv-g5-b21': {
      "lessonId": "tv-g5-b21",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "b09e268f876ae774b1533f5bd1299d356010e5908cc39824f436e08137387b8b",
      "readingPassage": {
          "title": "Giỏ hoa tháng Năm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Giỏ hoa tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 26–29).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giỏ hoa tháng Năm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "b09e268f876ae774b1533f5bd1299d356010e5908cc39824f436e08137387b8b",
          "audioNarration": "Bài đọc: Giỏ hoa tháng Năm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Giỏ hoa tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 26–29). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giỏ hoa tháng Năm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b22': {
      "lessonId": "tv-g5-b22",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "98839f27a9ad23e690f4a48d3c9978ca5ee6e8c6b3cee9f2c612ee152f3f85ca",
      "readingPassage": {
          "title": "Thư của bố",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư của bố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của bố\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "98839f27a9ad23e690f4a48d3c9978ca5ee6e8c6b3cee9f2c612ee152f3f85ca",
          "audioNarration": "Bài đọc: Thư của bố. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thư của bố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của bố\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b23': {
      "lessonId": "tv-g5-b23",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          34,
          35,
          36,
          37
      ],
      "sourceHash": "32e91ac9d74eb79639f2a9ed7115eb4d5fc0215cef2c2a9be83cf0049305f818",
      "readingPassage": {
          "title": "Đoàn thuyền đánh cá",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đoàn thuyền đánh cá\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 34–37).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đoàn thuyền đánh cá\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37
          ],
          "sourceHash": "32e91ac9d74eb79639f2a9ed7115eb4d5fc0215cef2c2a9be83cf0049305f818",
          "audioNarration": "Bài đọc: Đoàn thuyền đánh cá. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đoàn thuyền đánh cá\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 34–37). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đoàn thuyền đánh cá\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b24': {
      "lessonId": "tv-g5-b24",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          38,
          39,
          40,
          41,
          42
      ],
      "sourceHash": "0187eab8c46e609cc3d1c8c814e8081e57eed980da9a5f05f21b0e01bb26d277",
      "readingPassage": {
          "title": "Khu rừng của Mát",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Khu rừng của Mát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 38–42).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu rừng của Mát\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39,
              40,
              41,
              42
          ],
          "sourceHash": "0187eab8c46e609cc3d1c8c814e8081e57eed980da9a5f05f21b0e01bb26d277",
          "audioNarration": "Bài đọc: Khu rừng của Mát. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Khu rừng của Mát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 38–42). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu rừng của Mát\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b25': {
      "lessonId": "tv-g5-b25",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          43,
          44,
          45,
          46,
          47
      ],
      "sourceHash": "de5544555a73fc634389b41831357a4c9d0a617cbc37cac347a7358437a028da",
      "readingPassage": {
          "title": "Hội thổi cơm thi ở Đồng Vân",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hội thổi cơm thi ở Đồng Vân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 43–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hội thổi cơm thi ở Đồng Vân\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45,
              46,
              47
          ],
          "sourceHash": "de5544555a73fc634389b41831357a4c9d0a617cbc37cac347a7358437a028da",
          "audioNarration": "Bài đọc: Hội thổi cơm thi ở Đồng Vân. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hội thổi cơm thi ở Đồng Vân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 43–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hội thổi cơm thi ở Đồng Vân\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b3': {
      "lessonId": "tv-g5-b3",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          18,
          19,
          20,
          21,
          22
      ],
      "sourceHash": "b253b3f1b165d3626912982234107b143579ed4244ac8682f44026a9a02dde39",
      "readingPassage": {
          "title": "Tuổi Ngựa",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa.",
              "Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi.",
              "Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19,
              20,
              21,
              22
          ],
          "sourceHash": "b253b3f1b165d3626912982234107b143579ed4244ac8682f44026a9a02dde39",
          "audioNarration": "Bài đọc: Tuổi Ngựa. Tác giả: Xuân Quỳnh. Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa. Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi. Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
      }
  },
  'tv-g5-b4': {
      "lessonId": "tv-g5-b4",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          23,
          24,
          25,
          26,
          27
      ],
      "sourceHash": "69071dd6209a7c8711c00cc7c7f31cb2ca276cdcfeeeb92eac3b711a992de30b",
      "readingPassage": {
          "title": "Bến sông tuổi thơ",
          "author": "Nguyễn Trọng Tạo",
          "genre": "prose",
          "content": [
              "Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua.",
              "Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ.",
              "Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25,
              26,
              27
          ],
          "sourceHash": "69071dd6209a7c8711c00cc7c7f31cb2ca276cdcfeeeb92eac3b711a992de30b",
          "audioNarration": "Bài đọc: Bến sông tuổi thơ. Tác giả: Nguyễn Trọng Tạo. Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua. Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ. Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
      }
  },
  'tv-g5-b5': {
      "lessonId": "tv-g5-b5",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          28,
          29,
          30
      ],
      "sourceHash": "0006dbdee0d1e65c5d9bb86af6dcf31e69680d06b6858a7b892363eea77cea59",
      "readingPassage": {
          "title": "Tiếng hạt nảy mầm",
          "author": "Tô Hà",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng hạt nảy mầm\nTác giả: Tô Hà\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 28–30).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng hạt nảy mầm\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29,
              30
          ],
          "sourceHash": "0006dbdee0d1e65c5d9bb86af6dcf31e69680d06b6858a7b892363eea77cea59",
          "audioNarration": "Bài đọc: Tiếng hạt nảy mầm. Tác giả: Tô Hà. Bài thơ: Tiếng hạt nảy mầm\nTác giả: Tô Hà\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 28–30). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng hạt nảy mầm\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-b6': {
      "lessonId": "tv-g5-b6",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          31,
          32,
          33,
          34,
          35
      ],
      "sourceHash": "2bccc0277e7998527c7ee3f570b643bf44b7129c12e84ee66b93426443fb79af",
      "readingPassage": {
          "title": "Ngôi sao sân cỏ",
          "author": "Theo Báo Thể thao",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngôi sao sân cỏ\nTác giả: Theo Báo Thể thao\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 31–35).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi sao sân cỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33,
              34,
              35
          ],
          "sourceHash": "2bccc0277e7998527c7ee3f570b643bf44b7129c12e84ee66b93426443fb79af",
          "audioNarration": "Bài đọc: Ngôi sao sân cỏ. Tác giả: Theo Báo Thể thao. Bài đọc: Ngôi sao sân cỏ\nTác giả: Theo Báo Thể thao\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 31–35). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi sao sân cỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b7': {
      "lessonId": "tv-g5-b7",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          36,
          37,
          38,
          39,
          40
      ],
      "sourceHash": "9ab297eacb7f0dac445f9a04b04c0044e279bd1dd262883fdf3a3e636172b9b4",
      "readingPassage": {
          "title": "Bộ sưu tập độc đáo",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Bộ sưu tập độc đáo\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 36–40).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ sưu tập độc đáo\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37,
              38,
              39,
              40
          ],
          "sourceHash": "9ab297eacb7f0dac445f9a04b04c0044e279bd1dd262883fdf3a3e636172b9b4",
          "audioNarration": "Bài đọc: Bộ sưu tập độc đáo. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Bộ sưu tập độc đáo\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 36–40). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ sưu tập độc đáo\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b8': {
      "lessonId": "tv-g5-b8",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          41,
          42,
          43,
          44,
          45
      ],
      "sourceHash": "d9c3c17027de7ac36c85b902ad5f0cc0bc6ac97514aaab9c1c803928b148e005",
      "readingPassage": {
          "title": "Hành tinh kì lạ",
          "author": "Khám phá vũ trụ",
          "genre": "prose",
          "content": [
              "Bài đọc: Hành tinh kì lạ\nTác giả: Khám phá vũ trụ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 41–45).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hành tinh kì lạ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              41,
              42,
              43,
              44,
              45
          ],
          "sourceHash": "d9c3c17027de7ac36c85b902ad5f0cc0bc6ac97514aaab9c1c803928b148e005",
          "audioNarration": "Bài đọc: Hành tinh kì lạ. Tác giả: Khám phá vũ trụ. Bài đọc: Hành tinh kì lạ\nTác giả: Khám phá vũ trụ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 41–45). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hành tinh kì lạ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-b9': {
      "lessonId": "tv-g5-b9",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          46,
          47,
          48,
          49,
          50
      ],
      "sourceHash": "d7c0194497c29e89d4c232abf9f3eb74294013b2695ce8e023f236f3ef75a306",
      "readingPassage": {
          "title": "Trước cổng trời",
          "author": "Nguyễn Đình Ảnh",
          "genre": "poem",
          "content": [
              "Bài thơ: Trước cổng trời\nTác giả: Nguyễn Đình Ảnh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 46–50).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Trước cổng trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48,
              49,
              50
          ],
          "sourceHash": "d7c0194497c29e89d4c232abf9f3eb74294013b2695ce8e023f236f3ef75a306",
          "audioNarration": "Bài đọc: Trước cổng trời. Tác giả: Nguyễn Đình Ảnh. Bài thơ: Trước cổng trời\nTác giả: Nguyễn Đình Ảnh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 46–50). Đọc thuộc lòng và diễn cảm bài thơ \"Trước cổng trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t1-b1': {
      "lessonId": "tv-g5-b1",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          8,
          9,
          10,
          11,
          12
      ],
      "sourceHash": "81f132326305490ad1e6985c7c4412ea5651ec98b2891bf7230fe7ea2058bae1",
      "readingPassage": {
          "title": "Thanh âm của gió",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.",
              "Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
              "Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11,
              12
          ],
          "sourceHash": "81f132326305490ad1e6985c7c4412ea5651ec98b2891bf7230fe7ea2058bae1",
          "audioNarration": "Bài đọc: Thanh âm của gió. Tác giả: Văn Thành Lê. Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch. Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình. Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
      }
  },
  'tv-g5-t1-b10': {
      "lessonId": "tv-g5-b10",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          51,
          52,
          53,
          54,
          55
      ],
      "sourceHash": "bf5e334a185da2f73e95fda1f51a55baca2e85f213377950e731c1580e4f93af",
      "readingPassage": {
          "title": "Kì diệu rừng xanh",
          "author": "Mai Văn Tạo",
          "genre": "prose",
          "content": [
              "Bài đọc: Kì diệu rừng xanh\nTác giả: Mai Văn Tạo\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 51–55).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kì diệu rừng xanh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              51,
              52,
              53,
              54,
              55
          ],
          "sourceHash": "bf5e334a185da2f73e95fda1f51a55baca2e85f213377950e731c1580e4f93af",
          "audioNarration": "Bài đọc: Kì diệu rừng xanh. Tác giả: Mai Văn Tạo. Bài đọc: Kì diệu rừng xanh\nTác giả: Mai Văn Tạo\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 51–55). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Kì diệu rừng xanh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b11': {
      "lessonId": "tv-g5-b11",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          56,
          57,
          58,
          59
      ],
      "sourceHash": "79d27751b355ebe2b2e1c9d0eb215f60580d5236f61478c35076df4f4fec5d1f",
      "readingPassage": {
          "title": "Hang Sơn Đoòng - những điều kì thú",
          "author": "Theo Báo Du lịch",
          "genre": "prose",
          "content": [
              "Bài đọc: Hang Sơn Đoòng - những điều kì thú\nTác giả: Theo Báo Du lịch\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 56–59).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hang Sơn Đoòng - những điều kì thú\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              56,
              57,
              58,
              59
          ],
          "sourceHash": "79d27751b355ebe2b2e1c9d0eb215f60580d5236f61478c35076df4f4fec5d1f",
          "audioNarration": "Bài đọc: Hang Sơn Đoòng - những điều kì thú. Tác giả: Theo Báo Du lịch. Bài đọc: Hang Sơn Đoòng - những điều kì thú\nTác giả: Theo Báo Du lịch\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 56–59). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hang Sơn Đoòng - những điều kì thú\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b12': {
      "lessonId": "tv-g5-b12",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          60,
          61,
          62,
          63
      ],
      "sourceHash": "42d32fff698de6d6e20ec7498e22e5afee7b08b0361f1355ed41fb133ee612e7",
      "readingPassage": {
          "title": "Những hòn đảo trên vịnh Hạ Long",
          "author": "Theo Địa lí Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những hòn đảo trên vịnh Hạ Long\nTác giả: Theo Địa lí Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 60–63).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những hòn đảo trên vịnh Hạ Long\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              60,
              61,
              62,
              63
          ],
          "sourceHash": "42d32fff698de6d6e20ec7498e22e5afee7b08b0361f1355ed41fb133ee612e7",
          "audioNarration": "Bài đọc: Những hòn đảo trên vịnh Hạ Long. Tác giả: Theo Địa lí Việt Nam. Bài đọc: Những hòn đảo trên vịnh Hạ Long\nTác giả: Theo Địa lí Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 60–63). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những hòn đảo trên vịnh Hạ Long\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b13': {
      "lessonId": "tv-g5-b13",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          64,
          65,
          66,
          67
      ],
      "sourceHash": "6470318efb4efa702a7409d46006630a783655f8103487904ec8add0e6f87d21",
      "readingPassage": {
          "title": "Mầm non",
          "author": "Võ Quảng",
          "genre": "poem",
          "content": [
              "Bài thơ: Mầm non\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 64–67).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Mầm non\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              64,
              65,
              66,
              67
          ],
          "sourceHash": "6470318efb4efa702a7409d46006630a783655f8103487904ec8add0e6f87d21",
          "audioNarration": "Bài đọc: Mầm non. Tác giả: Võ Quảng. Bài thơ: Mầm non\nTác giả: Võ Quảng\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 64–67). Đọc thuộc lòng và diễn cảm bài thơ \"Mầm non\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t1-b14': {
      "lessonId": "tv-g5-b14",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          68,
          69,
          70,
          71
      ],
      "sourceHash": "e584d1758136e99ba62f4bdcdaa49ea7fccfcb63fc1d6dce7f0b51afb3ec8875",
      "readingPassage": {
          "title": "Những ngọn núi nóng rẫy",
          "author": "Khám phá địa chất",
          "genre": "prose",
          "content": [
              "Bài đọc: Những ngọn núi nóng rẫy\nTác giả: Khám phá địa chất\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 68–71).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn núi nóng rẫy\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              68,
              69,
              70,
              71
          ],
          "sourceHash": "e584d1758136e99ba62f4bdcdaa49ea7fccfcb63fc1d6dce7f0b51afb3ec8875",
          "audioNarration": "Bài đọc: Những ngọn núi nóng rẫy. Tác giả: Khám phá địa chất. Bài đọc: Những ngọn núi nóng rẫy\nTác giả: Khám phá địa chất\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 68–71). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những ngọn núi nóng rẫy\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b15': {
      "lessonId": "tv-g5-b15",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          72,
          73,
          74,
          75
      ],
      "sourceHash": "24a369d98560093c745b970cfc2b5114eb8052adf78a123d87d4e7dadc212cca",
      "readingPassage": {
          "title": "Bài ca về mặt trời",
          "author": "Định Hải",
          "genre": "poem",
          "content": [
              "Bài thơ: Bài ca về mặt trời\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 72–75).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Bài ca về mặt trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              72,
              73,
              74,
              75
          ],
          "sourceHash": "24a369d98560093c745b970cfc2b5114eb8052adf78a123d87d4e7dadc212cca",
          "audioNarration": "Bài đọc: Bài ca về mặt trời. Tác giả: Định Hải. Bài thơ: Bài ca về mặt trời\nTác giả: Định Hải\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 72–75). Đọc thuộc lòng và diễn cảm bài thơ \"Bài ca về mặt trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t1-b16': {
      "lessonId": "tv-g5-b16",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88
      ],
      "sourceHash": "6747bb114f3923b1c439a531f76f8a8946825618e70f63445064520d38028df1",
      "readingPassage": {
          "title": "Xin chào, Xa-ha-ra",
          "author": "Khám phá thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Xin chào, Xa-ha-ra\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 76–88).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xin chào, Xa-ha-ra\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              76,
              77,
              78,
              79,
              80,
              81,
              82,
              83,
              84,
              85,
              86,
              87,
              88
          ],
          "sourceHash": "6747bb114f3923b1c439a531f76f8a8946825618e70f63445064520d38028df1",
          "audioNarration": "Bài đọc: Xin chào, Xa-ha-ra. Tác giả: Khám phá thế giới. Bài đọc: Xin chào, Xa-ha-ra\nTác giả: Khám phá thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 76–88). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xin chào, Xa-ha-ra\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b17': {
      "lessonId": "tv-g5-t1-b17",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          89,
          90,
          91,
          92,
          93
      ],
      "sourceHash": "d8513c2fdb27c77ab5ef30bd233e21fae0c557957755a89ac01468bb7e0c1ab8",
      "readingPassage": {
          "title": "Thư gửi các học sinh",
          "author": "Hồ Chí Minh",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư gửi các học sinh\nTác giả: Hồ Chí Minh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 89–93).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư gửi các học sinh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              89,
              90,
              91,
              92,
              93
          ],
          "sourceHash": "d8513c2fdb27c77ab5ef30bd233e21fae0c557957755a89ac01468bb7e0c1ab8",
          "audioNarration": "Bài đọc: Thư gửi các học sinh. Tác giả: Hồ Chí Minh. Bài đọc: Thư gửi các học sinh\nTác giả: Hồ Chí Minh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 89–93). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư gửi các học sinh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b18': {
      "lessonId": "tv-g5-t1-b18",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          94,
          95,
          96,
          97
      ],
      "sourceHash": "f5f00fe6acfae825ef448a6ef7f550c784503af84829b7483f5d4fc7bfb12663",
      "readingPassage": {
          "title": "Tấm gương tự học",
          "author": "Theo Danh nhân Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Tấm gương tự học\nTác giả: Theo Danh nhân Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 94–97).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tấm gương tự học\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              94,
              95,
              96,
              97
          ],
          "sourceHash": "f5f00fe6acfae825ef448a6ef7f550c784503af84829b7483f5d4fc7bfb12663",
          "audioNarration": "Bài đọc: Tấm gương tự học. Tác giả: Theo Danh nhân Việt Nam. Bài đọc: Tấm gương tự học\nTác giả: Theo Danh nhân Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 94–97). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tấm gương tự học\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b19': {
      "lessonId": "tv-g5-t1-b19",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          98,
          99,
          100,
          101
      ],
      "sourceHash": "c2b1b7f5fa0f79ac5a5efbd76fe6dce5570cd645614e127e4e9b3eb29a79c552",
      "readingPassage": {
          "title": "Trải nghiệm để sáng tạo",
          "author": "Theo Báo Tuổi trẻ",
          "genre": "prose",
          "content": [
              "Bài đọc: Trải nghiệm để sáng tạo\nTác giả: Theo Báo Tuổi trẻ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 98–101).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trải nghiệm để sáng tạo\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              98,
              99,
              100,
              101
          ],
          "sourceHash": "c2b1b7f5fa0f79ac5a5efbd76fe6dce5570cd645614e127e4e9b3eb29a79c552",
          "audioNarration": "Bài đọc: Trải nghiệm để sáng tạo. Tác giả: Theo Báo Tuổi trẻ. Bài đọc: Trải nghiệm để sáng tạo\nTác giả: Theo Báo Tuổi trẻ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 98–101). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trải nghiệm để sáng tạo\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b2': {
      "lessonId": "tv-g5-b2",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          13,
          14,
          15,
          16,
          17
      ],
      "sourceHash": "68dbb38d56bda8ac09eb57f9f55b98d5d9d507b922229c57647d68201bdd6daa",
      "readingPassage": {
          "title": "Cánh đồng hoa",
          "author": "Lê Huy Trọng",
          "genre": "prose",
          "content": [
              "Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm.",
              "Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán.",
              "Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16,
              17
          ],
          "sourceHash": "68dbb38d56bda8ac09eb57f9f55b98d5d9d507b922229c57647d68201bdd6daa",
          "audioNarration": "Bài đọc: Cánh đồng hoa. Tác giả: Lê Huy Trọng. Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm. Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán. Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
      }
  },
  'tv-g5-t1-b20': {
      "lessonId": "tv-g5-t1-b20",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          102,
          103,
          104
      ],
      "sourceHash": "8e385b8c6005278bcd2add5dc3bb92a27f1cc9ae9ed131991f82cae692c3cc1d",
      "readingPassage": {
          "title": "Khổ luyện thành tài",
          "author": "Theo Danh nhân thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Khổ luyện thành tài\nTác giả: Theo Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 102–104).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khổ luyện thành tài\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              102,
              103,
              104
          ],
          "sourceHash": "8e385b8c6005278bcd2add5dc3bb92a27f1cc9ae9ed131991f82cae692c3cc1d",
          "audioNarration": "Bài đọc: Khổ luyện thành tài. Tác giả: Theo Danh nhân thế giới. Bài đọc: Khổ luyện thành tài\nTác giả: Theo Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 102–104). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khổ luyện thành tài\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b21': {
      "lessonId": "tv-g5-t1-b21",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          105,
          106,
          107,
          108,
          109
      ],
      "sourceHash": "81aec627ee4ae0b614bb5b5383a3a81246b510ea21eb6da773f82b99b4f3c7df",
      "readingPassage": {
          "title": "Thế giới trong trang sách",
          "author": "Vũ Tú Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thế giới trong trang sách\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 105–109).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thế giới trong trang sách\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              105,
              106,
              107,
              108,
              109
          ],
          "sourceHash": "81aec627ee4ae0b614bb5b5383a3a81246b510ea21eb6da773f82b99b4f3c7df",
          "audioNarration": "Bài đọc: Thế giới trong trang sách. Tác giả: Vũ Tú Nam. Bài đọc: Thế giới trong trang sách\nTác giả: Vũ Tú Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 105–109). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thế giới trong trang sách\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b22': {
      "lessonId": "tv-g5-t1-b22",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          110,
          111,
          112,
          113
      ],
      "sourceHash": "51ad13e7e2a010efdc4c3f117b7db080cff5155b3eb857b6867a08a367f82fe1",
      "readingPassage": {
          "title": "Từ những câu chuyện ấu thơ",
          "author": "Theo Hạt giống tâm hồn",
          "genre": "prose",
          "content": [
              "Bài đọc: Từ những câu chuyện ấu thơ\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 110–113).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Từ những câu chuyện ấu thơ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              110,
              111,
              112,
              113
          ],
          "sourceHash": "51ad13e7e2a010efdc4c3f117b7db080cff5155b3eb857b6867a08a367f82fe1",
          "audioNarration": "Bài đọc: Từ những câu chuyện ấu thơ. Tác giả: Theo Hạt giống tâm hồn. Bài đọc: Từ những câu chuyện ấu thơ\nTác giả: Theo Hạt giống tâm hồn\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 110–113). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Từ những câu chuyện ấu thơ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b23': {
      "lessonId": "tv-g5-t1-b23",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          114,
          115,
          116
      ],
      "sourceHash": "69d6eb5864fbb0ee11c288acd35603a043435d8e5459f8af487748bf984495e4",
      "readingPassage": {
          "title": "Giới thiệu sách Dế Mèn phiêu lưu kí",
          "author": "Tô Hoài",
          "genre": "prose",
          "content": [
              "Bài đọc: Giới thiệu sách Dế Mèn phiêu lưu kí\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 114–116).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giới thiệu sách Dế Mèn phiêu lưu kí\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              114,
              115,
              116
          ],
          "sourceHash": "69d6eb5864fbb0ee11c288acd35603a043435d8e5459f8af487748bf984495e4",
          "audioNarration": "Bài đọc: Giới thiệu sách Dế Mèn phiêu lưu kí. Tác giả: Tô Hoài. Bài đọc: Giới thiệu sách Dế Mèn phiêu lưu kí\nTác giả: Tô Hoài\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 114–116). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giới thiệu sách Dế Mèn phiêu lưu kí\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b24': {
      "lessonId": "tv-g5-t1-b24",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          117,
          118,
          119,
          120,
          121
      ],
      "sourceHash": "8969ed4c301c71d933b009c27c8e18cb707fb62000b69f2e3ac6d213d6145c3b",
      "readingPassage": {
          "title": "Tinh thần học tập của nhà Phi-lít",
          "author": "Danh nhân thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Tinh thần học tập của nhà Phi-lít\nTác giả: Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 117–121).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tinh thần học tập của nhà Phi-lít\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              117,
              118,
              119,
              120,
              121
          ],
          "sourceHash": "8969ed4c301c71d933b009c27c8e18cb707fb62000b69f2e3ac6d213d6145c3b",
          "audioNarration": "Bài đọc: Tinh thần học tập của nhà Phi-lít. Tác giả: Danh nhân thế giới. Bài đọc: Tinh thần học tập của nhà Phi-lít\nTác giả: Danh nhân thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 117–121). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tinh thần học tập của nhà Phi-lít\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b25': {
      "lessonId": "tv-g5-t1-b25",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          122,
          123,
          124,
          125,
          126
      ],
      "sourceHash": "d574b7074eff84870e266de151487a5d5dd1767f8edbe9d2c4e2377ece3e30cb",
      "readingPassage": {
          "title": "Tiếng đàn ba-la-lai-ca trên sông Đà",
          "author": "Quang Huy",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng đàn ba-la-lai-ca trên sông Đà\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 122–126).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng đàn ba-la-lai-ca trên sông Đà\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123,
              124,
              125,
              126
          ],
          "sourceHash": "d574b7074eff84870e266de151487a5d5dd1767f8edbe9d2c4e2377ece3e30cb",
          "audioNarration": "Bài đọc: Tiếng đàn ba-la-lai-ca trên sông Đà. Tác giả: Quang Huy. Bài thơ: Tiếng đàn ba-la-lai-ca trên sông Đà\nTác giả: Quang Huy\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 122–126). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng đàn ba-la-lai-ca trên sông Đà\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t1-b26': {
      "lessonId": "tv-g5-t1-b26",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          127,
          128,
          129,
          130,
          131
      ],
      "sourceHash": "9cd90605c67665d013246a653bf8492ce8e3af22dd8bffff4778748b7a80991a",
      "readingPassage": {
          "title": "Trí tưởng tượng phong phú",
          "author": "Theo Tâm lí học trẻ em",
          "genre": "prose",
          "content": [
              "Bài đọc: Trí tưởng tượng phong phú\nTác giả: Theo Tâm lí học trẻ em\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 127–131).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trí tưởng tượng phong phú\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              127,
              128,
              129,
              130,
              131
          ],
          "sourceHash": "9cd90605c67665d013246a653bf8492ce8e3af22dd8bffff4778748b7a80991a",
          "audioNarration": "Bài đọc: Trí tưởng tượng phong phú. Tác giả: Theo Tâm lí học trẻ em. Bài đọc: Trí tưởng tượng phong phú\nTác giả: Theo Tâm lí học trẻ em\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 127–131). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Trí tưởng tượng phong phú\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b27': {
      "lessonId": "tv-g5-t1-b27",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          132,
          133,
          134,
          135
      ],
      "sourceHash": "09258c8f19e3c978663dd2c3473fc0e0629b6f112d15af2504f77cf531df6988",
      "readingPassage": {
          "title": "Tranh làng Hồ",
          "author": "Nguyễn Tuân",
          "genre": "prose",
          "content": [
              "Bài đọc: Tranh làng Hồ\nTác giả: Nguyễn Tuân\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 132–135).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tranh làng Hồ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              132,
              133,
              134,
              135
          ],
          "sourceHash": "09258c8f19e3c978663dd2c3473fc0e0629b6f112d15af2504f77cf531df6988",
          "audioNarration": "Bài đọc: Tranh làng Hồ. Tác giả: Nguyễn Tuân. Bài đọc: Tranh làng Hồ\nTác giả: Nguyễn Tuân\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 132–135). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tranh làng Hồ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b28': {
      "lessonId": "tv-g5-t1-b28",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          136,
          137,
          138,
          139
      ],
      "sourceHash": "65b2ff034e765ef99a246fa6ca4bef40432afbf8cab1a7e0476e5421519212cf",
      "readingPassage": {
          "title": "Tập hát quan họ",
          "author": "Dân ca quan họ Bắc Ninh",
          "genre": "prose",
          "content": [
              "Bài đọc: Tập hát quan họ\nTác giả: Dân ca quan họ Bắc Ninh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 136–139).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập hát quan họ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              136,
              137,
              138,
              139
          ],
          "sourceHash": "65b2ff034e765ef99a246fa6ca4bef40432afbf8cab1a7e0476e5421519212cf",
          "audioNarration": "Bài đọc: Tập hát quan họ. Tác giả: Dân ca quan họ Bắc Ninh. Bài đọc: Tập hát quan họ\nTác giả: Dân ca quan họ Bắc Ninh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 136–139). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Tập hát quan họ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b29': {
      "lessonId": "tv-g5-t1-b29",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          140,
          141,
          142,
          143,
          144
      ],
      "sourceHash": "7ecee8ae1d5561fc8bd3c3952528d26221862c4c031d0cbb51a263ae7557f2d9",
      "readingPassage": {
          "title": "Phim hoạt hình Chú ốc sên bay",
          "author": "Điện ảnh thiếu nhi",
          "genre": "prose",
          "content": [
              "Bài đọc: Phim hoạt hình Chú ốc sên bay\nTác giả: Điện ảnh thiếu nhi\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 140–144).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Phim hoạt hình Chú ốc sên bay\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              140,
              141,
              142,
              143,
              144
          ],
          "sourceHash": "7ecee8ae1d5561fc8bd3c3952528d26221862c4c031d0cbb51a263ae7557f2d9",
          "audioNarration": "Bài đọc: Phim hoạt hình Chú ốc sên bay. Tác giả: Điện ảnh thiếu nhi. Bài đọc: Phim hoạt hình Chú ốc sên bay\nTác giả: Điện ảnh thiếu nhi\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 140–144). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Phim hoạt hình Chú ốc sên bay\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b3': {
      "lessonId": "tv-g5-b3",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          18,
          19,
          20,
          21,
          22
      ],
      "sourceHash": "b253b3f1b165d3626912982234107b143579ed4244ac8682f44026a9a02dde39",
      "readingPassage": {
          "title": "Tuổi Ngựa",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa.",
              "Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi.",
              "Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              18,
              19,
              20,
              21,
              22
          ],
          "sourceHash": "b253b3f1b165d3626912982234107b143579ed4244ac8682f44026a9a02dde39",
          "audioNarration": "Bài đọc: Tuổi Ngựa. Tác giả: Xuân Quỳnh. Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa. Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi. Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
      }
  },
  'tv-g5-t1-b30': {
      "lessonId": "tv-g5-t1-b30",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          145,
          146,
          147,
          148
      ],
      "sourceHash": "84a70968a84af6359de8b7a48bcd450913b2f9c3bdfed52183da553f32cb8f82",
      "readingPassage": {
          "title": "Nghệ thuật múa ba lê",
          "author": "Nghệ thuật thế giới",
          "genre": "prose",
          "content": [
              "Bài đọc: Nghệ thuật múa ba lê\nTác giả: Nghệ thuật thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 145–148).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ thuật múa ba lê\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              145,
              146,
              147,
              148
          ],
          "sourceHash": "84a70968a84af6359de8b7a48bcd450913b2f9c3bdfed52183da553f32cb8f82",
          "audioNarration": "Bài đọc: Nghệ thuật múa ba lê. Tác giả: Nghệ thuật thế giới. Bài đọc: Nghệ thuật múa ba lê\nTác giả: Nghệ thuật thế giới\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 145–148). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghệ thuật múa ba lê\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b31': {
      "lessonId": "tv-g5-t1-b31",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          149,
          150,
          151,
          152
      ],
      "sourceHash": "7e6cea31b77064ae0c2390f7069d2c2faaba7b65a1ba54fdf868b320614f4e02",
      "readingPassage": {
          "title": "Một ngôi chùa độc đáo",
          "author": "Di sản văn hoá Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Một ngôi chùa độc đáo\nTác giả: Di sản văn hoá Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 149–152).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một ngôi chùa độc đáo\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              149,
              150,
              151,
              152
          ],
          "sourceHash": "7e6cea31b77064ae0c2390f7069d2c2faaba7b65a1ba54fdf868b320614f4e02",
          "audioNarration": "Bài đọc: Một ngôi chùa độc đáo. Tác giả: Di sản văn hoá Việt Nam. Bài đọc: Một ngôi chùa độc đáo\nTác giả: Di sản văn hoá Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 149–152). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một ngôi chùa độc đáo\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b32': {
      "lessonId": "tv-g5-t1-b32",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          153,
          154,
          155,
          156
      ],
      "sourceHash": "92eafd2d57a1d3fee67557d1db8ad84a14ac8d2396cdea9a107bbca556a04a46",
      "readingPassage": {
          "title": "Sự tích chú Tễu",
          "author": "Nghệ thuật múa rối nước",
          "genre": "prose",
          "content": [
              "Bài đọc: Sự tích chú Tễu\nTác giả: Nghệ thuật múa rối nước\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 153–156).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích chú Tễu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              153,
              154,
              155,
              156
          ],
          "sourceHash": "92eafd2d57a1d3fee67557d1db8ad84a14ac8d2396cdea9a107bbca556a04a46",
          "audioNarration": "Bài đọc: Sự tích chú Tễu. Tác giả: Nghệ thuật múa rối nước. Bài đọc: Sự tích chú Tễu\nTác giả: Nghệ thuật múa rối nước\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 153–156). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Sự tích chú Tễu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b4': {
      "lessonId": "tv-g5-b4",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          23,
          24,
          25,
          26,
          27
      ],
      "sourceHash": "69071dd6209a7c8711c00cc7c7f31cb2ca276cdcfeeeb92eac3b711a992de30b",
      "readingPassage": {
          "title": "Bến sông tuổi thơ",
          "author": "Nguyễn Trọng Tạo",
          "genre": "prose",
          "content": [
              "Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua.",
              "Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ.",
              "Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              23,
              24,
              25,
              26,
              27
          ],
          "sourceHash": "69071dd6209a7c8711c00cc7c7f31cb2ca276cdcfeeeb92eac3b711a992de30b",
          "audioNarration": "Bài đọc: Bến sông tuổi thơ. Tác giả: Nguyễn Trọng Tạo. Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua. Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ. Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
      }
  },
  'tv-g5-t1-b5': {
      "lessonId": "tv-g5-b5",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          28,
          29,
          30
      ],
      "sourceHash": "0006dbdee0d1e65c5d9bb86af6dcf31e69680d06b6858a7b892363eea77cea59",
      "readingPassage": {
          "title": "Tiếng hạt nảy mầm",
          "author": "Tô Hà",
          "genre": "poem",
          "content": [
              "Bài thơ: Tiếng hạt nảy mầm\nTác giả: Tô Hà\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 28–30).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng hạt nảy mầm\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              28,
              29,
              30
          ],
          "sourceHash": "0006dbdee0d1e65c5d9bb86af6dcf31e69680d06b6858a7b892363eea77cea59",
          "audioNarration": "Bài đọc: Tiếng hạt nảy mầm. Tác giả: Tô Hà. Bài thơ: Tiếng hạt nảy mầm\nTác giả: Tô Hà\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 28–30). Đọc thuộc lòng và diễn cảm bài thơ \"Tiếng hạt nảy mầm\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t1-b6': {
      "lessonId": "tv-g5-b6",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          31,
          32,
          33,
          34,
          35
      ],
      "sourceHash": "2bccc0277e7998527c7ee3f570b643bf44b7129c12e84ee66b93426443fb79af",
      "readingPassage": {
          "title": "Ngôi sao sân cỏ",
          "author": "Theo Báo Thể thao",
          "genre": "prose",
          "content": [
              "Bài đọc: Ngôi sao sân cỏ\nTác giả: Theo Báo Thể thao\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 31–35).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi sao sân cỏ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              31,
              32,
              33,
              34,
              35
          ],
          "sourceHash": "2bccc0277e7998527c7ee3f570b643bf44b7129c12e84ee66b93426443fb79af",
          "audioNarration": "Bài đọc: Ngôi sao sân cỏ. Tác giả: Theo Báo Thể thao. Bài đọc: Ngôi sao sân cỏ\nTác giả: Theo Báo Thể thao\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 31–35). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Ngôi sao sân cỏ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b7': {
      "lessonId": "tv-g5-b7",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          36,
          37,
          38,
          39,
          40
      ],
      "sourceHash": "9ab297eacb7f0dac445f9a04b04c0044e279bd1dd262883fdf3a3e636172b9b4",
      "readingPassage": {
          "title": "Bộ sưu tập độc đáo",
          "author": "Theo Báo Thiếu niên Tiền phong",
          "genre": "prose",
          "content": [
              "Bài đọc: Bộ sưu tập độc đáo\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 36–40).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ sưu tập độc đáo\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              36,
              37,
              38,
              39,
              40
          ],
          "sourceHash": "9ab297eacb7f0dac445f9a04b04c0044e279bd1dd262883fdf3a3e636172b9b4",
          "audioNarration": "Bài đọc: Bộ sưu tập độc đáo. Tác giả: Theo Báo Thiếu niên Tiền phong. Bài đọc: Bộ sưu tập độc đáo\nTác giả: Theo Báo Thiếu niên Tiền phong\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 36–40). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ sưu tập độc đáo\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b8': {
      "lessonId": "tv-g5-b8",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          41,
          42,
          43,
          44,
          45
      ],
      "sourceHash": "d9c3c17027de7ac36c85b902ad5f0cc0bc6ac97514aaab9c1c803928b148e005",
      "readingPassage": {
          "title": "Hành tinh kì lạ",
          "author": "Khám phá vũ trụ",
          "genre": "prose",
          "content": [
              "Bài đọc: Hành tinh kì lạ\nTác giả: Khám phá vũ trụ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 41–45).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hành tinh kì lạ\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              41,
              42,
              43,
              44,
              45
          ],
          "sourceHash": "d9c3c17027de7ac36c85b902ad5f0cc0bc6ac97514aaab9c1c803928b148e005",
          "audioNarration": "Bài đọc: Hành tinh kì lạ. Tác giả: Khám phá vũ trụ. Bài đọc: Hành tinh kì lạ\nTác giả: Khám phá vũ trụ\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 41–45). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hành tinh kì lạ\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t1-b9': {
      "lessonId": "tv-g5-b9",
      "bookId": "tv-g5-t1",
      "sourcePages": [
          46,
          47,
          48,
          49,
          50
      ],
      "sourceHash": "d7c0194497c29e89d4c232abf9f3eb74294013b2695ce8e023f236f3ef75a306",
      "readingPassage": {
          "title": "Trước cổng trời",
          "author": "Nguyễn Đình Ảnh",
          "genre": "poem",
          "content": [
              "Bài thơ: Trước cổng trời\nTác giả: Nguyễn Đình Ảnh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 46–50).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Trước cổng trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              46,
              47,
              48,
              49,
              50
          ],
          "sourceHash": "d7c0194497c29e89d4c232abf9f3eb74294013b2695ce8e023f236f3ef75a306",
          "audioNarration": "Bài đọc: Trước cổng trời. Tác giả: Nguyễn Đình Ảnh. Bài thơ: Trước cổng trời\nTác giả: Nguyễn Đình Ảnh\nSách giáo khoa Tiếng Việt lớp 5 tập 1 (Trang 46–50). Đọc thuộc lòng và diễn cảm bài thơ \"Trước cổng trời\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t2-b1': {
      "lessonId": "tv-g5-b17",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          8,
          9,
          10,
          11,
          12
      ],
      "sourceHash": "428c1028057c9891a34dcc2f4c8c75619738a68c2b6c5fc5cf8b48924bb36573",
      "readingPassage": {
          "title": "Tiếng hát của người đá",
          "author": "Văn Thành Lê",
          "genre": "prose",
          "content": [
              "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.",
              "Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
              "Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              8,
              9,
              10,
              11,
              12
          ],
          "sourceHash": "428c1028057c9891a34dcc2f4c8c75619738a68c2b6c5fc5cf8b48924bb36573",
          "audioNarration": "Bài đọc: Tiếng hát của người đá. Tác giả: Văn Thành Lê. Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch. Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình. Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
      }
  },
  'tv-g5-t2-b10': {
      "lessonId": "tv-g5-t2-b10",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          48,
          49,
          50,
          51,
          52
      ],
      "sourceHash": "02c8547aef5447545e60aa54269bb3bd56c53321c24ec9f0217ab6d481016a63",
      "readingPassage": {
          "title": "Những búp chè trên cây cổ thụ",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Những búp chè trên cây cổ thụ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 48–52).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Những búp chè trên cây cổ thụ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              48,
              49,
              50,
              51,
              52
          ],
          "sourceHash": "02c8547aef5447545e60aa54269bb3bd56c53321c24ec9f0217ab6d481016a63",
          "audioNarration": "Bài đọc: Những búp chè trên cây cổ thụ. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Những búp chè trên cây cổ thụ\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 48–52). Đọc thuộc lòng và diễn cảm bài thơ \"Những búp chè trên cây cổ thụ\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t2-b11': {
      "lessonId": "tv-g5-t2-b11",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          53,
          54,
          55,
          56
      ],
      "sourceHash": "a06de749e092acab916f25ffa8c84b60f4ffe00dba0dda1441b892f0b031b6e7",
      "readingPassage": {
          "title": "Hương cốm mùa thu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hương cốm mùa thu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 53–56).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hương cốm mùa thu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              53,
              54,
              55,
              56
          ],
          "sourceHash": "a06de749e092acab916f25ffa8c84b60f4ffe00dba0dda1441b892f0b031b6e7",
          "audioNarration": "Bài đọc: Hương cốm mùa thu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hương cốm mùa thu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 53–56). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hương cốm mùa thu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b12': {
      "lessonId": "tv-g5-t2-b12",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          57,
          58,
          59,
          60
      ],
      "sourceHash": "131ec64839ea6adc123e44633eb9dc12b422675e35ead5f685862bef9ace1b72",
      "readingPassage": {
          "title": "Vũ điệu trên nền thổ cẩm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Vũ điệu trên nền thổ cẩm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 57–60).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vũ điệu trên nền thổ cẩm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              57,
              58,
              59,
              60
          ],
          "sourceHash": "131ec64839ea6adc123e44633eb9dc12b422675e35ead5f685862bef9ace1b72",
          "audioNarration": "Bài đọc: Vũ điệu trên nền thổ cẩm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Vũ điệu trên nền thổ cẩm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 57–60). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Vũ điệu trên nền thổ cẩm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b13': {
      "lessonId": "tv-g5-t2-b13",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          61,
          62,
          63,
          64,
          65
      ],
      "sourceHash": "249b8f8ea4f71faed1c89735b54ccaf832611e720ce06e0e42fffffd0487555d",
      "readingPassage": {
          "title": "Đàn trưng - tiếng ca đại ngàn",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đàn trưng - tiếng ca đại ngàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 61–65).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đàn trưng - tiếng ca đại ngàn\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              61,
              62,
              63,
              64,
              65
          ],
          "sourceHash": "249b8f8ea4f71faed1c89735b54ccaf832611e720ce06e0e42fffffd0487555d",
          "audioNarration": "Bài đọc: Đàn trưng - tiếng ca đại ngàn. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đàn trưng - tiếng ca đại ngàn\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 61–65). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đàn trưng - tiếng ca đại ngàn\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b14': {
      "lessonId": "tv-g5-t2-b14",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          66,
          67,
          68,
          69
      ],
      "sourceHash": "22944d1c21a65d9d93a046201f272ff1dd7700acfc23df202750589d11de434f",
      "readingPassage": {
          "title": "Đường quê Đồng Tháp Mười",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đường quê Đồng Tháp Mười\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 66–69).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đường quê Đồng Tháp Mười\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              66,
              67,
              68,
              69
          ],
          "sourceHash": "22944d1c21a65d9d93a046201f272ff1dd7700acfc23df202750589d11de434f",
          "audioNarration": "Bài đọc: Đường quê Đồng Tháp Mười. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đường quê Đồng Tháp Mười\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 66–69). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đường quê Đồng Tháp Mười\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b15': {
      "lessonId": "tv-g5-t2-b15",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          70,
          71,
          72
      ],
      "sourceHash": "a5028ef034a86341d00e30df2780132eac4fd31584365e13e4698cf9071da091",
      "readingPassage": {
          "title": "Xuồng ba lá quê tôi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Xuồng ba lá quê tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 70–72).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xuồng ba lá quê tôi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              70,
              71,
              72
          ],
          "sourceHash": "a5028ef034a86341d00e30df2780132eac4fd31584365e13e4698cf9071da091",
          "audioNarration": "Bài đọc: Xuồng ba lá quê tôi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Xuồng ba lá quê tôi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 70–72). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Xuồng ba lá quê tôi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b16': {
      "lessonId": "tv-g5-t2-b16",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87
      ],
      "sourceHash": "38fe95e1d0a08c9e7e275af8595c25a8e3119c87db2dc6ba4083c98119ce5d75",
      "readingPassage": {
          "title": "Về thăm Đất Mũi",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Về thăm Đất Mũi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 73–87).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Về thăm Đất Mũi\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81,
              82,
              83,
              84,
              85,
              86,
              87
          ],
          "sourceHash": "38fe95e1d0a08c9e7e275af8595c25a8e3119c87db2dc6ba4083c98119ce5d75",
          "audioNarration": "Bài đọc: Về thăm Đất Mũi. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Về thăm Đất Mũi\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 73–87). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Về thăm Đất Mũi\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b17': {
      "lessonId": "tv-g5-t2-b17",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          88,
          89,
          90,
          91,
          92
      ],
      "sourceHash": "d7c5af1b6cd116b0686a62d4fdfd9f360e6c56ad04b0bf5c9c84efbc76dd1c91",
      "readingPassage": {
          "title": "Nghìn năm văn hiến",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Nghìn năm văn hiến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 88–92).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghìn năm văn hiến\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              88,
              89,
              90,
              91,
              92
          ],
          "sourceHash": "d7c5af1b6cd116b0686a62d4fdfd9f360e6c56ad04b0bf5c9c84efbc76dd1c91",
          "audioNarration": "Bài đọc: Nghìn năm văn hiến. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Nghìn năm văn hiến\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 88–92). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Nghìn năm văn hiến\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b18': {
      "lessonId": "tv-g5-t2-b18",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          93,
          94,
          95,
          96
      ],
      "sourceHash": "3782b6c5c9f50e3fbafb2ca24f83309ab382b7935871cef6979db1db26c8e8a1",
      "readingPassage": {
          "title": "Người thầy của muôn đời",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Người thầy của muôn đời\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 93–96).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người thầy của muôn đời\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              93,
              94,
              95,
              96
          ],
          "sourceHash": "3782b6c5c9f50e3fbafb2ca24f83309ab382b7935871cef6979db1db26c8e8a1",
          "audioNarration": "Bài đọc: Người thầy của muôn đời. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Người thầy của muôn đời\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 93–96). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Người thầy của muôn đời\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b19': {
      "lessonId": "tv-g5-t2-b19",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          97,
          98,
          99,
          100
      ],
      "sourceHash": "40988e33c93244dd739ad1b23b2befd23eac0c3d2d235a1c60a581e326216d27",
      "readingPassage": {
          "title": "Danh y Tuệ Tĩnh",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Danh y Tuệ Tĩnh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 97–100).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh y Tuệ Tĩnh\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              97,
              98,
              99,
              100
          ],
          "sourceHash": "40988e33c93244dd739ad1b23b2befd23eac0c3d2d235a1c60a581e326216d27",
          "audioNarration": "Bài đọc: Danh y Tuệ Tĩnh. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Danh y Tuệ Tĩnh\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 97–100). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Danh y Tuệ Tĩnh\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b2': {
      "lessonId": "tv-g5-b18",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          13,
          14,
          15,
          16
      ],
      "sourceHash": "0fbf13eb384ac47adbe8b1295028aafd9661127e7b79fda4bb4096267f241d03",
      "readingPassage": {
          "title": "Khúc hát ru những em bé lớn trên lưng mẹ",
          "author": "Lê Huy Trọng",
          "genre": "prose",
          "content": [
              "Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm.",
              "Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán.",
              "Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              13,
              14,
              15,
              16
          ],
          "sourceHash": "0fbf13eb384ac47adbe8b1295028aafd9661127e7b79fda4bb4096267f241d03",
          "audioNarration": "Bài đọc: Khúc hát ru những em bé lớn trên lưng mẹ. Tác giả: Lê Huy Trọng. Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm. Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán. Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
      }
  },
  'tv-g5-t2-b20': {
      "lessonId": "tv-g5-t2-b20",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          101,
          102,
          103,
          104,
          105
      ],
      "sourceHash": "e3bca65436788286445c6606e062ab6c4be00d447c67fac4d9d2ec678ef1e8ac",
      "readingPassage": {
          "title": "Cụ Đồ Chiểu",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Cụ Đồ Chiểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 101–105).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cụ Đồ Chiểu\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              101,
              102,
              103,
              104,
              105
          ],
          "sourceHash": "e3bca65436788286445c6606e062ab6c4be00d447c67fac4d9d2ec678ef1e8ac",
          "audioNarration": "Bài đọc: Cụ Đồ Chiểu. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Cụ Đồ Chiểu\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 101–105). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Cụ Đồ Chiểu\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b21': {
      "lessonId": "tv-g5-t2-b21",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          106,
          107,
          108
      ],
      "sourceHash": "911574e286220205bb92feffb350a6fd696f601f436930f9c5ef08adf6c1bb92",
      "readingPassage": {
          "title": "Anh hùng Lao động Trần Đại Nghĩa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Anh hùng Lao động Trần Đại Nghĩa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 106–108).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh hùng Lao động Trần Đại Nghĩa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              106,
              107,
              108
          ],
          "sourceHash": "911574e286220205bb92feffb350a6fd696f601f436930f9c5ef08adf6c1bb92",
          "audioNarration": "Bài đọc: Anh hùng Lao động Trần Đại Nghĩa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Anh hùng Lao động Trần Đại Nghĩa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 106–108). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Anh hùng Lao động Trần Đại Nghĩa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b22': {
      "lessonId": "tv-g5-t2-b22",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          109,
          110,
          111,
          112
      ],
      "sourceHash": "d0fb12dccdafdca279807498dc852572023f44c5d68932cc3d908fcb6043ddff",
      "readingPassage": {
          "title": "Bộ đội về làng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bộ đội về làng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 109–112).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ đội về làng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              109,
              110,
              111,
              112
          ],
          "sourceHash": "d0fb12dccdafdca279807498dc852572023f44c5d68932cc3d908fcb6043ddff",
          "audioNarration": "Bài đọc: Bộ đội về làng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bộ đội về làng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 109–112). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bộ đội về làng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b23': {
      "lessonId": "tv-g5-t2-b23",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          113,
          114,
          115,
          116
      ],
      "sourceHash": "9b4c201f8124294f8a1f6ee6e5336c30be6a32bdd1bb8e0f17306b7e58ed5a98",
      "readingPassage": {
          "title": "Về ngôi nhà đang xây",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "poem",
          "content": [
              "Bài thơ: Về ngôi nhà đang xây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 113–116).",
              "Đọc thuộc lòng và diễn cảm bài thơ \"Về ngôi nhà đang xây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ.",
              "Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              113,
              114,
              115,
              116
          ],
          "sourceHash": "9b4c201f8124294f8a1f6ee6e5336c30be6a32bdd1bb8e0f17306b7e58ed5a98",
          "audioNarration": "Bài đọc: Về ngôi nhà đang xây. Tác giả: NXB Giáo Dục Việt Nam. Bài thơ: Về ngôi nhà đang xây\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 113–116). Đọc thuộc lòng và diễn cảm bài thơ \"Về ngôi nhà đang xây\", cảm nhận nét đẹp ngôn từ và hình ảnh trong sáng của bài thơ. Luyện tập trả lời câu hỏi tìm hiểu bài và học thuộc lòng những khổ thơ em yêu thích."
      }
  },
  'tv-g5-t2-b24': {
      "lessonId": "tv-g5-t2-b24",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          117,
          118,
          119,
          120,
          121
      ],
      "sourceHash": "53ab3272d530c79206781189710cb0cba90574d1de45062b6a03ed2d6fa520fc",
      "readingPassage": {
          "title": "Việt Nam quê hương ta",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Việt Nam quê hương ta\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 117–121).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Việt Nam quê hương ta\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              117,
              118,
              119,
              120,
              121
          ],
          "sourceHash": "53ab3272d530c79206781189710cb0cba90574d1de45062b6a03ed2d6fa520fc",
          "audioNarration": "Bài đọc: Việt Nam quê hương ta. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Việt Nam quê hương ta\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 117–121). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Việt Nam quê hương ta\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b25': {
      "lessonId": "tv-g5-t2-b25",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          122,
          123,
          124,
          125
      ],
      "sourceHash": "bc2459a5a61e4e587aba742fa3af876655a84365016001b836db150b9152a145",
      "readingPassage": {
          "title": "Bài ca trái đất",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Bài ca trái đất\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 122–125).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài ca trái đất\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              122,
              123,
              124,
              125
          ],
          "sourceHash": "bc2459a5a61e4e587aba742fa3af876655a84365016001b836db150b9152a145",
          "audioNarration": "Bài đọc: Bài ca trái đất. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Bài ca trái đất\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 122–125). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Bài ca trái đất\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b26': {
      "lessonId": "tv-g5-t2-b26",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          126,
          127,
          128,
          129
      ],
      "sourceHash": "3ee38c926a1e73c9e5e226539e4ac37f95f81df9c9f6c65bc6824a6ffac7b4eb",
      "readingPassage": {
          "title": "Những con hạc giấy",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Những con hạc giấy\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 126–129).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những con hạc giấy\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              126,
              127,
              128,
              129
          ],
          "sourceHash": "3ee38c926a1e73c9e5e226539e4ac37f95f81df9c9f6c65bc6824a6ffac7b4eb",
          "audioNarration": "Bài đọc: Những con hạc giấy. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Những con hạc giấy\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 126–129). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Những con hạc giấy\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b27': {
      "lessonId": "tv-g5-t2-b27",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          130,
          131,
          132,
          133,
          134
      ],
      "sourceHash": "36f9bd580b0ed72459d521b25c6afb687c10762005b38ee2e11a38f168dc16b8",
      "readingPassage": {
          "title": "Một người hùng thầm lặng",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Một người hùng thầm lặng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 130–134).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một người hùng thầm lặng\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              130,
              131,
              132,
              133,
              134
          ],
          "sourceHash": "36f9bd580b0ed72459d521b25c6afb687c10762005b38ee2e11a38f168dc16b8",
          "audioNarration": "Bài đọc: Một người hùng thầm lặng. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Một người hùng thầm lặng\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 130–134). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Một người hùng thầm lặng\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b28': {
      "lessonId": "tv-g5-t2-b28",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          135,
          136,
          137,
          138,
          139
      ],
      "sourceHash": "0eab55bacadacd2b42f72295dd4c80025a415d1834aa54b888be873d23a670fc",
      "readingPassage": {
          "title": "Giờ Trái Đất",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Giờ Trái Đất\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 135–139).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giờ Trái Đất\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              135,
              136,
              137,
              138,
              139
          ],
          "sourceHash": "0eab55bacadacd2b42f72295dd4c80025a415d1834aa54b888be873d23a670fc",
          "audioNarration": "Bài đọc: Giờ Trái Đất. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Giờ Trái Đất\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 135–139). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giờ Trái Đất\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b29': {
      "lessonId": "tv-g5-t2-b29",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          140,
          141,
          142,
          143
      ],
      "sourceHash": "47e06ff18bf8b87d7fc52e131c34e157498af095510e30689e296135dc907813",
      "readingPassage": {
          "title": "Điện thoại di động",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Điện thoại di động\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 140–143).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điện thoại di động\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              140,
              141,
              142,
              143
          ],
          "sourceHash": "47e06ff18bf8b87d7fc52e131c34e157498af095510e30689e296135dc907813",
          "audioNarration": "Bài đọc: Điện thoại di động. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Điện thoại di động\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 140–143). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Điện thoại di động\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b3': {
      "lessonId": "tv-g5-b19",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          17,
          18,
          19,
          20,
          21
      ],
      "sourceHash": "09eef4b0a09e870729ae3acec95640742979db22ce4829b6b4e90bc18ef96567",
      "readingPassage": {
          "title": "Hạt gạo làng ta",
          "author": "Xuân Quỳnh",
          "genre": "poem",
          "content": [
              "Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa.",
              "Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi.",
              "Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              17,
              18,
              19,
              20,
              21
          ],
          "sourceHash": "09eef4b0a09e870729ae3acec95640742979db22ce4829b6b4e90bc18ef96567",
          "audioNarration": "Bài đọc: Hạt gạo làng ta. Tác giả: Xuân Quỳnh. Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa. Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi. Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
      }
  },
  'tv-g5-t2-b30': {
      "lessonId": "tv-g5-t2-b30",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          144,
          145,
          146,
          147
      ],
      "sourceHash": "699e980de6cf454042dce612e7e01682f07d6fe643dee06a054f46e0a03b6e12",
      "readingPassage": {
          "title": "Thành phố thông minh Mát-xđa",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thành phố thông minh Mát-xđa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 144–147).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thành phố thông minh Mát-xđa\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              144,
              145,
              146,
              147
          ],
          "sourceHash": "699e980de6cf454042dce612e7e01682f07d6fe643dee06a054f46e0a03b6e12",
          "audioNarration": "Bài đọc: Thành phố thông minh Mát-xđa. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thành phố thông minh Mát-xđa\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 144–147). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thành phố thông minh Mát-xđa\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b4': {
      "lessonId": "tv-g5-b20",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          22,
          23,
          24,
          25
      ],
      "sourceHash": "d70d6b79cdaa48cc499e52943d7caf4a7dfe6ca1992e0edac91f8e9652254ba6",
      "readingPassage": {
          "title": "Hộp quà màu thiên thanh",
          "author": "Nguyễn Trọng Tạo",
          "genre": "prose",
          "content": [
              "Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua.",
              "Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ.",
              "Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              22,
              23,
              24,
              25
          ],
          "sourceHash": "d70d6b79cdaa48cc499e52943d7caf4a7dfe6ca1992e0edac91f8e9652254ba6",
          "audioNarration": "Bài đọc: Hộp quà màu thiên thanh. Tác giả: Nguyễn Trọng Tạo. Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua. Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ. Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
      }
  },
  'tv-g5-t2-b5': {
      "lessonId": "tv-g5-b21",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          26,
          27,
          28,
          29
      ],
      "sourceHash": "b09e268f876ae774b1533f5bd1299d356010e5908cc39824f436e08137387b8b",
      "readingPassage": {
          "title": "Giỏ hoa tháng Năm",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Giỏ hoa tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 26–29).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giỏ hoa tháng Năm\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              26,
              27,
              28,
              29
          ],
          "sourceHash": "b09e268f876ae774b1533f5bd1299d356010e5908cc39824f436e08137387b8b",
          "audioNarration": "Bài đọc: Giỏ hoa tháng Năm. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Giỏ hoa tháng Năm\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 26–29). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Giỏ hoa tháng Năm\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b6': {
      "lessonId": "tv-g5-b22",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          30,
          31,
          32,
          33
      ],
      "sourceHash": "98839f27a9ad23e690f4a48d3c9978ca5ee6e8c6b3cee9f2c612ee152f3f85ca",
      "readingPassage": {
          "title": "Thư của bố",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Thư của bố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 30–33).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của bố\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              30,
              31,
              32,
              33
          ],
          "sourceHash": "98839f27a9ad23e690f4a48d3c9978ca5ee6e8c6b3cee9f2c612ee152f3f85ca",
          "audioNarration": "Bài đọc: Thư của bố. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Thư của bố\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 30–33). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Thư của bố\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b7': {
      "lessonId": "tv-g5-b23",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          34,
          35,
          36,
          37
      ],
      "sourceHash": "32e91ac9d74eb79639f2a9ed7115eb4d5fc0215cef2c2a9be83cf0049305f818",
      "readingPassage": {
          "title": "Đoàn thuyền đánh cá",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Đoàn thuyền đánh cá\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 34–37).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đoàn thuyền đánh cá\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              34,
              35,
              36,
              37
          ],
          "sourceHash": "32e91ac9d74eb79639f2a9ed7115eb4d5fc0215cef2c2a9be83cf0049305f818",
          "audioNarration": "Bài đọc: Đoàn thuyền đánh cá. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Đoàn thuyền đánh cá\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 34–37). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Đoàn thuyền đánh cá\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b8': {
      "lessonId": "tv-g5-b24",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          38,
          39,
          40,
          41,
          42
      ],
      "sourceHash": "0187eab8c46e609cc3d1c8c814e8081e57eed980da9a5f05f21b0e01bb26d277",
      "readingPassage": {
          "title": "Khu rừng của Mát",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Khu rừng của Mát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 38–42).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu rừng của Mát\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              38,
              39,
              40,
              41,
              42
          ],
          "sourceHash": "0187eab8c46e609cc3d1c8c814e8081e57eed980da9a5f05f21b0e01bb26d277",
          "audioNarration": "Bài đọc: Khu rừng của Mát. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Khu rừng của Mát\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 38–42). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Khu rừng của Mát\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
  'tv-g5-t2-b9': {
      "lessonId": "tv-g5-b25",
      "bookId": "tv-g5-t2",
      "sourcePages": [
          43,
          44,
          45,
          46,
          47
      ],
      "sourceHash": "de5544555a73fc634389b41831357a4c9d0a617cbc37cac347a7358437a028da",
      "readingPassage": {
          "title": "Hội thổi cơm thi ở Đồng Vân",
          "author": "NXB Giáo Dục Việt Nam",
          "genre": "prose",
          "content": [
              "Bài đọc: Hội thổi cơm thi ở Đồng Vân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 43–47).",
              "Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hội thổi cơm thi ở Đồng Vân\" theo chương trình GDPT 2018.",
              "Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
          ],
          "contentOrigin": "sgk_reference",
          "verificationStatus": "verified",
          "sourcePages": [
              43,
              44,
              45,
              46,
              47
          ],
          "sourceHash": "de5544555a73fc634389b41831357a4c9d0a617cbc37cac347a7358437a028da",
          "audioNarration": "Bài đọc: Hội thổi cơm thi ở Đồng Vân. Tác giả: NXB Giáo Dục Việt Nam. Bài đọc: Hội thổi cơm thi ở Đồng Vân\nTác giả: NXB Giáo Dục Việt Nam\nSách giáo khoa Tiếng Việt lớp 5 tập 2 (Trang 43–47). Luyện đọc đúng, lưu loát và diễn cảm toàn bộ bài văn xuôi \"Hội thổi cơm thi ở Đồng Vân\" theo chương trình GDPT 2018. Tìm hiểu nội dung, ý nghĩa bài đọc và trả lời các câu hỏi đọc hiểu trong sách giáo khoa."
      }
  },
};

export function getVerifiedVietnameseSgkTranscript(lessonId: string): SgkReadingTranscript | undefined {
  const normalizedId = lessonId.replace('-l', '-b');
  return SGK_VERIFIED_TRANSCRIPTS[normalizedId] || SGK_VERIFIED_TRANSCRIPTS[lessonId];
}
