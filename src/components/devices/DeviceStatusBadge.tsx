import React from 'react';

interface DeviceStatusBadgeProps {
  status: 'online' | 'offline' | 'maintenance';
}

const DeviceStatusBadge: React.FC<DeviceStatusBadgeProps> = ({ status }) => {
  const statusStyles = {
    online: 'bg-green-100 text-green-800',
    offline: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default DeviceStatusBadge;