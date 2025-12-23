
import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  Clock, 
  Users, 
  UserPlus, 
  Briefcase, 
  FileText, 
  CreditCard, 
  Calculator, 
  BarChart3, 
  Link2, 
  Settings, 
  HelpCircle,
  ShieldAlert,
  FileSearch
} from 'lucide-react';
import { NavLayer } from './types';

export const COLORS = {
  primary: '#0e1839',
  blue: '#1161ed',
  cyan: '#3cc7e7',
  text: '#303e67',
  gray: '#96a0b5',
  lightBlue: '#eff3ff',
  activeRow: 'rgba(17, 97, 237, 0.1)',
};

export const MENU_LAYERS: NavLayer[] = [
  {
    title: 'Core Operations',
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: 'dashboard' },
      { label: 'Calendar', icon: <Calendar size={20} />, path: 'calendar' },
      { label: 'Tasks', icon: <CheckSquare size={20} />, path: 'tasks', badge: 12 },
      { label: 'Time Tracking', icon: <Clock size={20} />, path: 'time-tracking' },
    ]
  },
  {
    title: 'Legal Management',
    items: [
      { label: 'Cases & Matters', icon: <Briefcase size={20} />, path: 'matters' },
      { label: 'Client Management', icon: <UserPlus size={20} />, path: 'clients' },
      { label: 'Legal Forms', icon: <FileText size={20} />, path: 'forms' },
      { label: 'Lawyer Team', icon: <Users size={20} />, path: 'lawyers' },
    ]
  },
  {
    title: 'Financials',
    items: [
      { label: 'Billing & Payments', icon: <CreditCard size={20} />, path: 'billing' },
      { label: 'Accounts & Finance', icon: <Calculator size={20} />, path: 'finance' },
      { label: 'Reports', icon: <BarChart3 size={20} />, path: 'reports' },
    ]
  },
  {
    title: 'Administration',
    items: [
      { label: 'App Integrations', icon: <Link2 size={20} />, path: 'integrations' },
      { label: 'Settings', icon: <Settings size={20} />, path: 'settings' },
      { label: 'Help Center', icon: <HelpCircle size={20} />, path: 'help' },
    ]
  }
];

export const MOCK_MATTERS = [
  { id: 'LI25J567', clientMatterCode: 'C0001-LI25J567', subject: 'Claim for damages from accident', clientName: 'Mr. Prayat N.', type: 'Civil', status: 'Pending', risk: 'Medium', conflict: 'Passed' },
  { id: 'LI25H901', clientMatterCode: 'C0001-LI25H901', subject: 'Theft at night', clientName: 'Ms. Nitchapa S.', type: 'Criminal', status: 'Active', risk: 'High', conflict: 'Passed' },
  { id: 'LI25H001', clientMatterCode: 'C0001-LI25H001', subject: 'Rent-purchase contract case', clientName: 'Ms. Wannapa P.', type: 'Civil', status: 'Active', risk: 'Low', conflict: 'Passed' },
  { id: 'LI25G678', clientMatterCode: 'C0001-LI25G678', subject: 'Defamation by audio recording', clientName: 'Thawin Co., Ltd.', type: 'Civil', status: 'Active', risk: 'Medium', conflict: 'Manual Review' },
  { id: 'LI25F345', clientMatterCode: 'C0001-LI25F345', subject: 'Inheritance distribution', clientName: 'Mr. Phisit S.', type: 'Inheritance', status: 'Completed', risk: 'Low', conflict: 'Passed' },
  { id: 'LI25E012', clientMatterCode: 'C0001-LI25E012', subject: 'Debt repayment from loan', clientName: 'Ms. Supaporn C.', type: 'Civil', status: 'Cancelled', risk: 'High', conflict: 'Failed' },
];
