// src/components/ContactDetails.jsx
import React from 'react';

const ContactDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Nuestros datos</h2>
      
      <p className="text-gray-700 mb-4">
        <strong>Dirección:</strong> El Director 6000, of. 108, Las Condes
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Email:</strong> marketing@portillapropiedades.cl
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Teléfonos:</strong><br />
        +56 22 985 7495<br />
        +56 9 8266 7512
      </p>
    </div>
  );
};

export default ContactDetails;
