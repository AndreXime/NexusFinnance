import { CreationAttributes } from "sequelize";
import { Transacao } from "../../models/databaseModels.js";

export const createTransacao = async (criarTransacao: CreationAttributes<Transacao>) => {
  try {
    Transacao.create(criarTransacao);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};

export const findTransacao = async (IDTransacao: string) => {
  try {
    Transacao.findByPk(IDTransacao);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};
