import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm';

const EntreganosTuPropiedad = () => {

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
        title="Entréganos tu propiedad" 
        backgroundImage="/BannerTuPropiedad.jpg"
      />

      {/* Agregar el componente JoinUs aquí */}
      <JoinUs
          title="Entréganos tu propiedad"
          description={[
              "Porque entendemos tus necesidades, VALORIZAMOS tu propiedad SIN COSTO y NOS ENCARGAMOS DEL RESTO.",
              "¡Vende o arrienda sin preocupaciones!",
              "Toda información que nos proporciones es absolutamente confidencial.",
              "Solo necesitamos tu email o número de celular para poder comunicarnos."
          ]}
          emailText="contacto@newlandpropiedades.cl"
          lockedSubject="Venta/arriendo de nueva propiedad"
          buttonText="Contactar"
          onSubmit={handleFormSubmit}
          socialLinks={{
            instagram: "https://www.instagram.com/newland_propiedades_/",
            facebook: "https://www.facebook.com/newland_propiedades",
            tiktok: "https://www.tiktok.com/@newland_propiedades",
            messenger: "https://www.messenger.com/t/newland_propiedades",
          }}
      />
      <Footer />
    </div>
  );
};

export default EntreganosTuPropiedad;
