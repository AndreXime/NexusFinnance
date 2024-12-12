import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo do estado para o TypeScript
type EstadoDashboard = {
  funcionarios: { nome: string }[];
  config: { tema?: string };
  fluxo: any[];
  relatorio: any[];
};

// Criando o valor padrão (estado inicial)
const estadoInicial: EstadoDashboard = {
  funcionarios: [],
  config: {},
  fluxo: [],
  relatorio: []
};

// Criando o contexto com o valor padrão
const DashboardContext = createContext<{
  estado: EstadoDashboard;
   setEstado: React.Dispatch<React.SetStateAction<EstadoDashboard>>;
}>({
  estado: estadoInicial,
  setEstado: () => {} // função vazia para o valor padrão
});

// Função para fornecer o contexto aos filhos
export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [estado, setEstado] = useState(estadoInicial);

  return (
    <DashboardContext.Provider value={{ estado, setEstado }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Hook para consumir o contexto
export const useDashboard = () => useContext(DashboardContext);
