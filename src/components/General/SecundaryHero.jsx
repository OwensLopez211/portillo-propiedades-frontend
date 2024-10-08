import React from 'react';
import PropTypes from 'prop-types';

const SecondaryHero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = 'h-64', 
  overlayColor = 'rgba(0, 0, 0, 0.5)', 
  textColor = 'text-white', 
  buttonText,
  buttonLink 
}) => {
  return (
    <div 
      className={`relative bg-cover bg-center flex items-center justify-center text-center ${height}`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay con desenfoque */}
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        style={{ backdropFilter: 'blur(10px)' }} // Aplicar el blur aquí
      ></div>
      
      <div className="relative z-10 px-4">
        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${textColor} animate-fadeIn`}>{title}</h1>
        {subtitle && <p className={`text-lg md:text-xl ${textColor} animate-fadeIn`}>{subtitle}</p>}
        {buttonText && buttonLink && (
          <a 
            href={buttonLink} 
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

SecondaryHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  overlayColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

export default SecondaryHero;
