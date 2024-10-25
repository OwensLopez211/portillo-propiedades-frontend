import React from 'react';
import PropertyCard from './PropertyPageCards'; // Importa el componente PropertyCard

const PropertyList = ({ properties }) => {
    if (!properties || properties.length === 0) {
        return <p className="text-center text-gray-600 mt-8">No se encontraron propiedades </p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
            </div>
        </div>
    );
};

export default PropertyList;
