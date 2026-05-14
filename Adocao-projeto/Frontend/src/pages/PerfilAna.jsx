import "../home.css";
import "../historias.css";
import anaImg from "../assets/historias/ana.png";
import anaBrinquedosImg from "../assets/historias/Captura de tela 2026-05-13 003612.png";
import anaDesenhoImg from "../assets/historias/ana_desenho.png";
import gabrielImg from "../assets/historias/gabriel.png";

export default function PerfilAna({ setCurrentPage }) {
  return (
    <div className="historias-page perfil-page perfil-page--ana">
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
        <section className="perfil-top" aria-label="Perfil da Ana">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={anaImg} alt="Ana" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={anaBrinquedosImg} alt="Ana brincando" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={anaDesenhoImg} alt="Ana desenhando" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Ana, 6 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “A Ana é criativa e adora construir coisas novas com as próprias mãos.”
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
                  Oi! Eu sou a Ana. Eu adoro brincar e inventar coisas diferentes. Quando eu estou
                  criando, eu imagino histórias e faço casas para os meus brinquedos.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">Minhas coisas favoritas</div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Criatividade</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Brincar</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Construir</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Desenhar</span>
                  </div>
                </div>
              </div>

              <div className="perfil-block perfil-dreams">
                <div className="perfil-block-title">Meus sonhos</div>
                <ol className="perfil-dreams-list">
                  <li>
                    <span className="perfil-dream-num">01.</span>
                    Quero ter muitos brinquedos para construir cidades.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Quero aprender coisas novas para criar ainda mais.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Quero ter uma pessoa para me apoiar e brincar comigo.
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={gabrielImg} alt="Gabriel" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-gabriel")}
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
