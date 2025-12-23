
// Fix: Added React import to resolve "Cannot find namespace 'React'" error for React.ReactNode type
import React from 'react';

export enum MatterStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}

export interface Matter {
  id: string;
  clientMatterCode: string;
  subject: string;
  clientName: string;
  type: string;
  status: MatterStatus;
  lastUpdated: string;
}

export interface Task {
  id: string;
  title: string;
  client: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Ongoing' | 'Done';
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
}

export interface NavLayer {
  title: string;
  items: NavItem[];
}
