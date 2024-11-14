import React from 'react';
import { FolderTree, Smartphone, Users, Settings } from 'lucide-react';
import type { Group } from './GroupTree';

interface GroupDetailsProps {
  group: Group | null;
}

const GroupDetails: React.FC<GroupDetailsProps> = ({ group }) => {
  if (!group) {
    return (
      <div className="text-center text-gray-500">
        <FolderTree className="h-12 w-12 mx-auto text-gray-400 mb-3" />
        <p>Select a group to view its details and manage devices</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <FolderTree className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">{group.name}</h2>
            {group.deviceCount !== undefined && (
              <p className="text-sm text-gray-500">{group.deviceCount} devices</p>
            )}
          </div>
        </div>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          Edit Group
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Smartphone className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Manage Devices</span>
        </button>
        <button className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Users className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Manage Access</span>
        </button>
        <button className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Settings className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Group Settings</span>
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;