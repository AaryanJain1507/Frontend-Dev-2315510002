import React from 'react';

const StudentDetails = ({ student, setCurrentView }) => {

  return (
    <div className="card">
      <h3>Student Details</h3>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Grade:</strong> {student.grade}</p>

      <button onClick={() => setCurrentView('list')} className="primary" style={{ marginTop: "14px" }}>
        Back
      </button>
    </div>
  );
};

export default StudentDetails;
