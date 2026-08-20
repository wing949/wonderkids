import React, { useState } from 'react';
import { ShieldCheck, Plus, Layers, Database, ArrowLeft, Edit3, Trash2, Volume2, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { GradeLevel, SubjectType, QuestionType } from '../../types';
import { SAMPLE_LESSONS, SUBJECTS_CONFIG } from '../../data/curriculumData';
import { CuteButton } from '../ui/CuteButton';
import { soundManager } from '../../utils/audio';
import { TTSSettingsPanel } from '../parent/TTSSettingsPanel';

interface AdminCMSProps {
  onBackToStudent: () => void;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({ onBackToStudent }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(1);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('math');
  const [activeTab, setActiveTab] = useState<'curriculum' | 'question_builder' | 'tts_settings'>('curriculum');

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
    <div className="min-h-[calc(100vh-5rem)] pb-24 pt-6 sm:pt-8 bg-[#fcfaf7] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6">
        {/* Admin Header (Bright & Modern Card) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-4xl bg-white/95 p-6 shadow-washi border border-amber-100/60">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                onBackToStudent();
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/80 transition-all shadow-xs cursor-pointer"
              title="Quay lại giao diện Học sinh"
            >
              <ArrowLeft size={22} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-amber-950 font-black shadow-xs">
                  <ShieldCheck size={20} />
                </span>
                <h1 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  WonderKids Admin CMS — Quản Trị Hệ Thống
                </h1>
              </div>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                Quản lý cây chương trình Lớp 1–5, ngân hàng câu hỏi đa tương tác và cấu hình hệ thống giọng đọc AI.
              </p>
            </div>
          </div>

          <CuteButton
            variant="ghost"
            size="sm"
            onClick={onBackToStudent}
            icon={<ArrowLeft size={16} />}
          >
            Về Góc Bé 🎒
          </CuteButton>
        </div>

        {/* System Stats Bar (Bright Cards with Soft Colored Accents) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-xs hover:border-emerald-200 transition-all">
            <span className="font-baloo text-xs font-bold text-emerald-700 uppercase tracking-wide">
              Tổng Học Sinh
            </span>
            <div className="font-baloo text-2xl font-black text-emerald-950 mt-1">1,420 em</div>
            <span className="font-vietnam text-[11px] text-emerald-600 font-bold">↑ +14% tuần này</span>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-xs hover:border-amber-200 transition-all">
            <span className="font-baloo text-xs font-bold text-amber-700 uppercase tracking-wide">
              Bài Học Đã Làm
            </span>
            <div className="font-baloo text-2xl font-black text-amber-950 mt-1">18,540 lượt</div>
            <span className="font-vietnam text-[11px] text-amber-600 font-semibold">Học mà như chơi ⭐</span>
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-xs hover:border-sky-200 transition-all">
            <span className="font-baloo text-xs font-bold text-sky-700 uppercase tracking-wide">
              Độ Chính Xác TB
            </span>
            <div className="font-baloo text-2xl font-black text-sky-950 mt-1">89.4%</div>
            <span className="font-vietnam text-[11px] text-sky-600 font-bold">Tự tin tiếp thu</span>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-white p-5 shadow-xs hover:border-purple-200 transition-all">
            <span className="font-baloo text-xs font-bold text-purple-700 uppercase tracking-wide">
              Ngân Hàng Câu Hỏi
            </span>
            <div className="font-baloo text-2xl font-black text-purple-950 mt-1">3,200+ câu</div>
            <span className="font-vietnam text-[11px] text-purple-600 font-semibold">Chuẩn GDPT 2018 📖</span>
          </div>
        </div>

        {/* Tab Navigation (Clean Light Buttons) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-3">
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setActiveTab('curriculum');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'curriculum'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
            }`}
          >
            <Layers size={17} /> Cây Bài Học & Chủ Đề
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setActiveTab('question_builder');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'question_builder'
                ? 'bg-amber-500 text-amber-950 font-black shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
            }`}
          >
            <Database size={17} /> Soạn Thảo Câu Hỏi Trực Quan
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setActiveTab('tts_settings');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'tts_settings'
                ? 'bg-purple-600 text-white shadow-md ring-2 ring-purple-300'
                : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200 shadow-2xs'
            }`}
          >
            <Volume2 size={17} /> 🎙️ Quản Trị Giọng Đọc AI
          </button>
        </div>

        {/* Tab 3: TTS Settings (Bright Clean Container) */}
        {activeTab === 'tts_settings' && (
          <div className="rounded-4xl bg-white p-6 sm:p-8 shadow-washi border border-purple-100">
            <TTSSettingsPanel />
          </div>
        )}

        {/* Tab 1: Curriculum Manager */}
        {activeTab === 'curriculum' && (
          <div className="space-y-5">
            {/* Filter Bar (Light Card) */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs">
              {/* Grade Filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-baloo text-xs font-bold text-slate-500 mr-1">Khối Lớp:</span>
                {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedGrade(g);
                    }}
                    className={`px-3.5 py-1.5 rounded-2xl font-baloo font-bold text-xs transition-all cursor-pointer ${
                      selectedGrade === g
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                    }`}
                  >
                    Lớp {g}
                  </button>
                ))}
              </div>

              {/* Subject Filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-baloo text-xs font-bold text-slate-500 mr-1">Môn Học:</span>
                {(['math', 'vietnamese', 'english'] as SubjectType[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedSubject(s);
                    }}
                    className={`px-3.5 py-1.5 rounded-2xl font-baloo font-bold text-xs transition-all cursor-pointer ${
                      selectedSubject === s
                        ? 'bg-amber-400 text-amber-950 font-black shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                    }`}
                  >
                    {SUBJECTS_CONFIG[s].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lessons Table / List (Clean Light Card) */}
            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xs overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h4 className="font-baloo font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <BookOpen size={18} className="text-emerald-600" />
                  Danh Sách Bài Học ({filteredLessons.length} bài)
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setActiveTab('question_builder');
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-emerald-600 text-white font-baloo font-bold text-xs shadow-xs hover:bg-emerald-700 transition-all cursor-pointer"
                >
                  <Plus size={15} /> Thêm Bài Mới
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {filteredLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-amber-50/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-baloo font-bold text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200/60">
                          Ải {lesson.order}
                        </span>
                        <h5 className="font-baloo font-extrabold text-base text-slate-800">
                          {lesson.title}
                        </h5>
                      </div>
                      <p className="font-vietnam text-xs text-slate-500 mt-1 font-medium">
                        {lesson.description}
                      </p>
                      <span className="font-baloo font-bold text-xs text-amber-700 mt-1 inline-block">
                        ⭐ {lesson.questions.length} câu hỏi tương tác • +{lesson.xpReward} XP
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer border border-slate-200/60"
                        title="Chỉnh sửa bài học"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-2.5 rounded-2xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors cursor-pointer border border-rose-100"
                        title="Xóa bài học"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Question Builder Form (Bright & Friendly UI) */}
        {activeTab === 'question_builder' && (
          <form
            onSubmit={handleSaveQuestion}
            className="space-y-6 rounded-4xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-washi"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-baloo text-xl sm:text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                <Sparkles size={22} className="text-amber-500" />
                Trình Soạn Thảo Câu Hỏi Đa Tương Tác
              </h3>
              {isSavedNotice && (
                <span className="flex items-center gap-1 text-xs font-baloo font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full">
                  <CheckCircle2 size={15} /> Đã lưu câu hỏi thành công!
                </span>
              )}
            </div>

            {/* Question Type Selection */}
            <div className="space-y-2">
              <label className="font-baloo text-sm font-extrabold text-slate-700 block">
                1. Chọn Dạng Tương Tác Trực Quan:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
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
                    onClick={() => {
                      soundManager.playPop();
                      setNewQType(type.id as QuestionType);
                    }}
                    className={`p-3 rounded-2xl border-2 text-left font-baloo font-bold text-xs transition-all cursor-pointer ${
                      newQType === type.id
                        ? 'border-amber-400 bg-amber-50 text-amber-950 font-black shadow-xs ring-2 ring-amber-300/30'
                        : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:bg-slate-100'
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
                <label className="font-baloo text-sm font-bold text-slate-700 mb-1.5 block">
                  2. Nội Dung Đề Bài (Hiển thị to rõ):
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Tính nhẩm 7 + 8 = ?"
                  value={newQText}
                  onChange={(e) => setNewQText(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50/50 px-4 py-3 font-vietnam text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all shadow-xs"
                />
              </div>

              <div>
                <label className="font-baloo text-sm font-bold text-slate-700 mb-1.5 block">
                  3. Văn Bản Giọng Đọc 🔊 (TTS cho bé lớp 1-2):
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Bảy cộng tám bằng bao nhiêu?"
                  value={newQAudio}
                  onChange={(e) => setNewQAudio(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50/50 px-4 py-3 font-vietnam text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              <label className="font-baloo text-sm font-bold text-slate-700 block">
                4. Các Lựa Chọn Đáp Án:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Đáp án A (Ví dụ: 14)"
                  value={newQOpt1}
                  onChange={(e) => setNewQOpt1(e.target.value)}
                  className="rounded-2xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 font-vietnam text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 shadow-xs"
                />
                <input
                  type="text"
                  placeholder="Đáp án B (Ví dụ: 15)"
                  value={newQOpt2}
                  onChange={(e) => setNewQOpt2(e.target.value)}
                  className="rounded-2xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 font-vietnam text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 shadow-xs"
                />
                <input
                  type="text"
                  placeholder="Đáp án C (Ví dụ: 16)"
                  value={newQOpt3}
                  onChange={(e) => setNewQOpt3(e.target.value)}
                  className="rounded-2xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 font-vietnam text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 shadow-xs"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <CuteButton type="submit" variant="amber" size="md" icon={<Sparkles size={18} />}>
                Lưu Câu Hỏi Vào Ngân Hàng ✨
              </CuteButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
