// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PropertyDetail from './pages/PropertyDetail';
import PropertiesPage from './pages/PropertiesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/propiedades" element={<PropertiesPage/>} />  
        <Route path="/servicios" element={<Services/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
