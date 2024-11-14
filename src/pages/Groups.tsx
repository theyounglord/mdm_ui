import React, { useState } from 'react';
import { FolderTree, Plus } from 'lucide-react';
import GroupTree from '../components/groups/GroupTree';
import GroupDetails from '../components/groups/GroupDetails';
import type { Group } from '../components/groups/GroupTree';

const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const groups: Group = {
    id: 'root',
    name: 'All Groups',
    children: [
      {
        id: 'training',
        name: 'Training Department',
        deviceCount: 45,
        children: [
          {
            id: 'vr-lab-1',
            name: 'VR Lab 1',
            deviceCount: 15,
            children: [
              { id: 'station-1', name: 'Station 1', deviceCount: 5 },
              { id: 'station-2', name: 'Station 2', deviceCount: 5 },
              { id: 'station-3', name: 'Station 3', deviceCount: 5 },
            ]
          },
          {
            id: 'vr-lab-2',
            name: 'VR Lab 2',
            deviceCount: 30,
          }
        ]
      },
      {
        id: 'development',
        name: 'Development Team',
        deviceCount: 12,
      }
    ]
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Group Management</h1>
        <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
          New Group
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2">
              <FolderTree className="h-5 w-5 text-gray-500" />
              <h2 className="text-sm font-medium text-gray-700">Group Hierarchy</h2>
            </div>
          </div>
          <GroupTree groups={groups} onGroupSelect={setSelectedGroup} />
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <GroupDetails group={selectedGroup} />
        </div>
      </div>
    </div>
  );
};

export default Groups;