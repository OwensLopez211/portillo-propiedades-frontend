import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1022);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1022);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  );
};

export default Navbar;
