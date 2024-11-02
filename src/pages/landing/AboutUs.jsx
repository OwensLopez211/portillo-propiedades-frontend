// src/pages/AboutUs.js
import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import SecondaryHero from '../../components/General/SecundaryHero';
import Footer from '../../components/General/Footer';
import AboutUsComponent from '../../components/AboutUsPage/AboutUsComponent';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const AboutUs = () => {
  return (
    <div>
      {/* Topbar and Navbar */}
      <Topbar />
      <Navbar />

      {/* Secondary Hero Section */}
      <SecondaryHero 
        title="Quiénes Somos"
        backgroundImage="/aboutusBanner.jpg" // Cambia esto por la ruta de tu imagen
      />

    <AboutUsComponent />
    <FloatingSocialButtons/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;