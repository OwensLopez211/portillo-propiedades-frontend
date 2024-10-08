import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';
import ContactForm from '../components/ContactPage/ContactForm';
import SecondaryHero from '../components/General/SecundaryHero';

const Contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero 
        title="Contacto" 
        subtitle="Nos encantaría saber de ti. ¡Ponte en contacto con nosotros!" 
        backgroundImage="/path/to/your/background-image.jpg" // Cambia a la ruta de tu imagen
      />
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-4xl font-bold">CONTACTO</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
