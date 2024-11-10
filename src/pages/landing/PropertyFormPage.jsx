import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const EntreganosTuPropiedad = () => {

  const handleFormSubmit = async (formData) => {
    const formattedData = new URLSearchParams();
    formattedData.append("nombre", formData.name);
    formattedData.append("email", formData.email);
    formattedData.append("mensaje", formData.message);

    try {
        const response = await fetch('https://newlandpropiedades.cl/api/contact/enviar-correo/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formattedData.toString(),
        });
        const result = await response.json();

        if (response.ok) {
            alert("Formulario enviado exitosamente. Nos pondremos en contacto contigo pronto.");
        } else {
            console.error("Error al enviar el formulario:", result.error);
            alert("Hubo un problema al enviar el formulario. Inténtalo nuevamente.");
        }
    } catch (error) {
        console.error("Error de red:", error);
        alert("Hubo un problema de conexión. Por favor, intenta más tarde.");
    }
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
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default EntreganosTuPropiedad;
