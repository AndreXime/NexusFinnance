import Banco from "../models/Banco.js";

interface BancoSchema {
  nome: string;
  agencia: string;
  saldo: number;
  IDEmpresa: string;
}

export const createBanco = async ({ nome, agencia, saldo, IDEmpresa }: BancoSchema) => {
  try {
    const BancoCreate = Banco.create({
      nome,
      agencia,
      saldo,
      empresaId: IDEmpresa
    });
    return BancoCreate;
  } catch {
    throw new Error();
  }
};

export const findBanco = async (IDBanco: string) => {
  try {
    const BancoFind = Banco.findByPk(IDBanco);
    return BancoFind;
  } catch {
    throw new Error();
  }
};
