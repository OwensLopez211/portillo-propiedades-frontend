// src/pages/AboutUs.js
import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import SecondaryHero from '../components/General/SecundaryHero';
import Footer from '../components/General/Footer';

const AboutUs = () => {
  return (
    <div>
      {/* Topbar and Navbar */}
      <Topbar />
      <Navbar />

      {/* Secondary Hero Section */}
      <SecondaryHero 
        title="Quiénes Somos"
        subtitle="Somos una empresa dedicada a ofrecer las mejores soluciones en bienes raíces."
        backgroundImage="/path-to-your-image.jpg" // Cambia esto por la ruta de tu imagen
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Con años de experiencia en el sector inmobiliario, hemos logrado construir una reputación basada en la confianza y la calidad de nuestros servicios. Nos dedicamos a cumplir con las expectativas de nuestros clientes, ofreciendo soluciones personalizadas y adaptadas a sus necesidades.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Nuestro equipo está compuesto por profesionales altamente capacitados que trabajan con integridad, compromiso y excelencia. Nos esforzamos por ser los mejores en lo que hacemos, asegurando que cada cliente reciba la mejor atención y los mejores resultados.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
