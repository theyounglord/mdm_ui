import React from 'react';
import { useDevices } from '../context/DeviceContext';
import DeviceActionMenu from '../components/devices/DeviceActionMenu';
import DeviceStatusBadge from '../components/devices/DeviceStatusBadge';
import DeviceBatteryStatus from '../components/devices/DeviceBatteryStatus';

const Devices = () => {
  const { devices } = useDevices();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Device Management</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
          Add Device
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Battery</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{device.name}</div>
                        <div className="text-sm text-gray-500">{device.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <DeviceStatusBadge status={device.status} />
                  </td>
                  <td className="px-6 py-4">
                    <DeviceBatteryStatus level={device.batteryLevel} />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(device.lastSeen).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <DeviceActionMenu deviceId={device.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Devices;