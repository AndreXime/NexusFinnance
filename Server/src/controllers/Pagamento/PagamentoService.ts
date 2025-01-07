import type { CreationAttributes } from "sequelize";
import { Pagamento, Banco, Funcionario } from "../../models/databaseModels.js";

export const createPagamento = async (criarPagamento: CreationAttributes<Pagamento>) => {
  try {
    if (await Banco.findByPk(criarPagamento.bancoId)) throw "Esse banco não existe";
    if (await Funcionario.findByPk(criarPagamento.funcionarioId)) throw "Esse funcionario não existe";

    await Pagamento.create(criarPagamento);
    return;
  } catch (error) {
    if (error instanceof Error) throw new Error("Esse funcionario já existe");

    throw new Error(error);
  }
};

export const findPagamento = async (IDPagamento: string) => {
  const PagamentoEncontrado = await Pagamento.findByPk(IDPagamento);
  if (!PagamentoEncontrado) throw new Error("Pagamento não encontrado");

  return PagamentoEncontrado;
};
