import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const JoinUs = ({ title, description, emailText, extraField, buttonText, lockedSubject, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Campo de celular
        subject: lockedSubject || '', // Campo de asunto bloqueado si se pasa
        message: '', // Campo de mensaje
    });

    const [messageCharsLeft, setMessageCharsLeft] = useState(200); // Carácteres restantes para el mensaje

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message") {
            // Limita el número de caracteres a 200
            if (value.length <= 200) {
                setFormData({
                    ...formData,
                    [name]: value
                });
                setMessageCharsLeft(200 - value.length); // Actualiza el contador
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llama a la función de submit que se pasa como prop
        onSubmit(formData);
        setFormData({ name: '', email: '', phone: '', subject: lockedSubject || '', message: '' });
        setMessageCharsLeft(200); // Reinicia el contador
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-lg flex flex-col lg:flex-row">
            {/* Texto informativo */}
            <div className="lg:w-1/2 pr-8">
                <h2 className="text-4xl font-bold mb-4 text-center text-[#175EA5]">{title}</h2>
                <p className="text-lg mb-6 text-justify text-[#175EA5]">{description}</p>
                
                <h3 className="text-xl font-semibold text-center text-[#175EA5]">Déjanos tus datos y te contactaremos de inmediato.</h3>
                
                {/* Sección de Correo electrónico */}
                <div className="mt-4 text-center">
                    <h4 className="text-lg font-bold text-[#175EA5]">Correo electrónico</h4>
                    <p className="text-gray-600">{emailText}</p>
                </div>
                
                {/* Sección de Redes sociales */}
                <div className="mt-2 text-center">
                    <h4 className="text-lg font-bold text-[#175EA5]">Redes sociales</h4>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <FaInstagram 
                            className="text-blue-500 hover:text-blue-700 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.instagram.com/newland_propiedades_/', '_blank')}
                        />
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => window.open('https://instagram.com', '_blank')}>
                            Síguenos
                        </span>
                    </div>
                </div>
            </div>

            {/* Formulario */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo electrónico" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Celular" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {lockedSubject ? (
                        <input 
                            type="text" 
                            name="subject" 
                            value={lockedSubject} 
                            readOnly 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-200"
                        />
                    ) : (
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder={extraField} 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                    
                    {/* Textarea con límite de caracteres y tamaño fijo */}
                    <div className="relative">
                        <textarea 
                            name="message" 
                            placeholder="Mensaje (max 200 caracteres)" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            maxLength={200} // Esto asegura que no supere los 200 caracteres
                            style={{ width: '100%', height: '150px', resize: 'none' }} // Tamaño fijo y sin redimensionar
                        />
                        {/* Indicador de caracteres restantes */}
                        <span className="absolute bottom-2 right-2 text-gray-500 text-sm">
                            {messageCharsLeft} caracteres restantes
                        </span>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 transition duration-300"
                    >
                        {buttonText || 'Enviar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;
