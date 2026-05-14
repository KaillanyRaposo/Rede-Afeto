import "../home.css";
import "../historias.css";
import { useEffect, useState } from "react";
import padrinhos1Img from "../assets/historias/padrinhos1.png";
import padrinhos2Img from "../assets/historias/padrinhos2.png";
import padrinhos3Img from "../assets/historias/padrinhos3.png";
import abracoPadrinhosImg from "../assets/historias/abraço_padrinhos.png";

const images = [
  { src: padrinhos1Img, alt: "Padrinhos e criança em um momento de convivência" },
  { src: padrinhos2Img, alt: "Conexão afetiva em um encontro acompanhado" },
  { src: padrinhos3Img, alt: "Apoio e presença na rotina de uma criança acolhida" }
];

const roleTopics = [
  {
    title: "Presença e convivência",
    description:
      "Criar uma relação de confiança com encontros combinados e regulares, oferecendo uma convivência segura e respeitosa."
  },
  {
    title: "Apoio emocional",
    description:
      "Escutar, acolher e incentivar, ajudando a criança ou adolescente a se sentir visto, valorizado e capaz."
  },
  {
    title: "Referência positiva",
    description:
      "Ser um adulto de confiança que inspira bons exemplos, autonomia e autoestima, sem substituir vínculos familiares."
  },
  {
    title: "Respeito à história e aos limites",
    description:
      "Compreender que cada criança tem uma trajetória única, respeitando tempos, regras e orientações da instituição."
  },
  {
    title: "Compromisso e constância",
    description:
      "Manter responsabilidade com horários, combinados e continuidade do vínculo, evitando ausências e rupturas."
  },
  {
    title: "Articulação com a instituição",
    description:
      "Atuar sempre com mediação e acompanhamento institucional, alinhando expectativas e garantindo proteção."
  }
];

export default function Apadrinhamento({ setCurrentPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container apad-page">
      <div className="home-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <nav className="historias-navbar">
        <div className="historias-brand brand-name">RedeAfeto</div>

        <div className="historias-navlinks" role="navigation" aria-label="Menu">
          <button type="button" className="historias-navlink" onClick={() => setCurrentPage("home")}>
            Início
          </button>
          <button type="button" className="historias-navlink" onClick={() => setCurrentPage("historias")}>
            Histórias
          </button>
          <button type="button" className="historias-navlink is-active">
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

      <main className="sobre-main">
        <section className="sobre-hero" aria-label="O que é apadrinhamento afetivo">
          <div className="sobre-hero-inner">
            <div className="sobre-hero-text">
              <h1 className="sobre-title">
                O que é <br />
                Apadrinhamento <br />
                Afetivo?
              </h1>
              <div className="apad-text">
                <p className="sobre-subtitle">
                  O apadrinhamento afetivo é uma forma de convivência que aproxima crianças e
                  adolescentes em situação de acolhimento institucional de adultos dispostos a
                  construir um vínculo de apoio, cuidado e presença.
                </p>
                <p className="sobre-subtitle">
                  Não se trata de adoção. O objetivo é oferecer uma referência afetiva estável,
                  ampliar repertórios, fortalecer autoestima e criar experiências positivas, sempre
                  com mediação e acompanhamento da instituição responsável.
                </p>
              </div>
            </div>

            <div className="sobre-hero-image apad-carousel" aria-label="Carrossel de imagens">
              {images.map((image, index) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className={`apad-carousel-image ${index === currentIndex ? "is-active" : ""}`}
                  loading={index === currentIndex ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section what-we-do" aria-label="Papel do padrinho afetivo">
          <div className="section-content">
            <div className="sobre-values">
              <h2 className="sobre-values-title">O Papel do Padrinho Afetivo</h2>
              <p className="apad-role-intro">
                Mais do que “ajudar”, é estar junto com responsabilidade, respeito e constância.
              </p>

              <div className="sobre-values-grid">
                {roleTopics.map((topic) => (
                  <article key={topic.title} className="sobre-value-card">
                    <h3 className="sobre-value-title">{topic.title}</h3>
                    <p className="sobre-value-text">{topic.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section our-goal" aria-label="Importância do apadrinhamento afetivo">
          <div className="section-content">
            <div className="goal-content">
              <div className="goal-text">
                <h2 className="section-title">Importância do Apadrinhamento Afetivo</h2>
                <p>
                  O apadrinhamento afetivo ajuda crianças e adolescentes acolhidos a desenvolverem
                  vínculos sociais e afetivos importantes para sua formação. Através dessa
                  convivência, muitos acolhidos passam a se sentir mais valorizados, acolhidos e
                  incluídos socialmente, tendo acesso a experiências que contribuem para seu
                  crescimento pessoal e emocional.
                </p>
              </div>
              <div className="goal-image">
                <img src={abracoPadrinhosImg} alt="Importância do apadrinhamento afetivo" />
              </div>
            </div>
          </div>
        </section>
      </main>

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
