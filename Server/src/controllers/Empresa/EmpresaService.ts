import { CreationAttributes } from "sequelize";
import { Empresa } from "../../models/databaseModels.js";

export const createEmpresa = async (criarEmpresa: CreationAttributes<Empresa>) => {
  try {
    await Empresa.create(criarEmpresa);
    return;
  } catch {
    throw new Error("Empresa já é cadastrada");
  }
};

export const findEmpresa = async (IDEmpresa: string) => {
  try {
    const empresaEncontrada = await Empresa.findByPk(IDEmpresa, {
      attributes: ["nome", "cpnj", "endereco"]
    });
    return empresaEncontrada;
  } catch {
    throw new Error("Empresa não existe");
  }
};
