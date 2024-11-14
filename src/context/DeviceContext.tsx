import React, { createContext, useContext, useState } from 'react';

interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'maintenance';
  lastSeen: string;
  batteryLevel: number;
  firmwareVersion: string;
}

interface DeviceContextType {
  devices: Device[];
  selectedDevice: Device | null;
  setSelectedDevice: (device: Device | null) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [devices] = useState<Device[]>([
    {
      id: 'VR-001',
      name: 'Training Room 1',
      status: 'online',
      lastSeen: '2024-03-14T10:30:00',
      batteryLevel: 85,
      firmwareVersion: '2.1.0',
    },
    // Add more devices as needed
  ]);

  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  return (
    <DeviceContext.Provider value={{ devices, selectedDevice, setSelectedDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDevices must be used within a DeviceProvider');
  }
  return context;
};