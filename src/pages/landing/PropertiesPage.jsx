import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropertyList from '../../components/PropertiesPage/PropertyList';
import PropertySearchBar from '../../components/General/PropertySearchBar';
import TopBar from '../../components/General/TopBar';
import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import SecondaryHero from '../../components/General/SecundaryHero';
import FloatingSocialButtons from '../../components/General/FloatingSocialButtons';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Memoriza la función fetchProperties
  const fetchProperties = useCallback(async () => {
    setLoading(true); // Inicia la carga de datos
    try {
      const filterParams = filters ? new URLSearchParams(filters).toString() : '';
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/property-list/?${filterParams}`);
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
    } finally {
      setLoading(false); // Termina la carga de datos
    }
  }, [filters]);

  // Actualiza los filtros al cambiar la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filtersFromUrl = {
      operation: params.get('operation') || '',
      propertyType: params.get('propertyType') || '',
      comuna: params.get('comuna') || '',
      priceMin: params.get('priceMin') || '',
      priceMax: params.get('priceMax') || ''
    };
    setFilters(filtersFromUrl);
  }, [location.search]);

  // Llama a fetchProperties cuando los filtros cambian
  useEffect(() => {
    fetchProperties();
  }, [filters, fetchProperties]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SEO Configuración */}
      <Helmet>
        <title>Propiedades en Venta y Arriendo | NewLand Propiedades</title>
        <meta
          name="description"
          content="Explora una amplia variedad de propiedades en venta y arriendo en NewLand Propiedades. Encuentra tu propiedad ideal en las mejores ubicaciones de Chile."
        />
        <link rel="canonical" href="https://newlandpropiedades.cl/propiedades" />
      </Helmet>

      <TopBar />
      <Navbar />
      <SecondaryHero 
        title="Nuestras Propiedades"
        backgroundImage="/65.jpg"
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
        
        {/* Muestra mensaje de carga, sin resultados o la lista de propiedades */}
        {loading ? (
          <p className="text-center text-gray-600 mt-6">Cargando propiedades...</p>
        ) : properties.length > 0 ? (
          <PropertyList properties={properties} />
        ) : (
          <p className="text-center text-gray-600 mt-6">No se encontraron propiedades con los filtros aplicados.</p>
        )}
      </div>
      
      <FloatingSocialButtons />
      <Footer />
    </div>
  );
};

export default PropertiesPage;
