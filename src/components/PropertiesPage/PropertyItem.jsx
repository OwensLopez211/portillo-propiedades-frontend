// PropertyItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({ property }) => {
    return (
        <div className="property-item bg-white shadow-lg rounded-md p-4 mb-4">
            <div className="property-image mb-4">
                <img
                    src={property.images && property.images.length > 0 ? `${process.env.REACT_APP_API_URL}/${property.images[0].image_url}` : '/placeholder.jpg'}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-md"
                />
            </div>
            <div className="property-details">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-700 mb-1">{property.direccion}, {property.comuna}</p>
                <p className="text-gray-500 mb-2">{property.habitaciones} habitaciones · {property.baños} baños</p>
                <p className="text-gray-900 font-semibold mb-4">{property.tipo_operacion === 'venta' ? `Precio: $${property.precio_venta}` : `Renta: $${property.precio_renta}`}</p>
                <Link to={`/property/${property.id}`} className="text-orange-600 font-semibold">Ver detalles &gt;</Link>
            </div>
        </div>
    );
};

export default PropertyItem;
