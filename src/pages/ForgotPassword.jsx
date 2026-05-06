import "../login.css";

export default function ForgotPassword({ setCurrentPage }) {
  return (
    <div className="new-login-container">
      <button className="back-btn" onClick={() => setCurrentPage("login")}>
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
            <button className="tab active">Recuperar Senha</button>
          </div>

          <div className="form-section">
            <div className="input-group">
              <label>Email</label>
              <div className="input-with-icon">
                <span className="icon"></span>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>
            </div>

            <button className="signin-btn">
              Enviar Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
