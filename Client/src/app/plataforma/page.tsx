"use client";
import { useState } from "react";
import Config from "../../components/dashboard/Configuracoes";
import Relatorio from "../../components/dashboard/Relatorios";
import Inicio from "../../components/dashboard/Inicio";
import Funcionarios from "../../components/dashboard/Funcionarios";
import Fluxo from "../../components/dashboard/Fluxo";

import { UserProvider } from "../../context/userContext";
import { DataProvider } from "../../context/dataContext";

const PlataformaPage = () => {
  const [activeComponent, setActiveComponent] = useState("Inicio");

  const renderContent = () => {
    switch (activeComponent) {
      case "Inicio":
        return <Inicio />;
      case "Funcionarios":
        return <Funcionarios />;
      case "Relatorios":
        return <Relatorio />;
      case "Config":
        return <Config />;
      case "Fluxo":
        return <Fluxo />;
      default:
        logout();
        return <h1>Componente não encontrado</h1>;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/user/logout", {
        method: "POST",
        credentials: "include"
      });
      if (response.ok) {
        window.location.replace("/");
      }
    } catch {}
  };

  return (
    <>
      <button
        onClick={() => {
          setActiveComponent("Funcionarios");
        }}
      >
        Mudar
      </button>
      <main className={`content p-5 pt-4`}>
        <UserProvider>
          <DataProvider>{renderContent()}</DataProvider>
        </UserProvider>
      </main>
    </>
  );
};

export default PlataformaPage;
