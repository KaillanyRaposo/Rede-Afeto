import "../home.css";
import "../historias.css";
import criancaLendoImg from "../assets/historias/crianca_lendo.png";
import livro1Img from "../assets/historias/livro1.jpg";
import livro2Img from "../assets/historias/livro2.jpg";
import livro3Img from "../assets/historias/livro3.jpg";
import livro4Img from "../assets/historias/livro4.jpg";
import livro5Img from "../assets/historias/livro5.jpg";
import livro6Img from "../assets/historias/livro6jpg.jpg";
import livro7Img from "../assets/historias/livro7jpg.jpg";

const ages = ["Até 5 anos", "6–8 anos", "9–12 anos", "13–15 anos", "16–18 anos"];

const genres = [
  { label: "Aventura" },
  { label: "Contos de Fadas" },
  { label: "Quadrinhos" },
  { label: "Poesia" },
  { label: "Educativo" },
  { label: "Mistério" },
  { label: "Ficção Científica" },
  { label: "Biografia" },
  { label: "História" },
];

const featuredBooks = [
  {
    title: "O Menino Maluquinho",
    author: "Ziraldo",
    rating: 5,
    description: "A divertida história de um menino criativo, alegre e cheio de imaginação.",
    src: livro1Img,
    alt: "Capa do livro O Menino Maluquinho",
  },
  {
    title: "Turma da Mônica",
    author: "Mauricio de Sousa",
    rating: 5,
    description: "Quadrinhos divertidos sobre amizade e aventuras vividas por Mônica e sua turma.",
    src: livro3Img,
    alt: "Capa do livro Turma da Mônica",
  },
  {
    title: "Diário de um Banana",
    author: "Jeff Kinney",
    rating: 5,
    description: "As situações engraçadas e os desafios do dia a dia de Greg Heffley na escola e com os amigos.",
    src: livro4Img,
    alt: "Capa do livro Diário de um Banana",
  },
  {
    title: "Felpo Filva",
    author: "Eva Furnari",
    rating: 5,
    description:
      "A história divertida de um coelho poeta que aprende sobre amizade, sentimentos e novas formas de ver a vida.",
    src: livro5Img,
    alt: "Capa do livro Felpo Filva",
  },
  {
    title: "Festa no Céu",
    author: "Folclore Brasileiro",
    rating: 5,
    description: "Um conto divertido do folclore brasileiro sobre os animais tentando chegar a uma grande festa no céu.",
    src: livro6Img,
    alt: "Capa do livro Festa no Céu",
  },
  {
    title: "Meu Pé de Laranja Lima",
    author: "José Mauro de Vasconcelos",
    rating: 5,
    description:
      "A emocionante história de Zezé, um menino criativo que encontra amizade e conforto em seu pé de laranja lima.",
    src: livro7Img,
    alt: "Capa do livro Meu Pé de Laranja Lima",
  }
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

export default function Biblioteca({ setCurrentPage }) {
  return (
    <div className="home-container biblioteca-home-page">
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
      <main className="biblioteca-home-main">
        <div className="biblioteca-home-inner">
          <section className="biblioteca-home-hero" aria-label="Biblioteca virtual">
            <div className="biblioteca-home-hero-inner">
              <div className="biblioteca-home-hero-left">
                <div className="biblioteca-home-welcome-title">Bem-vindo à Biblioteca Virtual</div>
                <h1 className="biblioteca-home-title">
                  Histórias que encantam o <span className="highlight">coração</span>.
                </h1>
                <p className="biblioteca-home-subtitle">
                  Mergulhe em aventuras mágicas com os maiores clássicos <br />
                  da literatura infantil brasileira.
                </p>
              </div>

              <div className="biblioteca-home-hero-right">
                <img className="biblioteca-home-hero-image" src={criancaLendoImg} alt="Criança lendo" />
              </div>
            </div>
          </section>

          <section className="biblioteca-home-section" aria-label="Explorar por categoria">
            <h2 className="biblioteca-home-section-title">Explorar por categoria</h2>
            <p className="biblioteca-home-section-subtitle">
              Encontre a leitura perfeita para sua idade e gosto.
            </p>

            <div className="biblioteca-home-filter">
              <div className="biblioteca-home-filter-title">FILTRAR POR IDADE</div>
              <div className="biblioteca-home-chips" role="list">
                {ages.map((age, index) => (
                  <button
                    key={age}
                    type="button"
                    className={`biblioteca-home-chip ${index === 0 ? "is-active" : ""}`}
                    role="listitem"
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            <div className="biblioteca-home-filter">
              <div className="biblioteca-home-filter-title">FILTRAR POR GÊNERO</div>
              <div className="biblioteca-home-genre-grid" role="list">
                {genres.map((genre) => (
                  <button key={genre.label} type="button" className="biblioteca-home-genre" role="listitem">
                    <span className="biblioteca-home-genre-label">{genre.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="biblioteca-home-section" aria-label="Destaques">
            <h2 className="biblioteca-home-section-title">Destaques para Você</h2>

            <div className="biblioteca-home-highlights">
              <article className="biblioteca-home-highlight biblioteca-home-highlight-main">
                <div className="biblioteca-home-highlight-cover" aria-hidden="true">
                  <img
                    className="biblioteca-home-highlight-cover-img"
                    src={livro2Img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="biblioteca-home-highlight-body">
                  <div className="biblioteca-home-highlight-top">
                    <span className="biblioteca-home-highlight-badge">Destaque do Mês</span>
                    <span className="biblioteca-home-highlight-stars" aria-label="Avaliação 5 estrelas">
                      ★★★★★
                    </span>
                  </div>
                  <div className="biblioteca-home-highlight-title">Sítio do Picapau Amarelo</div>
                  <div className="biblioteca-home-highlight-text">
                    Aventuras cheias de fantasia e folclore brasileiro vividas por Narizinho, Pedrinho, Emília e outros
                    personagens no famoso sítio.
                  </div>
                  <button
                    type="button"
                    className="biblioteca-home-featured-cta"
                    onClick={() => setCurrentPage("livro-sitio")}
                  >
                    Ler agora
                  </button>
                </div>
              </article>

              <article className="biblioteca-home-highlight biblioteca-home-highlight-tip">
                <div className="biblioteca-home-highlight-tip-head">
                  <span className="biblioteca-home-highlight-tip-label">Dica da RedeAfeto</span>
                </div>
                <div className="biblioteca-home-highlight-tip-text">
                  Ler um pouco todos os dias ajuda a criar rotina, imaginação e confiança.
                </div>
              </article>

              <div className="biblioteca-home-highlight-books" aria-label="Livros em destaque">
                {featuredBooks.map((book) => (
                  <article key={book.title} className="biblioteca-home-featured-card">
                    <div className="biblioteca-home-featured-cover">
                      <img
                        className="biblioteca-home-featured-cover-img"
                        src={book.src}
                        alt={book.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="biblioteca-home-featured-meta">
                      <div className="biblioteca-home-featured-title">{book.title}</div>
                      <div className="biblioteca-home-featured-author">{book.author}</div>
                      {renderStars(book.rating, book.title)}
                      <div className="biblioteca-home-featured-desc">{book.description}</div>
                      <button type="button" className="biblioteca-home-featured-cta">
                        Ler agora
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
