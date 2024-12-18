import { CreationAttributes } from "sequelize";
import { Credito, Banco, Pagamento, CreditoPagamento } from "../../models/databaseModels.js";

export const createCredito = async (criarCredito: CreationAttributes<Credito>, pagamentoId: string) => {
  try {
    const bancoExiste = await Banco.findByPk(criarCredito.bancoId);
    if (!bancoExiste) throw Error("Id de banco não existe");

    const pagamentoExiste = await Pagamento.findByPk(pagamentoId);
    if (!pagamentoExiste) throw new Error("Id de pagamento não existe");

    const credito = await Credito.create(criarCredito);
    await CreditoPagamento.create({ creditoId: credito.id, pagamentoId: pagamentoId });

    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCredito = async (creditoId: string) => {
  const CreditoFind = await Credito.findByPk(creditoId);
  if (!CreditoFind) throw new Error("Esse credito não existe");

  return CreditoFind;
};
