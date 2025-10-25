import React, { useState } from 'react';

const PendingPrescriptions = () => {
  const [filter, setFilter] = useState('All');

  const prescriptions = [
    { 
      id: 1, 
      patientName: 'John Doe', 
      medication: 'Eye Drops - 2x daily', 
      date: 'Today, 09:00 AM', 
      status: 'Pending' 
    },
    { 
      id: 2, 
      patientName: 'Jane Smith', 
      medication: 'Antibiotic Ointment', 
      date: 'Today, 10:30 AM', 
      status: 'Cancelled' 
    },
    { 
      id: 3, 
      patientName: 'Michael Johnson', 
      medication: 'Pain Reliever', 
      date: 'Yesterday', 
      status: 'Completed' 
    },
    { 
      id: 4, 
      patientName: 'Emily Davis', 
      medication: 'Vitamin Supplements', 
      date: '2 days ago', 
      status: 'Pending' 
    }
  ];

  const filteredPrescriptions = filter === 'All' 
    ? prescriptions 
    : prescriptions.filter(pres => pres.status === filter);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-secondary/30 text-brand';
      case 'Completed':
        return 'bg-accent/20 text-accent';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral text-text';
    }
  };

  return (
    <div className="bg-primary p-6 rounded-xl shadow-sm border border-neutral">
      <h3 className="text-xl font-heading font-bold text-text mb-6">Pending Prescriptions</h3>
      
      {/* Filter */}
      <div className="flex items-center gap-2 mb-4">
        <label className="text-sm font-medium text-text/70">Filter by status:</label>
        <select 
          className="rounded-lg border-neutral bg-neutral text-text focus:ring-accent focus:border-accent text-sm py-1"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Prescriptions List */}
      <div className="space-y-4">
        {filteredPrescriptions.map(prescription => (
          <div 
            key={prescription.id} 
            className="flex justify-between items-center p-4 border border-neutral rounded-lg hover:bg-neutral/30 transition-colors"
          >
            <div>
              <p className="font-heading font-medium text-text">{prescription.patientName}</p>
              <p className="text-sm text-text/70">{prescription.medication}</p>
              <p className="text-xs text-text/50 mt-1">{prescription.date}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(prescription.status)}`}>
                {prescription.status}
              </span>
              <button className="mt-2 block text-brand hover:text-brand/80 text-sm font-medium">
                {prescription.status === 'Pending' ? 'Review' : prescription.status === 'Cancelled' ? 'Details' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 flex justify-end">
        <button className="text-brand hover:text-brand/80 font-medium text-sm flex items-center gap-1">
          <span>View All</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default PendingPrescriptions;