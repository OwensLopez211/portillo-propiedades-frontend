import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4">Detalle</h2>
      <table className="w-full text-left table-auto border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-barcode mr-2"></i> Código
            </td>
            <td className="px-4 py-2">{property.id}</td>
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-home mr-2"></i> Tipo
            </td>
            <td className="px-4 py-2">{property.tipo_propiedad}</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-tag mr-2"></i> Venta
            </td>
            <td className="px-4 py-2">{property.precio_venta ? `$${property.precio_venta}` : '-'}</td>
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-tag mr-2"></i> Arriendo
            </td>
            <td className="px-4 py-2">
              {property.precio_renta_uf ? `UF ${property.precio_renta_uf}` : '-'}
              {property.precio_renta && <div className="text-sm text-gray-600">{`$${property.precio_renta}`}</div>}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-bed mr-2"></i> Dormitorios
            </td>
            <td className="px-4 py-2">{property.habitaciones || '-'}</td>
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-bath mr-2"></i> Baños
            </td>
            <td className="px-4 py-2">{property.baños || '-'}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-money-bill-wave mr-2"></i> G. comunes
            </td>
            <td className="px-4 py-2">{property.gastos_comunes ? `$${property.gastos_comunes}` : '-'}</td>
            <td className="px-4 py-2 font-semibold flex items-center">
              <i className="fas fa-money-bill-wave mr-2"></i> Contribuciones
            </td>
            <td className="px-4 py-2">{property.contribuciones ? `$${property.contribuciones}` : '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PropertyDetails;
