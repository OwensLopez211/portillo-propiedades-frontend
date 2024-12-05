import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa';

const JoinUs = ({ title, description, emailText, extraField, buttonText, lockedSubject }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: lockedSubject || '',
        message: '',
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [messageCharsLeft, setMessageCharsLeft] = useState(200);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message") {
            if (value.length <= 200) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
                setMessageCharsLeft(200 - value.length);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const formattedData = {
                nombre: formData.name,
                email: formData.email,
                mensaje: `${formData.message}\n\nTeléfono: ${formData.phone}`,
                asunto: lockedSubject
            };

            const response = await fetch('https://newlandpropiedades.cl/api/contact/enviar-correo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: lockedSubject || '',
                    message: ''
                });
                setMessageCharsLeft(200);
            } else {
                throw new Error(data.error || 'Error al enviar el formulario');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.'
            });
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-50 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 pr-8 text-center">
                <h2 className="text-4xl font-bold mb-4 text-[#175EA5]">{title}</h2>
                <p className="text-lg mb-6 text-[#175EA5]">
                    {Array.isArray(description) ? description.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    )) : description}
                </p>
                <h3 className="text-xl font-semibold text-[#175EA5]">Déjanos tus datos y te contactaremos de inmediato.</h3>
                <div className="mt-4">
                <a 
                    href={`mailto:${emailText}`} 
                    className="text-[#175EA5] font-semibold hover:underline"
                >
                    {emailText}
                </a>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-4">
                    <FaWhatsapp className="text-lg sm:text-xl text-[#175EA5]" />
                    <a 
                        href="https://wa.me/56998472202" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm sm:text-base font-medium text-[#175EA5]"
                    >
                        +56 9 9847 2202
                    </a>
                </div>

                <div className="flex items-center justify-center space-x-2 mt-2">
                    <img 
                        src="/estados-unidos.png"
                        alt="American Flag" 
                        className="w-5 sm:w-6 h-auto object-contain"
                    />
                    <span className="text-sm sm:text-base font-medium text-[#175EA5]">
                        We speak English
                    </span>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg font-bold text-[#175EA5]">Redes sociales</h4>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                        <FaInstagram 
                            className="text-pink-500 hover:text-pink-400 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.instagram.com/newland_propiedades_/', '_blank')}
                        />
                        <FaInstagram 
                            className="text-purple-500 hover:text-pink-400 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.instagram.com/terrenosysitioschile/', '_blank')}
                        />
                        <FaFacebookF 
                            className="text-blue-600 hover:text-blue-500 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://www.facebook.com/newlandpropiedades', '_blank')}
                        />
                        <FaFacebookMessenger 
                            className="text-blue-500 hover:text-blue-400 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://m.me/newlandpropiedades', '_blank')}
                        />
                        <FaWhatsapp 
                            className="text-green-500 hover:text-green-400 transition duration-300 cursor-pointer"
                            size={30} 
                            onClick={() => window.open('https://wa.me/56912345678', '_blank')}
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md text-center">
                    {submitStatus.message && (
                        <div className={`p-4 rounded-lg ${
                            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}
                    
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#175EA5]"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo electrónico" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#175EA5]"
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Celular" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#175EA5]"
                    />
                    
                    {lockedSubject ? (
                        <input 
                            type="text" 
                            name="subject" 
                            value={lockedSubject} 
                            readOnly 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-200 text-[#175EA5]"
                        />
                    ) : (
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder={extraField} 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#175EA5]"
                        />
                    )}
                    
                    <div className="relative">
                        <textarea 
                            name="message" 
                            placeholder="Mensaje (max 200 caracteres)" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#175EA5]"
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
                        disabled={isSubmitting}
                        className={`bg-blue-500 text-white rounded-lg p-3 transition duration-300 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                        }`}
                    >
                        {isSubmitting ? 'Enviando...' : (buttonText || 'Enviar')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinUs;