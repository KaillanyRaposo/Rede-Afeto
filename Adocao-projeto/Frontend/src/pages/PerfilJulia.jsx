import "../home.css";
import "../historias.css";
import juliaImg from "../assets/historias/julia.png";
import juliaBrincandoImg from "../assets/historias/julia_brincando.jpg";
import juliaJogoImg from "../assets/historias/julia_jogo.jpg";
import sofiaImg from "../assets/historias/sofia.png";

export default function PerfilJulia({ setCurrentPage }) {
  return (
    <div className="historias-page perfil-page perfil-page--julia">
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
        <section className="perfil-top" aria-label="Perfil da Julia">
          <div className="perfil-top-inner">
            <div className="perfil-hero-visual">
              <img src={juliaImg} alt="Julia" />
            </div>

            <div className="perfil-photos">
              <div className="perfil-photo perfil-photo-top">
                <img src={juliaBrincandoImg} alt="Julia brincando" />
              </div>
              <div className="perfil-photo perfil-photo-bottom">
                <img src={juliaJogoImg} alt="Julia jogando" />
              </div>
            </div>

            <aside className="perfil-summary" aria-label="Resumo do perfil">
              <div className="perfil-summary-card">
                <h2 className="perfil-name">Julia, 10 anos</h2>
                <div className="perfil-location">Localização: Recife, PE</div>
                <p className="perfil-quote">
                  “A Julia é uma menina determinada que adora esportes e sonha em ir cada vez mais
                  longe.”
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
                  Oi! Eu sou a Julia. Eu gosto de correr, brincar e aprender coisas novas. Eu me
                  sinto muito feliz quando estou jogando com meus amigos, porque eu adoro fazer
                  parte de um time.
                </p>
              </div>

              <div className="perfil-block">
                <div className="perfil-block-title">Minhas coisas favoritas</div>
                <div className="perfil-favorites" role="list">
                  <div className="perfil-fav" role="listitem">
                    <span>Esportes</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Futebol</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Amigos</span>
                  </div>
                  <div className="perfil-fav" role="listitem">
                    <span>Música</span>
                  </div>
                </div>
              </div>

              <div className="perfil-block perfil-dreams">
                <div className="perfil-block-title">Meus sonhos</div>
                <ol className="perfil-dreams-list">
                  <li>
                    <span className="perfil-dream-num">01.</span>
                    Quero aprender mais sobre esportes e participar de campeonatos com meu time.
                  </li>
                  <li>
                    <span className="perfil-dream-num">02.</span>
                    Sonho em viajar para conhecer lugares novos e jogar em campos diferentes.
                  </li>
                  <li>
                    <span className="perfil-dream-num">03.</span>
                    Quero ter uma pessoa para torcer por mim e me incentivar quando eu estiver com
                    medo.
                  </li>
                </ol>
              </div>
            </div>

            <div className="perfil-side">
              <div className="perfil-side-card">
                <img className="perfil-side-img" src={sofiaImg} alt="Sofia" />
                <button
                  type="button"
                  className="perfil-side-caption"
                  onClick={() => setCurrentPage("perfil-sofia")}
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
