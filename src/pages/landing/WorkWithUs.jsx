import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const Contact = () => {

  // Define el asunto fijo
  const lockedSubject = "Postulación a trabajar con Newland Propiedades";

  // Función para manejar el envío del formulario
  const handleFormSubmit = async (formData) => {
    const formattedData = new URLSearchParams();
    formattedData.append("nombre", formData.nombre);
    formattedData.append("email", formData.email);
    formattedData.append("mensaje", formData.mensaje);
    formattedData.append("asunto", lockedSubject); // Agregar el asunto fijo al envío de datos

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
        title="Trabaja con Nosotros" 

        backgroundImage="/WorkWithUsBanner.jpg"
      />

      {/* Agregar el componente JoinUs aquí */}
      <JoinUs
          title="¡Únete a nuestro equipo!"
          description={[
              "No importa si tienes o no experiencia tampoco nos importa tu edad,",
              "lo que sí nos importa es que seas dinámico, proactivo, creativo, apasionado, positivo, colaborativo, flexible, con ganas de trabajar, emprendedor, optimista, alegre, entusiasta, constructivo, comprometido…",
              "Nos encantaría saber de ti."
          ]}
          emailText="contacto@newlandpropiedades.cl"
          additionalInfo={(
            <div className="flex items-center space-x-2 mt-2">
              <img 
                src="estados-unidos.png" 
                alt="American Flag" 
                className="w-6 sm:w-8 h-auto object-contain"
              />
              <span className="text-sm sm:text-md font-medium text-[#175EA5]">
                We speak English
              </span>
            </div>
          )}
          lockedSubject={lockedSubject} // Pasa el asunto como propiedad
          buttonText="Enviar"
          onSubmit={handleFormSubmit}
      />
      <FloatingSocialButtons />

      <Footer />
    </div>
  );
};

export default Contact;
