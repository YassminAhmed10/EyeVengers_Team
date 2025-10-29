import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorPage from "./Pages/DoctorPage";
import EMRPage from "./Pages/EMRPage";
import PatientPage from "./Pages/PatientPage";
import SettingsPage from "./Pages/SettingsPage";
import ClinicPage from "./Pages/ClinicPage";
import AppointmentsPage from "../Pages/AppointmentsPage";


function AllProject() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorPage />} />
        <Route path="/emr" element={<EMRPage />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/clinic-system" element={<ClinicPage />} />
       <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </Router>
  );
}

export default AllProject;