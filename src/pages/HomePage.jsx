// pages/HomePage.jsx
import React from 'react';
import TopBar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import FeaturedProperties from '../components/Homepage/FeaturedProperties';
import ServicesSection from '../components/Homepage/ServicesSection';
import AgentsCarousel from '../components/Homepage/AgentsCarousel';
import WhatsAppBar from '../components/Homepage/WhatsappBar';
import Footer from '../components/General/Footer';

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <AgentsCarousel />
      <WhatsAppBar />
      <Footer />
    </>
  );
};

export default HomePage;
