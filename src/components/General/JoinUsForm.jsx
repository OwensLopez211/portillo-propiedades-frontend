import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

const JoinUs = ({ title, description, emailText, extraField, buttonText, lockedSubject, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: lockedSubject || '',
        message: '',
    });

    const [messageCharsLeft, setMessageCharsLeft] = useState(200);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message") {
            if (value.length <= 200) {
                setFormData({
                    ...formData,
                    [name]: value
                });
                setMessageCharsLeft(200 - value.length);
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
        onSubmit(formData);
        setFormData({ name: '', email: '', phone: '', subject: lockedSubject || '', message: '' });
        setMessageCharsLeft(200);
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
            {/* Texto informativo */}
            <div className="lg:w-1/2 pr-8 text-center">
                <h2 className="text-4xl font-bold mb-4 text-[#175EA5]">{title}</h2>
                
                {/* Renderizado de líneas con saltos */}
                <p className="text-lg mb-6 text-[#175EA5]">
                    {Array.isArray(description) ? description.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    )) : description}
                </p>
                
                <h3 className="text-xl font-semibold text-[#175EA5]">Déjanos tus datos y te contactaremos de inmediato.</h3>
                
                {/* Sección de Correo electrónico */}
                <div className="mt-4">
                    <h4 className="text-lg font-bold text-[#175EA5]">Correo electrónico</h4>
                    <p className="text-[#175EA5] font-semibold">{emailText}</p>
                </div>
                
                {/* Sección de Redes sociales */}
                <div className="mt-4">
                    <h4 className="text-lg font-bold text-[#175EA5]">Redes sociales</h4>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                        <FaInstagram 
                            className="text-[#175EA5] hover:text-purple-500 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.instagram.com/newland_propiedades_/', '_blank')}
                        />
                        <FaInstagram 
                            className="text-[#175EA5] hover:text-orange-500 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.instagram.com/terrenosysitioschile/', '_blank')}
                        />
                        <FaFacebookF 
                            className="text-[#175EA5] hover:text-blue-700 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.facebook.com/newlandpropiedades', '_blank')}
                        />
                        <FaFacebookMessenger 
                            className="text-[#175EA5] hover:text-blue-500 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://m.me/newlandpropiedades', '_blank')}
                        />
                        <FaWhatsapp 
                            className="text-[#175EA5] hover:text-green-600 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://wa.me/56912345678', '_blank')}
                        />
                    </div>
                </div>
            </div>

            {/* Formulario */}
            <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md text-center">
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
                            maxLength={200}
                            style={{ width: '100%', height: '150px', resize: 'none' }}
                        />
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
