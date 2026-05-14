import "../home.css";
import "../historias.css";
import { useState } from "react";

const initialFavorites = ["Pintura", "Futebol"];
const initialDreams = [];
const STORAGE_KEY = "redeafeto_ong_publicacoes";
const DEFAULT_POSTS = [
  {
    id: "seed-mateus",
    nome: "Mateus",
    idade: "8 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: Encontrar novos mundos nas páginas dos livros sobre o espaço e as estrelas.",
    favoritos: ["Leitura"],
    sonhos: [],
    createdAt: "2026-01-10T12:00:00.000Z",
  },
  {
    id: "seed-julia",
    nome: "Julia",
    idade: "10 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: A sensação de correr rápido pelo campo e marcar um gol para o meu time.",
    favoritos: ["Esportes"],
    sonhos: [],
    createdAt: "2026-01-11T12:00:00.000Z",
  },
  {
    id: "seed-sofia",
    nome: "Sofia",
    idade: "7 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: Usar todas as cores da caixa para criar arco-íris gigantes em dias de chuva.",
    favoritos: ["Artes"],
    sonhos: [],
    createdAt: "2026-01-12T12:00:00.000Z",
  },
  {
    id: "seed-lucas",
    nome: "Lucas",
    idade: "14 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: Aprender novas músicas e como a música pode contar histórias sem palavras.",
    favoritos: ["Música"],
    sonhos: [],
    createdAt: "2026-01-13T12:00:00.000Z",
  },
  {
    id: "seed-ana",
    nome: "Ana",
    idade: "6 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: Brincar com meus animais de pelúcia.",
    favoritos: ["Criatividade"],
    sonhos: [],
    createdAt: "2026-01-14T12:00:00.000Z",
  },
  {
    id: "seed-gabriel",
    nome: "Gabriel",
    idade: "15 anos",
    localizacao: "Recife, PE",
    historia: "O que eu amo: Adoro conhencer novas plantas e estudar os insetos que existem na natureza.",
    favoritos: ["Natureza"],
    sonhos: [],
    createdAt: "2026-01-15T12:00:00.000Z",
  },
];

function loadPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const existing = Array.isArray(parsed) ? parsed : [];

    const existingIds = new Set(existing.map((post) => post?.id).filter(Boolean));
    const merged = [...existing, ...DEFAULT_POSTS.filter((post) => !existingIds.has(post.id))];

    if (!raw || merged.length !== existing.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    }

    return merged;
  } catch {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
    } catch {
      return DEFAULT_POSTS;
    }
    return DEFAULT_POSTS;
  }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export default function Postagem({ setCurrentPage }) {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [dreams, setDreams] = useState(initialDreams);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [historia, setHistoria] = useState("");

  return (
    <div className="postagem-page">
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
            onClick={() => setCurrentPage("postagens-historico")}
          >
            Publicações
          </button>
          <button type="button" className="historias-action-primary" onClick={() => setCurrentPage("home")}>
            Sair
          </button>
        </div>
      </nav>

      <div className="postagem-content">
        <main className="postagem-main">
          <header className="postagem-header">
            <h1 className="postagem-title">Criar Novo Perfil</h1>
            <p className="postagem-subtitle">
              Partilhe a história de uma criança para encontrar o apoio e o carinho de que ela necessita. <br />
              Lembre-se que cada palavra conta uma história de esperança.
            </p>
          </header>

        <section className="postagem-card" aria-label="Galeria de fotos">
          <div className="postagem-card-head">
            <h2 className="postagem-card-title">Galeria de Fotos</h2>
          </div>

          <div className="postagem-upload" role="group" aria-label="Área para enviar fotos">
            <div className="postagem-upload-inner">
              <div className="postagem-upload-text">
                <div>Arraste e solte fotos aqui ou clique para explorar</div>
                <div className="postagem-upload-hint">
                  Recomendamos pelo menos 3 fotos de alta qualidade. JPG ou PNG até 5MB.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="postagem-card" aria-label="Informações básicas">
          <div className="postagem-card-head">
            <h2 className="postagem-card-title">Informações Básicas</h2>
          </div>

          <div className="postagem-form">
            <div className="postagem-form-grid">
              <div className="postagem-field">
                <label className="postagem-label">Nome da Criança</label>
                <input
                  className="postagem-input"
                  placeholder="Ex: João Silva"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>
              <div className="postagem-field">
                <label className="postagem-label">Idade</label>
                <input
                  className="postagem-input"
                  placeholder="Anos"
                  value={idade}
                  onChange={(event) => setIdade(event.target.value)}
                />
              </div>
              <div className="postagem-field">
                <label className="postagem-label">Localização</label>
                <input
                  className="postagem-input"
                  placeholder="Cidade, Distrito"
                  value={localizacao}
                  onChange={(event) => setLocalizacao(event.target.value)}
                />
              </div>
            </div>

            <div className="postagem-field">
              <label className="postagem-label">Sobre Mim (A História)</label>
              <textarea
                className="postagem-textarea"
                placeholder="Escreva a história da criança com carinho e detalhe..."
                rows={6}
                value={historia}
                onChange={(event) => setHistoria(event.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="postagem-grid-2" aria-label="Preferências e sonhos">
          <div className="postagem-card postagem-card-compact">
            <div className="postagem-card-head">
              <h2 className="postagem-card-title">Coisas Favoritas</h2>
            </div>

            <div className="postagem-chips" role="list">
              {favorites.map((item) => (
                <span key={item} className="postagem-chip" role="listitem">
                  {item}
                </span>
              ))}
              <button
                type="button"
                className="postagem-chip-add"
                onClick={() => setFavorites((prev) => [...prev, "Adicionar"])}
              >
                + Adicionar
              </button>
            </div>
          </div>

          <div className="postagem-card postagem-card-compact">
            <div className="postagem-card-head">
              <h2 className="postagem-card-title">Sonhos</h2>
            </div>

            <div className="postagem-dreams">
              {dreams.map((dream, index) => (
                <div key={`${dream}-${index}`} className="postagem-dream">
                  <span className="postagem-dream-text">{dream}</span>
                </div>
              ))}
              <button
                type="button"
                className="postagem-dream-add"
                onClick={() => setDreams((prev) => [...prev, "Adicionar"])}
              >
                + Adicionar
              </button>
            </div>
          </div>
        </section>

        <section className="postagem-warning" aria-label="Aviso de proteção">
          <div className="postagem-warning-body">
            <div className="postagem-warning-title">Aviso de Proteção</div>
            <div className="postagem-warning-text">
              Ao publicar, confirme que possui todas as autorizações legais e consentimentos
              necessários. Evite partilhar apelidos ou localizações exatas para garantir a segurança
              e privacidade total da criança.
            </div>
          </div>
        </section>

        <div className="postagem-actions">
          <button
            type="button"
            className="postagem-btn postagem-btn-primary"
            onClick={() => {
              const safeFavorites = favorites.filter((value) => value && value !== "Adicionar");
              const safeDreams = dreams.filter((value) => value && value !== "Adicionar");

              const id =
                typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());

              const nameKey = nome.trim().toLowerCase();
              const imageKey =
                nameKey === "mateus" ||
                nameKey === "julia" ||
                nameKey === "sofia" ||
                nameKey === "lucas" ||
                nameKey === "ana" ||
                nameKey === "gabriel"
                  ? nameKey
                  : "default";

              const post = {
                id,
                nome: nome.trim(),
                idade: idade.trim(),
                localizacao: localizacao.trim(),
                historia: historia.trim(),
                favoritos: safeFavorites,
                sonhos: safeDreams,
                createdAt: new Date().toISOString(),
                imageKey,
              };

              const posts = [post, ...loadPosts()];
              savePosts(posts);
              setCurrentPage("postagens-historico");
            }}
          >
            Publicar Perfil
          </button>
        </div>

        </main>
      </div>
    </div>
  );
}
