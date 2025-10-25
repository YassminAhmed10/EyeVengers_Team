import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-brand text-white flex flex-col fixed h-full">
      {/* Clinic Logo & Name */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-xl">local_hospital</span>
        </div>
        <img 
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            src="/src/images/logo.png"
            alt="Dr. Mohab Khairy"
          />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-2">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/20 text-white" href="#">
          <span className="material-symbols-outlined text-white">dashboard</span>
          <span className="font-medium">Dashboard</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">group</span>
          <span className="font-medium">Patients</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">calendar_month</span>
          <span className="font-medium">Appointments</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">medication</span>
          <span className="font-medium">Prescriptions</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">receipt_long</span>
          <span className="font-medium">Billing</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">bar_chart</span>
          <span className="font-medium">Reports</span>
        </a>
      </nav>

      {/* Settings & Profile */}
      <div className="p-4 border-t border-white/20">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white" href="#">
          <span className="material-symbols-outlined text-white">settings</span>
          <span className="font-medium">Settings</span>
        </a>
        <div className="flex items-center gap-3 mt-4 p-2">
          <img 
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
            src="src/images/doctor.jpg"
            alt="Dr. Mohab Khairy"
          />
          <div>
            <p className="font-heading font-semibold">Dr. Mohab Khairy</p>
            <p className="text-sm text-white/70">Ophthalmologist</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;