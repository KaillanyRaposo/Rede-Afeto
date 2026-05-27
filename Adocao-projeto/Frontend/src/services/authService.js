const API_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

function getErrorMessage(data) {
  if (data?.erro) return data.erro;
  if (data?.detail) return data.detail;
  if (data?.mensagem) return data.mensagem;

  if (data?.erros) {
    const campo = Object.keys(data.erros)[0];
    const erro = data.erros[campo];

    if (Array.isArray(erro)) return erro[0];
    if (typeof erro === "string") return erro;

    return "Verifique os dados enviados.";
  }

  return "Erro ao conectar com o servidor.";
}

async function request(path, options = {}) {
  const url = `${API_URL}${path}`;

  console.log("Chamando API:", url);

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(getErrorMessage(data));
  }

  return data;
}

export async function loginUsuario({ email, senha }) {
  return request("/api/auth/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha,
    }),
  });
}

export async function cadastrarUsuario({ nome, email, senha, tipo }) {
  return request("/api/auth/register/", {
    method: "POST",
    body: JSON.stringify({
      nome,
      email,
      senha,
      tipo,
    }),
  });
}

export function salvarSessao({ token, usuario, remember }) {
  localStorage.setItem("redeafeto_remember", remember ? "true" : "false");

  localStorage.removeItem("redeafeto_token");
  localStorage.removeItem("redeafeto_usuario");
  sessionStorage.removeItem("redeafeto_token");
  sessionStorage.removeItem("redeafeto_usuario");

  const storage = remember ? localStorage : sessionStorage;

  storage.setItem("redeafeto_token", token);
  storage.setItem("redeafeto_usuario", JSON.stringify(usuario));
}

export function getToken() {
  return localStorage.getItem("redeafeto_token") || sessionStorage.getItem("redeafeto_token");
}

export function getUsuario() {
  const raw =
    localStorage.getItem("redeafeto_usuario") ||
    sessionStorage.getItem("redeafeto_usuario");

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function logoutUsuario() {
  localStorage.removeItem("redeafeto_token");
  localStorage.removeItem("redeafeto_usuario");
  localStorage.removeItem("redeafeto_remember");

  sessionStorage.removeItem("redeafeto_token");
  sessionStorage.removeItem("redeafeto_usuario");
}