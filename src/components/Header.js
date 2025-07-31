import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">wSantx1</div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#projects" onClick={toggleMenu}>Projetos</a>
          <a href="#about" onClick={toggleMenu}>Sobre</a>
          <a href="#contact" onClick={toggleMenu}>Contato</a>
        </nav>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
