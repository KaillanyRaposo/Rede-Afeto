import "../home.css";
import "../historias.css";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/foto1.png",
    alt: "Crianças brincando com blocos"
  },
  {
    src: "/foto2.png",
    alt: "Criança pintando"
  },
  {
    src: "/foto3.png",
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
      <nav className="historias-navbar">
        <div className="historias-brand brand-name">RedeAfeto</div>

        <div className="historias-navlinks" role="navigation" aria-label="Menu">
          <button type="button" className="historias-navlink is-active" onClick={() => setCurrentPage("home")}>
            Início
          </button>
          <button type="button" className="historias-navlink" onClick={() => setCurrentPage("historias")}>
            Histórias
          </button>
          <button type="button" className="historias-navlink" onClick={() => setCurrentPage("apadrinhamento")}>
            O que é apadrinhamento afetivo
          </button>
          <button type="button" className="historias-navlink" onClick={() => setCurrentPage("sobre-nos")}>
            Sobre nós
          </button>
        </div>

        <div className="historias-actions">
          <button type="button" className="historias-action-link" onClick={() => setCurrentPage("login")}>
            Login
          </button>
          <button
            type="button"
            className="historias-action-primary"
            onClick={() => setCurrentPage("login", "signup")}
          >
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
            <button className="btn-primary" onClick={() => setCurrentPage("historias")}>
              Conheça nossas histórias
            </button>
            <button className="btn-secondary" onClick={() => setCurrentPage("apadrinhamento")}>
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
               Nosso projeto busca aproximar a sociedade da realidade de crianças e adolescentes em situação de acolhimento institucional de forma segura e humanizada, promovendo empatia, conscientização e apoio social. Além disso, a plataforma busca incentivar o hábito da leitura através de uma biblioteca digital gratuita,contribuindo para o aprendizado e desenvolvimento das crianças.

              </p>
            </div>
            <div className="goal-image">
              <img src="/foto4.png" alt="Criança sorrindo" />
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
            <span onClick={() => setCurrentPage("historias")}>Histórias</span>
            <span onClick={() => setCurrentPage("sobre-nos")}>Sobre nós</span>
            <span>Contato</span>
          </div>
          <p className="copyright">© 2026 RedeAfeto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
