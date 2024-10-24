import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom'; // Hook para obtener la ubicación actual
import axios from 'axios';
import PropertyList from '../../components/PropertiesPage/PropertyList'; 
import PropertySearchBar from '../../components/General/PropertySearchBar'; 
import TopBar from '../../components/General/TopBar'; 
import Navbar from '../../components/General/Navbar'; 
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState(null); // Inicializa los filtros como null
  const location = useLocation(); // Hook para obtener la URL actual

  // Memorizar la función fetchProperties con useCallback
  const fetchProperties = useCallback(async () => {
    if (filters) { // Solo ejecuta la búsqueda si los filtros están definidos
      try {
        const filterParams = new URLSearchParams(filters).toString();
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/property-list/?${filterParams}`);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]); // En caso de error, establece las propiedades como vacío
      }
    }
  }, [filters]);

  // Actualiza los filtros cuando cambia la URL
  useEffect(() => {
    // Lógica para obtener los filtros desde la URL (moviéndola dentro del useEffect)
    const params = new URLSearchParams(location.search);
    const filtersFromUrl = {
      operation: params.get('operation') || '',
      propertyType: params.get('propertyType') || '',
      comuna: params.get('comuna') || '',
      priceMin: params.get('priceMin') || '',
      priceMax: params.get('priceMax') || ''
    };
    
    setFilters(filtersFromUrl); // Establece los filtros iniciales basados en la URL
  }, [location.search]);

  // Llama a fetchProperties cuando los filtros cambian
  useEffect(() => {
    if (filters !== null) { // Asegura que los filtros existan antes de ejecutar la búsqueda
      fetchProperties();
    }
  }, [filters, fetchProperties]);

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Navbar />
      <SecondaryHero 
        title="Nuestras Propiedades"
        backgroundImage="/64.jpg"
        overlayColor="rgba(0, 0, 0, 0.6)"
        height="h-60"
      />

      <div className="container mx-auto my-8 p-4 max-w-5xl">
        {/* Barra de búsqueda con los filtros actuales */}
        <PropertySearchBar 
          page="properties" 
          setFilters={setFilters} 
          initialFilters={filters} 
        />
        {/* Lista de propiedades */}
        <PropertyList properties={properties} />
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
