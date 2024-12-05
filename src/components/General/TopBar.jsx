import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        
        {/* Logo - Left side */}
        <div className="flex items-center pl-0 sm:pl-4">
          <a href="/">
            <img
              src="/logo.png"
              alt="NewLand Logo"
              className="h-32 w-auto sm:h-32 md:h-36 lg:h-36"
            />
          </a>
        </div>

        {/* Social Icons with Text - Right side in two columns */}
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 text-[#175EA5]">
          
          {/* Column 1: WhatsApp, Phone Number, Email */}
          <div className="flex flex-col space-y-1 items-start">
            {/* WhatsApp */}
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-lg sm:text-xl text-[#175EA5]" />
              <a 
                href="https://wa.me/56998472202" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs sm:text-sm font-medium"
              >
                +56 9 9847 2202
              </a>
            </div>

            {/* Phone Number for Calls */}
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg sm:text-xl text-[#175EA5]" />
              <a 
                href="tel:+56998472202" 
                className="text-xs sm:text-sm font-medium"
              >
                +56 9 9847 2202
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-lg sm:text-xl text-[#175EA5]" />
              <a 
                href="mailto:contacto@newlandpropiedades.cl" 
                className="text-xs sm:text-sm font-medium text-[#175EA5]"
              >
                contacto@newlandpropiedades.cl
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="/estados-unidos.png" 
                alt="American Flag" 
                className="w-5 sm:w-6 h-auto object-contain"
              />
              <span className="text-xs sm:text-sm font-medium text-[#175EA5]">
                We speak English
              </span>
            </div>


          </div>

          {/* Column 2 (Other Social Links) */}
          <div className="flex flex-col space-y-1 lg:ml-6 items-start">
            {/* Instagram */}
{/*             <a
              href="https://www.instagram.com/newland_propiedades_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#175EA5]"
            >
              <FaInstagram className="text-lg sm:text-xl text-[#175EA5]" />
              <span className="text-xs sm:text-sm font-medium">Síguenos</span>
            </a> */}

            {/* Facebook */}
{/*             <a
              href="https://www.facebook.com/newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#175EA5]"
            >
              <FaFacebookF className="text-lg sm:text-xl text-[#175EA5]" />
              <span className="text-xs sm:text-sm font-medium">Síguenos en Facebook</span>
            </a> */}

            {/* TikTok */}
{/*             <a
              href="https://www.tiktok.com/@newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#175EA5]"
            >
              <FaTiktok className="text-lg sm:text-xl text-[#175EA5]" />
              <span className="text-xs sm:text-sm font-medium">Síguenos en TikTok</span>
            </a> */}

            {/* Messenger */}
{/*             <a
              href="https://www.messenger.com/t/newland_propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#175EA5]"
            >
              <FaFacebookMessenger className="text-lg sm:text-xl text-[#175EA5]" />
              <span className="text-xs sm:text-sm font-medium">Contáctanos en Messenger</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
