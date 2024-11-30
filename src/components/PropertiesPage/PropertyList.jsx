import React from 'react';
import PropertyCards from './PropertyPageCards'; // Importa el componente PropertyCard

const PropertyList = ({ properties }) => {
    // Filtrar propiedades publicadas
    const publishedProperties = properties.filter(property => property.is_published);

    if (!publishedProperties || publishedProperties.length === 0) {
        return <p className="text-center text-gray-600 mt-8">No se encontraron propiedades </p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedProperties.map(property => (
                    <PropertyCards key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};


export default PropertyList;
