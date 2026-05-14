import "../home.css";
import "../historias.css";
import lucasImg from "../assets/historias/lucas.png";
import lucasEstudoImg from "../assets/historias/lucas_estudo.png";
import lucasMusicaImg from "../assets/historias/lucas_musica.jpg";
import anaImg from "../assets/historias/ana.png";

export default function PerfilLucas({ setCurrentPage }) {
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
        <section className="perfil-top" aria-label="Perfil do Lucas">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={lucasImg} alt="Lucas" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={lucasMusicaImg} alt="Lucas tocando música" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={lucasEstudoImg} alt="Lucas estudando" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Lucas, 14 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “O Lucas é dedicado e encontra alegria na música e nas pequenas conquistas do dia
                  a dia.”
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
                  Oi! Eu sou o Lucas. Eu gosto de música e de aprender canções novas. Eu acho
                  incrível como uma música pode contar uma história e fazer a gente sentir emoções
                  diferentes.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">Minhas coisas favoritas</div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Música</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Violão</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Amigos</span>
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
                    Quero tocar músicas que deixem as pessoas felizes.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Quero aprender mais e ter oportunidades para estudar.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Quero ter alguém para me apoiar e me incentivar.
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={anaImg} alt="Ana" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-ana")}
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
