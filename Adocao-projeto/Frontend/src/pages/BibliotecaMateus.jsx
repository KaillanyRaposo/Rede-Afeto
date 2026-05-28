import "../home.css";
import "../historias.css";
import mateusImg from "../assets/historias/mateus_perfil.png";
import livro1Img from "../assets/historias/livro1.jpg";
import livro2Img from "../assets/historias/livro2.jpg";
import livro4Img from "../assets/historias/livro4.jpg";
import livro7Img from "../assets/historias/livro7jpg.jpg";

const readBooks = [
  {
    title: "O Sítio do Picapau Amarelo",
    rating: 5,
    date: "Lido em 12 de Outubro",
    imageSrc: livro2Img,
    imageAlt: "Capa do livro O Sítio do Picapau Amarelo",
  },
  {
    title: "Meu Pé de Laranja Lima",
    rating: 5,
    date: "Lido em 28 de Setembro",
    imageSrc: livro7Img,
    imageAlt: "Capa do livro Meu Pé de Laranja Lima",
  },
];

const wishlistBooks = [
  {
    title: "Diário de um Banana",
    rating: 5,
    date: "Quero ler",
    imageSrc: livro4Img,
    imageAlt: "Capa do livro Diário de um Banana",
  },
  {
    title: "O Menino Maluquinho",
    rating: 5,
    date: "Quero ler",
    imageSrc: livro1Img,
    imageAlt: "Capa do livro O Menino Maluquinho",
  },
];

function renderStars(rating, keyPrefix) {
  return (
    <div className="biblioteca-home-featured-rating" aria-label={`Avaliação ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={`${keyPrefix}-star-${index}`}
          className={`biblioteca-home-featured-star ${index < rating ? "is-filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function BibliotecaMateus({ setCurrentPage }) {
  return (
    <div className="biblioteca-page">
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
          <button
            type="button"
            className="historias-action-link"
            onClick={() => setCurrentPage("biblioteca-mateus")}
          >
            Perfil
          </button>
          <button type="button" className="historias-action-primary" onClick={() => setCurrentPage("home")}>
            Sair
          </button>
        </div>
      </nav>

      <main className="biblioteca-profile-main">
        <div className="biblioteca-main">
          <div className="biblioteca-back biblioteca-back-top">
            <button type="button" className="biblioteca-back-btn" onClick={() => setCurrentPage("biblioteca")}>
              ← Voltar
            </button>
          </div>
          <section className="biblioteca-hero" aria-label="Biblioteca virtual">
            <div className="biblioteca-hero-inner">
              <div className="biblioteca-avatar">
                <img src={mateusImg} alt="Mateus" />
              </div>

              <div className="biblioteca-hero-text">
                <h1 className="biblioteca-title">Oi, Mateus!</h1>
                <p className="biblioteca-subtitle">
                  Que bom ver você de volta! Qual será a aventura de hoje no nosso mundo dos livros?
                </p>

                <div className="biblioteca-badges" aria-label="Resumo de leitura">
                  <span className="biblioteca-badge biblioteca-badge-read">{readBooks.length} Livros lidos</span>
                </div>
              </div>
            </div>
          </section>

          <section className="biblioteca-section" aria-label="Livros que já li">
            <div className="biblioteca-section-head">
              <h2 className="biblioteca-section-title">Livros que já li</h2>
            </div>

            <div className="biblioteca-home-highlight-books" role="list">
              {readBooks.map((book) => (
                <article key={book.title} className="biblioteca-home-featured-card" role="listitem">
                  <div className="biblioteca-home-featured-cover">
                    <img className="biblioteca-home-featured-cover-img" src={book.imageSrc} alt={book.imageAlt} />
                  </div>
                  <div className="biblioteca-home-featured-meta">
                    <div className="biblioteca-home-featured-title">{book.title}</div>
                    <div className="biblioteca-home-featured-author">{book.date}</div>
                    {renderStars(book.rating, book.title)}
                    <button type="button" className="biblioteca-home-featured-cta">
                      Ler novamente
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="biblioteca-section" aria-label="Livros que quero ler">
            <div className="biblioteca-section-head">
              <h2 className="biblioteca-section-title">Livros que quero ler</h2>
            </div>

            <div className="biblioteca-home-highlight-books" role="list">
              {wishlistBooks.map((book) => (
                <article key={book.title} className="biblioteca-home-featured-card" role="listitem">
                  <div className="biblioteca-home-featured-cover">
                    <img className="biblioteca-home-featured-cover-img" src={book.imageSrc} alt={book.imageAlt} />
                  </div>
                  <div className="biblioteca-home-featured-meta">
                    <div className="biblioteca-home-featured-title">{book.title}</div>
                    <div className="biblioteca-home-featured-author">{book.date}</div>
                    {renderStars(book.rating, book.title)}
                    <button type="button" className="biblioteca-home-featured-cta">
                      Ler agora
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
