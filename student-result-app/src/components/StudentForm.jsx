import React, { useState, useEffect } from 'react';
import { createStudent, updateStudent } from '../services/studentService.js';

const StudentForm = ({ currentStudent, setCurrentView, loadStudents }) => {

  const [formData, setFormData] = useState({
    name: "",
    section: "",
    marks: "",
    grade: ""
  });

  const isEdit = !!currentStudent;

  useEffect(() => {
    if (isEdit) setFormData(currentStudent);
  }, [currentStudent]);

  return (
    <div className="card">
      <h3>{isEdit ? "Edit Student" : "Add Student"}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = { ...formData, marks: parseInt(formData.marks) };
          isEdit
            ? updateStudent(currentStudent.id, data)
            : createStudent(data);

          loadStudents();
          setCurrentView("list");
        }}
      >

        <div className="form-group">
          <label>Name</label>
          <input
            className="input"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Section</label>
          <input
            className="input"
            name="section"
            value={formData.section}
            onChange={(e) =>
              setFormData({ ...formData, section: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Marks</label>
          <input
            type="number"
            className="input"
            name="marks"
            value={formData.marks}
            onChange={(e) =>
              setFormData({ ...formData, marks: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Grade</label>
          <input
            className="input"
            name="grade"
            value={formData.grade}
            onChange={(e) =>
              setFormData({ ...formData, grade: e.target.value })
            }
          />
        </div>

        {/* Button Row */}
        <div style={{ marginTop: "12px" }}>
          <button type="submit" className="primary" style={{ marginRight: "8px" }}>
            {isEdit ? "Save" : "Add"}
          </button>

          <button
            type="button"
            onClick={() => setCurrentView("list")}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default StudentForm;
