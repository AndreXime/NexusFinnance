import { CreationAttributes } from "sequelize";
import { Credito, Banco, Pagamento } from "../../models/databaseModels.js";

export const createCredito = async (criarCredito: CreationAttributes<Credito>, pagamentoId: string) => {
  try {
    const bancoExiste = await Banco.findByPk(criarCredito.bancoId);
    if (!bancoExiste) throw Error("Id de banco não existe");

    const pagamentoExiste = await Pagamento.findByPk(pagamentoId);
    if (!pagamentoExiste) throw new Error("Id de pagamento não existe");

    await Credito.create(criarCredito);
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCredito = async (creditoId: string) => {
  try {
    if (creditoId.length < 36) throw new Error();

    const CreditoFind = Credito.findByPk(creditoId);
    return CreditoFind;
  } catch {
    throw new Error("Esse credito não existe");
  }
};
