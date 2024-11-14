import React from 'react';
import { Battery } from 'lucide-react';

interface DeviceBatteryStatusProps {
  level: number;
}

const DeviceBatteryStatus: React.FC<DeviceBatteryStatusProps> = ({ level }) => {
  const getBatteryColor = (level: number) => {
    if (level > 60) return 'text-green-500';
    if (level > 20) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex items-center">
      <Battery className={`h-4 w-4 mr-2 ${getBatteryColor(level)}`} />
      <span className="text-sm text-gray-900">{level}%</span>
    </div>
  );
};

export default DeviceBatteryStatus;