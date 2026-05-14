import "../home.css";
import "../historias.css";
import anaImg from "../assets/historias/ana.png";
import gabrielImg from "../assets/historias/gabriel.png";
import juliaImg from "../assets/historias/julia.png";
import lucasImg from "../assets/historias/lucas.png";
import mateusImg from "../assets/historias/mateus.png";
import sofiaImg from "../assets/historias/sofia.png";

const stories = [
  {
    name: "Mateus",
    age: "8 anos",
    tag: "Leitura",
    imageSrc: mateusImg,
    imageAlt: "Criança lendo um livro",
    quote:
      "O que eu amo: Encontrar novos mundos nas páginas dos livros sobre o espaço e as estrelas."
  },
  {
    name: "Julia",
    age: "10 anos",
    tag: "Esportes",
    imageSrc: juliaImg,
    imageAlt: "Criança segurando uma bola",
    quote:
      "O que eu amo: A sensação de correr rápido pelo campo e marcar um gol para o meu time."
  },
  {
    name: "Sofia",
    age: "7 anos",
    tag: "Artes",
    imageSrc: sofiaImg,
    imageAlt: "Criança pintando em uma tela",
    quote:
      "O que eu amo: Usar todas as cores da caixa para criar arco-íris gigantes em dias de chuva."
  },
  {
    name: "Lucas",
    age: "14 anos",
    tag: "Música",
    imageSrc: lucasImg,
    imageAlt: "Jovem tocando violão",
    quote:
      "O que eu amo: Aprender novas músicas e como a música pode contar histórias sem palavras."
  },
  {
    name: "Ana",
    age: "6 anos",
    tag: "Criatividade",
    imageSrc: anaImg,
    imageAlt: "Criança brincando com blocos",
    quote:
      "O que eu amo: Brincar com meus animais de pelúcia."
  },
  {
    name: "Gabriel",
    age: "15 anos",
    tag: "Natureza",
    imageSrc: gabrielImg,
    imageAlt: "Jovem observando uma paisagem",
    quote:
      "O que eu amo: Adoro conhencer novas plantas e estudar os insetos que existem na natureza."
  }
];

export default function Historias({ setCurrentPage }) {
  const openProfile = (name) => {
    if (name === "Mateus") {
      setCurrentPage("perfil-mateus");
      return;
    }
    if (name === "Julia") {
      setCurrentPage("perfil-julia");
      return;
    }
    if (name === "Sofia") {
      setCurrentPage("perfil-sofia");
      return;
    }
    if (name === "Lucas") {
      setCurrentPage("perfil-lucas");
      return;
    }
    if (name === "Ana") {
      setCurrentPage("perfil-ana");
      return;
    }
    if (name === "Gabriel") {
      setCurrentPage("perfil-gabriel");
    }
  };

  return (
    <div className="historias-page">
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
          <button type="button" className="historias-navlink is-active">
            Histórias
          </button>
          <button
            type="button"
            className="historias-navlink"
            onClick={() => setCurrentPage("apadrinhamento")}
          >
            O que é apadrinhamento afetivo
          </button>
          <button
            type="button"
            className="historias-navlink"
            onClick={() => setCurrentPage("sobre-nos")}
          >
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

      <main className="historias-main">
        <header className="historias-hero">
          <div className="historias-hero-inner">
            <h1 className="historias-title">
              Um Capítulo de Esperança em Cada <br /> História
            </h1>
            <p className="historias-subtitle">
              Conheça os sonhos e interesses únicos de crianças que esperam por um mentor
              ou padrinho. Cada conexão começa com uma história compartilhada.
            </p>
          </div>
        </header>

        <section className="historias-section" aria-label="Lista de histórias">
          <div className="historias-panel">
            <div className="historias-search" role="search">
              <svg
                className="historias-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16.2 16.2 21 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                className="historias-search-input"
                type="text"
                placeholder="Buscar por nome ou interesse..."
                aria-label="Buscar por nome ou interesse"
              />
            </div>

            <div className="historias-grid">
              {stories.map((story) => (
                <article key={`${story.name}-${story.tag}`} className="story-card">
                  <div className="story-media">
                    <img
                      className="story-image"
                      src={story.imageSrc}
                      alt={story.imageAlt}
                      loading="lazy"
                    />
                    <span className="story-age">{story.age}</span>
                    <span className="story-tag">{story.tag}</span>
                  </div>
                  <div className="story-body">
                    <h3 className="story-name">{story.name}</h3>
                    <p className="story-quote">“{story.quote}”</p>
                    <button
                      type="button"
                      className="story-cta"
                      onClick={() => openProfile(story.name)}
                    >
                      Conheça minha história
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="historias-more">
              <button type="button" className="historias-more-btn">
                Ver Mais Histórias
                <svg
                  className="historias-more-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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

