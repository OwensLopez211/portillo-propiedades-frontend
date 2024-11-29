import React from 'react';
import { FiHome, FiList, FiMapPin, FiImage } from 'react-icons/fi';

const FormProgress = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Información Básica', icon: FiHome },
    { number: 2, title: 'Detalles', icon: FiList },
    { number: 3, title: 'Ubicación', icon: FiMapPin },
    { number: 4, title: 'Multimedia', icon: FiImage },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map(step => (
          <div
            key={step.number}
            className={`flex flex-col items-center w-1/4 ${
              currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2
              ${currentStep >= step.number ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
            >
              <step.icon className="w-5 h-5" />
            </div>
            <span className="text-xs text-center">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 h-1 bg-gray-200 w-full">
          <div
            className="absolute h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FormProgress;