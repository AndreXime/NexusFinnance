"use client";
import { useState } from "react";
import Popup from "../../components/popup";

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popup, setPopup] = useState({ title: "", message: "" });

  const toggleForm = () => setIsRegistering(!isRegistering);

  const submitLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      email: formData.get("email") || "",
      senha: formData.get("senha") || ""
    };
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "include"
      });
      if (!response.ok) {
        const jsonData = await response.json();
        setPopup({ title: "Ocorreu um erro:", message: `${jsonData.message}` });
      } else {
        window.location.replace("/plataforma");
      }
    } catch {
      setPopup({
        title: "Erro no servidor:",
        message: "Ocorreu um problema ao se conectar., Por favor tente novamente mais tarde."
      });
    }
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Cria um objeto FormData com os inputs
    const payload = {
      nome: formData.get("nome") || "",
      email: formData.get("email") || "",
      senha: formData.get("senha") || ""
    };
    try {
      const response = await fetch("/api/user/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "include"
      });
      if (!response.ok) {
        const jsonData = await response.json();
        setPopup({ title: "Ocorreu um erro:", message: `${jsonData.message}` });
      } else {
        window.location.replace("/plataforma");
      }
    } catch {
      setPopup({
        title: "Erro no servidor:",
        message: "Ocorreu um problema ao se conectar., Por favor tente novamente mais tarde"
      });
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center bg-dark">
      <div className="card p-5 m-4" style={{ width: "60vh" }}>
        <h1 className="text-center mb-4">{isRegistering ? "Criar Conta" : "Entrar"}</h1>
        {isRegistering ? (
          <>
            <form onSubmit={submitRegister}>
              <div className="mb-4">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input type="text" className="form-control" name="nome" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" name="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input type="password" className="form-control" name="senha" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Repita a senha
                </label>
                <input type="password" className="form-control" name="senhaConfirm" required />
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Registrar
              </button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={submitLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" name="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="senha" className="form-label">
                  Senha
                </label>
                <input type="password" className="form-control" name="senha" required />
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Lembrar de mim
                </label>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Entrar
              </button>
            </form>
          </>
        )}
        <div className="mt-3 text-center">
          <button className="btn btn-link" onClick={toggleForm}>
            {isRegistering ? "Já tem uma conta? Faça login" : "Ainda não tem uma conta? Registre-se"}
          </button>
        </div>
      </div>
      <Popup message={popup.message} title={popup.title} status={false} />
    </main>
  );
};
export default LoginPage;
