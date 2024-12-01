import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import JoinUs from '../../components/General/JoinUsForm';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const EntreganosTuPropiedad = () => {
  const lockedSubject = "Venta/arriendo de nueva propiedad";

  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero 
        title="Entréganos tu propiedad" 
        backgroundImage="/BannerTuPropiedad.jpg"
      />

      <JoinUs
        title="Entréganos tu propiedad"
        description={[
          <>
            Porque entendemos tus necesidades, <strong>VALORIZAMOS</strong> tu propiedad <strong>SIN COSTO</strong> y nos encargamos del resto.
          </>,
          "¡Vende o arrienda sin preocupaciones!",
          "Toda información que nos proporciones es absolutamente confidencial.",
          "Solo necesitamos tu email o número de celular para poder comunicarnos."
        ]}
        emailText="contacto@newlandpropiedades.cl"
        lockedSubject={lockedSubject}
        buttonText="Contactar"
      />
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default EntreganosTuPropiedad;