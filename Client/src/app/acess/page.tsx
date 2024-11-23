"use client";
import { useState } from "react";
import Popup from "../../components/popup";
import "../../styles/font-awesome/css/all.min.css"

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const toggleForm = () => setIsRegistering(!isRegistering);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ }), 
        credentials: "include",
      });
      const jsonData = await response.json();
      setPopupMessage(`API Response: ${jsonData.response}`);
    } catch (err) {
      setPopupMessage(`API Response: ${err.message}`);
    } finally {
      setPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

return (
<main className="container d-flex justify-content-center align-items-center">      
  <div className="card p-5" style={{ width: '70vh' }}>
        <h1 className="text-center mb-4">{isRegistering ? 'Criar Conta' : 'Entrar'}</h1>
        <form onSubmit={handleSubmit}>
          {/* Formulário de Login ou Registro */}
          {isRegistering ? (
            <>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="mb-4">
                  <label htmlFor="password" className="form-label">Repita a senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password_confirm"
                    required
                  />
                </div>
              <button type="submit" className="btn btn-warning w-100">Registrar</button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Lembrar de mim
                </label>
              </div>
              <button type="submit" className="btn btn-warning w-100">Entrar</button>
            </>
          )}
        </form>
        <div className="mt-3 text-center">
          <button
            className="btn btn-link"
            onClick={toggleForm}
          >
            {isRegistering ? 'Já tem uma conta? Faça login' : 'Ainda não tem uma conta? Registre-se'}
          </button>
        </div>
      </div> 
  <Popup isOpen={popupOpen} message={popupMessage} onClose={handleClosePopup} />
</main>
);}
export default LoginPage;