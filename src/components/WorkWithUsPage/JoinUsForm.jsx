import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa'; // Importar el icono de Instagram

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario enviados:', formData);
        setFormData({ name: '', email: '', subject: '', message: '', resume: null }); // Resetea el formulario
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-lg flex flex-col lg:flex-row">
            {/* Texto informativo */}
            <div className="lg:w-1/2 pr-8">
                <h2 className="text-4xl font-bold mb-4 text-center">¡Únete a nuestro equipo!</h2>
                <p className="text-lg mb-6 text-justify">
                    No importa si tienes o no experiencia, tampoco nos importa tu edad. Lo que sí nos importa es que seas dinámico, proactivo, creativo, apasionado, positivo, colaborativo, flexible, con ganas de trabajar, emprendedor, optimista, alegre, entusiasta, constructivo y comprometido.
                </p>
                <h3 className="text-xl font-semibold text-center">Déjanos tus datos y te contactaremos de inmediato.</h3>
                
                {/* Sección de Correo electrónico */}
                <div className="mt-4 text-center">
                    <h4 className="text-lg font-bold">Correo electrónico</h4>
                    <p className="text-gray-600">Contacto@newlandpropiedades.cl</p>
                </div>
                
                {/* Sección de Redes sociales */}
                <div className="mt-2 text-center">
                    <h4 className="text-lg font-bold">Redes sociales</h4>
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
                        required 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo electrónico" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="Asunto" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Mensaje" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    />
                    {/* Campo para subir currículum */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold">Currículum</label>
                        <input 
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileChange} 
                            required 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;
