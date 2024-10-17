import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        
        {/* Logo - Left side */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="NewLand Logo" className="h-32 w-auto" />
          </a>
        </div>

        {/* Social Icons with Text - Right side */}
        <div className="flex flex-col space-y-1 text-[#175EA5]">
          {/* Instagram and Follow Text */}
          <a
            href="https://www.instagram.com/newland_propiedades_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-[#175EA5]"
          >
            <FaInstagram className="text-xl text-[#175EA5]" />
            <span className="text-sm font-medium">Síguenos</span>
          </a>

          {/* WhatsApp and Phone Number */}
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="text-xl text-[#175EA5]" />
            <span className="text-sm font-medium">+123 456 7890</span>
          </div>

          {/* Email and Address */}
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-xl text-[#175EA5]" />
            <a href="mailto:contacto@newlandpropiedades.cl" className="text-sm font-medium text-[#175EA5]">
              contacto@newlandpropiedades.cl
            </a>
          </div>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/newland_propiedades"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-[#175EA5]"
          >
            <FaFacebookF className="text-xl text-[#175EA5]" />
            <span className="text-sm font-medium">Síguenos en Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
