import { NavbarListComponent } from './NavbarListComponent';
import headerLogo from '../assets/gfigueras.png';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  const actualizarDimensiones = () => {
    setAnchoPantalla(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', actualizarDimensiones);

    return () => {
      window.removeEventListener('resize', actualizarDimensiones);
    };
  }, []);

  const esMovil = anchoPantalla <= 768; // Puedes ajustar este umbral según tus necesidades

  const handleClick = () => {
    if (esMovil) {
        let header = document.querySelector('.header')
        let image = document.querySelector('.header-logo')
      header.style.height = '100vh';
      header.style.display = "flex";
      image.style.height = "30px";
      image.style.alignSelf = "start"
      image.style.marginTop = "35%"
      
    }
    // Puedes agregar más lógica si es necesario
  };

  return (
    <header className={`header ${esMovil ? 'mobile' : ''}`}>
      <a href="#main" className="image-link" onClick={handleClick}>
        <img className="header-logo" src={headerLogo} alt="" />
      </a>
      <ul className="ul-navbar">
        <NavbarListComponent text="ABOUT" link="#about" />
        {/* <NavbarListComponent text="PROJECTS" link="#projects" /> */}
        <NavbarListComponent text="SKILLS" link="#skills" />
      </ul>
    </header>
  );
}
