import React from 'react';
import { BarChart3, Users, Smartphone, Shield, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Smartphone, label: 'Active Devices', value: '156', change: '+12%', color: 'text-blue-600' },
    { icon: Users, label: 'Total Users', value: '2,845', change: '+5.4%', color: 'text-green-600' },
    { icon: AlertTriangle, label: 'Alerts', value: '3', change: '-2', color: 'text-red-600' },
    { icon: Shield, label: 'Policy Updates', value: '24', change: '+6', color: 'text-purple-600' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center gap-4">
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Status Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <BarChart3 className="h-48 w-48 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">View all</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Device VR-{i} requires attention</p>
                  <p className="text-xs text-gray-500">Battery level critical</p>
                </div>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;