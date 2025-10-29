import React, { useState } from "react";
import Sidebar from "../DoctorDashboard/Sidebar";
import Header from "../DoctorDashboard/Header";
import "./Appointments.css";

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("book");
  const [selectedTime, setSelectedTime] = useState("");

  // توليد أوقات (9:00 - 17:00) بفواصل 15 دقيقة
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour > 12 ? hour - 12 : hour;
        const mm = minute === 0 ? "00" : minute.toString().padStart(2, "0");
        times.push(`${displayHour}:${mm} ${period}`);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="appointments-container">
      <Sidebar />
      <div className="appointments-content">
        <Header />
        <div className="appointments-box">
          <div className="appointments-header">
            <h1>Appointments</h1>
            <p>Book or manage your appointments</p>
          </div>

          {/* Tabs */}
          <div className="appointments-tabs">
            <button
              className={`tab-btn ${activeTab === "book" ? "active" : ""}`}
              onClick={() => setActiveTab("book")}
            >
              Book an Appointment
            </button>
            <button
              className={`tab-btn ${activeTab === "manage" ? "active" : ""}`}
              onClick={() => setActiveTab("manage")}
            >
              Manage Appointments
            </button>
          </div>

          {/* محتوى الصفحة */}
          {activeTab === "book" ? (
            <div className="appointment-card">
              <h2>Book Your Appointment</h2>
              <p className="subtitle">Fill the form below</p>

              <form
                className="appointment-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-grid">
                  <label>
                    Patient Name
                    <input type="text" placeholder="Full name" />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" placeholder="(123) 456-7890" />
                  </label>
                  <label>
                    Email
                    <input type="email" placeholder="email@example.com" />
                  </label>
                  <label>
                    Select Date
                    <input type="date" />
                  </label>
                  <label>
                    Select Time
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, i) => (
                        <option key={i} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="full-width">
                    Reason for Visit
                    <textarea placeholder="Briefly describe the reason..." />
                  </label>
                </div>

                <div className="form-buttons">
                  <button type="reset" className="btn cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn submit">
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="appointment-card">
              <h2>Manage Appointments</h2>
              <p className="subtitle">
                View and manage your scheduled appointments
              </p>

              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Contact</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Reason</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>+20 111 222 333</td>
                    <td>Nov 2, 2025</td>
                    <td>10:00 AM</td>
                    <td>Routine check</td>
                    <td>
                      <button className="small-btn approve">Approve</button>
                      <button className="small-btn reject">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
