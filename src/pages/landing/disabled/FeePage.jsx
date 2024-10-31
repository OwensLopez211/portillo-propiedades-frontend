import React from 'react';
import Topbar from '../../../components/General/TopBar';
import Navbar from '../../../components/General/Navbar';
import SecondaryHero from '../../../components/General/SecundaryHero';
import Footer from '../../../components/General/Footer';

const Fee = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Añadido Flexbox para el diseño de la página */}
      <Topbar />
      <Navbar />
      
      <div className="flex-grow"> {/* Flex-grow para que el contenido ocupe todo el espacio disponible */}
        <SecondaryHero
          title="Honorarios"
          subtitle=""
          backgroundImage="/FeeBanner.jpg"
        />

        <div className="container mx-auto px-4 py-10 max-w-5xl">  {/* Añadido max-w-5xl para limitar el ancho máximo */}
          {/* Añade más secciones según sea necesario */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fee;