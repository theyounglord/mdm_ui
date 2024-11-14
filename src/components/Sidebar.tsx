import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Boxes, 
  Users, 
  Layers, 
  Settings, 
  BarChart3, 
  Smartphone,
  Shield,
  AppWindow
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/' },
    { icon: Smartphone, label: 'Devices', path: '/devices' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Layers, label: 'Groups', path: '/groups' },
    { icon: AppWindow, label: 'Applications', path: '/apps' },
    { icon: Shield, label: 'Policies', path: '/policies' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 mb-8">
        <Boxes className="h-8 w-8 text-indigo-600" />
        <span className="text-xl font-bold text-gray-800">VR Manager</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 pt-4 mt-6">
        <div className="flex items-center gap-3 px-3 py-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Admin"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;