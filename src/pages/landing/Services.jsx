// src/pages/Services.jsx
import React from 'react';
import Topbar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import SecondaryHero from '../../components/General/SecundaryHero';
import Footer from '../../components/General/Footer';
import ServiceSection from '../../components/ServicePage/ServiceSection';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons'

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
          title="Corretaje de Propiedades"
          description="Servicio donde una persona o empresa intermedia en la compraventa o arriendo de un inmueble. Deje que nuestros expertos se encarguen.
          Ofrecemos un servicio integral que incluye la valorización, fotos de primera calidad que maximizan el potencial de la propiedad, promoción, publicación en diferentes portales y redes sociales, gestionamos estratégicamente la presentación de la propiedad a nuestra cartera interna de clientes, gestión y coordinación de visitas, negociación, cierre y entrega de la propiedad asegurando que obtendrá el mejor trato. 
          Nos dedicamos a encontrar el comprador o arrendatario perfecto para su propiedad, facilitando cada paso del proceso."
        />

        <ServiceSection
          image="/Service2.png"
          title="Servicios Legales"
          description="Para su tranquilidad, forma parte de nuestro equipo de trabajo un abogado con más de 15 años de experiencia en el mercado inmobiliario."
        />

        <ServiceSection
          image="/Service3.png"
          title="Valorización de su Propiedad"
          description="Conozca el verdadero valor de su propiedad.
          Con nuestra experiencia en el mercado inmobiliario realizamos un análisis exhaustivo y detallado de su propiedad, considerando factores como la ubicación, m2, el estado actual y las tendencias del mercado. Así, podrá tomar decisiones informadas sobre la venta o arriendo de su propiedad."
        />
        
        
        <ServiceSection
          image="/Service4.png"
          title="Preparación y Mantención de Propiedades"
          description="Transformamos su propiedad en un espacio atractivo y funcional con nuestros servicios de pintura y limpieza. 
          La preparamos para la venta o arriendo, garantizando que destaque en el mercado y capte la atención de potenciales compradores o arrendatarios.
          Los valores varían según tamaño y estado de la propiedad."
        />

        {/* Añade más secciones según sea necesario */}
      </div>
      <FloatingSocialButtons />

      <Footer />
    </div>
  );
};

export default Services;