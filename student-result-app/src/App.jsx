import React, { useState } from 'react';
import StudentList from './components/StudentList.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentDetails from './components/StudentDetails.jsx';
import { getAllStudents, deleteStudent } from './services/studentService.js';

function App() {
    const [students, setStudents] = useState([]);
    const [currentView, setCurrentView] = useState('list');
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleLoadStudents = async () => {
        try {
            const data = await getAllStudents();
            setStudents(data);
            setCurrentView('list');
            setSelectedStudent(null);
        } catch (error) {
            alert('Error loading students: ' + error.message);
        }
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setCurrentView('edit');
    };

    const handleViewDetails = (student) => {
        setSelectedStudent(student);
        setCurrentView('details');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this student?')) return;

        try {
            await deleteStudent(id);
            setStudents(students.filter(s => s.id !== id));
        } catch (error) {
            alert('Error deleting student: ' + error.message);
        }
    };

    let content;

    if (currentView === 'list') {
        content = (
            <StudentList
                students={students}
                loadStudents={handleLoadStudents}
                setCurrentView={setCurrentView}
                handleEdit={handleEdit}
                handleViewDetails={handleViewDetails}
                handleDelete={handleDelete}
            />
        );
    } else if (currentView === 'add' || currentView === 'edit') {
        content = (
            <StudentForm
                currentStudent={selectedStudent}
                setCurrentView={setCurrentView}
                loadStudents={handleLoadStudents}
            />
        );
    } else if (currentView === 'details') {
        content = (
            <StudentDetails
                student={selectedStudent}
                setCurrentView={setCurrentView}
            />
        );
    }

    return (
        <div style={styles.page}>
            <div style={styles.headerBox}>
                <h1 style={styles.title}>🏠 Student Result Management</h1>
            </div>

            <div style={styles.mainContentBox}>
                {content}
            </div>
        </div>
    );
}

const styles = {
    page: {
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    headerBox: {
        marginBottom: "20px",
        textAlign: "center",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
    },
    mainContentBox: {
        width: "100%",
        maxWidth: "900px",
        display: "flex",
        justifyContent: "center",
    }
};

export default App;
