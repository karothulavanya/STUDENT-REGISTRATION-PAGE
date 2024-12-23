import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const StudentInfo = ({ formData, handleChange, handleDateChange }) => {
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!formData.firstName) {
      setError("First Name is required");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="mb-4">
      <h4>Student Information</h4>
      <div className="form-group row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={validateForm}
          />
          {error && <div className="text-danger">{error}</div>}
        </div>

        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-md-6 mb-3">
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY"
            value={formData.dob ? dayjs(formData.dob) : null}
            onChange={(date) => handleDateChange(date ? date.toDate() : null)}
            placeholder="Date of Birth"
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Student ID"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Gender</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label className="ms-3">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
