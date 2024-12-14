import { CreationAttributes } from "sequelize";
import { Banco, Empresa } from "../../models/databaseModels.js";

export const createBanco = async (criarBanco: CreationAttributes<Banco>) => {
  try {
    const empresaExiste = await Empresa.findByPk(criarBanco.empresaId);
    if (!empresaExiste) throw 1;

    await Banco.create(criarBanco);

    return;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Esse banco já existe");
    } else {
      throw new Error(`Essa empresa não existe`);
    }
  }
};

export const findBanco = async (IDBanco: string) => {
  try {
    if (IDBanco.length < 36) throw new Error();

    const BancoFind = await Banco.findByPk(IDBanco);
    return BancoFind;
  } catch {
    throw new Error("Esse banco não existe");
  }
};
