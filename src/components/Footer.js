import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} - wSantx1. Todos os direitos reservados.</p>
        <div className="footer-socials">
          <a href="https://github.com/wsantl" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Espaço livre para adicionar mais coisas */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
