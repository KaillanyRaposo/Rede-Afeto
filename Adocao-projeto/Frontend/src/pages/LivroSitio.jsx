import "../home.css";
import "../historias.css";
import livro2Img from "../assets/historias/livro2.jpg";

export default function LivroSitio({ setCurrentPage }) {
  return (
    <div className="home-container livro-page">
      <div className="home-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <nav className="historias-navbar">
        <div className="historias-brand brand-name">RedeAfeto</div>

        <div className="historias-navlinks" aria-hidden="true" />

        <div className="historias-actions">
          <button type="button" className="historias-action-link" onClick={() => setCurrentPage("biblioteca-mateus")}>
            Perfil
          </button>
          <button type="button" className="historias-action-primary" onClick={() => setCurrentPage("home")}>
            Sair
          </button>
        </div>
      </nav>

      <main className="livro-main">
        <div className="livro-inner">
          <header className="livro-breadcrumb" aria-label="Caminho">
            <button type="button" className="livro-back" onClick={() => setCurrentPage("biblioteca")}>
              ← Voltar para Biblioteca
            </button>
          </header>

          <section className="livro-hero" aria-label="Detalhes do livro">
            <div className="livro-cover">
              <img className="livro-cover-img" src={livro2Img} alt="Capa do livro O Sítio do Picapau Amarelo" />
            </div>

            <div className="livro-info">
              <div className="livro-pill">A partir de 6 anos</div>
              <h1 className="livro-title">Sítio do Picapau Amarelo</h1>
              <div className="livro-author">Monteiro Lobato</div>

              <div className="livro-stats" aria-label="Avaliações e informações">
                <div className="livro-rating">
                  <span className="livro-stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="livro-rating-number">4.8</span>
                  <span className="livro-rating-count">(1.2k avaliações)</span>
                </div>
                <div className="livro-meta">
                  <span className="livro-meta-item">164 páginas</span>
                  <span className="livro-meta-dot" aria-hidden="true">
                    •
                  </span>
                  <span className="livro-meta-item">Português</span>
                </div>
              </div>

              <h2 className="livro-summary-title">Resumo da História</h2>
              <p className="livro-summary-text">
                Mergulhe no universo fantástico de Dona Benta e seus netos, Pedrinho e Narizinho. No{" "}
                <strong>Sítio do Picapau Amarelo</strong>, a realidade e a imaginação se fundem em aventuras inesquecíveis.
                Conheça Emília, a boneca de pano mais esperta do Brasil, e viaje por histórias cheias de fantasia e
                folclore brasileiro.
              </p>
              <p className="livro-summary-text">
                Um clássico que atravessa gerações e desperta curiosidade, coragem e imaginação, agora disponível para
                leitura na biblioteca virtual da RedeAfeto.
              </p>

              <div className="livro-actions" aria-label="Ações">
                <button type="button" className="livro-btn-primary">
                  Ler Agora
                </button>
                <button type="button" className="livro-btn-secondary">
                  Salvar na Minha Estante
                </button>
              </div>

              <aside className="livro-reco" aria-label="Recomendação">
                <div className="livro-reco-head">
                  <span className="livro-reco-dot" aria-hidden="true" />
                  <div className="livro-reco-title">Recomendação da Rede Afeto</div>
                </div>
                <div className="livro-reco-text">
                  Este livro é altamente recomendado para fortalecer vínculos familiares e estimular a leitura
                  compartilhada.
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
