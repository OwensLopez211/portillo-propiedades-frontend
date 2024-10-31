import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa'; // Importa el icono de carga
import TopBar from '../../../components/General/TopBar';
import Navbar from '../../../components/General/Navbar';
import PropertyHeader from '../../../components/PropertiesPage/PropertyDetail/PropertyHeader';
import ImageGallery from '../../../components/PropertiesPage/PropertyDetail/ImageGallery';
import ContactInfo from '../../../components/PropertiesPage/PropertyDetail/ContactInfo';
import PropertyDescription from '../../../components/PropertiesPage/PropertyDetail/PropertyDescription';
import PropertyDetails from '../../../components/PropertiesPage/PropertyDetail/PropertyDetails';
import Footer from '../../../components/General/Footer';

const PropertyDetail = () => {
  const { id } = useParams();  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true); // Activa la animación de carga
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/properties/${id}/`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      } finally {
        setLoading(false); // Desactiva la animación de carga
      }
    };
    fetchProperty();
  }, [id]);

  // Mostrar animación de carga mientras se obtienen los datos
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <FaSpinner className="text-white text-4xl animate-spin" />
      </div>
    );
  }

  // Mostrar mensaje de error si la propiedad no se encuentra
  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-lg font-semibold text-red-500">No se encontró la propiedad</p>
      </div>
    );
  }

  // Contenido de la propiedad
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopBar />
      <Navbar />
      
      {/* Contenedor principal con layout flex */}
      <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Primera columna: Contenido principal */}
        <div className="lg:w-2/3 space-y-8">
          <PropertyHeader property={property} />
          <ImageGallery images={property.images} />
          <PropertyDescription descripcion={property.descripcion} />
          <PropertyDetails property={property} />
        </div>
        
        {/* Segunda columna: Información de contacto (columna lateral derecha) */}
        <div className="lg:w-1/3 lg:ml-8">
          <ContactInfo agent={property.agent} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
