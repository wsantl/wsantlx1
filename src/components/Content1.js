import React, { useState } from 'react';
import './Content1.css';

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';

const projects = [
  {
    image: img1,
    title: "Spotify Clone",
    description: "Uma página CLONE (estática) criada com HTML e CSS e Bootstrap feito com a finalidade educacional.",
    link: "https://github.com/wsantl/projeto1"
  },
  {
    image: img2,
    title: "YouTube Downloader",
    description: "Projeto em Python (Flask) para baixar áudio (mp3) ou vídeo (mp4) via URL.",
    link: "https://github.com/wsantl/projeto2"
  },
  {
    image: img3,
    title: "Tela de Login",
    description: "Uma tela de login interativa criada com HTML, CSS e JavaScript.",
    link: "https://github.com/wsantl/projeto3"
  },
  {
    image: img4,
    title: "Projeto de API",
    description: "API em Node.js para consumo em frontend integrado.",
    link: "https://github.com/wsantl/projeto4"
  }
];

const Content1 = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">🚀 Meus Projetos</h2>
      <div className="carousel-wrapper">
        <button className="carousel-button" onClick={handlePrev} disabled={startIndex === 0}>
          &#10094;
        </button>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button" onClick={handleNext} disabled={startIndex + 3 >= projects.length}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Content1;
