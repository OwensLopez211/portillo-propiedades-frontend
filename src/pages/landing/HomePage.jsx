import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importa Helmet para SEO
import TopBar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import HeroSection from '../../components/Homepage/HeroSection';
import FeaturedProperties from '../../components/Homepage/FeaturedProperties';
import Footer from '../../components/General/Footer';
import PropertySearchBar from '../../components/General/PropertySearchBar';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const HomePage = () => {
  const navigate = useNavigate();

  // Maneja los filtros cuando se aplican desde la barra de búsqueda
  const handleFilters = (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    navigate(`/propiedades?${queryString}`);
  };

  return (
    <>
      {/* Configuración de SEO para la HomePage */}
      <Helmet>
        <title>NewLand Propiedades - Encuentra las Mejores Propiedades en Chile</title>
        <meta
          name="description"
          content="Explora las mejores propiedades en venta y arriendo en Chile. NewLand Propiedades te ofrece una amplia selección de inmuebles para todos los gustos y necesidades."
        />
        <link rel="canonical" href="https://newlandpropiedades.cl" />
        <meta property="og:title" content="NewLand Propiedades - Encuentra las Mejores Propiedades en Chile" />
        <meta property="og:description" content="Explora las mejores propiedades en venta y arriendo en Chile. NewLand Propiedades te ofrece una amplia selección de inmuebles para todos los gustos y necesidades." />
        <meta property="og:url" content="https://newlandpropiedades.cl" />
        <meta property="og:type" content="website" />
        
        {/* Datos estructurados en JSON-LD para mejorar el SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "NewLand Propiedades",
            "url": "https://newlandpropiedades.cl",
            "logo": "https://newlandpropiedades.cl/static/images/logo.png", // Reemplaza con la URL del logo
            "description": "NewLand Propiedades ofrece propiedades en venta y arriendo en las mejores ubicaciones de Chile.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CL",
              "addressRegion": "Región Metropolitana",
              "addressLocality": "Santiago"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56223456789",
              "contactType": "Customer Service",
              "areaServed": "CL"
            }
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />
      <HeroSection />
      
      {/* Barra de búsqueda para el HomePage */}
      <PropertySearchBar page="home" setFilters={handleFilters} />
      <FloatingSocialButtons />

      <FeaturedProperties />
      <Footer />
    </>
  );
};

export default HomePage;
