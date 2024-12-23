import React from "react";

import moment from "moment";

const StudentsList = ({ students, handleDelete,handleEdit }) => {


  const confirmDelete = (id) => {
    console.log("Deleting student with ID:", id); // Debugging
    const isConfirmed = window.confirm("Are you sure to delete this student?");
    if (isConfirmed) {
      handleDelete(id);
    }
  };

  const handleEditAndNavigate = (index) => {
    const student = students[index];
    if (!student || !student.id) {
      console.error("Student or student id is missing.");
      return; 
    } 
    handleEdit(index);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <h3>Students List</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.no</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              const formattedDob = moment(student.dob).format("DD-MM-YYYY");

              return (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{formattedDob}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEditAndNavigate(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => confirmDelete(index)}


                      
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;

