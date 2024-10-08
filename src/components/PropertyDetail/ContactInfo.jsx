import React from 'react';

const ContactInfo = ({ agent }) => {
  const profileImageUrl = agent.profile_image 
    ? `${agent.profile_image}` 
    : 'url_to_default_image';  // Imagen por defecto en caso de que no haya imagen de perfil

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-col items-center mb-4">
        <img 
          src={profileImageUrl} 
          alt={agent.name} 
          className="w-[390px] h-[390px] rounded-full mb-4 object-cover"  // Ajuste del tamaño de la imagen
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold">{agent.name}</h3>
          <p className="text-gray-600">{agent.phone}</p>
          <p className="text-gray-600">{agent.email}</p>
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
