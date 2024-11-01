import React from 'react';

const ContactInfo = ({ agent = {} }) => {
  const profileImageUrl = agent.profile_image_url || 'https://via.placeholder.com/225';

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-col items-center mb-4">
        <img 
          src={profileImageUrl} 
          alt={agent.name || 'Agente'} 
          className="w-[225px] h-[225px] rounded-full mb-4 object-cover"
          style={{ imageRendering: 'crisp-edges' }} // Aplica image-rendering para mejorar la nitidez
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold">{agent.name || 'Nombre no disponible'}</h3>
          <p className="text-gray-600">{agent.phone || 'Teléfono no disponible'}</p>
          <p className="text-gray-600">{agent.email || 'Email no disponible'}</p>
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full w-full">Contactar</button>
      <form className="mt-4 space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Nombre y Apellidos" />
        <input className="w-full p-2 border rounded" placeholder="Teléfono" />
        <input className="w-full p-2 border rounded" placeholder="Email" />
        <textarea className="w-full p-2 border rounded" placeholder="Comentarios"></textarea>
        <button className="bg-orange-600 text-white px-4 py-2 rounded w-full">Enviar</button>
      </form>
    </div>
  );
};

export default ContactInfo;
