import React from 'react';

const FeeSection = ({ title, description, details, className }) => {
  return (
    <div className={className}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#175EA5] mb-4">
          {title}
        </h2>
        <p className="text-[#175EA5] mb-8 text-lg"> {/* Cambiado el color del texto */}
          {description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              {detail.icon && ( /* Mostrar el icono solo si está definido */
                <img 
                  src={detail.icon} 
                  alt={detail.subtitle} 
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
              )}
              <div>
                <h3 className="font-semibold text-[#175EA5] mb-2">
                  {detail.subtitle}
                </h3>
                <p className="text-[#175EA5]"> {/* Cambiado el color del texto */}
                  {detail.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeSection;
