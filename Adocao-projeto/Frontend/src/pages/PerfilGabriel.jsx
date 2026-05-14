import "../home.css";
import "../historias.css";
import gabrielImg from "../assets/historias/gabriel.png";
import gabrielInsetoImg from "../assets/historias/gabriel_inseto.jpg";
import gabrielPlantasImg from "../assets/historias/gabriel_plantas.jpg";
import mateusImg from "../assets/historias/mateus.png";

export default function PerfilGabriel({ setCurrentPage }) {
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
        <section className="perfil-top" aria-label="Perfil do Gabriel">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={gabrielImg} alt="Gabriel" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={gabrielInsetoImg} alt="Gabriel observando um inseto" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={gabrielPlantasImg} alt="Gabriel com plantas" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Gabriel, 15 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “O Gabriel é observador e gosta de aprender com a natureza ao seu redor.”
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="perfil-bottom" aria-label="Detalhes do perfil">
          <div className="perfil-bottom-inner">
            <div className="perfil-details">
              <div className="perfil-block">
                <div className="perfil-block-title">Sobre mim</div>
                <p className="perfil-text">
                  Oi! Eu sou o Gabriel. Eu gosto de caminhar ao ar livre, observar plantas e
                  animais e aprender coisas novas sobre o mundo. Eu me sinto bem quando estou em um
                  lugar com bastante natureza.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">Minhas coisas favoritas</div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Natureza</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Trilhas</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Animais</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Aprender</span>
                  </div>
                </div>
              </div>

              <div className="perfil-block perfil-dreams">
                <div className="perfil-block-title">Meus sonhos</div>
                <ol className="perfil-dreams-list">
                  <li>
                    <span className="perfil-dream-num">01.</span>
                    Quero conhecer lugares diferentes e aprender mais sobre plantas e animais.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Quero estudar e ser biologo.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Quero morar em uma casa com muitas plantas.
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={mateusImg} alt="Mateus" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-mateus")}
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
