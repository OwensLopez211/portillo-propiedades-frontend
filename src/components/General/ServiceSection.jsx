import React from 'react';

const ServiceSection = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden mb-6 border-l-4 border-orange-500">
      <div className="md:w-1/4 w-full h-auto">
        <img src={image} alt={title} className="w-full h-full object-cover md:object-contain" />
      </div>
      <div className="p-4 md:w-3/4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection;