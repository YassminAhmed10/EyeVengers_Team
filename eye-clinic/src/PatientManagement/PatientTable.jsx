import React from "react";
import { useNavigate } from "react-router-dom";

const PatientTable = ({ patients, userRole }) => {
  const navigate = useNavigate();

  const handleViewPatient = (patientId) => {
    if (userRole === "Doctor") {
      navigate(`/doctor/view-medical-record?patient=${encodeURIComponent(patients.find(p => p.id === patientId)?.name || 'Unknown')}`);
    } else {
      // Patient viewing their own records
      console.log("View patient record:", patientId);
    }
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'Active': 'status-active',
      'Follow-up': 'status-follow-up',
      'Post-op': 'status-post-op',
      'Treatment': 'status-treatment',
      'Scheduled': 'status-scheduled'
    };
    return statusMap[status] || 'status-active';
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Last Visit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.condition}</td>
                <td>{patient.lastVisit}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(patient.status)}`}>
                    {patient.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-view" 
                    onClick={() => handleViewPatient(patient.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                No patients found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;