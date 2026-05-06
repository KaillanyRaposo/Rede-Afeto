import "../home.css";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/foto1.jpg",
    alt: "Crianças brincando com blocos"
  },
  {
    src: "/foto2.jpg",
    alt: "Criança pintando"
  },
  {
    src: "/foto3.jpg",
    alt: "Criança sorrindo"
  }
];
export default function Home({ setCurrentPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>
      {/* Barra de navegação */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="nav-brand">
            <svg
              className="nav-heart-icon"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M50 85C50 85 15 57 15 37C15 25 25 15 37 15C42 15 47 17 50 22C53 17 58 15 63 15C75 15 85 25 85 37C85 57 50 85 50 85Z"
                stroke="#2C3C3C"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="brand-name">RedeAfeto</h2>
          </div>
        </div>
        <div className="nav-links">
          <span>Histórias</span>
          <span>O que é apadrinhamento afetivo</span>
          <span>Sobre nós</span>
        </div>
        <div className="nav-buttons">
          <button className="btn-login" onClick={() => setCurrentPage("login")}>
            Login
          </button>
          <button className="btn-register" onClick={() => setCurrentPage("login", "signup")}>
            Cadastre-se
          </button>
        </div>
      </nav>

      {/* Seção principal */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            Toda criança <br />
            merece contar sua <span className="highlight">história</span>.
          </h1>
          <p>
            Conheça Histórias. Crie conexões. Transforme vidas
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Conheça nossas histórias</button>
            <button className="btn-secondary">
              Entenda o que é apadrinhamento afetivo
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="carousel">
            <div className="image-placeholder">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={index === currentIndex ? "active" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção O que Fazemos */}
      <section className="section what-we-do">
        <div className="section-content">
          <h2 className="section-title">O que Fazemos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Compartilhamos histórias</h3>
              <p>Divulgamos histórias de crianças acolhidas, apresentando suas vivências de forma respeitosa e humanizada, para dar visibilidade a realidades muitas vezes pouco conhecidas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Promovemos conscientização</h3>
              <p>Levamos informação à sociedade, ajudando as pessoas a compreenderem melhor o contexto do acolhimento e os desafios enfrentados por essas crianças.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Incentivamos empatia e apoio</h3>
              <p>Buscamos despertar o olhar sensível da população, incentivando atitudes de empatia, acolhimento e envolvimento com a causa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nosso Objetivo */}
      <section className="section our-goal">
        <div className="section-content">
          <div className="goal-content">
            <div className="goal-text">
              <h2 className="section-title">Nosso Objetivo</h2>
              <p>
                Nosso projeto tem como objetivo dar visibilidade às histórias de crianças acolhidas, compartilhando suas trajetórias e realidades para ampliar o conhecimento da sociedade sobre esse contexto. Buscamos sensibilizar a população sobre os desafios enfrentados por essas crianças, promovendo empatia, conscientização e uma compreensão mais humana sobre a importância do acolhimento e do apoio social.
              </p>
            </div>
            <div className="goal-image">
              <img src="/foto2.jpg" alt="Criança sorrindo" />
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="brand-name">RedeAfeto</h3>
          <p>Conectando corações, transformando vidas.</p>
          <div className="footer-links">
            <span>Histórias</span>
            <span>Sobre nós</span>
            <span>Contato</span>
          </div>
          <p className="copyright">© 2026 RedeAfeto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
