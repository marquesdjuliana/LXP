import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CoursesProfessor from './pages/CoursesProfessor';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/courses-professor" element={<CoursesProfessor/>} />
      <Route path="/course-details" element={<Courses/>} />


    </Routes>
  );
}

export default App;
