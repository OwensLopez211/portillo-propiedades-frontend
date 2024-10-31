import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const location = useLocation();

  useEffect(() => {
    // Cuando la ubicación cambia, mostramos la animación de carga brevemente
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simula el tiempo de carga de 1 segundo (ajústalo según sea necesario)

    return () => clearTimeout(timer);
  }, [location]);

  // Función para verificar si un enlace está activo
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#175EA5] shadow-lg w-full z-50 relative">
      <div className="container mx-auto flex justify-center items-center py-3 px-2 lg:px-4"> {/* Reducción de padding */}
        
        {/* Navbar Links Container */}
        <div
          className={`lg:flex lg:items-center lg:space-x-4`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mt-16 lg:mt-0 space-y-4 lg:space-y-0"> {/* Ajuste del espacio entre elementos */}
            <a
              href="/"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Inicio
            </a>
            <a
              href="/quienes-somos"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/quienes-somos') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Nosotros
            </a>
            <a
              href="/propiedades"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/propiedades') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Propiedades
            </a>
            <a
              href="/entreganos-propiedad"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/entreganos-propiedad') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Entreganos tu propiedad
            </a>
            
{/*             <a
              href="/honorarios"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/honorarios') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Honorarios
            </a> */}
            <a
              href="/servicios"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/servicios') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Servicios
            </a>
            {/* <a
              href="/news"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/news') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              News
            </a> */}
            <a
              href="/contacto"
              className={`block lg:inline-block font-semibold py-1 px-3 lg:px-4 text-sm rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/contacto') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Trabaja con Nosotros
            </a>
          </div>
        </div>
      </div>

      {/* Mostrar ícono de carga si está cargando */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <FaSpinner className="text-white text-4xl animate-spin" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
