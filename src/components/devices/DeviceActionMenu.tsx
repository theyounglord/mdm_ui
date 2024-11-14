import React, { useState } from 'react';
import { Power, Battery, RefreshCw, Lock, Settings2, MoreVertical, X } from 'lucide-react';

interface DeviceAction {
  icon: React.FC<{ className?: string }>;
  label: string;
  onClick: () => void;
}

interface DeviceActionMenuProps {
  deviceId: string;
}

const DeviceActionMenu: React.FC<DeviceActionMenuProps> = ({ deviceId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: string) => {
    // Implement device actions
    console.log(`Executing ${action} on device ${deviceId}`);
    setIsOpen(false);
  };

  const deviceActions: DeviceAction[] = [
    { 
      icon: Power, 
      label: 'Reboot',
      onClick: () => handleAction('reboot')
    },
    { 
      icon: Lock, 
      label: 'Lock',
      onClick: () => handleAction('lock')
    },
    { 
      icon: RefreshCw, 
      label: 'Update',
      onClick: () => handleAction('update')
    },
    { 
      icon: Settings2, 
      label: 'Settings',
      onClick: () => handleAction('settings')
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-gray-600"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MoreVertical className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
          {deviceActions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeviceActionMenu;