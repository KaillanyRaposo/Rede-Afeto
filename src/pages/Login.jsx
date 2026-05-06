import "../login.css";
import { useState, useEffect } from "react";

export default function Login({ setCurrentPage, initialTab }) {
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="new-login-container">
      <button className="back-btn" onClick={() => setCurrentPage("home")}>
        ← Voltar
      </button>
      
      <div className="new-login-content">
        <div className="logo-section">
          <div className="logo-heart" aria-hidden="true">
            <svg
              className="logo-heart-icon"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 85C50 85 15 57 15 37C15 25 25 15 37 15C42 15 47 17 50 22C53 17 58 15 63 15C75 15 85 25 85 37C85 57 50 85 50 85Z"
                stroke="#2C3C3C"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="brand-name">Rede Afeto</h1>
        </div>

        <div className="auth-card">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button 
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Cadastre-se
            </button>
          </div>

          {activeTab === "login" ? (
            <div className="form-section">
              <div className="input-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input type="email" placeholder="seuemail@exemplo.com" />
                </div>
              </div>

              <div className="input-group">
                <div className="label-row">
                  <label>Senha</label>
                  <span className="forgot-text" onClick={() => setCurrentPage("forgot")}>Esqueceu a senha?</span>
                </div>
                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input 
                    type="password"
                    placeholder="********" 
                  />
                </div>
              </div>

              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembrar-me por 30 dias</label>
              </div>

              <button className="signin-btn">
                Entrar
              </button>
            </div>
          ) : (
            <div className="form-section">
              <div className="input-group">
                <label>Nome Completo</label>
                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input type="text" placeholder="Seu nome completo" />
                </div>
              </div>

              <div className="input-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input type="email" placeholder="seuemail@exemplo.com" />
                </div>
              </div>

              <div className="input-group">
                <label>Senha</label>
                <div className="input-with-icon">
                  <span className="icon"></span>
                  <input 
                    type="password"
                    placeholder="********" 
                  />
                </div>
              </div>

              <button className="signin-btn">
                Criar Conta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
