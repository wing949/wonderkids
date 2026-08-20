import React, { useState } from 'react';
import { ShieldCheck, Plus, Layers, Database, ArrowLeft, Check, Edit3, Trash2 } from 'lucide-react';
import { GradeLevel, SubjectType, QuestionType } from '../../types';
import { SAMPLE_LESSONS, SUBJECTS_CONFIG } from '../../data/curriculumData';
import { CuteButton } from '../ui/CuteButton';
import { soundManager } from '../../utils/audio';

interface AdminCMSProps {
  onBackToStudent: () => void;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({ onBackToStudent }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(1);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('math');
  const [activeTab, setActiveTab] = useState<'curriculum' | 'question_builder' | 'analytics'>('curriculum');

  // Question builder form state
  const [newQType, setNewQType] = useState<QuestionType>('bubble_choice');
  const [newQText, setNewQText] = useState('');
  const [newQAudio, setNewQAudio] = useState('');
  const [newQOpt1, setNewQOpt1] = useState('');
  const [newQOpt2, setNewQOpt2] = useState('');
  const [newQOpt3, setNewQOpt3] = useState('');
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  const filteredLessons = SAMPLE_LESSONS.filter(
    (l) => l.grade === selectedGrade && l.subject === selectedSubject
  );

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQText.trim()) return;
    soundManager.playCorrect();
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
    setNewQText('');
    setNewQAudio('');
    setNewQOpt1('');
    setNewQOpt2('');
    setNewQOpt3('');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-24 pt-6 sm:pt-8 bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playPop();
                onBackToStudent();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              title="Quay lại giao diện Học sinh"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold">
                  <ShieldCheck size={18} />
                </span>
                <h1 className="font-baloo text-2xl sm:text-3xl font-extrabold text-white">
                  WonderKids Admin CMS — Quản Trị Hệ Thống
                </h1>
              </div>
              <p className="font-vietnam text-xs sm:text-sm text-slate-400">
                Quản lý cây chương trình Lớp 1–5, ngân hàng câu hỏi đa dạng và theo dõi học tập toàn diện.
              </p>
            </div>
          </div>

          <button
            onClick={onBackToStudent}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-baloo font-bold text-slate-200 transition-colors"
          >
            ← Về Góc Bé
          </button>
        </div>

