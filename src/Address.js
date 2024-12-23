import React from "react";

const Address = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <h4>Address</h4>

      {}
      <div className="form-group row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
      </div>

      {}
      <div className="form-group row mb-3">
        <div className="col-md-6">
          <select
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Rajasthan</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-control"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option>Select Country</option>
            <option>Africa</option>
            <option>America</option>
            <option>Canada</option>
            <option>England</option>
            <option>France</option>
            <option>India</option>
            <option>Japan</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Address;
