import { CreationAttributes } from "sequelize";
import { Transacao, Banco } from "../../models/databaseModels.js";

export const createTransacao = async (criarTransacao: CreationAttributes<Transacao>) => {
  try {
    if (!(await Banco.findByPk(criarTransacao.bancoId))) throw 1;

    await Transacao.create(criarTransacao);
    return;
  } catch (error) {
    if (error instanceof Error) throw new Error("Esse transacao já existe");

    throw new Error("Esse banco não existe");
  }
};

export const findTransacao = async (IDTransacao: string) => {
  const transacaoEncontrada = await Transacao.findByPk(IDTransacao);
  if (!transacaoEncontrada) throw new Error("Transacao não existe");

  return transacaoEncontrada;
};
