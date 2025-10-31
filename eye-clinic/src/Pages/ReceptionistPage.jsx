import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Appointments from "./AppointmentsPage";
import "../Appointment/ReceptionistSidebar";

const ReceptionistPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // أول ما الصفحة تفتح، يروح مباشرة لصفحة المواعيد
    navigate("/appointments");
  }, [navigate]);

  return null; // مش محتاج نعرض أي حاجة هنا
};

export default ReceptionistPage;
