import "../home.css";
import "../historias.css";
import { useMemo, useState } from "react";
import criancaLendoImg from "../assets/historias/crianca_lendo.png";
import anaImg from "../assets/historias/ana.png";
import gabrielImg from "../assets/historias/gabriel.png";
import juliaImg from "../assets/historias/julia.png";
import lucasImg from "../assets/historias/lucas.png";
import mateusImg from "../assets/historias/mateus.png";
import sofiaImg from "../assets/historias/sofia.png";

const STORAGE_KEY = "redeafeto_ong_publicacoes";

const IMAGE_BY_KEY = {
  ana: anaImg,
  gabriel: gabrielImg,
  julia: juliaImg,
  lucas: lucasImg,
  mateus: mateusImg,
  sofia: sofiaImg,
};

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
    imageKey: "mateus",
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
    imageKey: "julia",
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
    imageKey: "sofia",
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
    imageKey: "lucas",
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
    imageKey: "ana",
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
    imageKey: "gabriel",
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

function formatDate(value) {
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  } catch {
    return "";
  }
}

function resolvePostImage(post) {
  if (post?.imageKey && IMAGE_BY_KEY[post.imageKey]) return IMAGE_BY_KEY[post.imageKey];

  const rawName = typeof post?.nome === "string" ? post.nome : "";
  const normalized = rawName.trim().toLowerCase();
  if (normalized && IMAGE_BY_KEY[normalized]) return IMAGE_BY_KEY[normalized];

  return criancaLendoImg;
}

export default function HistoricoPostagens({ setCurrentPage }) {
  const [posts] = useState(() => loadPosts());

  const orderedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const aTime = new Date(a?.createdAt ?? 0).getTime();
      const bTime = new Date(b?.createdAt ?? 0).getTime();
      return bTime - aTime;
    });
  }, [posts]);

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
          <div className="postagem-topbar">
            <button type="button" className="postagem-topback" onClick={() => setCurrentPage("postagem")}>
              ← Voltar
            </button>
          </div>
          <header className="postagem-header">
            <h1 className="postagem-title">Histórico de Publicações</h1>
            <p className="postagem-subtitle">Veja e gerencie as publicações criadas pela sua ONG.</p>
          </header>

        {orderedPosts.length === 0 ? (
          <section className="postagem-card" aria-label="Sem publicações">
            <div className="postagem-empty">
              <div className="postagem-empty-title">Nenhuma publicação ainda</div>
              <div className="postagem-empty-text">
                Crie uma nova publicação para ela aparecer aqui no histórico.
              </div>
              <button type="button" className="postagem-btn postagem-btn-primary" onClick={() => setCurrentPage("postagem")}>
                Criar publicação
              </button>
            </div>
          </section>
        ) : (
          <section className="postagem-history" aria-label="Lista de publicações">
            {orderedPosts.map((post) => (
              <article key={post.id} className="biblioteca-home-featured-card">
                <div className="biblioteca-home-featured-cover" aria-hidden="true">
                  <img
                    className="biblioteca-home-featured-cover-img"
                    src={resolvePostImage(post)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="biblioteca-home-featured-meta">
                  <div className="biblioteca-home-featured-title">{post?.nome || "Publicação"}</div>
                  <div className="biblioteca-home-featured-author">
                    {post?.idade || "-"} • {post?.localizacao || "-"}
                  </div>
                  <div className="postagem-history-date">{post?.createdAt ? formatDate(post.createdAt) : "-"}</div>
                </div>
              </article>
            ))}
          </section>
        )}

        </main>
      </div>
    </div>
  );
}
