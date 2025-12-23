
import React, { useState } from 'react';
import { 
  Filter, 
  Download, 
  Plus, 
  ChevronRight, 
  MoreHorizontal,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  ShieldCheck,
  ShieldAlert,
  ShieldEllipsis
} from 'lucide-react';
import { MOCK_MATTERS } from '../constants';
import { useTranslation } from '../App';

const MatterList: React.FC = () => {
  const { t } = useTranslation();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-50 text-[#1161ed] border-blue-100';
      case 'Pending': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Cancelled': return 'bg-slate-50 text-slate-400 border-slate-200';
      default: return 'bg-slate-50 text-slate-400';
    }
  };

  const getRiskStyle = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-rose-600 font-bold';
      case 'Medium': return 'text-amber-600 font-bold';
      case 'Low': return 'text-emerald-600 font-bold';
      default: return 'text-slate-400';
    }
  };

  const getConflictIcon = (status: string) => {
    switch (status) {
      case 'Passed': return <ShieldCheck size={14} className="text-emerald-500" />;
      case 'Failed': return <ShieldAlert size={14} className="text-rose-500" />;
      default: return <ShieldEllipsis size={14} className="text-amber-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
      {/* Search & Toolbars */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
        <div className="flex items-center space-x-3">
          <div className="relative group">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1161ed]" size={14} />
            <input 
              type="text" 
              placeholder={t.matters.filterMatters} 
              className="pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded text-[11px] focus:outline-none focus:ring-1 focus:ring-[#1161ed] w-72 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded text-[11px] font-bold text-slate-600 hover:bg-slate-50 shadow-sm">
            <Filter size={12} />
            <span>Filter</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-white border border-slate-200 rounded text-slate-600 hover:bg-slate-50">
            <Download size={14} />
          </button>
          <button className="flex items-center space-x-1.5 px-4 py-1.5 bg-[#1161ed] text-white rounded text-[11px] font-bold hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all">
            <Plus size={14} />
            <span>{t.matters.newMatter}</span>
          </button>
        </div>
      </div>

      {/* Grid Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-4 py-3 w-10">
                <input type="checkbox" className="rounded border-slate-300 text-[#1161ed] scale-90" />
              </th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.id}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.subject}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.client}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.risk}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.conflict}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.matters.status}</th>
              <th className="px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">{t.matters.actions}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_MATTERS.map((matter) => {
              const isSelected = selectedIds.includes(matter.id);
              return (
                <tr key={matter.id} className={`group hover:bg-slate-50/50 transition-colors ${isSelected ? 'bg-blue-50/30' : ''}`}>
                  <td className="px-4 py-3">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-[#1161ed] scale-90" 
                      checked={isSelected}
                      onChange={() => toggleSelect(matter.id)}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-[10px] font-bold text-[#1161ed] font-mono bg-blue-50 px-1.5 py-0.5 rounded">{matter.id}</span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-800 leading-tight group-hover:text-[#1161ed] transition-colors">{matter.subject}</span>
                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">{matter.clientMatterCode}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className="text-[11px] text-slate-600 font-semibold">{matter.clientName}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`text-[10px] ${getRiskStyle(matter.risk)}`}>{matter.risk}</span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center space-x-1.5">
                      {getConflictIcon(matter.conflict)}
                      <span className="text-[10px] text-slate-500 font-medium">{matter.conflict}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${getStatusStyle(matter.status)}`}>
                      {matter.status}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-center space-x-1">
                      <button className="p-1.5 hover:bg-white border border-transparent hover:border-slate-100 rounded text-slate-400 hover:text-[#1161ed] transition-all">
                        <ChevronRight size={14} />
                      </button>
                      <button className="p-1.5 hover:bg-white rounded text-slate-400 transition-all">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-4 py-3 bg-slate-50/30 flex items-center justify-between border-t border-slate-100">
        <span className="text-[10px] text-slate-500 font-medium">1-6 of 13 records in Hub</span>
        <div className="flex items-center space-x-1">
          <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-bold text-slate-400 bg-white hover:bg-slate-50">Prev</button>
          <button className="px-3 py-1 bg-[#1161ed] text-white rounded text-[10px] font-bold shadow-sm">1</button>
          <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-bold text-slate-600 bg-white hover:bg-slate-50">2</button>
          <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-bold text-slate-600 bg-white hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MatterList;
