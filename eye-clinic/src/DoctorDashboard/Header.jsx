import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const [isOpen, setIsOpen] = useState(false); // حالة Dropdown
  const [currentTime, setCurrentTime] = useState(new Date()); // حالة الساعة
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // تحديث الساعة كل ثانية
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // تنظيف الـ interval عند إلغاء التثبيت
  }, []);

  // تنسيق الوقت
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <header className="bg-primary shadow-sm p-8 flex justify-between items-center sticky top-0 z-10">
      
      {/* Title and Date Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-heading font-bold text-text"> 
          Doctor's Dashboard
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium text-text/80 bg-secondary/30 px-3 py-1 rounded-md w-fit">
            {currentDate}
          </p>
          {/* الساعة الحقيقية */}
          <div className="flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-md">
            <span className="material-symbols-outlined text-text/80 text-lg">
              schedule
            </span>
            <span className="text-lg font-medium text-text/80 font-mono">
              {formattedTime}
            </span>
          </div>
        </div>
      </div>

      {/* Search + Notification Section */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className="relative w-[400px] lg:w-[500px] xl:w-[600px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text/50 text-xl">
            search
          </span>
          <input
            className="w-full pl-14 pr-6 py-4 rounded-xl bg-neutral border border-text/20 focus:ring-2 focus:ring-accent focus:border-accent text-xl placeholder-text/50 shadow-lg transition-all duration-300"
            type="text"
            placeholder="Search patients, appointments..."
          />
        </div>

        {/* Notification Button + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="relative p-3 text-text/70 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-4xl">notifications</span>
            <span className="absolute top-2 right-2 block h-3.5 w-3.5 rounded-full bg-red-600"></span>
          </button>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg overflow-hidden z-20">
              <div className="p-4 border-b border-gray-200 font-semibold text-gray-800">
                Notifications
              </div>
              <div className="max-h-64 overflow-y-auto">
                <ul>
                  <li className="px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    Patient Yassmin Ahmed checked in
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    Appointment with Maysoun Hassan cancelled
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    New message from Zeina Mohamed
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    Lab results ready for Doha Waleed
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;