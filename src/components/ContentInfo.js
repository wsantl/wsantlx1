import React, { useEffect } from 'react';
import './ContentInfo.css';
import { FaGraduationCap, FaCertificate, FaUserShield, FaLinux } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContentInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="info-section">
      <h2 className="section-heading">Formação e Habilidades</h2>

      <div className="info-cards">
        <div className="info-card" data-aos="fade-up">
          <div className="card-header">
            <FaGraduationCap className="card-icon" />
            <h3>Formação Acadêmica</h3>
          </div>
          <p>Análise e Desenvolvimento de Sistemas</p>
          <p className="info-date">Conclusão prevista: Dezembro de 2025</p>
        </div>

        <div className="info-card" data-aos="fade-up">
          <div className="card-header">
            <FaCertificate className="card-icon" />
            <h3>Frontend</h3>
          </div>
          <p>HTML, CSS, JavaScript, Bootstrap, React</p>
        </div>

        <div className="info-card" data-aos="fade-up">
          <div className="card-header">
            <FaCertificate className="card-icon" />
            <h3>Backend</h3>
          </div>
          <p>Node.js (Express), Python (Django), PHP (Laravel), Java (Spring Boot - básico)</p>
        </div>

        <div className="info-card" data-aos="fade-up">
          <div className="card-header">
            <FaUserShield className="card-icon" />
            <h3>Segurança da Informação</h3>
          </div>
          <p>Em andamento — Kali Linux, redes, pentest básico</p>
        </div>

        <div className="info-card" data-aos="fade-up">
          <div className="card-header">
            <FaLinux className="card-icon" />
            <h3>Conhecimentos em Linux</h3>
          </div>
          <p>Experiência com distros como Debian, Ubuntu, Fedora e Kali Linux. Familiaridade com terminal, bash, permissões, serviços e segurança básica.</p>
        </div>
      </div>
    </section>
  );
};

export default ContentInfo;
