import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import PatientTable from "./PatientTable";
import Pagination from "./Pagination";
import "../Pages/Patients.css";

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  const patientsPerPage = 8;

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!isAuthenticated || !role) {
      navigate("/login");
      return;
    }
    setUserRole(role);

    // Mock data - replace with actual API call
    const mockPatients = [
      { id: 1, name: "John Doe", age: 45, condition: "Cataract", lastVisit: "2024-01-15", status: "Active" },
      { id: 2, name: "Sarah Smith", age: 32, condition: "Myopia", lastVisit: "2024-01-10", status: "Active" },
      { id: 3, name: "Mike Johnson", age: 68, condition: "Glaucoma", lastVisit: "2024-01-08", status: "Follow-up" },
      { id: 4, name: "Emily Brown", age: 29, condition: "Astigmatism", lastVisit: "2024-01-05", status: "Active" },
      { id: 5, name: "Robert Wilson", age: 55, condition: "Cataract", lastVisit: "2024-01-03", status: "Post-op" },
      { id: 6, name: "Lisa Anderson", age: 41, condition: "Presbyopia", lastVisit: "2024-01-12", status: "Active" },
      { id: 7, name: "David Miller", age: 38, condition: "Dry Eyes", lastVisit: "2024-01-09", status: "Treatment" },
      { id: 8, name: "Maria Garcia", age: 52, condition: "Cataract", lastVisit: "2024-01-07", status: "Scheduled" },
    ];
    setPatients(mockPatients);
  }, [navigate]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Common content for both roles
  const renderContent = () => (
    <>
      <PageHeader 
        title={userRole === "Doctor" ? "Patient Management" : "My Medical Records"} 
        buttonText={userRole === "Doctor" ? "Add New Patient" : "Request Appointment"} 
        onButtonClick={() => console.log(userRole === "Doctor" ? "Add new patient" : "Request appointment")}
      />
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={userRole === "Doctor" ? "Search patients by name or condition..." : "Search my records..."}
      />
      
      <PatientTable patients={currentPatients} userRole={userRole} />
      
      <Pagination
        patientsPerPage={patientsPerPage}
        totalPatients={filteredPatients.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );

  // If user is a doctor, just render the content (sidebar is handled by PatientPage)
  if (userRole === "Doctor") {
    return (
      <div className="main-content">
        {renderContent()}
      </div>
    );
  }

  // If user is a patient, show the full patient dashboard with patient sidebar
  return (
    <div className="app-container">
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default PatientDashboard;