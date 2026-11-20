
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface PatientData {
  first_name: string;
  last_name: string;
  age: string;
  id_no: string;
  phone: string;
  email: string;
  study_type: string;
}

const Patient = () => {
  const [patient, setPatient] = useState<PatientData>({
    first_name: "",
    last_name: "",
    age: "",
    id_no: "",
    phone: "",
    email: "",
    study_type: "",
  });

  const [previous, setPrevious] = useState<File | null>(null);

  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrevious(e.target.files?.[0] ?? null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(patient).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (previous) {
      formData.append("previous_report", previous);
    }

    console.log("Patient details:", patient);
    console.log("Previous report:", previous);

    // Send formData to your backend API here.

    setMessage("Patient details are ready for submission.");
  };

  return (
    <div className="patient-container">
      <div className="patient-card">

        <div className="patient-heading">
          <h2>Patient Registration</h2>
          <p>Enter the patient's personal and medical information below.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <h3 className="form-section-title">Personal Information</h3>

          <div className="patient-grid">

            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Enter first name"
                value={patient.first_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Enter last name"
                value={patient.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                name="age"
                placeholder="Enter age"
                min="0"
                value={patient.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="id_no">National ID / Passport</label>
              <input
                id="id_no"
                type="text"
                name="id_no"
                placeholder="Enter ID number"
                value={patient.id_no}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={patient.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email address"
                value={patient.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="study_type">Study Type</label>
              <input
                id="study_type"
                type="text"
                name="study_type"
                placeholder="Enter study type"
                value={patient.study_type}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="report-upload">
            <h3>Previous Medical Report</h3>
            <p>Upload an existing report if available (PDF, JPG or PNG).</p>

            <label htmlFor="previous_report" className="upload-box">
              <span>＋</span>
              <strong>Choose a file</strong>
              <small>
                {previous ? previous.name : "PDF, JPG or PNG"}
              </small>
            </label>

            <input
              id="previous_report"
              type="file"
              accept=" .pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
          </div>

          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="submit-patient">
            Register Patient
          </button>

        </form>
      </div>
    </div>
  );
};

export default Patient;
