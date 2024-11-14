import React from 'react';
import { ChevronRight, ChevronDown, Smartphone } from 'lucide-react';
import GroupTreeItem from './GroupTreeItem';

export interface Group {
  id: string;
  name: string;
  deviceCount?: number;
  children?: Group[];
}

interface GroupTreeProps {
  groups: Group;
  onGroupSelect: (group: Group) => void;
}

const GroupTree: React.FC<GroupTreeProps> = ({ groups, onGroupSelect }) => {
  return (
    <div className="divide-y divide-gray-100">
      <GroupTreeItem group={groups} level={0} onGroupSelect={onGroupSelect} />
    </div>
  );
};

export default GroupTree;