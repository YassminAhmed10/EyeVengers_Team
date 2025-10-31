import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ReceptionistSidebar.css';

const ReceptionistSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    
    // Navigate to login page
    navigate("/login");
  };

  // Receptionist only has access to these pages
  const navItems = [
    { path: "/appointments", label: "Appointments", icon: "calendar_month" },
    { path: "/receptionist/finance", label: "Finance", icon: "payments" },
    { path: "/receptionist/settings", label: "Settings", icon: "settings" }
  ];

  return (
    <aside className="receptionist-sidebar">
      <div className="sidebar-header">
        <div className="clinic-logo">
          <span className="material-symbols-outlined">local_hospital</span>
        </div>
        <div className="clinic-info">
          <h1>Royal Medical Center</h1>
          <p>Receptionist Panel</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon material-symbols-outlined">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}

        {/* ✅ Logout Button */}
        <div 
          className="nav-item logout-button"
          onClick={handleLogout}
        >
          <span className="nav-icon material-symbols-outlined">logout</span>
          <span className="nav-label">Logout</span>
        </div>
      </nav>

      <div className="user-profile">
        <div className="user-avatar">
          <span className="material-symbols-outlined">person</span>
        </div>
        <div className="user-info">
          <h3>Receptionist</h3>
          <p>Front Desk</p>
        </div>
      </div>
    </aside>
  );
};

export default ReceptionistSidebar;