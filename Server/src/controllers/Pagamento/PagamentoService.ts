import { CreationAttributes } from "sequelize";
import { Pagamento } from "../../models/databaseModels.js";

export const createPagamento = async (criarPagamento: CreationAttributes<Pagamento>) => {
  try {
    Pagamento.create(criarPagamento);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};

export const findPagamento = async (IDPagamento: string) => {
  try {
    Pagamento.findByPk(IDPagamento);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};
