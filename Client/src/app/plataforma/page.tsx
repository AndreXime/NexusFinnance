"use client";
import { useState, useEffect } from "react";

export default function pages() {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
       try {
          const response = await fetch("http://localhost:3001/api/login", {
            method: "GET",
            credentials: "include", // Habilita o envio de cookies com a requisição
          });

          const jsonData = await response.json();

          if (!response.ok) {
            throw new Error(jsonData.response);
          }
         setData(jsonData.response); // Atualiza o estado com os dados recebidos
       } catch (err) {
         setError(err.message); // Define a mensagem de erro no estado
       }
     };
     

     fetchData();
   }, []);
   return (
     <main className="text-center">
       <h1>COMO FICAR LOGADO</h1>
       {error && <p style={{ color: "red" }}>Erro: {error}</p>}
       {data && <p style={{ color: "green" }}>API: {data}</p>}
       <a href="/logado">Ir para cá</a>
     </main>
   );
}
