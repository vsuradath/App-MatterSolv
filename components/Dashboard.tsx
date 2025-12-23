
import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Clock, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  GanttChartSquare,
  Scale
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { useTranslation } from '../App';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const barData = [
    { name: 'Jan', revenue: 120, target: 100 }, 
    { name: 'Feb', revenue: 145, target: 100 },
    { name: 'Mar', revenue: 130, target: 100 }, 
    { name: 'Apr', revenue: 160, target: 100 },
    { name: 'May', revenue: 180, target: 100 }, 
    { name: 'Jun', revenue: 155, target: 100 },
  ];

  const pieData = [
    { name: t.matters.active, value: 454, color: '#1161ed' },
    { name: t.matters.pending, value: 120, color: '#f59e0b' },
    { name: t.matters.completed, value: 230, color: '#10b981' },
    { name: t.matters.cancelled, value: 45, color: '#ef4444' },
  ];

  const StatCard = ({ title, value, change, isPositive, icon: Icon, color }: any) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition-all group">
      <div className="flex items-center space-x-3">
        <div className={`p-2.5 rounded-lg ${color} text-white shadow-sm group-hover:scale-110 transition-transform`}>
          <Icon size={18} />
        </div>
        <div>
          <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">{title}</h3>
          <p className="text-xl font-bold text-slate-800 leading-none">{value}</p>
        </div>
      </div>
      <div className={`flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {isPositive ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
        {change}
      </div>
    </div>
  );

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* ERP Banner */}
      <div className="bg-[#0e1839] rounded-xl p-4 flex items-center justify-between text-white border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Scale size={120} />
        </div>
        <div className="flex items-center space-x-4 relative z-10">
          <div className="bg-blue-600/20 p-2.5 rounded-lg border border-blue-500/30">
             <GanttChartSquare size={24} className="text-[#3cc7e7]" />
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight">Enterprise Performance Node</h2>
            <p className="text-[10px] text-slate-400 font-medium">{t.common.proPackage} • {t.common.validUntil}</p>
          </div>
        </div>
        <div className="flex space-x-2 relative z-10">
          <button className="bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold px-4 py-2 rounded-lg border border-white/10 transition-all">
            Conflict Logs
          </button>
          <button className="bg-[#1161ed] hover:bg-blue-600 text-white text-[11px] font-bold px-4 py-2 rounded-lg shadow-xl shadow-blue-900/40 transition-all">
            {t.common.manageSub}
          </button>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title={t.dashboard.totalMatters} value="4,102" change="12%" isPositive={true} icon={Briefcase} color="bg-[#1161ed]" />
        <StatCard title={t.dashboard.legalServices} value="1,962" change="10.5%" isPositive={true} icon={TrendingUp} color="bg-[#3cc7e7]" />
        <StatCard title={t.dashboard.totalClients} value="3,216" change="4.2%" isPositive={true} icon={Users} color="bg-[#0e1839]" />
        <StatCard title={t.dashboard.billableHours} value="1,250h" change="2.1%" isPositive={false} icon={Clock} color="bg-slate-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Revenue Performance */}
        <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t.dashboard.revenuePerf}</h3>
            <div className="flex space-x-2">
               <span className="flex items-center text-[10px] font-bold text-slate-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span> Actual
               </span>
               <span className="flex items-center text-[10px] font-bold text-slate-400">
                  <span className="w-2 h-2 bg-slate-200 rounded-full mr-1.5"></span> Target
               </span>
            </div>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '11px'}} />
                <Bar dataKey="revenue" fill="#1161ed" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-6">{t.dashboard.caseStatus}</h3>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[160px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={45} outerRadius={65} paddingAngle={8} dataKey="value">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-slate-50/50 border border-slate-100 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] text-slate-500 font-bold">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
