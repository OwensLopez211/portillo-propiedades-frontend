import React from 'react';

const NewsTicker = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden text-white py-2 shadow-md z-50 bg-transparent">
      <div className="ticker-animation whitespace-nowrap">
        <span className="px-4 font-semibold">{message}</span>
      </div>

      {/* CSS en línea para el loop de animación */}
      <style>
        {`
          .ticker-animation {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-left 30s linear infinite; /* Ajusta el tiempo de animación */
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NewsTicker;
