import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentsTable = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const appointments = [
    { time: "09:00 AM", patientName: "Yassmin Ahmed", status: "Completed" },
    { time: "10:30 AM", patientName: "Maysoun Hassan", status: "Cancelled" },
    { time: "11:15 AM", patientName: "Zeina Mohamed", status: "Completed" },
    { time: "01:00 PM", patientName: "Doha Waleed", status: "Upcoming" },
    { time: "02:00 PM", patientName: "Myrna Ahmed", status: "Upcoming" },
    { time: "03:30 PM", patientName: "Sara Mostfa", status: "Completed" },
    { time: "04:15 PM", patientName: "Mariam Mohamed", status: "Upcoming" },
    { time: "05:00 PM", patientName: "Laila Mohamed", status: "Cancelled" },
  ];

  const filteredAppointments =
    filter === "All"
      ? appointments
      : appointments.filter((apt) => apt.status === filter);

  const getStatusConfig = (status) => {
    switch (status) {
      case "Completed":
        return { icon: "check_circle", color: "text-green-500" };
      case "Cancelled":
        return { icon: "cancel", color: "text-red-500" };
      case "Upcoming":
        return { icon: "schedule", color: "text-blue-600" };
      default:
        return { icon: "help", color: "text-gray-500" };
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Today's Appointments</h3>

        <div className="flex items-center gap-2">
          <label
            className="text-sm font-medium text-gray-600"
            htmlFor="status-filter"
          >
            Filter:
          </label>
          <select
            className="rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-3"
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>Upcoming</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto h-[calc(100vh-200px)]">
        <div className="h-full overflow-y-auto rounded-lg">
          <table className="w-full text-left">
            <thead className="border-b border-gray-200 sticky top-0 bg-white">
              <tr>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                  Time
                </th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                  Patient Name
                </th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                  Status
                </th>
                <th className="py-3 px-4 font-semibold text-sm text-gray-600 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment, index) => {
                const statusConfig = getStatusConfig(appointment.status);
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-gray-900">
                      {appointment.time}
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {appointment.patientName}
                    </td>
                    <td className="py-4 px-4">
                      {/* ✅ تم تصحيح JSX هنا */}
                      <span className={`flex items-center gap-1 ${statusConfig.color}`}>
                        <span className="material-symbols-outlined text-lg">
                          {statusConfig.icon}
                        </span>
                        <span className="text-sm font-medium">
                          {appointment.status}
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {/* ✅ تم تصحيح navigate template literal */}
                      <button
                        onClick={() =>
                          navigate(`/emr?patient=${encodeURIComponent(appointment.patientName)}`)
                        }
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Medical Record
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTable;
