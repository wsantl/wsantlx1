import React from 'react';

import './App.css';
import Header from './components/Header';
import ContentBio from './components/ContentBio';
import ContentInfo from './components/ContentInfo';
import Content1 from './components/Content1';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <section className="section section-light"><ContentBio /></section>
      <section className="section section-dark"><ContentInfo /></section>
      <section className="section section-light"><Content1 /></section>
      <section className="section section-dark"><About /></section>
      <section className="section section-light"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
