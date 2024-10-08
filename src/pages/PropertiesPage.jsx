import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropertyList from '../components/PropertiesPage/PropertyList'; 
import PropertySearchBar from '../components/General/PropertySearchBar'; 
import TopBar from '../components/General/TopBar'; // Importa el componente Topbar
import Navbar from '../components/General/Navbar'; // Importa el componente Navbar
import Footer from '../components/General/Footer';
import SecondaryHero from '../components/General/SecundaryHero'; // Importa el componente SecondaryHero

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});

  // Memorizar la función fetchProperties con useCallback
  const fetchProperties = useCallback(async () => {
      try {
          const filterParams = new URLSearchParams(filters).toString();
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/property-list/?${filterParams}`);
          setProperties(response.data);
      } catch (error) {
          console.error('Error fetching properties:', error);
          setProperties([]); 
      }
  }, [filters]); // fetchProperties depende de 'filters'

  // Llama a fetchProperties cuando el componente se monta y cuando cambian los filtros
  useEffect(() => {
      fetchProperties();
  }, [fetchProperties]);

  return (
      <div className="min-h-screen bg-gray-100"> {/* Fondo general y altura mínima */}
          <TopBar /> {/* Muestra el topbar en la parte superior */}
          <Navbar /> {/* Muestra el navbar justo debajo del topbar */}
          <SecondaryHero 
            title="Nuestras Propiedades"
            backgroundImage="/64.jpg"
            overlayColor="rgba(0, 0, 0, 0.6)" // Opcional, para ajustar el color del overlay
            height="h-60"
          />




          <div className="container mx-auto my-8 p-4 max-w-5xl"> {/* Contenedor principal */}
              <PropertySearchBar setFilters={setFilters} />
              <PropertyList properties={properties} />
          </div>
          <Footer />
      </div>
  );
};

export default PropertiesPage;
