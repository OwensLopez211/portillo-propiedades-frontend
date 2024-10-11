import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Ícono de búsqueda para un toque visual

const HomeSearchBar = ({ setFilters }) => {
    const [localFilters, setLocalFilters] = useState({
        operation: '',
        propertyType: '',
        comuna: ''
    });

    // Actualiza el estado local de los filtros
    const handleChange = (e) => {
        setLocalFilters({
            ...localFilters,
            [e.target.name]: e.target.value
        });
    };

    // Aplica los filtros y los pasa al componente padre
    const applyFilters = () => {
        const validatedFilters = { ...localFilters };
        setFilters(validatedFilters);
    };

    return (
        <div className="home-search-bar p-8 bg-gray-500 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl flex flex-col lg:flex-row gap-6 items-center justify-between mx-auto max-w-7xl my-10">
            {/* Input de búsqueda con ícono */}
            <div className="flex items-center border border-white rounded-full overflow-hidden w-full lg:w-auto bg-white shadow-md">
                <FaSearch className="text-gray-400 mx-3" />
                <input 
                    type="text" 
                    name="comuna" 
                    placeholder="Buscar por comuna, código postal, etc." 
                    onChange={handleChange} 
                    value={localFilters.comuna}
                    className="p-3 focus:outline-none w-full rounded-r-full text-gray-800"
                />
            </div>

            {/* Selectores de filtros */}
            <select 
                name="operation" 
                onChange={handleChange} 
                value={localFilters.operation}
                className="p-3 border border-white bg-white rounded-full shadow-md focus:outline-none text-gray-800 w-full lg:w-auto"
            >
                <option value="">Operación</option>
                <option value="venta">Venta</option>
                <option value="arriendo">Arriendo</option>
            </select>

            <select 
                name="propertyType" 
                onChange={handleChange} 
                value={localFilters.propertyType}
                className="p-3 border border-white bg-white rounded-full shadow-md focus:outline-none text-gray-800 w-full lg:w-auto"
            >
                <option value="">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="oficina">Oficina</option>
            </select>

            {/* Botón de buscar */}
            <button 
                onClick={applyFilters}
                className="flex items-center p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 w-full lg:w-auto justify-center"
            >
                Buscar
            </button>
        </div>
    );
};

export default HomeSearchBar;
