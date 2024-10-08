// Navbar.jsx
import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#175EA5] shadow-lg w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <a href="/">NewLand</a>
        </div>

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
              className="block lg:inline-block text-white font-semibold hover:underline py-2 px-4 lg:px-0"
            >
              Inicio
            </a>
            <a
              href="/propiedades"
              className="block lg:inline-block text-white font-semibold hover:underline py-2 px-4 lg:px-0"
            >
              Propiedades
            </a>
            <a
              href="/quienes-somos"
              className="block lg:inline-block text-white font-semibold hover:underline py-2 px-4 lg:px-0"
            >
              Quiénes somos
            </a>
            <a
              href="/servicios"
              className="block lg:inline-block text-white font-semibold hover:underline py-2 px-4 lg:px-0"
            >
              Servicios
            </a>
            <a
              href="/contacto"
              className="block lg:inline-block text-white font-semibold hover:underline py-2 px-4 lg:px-0"
            >
              Contacto
            </a>

            {/* Icons Container - Visible only in mobile */}
            <div className="lg:hidden mt-8 flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <a
                  href="tel:+56 2 2985 7495"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaPhoneAlt />
                </a>
                <a
                  href="mailto:marketing@ejemplo.cl"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="/"
                  className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links - Always on the right side */}
        <div className="hidden lg:flex lg:space-x-2">
          <a
            href="/"
            className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="/"
            className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="/"
            className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-[#175EA5] transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay for blur effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden"></div>
      )}
    </nav>
  );
};

export default Navbar;
