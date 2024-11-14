import React from 'react';
import { Package, Upload, Download, MoreVertical } from 'lucide-react';

const Applications = () => {
  const apps = [
    {
      id: 1,
      name: 'Training Simulator',
      version: '2.1.0',
      size: '1.2 GB',
      status: 'installed',
      lastUpdated: '2024-03-10',
    },
    {
      id: 2,
      name: 'Virtual Meeting Room',
      version: '1.5.2',
      size: '850 MB',
      status: 'update-available',
      lastUpdated: '2024-03-01',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Application Management</h1>
        <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
          <Upload className="h-4 w-4" />
          Upload App
        </button>
      </div>

      <div className="grid gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{app.name}</h3>
                  <div className="mt-1 flex items-center gap-4">
                    <span className="text-sm text-gray-500">Version {app.version}</span>
                    <span className="text-sm text-gray-500">{app.size}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${app.status === 'installed' ? 'bg-green-100 text-green-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {app.status === 'installed' ? 'Installed' : 'Update Available'}
                </span>
                <span className="text-sm text-gray-500">
                  Last updated: {new Date(app.lastUpdated).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <Download className="h-4 w-4" />
                  Install
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;