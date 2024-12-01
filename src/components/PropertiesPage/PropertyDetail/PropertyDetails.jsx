import React from 'react';

const PropertyDetails = ({ property }) => {
  // Funciones de formateo
  const formatToCLP = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatToUF = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Función para renderizar los precios
  const renderPrice = (clpPrice, ufPrice, ufValue) => {
    if (ufPrice > 0) {
      // Si el precio fue ingresado en UF
      return (
        <>
          <div>{formatToCLP(ufPrice * ufValue)}</div>
          <div className="text-xs text-gray-600">UF {formatToUF(ufPrice)}</div>
        </>
      );
    } else if (clpPrice > 0) {
      // Si el precio fue ingresado en CLP
      return (
        <>
          <div>{formatToCLP(clpPrice)}</div>
          <div className="text-xs text-gray-600">UF {formatToUF(clpPrice / ufValue)}</div>
        </>
      );
    }
    return '-';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-2xl mx-auto lg:max-w-full lg:px-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Detalle</h2>

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
                {renderPrice(
                  property.precio_venta,
                  property.precio_venta_uf,
                  property.valor_uf_al_momento
                )}
              </td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-tag mr-1 text-gray-600 text-base"></i> Arriendo
              </td>
              <td className="px-2 py-2 text-sm">
                {renderPrice(
                  property.precio_renta,
                  property.precio_renta_uf,
                  property.valor_uf_al_momento
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
              <td className="px-2 py-2 text-sm">
                {property.gastos_comunes ? formatToCLP(property.gastos_comunes) : '-'}
              </td>
              <td className="px-2 py-2 font-semibold flex items-center text-sm">
                <i className="fas fa-money-bill-wave mr-1 text-gray-600 text-base"></i> Contribuciones
              </td>
              <td className="px-2 py-2 text-sm">
                {property.contribuciones ? formatToCLP(property.contribuciones) : '-'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyDetails;