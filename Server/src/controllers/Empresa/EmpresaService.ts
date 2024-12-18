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
  const empresaEncontrada = await Empresa.findByPk(IDEmpresa, {
    attributes: ["nome", "cpnj", "endereco"]
  });
  if (!empresaEncontrada) throw new Error("Empresa não existe");

  return empresaEncontrada;
};

export const connectEmpresa = async (IDEmpresa: string) => {
  if (!(await Empresa.findByPk(IDEmpresa))) throw new Error("Empresa não encontrada");
  return;
};
