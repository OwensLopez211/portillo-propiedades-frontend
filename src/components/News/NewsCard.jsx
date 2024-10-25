import React from 'react';

const NewsCard = ({ image, date, category, title, description, author, authorRole, authorImage }) => {
    return (
      <div className="p-8 bg-gray-100 rounded-2xl shadow-inner shadow-[8px_8px_15px_rgba(0,0,0,0.15),-8px_-8px_15px_rgba(255,255,255,0.7)] mx-auto">  
        <div>
          {/* Imagen */}
          <img className="w-full h-48 object-cover" src={image} alt={title} />
  
          {/* Contenido del título y descripción con altura fija */}
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2 h-16 overflow-hidden">{title}</div> {/* Fija la altura del título */}
            <p className="text-gray-700 text-base h-20 overflow-hidden">{description}</p> {/* Fija la altura de la descripción */}
          </div>
        </div>
  
        {/* Fecha y Categoría */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span className="text-gray-600 text-sm">{date}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">{category}</span>
        </div>
  
        {/* Información del autor */}
        <div className="flex items-center px-6 py-4 mt-auto">
          <img className="w-10 h-10 rounded-full mr-4" src={authorImage} alt={author} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            <p className="text-gray-600">{authorRole}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  