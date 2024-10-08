import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
        <h3 className="text-white text-lg font-semibold text-center">
          {service.title}
        </h3>
        <p className="text-white text-center mt-2">{service.description}</p>
      </div>
      <div className="p-4">
        <h4 className="text-center text-lg font-bold">{service.title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
