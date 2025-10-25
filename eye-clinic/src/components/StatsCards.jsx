import React from 'react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-primary p-6 rounded-xl shadow-sm border border-neutral flex items-center gap-4">
        <div className="p-3 bg-secondary/30 rounded-full">
          <span className="material-symbols-outlined text-brand text-3xl">groups</span>
        </div>
        <div>
          <p className="text-text/70 text-sm font-medium">Patients Today</p>
          <p className="text-3xl font-heading font-bold text-brand">12</p>
        </div>
      </div>
      <div className="bg-primary p-6 rounded-xl shadow-sm border border-neutral flex items-center gap-4">
        <div className="p-3 bg-accent/20 rounded-full">
          <span className="material-symbols-outlined text-accent text-3xl">event_upcoming</span>
        </div>
        <div>
          <p className="text-text/70 text-sm font-medium">Upcoming Appointments</p>
          <p className="text-3xl font-heading font-bold text-accent">5</p>
        </div>
      </div>
      <div className="bg-primary p-6 rounded-xl shadow-sm border border-neutral flex items-center gap-4">
        <div className="p-3 bg-secondary/30 rounded-full">
          <span className="material-symbols-outlined text-brand text-3xl">pending_actions</span>
        </div>
        <div>
          <p className="text-text/70 text-sm font-medium">Pending Prescriptions</p>
          <p className="text-3xl font-heading font-bold text-brand">8</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;