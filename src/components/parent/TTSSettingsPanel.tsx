import React, { useState } from 'react';
import { Volume2, Sparkles, Server, Check, AlertCircle, Play, Square, Settings, ExternalLink } from 'lucide-react';
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

    // Save temporary settings so soundManager uses current test values
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
      <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-md">
              <Volume2 size={24} />
            </div>
            <div>
              <h2 className="font-baloo text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                Quản Trị Giọng Đọc AI & Chuyển Văn Bản (TTS)
                <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-extrabold text-purple-700">
                  AI Neural Studio
                </span>
              </h2>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                Cấu hình mô hình chuyển văn bản thành giọng nói tiếng Việt cho các bài đọc SGK, câu hỏi và phản hồi của Mascot.
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

      {/* Provider Selector Cards */}
      <div className="space-y-3">
        <label className="font-baloo text-base font-extrabold text-slate-800 block">
          1. Lựa Chọn Công Nghệ / Nền Tảng Giọng Đọc (TTS Engine)
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option A: VieNeu-TTS */}
          <div
            onClick={() => {
              soundManager.playPop();
              setSettings({ ...settings, provider: 'vieneu' });
            }}
            className={`relative rounded-3xl border-3 p-5 transition-all cursor-pointer ${
              settings.provider === 'vieneu'
                ? 'border-purple-600 bg-purple-50/70 shadow-md ring-2 ring-purple-400/30'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold text-lg shadow-sm">
                  ⚡
                </span>
                <div>
                  <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-1.5">
                    VieNeu-TTS (Self-hosted AI)
                  </h3>
                  <p className="font-vietnam text-xs font-semibold text-slate-500">
                    Mô hình Deep Learning mã nguồn mở chuyên sâu tiếng Việt
                  </p>
                </div>
              </div>
              <input
                type="radio"
                name="ttsProvider"
                checked={settings.provider === 'vieneu'}
                onChange={() => setSettings({ ...settings, provider: 'vieneu' })}
                className="h-5 w-5 accent-purple-600 cursor-pointer mt-1"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 px-2.5 py-1 text-[11px] font-bold text-purple-800">
                ⭐ Voice Cloning 3-5s
              </span>
              <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold text-indigo-800">
                10,000h Train Data
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                Zero-shot AI
              </span>
            </div>

            <p className="mt-3 font-vietnam text-xs text-slate-600 leading-relaxed">
              Kết nối trực tiếp tới máy chủ hoặc Web UI do bạn tự host từ kho GitHub{' '}
              <a
                href="https://github.com/pnnbao97/VieNeu-TTS"
                target="_blank"
                rel="noreferrer"
                className="text-purple-600 font-bold hover:underline inline-flex items-center gap-0.5"
                onClick={(e) => e.stopPropagation()}
              >
                pnnbao97/VieNeu-TTS <ExternalLink size={12} />
              </a>
              .
            </p>
          </div>

          {/* Option B: Microsoft Edge Neural Voice Studio */}
          <div
            onClick={() => {
              soundManager.playPop();
              setSettings({ ...settings, provider: 'edge' });
            }}
            className={`relative rounded-3xl border-3 p-5 transition-all cursor-pointer ${
              settings.provider === 'edge'
                ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-400/30'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-lg shadow-sm">
                  🌸
                </span>
                <div>
                  <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-1.5">
                    Microsoft Edge Neural Voice
                  </h3>
                  <p className="font-vietnam text-xs font-semibold text-slate-500">
                    Giọng cô Hoài My / thầy Nam Minh chuẩn phòng thu
                  </p>
                </div>
              </div>
              <input
                type="radio"
                name="ttsProvider"
                checked={settings.provider === 'edge'}
                onChange={() => setSettings({ ...settings, provider: 'edge' })}
                className="h-5 w-5 accent-emerald-600 cursor-pointer mt-1"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                ✨ Tự nhiên & Truyền cảm 100%
              </span>
              <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-bold text-teal-800">
                ⚡ Realtime Serverless
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-800">
                Miễn phí sẵn dùng
              </span>
            </div>

            <p className="mt-3 font-vietnam text-xs text-slate-600 leading-relaxed">
              Mô hình giọng đọc tiêu chuẩn sư phạm tiểu học với đầy đủ ngữ điệu ấm áp, ngắt nghỉ câu, không cần cài đặt thêm server.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Configuration Box */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
          <Server size={18} className="text-purple-600" />
          2. Chi Tiết Thông Số Cấu Hình
        </h3>

        {/* Dynamic Fields for VieNeu-TTS */}
        {settings.provider === 'vieneu' && (
          <div className="space-y-4 rounded-2xl bg-purple-50/50 border border-purple-100 p-5">
            <div>
              <label className="font-baloo text-sm font-bold text-slate-700 block mb-1">
                🌐 URL Endpoint Server VieNeu-TTS:
              </label>
              <input
                type="text"
                value={settings.vieneuEndpoint}
                onChange={(e) => setSettings({ ...settings, vieneuEndpoint: e.target.value })}
                placeholder="http://localhost:8000/api/tts hoặc https://your-server.com/tts"
                className="w-full rounded-2xl border border-purple-300 bg-white px-4 py-3 font-mono text-sm text-slate-800 shadow-sm focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <p className="font-vietnam text-xs text-slate-500 mt-1">
                💡 Chạy cục bộ: Khi bạn chạy <code className="bg-purple-100 px-1.5 py-0.5 rounded text-purple-800 font-bold">uv run vieneu-web</code> hoặc FastAPI backend trên cổng 8000.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-baloo text-sm font-bold text-slate-700 block mb-1">
                  🎙️ Voice ID / Giọng Mẫu Nhân Bản:
                </label>
                <input
                  type="text"
                  value={settings.vieneuVoiceId}
                  onChange={(e) => setSettings({ ...settings, vieneuVoiceId: e.target.value })}
                  placeholder="co_giao_ha_noi, default, chu_bo_bo"
                  className="w-full rounded-2xl border border-purple-300 bg-white px-4 py-2.5 font-vietnam text-sm text-slate-800 shadow-sm focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div>
                <label className="font-baloo text-sm font-bold text-slate-700 block mb-1">
                  🔑 API Token (Nếu có bảo mật):
                </label>
                <input
                  type="password"
                  value={settings.vieneuApiKey || ''}
                  onChange={(e) => setSettings({ ...settings, vieneuApiKey: e.target.value })}
                  placeholder="Bearer token..."
                  className="w-full rounded-2xl border border-purple-300 bg-white px-4 py-2.5 font-vietnam text-sm text-slate-800 shadow-sm focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Fields for Edge Neural */}
        {settings.provider === 'edge' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-baloo text-sm font-bold text-slate-700 block mb-1">
                🌸 Giọng Tiếng Việt Mặc Định:
              </label>
              <select
                value={settings.edgeVoiceVi}
                onChange={(e) => setSettings({ ...settings, edgeVoiceVi: e.target.value })}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
              >
                <option value="vi-VN-HoaiMyNeural">Cô Hoài My (vi-VN-HoaiMyNeural) — Dịu dàng, truyền cảm ⭐</option>
                <option value="vi-VN-NamMinhNeural">Thầy Nam Minh (vi-VN-NamMinhNeural) — Ấm áp, dõng dạc</option>
              </select>
            </div>

            <div>
              <label className="font-baloo text-sm font-bold text-slate-700 block mb-1">
                🇬🇧 Giọng Tiếng Anh Mặc Định:
              </label>
              <select
                value={settings.edgeVoiceEn}
                onChange={(e) => setSettings({ ...settings, edgeVoiceEn: e.target.value })}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
              >
                <option value="en-US-JennyNeural">Cô Jenny (en-US-JennyNeural) — Chuẩn Mỹ bản xứ ⭐</option>
                <option value="en-US-GuyNeural">Thầy Guy (en-US-GuyNeural) — Trầm ấm, rõ ràng</option>
              </select>
            </div>
          </div>
        )}

        {/* Speed Controls */}
        <div>
          <label className="font-baloo text-sm font-bold text-slate-700 block mb-2">
            ⏱️ Tốc Độ Đọc (Speech Rate):
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
                    ? 'border-purple-600 bg-purple-50 font-bold text-purple-900 shadow-sm'
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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-500" />
            3. Khu Vực Nghe Thử Trực Tiếp (Voice Playground)
          </h3>

          {testStatus === 'testing' && (
            <span className="flex items-center gap-1.5 font-vietnam text-xs font-bold text-purple-600 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-purple-600"></span> Đang phát âm thanh AI...
            </span>
          )}
          {testStatus === 'success' && (
            <span className="flex items-center gap-1 font-vietnam text-xs font-bold text-emerald-600">
              <Check size={14} /> Hoàn tất
            </span>
          )}
          {testStatus === 'error' && (
            <span className="flex items-center gap-1 font-vietnam text-xs font-bold text-rose-600">
              <AlertCircle size={14} /> {errorMessage || 'Không kết nối được'}
            </span>
          )}
        </div>

        <div>
          <textarea
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            rows={2}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50/50 p-4 font-vietnam text-sm text-slate-800 shadow-sm focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
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
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
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
