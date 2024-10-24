import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm'; // Asegúrate de que la ruta sea correcta

const Contact = () => {

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar lógica adicional para procesar los datos del formulario,
    // como enviarlos a un servidor o una API.
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero 
        title="Trabaja con Nosotros" 
        subtitle="Nos encantaría saber de ti. ¡Ponte en contacto con nosotros!" 
        backgroundImage="/WorkWithUsBanner.jpg" // Cambia a la ruta de tu imagen
      />

      {/* Agregar el componente JoinUs aquí */}
      <JoinUs
        title="¡Únete a nuestro equipo!"
        description="No importa si tienes o no experiencia. Lo que sí nos importa es que seas dinámico, proactivo, y apasionado."
        emailText="Contacto@newlandpropiedades.cl"
        lockedSubject="Postulación a trabajar con Newland Propiedades" // El asunto está bloqueado
        buttonText="Enviar"
        onSubmit={handleFormSubmit}
      />
      <Footer />
    </div>
  );
};

export default Contact;