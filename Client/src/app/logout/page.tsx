"use client";
import { useState, useEffect } from "react";

export default function Pages() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para verificar se o usuário está logado
    const checkLoginStatus = async () => {
      try {
        // Requisição para a rota protegida
        const response = await fetch("http://localhost:3001/api/logout", {
          method: "GET",
          credentials: "include", // Envia os cookies com a requisição
        });

        // Verifica se a resposta é bem-sucedida
        const jsonData = await response.json();

        if (!response.ok) {
          throw new Error(jsonData.response); // Se houver erro, lança uma exceção
        }

        setData(jsonData.response); // Atualiza o estado com os dados recebidos
      } catch (err) {
        setError(err.message); // Define a mensagem de erro no estado
      }
    };

    // Chama a função para verificar o login
    checkLoginStatus();
  }, []);

  return (
    <main className="text-center">
      <h1>VOCẼ ESTÁ LOGADO??</h1>
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {data && <p style={{ color: "green" }}>API: {data}</p>}
      <a href="/plataforma">Ir para lá</a>  
    </main>
  );
}
