// src/components/Carousel.jsx

import React, { useState } from 'react';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="w-full h-[500px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-orange-600 hover:bg-orange-700 p-2 rounded-full"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-orange-600 hover:bg-orange-700 p-2 rounded-full"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
