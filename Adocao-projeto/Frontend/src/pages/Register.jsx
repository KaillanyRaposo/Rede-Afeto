import "../login.css";
import { useState } from "react";

export default function Register({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <svg className="heart" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 85C50 85 15 57 15 37C15 25 25 15 37 15C42 15 47 17 50 22C53 17 58 15 63 15C75 15 85 25 85 37C85 57 50 85 50 85Z"
              stroke="#2C3C3C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
