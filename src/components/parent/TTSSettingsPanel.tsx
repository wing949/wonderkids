import React, { useState } from 'react';
import { Volume2, Sparkles, Check, AlertCircle, Play, Square, Settings } from 'lucide-react';
import { TTSSettings } from '../../types';
import { getTTSSettings, saveTTSSettings, soundManager } from '../../utils/audio';
import { CuteButton } from '../ui/CuteButton';

export const TTSSettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState<TTSSettings>(getTTSSettings);
  const [testText, setTestText] = useState(
    'Chào các con! Hôm nay chúng mình cùng đọc bài và khám phá những điều kỳ thú trên Đảo Tri Thức nhé!'
  );
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Save
  const handleSave = () => {
    saveTTSSettings(settings);
    soundManager.playCorrect();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  // Handle Voice Test
  const handleTestVoice = async () => {
    if (isPlayingTest) {
      soundManager.stopSpeaking();
      setIsPlayingTest(false);
      setTestStatus('idle');
      return;
    }

    setIsPlayingTest(true);
    setTestStatus('testing');
    setErrorMessage('');

    saveTTSSettings(settings);

    try {
      soundManager.speakText(testText, 'vi-VN', () => {
        setIsPlayingTest(false);
        setTestStatus('success');
      });
    } catch (err: any) {
      setIsPlayingTest(false);
      setTestStatus('error');
      setErrorMessage(err.message || 'Không thể phát âm thanh');
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Banner */}
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Volume2 size={24} />
            </div>
            <div>
              <h2 className="font-baloo text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                Cài Đặt & Quản Trị Giọng Đọc AI (TTS Studio)
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-extrabold text-emerald-800 border border-emerald-200">
                  ✨ Sẵn Dùng 100%
                </span>
              </h2>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                Giọng đọc Neural Studio chuẩn sư phạm tiểu học, tự động phát âm thanh cho toàn bộ bài đọc SGK và câu hỏi của bé.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CuteButton
              variant="primary"
              onClick={handleSave}
              icon={isSaved ? <Check size={18} /> : <Settings size={18} />}
            >
              {isSaved ? 'Đã Lưu Cấu Hình! ✨' : 'Lưu Thay Đổi 💾'}
            </CuteButton>
          </div>
        </div>
      </div>

      {/* Voice Selection Cards */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
          🌸 1. Chọn Giọng Đọc Thầy Cô Giáo:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
          <div>
            <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-1.5">
              🇻🇳 Giọng Đọc Tiếng Việt:
            </label>
            <select
              value={settings.voiceVi}
              onChange={(e) => {
                soundManager.playPop();
                setSettings({ ...settings, voiceVi: e.target.value });
              }}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-xs focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
            >
              <option value="vi-VN-HoaiMyNeural">
                👩 Cô Hoài My — Dịu dàng, ấm áp, chuẩn sư phạm ⭐ (Khuyên dùng)
              </option>
              <option value="vi-VN-NamMinhNeural">
                👨 Thầy Nam Minh — Trầm ấm, dõng dạc, truyền cảm
              </option>
            </select>
          </div>

          <div>
            <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-1.5">
              🇬🇧 Giọng Đọc Tiếng Anh:
            </label>
            <select
              value={settings.voiceEn}
              onChange={(e) => {
                soundManager.playPop();
                setSettings({ ...settings, voiceEn: e.target.value });
              }}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-xs focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
            >
              <option value="en-US-JennyNeural">
                👩 Cô Jenny (en-US-JennyNeural) — Chuẩn Mỹ bản xứ ⭐ (Khuyên dùng)
              </option>
              <option value="en-US-GuyNeural">
                👨 Thầy Guy (en-US-GuyNeural) — Trầm ấm, rõ ràng
              </option>
            </select>
          </div>
        </div>

        {/* Speed Controls */}
        <div>
          <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-2">
            ⏱️ 2. Tốc Độ Đọc (Speech Rate):
          </label>
          <div className="grid grid-cols-3 gap-3 max-w-md">
            {[
              { rate: 0.85, label: '🐢 Chậm Rãi (0.85x)', desc: 'Dành cho Lớp 1' },
              { rate: 0.95, label: '🐰 Chuẩn Xác (0.95x)', desc: 'Khuyên Dùng ⭐' },
              { rate: 1.05, label: '⚡ Nhanh Nhẹn (1.05x)', desc: 'Dành cho Bé Lớn' }
            ].map((item) => (
              <button
                key={item.rate}
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setSettings({ ...settings, speechRate: item.rate });
                }}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  settings.speechRate === item.rate
                    ? 'border-emerald-600 bg-emerald-50 font-bold text-emerald-900 shadow-xs ring-2 ring-emerald-300/30'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="font-baloo text-xs sm:text-sm font-extrabold">{item.label}</div>
                <div className="font-vietnam text-[10px] text-slate-500 font-semibold mt-0.5">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Voice Testing Playground */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            3. Nghe Thử Trực Tiếp (Voice Playground)
          </h3>

          {testStatus === 'testing' && (
            <span className="flex items-center gap-1.5 font-vietnam text-xs font-bold text-emerald-600 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-emerald-600"></span> Đang phát âm thanh...
            </span>
          )}
          {testStatus === 'success' && (
            <span className="flex items-center gap-1 font-vietnam text-xs font-bold text-emerald-600">
              <Check size={14} /> Phát thành công!
            </span>
          )}
          {testStatus === 'error' && (
            <span className="flex items-center gap-1 font-vietnam text-xs font-bold text-rose-600">
              <AlertCircle size={14} /> {errorMessage || 'Lỗi phát âm thanh'}
            </span>
          )}
        </div>

        <div>
          <textarea
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            rows={2}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50/50 p-4 font-vietnam text-sm text-slate-800 shadow-xs focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="Nhập nội dung bạn muốn nghe thử..."
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <CuteButton
              variant={isPlayingTest ? 'danger' : 'primary'}
              onClick={handleTestVoice}
              icon={isPlayingTest ? <Square size={16} /> : <Play size={16} />}
            >
              {isPlayingTest ? 'Dừng Phát Âm ⏸️' : 'Phát Âm Thử Ngay 🔊'}
            </CuteButton>

            <button
              type="button"
              onClick={() => {
                setTestText(
                  'Bé hãy nghe cô kể câu chuyện Bác gà trống thông minh và trả lời các câu hỏi trắc nghiệm phía dưới nhé!'
                );
              }}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Mẫu câu hỏi SGK 📖
            </button>
          </div>

          <CuteButton
            variant="primary"
            onClick={handleSave}
            icon={isSaved ? <Check size={18} /> : <Settings size={18} />}
          >
            {isSaved ? 'Đã Lưu Cấu Hình! ✨' : 'Lưu Thay Đổi 💾'}
          </CuteButton>
        </div>
      </div>
    </div>
  );
};
