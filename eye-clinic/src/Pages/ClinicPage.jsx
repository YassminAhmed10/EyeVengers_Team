import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Clinic.css";

// Equipment Component (inline)
function Equipment() {
  const equipment = [
    { id: 1, name: "Slit Lamp", type: "Diagnostic", status: "Working", last: "2025-09-12", next: "2026-03-12" },
    { id: 2, name: "Phoropter", type: "Refraction", status: "Needs Calibration", last: "2025-05-01", next: "2025-11-01" },
    { id: 3, name: "OCT Machine", type: "Imaging", status: "Working", last: "2025-08-15", next: "2026-02-15" },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">Ophthalmic Equipment</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Type</th><th>Status</th><th>Last Maintenance</th><th>Next Maintenance</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id} className={item.status !== "Working" ? "attention" : ""}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.last}</td>
              <td>{item.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sanitization Component (inline)
function Sanitization() {
  const areas = [
    { id: 1, area: "Exam Room", frequency: "Daily", last: "2025-10-26", next: "2025-10-27", status: "Done" },
    { id: 2, area: "Waiting Room", frequency: "Daily", last: "2025-10-26", next: "2025-10-27", status: "Pending" },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">Sanitization</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th><th>Frequency</th><th>Last Cleaned</th><th>Next Cleaning</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {areas.map((a) => (
            <tr key={a.id} className={a.status === "Pending" ? "attention" : ""}>
              <td>{a.area}</td>
              <td>{a.frequency}</td>
              <td>{a.last}</td>
              <td>{a.next}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Supplies Component (inline)
function Supplies() {
  const supplies = [
    { id: 1, name: "Gloves", qty: 8, reorder: 5, supplier: "MediSupply" },
    { id: 2, name: "Syringes", qty: 1, reorder: 3, supplier: "MedEx" },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">Supplies</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th><th>Quantity</th><th>Reorder Level</th><th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map((s) => (
            <tr key={s.id} className={s.qty <= s.reorder ? "low-stock" : ""}>
              <td>{s.name}</td>
              <td>{s.qty}</td>
              <td>{s.reorder}</td>
              <td>{s.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Maintenance Component (inline)
function MaintenanceTasks() {
  const tasks = [
    { id: 1, task: "Replace sterilizer gasket", category: "Equipment", due: "2025-11-15", status: "Scheduled" },
    { id: 2, task: "Air filter cleaning", category: "HVAC", due: "2025-12-01", status: "Pending" },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">Maintenance Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th><th>Category</th><th>Due Date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} className={t.status === "Pending" ? "attention" : ""}>
              <td>{t.task}</td>
              <td>{t.category}</td>
              <td>{t.due}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Waste Management Component (inline)
function WasteManagement() {
  const waste = [
    { id: 1, type: "Biohazard", schedule: "Mon & Thu", last: "2025-10-24", next: "2025-10-27" },
    { id: 2, type: "Sharps", schedule: "Weekly", last: "2025-10-23", next: "2025-10-30" },
  ];

  return (
    <div className="section-card">
      <h2 className="section-title">Waste Management</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th><th>Schedule</th><th>Last Collected</th><th>Next Collection</th>
          </tr>
        </thead>
        <tbody>
          {waste.map((w) => (
            <tr key={w.id}>
              <td>{w.type}</td>
              <td>{w.schedule}</td>
              <td>{w.last}</td>
              <td>{w.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Reports Component (inline)
function Reports() {
  const summary = {
    equipment: 2,
    pendingSanitization: 1,
    lowSupplies: 1,
    maintenanceTasks: 2,
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Reports</h2>
      <div className="report-grid">
        <div className="report-card">Equipment Alerts: {summary.equipment}</div>
        <div className="report-card">Pending Sanitization: {summary.pendingSanitization}</div>
        <div className="report-card">Low Supplies: {summary.lowSupplies}</div>
        <div className="report-card">Maintenance Tasks: {summary.maintenanceTasks}</div>
      </div>
    </div>
  );
}

// Main ClinicPage Component
function ClinicPage() {
  const [activeSection, setActiveSection] = useState("equipment");
  const location = useLocation();

  const renderSection = () => {
    switch (activeSection) {
      case "equipment":
        return <Equipment />;
      case "sanitization":
        return <Sanitization />;
      case "supplies":
        return <Supplies />;
      case "maintenance":
        return <MaintenanceTasks />;
      case "waste":
        return <WasteManagement />;
      case "reports":
        return <Reports />;
      default:
        return <Equipment />;
    }
  };

  const navigationItems = [
    { key: "equipment", label: "Ophthalmic Equipment", icon: "medical_services" },
    { key: "sanitization", label: "Sterilization", icon: "clean_hands" },
    { key: "supplies", label: "Medical Supplies", icon: "medical_information" },
    { key: "maintenance", label: "Maintenance", icon: "engineering" },
    { key: "waste", label: "Waste Management", icon: "delete" },
    { key: "reports", label: "Reports", icon: "assessment" }
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="w-98 bg-brand text-white flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3">
          <img 
            className="w-14 h-14 rounded-full object-cover border-2 border-white"
            src="/src/images/logo.png"
            alt="Clinic Logo"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-lg leading-tight">Dr. Mohab Khairy</p>
            <span className="text-sm text-white/70 leading-tight">Ophthalmologist</span>
          </div>
        </div>

        <nav className="flex-1 px-6 py-4 flex flex-col gap-4">
          <Link 
            to="/" 
            className={`flex items-center gap-4 px-6 py-4 rounded-xl text-white text-lg transition-colors ${
              location.pathname === "/" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">dashboard</span>
            <span className="font-semibold">Dashboard</span>
          </Link>

          <Link 
            to="/patients" 
            className={`flex items-center gap-4 px-6 py-4 rounded-xl text-white text-lg transition-colors ${
              location.pathname === "/patients" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">group</span>
            <span className="font-semibold">Patients</span>
          </Link>

          <Link 
            to="/appointments" 
            className={`flex items-center gap-4 px-6 py-4 rounded-xl text-white text-lg transition-colors ${
              location.pathname === "/appointments" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">calendar_month</span>
            <span className="font-semibold">Appointments</span>
          </Link>

          <Link 
            to="/finance" 
            className={`flex items-center gap-4 px-6 py-4 rounded-xl text-white text-lg transition-colors ${
              location.pathname === "/finance" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">receipt_long</span>
            <span className="font-semibold">Finance</span>
          </Link>

          <Link 
            to="/clinic-system" 
            className={`flex items-center gap-4 px-6 py-4 rounded-xl text-white text-lg transition-colors ${
              location.pathname === "/clinic-system" ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">local_hospital</span>
            <span className="font-semibold">Clinic Management</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/20">
          <Link 
            to="/settings" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            <span className="material-symbols-outlined text-white">settings</span>
            <span className="font-medium">Settings</span>
          </Link>
          <div className="flex items-center gap-3 mt-4 p-2">
            <img 
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
              src="src/images/doctor.jpg"
              alt="Dr. Mohab Khairy"
            />
            <div>
              <p className="font-heading font-semibold">Dr. Mohab Khairy</p>
              <p className="text-sm text-white/70">Ophthalmologist</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="clinic-operations-container">
        <div className="operations-header">
          <div className="header-content">
            <h1>Clinic System</h1>
            <p>Manage clinic operations efficiently</p>

            {/* Navigation Tabs */}
            <nav className="operations-nav">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  className={`nav-item ${activeSection === item.key ? "active" : ""}`}
                  onClick={() => setActiveSection(item.key)}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <main className="operations-main">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default ClinicPage;