import React, { useState } from "react";
import "./CheckUpForm.css";

const PediatricEyeRecord = () => {
  const [formData, setFormData] = useState({
    name: "", age: "", gender: "", visitDate: "",
    rightEye: "", leftEye: "", eyePressure: "", pupilReaction: "",
    eyeAlignment: "", eyeMovements: "", sphere: "", cylinder: "", axis: "",
    anteriorObservation: "", fundusObservation: "",
    previousHistory: "", familyHistory: "", allergies: "",
    additionalNotes: "", recommendations: "",
    checkupDateTime: "", doctorName: "", followUpDate: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleGenderClick = gender => {
    setFormData(prev => ({ ...prev, gender }));
    if (errors.gender) {
      setErrors(prev => ({ ...prev, gender: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Patient name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.visitDate) newErrors.visitDate = "Visit date is required";
    if (!formData.doctorName.trim()) newErrors.doctorName = "Doctor name is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClear = () => {
    setFormData({
      name: "", age: "", gender: "", visitDate: "",
      rightEye: "", leftEye: "", eyePressure: "", pupilReaction: "",
      eyeAlignment: "", eyeMovements: "", sphere: "", cylinder: "", axis: "",
      anteriorObservation: "", fundusObservation: "",
      previousHistory: "", familyHistory: "", allergies: "",
      additionalNotes: "", recommendations: "",
      checkupDateTime: "", doctorName: "", followUpDate: ""
    });
    setErrors({});
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log(formData);
      alert("Record saved successfully!");
    }
  };

  return (
    <div className="form-wrapper">
      <header className="form-header">
        <h1>Pediatric Eye Examination Record</h1>
        <p>Comprehensive form for documenting pediatric eye exams</p>
      </header>

      {/* Patient Information */}
      <section className="form-section">
        <h2>Patient Information</h2>
        <div className="grid">
          <div className="form-group">
            <label>Patient Name</label>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`input-field ${errors.name ? 'error' : ''}`} 
              placeholder="Enter patient name" 
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label>Age</label>
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              className={`input-field ${errors.age ? 'error' : ''}`} 
              placeholder="Enter age" 
              min="0" 
              max="18"
            />
            {errors.age && <span className="error-text">{errors.age}</span>}
          </div>
          
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-buttons">
              {["Male", "Female", "Other"].map(g => (
                <button
                  key={g}
                  type="button"
                  className={`gender-btn ${formData.gender === g ? "active" : ""}`}
                  onClick={() => handleGenderClick(g)}
                >{g}</button>
              ))}
            </div>
            {errors.gender && <span className="error-text">{errors.gender}</span>}
          </div>
          
          <div className="form-group">
            <label>Visit Date</label>
            <input 
              type="date" 
              name="visitDate" 
              value={formData.visitDate} 
              onChange={handleChange} 
              className={`input-field ${errors.visitDate ? 'error' : ''}`} 
            />
            {errors.visitDate && <span className="error-text">{errors.visitDate}</span>}
          </div>
        </div>
      </section>

      {/* Eye Test Fields */}
      <section className="form-section">
        <h2>Eye Examination Results</h2>
        <div className="grid">
          <div className="form-group">
            <label>Right Eye</label>
            <input 
              name="rightEye" 
              value={formData.rightEye} 
              onChange={handleChange} 
              className="input-field" 
              placeholder="Right eye test result" 
            />
          </div>
          
          <div className="form-group">
            <label>Left Eye</label>
            <input 
              name="leftEye" 
              value={formData.leftEye} 
              onChange={handleChange} 
              className="input-field" 
              placeholder="Left eye test result" 
            />
          </div>
          
          <div className="form-group">
            <label>Eye Pressure</label>
            <input 
              name="eyePressure" 
              value={formData.eyePressure} 
              onChange={handleChange} 
              className="input-field" 
              type="number" 
              placeholder="mmHg" 
            />
          </div>
          
          <div className="form-group">
            <label>Pupil Reaction</label>
            <select name="pupilReaction" value={formData.pupilReaction} onChange={handleChange} className="input-field">
              <option value="">Select reaction</option>
              <option>Brisk</option>
              <option>Sluggish</option>
              <option>Non-reactive</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Eye Alignment</label>
            <select name="eyeAlignment" value={formData.eyeAlignment} onChange={handleChange} className="input-field">
              <option value="">Select alignment</option>
              <option>Orthophoria</option>
              <option>Esotropia</option>
              <option>Exotropia</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Eye Movements</label>
            <select name="eyeMovements" value={formData.eyeMovements} onChange={handleChange} className="input-field">
              <option value="">Select movements</option>
              <option>Full</option>
              <option>Restricted</option>
            </select>
          </div>
          
          <div className="form-group full-width">
            <label>Glasses Prescription</label>
            <div className="glasses-grid">
              <div>
                <input name="sphere" value={formData.sphere} onChange={handleChange} className="input-field" placeholder="Sphere" />
                <span className="input-label">Sphere</span>
              </div>
              <div>
                <input name="cylinder" value={formData.cylinder} onChange={handleChange} className="input-field" placeholder="Cylinder" />
                <span className="input-label">Cylinder</span>
              </div>
              <div>
                <input name="axis" value={formData.axis} onChange={handleChange} className="input-field" placeholder="Axis" />
                <span className="input-label">Axis</span>
              </div>
            </div>
          </div>
          
          <div className="form-group full-width">
            <label>Anterior Segment Notes</label>
            <textarea 
              name="anteriorObservation" 
              value={formData.anteriorObservation} 
              onChange={handleChange} 
              className="textarea-field" 
              placeholder="Notes about cornea, iris, lens"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group full-width">
            <label>Fundus/Retina Notes</label>
            <textarea 
              name="fundusObservation" 
              value={formData.fundusObservation} 
              onChange={handleChange} 
              className="textarea-field" 
              placeholder="Notes about retina and optic nerve"
              rows="3"
            ></textarea>
          </div>
        </div>
      </section>
    <section className="form-section">
        <h2>Eye Examination Results</h2>
        <div className="grid">
      {/* حقول Right Eye, Left Eye ... */}
        <div className="form-group full-width">
      <label>Upload Eye Examination Image</label>
        <input
        type="file"
        accept="image/*"
        className="input-field"
        onChange={handleFileChange}
      />
      {eyeImage && <p className="input-label">Selected file: {eyeImage.name}</p>}
      </div>
    </div>
    </section>



      {/* Medical & Family History */}
      <section className="form-section">
        <h2>Medical & Family History</h2>
        <div className="grid">
          <div className="form-group">
            <label>Previous Eye History</label>
            <textarea 
              name="previousHistory" 
              value={formData.previousHistory} 
              onChange={handleChange} 
              className="textarea-field" 
              placeholder="Any previous eye problems"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Family History</label>
            <textarea 
              name="familyHistory" 
              value={formData.familyHistory} 
              onChange={handleChange} 
              className="textarea-field" 
              placeholder="Any family eye problems"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label>Allergies / Medical Conditions</label>
            <textarea 
              name="allergies" 
              value={formData.allergies} 
              onChange={handleChange} 
              className="textarea-field" 
              placeholder="Any allergies or medical conditions"
              rows="3"
            ></textarea>
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section className="form-section">
        <h2>Additional Notes</h2>
        <div className="form-group full-width">
          <textarea 
            name="additionalNotes" 
            value={formData.additionalNotes} 
            onChange={handleChange} 
            className="textarea-field" 
            placeholder="Any additional notes"
            rows="4"
          ></textarea>
        </div>
      </section>

      {/* Follow-up Recommendations */}
      <section className="form-section">
        <h2>Follow-up Recommendations</h2>
        <div className="form-group full-width">
          <textarea 
            name="recommendations" 
            value={formData.recommendations} 
            onChange={handleChange} 
            className="textarea-field" 
            placeholder="Recommendations and treatment plan"
            rows="4"
          ></textarea>
        </div>
      </section>

      {/* Administrative Details */}
      <section className="form-section">
        <h2>Administrative Details</h2>
        <div className="grid">
          <div className="form-group">
            <label>Checkup Date & Time</label>
            <input 
              name="checkupDateTime" 
              value={formData.checkupDateTime} 
              onChange={handleChange} 
              type="datetime-local" 
              className="input-field" 
            />
          </div>
          
          <div className="form-group">
            <label>Doctor Name</label>
            <input 
              name="doctorName" 
              value={formData.doctorName} 
              onChange={handleChange} 
              placeholder="Enter doctor name" 
              className={`input-field ${errors.doctorName ? 'error' : ''}`} 
            />
            {errors.doctorName && <span className="error-text">{errors.doctorName}</span>}
          </div>
          
          <div className="form-group">
            <label>Follow-up Date</label>
            <input 
              name="followUpDate" 
              value={formData.followUpDate} 
              onChange={handleChange} 
              type="date" 
              className="input-field" 
            />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="form-actions">
        <button className="btn btn-clear" onClick={handleClear}>Clear Form</button>
        <button className="btn btn-save" onClick={handleSave}>Save Record</button>
      </div>
    </div>
  );
};

export default PediatricEyeRecord;
