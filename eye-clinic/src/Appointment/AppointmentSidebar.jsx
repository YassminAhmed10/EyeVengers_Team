import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: 'Dashboard'},
    { id: 2, name: 'Appointments'},
    { id: 3, name: 'Billing'},
    { id: 4, name: 'Settings'}
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="clinic-name">Mohab Khairy</h1>
        <p className="clinic-type">Eye Clinic</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {menuItems.map(item => (
            <li key={item.id} className="nav-item">
              <div className="nav-icon-wrapper">
                <span className="nav-icon"></span>
              </div>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="doctor-info">
          <h3 className="doctor-name">Dr. Mohab Khairy</h3>
          <p className="doctor-specialty">Ophthalmologist</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;