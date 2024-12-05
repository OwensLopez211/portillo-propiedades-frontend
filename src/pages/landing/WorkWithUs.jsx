import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const Contact = () => {
  const lockedSubject = "Postulación a trabajar con Newland Propiedades";

  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero 
        title="Trabaja con Nosotros"
        backgroundImage="/WorkWithUsBanner.jpg"
      />

      <JoinUs
        title="¡Únete a nuestro equipo!"
        description={[
          "No importa si tienes o no experiencia tampoco nos importa tu edad,",
          "lo que sí nos importa es que seas dinámico, proactivo, creativo, apasionado, positivo, colaborativo, flexible, con ganas de trabajar, emprendedor, optimista, alegre, entusiasta, constructivo, comprometido…",
          "Nos encantaría saber de ti."
        ]}
        emailText="Contacto@newlandpropiedades.cl"
        lockedSubject={lockedSubject}
        buttonText="Enviar"
      />
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default Contact;