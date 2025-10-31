import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PatientInfo from "./PatientInfo";
import EyeExaminationForm from "./EyeExaminationForm";
import MedicalHistory from "./MedicalHistory";
import PrescriptionForm from "./PrescriptionForm";
import PatientComplaint from "./PatientComplaint";
import Investigations from "./Investigations";
import PastImageTests from "./PastImage-Tests";
import Operations from "./Operations";
import DiagnosesTab from "./Diagnoses";

const MedicalRecord = ({ patientName, patientId }) => {
  const [activeTab, setActiveTab] = useState(0);

  // State لكل تاب
  const [patientData, setPatientData] = useState({
    name: patientName || "",
    age: "",
    gender: "",
    visitDate: "",
    patientID: patientId || "", // ✅ Use the numeric patient ID
    contactNumber: "",
    insuranceCompany: "",
  });

  const [complaintData, setComplaintData] = useState({ complaint: "" });
  const [historyData, setHistoryData] = useState({
    previousEye: "",
    familyHistory: "",
    allergies: "",
  });
  const [eyeExamData, setEyeExamData] = useState({
    rightEye: "",
    leftEye: "",
    eyePressure: "",
    pupilReaction: "",
    pupilReactionOther: "",
    eyeAlignment: "",
    eyeAlignmentOther: "",
    eyeMovements: "",
    eyeMovementsOther: "",
    anteriorSegment: "",
    fundusObservation: "",
    otherNotes: "",
  });
  const [investigationsData, setInvestigationsData] = useState({});
  const [pastImagesData, setPastImagesData] = useState([]);
  const [operationsData, setOperationsData] = useState({});
  const [prescriptionsData, setPrescriptionsData] = useState([]);
  const [diagnosesData, setDiagnosesData] = useState([]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: 4,
        boxSizing: "border-box",
      }}
    >
      {/* Patient Info Form */}
      <Box sx={{ mb: 2 }}>
        <PatientInfo patient={patientData} setPatient={setPatientData} />
      </Box>

      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        centered
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": { fontWeight: 900, fontSize: "0.75rem" },
        }}
      >
        <Tab label="Patient Complaint" />
        <Tab label="Medical History" />
        <Tab label="Investigations" />
        <Tab label="Eye Examination" />
        <Tab label="Past Images & Tests" />
        <Tab label="Operations" />
        <Tab label="Prescription" />
        <Tab label="Diagnoses" />
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ mt: 5 }}>
        {activeTab === 0 && (
          <PatientComplaint 
            data={complaintData} 
            setData={setComplaintData} 
            patientId={patientId}
          />
        )}
        {activeTab === 1 && (
          <MedicalHistory
            data={historyData}
            setData={setHistoryData}
            patientName={patientName}
            patientId={patientId}
          />
        )}
        {activeTab === 2 && (
          <Investigations
            data={investigationsData}
            setData={setInvestigationsData}
            patientId={patientId}
          />
        )}
        {activeTab === 3 && (
          <EyeExaminationForm 
            data={eyeExamData} 
            setData={setEyeExamData} 
            patientId={patientId}
          />
        )}
        {activeTab === 4 && (
          <PastImageTests 
            files={pastImagesData} 
            setFiles={setPastImagesData} 
            patientId={patientId}
          />
        )}
        {activeTab === 5 && (
          <Operations 
            data={operationsData} 
            setData={setOperationsData} 
            patientId={patientId}
          />
        )}
        {activeTab === 6 && (
          <PrescriptionForm
            data={prescriptionsData}
            setData={setPrescriptionsData}
            patientId={patientId}
          />
        )}
        {activeTab === 7 && (
          <DiagnosesTab 
            data={diagnosesData} 
            setData={setDiagnosesData} 
            patientId={patientId}
          />
        )}
      </Box>
    </Box>
  );
};

export default MedicalRecord;