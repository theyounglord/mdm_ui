import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Devices from '../pages/Devices';
import Users from '../pages/Users';
import Groups from '../pages/Groups';
import Applications from '../pages/Applications';
import Policies from '../pages/Policies';
import Settings from '../pages/Settings';

const MainContent = () => {
  return (
    <main className="flex-1 overflow-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/users" element={<Users />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/apps" element={<Applications />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
};

export default MainContent;