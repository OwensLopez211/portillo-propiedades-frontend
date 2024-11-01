import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarMobile = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Botón de hamburguesa */}
      <nav className="bg-[#175EA5] shadow-lg w-full z-50 relative p-4 flex justify-end items-center">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#175EA5] shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6 space-y-6 mt-12">
          {/* Menús con bordes redondeados y sin outline */}
          <a href="/" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Inicio
          </a>
          <a href="/quienes-somos" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Nosotros
          </a>
          <a href="/propiedades" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Propiedades
          </a>
          <a href="/entreganos-propiedad" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Entreganos tu propiedad
          </a>
{/*           <a href="/honorarios" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Honorarios
          </a> */}
          <a href="/servicios" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Servicios
          </a>
{/*           <a href="/news" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            News
          </a> */}
          <a href="/contacto" className="block text-white font-semibold hover:bg-white hover:text-[#175EA5] py-2 px-4 rounded-tl-md rounded-bl-md transition duration-300 text-center focus:outline-none">
            Trabaja con Nosotros
          </a>
        </div>
      </div>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default NavbarMobile;
