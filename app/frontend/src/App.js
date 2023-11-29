import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<div>Seja bem-vindo!</div>} />
    </Routes>
  );
}

export default App;
