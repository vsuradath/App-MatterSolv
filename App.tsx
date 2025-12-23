
import React, { useState, createContext, useContext } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MatterList from './components/MatterList';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('dashboard');
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const renderContent = () => {
    switch (currentPath) {
      case 'dashboard':
        return <Dashboard />;
      case 'matters':
        return <MatterList />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[50vh] space-y-3 animate-in zoom-in duration-300">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">
              🛠️
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-slate-800">{t.common.underConstruction}</h2>
              <p className="text-xs text-slate-500 font-medium">{t.common.manageEntries} <span className="text-[#1161ed] font-bold">{currentPath}</span>.</p>
            </div>
            <button 
              onClick={() => setCurrentPath('dashboard')}
              className="bg-[#1161ed] text-white px-5 py-1.5 rounded-lg font-bold text-xs shadow-md hover:bg-blue-600 transition-all"
            >
              {t.common.returnDashboard}
            </button>
          </div>
        );
    }
  };

  const contextValue = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className="flex h-screen bg-slate-50 overflow-hidden font-inter text-slate-800">
        <Sidebar currentPath={currentPath} onNavigate={setCurrentPath} />
        
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          
          <main className="flex-1 overflow-y-auto px-4 py-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-4 flex justify-between items-end">
                <div>
                  <h1 className="text-lg font-bold text-[#0e1839] leading-tight">
                    {/* Dynamic lookup for header title */}
                    {(t.nav as any)[currentPath.replace('-', '')] || currentPath}
                  </h1>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {currentPath === 'dashboard' ? t.common.welcome : t.common.manageEntries}
                  </p>
                </div>
                <div className="text-[9px] font-bold text-slate-400 bg-slate-200/50 px-2 py-1 rounded tracking-widest flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span>{t.common.synced}: 12:45:01</span>
                </div>
              </div>
              
              {renderContent()}
            </div>
          </main>

          <footer className="h-7 bg-[#0e1839] text-white/40 text-[9px] px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <span className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>{t.common.systemOk}</span>
               <span className="opacity-20">|</span>
               <span>{t.common.region}: TH-CENTRAL</span>
            </div>
            <div className="flex items-center space-x-4 uppercase font-bold tracking-widest">
               <span>MatterSolv Enterprise v1.0.4</span>
            </div>
          </footer>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
