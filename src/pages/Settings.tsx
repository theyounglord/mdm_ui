import React from 'react';
import { Bell, Shield, Key, User, Globe, Database } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      id: 'notifications',
      icon: Bell,
      title: 'Notifications',
      description: 'Manage alert preferences and notification settings',
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      description: 'Configure security settings and authentication methods',
    },
    {
      id: 'api',
      icon: Key,
      title: 'API Access',
      description: 'Manage API keys and access tokens',
    },
    {
      id: 'users',
      icon: User,
      title: 'User Preferences',
      description: 'Configure user-specific settings and permissions',
    },
    {
      id: 'region',
      icon: Globe,
      title: 'Region & Language',
      description: 'Set your preferred region and language settings',
    },
    {
      id: 'backup',
      icon: Database,
      title: 'Backup & Restore',
      description: 'Manage system backups and restore points',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your system preferences and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:border-indigo-200 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <section.icon className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;