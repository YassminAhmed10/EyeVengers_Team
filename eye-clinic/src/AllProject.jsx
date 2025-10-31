import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DoctorDashboard from "./DoctorDashboard/Dashboard";
import AppointmentsPage from "./Pages/AppointmentsPage";
import ClinicPage from "./Pages/ClinicPage";
import SettingsPage from "./Pages/SettingsPage";
import EMRPage from "./Pages/EMRPage";
import PatientPage from "./Pages/PatientPage";
import FinancePage from "./Pages/FinancePage";
// In AllProject.js

function AllProject() {
  return (
    <Router>
      <Routes>
        {/* Default route to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/patients" element={<PatientPage />} />
        <Route path="/doctor/appointments" element={<AppointmentsPage />} />
        <Route path="/doctor/clinic-system" element={<ClinicPage />} />
        <Route path="/doctor/finance" element={<FinancePage />} />
        <Route path="/doctor/settings" element={<SettingsPage />} />
        <Route path="/doctor/view-medical-record/:patientName" element={<EMRPage />} />

        {/* Receptionist Routes */}
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/receptionist/finance" element={<FinancePage />} />
        <Route path="/receptionist/settings" element={<SettingsPage />} />

        {/* Patient Routes */}
        <Route path="/patient" element={<PatientPage />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default AllProject;