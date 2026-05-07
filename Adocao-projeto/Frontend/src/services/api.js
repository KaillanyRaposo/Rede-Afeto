const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://django-auth-backend-production.up.railway.app";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      data?.erro ||
      data?.detail ||
      data?.mensagem ||
      "Erro ao se comunicar com o servidor.";

    throw new Error(message);
  }

  return data;
}

export async function loginUser({ email, senha }) {
  return request("/api/auth/login/", {
    method: "POST",
    body: JSON.stringify({ email, senha }),
  });
}

export async function getProfile(token) {
  return request("/api/auth/profile/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}