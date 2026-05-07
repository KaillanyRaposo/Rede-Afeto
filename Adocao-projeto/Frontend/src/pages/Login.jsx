import { useState } from "react";
import "../login.css";
import { loginUser } from "../services/api";
import { saveAuthData } from "../utils/authStorage";

export default function Login({ setCurrentPage, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab ?? "login");

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
      const data = await loginUser({
        email,
        senha,
      });

      saveAuthData(
        {
          token: data.token,
          usuario: data.usuario,
        },
        remember
      );

      setMessage("Login realizado com sucesso!");

      setTimeout(() => {
        setCurrentPage("home");
      }, 700);
    } catch (err) {
      setError(err.message || "Não foi possível fazer login.");
    } finally {
      setLoading(false);
    }
  }

  function handleSignup(event) {
    event.preventDefault();

    setMessage("");
    setError(
      "Cadastro ainda não está integrado ao backend. No momento, apenas o login está funcionando."
    );

    console.log({
      nomeCadastro,
      emailCadastro,
      senhaCadastro,
    });
  }

  return (
    <div className="new-login-container">
      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Voltar
      </button>

      <div className="new-login-content">
        <div className="logo-section">
          <div className="logo-heart">♡</div>
          <h1>Rede Afeto</h1>
        </div>

        <div className="auth-card">
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
            <p style={{ color: "#2f7d32", marginBottom: "15px" }}>
              {message}
            </p>
          )}

          {error && (
            <p style={{ color: "#b3261e", marginBottom: "15px" }}>
              {error}
            </p>
          )}

          {activeTab === "login" ? (
            <form className="form-section" onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label>Senha</label>
                  <span
                    className="forgot-text"
                    onClick={() => setCurrentPage("forgot")}
                  >
                    Esqueceu a senha?
                  </span>
                </div>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required
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
                <label>Nome completo</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nomeCadastro}
                    onChange={(event) => setNomeCadastro(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Email</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    value={emailCadastro}
                    onChange={(event) => setEmailCadastro(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Senha</label>

                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senhaCadastro}
                    onChange={(event) => setSenhaCadastro(event.target.value)}
                    required
                  />
                </div>
              </div>

              <button className="signin-btn" type="submit">
                Criar Conta
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}