import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-8 p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg">
            {/* Texto e Imagen Principal */}
            <div className="w-full lg:flex lg:flex-row items-center">
                {/* Texto */}
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl font-bold mb-4 text-[#175EA5]">Tu camino inmobiliario, nuestra prioridad.</h2>
                    <p className="mb-4 text-justify text-[#175EA5]">
                    Somos un equipo de profesionales con años de experiencia en el mercado dedicados a brindarte un servicio inmobiliario
                    integral y personalizado.
                    Más que un agente, somos tu aliado estratégico; confiando en nosotros podrás tomar las mejores decisiones.
                    Te acompañamos en cada paso del proceso de compra, venta o arriendo, asegurando que encuentres la propiedad ideal
                    para tus necesidades y objetivos.
                    
                    </p>
                    <p className="text-justify text-[#175EA5]">
                        Nuestra experiencia y compromiso junto con soluciones a tu medida y objetivos reales te garantizan tranquilidad y
                        satisfacción en cada etapa, desde la búsqueda de la propiedad ideal hasta la gestión de todos los trámites.
                    </p>
                </div>

                {/* Imagen */}
                <div className="lg:w-1/2 p-6 flex justify-center">
                    <img 
                        src="/Aboutimage.png" 
                        alt="About Us" 
                        className="rounded-lg shadow-md" 
                        style={{ width: '300px', height: '350px' }} // Tamaño reducido
                    />
                </div>
            </div>

            {/* Sección de Socias */}
            <div className="w-full mt-10 p-6 bg-transparent rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-center text-[#175EA5] mb-6">Socias</h3>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    {/* Carol */}
                    <div className="md:w-1/2 text-center p-4">
                    <img 
                        src="Carol.jpg" 
                        alt="Carol" 
                        className="rounded-full mx-auto mb-4 shadow-md" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Carol</h4>
                        <p className="text-justify text-[#175EA5] mt-2">
                        He trabajado en proyectos diversos, desde el diseño corporativo para grandes empresas hasta la creación de productos.
                        Mi enfoque combina creatividad, funcionalidad y un profundo entendimiento del cliente.
                        Apasionada por crear marcas, espacios que perduran y productos con alma.
                        Con más de 17 años de experiencia en el sector inmobiliario y más de 35 como Diseñador he desarrollado una profunda
                        comprensión de cómo el diseño de un espacio puede influir significativamente en la calidad de vida de las personas.
                        Mi enfoque se centra en entender al cliente, construir relaciones sólidas y de confianza basadas en la transparencia, la
                        comunicación abierta y la atención a los detalles, maximizando el potencial de cada propiedad; empleando una
                        estrategia sólida y una meticulosa planificación para garantizar que cada transacción se cierre de manera exitosa y
                        satisfactoria.
                        En resumen, mi pasión por el diseño y mi experiencia en el sector inmobiliario me permiten ayudar a mis clientes a
                        encontrar el hogar perfecto y a transformar los espacios en lugares donde puedan disfrutar plenamente de la vida.
                        </p>
                    </div>
                    
                    {/* Susana */}
                    <div className="md:w-1/2 text-center p-4">
                    <img 
                        src="Susana.jpg" 
                        alt="Susana" 
                        className="rounded-full mx-auto mb-4 shadow-md" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                        <h4 className="text-xl font-semibold text-[#175EA5]">Susana</h4>
                        <p className="text-justify text-[#175EA5] mt-2">
                        Susana aporta más de 35 años de experiencia en el mercado inmobiliario. A lolargo de su carrera, ha trabajado en el dise
                        ño de proyectos arquitectónicos, remodelaciones y la gestión de proyectos ensectores como telecomunicaciones, constr
                        ucción y prefabricados de hormigón. 
                        Reconocida por su capacidad para construir relaciones duraderas con clientes y ampliar redes comerciales, se caracteriza
                        por un enfoque estratégico y personalizado en cada proyecto. 
                        Su habilidad para crear espacios funcionales y visualmente atractivos, junto con su dedicación al cliente, la posicionan co
                        mo la profesional ideal para quienes buscan un hogar que se ajuste a su estilo de vida.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
