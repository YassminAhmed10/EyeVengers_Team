import React from 'react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-4">
        <div className="p-4 bg-brand/10 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-brand text-4xl">groups</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">Patients Today</p>
          <p className="text-4xl font-extrabold text-brand">12</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-4">
        <div className="p-4 bg-accent/10 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-accent text-4xl">event_upcoming</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">Upcoming Appointments</p>
          <p className="text-4xl font-extrabold text-accent">5</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-4">
        <div className="p-4 bg-brand/10 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-brand text-4xl">pending_actions</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">Pending Prescriptions</p>
          <p className="text-4xl font-extrabold text-brand">8</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
