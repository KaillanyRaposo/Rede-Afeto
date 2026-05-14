import "../home.css";
import "../historias.css";

const values = [
  {
    title: "Proteção e segurança",
    description:
      "Garantir a privacidade, o respeito e a proteção das crianças e adolescentes acolhidos."
  },
  {
    title: "Empatia",
    description:
      "Incentivar uma visão mais humana e sensível sobre a realidade do acolhimento institucional."
  },
  {
    title: "Inclusão",
    description:
      "Criar um espaço acessível, acolhedor e pensado para diferentes vivências e necessidades."
  },
  {
    title: "Educação e cultura",
    description:
      "Estimular o aprendizado, a imaginação e o hábito da leitura através da biblioteca digital."
  },
  {
    title: "Responsabilidade social",
    description:
      "Fortalecer a conexão entre sociedade e instituições de acolhimento de forma ética e segura."
  },
  {
    title: "Humanização",
    description:
      "Mostrar que cada criança possui história, personalidade, talentos, sonhos e interesses próprios."
  }
];

export default function SobreNos({ setCurrentPage }) {
  return (
    <div className="home-container sobre-page">
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
            className="historias-navlink"
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
          <button type="button" className="historias-navlink is-active">
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

      <main className="sobre-main">
        <section className="sobre-hero" aria-label="Sobre nós">
          <div className="sobre-hero-inner">
            <div className="sobre-hero-text">
              <h1 className="sobre-title">
                Nossa Missão: Conectar <br />
                Histórias e Transformar <br />
                Vidas.
              </h1>
              <p className="sobre-subtitle">
                Promover visibilidade social de forma segura, ética e humanizada para crianças e
                adolescentes em situação de acolhimento institucional, aproximando a sociedade
                dessa realidade através de conteúdos conscientes, incentivo à empatia e acesso à
                cultura, educação e leitura por meio da plataforma.
              </p>
            </div>

            <div className="sobre-hero-image">
              <img src="/foto4.png" alt="Crianças juntas" />
            </div>
          </div>
        </section>

        <section className="section what-we-do" aria-label="Valores e funcionamento">
          <div className="section-content">
            <div className="sobre-values">
              <h2 className="sobre-values-title">Nossos Valores</h2>

              <div className="sobre-values-grid">
                {values.map((value) => (
                  <article key={value.title} className="sobre-value-card">
                    <h3 className="sobre-value-title">{value.title}</h3>
                    <p className="sobre-value-text">{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Como funcionamos">
          <div className="section-content">
            <div className="sobre-how">
              <h2 className="sobre-how-title">Como Funcionamos</h2>
              <p className="sobre-how-subtitle">
                Construindo pontes entre o acolhimento e a esperança.
              </p>

              <div className="sobre-how-grid">
                <article className="sobre-how-card">
                  <div className="sobre-how-card-head">
                    <h3 className="sobre-how-card-title">Conexão com a sociedade</h3>
                  </div>
                  <div className="sobre-how-card-body">
                    <p>
                      As instituições de acolhimento compartilham conteúdos, atividades e momentos
                      do dia a dia de forma segura e responsável, permitindo que a sociedade conheça
                      melhor a realidade das crianças e adolescentes acolhidos. A plataforma busca
                      criar uma conexão mais humana e consciente, incentivando empatia, apoio social
                      e participação da comunidade.
                    </p>
                    <p>
                      Toda interação acontece com mediação institucional, garantindo a proteção, a
                      privacidade e o cuidado com os acolhidos. Nenhuma ação ocorre diretamente entre
                      a sociedade e as crianças sem o acompanhamento das instituições responsáveis.
                    </p>
                  </div>
                </article>

                <article className="sobre-how-card is-highlight">
                  <div className="sobre-how-card-head">
                    <h3 className="sobre-how-card-title">Biblioteca digital</h3>
                  </div>
                  <div className="sobre-how-card-body">
                    <p>
                      A plataforma também oferece uma biblioteca digital gratuita voltada para
                      crianças e adolescentes em situação de acolhimento institucional. Nesse espaço,
                      os acolhidos poderão acessar livros, quadrinhos, mangás e conteúdos educativos
                      de acordo com sua faixa etária e seus interesses.
                    </p>
                    <p>
                      Além de incentivar o hábito da leitura, a biblioteca busca estimular a
                      imaginação, o aprendizado e o desenvolvimento pessoal das crianças em um
                      ambiente seguro, acessível e acolhedor.
                    </p>
                  </div>
                </article>
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
