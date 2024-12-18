import { CreationAttributes } from "sequelize";
import { Banco, Empresa } from "../../models/databaseModels.js";

export const createBanco = async (criarBanco: CreationAttributes<Banco>) => {
  try {
    const empresaExiste = await Empresa.findByPk(criarBanco.empresaId);
    if (!empresaExiste) throw 1;

    await Banco.create(criarBanco);

    return;
  } catch (error) {
    if (error instanceof Error) throw new Error("Esse banco já existe");

    throw new Error(`Essa empresa não existe`);
  }
};

export const findBanco = async (IDBanco: string) => {
  const BancoFind = await Banco.findByPk(IDBanco);
  if (!BancoFind) throw new Error("Esse banco não existe");

  return BancoFind;
};
