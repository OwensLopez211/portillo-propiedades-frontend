import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección

const PropertyPageCard = ({ property }) => {
    const navigate = useNavigate(); // Inicializa useNavigate

    // Función para formatear los precios con separadores de miles
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL').format(price);
    };

    return (
        <div 
            key={property.id} 
            className="property-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
            {/* Imagen de la propiedad con texto superpuesto */}
            <div className="relative">
                <img 
                    src={property.images?.[0]?.image_url || 'https://via.placeholder.com/400'} 
                    alt={property.name} 
                    className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
                    <h2 className="text-lg font-bold">{property.title}</h2>
                    <p className="text-sm">{property.location}</p>
                </div>
            </div>

            {/* Barra de título colorida */}
            <div className="bg-blue-600 text-white text-center py-2">
                <p className="font-semibold">{property.tipo_propiedad.toUpperCase()}</p>
            </div>

            {/* Información de la propiedad */}
            <div className="p-6">
                <p className="text-gray-700 mb-2">Operación: <span className="font-medium">{property.tipo_operacion}</span></p>
                <p className="text-gray-700 mb-4">
                    Precio: <span className="font-bold">{property.precio_venta ? `$${formatPrice(property.precio_venta)}` : `$${formatPrice(property.precio_renta)}`}</span>
                </p>

                {/* Información adicional del agente */}
                <div className="flex items-center mt-4">
                    <img 
                        src={property.agent?.profile_image_url || 'https://via.placeholder.com/40'} 
                        alt="Agent" 
                        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500"
                    />
                    <div>
                        <p className="text-gray-800 font-semibold">{property.agent?.name || 'Agent Name'}</p>
                        <p className="text-gray-600 text-sm">{property.agent?.phone || 'Número de teléfono no disponible'}</p>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    {/* Botón Ver con funcionalidad de redirección */}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => navigate(`/property/${property.id}`)} // Redirige al detalle de la propiedad
                    >
                        Ver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyPageCard;
