import React from 'react';

const StudentList = ({
  students,
  loadStudents,
  setCurrentView,
  handleEdit,
  handleViewDetails,
  handleDelete
}) => {

  return (
    <div className="card">
      <h3>Student List</h3>

      <div style={{ marginBottom: "16px" }}>
        <button onClick={loadStudents} className="primary" style={{ marginRight: "10px" }}>
          Load Data
        </button>

        <button onClick={() => setCurrentView('add')}>
          + Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p style={{ color: "#777" }}>
          Click "Load Data" to view students.
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => handleViewDetails(s)} style={{ marginRight: "6px" }}>
                    View
                  </button>

                  <button onClick={() => handleEdit(s)} style={{ marginRight: "6px" }}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
};

export default StudentList;
