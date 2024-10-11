import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#B17F4A] text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4">
        
        {/* Quiénes Somos - Izquierda */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="font-bold text-xl mb-4">QUIÉNES SOMOS</h3>
          <p className="text-sm leading-relaxed mb-4 text-justify">
            Nuestra experiencia y compromiso junto con soluciones a tu medida y objetivos reales te garantizan tranquilidad y satisfacción en cada etapa, desde la búsqueda de la propiedad ideal hasta la gestión de todos los trámites.
          </p>
          <div>
            <span className="font-bold">Síguenos en:</span>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
              <a href="/" aria-label="Facebook" className="text-white hover:text-gray-300 transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="/" aria-label="Instagram" className="text-white hover:text-gray-300 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="/" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="/" aria-label="WhatsApp" className="text-white hover:text-gray-300 transition duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contacto - Derecha */}
        <div className="lg:w-1/3 text-center lg:text-right">
          <h3 className="font-bold text-xl mb-4">CONTACTO</h3>
          <ul className="space-y-3">
            <li className="flex justify-start lg:justify-end items-center">
              <FaMapMarkerAlt className="mr-2 text-lg" />
              <span className="ml-2">Calle, Comuna</span>
            </li>
            <li className="flex justify-start lg:justify-end items-center">
              <FaEnvelope className="mr-2 text-lg" />
              <a href="mailto:marketing@portillapropiedades.cl" className="hover:underline hover:text-gray-300 transition duration-300 ml-2">
                Contacto@newlandpropiedades.cl
              </a>
            </li>
            <li className="flex justify-start lg:justify-end items-center">
              <FaPhoneAlt className="mr-2 text-lg" />
              <a href="tel:+12345678" className="hover:underline hover:text-gray-300 transition duration-300 ml-2">
                +56 12 3456 7893
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