        {/* System Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-800/80 p-4">
            <span className="font-baloo text-xs text-slate-400 uppercase">Tổng Học Sinh</span>
            <div className="font-baloo text-2xl font-extrabold text-emerald-400 mt-1">1,420 em</div>
            <span className="font-vietnam text-[11px] text-emerald-500 font-semibold">↑ +14% tuần này</span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-800/80 p-4">
            <span className="font-baloo text-xs text-slate-400 uppercase">Bài Học Đã Làm</span>
            <div className="font-baloo text-2xl font-extrabold text-amber-400 mt-1">18,540 lượt</div>
            <span className="font-vietnam text-[11px] text-slate-400 font-semibold">Học mà như chơi</span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-800/80 p-4">
            <span className="font-baloo text-xs text-slate-400 uppercase">Độ Chính Xác TB</span>
            <div className="font-baloo text-2xl font-extrabold text-sky-400 mt-1">89.4%</div>
            <span className="font-vietnam text-[11px] text-sky-500 font-semibold">Tự tin tiếp thu</span>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-800/80 p-4">
            <span className="font-baloo text-xs text-slate-400 uppercase">Ngân Hàng Câu Hỏi</span>
            <div className="font-baloo text-2xl font-extrabold text-purple-400 mt-1">3,200+ câu</div>
            <span className="font-vietnam text-[11px] text-slate-400 font-semibold">Chuẩn GDPT 2018</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-baloo font-bold text-sm transition-all ${
              activeTab === 'curriculum'
                ? 'bg-emerald-500 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers size={16} /> Cây Bài Học & Chủ Đề
          </button>

          <button
            onClick={() => setActiveTab('question_builder')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-baloo font-bold text-sm transition-all ${
              activeTab === 'question_builder'
                ? 'bg-amber-500 text-slate-950 font-extrabold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Database size={16} /> Soạn Thảo Câu Hỏi Trực Quan
          </button>
        </div>

        {/* Tab 1: Curriculum Manager */}
        {activeTab === 'curriculum' && (
          <div className="space-y-5">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-800 bg-slate-800/50 p-4">
              {/* Grade Filter */}
              <div className="flex items-center gap-1">
                <span className="font-baloo text-xs font-bold text-slate-400 mr-1">Khối Lớp:</span>
                {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedGrade(g);
                    }}
                    className={`px-3 py-1 rounded-full font-baloo font-bold text-xs ${
                      selectedGrade === g ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    Lớp {g}
                  </button>
                ))}
              </div>

              {/* Subject Filter */}
              <div className="flex items-center gap-1">
                <span className="font-baloo text-xs font-bold text-slate-400 mr-1">Môn Học:</span>
                {(['math', 'vietnamese', 'english'] as SubjectType[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedSubject(s);
                    }}
                    className={`px-3 py-1 rounded-full font-baloo font-bold text-xs ${
                      selectedSubject === s ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {SUBJECTS_CONFIG[s].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lessons Table / List */}
            <div className="rounded-3xl border border-slate-800 bg-slate-800/60 overflow-hidden">
              <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                <h4 className="font-baloo font-bold text-base text-white">
                  Danh Sách Bài Học ({filteredLessons.length} bài)
                </h4>
                <button
                  onClick={() => setActiveTab('question_builder')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-baloo font-bold text-xs"
                >
                  <Plus size={14} /> Thêm Bài Mới
                </button>
              </div>

              <div className="divide-y divide-slate-700">
                {filteredLessons.map((lesson) => (
                  <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-slate-800/80 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-baloo font-bold text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                          Ải {lesson.order}
                        </span>
                        <h5 className="font-baloo font-bold text-base text-white">{lesson.title}</h5>
                      </div>
                      <p className="font-vietnam text-xs text-slate-400 mt-1">{lesson.description}</p>
                      <span className="font-baloo text-xs text-amber-400 mt-1 inline-block">
                        {lesson.questions.length} câu hỏi tương tác • {lesson.xpReward} XP
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 rounded-xl bg-rose-950/60 text-rose-400 hover:bg-rose-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Question Builder Form */}
        {activeTab === 'question_builder' && (
          <form onSubmit={handleSaveQuestion} className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/60 p-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <h3 className="font-baloo text-xl font-bold text-white">
                Trình Soạn Thảo Câu Hỏi Đa Tương Tác
              </h3>
              {isSavedNotice && (
                <span className="flex items-center gap-1 text-xs font-baloo font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full">
                  <Check size={14} /> Đã lưu câu hỏi thành công!
                </span>
              )}
            </div>

            {/* Question Type Selection */}
            <div className="space-y-2">
              <label className="font-baloo text-xs font-bold text-slate-400">Chọn Dạng Tương Tác:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'bubble_choice', label: '🔘 Trắc nghiệm bong bóng' },
                  { id: 'keypad', label: '🔢 Bàn phím số Toán học' },
                  { id: 'drag_drop', label: '🔗 Kéo thả ghép cặp' },
                  { id: 'audio_listen', label: '🔊 Nghe & chọn tranh' },
                  { id: 'story_sequence', label: '📖 Sắp xếp thứ tự truyện' },
                  { id: 'fill_blank', label: '✏️ Điền âm vần / từ khuyết' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setNewQType(type.id as QuestionType)}
                    className={`p-2.5 rounded-2xl border text-left font-baloo font-bold text-xs transition-all ${
                      newQType === type.id
                        ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Title & Audio Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-baloo text-xs font-bold text-slate-400 mb-1 block">
                  Nội Dung Đề Bài (Hiển thị to rõ):
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Tính nhẩm 7 + 8 = ?"
                  value={newQText}
                  onChange={(e) => setNewQText(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2.5 font-vietnam text-sm text-white outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="font-baloo text-xs font-bold text-slate-400 mb-1 block">
                  Văn Bản Giọng Đọc 🔊 (Text-To-Speech cho bé lớp 1-2):
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Bảy cộng tám bằng bao nhiêu?"
                  value={newQAudio}
                  onChange={(e) => setNewQAudio(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2.5 font-vietnam text-sm text-white outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              <label className="font-baloo text-xs font-bold text-slate-400">Các Lựa Chọn Đáp Án:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Đáp án A (Ví dụ: 14)"
                  value={newQOpt1}
                  onChange={(e) => setNewQOpt1(e.target.value)}
                  className="rounded-2xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-vietnam text-sm text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Đáp án B (Ví dụ: 15)"
                  value={newQOpt2}
                  onChange={(e) => setNewQOpt2(e.target.value)}
                  className="rounded-2xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-vietnam text-sm text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Đáp án C (Ví dụ: 16)"
                  value={newQOpt3}
                  onChange={(e) => setNewQOpt3(e.target.value)}
                  className="rounded-2xl border border-slate-700 bg-slate-900 px-3.5 py-2 font-vietnam text-sm text-white outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3 border-t border-slate-700 flex justify-end">
              <CuteButton type="submit" variant="amber" size="md">
                Lưu Câu Hỏi Vào Ngân Hàng ✨
              </CuteButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
