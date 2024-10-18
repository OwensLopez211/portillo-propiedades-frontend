import React from 'react';

const AgentCard = ({ agent }) => {
  // URL de la imagen de perfil del agente o una imagen por defecto
  const profileImageUrl = agent.profile_image_url 
    ? agent.profile_image_url 
    : 'https://via.placeholder.com/150';  // URL de imagen por defecto

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative p-6 bg-gray-50">
        <img
          src={profileImageUrl}
          alt={agent.name}
          className="mx-auto w-24 h-24 rounded-full object-cover border-4 border-orange-600"
        />
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold">{agent.name}</h3>
          <p className="text-orange-600 font-semibold">{agent.role}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="text-center">
          <p className="text-gray-700 mb-2">
            <i className="fas fa-phone-alt mr-2"></i>{agent.phone}
          </p>
          <p className="text-gray-700">
            <i className="fas fa-envelope mr-2"></i>{agent.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
