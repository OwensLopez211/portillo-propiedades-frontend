import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importar iconos para mejorar el diseño

const PropertySearchBar = ({ setFilters, page, initialFilters }) => {
    const [localFilters, setLocalFilters] = useState({
        operation: '',
        propertyType: '',
        comuna: '',
        priceMin: '',
        priceMax: ''
    });

    // Sincroniza los filtros iniciales al cargar el componente
    useEffect(() => {
        if (initialFilters) {
            setLocalFilters(initialFilters); // Actualiza los filtros locales con los iniciales
        }
    }, [initialFilters]);

    // Actualiza el estado local de los filtros
    const handleChange = (e) => {
        setLocalFilters({
            ...localFilters,
            [e.target.name]: e.target.value
        });
    };

    // Aplica los filtros y los pasa al componente padre
    const applyFilters = () => {
        const validatedFilters = {
            ...localFilters,
            priceMin: localFilters.priceMin !== '' ? parseFloat(localFilters.priceMin) : '',
            priceMax: localFilters.priceMax !== '' ? parseFloat(localFilters.priceMax) : ''
        };
        
        setFilters(validatedFilters);
    };

    // Estilos condicionales basados en la página
    const containerClass = page === 'home' ? 'p-6 bg-gray-500 bg-opacity-30 backdrop-blur-lg shadow-xl' : 'p-6 bg-white rounded-lg shadow-md';

    return (
        <div className={`${containerClass} flex flex-col lg:flex-row gap-4 items-center justify-center w-full mx-auto my-0`}>
            {/* Barra de búsqueda */}
            <div className="flex items-center border rounded-lg overflow-hidden w-full lg:w-auto bg-white shadow-md">
                <FaSearch className="text-gray-400 mx-3" />
                <input 
                    type="text" 
                    name="comuna" 
                    placeholder="Buscar por comuna, código postal o estado" 
                    onChange={handleChange} 
                    value={localFilters.comuna}
                    className="p-2 focus:outline-none w-full text-gray-800"
                />
            </div>

            {/* Selectores de filtros */}
            <select 
                name="operation" 
                onChange={handleChange} 
                value={localFilters.operation}
                className="p-2 border bg-white rounded-lg shadow-md focus:outline-none text-gray-800 w-full lg:w-auto"
            >
                <option value="">Todas</option>
                <option value="venta">Venta</option>
                <option value="arriendo">Arriendo</option>
            </select>

            <select 
                name="propertyType" 
                onChange={handleChange} 
                value={localFilters.propertyType}
                className="p-2 border bg-white rounded-lg shadow-md focus:outline-none text-gray-800 w-full lg:w-auto"
            >
                <option value="">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="oficina">Oficina</option>
            </select>

            {/* Select de precio (solo en propiedades) */}
            {page === 'properties' && (
                <div className="flex items-center gap-2 w-full lg:w-auto">
                    <input 
                        type="number" 
                        name="priceMin" 
                        placeholder="Precio mínimo" 
                        onChange={handleChange} 
                        value={localFilters.priceMin}
                        className="p-2 border rounded-lg focus:outline-none w-full lg:w-28"
                    />
                    <input 
                        type="number" 
                        name="priceMax" 
                        placeholder="Precio máximo" 
                        onChange={handleChange} 
                        value={localFilters.priceMax}
                        className="p-2 border rounded-lg focus:outline-none w-full lg:w-28"
                    />
                </div>
            )}

            {/* Botón de aplicar filtros */}
            <button 
                onClick={applyFilters}
                className="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 w-full lg:w-auto justify-center"
            >
                Buscar
            </button>
        </div>
    );
};

export default PropertySearchBar;
