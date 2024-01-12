import { NavbarListComponent } from './NavbarListComponent';
import headerLogo from '../assets/gfigueras.webp';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';

export function Navbar() {
  return (
    <header className="header">
      <a href="#main" className="image-link">
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
