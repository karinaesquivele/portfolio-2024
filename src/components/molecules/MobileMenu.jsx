import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import iconMenu from "../../assets/img/icons/menu.svg";
import iconClose from "../../assets/img/icons/close.svg";
import logoHeader from "../../assets/img/logos/logo.svg";

function MobileMenu() {
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    gsap.to(menuRef.current, { top: '0px', duration: 0.5 });
  };

  const cleanAnimation = () => {
    gsap.to(menuRef.current, { clearProps: 'all' });
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, { top: '-100%', duration: 1 });
    setTimeout(() => {
      cleanAnimation();
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Cambia 50 por el valor que prefieras
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex md:hidden w-full px-10 py-3 relative menu-mobile ${isScrolled ? 'bg-white' : ''}`}>
      <div
        className={`float-menu w-full fixed left-0 top-0 py-3 px-10 ${isScrolled ? 'bg-white' : ''}`}
        ref={menuRef}
      >
        <div className="relative w-full">
          <button className="close absolute right-0 p-3" onClick={closeMenu}>
            <img src={iconClose} alt="Ícono para cerrar menú" className="" />
          </button>
        </div>
        <div className="w-full items-center flex justify-center ">
          <img src={logoHeader} alt="Logo de la empresa" className="logo" />
        </div>

        <nav className="w-full px-10">
          <ul className="py-4 inline-grid grid-cols-2 grid-rows-2 gap-2 items-center">
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#technologies">Tecnologías</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full items-center flex justify-center ">
        <img src={logoHeader} alt="Logo de la empresa" className="logo" />
      </div>
      <button className="menu absolute right-0 p-3" onClick={openMenu}>
        <img src={iconMenu} alt="Ícono para abrir menú" className="" />
      </button>
    </div>
  );
}

export default MobileMenu;
