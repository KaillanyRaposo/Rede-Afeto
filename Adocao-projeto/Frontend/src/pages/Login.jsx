import {
  loginUsuario,
  cadastrarUsuario,
  salvarSessao,
} from "../services/authService";
import { useState } from "react";
import "../login.css";


export default function Login({ setCurrentPage, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab ?? "login");
  const [userType, setUserType] = useState("crianca");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [remember, setRemember] = useState(true);

  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event) {
  event.preventDefault();

  setLoading(true);
  setMessage("");
  setError("");

  try {
  const data = await loginUsuario({
  email,
  senha,
});

    salvarSessao({
      token: data.token,
      usuario: data.usuario,
      remember,
    });

    setMessage("Login realizado com sucesso!");

    if (data.usuario?.tipo === "ong") {
      setCurrentPage("postagem");
      return;
    }

    setCurrentPage("biblioteca");
  } catch (err) {
    setError(err.message || "Não foi possível fazer login.");
  } finally {
    setLoading(false);
  }
}

  async function handleSignup(event) {
  event.preventDefault();

  setLoading(true);
  setMessage("");
  setError("");

  try {
    const data = await cadastrarUsuario({
      nome: nomeCadastro,
      email: emailCadastro,
      senha: senhaCadastro,
      tipo: userType,
    });

    salvarSessao({
      token: data.token,
      usuario: data.usuario,
      remember,
    });

    setMessage("Cadastro realizado com sucesso!");

    if (data.usuario?.tipo === "ong") {
      setCurrentPage("postagem");
      return;
    }

    setCurrentPage("biblioteca");
  } catch (err) {
    setError(err.message || "Não foi possível criar a conta.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="new-login-container">
      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Voltar
      </button>

      <div className="new-login-content">
        <div className="logo-section">
          <h1>Rede Afeto</h1>
        </div>

        <div className="auth-card">
          <div className="user-type" role="group" aria-label="Tipo de usuário">
            <button
              type="button"
              className={`user-type-btn ${userType === "crianca" ? "active" : ""}`}
              onClick={() => {
                setUserType("crianca");
                setMessage("");
                setError("");
              }}
            >
              Criança
            </button>
            <button
              type="button"
              className={`user-type-btn ${userType === "ong" ? "active" : ""}`}
              onClick={() => {
                setUserType("ong");
                setMessage("");
                setError("");
              }}
            >
              ONG
            </button>
          </div>

          <div className="tabs">
            <button
              type="button"
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("login");
                setMessage("");
                setError("");
              }}
            >
              Login
            </button>

            <button
              type="button"
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("signup");
                setMessage("");
                setError("");
              }}
            >
              Cadastre-se
            </button>
          </div>

          {message && (
            <p className="auth-message auth-message--success">{message}</p>
          )}

          {error && <p className="auth-message auth-message--error">{error}</p>}

          {activeTab === "login" ? (
            <form className="form-section" onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="login-email">{userType === "ong" ? "Email da ONG" : "Email"}</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label htmlFor="login-password">Senha</label>
                  <span className="forgot-text" onClick={() => setCurrentPage("forgot")}>
                    Esqueceu a senha?
                  </span>
                </div>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                  />
                </div>
              </div>

              <div className="remember-me">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                <label htmlFor="remember">Lembrar-me por 30 dias</label>
              </div>

              <button className="signin-btn" type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          ) : (
            <form className="form-section" onSubmit={handleSignup}>
              <div className="input-group">
                <label htmlFor="signup-name">{userType === "ong" ? "Nome da ONG" : "Nome da Criança"}</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    id="signup-name"
                    type="text"
                    placeholder={userType === "ong" ? "Digite o nome da ONG" : "Digite o nome"}
                    value={nomeCadastro}
                    onChange={(event) => setNomeCadastro(event.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="signup-email">{userType === "ong" ? "Email da ONG" : "Email"}</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="Digite seu email"
                    value={emailCadastro}
                    onChange={(event) => setEmailCadastro(event.target.value)}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="signup-password">Senha</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    id="signup-password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={senhaCadastro}
                    onChange={(event) => setSenhaCadastro(event.target.value)}
                  />
                </div>
              </div>

              <button className="signin-btn" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Criar Conta"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
