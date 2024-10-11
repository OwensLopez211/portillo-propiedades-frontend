// src/pages/Services.jsx
import React from 'react';
import Topbar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import SecondaryHero from '../components/General/SecundaryHero';
import Footer from '../components/General/Footer';
import ServiceSection from '../components/ServicePage/ServiceSection';

const Services = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SecondaryHero
        title="Servicios"
        subtitle=""
        backgroundImage="/64.jpg"
      />

      <div className="container mx-auto px-4 py-10 max-w-5xl">  {/* Añadido max-w-5xl para limitar el ancho máximo */}
        <ServiceSection
          image="/juridico.jpg"
          title="ESTUDIO JURÍDICO"
          description="Las ventajas asociadas que entrega nuestra empresa de corretaje, es un servicio legal que está a disposición del cliente, con 2 abogados a su servicio, quienes realizan la gestión directa de cobranza extrajudicial y gestión judicial forma directa si fuera necesario, para exigir el cumplimiento de las obligaciones derivadas de los contratos de arriendo, estando incorporados estos servicios en su pago de administración. Contratos y títulos de propiedad. Servicio Judicial, Cobranza extrajudicial gratuita y más."
        />
        
        <ServiceSection
          image="/compraventa.jpg"
          title="COMPRA Y VENTA"
          description="Porque tenemos experiencia en el área inmobiliaria, sabemos la importancia de comprar o vender tu propiedad. Para Portilla Propiedades lo importante, más allá de lograr transacciones comerciales, exitosas en la intermediación de negocios inmobiliarios, es crear lazos y relaciones comerciales permanentes con todos sus clientes, que se prolonguen en el tiempo, intentando cada vez, superar las expectativas de quienes nos eligen, para ayudarlos en el camino de vender, comprar o invertir en una propiedad."
        />
        
        <ServiceSection
          image="/administracion.jpg"
          title="ADMINISTRACIÓN DE PROPIEDADES"
          description="En Portilla Propiedades entendemos lo que significa para usted arrendar una propiedad. Tenemos un sistema y equipo de personas especializado para ofrecerle toda la asistencia integral necesaria durante todo el proceso para brindarle toda la tranquilidad que necesita. Nos encargamos del cobro de arriendo mensual, coordinamos todas las reparaciones necesarias, controlamos el pago de servicios y gastos comunes y revisamos periódicamente el estado de la propiedad."
        />
        
        <ServiceSection
          image="/apartamoblados.jpg"
          title="APART AMOBLADOS"
          description="Somos líderes en el arriendo de cómodos y modernos departamentos ubicados en Las Condes, Santiago de Chile. Ofrecemos arriendo por día y también con convenio, y servicios especiales para largas estadías. Lugares ideales para su visita de negocios. Ubicaciones excelentes y con excelente conectividad. Comuníquese hoy mismo y con gusto le ofreceremos las distintas opciones que tenemos para usted."
        />

        {/* Añade más secciones según sea necesario */}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
