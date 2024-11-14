import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { DeviceProvider } from './context/DeviceContext';

function App() {
  return (
    <DeviceProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <MainContent />
        </div>
      </Router>
    </DeviceProvider>
  );
}

export default App;