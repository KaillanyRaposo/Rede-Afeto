import "../login.css";
import { useState } from "react";

export default function Register({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <h1 className="brand-name">RedeAfeto</h1>
        </div>
      </div>

      <div className="right">
        <div className="card">
          <h2>Cadastro</h2>

          <label>Nome Completo</label>
          <input type="text" placeholder="Nome Completo" />

          <label>Email</label>
          <input type="email" placeholder="Email" />

          <label>Senha</label>
          <div className="password-input">
            <input type={showPassword ? "text" : "password"} placeholder="Senha" />
            <button
              type="button"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <label>Confirmar Senha</label>
          <div className="password-input">
            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirmar Senha" />
            <button
              type="button"
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <div className="links">
            <span className="forgot" onClick={() => setCurrentPage("home")}>← Voltar</span>
            <span className="forgot" onClick={() => setCurrentPage("login")}>Já tem conta? Entre aqui</span>
          </div>

          <button className="submit-btn">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
