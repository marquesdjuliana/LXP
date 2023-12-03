import React, { useState } from "react";
import { requestLogin, setToken, requestRole } from "../services/requests";
import { useNavigate } from "react-router-dom";
import "../styles/pages/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    try {
      const { token } = await requestLogin("/login", { email, password });
      setToken(token);

      const { role: userRole } = await requestRole("/login/role");
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);

      if (userRole === "student") {
        navigate("/courses");
      } else if (userRole === "professor") {
        navigate("/courses-professor");
      }
    } catch (error) {
      setFailedTryLogin(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <input
          className="login-input"
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={() => login()}>
          Entrar
        </button>
      </div>
      {failedTryLogin && (
        <p className="error-message">
          O endereço de e-mail ou a senha não estão corretos. Por favor, tente
          novamente.
        </p>
      )}
    </div>
  );
};

export default Login;
