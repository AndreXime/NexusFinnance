"use client";
import { useState, useEffect } from "react";

export default function Pages() {
  const [email, setEmail] = useState(""); // Estado para o email
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento

  // Função para enviar o email para a API
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true); // Inicia o estado de carregamento

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST", // Ou GET, dependendo do que sua API espera
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Envia o email como JSON
        credentials: "include", // Habilita o envio de cookies com a requisição
      });

      const jsonData = await response.json();

      if (!response.ok) {
        throw new Error(jsonData.response || "Erro desconhecido");
      }

      setData(jsonData.response); // Atualiza o estado com os dados recebidos
      setError(null); // Limpa o erro
    } catch (err) {
      setError(err.message); // Define a mensagem de erro no estado
      setData(null); // Limpa os dados
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <main className="text-center">
      <h1>Envio de Email</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Email"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {data && <p style={{ color: "green" }}>API: {data}</p>}

      <a href="/logado">Ir para cá</a>
    </main>
  );
}
