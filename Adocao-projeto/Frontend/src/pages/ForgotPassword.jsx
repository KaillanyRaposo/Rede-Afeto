import "../login.css";

export default function ForgotPassword({ setCurrentPage }) {
  return (
    <div className="new-login-container">
      <button className="back-btn" onClick={() => setCurrentPage("login")}>
        ← Voltar
      </button>
      
      <div className="new-login-content">
        <div className="logo-section">
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
