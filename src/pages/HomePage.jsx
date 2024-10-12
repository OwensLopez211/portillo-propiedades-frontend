import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir
import TopBar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import FeaturedProperties from '../components/Homepage/FeaturedProperties';
import WhatsAppBar from '../components/Homepage/WhatsappBar';
import Footer from '../components/General/Footer';
import PropertySearchBar from '../components/General/PropertySearchBar'; // Importa el componente de búsqueda
import SectionBar from '../components/Homepage/SectionBar';

const HomePage = () => {
  const navigate = useNavigate(); // Hook para redirigir

  // Maneja los filtros cuando se aplican desde la barra de búsqueda
  const handleFilters = (filters) => {
    const queryString = new URLSearchParams(filters).toString(); // Convierte los filtros en query params
    navigate(`/propiedades?${queryString}`); // Redirige a la página de propiedades con los filtros
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      
      {/* Barra de búsqueda para el HomePage */}
      <PropertySearchBar page="home" setFilters={handleFilters} />

      <FeaturedProperties />
      <SectionBar />
      <WhatsAppBar />
      <Footer />
    </>
  );
};

export default HomePage;
