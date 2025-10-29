import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCards from "./StatsCards";
import AppointmentsTable from "./AppointmentsTable";


function Dashboard() {
  return (
    <div className="flex h-screen bg-neutral text-text font-body">
      <Sidebar />
          <div className="flex-1 flex flex-col ml-80">
        <Header />
        <main className="p-8 overflow-y-auto">
          <StatsCards />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-5">
              <AppointmentsTable />
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;