import React from "react";

const ContactInfo = ({ formData, handleChange }) => {
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
          handleChange(e);
        }
    };
  return (
    <div className="mb-4">
      <h4>Contact Information</h4>
      <div className="form-group row mb-3">

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
      </div>
      
        

      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="email" 
          value={formData.email}
          onChange={handleChange}
        />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
