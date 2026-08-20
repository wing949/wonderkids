import React, { useState } from 'react';
import { Volume2, Sparkles, Server, Check, AlertCircle, Play, Square, Settings, Cloud, Laptop } from 'lucide-react';
import { TTSSettings } from '../../types';
import { getTTSSettings, saveTTSSettings, soundManager } from '../../utils/audio';
import { CuteButton } from '../ui/CuteButton';

const VIENEU_PRESET_VOICES = [
  { id: 'Vinh', name: '👨 Thầy Vinh (Nam miền Bắc — Trầm ấm, dõng dạc ⭐ Chuẩn)' },
  { id: 'Tuyen', name: '👩 Cô Tuyên (Nữ miền Bắc — Dịu dàng, chuẩn sư phạm)' },
  { id: 'Ly', name: '👩 Cô Ly (Nữ miền Nam — Ngọt ngào, truyền cảm)' },
  { id: 'Ngoc', name: '👩 Cô Ngọc (Nữ giọng kể chuyện SGK)' },
  { id: 'Binh', name: '👨 Thầy Bình (Nam miền Bắc ấm áp)' },
  { id: 'Doan', name: '👨 Thầy Đoan (Nam diễn cảm)' },
  { id: 'ngoc_huyen', name: '🌸 Cô Ngọc Huyền (Giọng đọc thơ & truyện cổ tích)' },
  { id: 'custom', name: '✍️ Nhập Voice ID nhân bản khác...' }
];

