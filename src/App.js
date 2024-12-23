import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentInfo from "./StudentInfo";
import Address from "./Address";
import ContactInfo from "./ContactInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentsList from "./StudentsList";
import dayjs from "dayjs";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: null,
    studentId: "",
    gender: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
  });

  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    if (!dayjs(date).isValid()) {
      console.error("Invalid date:", date);
      return;
    }
    setFormData((prev) => ({
      ...prev,
      dob: dayjs(date).format("YYYY-MM-DD"), 
    }));
  };
  
  const handleCreate = () => {
    if (editingIndex === null) {
      axios
        .post("http://localhost:5000/students", formData)
        .then((response) => {
          setStudents((prev) => [...prev, response.data]);
        })
        .catch((error) => console.error("Error adding student:", error));
    } else {
      handleUpdate();
    }
    setFormData({
      firstName: "",
      lastName: "",
      dob: null,
      studentId: "",
      gender: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
    });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const student = students[index];
    setFormData({
      ...student,
    });
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleUpdate = () => {
    const studentId = students[editingIndex].id;
    axios
      .put(`http://localhost:5000/students/${studentId}`, formData)
      .then(() => {
        const updatedStudents = students.map((student, index) =>
          index === editingIndex ? formData : student
        );
        setStudents(updatedStudents);
      })
      .catch((error) => console.error("Error updating student:", error));
  };

  const handleDelete = (index) => {
    const studentId = students[index].id;
    axios
      .delete(`http://localhost:5000/students/${studentId}`)
      .then(() => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate();
  };

  return (
    <div className="container">
      {showForm ? (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="card p-4 shadow-lg">
              <h2 className="text-center mb-4">Student Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <StudentInfo
                  formData={formData}
                  handleChange={handleChange}
                  handleDateChange={handleDateChange}
                />
                <Address formData={formData} handleChange={handleChange} />
                <ContactInfo formData={formData} handleChange={handleChange} />
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-light btn-block btn-lg"
                  >
                    {editingIndex === null ? "Submit" : "Update"}
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center my-4">
              <button
                className="btn btn-primary"
                onClick={() => setShowForm(false)}
              >
                View Students List
              </button>
            </div>
          </div>
        </div>
      ) : (
        <StudentsList
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
