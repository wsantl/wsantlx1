import React from 'react';
import './Contact.css';

const Contato = () => {
  return (
    <section className="contato-section" id="contact">
      <h2 className="contato-title">Entre em Contato</h2>
      <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="mensagem" placeholder="Sua mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;
