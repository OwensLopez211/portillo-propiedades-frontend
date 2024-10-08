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
            Porque tenemos experiencia en el área inmobiliaria, para Newland Propiedades lo importante es crear lazos y relaciones comerciales
            permanentes con todos sus clientes, para ayudarlos en el camino de
            vender, comprar o invertir en una propiedad.
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
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Propiedades</a></li>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Quiénes somos</a></li>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Servicios</a></li>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Blog</a></li>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Contacto</a></li>
            <li><a href="/" className="hover:underline hover:text-gray-300 transition duration-300">Amoblados</a></li>
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
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-lg" />
              <a href="tel:+56982667512" className="hover:underline hover:text-gray-300 transition duration-300">
                +56 9 8266 7512
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
