import React from 'react';

const PropertyDetails = ({ property }) => {
  // Constante para el valor actual de la UF
  const UF_VALUE = 37940.71;

  // Función para calcular el precio en UF
  const calculateUfPrice = (priceInClp) => {
    return (priceInClp / UF_VALUE).toFixed(2);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-2xl mx-auto lg:max-w-full lg:px-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Detalle</h2>

      {/* Envolver la tabla en un contenedor con overflow-x-auto */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody>
            {/* Código y Tipo */}
            <tr className="border-b">
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-barcode mr-1 text-gray-600 text-base"></i> Código
              </td>
              <td className="px-2 py-2 text-sm">{property.id}</td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-home mr-1 text-gray-600 text-base"></i> Tipo
              </td>
              <td className="px-2 py-2 text-sm">{property.tipo_propiedad}</td>
            </tr>

            {/* Venta y Arriendo */}
            <tr className="border-b">
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-tag mr-1 text-gray-600 text-base"></i> Venta
              </td>
              <td className="px-2 py-2 text-sm">
                {property.precio_venta ? (
                  <>
                    UF {calculateUfPrice(property.precio_venta)} {/* Precio en UF */}
                    <div className="text-xs text-gray-600">{`$${property.precio_venta}`}</div>
                  </>
                ) : (
                  '-'
                )}
              </td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-tag mr-1 text-gray-600 text-base"></i> Arriendo
              </td>
              <td className="px-2 py-2 text-sm">
                {property.precio_renta ? (
                  <>
                    UF {calculateUfPrice(property.precio_renta)} {/* Precio en UF */}
                    <div className="text-xs text-gray-600">{`$${property.precio_renta}`}</div>
                  </>
                ) : (
                  '-'
                )}
              </td>
            </tr>

            {/* Dormitorios y Baños */}
            <tr className="border-b">
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-bed mr-1 text-gray-600 text-base"></i> Dormitorios
              </td>
              <td className="px-2 py-2 text-sm">{property.habitaciones || '-'}</td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-bath mr-1 text-gray-600 text-base"></i> Baños
              </td>
              <td className="px-2 py-2 text-sm">{property.baños || '-'}</td>
            </tr>

            {/* Gastos comunes y Contribuciones */}
            <tr>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-money-bill-wave mr-1 text-gray-600 text-base"></i> G. comunes
              </td>
              <td className="px-2 py-2 text-sm">{property.gastos_comunes ? `$${property.gastos_comunes}` : '-'}</td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-money-bill-wave mr-1 text-gray-600 text-base"></i> Contribuciones
              </td>
              <td className="px-2 py-2 text-sm">{property.contribuciones ? `$${property.contribuciones}` : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyDetails;
