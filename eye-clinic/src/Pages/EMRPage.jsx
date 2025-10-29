import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MedicalRecord from "../EMR/MedicalRecord";
import "./EMR.css";

function EMRPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const patientName = queryParams.get("patient") || "Unknown Patient";

  return (
    <div className="emr-page-container">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo & Doctor Info */}
        <div className="sidebar-header">
          <div className="logo-container">
            <img 
              className="clinic-logo"
              src="/src/images/logo.png"
              alt="Clinic Logo"
            />
          </div>
          <div className="doctor-info">
            <h3 className="doctor-name">Dr. Mohab Khairy</h3>
            <p className="doctor-specialty">Ophthalmologist</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <Link 
            to="/" 
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/patients" 
            className={`nav-item ${location.pathname === "/patients" ? "active" : ""}`}
          >
            <span className="material-symbols-outlined">group</span>
            <span>Patients</span>
          </Link>

          <Link 
            to="/appointments" 
            className={`nav-item ${location.pathname === "/appointments" ? "active" : ""}`}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span>Appointments</span>
          </Link>

          <Link 
            to="/finance" 
            className={`nav-item ${location.pathname === "/finance" ? "active" : ""}`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span>Finance</span>
          </Link>

          <Link 
            to="/clinic-system" 
            className={`nav-item ${location.pathname === "/clinic-system" ? "active" : ""}`}
          >
            <span className="material-symbols-outlined">local_hospital</span>
            <span>Clinic System</span>
          </Link>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          
          <div className="user-profile">
            <img 
              className="profile-avatar"
              src="src/images/doctor.jpg"
              alt="Dr. Mohab Khairy"
            />
            <div className="profile-text">
              <p className="profile-name">Dr. Mohab Khairy</p>
              <p className="profile-status">Online</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-content">
            <div className="header-info">
              <h1 className="page-title">Electronic Medical Record</h1>
              <div className="breadcrumb">
                <span>Home</span>
                <span className="separator">/</span>
                <span>Patients</span>
                <span className="separator">/</span>
                <span className="current">{patientName}</span>
              </div>
            </div>
            
            <div className="header-actions">
              <button 
                className="action-button secondary"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined">print</span>
                <span>Print</span>
              </button>
              
              <button 
                className="action-button primary"
                onClick={() => navigate("/")}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Back</span>
              </button>
            </div>
          </div>
        </header>

        {/* Patient Info Banner */}
        <div className="patient-banner">
          <div className="patient-avatar-section">
            <div className="patient-avatar">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="patient-main-info">
              <h2 className="patient-display-name">{patientName}</h2>
              <p className="patient-subtitle">Medical Record Overview</p>
            </div>
          </div>
          
          <div className="patient-stats">
            <div className="stat-item">
              <span className="material-symbols-outlined">event</span>
              <div>
                <p className="stat-label">Last Visit</p>
                <p className="stat-value">Today</p>
              </div>
            </div>
            
            <div className="stat-item">
              <span className="material-symbols-outlined">description</span>
              <div>
                <p className="stat-label">Total Records</p>
                <p className="stat-value">24</p>
              </div>
            </div>
            
            <div className="stat-item">
              <span className="material-symbols-outlined">medication</span>
              <div>
                <p className="stat-label">Medications</p>
                <p className="stat-value">3 Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Record Content */}
        <div className="content-wrapper">
          <MedicalRecord patientName={patientName} />
        </div>

        {/* Footer */}
        <footer className="page-footer">
          <div className="footer-content">
            <p className="footer-text">
              &copy; 2025 Dr. Mohab Khairy Ophthalmology Clinic. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default EMRPage;