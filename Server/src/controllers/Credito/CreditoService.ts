import Credito from "../../models/Credito.js";

interface CreditoSchema {
  nome: string;
  tipo: string;
  custo: number;
  IDBanco: string;
}

export const createCredito = async (criarCredito: CreditoSchema) => {
  try {
    const CreditoCreate = Credito.create({ criarCredito });
    return CreditoCreate;
  } catch {
    throw new Error("Email já cadastrado");
  }
};

export const findCredito = async (IDCredito: string) => {
  try {
    const CreditoFind = Credito.findByPk(IDCredito);
    return CreditoFind;
  } catch {
    throw new Error("Email já cadastrado");
  }
};
