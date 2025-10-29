import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ هنستخدمها لجلب اسم المريض من URL
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

const MedicalRecord = () => {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const patientNameFromURL = queryParams.get("patient") || ""; // ✅ جلب اسم المريض من query string

  const [activeTab, setActiveTab] = useState(0);

  // State لكل تاب
  const [patientData, setPatientData] = useState({
    name: patientNameFromURL, // ✅ نحط اسم المريض هنا مباشرة
    age: "",
    gender: "",
    visitDate: "",
    patientID: "",
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
//   const [adminData, setAdminData] = useState({});

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
      {/* ✅ نعرض اسم المريض هنا */}
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Eye Medical Record {patientNameFromURL ? `for ${patientNameFromURL}` : ""}
      </h2>

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
          <PatientComplaint data={complaintData} setData={setComplaintData} />
        )}
        {activeTab === 1 && (
          <MedicalHistory
            data={historyData}
            setData={setHistoryData}
            patientName={patientNameFromURL} // ✅ نبعت اسم المريض هنا
          />
        )}
        {activeTab === 2 && (
          <Investigations
            data={investigationsData}
            setData={setInvestigationsData}
          />
        )}
        {activeTab === 3 && (
          <EyeExaminationForm data={eyeExamData} setData={setEyeExamData} />
        )}
        {activeTab === 4 && (
          <PastImageTests files={pastImagesData} setFiles={setPastImagesData} />
        )}
        {activeTab === 5 && (
          <Operations data={operationsData} setData={setOperationsData} />
        )}
        {activeTab === 6 && (
          <PrescriptionForm
            data={prescriptionsData}
            setData={setPrescriptionsData}
          />
        )}
        {activeTab === 7 && (
          <DiagnosesTab data={diagnosesData} setData={setDiagnosesData} />
        )}
      </Box>
    </Box>
  );
};

export default MedicalRecord;
