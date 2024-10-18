// src/pages/Services.jsx
import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import SecondaryHero from '../components/General/SecundaryHero';
import Footer from '../components/General/Footer';
import ServiceSection from '../components/ServicePage/ServiceSection';
import FloatingSocialButtons from '../components/General/FloatingSocialButtons'

const Services = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero
        title="Servicios"
        subtitle=""
        backgroundImage="/ServicesBanner.jpg"
      />

      <div className="container mx-auto px-4 py-10 max-w-5xl">  {/* Añadido max-w-5xl para limitar el ancho máximo */}
        <ServiceSection
          image="/Service1.png"
          title="Valorización de su Propiedad"
          description="Conozca el verdadero valor de su propiedad con nuestra experiencia en el mercado inmobiliario. Realizamos un análisis exhaustivo y detallado de su propiedad, considerando factores como la ubicación, el estado actual y las tendencias del mercado. Así, podrá tomar decisiones informadas sobre la venta o arrendamiento de su propiedad."
        />
        
        <ServiceSection
          image="/Service2.png"
          title="Corretaje de Propiedades"
          description="Deje que nuestros expertos se encarguen de la venta o arriendo de su propiedad. Ofrecemos un servicio integral que incluye la promoción, gestión de visitas y negociación, asegurando que obtenga el mejor trato. Nos dedicamos a encontrar el comprador o arrendatario perfecto para su propiedad, facilitando cada paso del proceso."
        />
        
        <ServiceSection
          image="/Service3.png"
          title="Preparación y Mantención de Propiedades"
          description="Transforme su propiedad en un espacio atractivo y funcional con nuestros servicios de mantención. Nos encargamos de todo, desde pintura y limpieza hasta jardinería y cerrajería. Prepararemos su propiedad para la venta o arriendo, garantizando que destaque en el mercado y capte la atención de potenciales compradores o arrendatarios."
        />

        {/* Añade más secciones según sea necesario */}
      </div>
      <FloatingSocialButtons />

      <Footer />
    </div>
  );
};

export default Services;
