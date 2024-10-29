import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
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
          <ul className="space-y-3">
            <li className="flex justify-start lg:justify-end items-center">
              <FaEnvelope className="mr-2 text-xl" />
              <a href="mailto:marketing@portillapropiedades.cl" className="hover:underline hover:text-gray-300 transition duration-300 ml-2 text-lg">
                Contacto@newlandpropiedades.cl
              </a>
            </li>
            <li className="flex justify-start lg:justify-end items-center">
              <FaPhoneAlt className="mr-2 text-xl" />
              <a href="tel:+56 9 9847 2202" className="hover:underline hover:text-gray-300 transition duration-300 ml-2 text-lg">
                +56 9 9847 2202
              </a>
            </li>
          </ul>
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
