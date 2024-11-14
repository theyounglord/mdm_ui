import React from 'react';
import { Shield, Plus, Check, X } from 'lucide-react';

const Policies = () => {
  const policies = [
    {
      id: 1,
      name: 'Default Security Policy',
      description: 'Base security settings for all devices',
      status: 'active',
      appliedTo: 156,
      rules: [
        { name: 'Require PIN', enabled: true },
        { name: 'Auto-lock after 5 minutes', enabled: true },
        { name: 'Allow USB debugging', enabled: false },
      ],
    },
    {
      id: 2,
      name: 'Training Lab Policy',
      description: 'Specific settings for training lab devices',
      status: 'active',
      appliedTo: 45,
      rules: [
        { name: 'Kiosk Mode', enabled: true },
        { name: 'Disable Screenshots', enabled: true },
        { name: 'Allow App Installation', enabled: false },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Policy Management</h1>
        <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
          Create Policy
        </button>
      </div>

      <div className="grid gap-6">
        {policies.map((policy) => (
          <div key={policy.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{policy.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{policy.description}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${policy.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {policy.status}
                </span>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Policy Rules</h4>
                <div className="space-y-3">
                  {policy.rules.map((rule) => (
                    <div key={rule.name} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700">{rule.name}</span>
                      {rule.enabled ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Applied to {policy.appliedTo} devices
                  </span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    Edit Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies;