
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Play, 
  Square, 
  Bell, 
  ChevronDown, 
  Globe, 
  LayoutGrid,
  Check
} from 'lucide-react';
import { useTranslation } from '../App';
import { Language } from '../translations';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const languages: { code: Language; label: string; sub: string }[] = [
    { code: 'en', label: 'English', sub: 'US' },
    { code: 'th', label: 'ไทย', sub: 'TH' },
    { code: 'zh', label: '中文', sub: 'ZH' }
  ];

  return (
    <header className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center flex-1 max-w-lg">
        <div className="relative w-full group">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1161ed]" size={14} />
          <input 
            type="text" 
            placeholder={t.common.search} 
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#1161ed] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Compact Global Timer */}
        <div className="flex items-center bg-slate-100 rounded border border-slate-200 p-0.5">
          <div className="px-2 font-mono text-[11px] font-bold text-slate-600">
            {formatTime(time)}
          </div>
          <button 
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`p-1 rounded transition-colors ${isTimerRunning ? 'bg-red-500 text-white' : 'bg-[#1161ed] text-white'}`}
          >
            {isTimerRunning ? <Square size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" />}
          </button>
        </div>

        {/* Compact Action Icons */}
        <div className="flex items-center space-x-1 text-slate-500 border-l border-slate-200 pl-4">
          <button className="p-1.5 hover:bg-slate-100 rounded relative">
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`p-1.5 rounded transition-colors ${showLangMenu ? 'bg-blue-50 text-[#1161ed]' : 'hover:bg-slate-100'}`}
            >
              <Globe size={16} />
            </button>
            {showLangMenu && (
              <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-slate-200 rounded shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }}
                    className="w-full px-3 py-2 flex items-center justify-between text-[11px] font-bold hover:bg-slate-50 transition-colors"
                  >
                    <span className={language === lang.code ? 'text-[#1161ed]' : 'text-slate-600'}>
                      {lang.label}
                    </span>
                    {language === lang.code && <Check size={12} className="text-[#1161ed]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="p-1.5 hover:bg-slate-100 rounded">
            <LayoutGrid size={16} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 pl-3 border-l border-slate-200">
          <button className="flex items-center space-x-1.5 py-1 px-2 hover:bg-slate-50 rounded transition-colors group">
            <img src="https://picsum.photos/24/24?random=1" className="w-6 h-6 rounded-full" alt="Avatar" />
            <span className="text-[11px] font-bold text-slate-700">Joana M.</span>
            <ChevronDown size={12} className="text-slate-400 group-hover:text-[#1161ed]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
