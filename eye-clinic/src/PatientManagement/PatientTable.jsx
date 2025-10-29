import React from "react";
import { useNavigate } from "react-router-dom";

function PatientTable({ patients }) {
  const navigate = useNavigate();

  const handleViewRecord = (patient) => {
    navigate(`/emr?patient=${encodeURIComponent(patient.name)}`);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Phone Number</th>
            <th>Last Visit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.phone}</td>
              <td>{p.date}</td>
              <td>
                <button onClick={() => handleViewRecord(p)}>View Record</button>
              </td>
            </tr>
          ))}
          {patients.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                No patients found matching your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;
