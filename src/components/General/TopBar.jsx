import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        
        {/* Logo - Left side */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="NewLand Logo" className="h-24 w-auto" />
          </a>
        </div>

        {/* Social Icons with Text - Right side */}
        <div className="flex flex-col space-y-1 text-gray-800">
          {/* Instagram and Follow Text */}
          <a
            href="https://www.instagram.com/newland_propiedades_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            <FaInstagram className="text-xl" />
            <span className="text-sm font-medium">Síguenos</span>
          </a>

          {/* WhatsApp and Phone Number */}
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="text-xl" />
            <span className="text-sm font-medium">+123 456 7890</span>
          </div>

          {/* Email and Address */}
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-xl" />
            <a href="mailto:contacto@newlandpropiedades.cl" className="text-sm font-medium">
              contacto@newlandpropiedades.cl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
