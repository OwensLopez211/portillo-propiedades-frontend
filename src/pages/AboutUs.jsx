// src/pages/AboutUs.js
import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import SecondaryHero from '../components/General/SecundaryHero';
import Footer from '../components/General/Footer';
import AboutUsComponent from '../components/AboutUsPage/AboutUsComponent';
const AboutUs = () => {
  return (
    <div>
      {/* Topbar and Navbar */}
      <Topbar />
      <Navbar />

      {/* Secondary Hero Section */}
      <SecondaryHero 
        title="Quiénes Somos"
        backgroundImage="/path-to-your-image.jpg" // Cambia esto por la ruta de tu imagen
      />

    <AboutUsComponent />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
