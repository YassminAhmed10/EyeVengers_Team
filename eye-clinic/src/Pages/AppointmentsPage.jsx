import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReceptionistSidebar from "../Appointment/ReceptionistSidebar";
import DoctorSidebar from "../DoctorDashboard/Sidebar";
import "./Appointments.css";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("book");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!isAuthenticated || !role) {
      navigate("/login");
      return;
    }
    setUserRole(role);
  }, [navigate]);

  const renderSidebar = () => {
    if (userRole === "Receptionist") {
      return <ReceptionistSidebar />;
    } else if (userRole === "Doctor") {
      return <DoctorSidebar />;
    }
    return null;
  };

  // Determine if this is a doctor route
  const isDoctorRoute = location.pathname.startsWith('/doctor');

  if (!userRole) {
    return <div>Loading...</div>;
  }

  return (
    <div className="appointments-modern-container">
      {renderSidebar()}
      
      <div className="appointments-main-content">
        <header className="appointments-header">
          <div className="header-main">
            <div className="header-titles">
              <h1>
                {isDoctorRoute ? "Doctor Appointments" : "Appointment Management"}
              </h1>
              <p>
                {isDoctorRoute 
                  ? "View and manage your appointments" 
                  : "Book and manage patient appointments efficiently"
                }
              </p>
            </div>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Today's Appointments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">45</span>
                <span className="stat-label">This Week</span>
              </div>
            </div>
          </div>
        </header>

        <div className="appointments-content">
          <div className="content-container">
            <div className="appointments-tabs">
              <button
                className={`tab-btn ${activeTab === "book" ? "active" : ""}`}
                onClick={() => setActiveTab("book")}
              >
                <span className="material-symbols-outlined">event_available</span>
                {isDoctorRoute ? "Schedule Appointment" : "Book New Appointment"}
              </button>
              <button
                className={`tab-btn ${activeTab === "manage" ? "active" : ""}`}
                onClick={() => setActiveTab("manage")}
              >
                <span className="material-symbols-outlined">schedule</span>
                Manage Appointments
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "book" ? (
                <div className="appointment-card booking-card">
                  <div className="card-header">
                    <h2>
                      {isDoctorRoute ? "Schedule New Appointment" : "Book New Appointment"}
                    </h2>
                    <p>
                      {isDoctorRoute 
                        ? "Schedule appointments with your patients" 
                        : "Fill out the form below to schedule a new appointment"
                      }
                    </p>
                  </div>

                  <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Patient Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter patient's full name" 
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="(123) 456-7890" 
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          placeholder="patient@example.com" 
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Appointment Date</label>
                        <input 
                          type="date" 
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Preferred Time</label>
                        <select className="form-input">
                          <option value="">Select a time slot</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label>Appointment Type</label>
                        <select className="form-input">
                          <option value="">Select type</option>
                          <option value="checkup">Routine Checkup</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                      
                      <div className="form-group full-width">
                        <label>Reason for Visit</label>
                        <textarea 
                          placeholder="Please describe the reason for the appointment in detail..." 
                          className="form-textarea"
                          rows="4"
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="reset" className="btn btn-secondary">
                        <span className="material-symbols-outlined">clear</span>
                        Clear Form
                      </button>
                      <button type="submit" className="btn btn-primary">
                        <span className="material-symbols-outlined">book_online</span>
                        {isDoctorRoute ? "Schedule Appointment" : "Book Appointment"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="appointment-card management-card">
                  <div className="card-header">
                    <h2>Manage Appointments</h2>
                    <p>View and manage all scheduled appointments</p>
                  </div>

                  <div className="table-container">
                    <table className="appointments-table">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Contact Info</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John Doe</td>
                          <td>+20 111 222 333</td>
                          <td>Nov 2, 2025</td>
                          <td>10:00 AM</td>
                          <td>Consultation</td>
                          <td>Pending</td>
                          <td>
                            <div className="action-buttons">
                              <button className="action-btn view-btn">
                                <span className="material-symbols-outlined">visibility</span>
                              </button>
                              <button className="action-btn edit-btn">
                                <span className="material-symbols-outlined">edit</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}