import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/General/TopBar';
import Navbar from '../components/General/Navbar';
import PropertyHeader from '../components/PropertyDetail/PropertyHeader';
import ImageGallery from '../components/PropertyDetail/ImageGallery';
import ContactInfo from '../components/PropertyDetail/ContactInfo';
import PropertyDescription from '../components/PropertyDetail/PropertyDescription';
import PropertyDetails from '../components/PropertyDetail/PropertyDetails';

const PropertyDetail = () => {
  const { id } = useParams();  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/properties/${id}/`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!property) return <div>No se encontró la propiedad</div>;

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyHeader property={property} />
          <ImageGallery images={property.images} />
          <PropertyDescription descripcion={property.descripcion} />
          <PropertyDetails property={property} />
        </div>
        <div>
          <ContactInfo agent={property.agent} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
