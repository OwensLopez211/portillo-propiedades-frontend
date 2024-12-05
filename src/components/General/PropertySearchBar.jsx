import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importar iconos para mejorar el diseño

const PropertySearchBar = ({ setFilters, page, initialFilters }) => {
    const [localFilters, setLocalFilters] = useState({
        operation: '',
        propertyType: '',
        comuna: '',
        priceMin: '',
        priceMax: '',
        currency: 'CLP' 
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
            priceMax: localFilters.priceMax !== '' ? parseFloat(localFilters.priceMax) : '',
            currency: localFilters.currency
        };
        
        setFilters(validatedFilters);
    };

    // Estilos condicionales basados en la página
    const containerClass = page === 'home' ? 'p-4 bg-gray-500 bg-opacity-30 backdrop-blur-lg shadow-lg' : 'p-6 bg-white rounded-lg shadow-md';
    
    // Estilos personalizados para el placeholder y selectores en la página 'home'
    const placeholderClass = page === 'home' ? 'placeholder-[#175EA5] font-bold' : 'placeholder-gray-400';
    const selectTextClass = page === 'home' ? 'text-[#175EA5] font-bold' : 'text-gray-800';

    return (
        <div className={`${containerClass} flex flex-col lg:flex-row gap-2 items-center justify-center w-full mx-auto`}>
            {/* Barra de búsqueda */}
            <div className="flex items-center border rounded-lg overflow-hidden w-full lg:w-auto bg-white shadow-sm">
                <FaSearch className="text-gray-400 mx-2" />
                <input 
                    type="text" 
                    name="comuna" 
                    placeholder="Buscar por comuna, código postal o estado" 
                    onChange={handleChange} 
                    value={localFilters.comuna}
                    className={`p-1 focus:outline-none w-full text-gray-800 text-sm ${placeholderClass}`}
                />
            </div>

            {/* Selectores de filtros */}
            <select 
                name="operation" 
                onChange={handleChange} 
                value={localFilters.operation}
                className={`p-1 border bg-white rounded-lg shadow-sm focus:outline-none ${selectTextClass} w-full lg:w-auto text-sm`}
            >
                <option value="" className={selectTextClass}>Todas</option>
                <option value="venta" className={selectTextClass}>Venta</option>
                <option value="arriendo" className={selectTextClass}>Arriendo</option>
                <option value="arriendo" className={selectTextClass}>Arriendo temporal</option>
            </select>

            <select 
                name="propertyType" 
                onChange={handleChange} 
                value={localFilters.propertyType}
                className={`p-1 border bg-white rounded-lg shadow-sm focus:outline-none ${selectTextClass} w-full lg:w-auto text-sm`}
            >
                <option value="" className={selectTextClass}>Tipo de propiedad</option>
                <option value="departamento">Departamentos</option>
                <option value="casa">Casas</option>
                <option value="oficina">Oficinas</option>
                <option value="parcela">Parcelas</option>
                <option value="terreno">Terrenos</option>
                <option value="sitio">Sitios</option>
                <option value="bodega">Bodegas</option>
                <option value="industrial">Industriales</option>
                <option value="agricola">Agrícola</option>
                <option value="otros_inmuebles">Otros Inmuebles</option>
                <option value="estacionamiento">Estacionamientos</option>
                <option value="loteo">Loteos</option>
                <option value="lotes_de_cementerio">Lotes de Cementerio</option>
            </select>

            <select 
                name="currency" 
                onChange={handleChange} 
                value={localFilters.currency}
                className={`p-1 border bg-white rounded-lg shadow-sm focus:outline-none ${selectTextClass} w-full lg:w-auto text-sm`}
            >
                <option value="CLP">CLP</option>
                <option value="UF">UF</option>
            </select>

            {/* Botón de aplicar filtros */}
            <button 
                onClick={applyFilters}
                className="flex items-center p-1 bg-[#175EA5] text-white rounded-lg hover:bg-[#175EA5] transition duration-300 w-full lg:w-auto justify-center text-sm"
            >
                Buscar
            </button>
        </div>
    );
};

export default PropertySearchBar;
