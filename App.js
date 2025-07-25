// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Router>
      <div>
        <h1>GitHub Explorer</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

