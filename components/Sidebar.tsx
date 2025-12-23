
import React from 'react';
import { MENU_LAYERS, COLORS } from '../constants';
import { useTranslation } from '../App';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, onNavigate }) => {
  const { t } = useTranslation();

  const layerTitles: Record<string, string> = {
    'Core Operations': t.nav.core,
    'Legal Management': t.nav.legal,
    'Financials': t.nav.finance,
    'Administration': t.nav.admin,
  };

  const itemLabels: Record<string, string> = {
    'Dashboard': t.nav.dashboard,
    'Calendar': t.nav.calendar,
    'Tasks': t.nav.tasks,
    'Time Tracking': t.nav.timeTracking,
    'Lawyer Team': t.nav.lawyers,
    'Client Management': t.nav.clients,
    'Cases & Matters': t.nav.matters,
    'Legal Forms': t.nav.forms,
    'Billing & Payments': t.nav.billing,
    'Accounts & Finance': t.nav.financeMod,
    'Reports': t.nav.reports,
    'App Integrations': t.nav.integrations,
    'Settings': t.nav.settings,
    'Help Center': t.nav.help,
  };

  return (
    <aside 
      className="w-52 h-screen overflow-y-auto flex-shrink-0 border-r border-slate-200 text-white flex flex-col"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="p-4 flex items-center space-x-2.5 mb-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[#1161ed] to-[#3cc7e7] rounded flex items-center justify-center font-bold text-lg shadow-lg">
          M
        </div>
        <span className="text-lg font-bold tracking-tight">MatterSolv</span>
      </div>

      <nav className="flex-1 px-2 space-y-4 pb-4">
        {MENU_LAYERS.map((layer, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] px-3 mb-1">
              {layerTitles[layer.title] || layer.title}
            </h3>
            <ul className="space-y-0.5">
              {layer.items.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => onNavigate(item.path)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded transition-all duration-150 group ${
                        isActive 
                          ? 'bg-[#1161ed] text-white shadow-sm' 
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
                          {React.cloneElement(item.icon as React.ReactElement, { size: 14 })}
                        </span>
                        <span className="text-[11px] font-medium tracking-tight">
                          {itemLabels[item.label] || item.label}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="flex items-center justify-center min-w-[14px] h-3.5 px-1 text-[8px] font-bold bg-[#3cc7e7] text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-white/5 mt-auto bg-black/20">
        <div className="flex items-center space-x-2.5 p-1.5 rounded bg-white/5 border border-white/5">
          <img src="https://picsum.photos/32/32?id=1" className="w-7 h-7 rounded border border-white/10" alt="User" />
          <div className="overflow-hidden">
            <p className="text-[10px] font-bold truncate text-white">Adv. Joana Miles</p>
            <p className="text-[8px] text-slate-500 truncate font-mono">MS-LP-2025</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