export const TTSSettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState<TTSSettings>(getTTSSettings);
  const [isCustomVoice, setIsCustomVoice] = useState(() => {
    return !VIENEU_PRESET_VOICES.some((v) => v.id === getTTSSettings().vieneuVoiceId);
  });
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

  // Preset quick connectors
  const applyHuggingFacePreset = () => {
    soundManager.playPop();
    setSettings({
      ...settings,
      provider: 'vieneu',
      vieneuEndpoint: 'https://api-inference.huggingface.co/models/pnnbao-ump/VieNeu-TTS',
      vieneuVoiceId: settings.vieneuVoiceId || 'Vinh',
      vieneuApiKey: settings.vieneuApiKey || ''
    });
  };

  const applyLocalhostPreset = () => {
    soundManager.playPop();
    setSettings({
      ...settings,
      provider: 'vieneu',
      vieneuEndpoint: 'http://localhost:8000/api/tts',
      vieneuVoiceId: settings.vieneuVoiceId || 'Vinh',
      vieneuApiKey: ''
    });
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
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Volume2 size={24} />
            </div>
            <div>
              <h2 className="font-baloo text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                Cài Đặt & Quản Trị Giọng Đọc AI (TTS)
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-extrabold text-emerald-800 border border-emerald-200">
                  ✨ Sẵn Dùng 100%
                </span>
              </h2>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                Tự động phát âm thanh chuẩn sư phạm cho toàn bộ bài đọc SGK, câu hỏi và lời khen của Mascot.
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
          1. Lựa Chọn Nền Tảng Giọng Đọc:
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option 1: Microsoft Edge Neural Voice */}
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
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-xl shadow-sm">
                  🌸
                </span>
                <div>
                  <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
                    Giọng Đọc Tự Động (Chuẩn Sư Phạm)
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-extrabold text-emerald-800">
                      ⭐ Khuyên Dùng
                    </span>
                  </h3>
                  <p className="font-vietnam text-xs font-semibold text-slate-500">
                    Giọng cô Hoài My / thầy Nam Minh chuẩn phòng thu (Không cần cài server)
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
                ✓ Sẵn Dùng 100% (Không cần cài đặt)
              </span>
              <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-bold text-teal-800">
                ⚡ Tự nhiên & Truyền cảm
              </span>
            </div>

            <p className="mt-3 font-vietnam text-xs text-slate-600 leading-relaxed font-medium">
              Hoạt động tự động trên mọi thiết bị (iPhone, iPad, Android, Máy tính). Bạn chỉ cần chọn giọng đọc bên dưới là dùng ngay.
            </p>
          </div>

          {/* Option 2: VieNeu-TTS (Self-Hosted / Hugging Face) */}
          <div
            onClick={() => {
              soundManager.playPop();
              setSettings({ ...settings, provider: 'vieneu' });
            }}
            className={`relative rounded-3xl border-3 p-5 transition-all cursor-pointer ${
              settings.provider === 'vieneu'
                ? 'border-purple-600 bg-purple-50/70 shadow-md ring-2 ring-purple-400/30'
                : 'border-slate-200 bg-white hover:border-slate-300 opacity-90'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold text-xl shadow-sm">
                  ⚡
                </span>
                <div>
                  <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
                    Mô Hình Deep Learning VieNeu-TTS
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[11px] font-bold text-purple-800">
                      AI Chuyên Sâu
                    </span>
                  </h3>
                  <p className="font-vietnam text-xs font-semibold text-slate-500">
                    Hỗ trợ chọn giọng Thầy Vinh, Cô Tuyên, Cô Ly, Cô Ngọc Huyền
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
                🎙️ 6+ Giọng Đọc Mẫu Có Sẵn
              </span>
              <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-bold text-indigo-800">
                Hugging Face Connected
              </span>
            </div>

            <p className="mt-3 font-vietnam text-xs text-slate-600 leading-relaxed font-medium">
              Chạy trực tiếp qua Hugging Face Cloud Inference API hoặc máy chủ Python riêng của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Configuration Box */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <h3 className="font-baloo text-lg font-extrabold text-slate-800 flex items-center gap-2">
          <Server size={18} className={settings.provider === 'vieneu' ? 'text-purple-600' : 'text-emerald-600'} />
          2. Cấu Hình Danh Sách Giọng Đọc & Tốc Độ
        </h3>

        {/* DEFAULT (Edge Neural) */}
        {settings.provider === 'edge' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
            <div>
              <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-1.5">
                🌸 Chọn Giọng Tiếng Việt:
              </label>
              <select
                value={settings.edgeVoiceVi}
                onChange={(e) => setSettings({ ...settings, edgeVoiceVi: e.target.value })}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-xs focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
              >
                <option value="vi-VN-HoaiMyNeural">Cô Hoài My (vi-VN-HoaiMyNeural) — Dịu dàng, truyền cảm ⭐ (Khuyên dùng)</option>
                <option value="vi-VN-NamMinhNeural">Thầy Nam Minh (vi-VN-NamMinhNeural) — Ấm áp, dõng dạc</option>
              </select>
            </div>

            <div>
              <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-1.5">
                🇬🇧 Chọn Giọng Tiếng Anh:
              </label>
              <select
                value={settings.edgeVoiceEn}
                onChange={(e) => setSettings({ ...settings, edgeVoiceEn: e.target.value })}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-xs focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200 cursor-pointer"
              >
                <option value="en-US-JennyNeural">Cô Jenny (en-US-JennyNeural) — Chuẩn Mỹ bản xứ ⭐ (Khuyên dùng)</option>
                <option value="en-US-GuyNeural">Thầy Guy (en-US-GuyNeural) — Trầm ấm, rõ ràng</option>
              </select>
            </div>
          </div>
        )}

        {/* VIENEU-TTS SETTINGS (WITH DROPDOWN FOR VOICES) */}
        {settings.provider === 'vieneu' && (
          <div className="space-y-5 rounded-2xl bg-purple-50/50 border border-purple-100 p-5">
            {/* Quick Presets Buttons (1-Click Fill) */}
            <div>
              <label className="font-baloo text-xs font-bold text-purple-900 block mb-2">
                ⚡ Chọn Nhanh Nguồn Kết Nối Máy Chủ:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={applyHuggingFacePreset}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 text-white font-baloo font-bold text-xs shadow-xs hover:bg-purple-700 transition-all cursor-pointer"
                >
                  <Cloud size={14} /> 1. Dùng Hugging Face Cloud (Online 24/7 ⭐)
                </button>
                <button
                  type="button"
                  onClick={applyLocalhostPreset}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-purple-900 font-baloo font-bold text-xs shadow-2xs hover:bg-purple-100 transition-all cursor-pointer"
                >
                  <Laptop size={14} /> 2. Dùng Máy Cá Nhân (Localhost:8000)
                </button>
              </div>
            </div>

            {/* Voice Dropdown Selector */}
            <div>
              <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-1.5">
                🎙️ Chọn Giọng Đọc VieNeu-TTS:
              </label>
              <select
                value={isCustomVoice ? 'custom' : settings.vieneuVoiceId || 'Vinh'}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    setIsCustomVoice(true);
                  } else {
                    setIsCustomVoice(false);
                    setSettings({ ...settings, vieneuVoiceId: e.target.value });
                  }
                }}
                className="w-full rounded-2xl border border-purple-300 bg-white px-4 py-3 font-baloo font-bold text-sm text-slate-800 shadow-xs focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer"
              >
                {VIENEU_PRESET_VOICES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>

              {isCustomVoice && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={settings.vieneuVoiceId}
                    onChange={(e) => setSettings({ ...settings, vieneuVoiceId: e.target.value })}
                    placeholder="Nhập tên Voice ID nhân bản (ví dụ: chu_bo_bo, co_huyen)..."
                    className="w-full rounded-2xl border border-purple-300 bg-white px-4 py-2.5 font-vietnam text-sm text-slate-800 shadow-xs focus:border-purple-600 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Server Endpoint URL */}
            <div>
              <label className="font-baloo text-xs font-bold text-slate-700 block mb-1">
                🌐 URL Endpoint Server:
              </label>
              <input
                type="text"
                value={settings.vieneuEndpoint}
                onChange={(e) => setSettings({ ...settings, vieneuEndpoint: e.target.value })}
                placeholder="https://api-inference.huggingface.co/models/pnnbao-ump/VieNeu-TTS"
                className="w-full rounded-2xl border border-purple-200 bg-white px-4 py-2.5 font-mono text-xs text-slate-800 shadow-xs focus:border-purple-600 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Speed Controls */}
        <div>
          <label className="font-baloo text-sm font-extrabold text-slate-800 block mb-2">
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
