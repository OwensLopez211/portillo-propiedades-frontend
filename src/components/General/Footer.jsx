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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Quiénes Somos */}
        <div>
          <h3 className="font-bold text-xl mb-4">QUIÉNES SOMOS</h3>
          <p className="text-sm leading-relaxed mb-4">
            Nuestra experiencia y compromiso junto con soluciones a tu medida y objetivos reales te garantizan tranquilidad y satisfacción en cada etapa, desde la búsqueda de la propiedad ideal hasta la gestión de todos los trámites.
          </p>
          <div>
            <span className="font-bold">Síguenos en:</span>
            <div className="flex space-x-4 mt-2">
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

        {/* Menú */}
        <div>
          <h3 className="font-bold text-xl mb-4">MENÚ</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Inicio</a></li>
            <li><a href="/quienes-somos" className="hover:underline hover:text-gray-300 transition duration-300">Nosotros</a></li>
            <li><a href="/propiedades" className="hover:underline hover:text-gray-300 transition duration-300">Propiedades</a></li>
            <li><a href="/contacto" className="hover:underline hover:text-gray-300 transition duration-300">Trabaja con Nosotros</a></li>
            <li><a href="/honorarios" className="hover:underline hover:text-gray-300 transition duration-300">Honorarios</a></li>
            <li><a href="/servicios" className="hover:underline hover:text-gray-300 transition duration-300">Servicios</a></li>
            <li><a href="/news" className="hover:underline hover:text-gray-300 transition duration-300">News</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-bold text-xl mb-4">CONTACTO</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-lg" />
              <span>El Director 6000, of. 108, Las Condes</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-lg" />
              <a href="mailto:marketing@portillapropiedades.cl" className="hover:underline hover:text-gray-300 transition duration-300">
                Contacto@newlandpropiedades.cl
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-lg" />
              <a href="tel:+56229857495" className="hover:underline hover:text-gray-300 transition duration-300">
                +56 22 985 7495
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <img
          src="/logo.png"
          alt="Newland Propiedades"
          className="h-12 mx-auto opacity-80 hover:opacity-100 transition duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
