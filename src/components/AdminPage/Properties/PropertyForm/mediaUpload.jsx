import React, { useState, useEffect } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';

const MediaUpload = ({ formData, setFormData }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const MAX_IMAGES = 10;

  useEffect(() => {
    // Al montar, preparar las imágenes existentes como previsualizaciones
    const existingPreviews = formData.images.map((img) =>
      img instanceof File ? URL.createObjectURL(img) : img.image_url
    );
    setPreviewImages(existingPreviews);

    return () => {
      // Limpiar recursos de memoria al desmontar
      existingPreviews.forEach((preview) => {
        if (preview.startsWith('blob:')) URL.revokeObjectURL(preview);
      });
    };
  }, [formData.images]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + files.length;

    if (totalImages > MAX_IMAGES) {
      alert(`Solo puedes subir hasta ${MAX_IMAGES} imágenes.`);
      return;
    }

    const validFiles = files.filter((file) => {
      const isValidType = ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      alert('Algunas imágenes no cumplen con los requisitos: formato PNG, JPG, GIF y máximo 10MB.');
    }

    const newPreviewImages = validFiles.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: [...formData.images, ...validFiles] });
    setPreviewImages([...previewImages, ...newPreviewImages]);
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    const newPreviews = [...previewImages];
    const imageToRemove = formData.images[index];

    // Si la imagen tiene un ID, es del backend, así que la registramos para eliminar
    if (imageToRemove.id) {
      setFormData((prevData) => ({
        ...prevData,
        imagesToDelete: [...(prevData.imagesToDelete || []), imageToRemove.id],
        images: prevData.images.filter((_, i) => i !== index),
      }));
    } else {
      // Si es una imagen nueva (archivo), simplemente la eliminamos
      newImages.splice(index, 1);
      setFormData({ ...formData, images: newImages });
    }

    // Limpiar previsualización
    if (newPreviews[index].startsWith('blob:')) {
      URL.revokeObjectURL(newPreviews[index]);
    }
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Multimedia</h2>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="text-center">
          <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <label htmlFor="image-upload" className="cursor-pointer">
              <span className="text-blue-600 hover:text-blue-500">Cargar archivos</span>
              <input
                id="image-upload"
                type="file"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
              <span className="text-gray-600"> o arrastrar y soltar</span>
            </label>
          </div>
          <p className="text-gray-500 text-sm mt-1">PNG, JPG, GIF hasta 10MB</p>
        </div>
      </div>

      {previewImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {previewImages.map((preview, index) => (
            <div key={index} className="relative group">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="h-24 w-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No se han cargado imágenes aún. ¡Sube tus primeras imágenes!</p>
      )}
    </div>
  );
};

export default MediaUpload;
