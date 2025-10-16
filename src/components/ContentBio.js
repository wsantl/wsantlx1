import React from 'react';
import './ContentBio.css';
import perfil from '../img/perfil.jpeg';


function ContentBio() {
  return (
    <section className="bio" id="home">
      <div className="bio-container">
        <img src={perfil} alt="wSantx1" className="bio-avatar" />

        <div className="bio-info">
          <h1>Oi, eu sou <span>wSantx1</span> 👋</h1>
          <p>
            Sou desenvolvedor <strong>Backend</strong> com foco em criar aplicações robustas, escaláveis e bem estruturadas. Trabalho com Python (Django), Node.js (Express) e PHP (Laravel), sempre prezando por código limpo, boas práticas e performance.
            Tenho experiência com bancos de dados como MySQL e gosto de pensar cada detalhe da arquitetura do lado servidor.
            Estou sempre buscando aprender, evoluir e testar novas soluções.
            Ah, e de vez em quando também me aventuro no frontend, usando HTML, CSS, JavaScript, React e outras ferramentas do ecossistema.
          </p>

          <div className="bio-links">
            <a href="https://github.com/wsantl" target="">GitHub</a>
            <a href="https://linkedin.com/in/seuusuario" target="">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentBio;