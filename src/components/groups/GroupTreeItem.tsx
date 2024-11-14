import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Smartphone } from 'lucide-react';
import type { Group } from './GroupTree';

interface GroupTreeItemProps {
  group: Group;
  level: number;
  onGroupSelect: (group: Group) => void;
}

const GroupTreeItem: React.FC<GroupTreeItemProps> = ({ group, level, onGroupSelect }) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (group.children) {
      setIsExpanded(!isExpanded);
    }
    onGroupSelect(group);
  };

  return (
    <div className="select-none">
      <div 
        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
        style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
        onClick={handleClick}
      >
        {group.children ? (
          isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
        ) : (
          <Smartphone className="h-4 w-4 text-gray-400" />
        )}
        <span className="text-sm font-medium text-gray-700">{group.name}</span>
        {group.deviceCount !== undefined && (
          <span className="ml-auto text-xs text-gray-500">{group.deviceCount} devices</span>
        )}
      </div>
      {isExpanded && group.children && (
        <div className="ml-4">
          {group.children.map((child) => (
            <GroupTreeItem
              key={child.id}
              group={child}
              level={level + 1}
              onGroupSelect={onGroupSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupTreeItem;