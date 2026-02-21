import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
        <div className="App">
            <h1>Student ID: 101511264</h1>
            <h1>Student Name: Vy Ngo</h1>
            <h1>Student Information System</h1>
            <h5>Powered By: DevOps</h5>

            <StudentForm addStudent={addStudent} />

            <p>Developed By: Vy Ngo</p>

            <StudentList students={students} />
        </div>
    );
};

export default App;