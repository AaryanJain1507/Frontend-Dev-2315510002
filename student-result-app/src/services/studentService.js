const API_URL = 'http://localhost:3001/students';

// 1. READ Operation: Fetches all students
export const getAllStudents = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch student list.');
    }
    return response.json();
};

// 2. CREATE Operation: Adds a new student
export const createStudent = async (studentData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    });
    if (!response.ok) {
        throw new Error('Failed to add new student.');
    }
    return response.json();
};

// 3. UPDATE Operation: Edits an existing student
export const updateStudent = async (id, studentData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    });
    if (!response.ok) {
        throw new Error(`Failed to update student with ID ${id}.`);
    }
    return response.json();
};

// 4. DELETE Operation: Removes a student
export const deleteStudent = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`Failed to delete student with ID ${id}.`);
    }
};