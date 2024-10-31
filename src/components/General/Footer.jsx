import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaFacebookMessenger,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#175EA5] text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4">
        
        {/* Quiénes Somos - Izquierda */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="font-bold text-2xl mb-4">Nuestro servicio, tu tranquilidad asegurada</h3>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            En Newland Propiedades, trabajamos para ofrecerte una experiencia inmobiliaria confiable y personalizada. Nos comprometemos a acompañarte en cada paso, asegurando que encuentres el lugar ideal para ti.
          </p>
        </div>

        {/* Contacto - Derecha */}
        <div className="lg:w-1/3 text-center lg:text-right">
          <h3 className="font-bold text-2xl mb-4">CONTACTO</h3>
          <ul className="space-y-3 flex flex-col items-start lg:items-end">
            <li className="flex items-center">
              <FaEnvelope className="text-xl" />
              <a href="mailto:contacto@newlandpropiedades.cl" className="hover:underline hover:text-gray-300 transition duration-300 ml-2 text-lg">
                Contacto@newlandpropiedades.cl
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-xl" />
              <a href="tel:+56 9 9847 2202" className="hover:underline hover:text-gray-300 transition duration-300 ml-2 text-lg">
                +56 9 9847 2202
              </a>
            </li>
          </ul>

          {/* Redes Sociales */}
          <div className="flex justify-center lg:justify-end mt-4 space-x-4">
            <a
              href="https://www.instagram.com/newland_propiedades_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.messenger.com/t/newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              <FaFacebookMessenger />
            </a>
          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="text-center mt-8">
        <p className="text-sm opacity-80">© 2024 Newland Propiedades. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
