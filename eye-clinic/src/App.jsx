import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import AppointmentsTable from './components/AppointmentsTable';
import PendingPrescriptions from './components/PendingPrescriptions';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-neutral text-text font-body">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="p-8 overflow-y-auto">
          <StatsCards />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AppointmentsTable />
            </div>
            <div className="lg:col-span-1">
              <PendingPrescriptions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;