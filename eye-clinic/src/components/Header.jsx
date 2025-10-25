import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="bg-primary shadow-sm p-8 flex justify-between items-center sticky top-0 z-10">
      {/* Page Title & Date - Made Larger */}
      <div className="flex flex-col">
        <h2 className="text-4xl font-heading font-bold text-text">
          Doctor's Dashboard
        </h2>
        <p className="text-xl text-text/80 font-medium mt-2">
          {currentDate}
        </p>
      </div>

      {/* Search & Actions - Made Larger */}
      <div className="flex items-center gap-6">
        <div className="relative w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text/50 text-xl">
            search
          </span>
          <input 
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-neutral border-none focus:ring-2 focus:ring-accent text-lg" 
            placeholder="Search patients, appointments..." 
            type="text"
          />
        </div>
        <button className="relative p-3 text-text/70 hover:text-accent transition-colors">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-2 right-2 block h-3 w-3 rounded-full bg-accent"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;