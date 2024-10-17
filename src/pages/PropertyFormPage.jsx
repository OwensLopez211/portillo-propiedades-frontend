import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import SecondaryHero from '../components/General/SecundaryHero';
import JoinUs from '../components/WorkWithUsPage/JoinUsForm'; // Asegúrate de que la ruta sea correcta

const Contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero 
        title="Entreganos tu propiedad" 
        backgroundImage="/path/to/your/background-image.jpg" // Cambia a la ruta de tu imagen
      />

      {/* Agregar el componente JoinUs aquí */}
      <JoinUs />

      <Footer />
    </div>
  );
};

export default Contact;
