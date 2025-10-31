import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDashboard from "../PatientManagement/PatientDashboard";
import DoctorSidebar from "../DoctorDashboard/Sidebar";
import "./Patients.css";

function PatientPage() {
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!isAuthenticated || !role) {
      navigate("/login");
      return;
    }
    setUserRole(role);
  }, [navigate]);

  if (!userRole) {
    return <div>Loading...</div>;
  }

  // For doctors, show patient management with doctor sidebar
  if (userRole === "Doctor") {
    return (
      <div className="app-container">
        <DoctorSidebar />
        <div className="doctor-patients-content">
          <PatientDashboard />
        </div>
      </div>
    );
  }

  // For patients, show their own dashboard
  if (userRole === "Patient") {
    return <PatientDashboard />;
  }

  return <div>Unauthorized access</div>;
}

export default PatientPage;