import { createContext, useState, useContext } from "react";

interface Empresa {
  nome: string;
  cnpj: string;
  endereco: string;
}

interface Funcionario {
  nome: string;
  cargo: string;
  salario: number;
}

interface Pagamento {
  data: string;
  valor: number;
  metodo: string;
}

interface DataState {
  Empresa: Empresa | null;
  Funcionario: Funcionario[];
  Pagamento: Pagamento[];
}

interface DataContextType {
  data: DataState;
  setEmpresa: (empresa: Empresa) => void;
  addFuncionario: (funcionario: Funcionario) => void;
  addPagamento: (pagamento: Pagamento) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataState>({
    Empresa: null,
    Funcionario: null,
    Pagamento: null
  });

  const setEmpresa = (Empresa: Empresa) => {
    setData((prev) => ({ ...prev, Empresa }));
  };

  const addFuncionario = (funcionario: Funcionario) => {
    setData((prev) => ({ ...prev, Funcionario: [...prev.Funcionario, funcionario] }));
  };

  const addPagamento = (pagamento: Pagamento) => {
    setData((prev) => ({ ...prev, Pagamento: [...prev.Pagamento, pagamento] }));
  };

  return (
    <DataContext.Provider value={{ data, setEmpresa, addFuncionario, addPagamento }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData deve ser usado dentro DataProvider");
  }
  return context;
};
