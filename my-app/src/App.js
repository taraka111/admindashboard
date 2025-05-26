import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Survey from './pages/Survey';
import Collaborations from './pages/Collaborations';
import Investors from './pages/Investors';
import Psychologists from './pages/Psychologists';
import Navbar from './pages/Navbar'; // You can move this to components later

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/psychologists" element={<Psychologists />} />
      </Routes>
    </Router>
  );
}

export default App;
