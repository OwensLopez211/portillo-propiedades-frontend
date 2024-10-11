import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSpinner } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga
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
      <div className="container mx-auto flex justify-center items-center py-4 px-4 lg:px-0">
        
        {/* Navbar Links Container */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#175EA5] shadow-lg lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none transition-transform transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 z-40 lg:flex lg:items-center lg:space-x-6`}
        >
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 text-white text-2xl lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col lg:flex-row lg:space-x-6 items-center mt-16 lg:mt-0 space-y-4 lg:space-y-0">
            <a
              href="/"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Inicio
            </a>
            <a
              href="/quienes-somos"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/quienes-somos') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Nosotros
            </a>
            <a
              href="/propiedades"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/propiedades') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Propiedades
            </a>
            <a
              href="/contacto"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/contacto') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Trabaja con Nosotros
            </a>
            <a
              href="/honorarios"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/honorarios') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Honorarios
            </a>
            <a
              href="/servicios"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/servicios') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              Servicios
            </a>
            <a
              href="/news"
              className={`block lg:inline-block font-semibold py-2 px-4 lg:px-5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isActive('/news') ? 'bg-white text-[#175EA5]' : 'text-white hover:bg-white hover:text-[#175EA5]'
              }`}
            >
              News
            </a>
          </div>
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
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
