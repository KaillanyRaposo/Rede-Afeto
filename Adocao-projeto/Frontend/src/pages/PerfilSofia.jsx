import "../home.css";
import "../historias.css";
import sofiaImg from "../assets/historias/sofia.png";
import sofiaLapisImg from "../assets/historias/sofia_lapis.png";
import sofiaQuadroImg from "../assets/historias/sofia_quadro.png";
import lucasImg from "../assets/historias/lucas.png";

export default function PerfilSofia({ setCurrentPage }) {
  return (
    <div className="historias-page perfil-page perfil-page--sofia">
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
        <section className="perfil-top" aria-label="Perfil da Sofia">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={sofiaImg} alt="Sofia" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={sofiaLapisImg} alt="Sofia desenhando" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={sofiaQuadroImg} alt="Sofia com um quadro" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Sofia, 7 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “A Sofia ama artes e adora criar usando todas as cores que encontra.”
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
                  Oi! Eu sou a Sofia. Eu adoro desenhar e pintar, principalmente quando posso
                  misturar cores para fazer coisas bem bonitas. Eu gosto de inventar histórias com
                  os meus desenhos e mostrar para as pessoas.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">Minhas coisas favoritas</div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Artes</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Pintura</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Cores</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Desenho</span>
                  </div>
                </div>
              </div>

              <div className="perfil-block perfil-dreams">
                <div className="perfil-block-title">Meus sonhos</div>
                <ol className="perfil-dreams-list">
                  <li>
                    <span className="perfil-dream-num">01.</span>
                    Quero ter muitos lápis e tintas para criar desenhos todos os dias.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Eu sonho em fazer um quadro bem grande para colocar na parede.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Quero ter alguém para me ensinar coisas novas e me apoiar.
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={lucasImg} alt="Lucas" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-lucas")}
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
