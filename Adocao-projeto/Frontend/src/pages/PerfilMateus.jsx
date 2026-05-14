import "../home.css";
import "../historias.css";
import mateusImg from "../assets/historias/mateus.png";
import mateusAnimalImg from "../assets/historias/mateus_animal.jpg";
import mateusEspacoImg from "../assets/historias/mateus_espaço.jpg";
import juliaImg from "../assets/historias/julia.png";

export default function PerfilMateus({ setCurrentPage }) {
  return (
    <div className="historias-page perfil-page">
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
          <button
            type="button"
            className="historias-navlink is-active"
            onClick={() => setCurrentPage("historias")}
          >
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

      <main className="perfil-main">
        <section className="perfil-top" aria-label="Perfil do Mateus">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={mateusImg} alt="Mateus" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={mateusEspacoImg} alt="Mateus" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={mateusAnimalImg} alt="Mateus" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Mateus, 8 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “O Mateus é um menino curioso que adora descobrir novos mundos através dos
                  livros.”
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="perfil-bottom" aria-label="Detalhes do perfil">
          <div className="perfil-bottom-inner">
            <div className="perfil-details">
              <div className="perfil-block">
                <div className="perfil-block-title">
                  Sobre mim
                </div>
                <p className="perfil-text">
                  Oi! Eu sou o Mateus. Eu gosto muito de livros e de aprender coisas novas. Quando
                  eu leio, eu sinto que posso viajar para bem longe, conhecer planetas, estrelas e
                  inventar histórias na minha cabeça. Eu também gosto de conversar e de fazer
                  perguntas quando vejo algo interessante.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">
                  Minhas coisas favoritas
                </div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Leitura</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Espaço</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Jogos</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Desenhar</span>
                  </div>
                </div>
              </div>

              <div className="perfil-block perfil-dreams">
                <div className="perfil-block-title">
                  Meus sonhos
                </div>
                <ol className="perfil-dreams-list">
                  <li>
                    <span className="perfil-dream-num">01.</span>
                    Quero ter uma estante bem grande com muitos livros e poder escolher um para ler
                    toda noite.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Meu sonho é virar um astronauta.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Um dia eu gostaria de ter um chachorro, o nome dele seria netuno!!
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={juliaImg} alt="Julia" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-julia")}
                >
                  Veja mais histórias.
                </button>
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
