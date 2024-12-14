import { CreationAttributes } from "sequelize";
import { Funcionario } from "../../models/databaseModels.js";

export const createFuncionario = async (criarFuncionario: CreationAttributes<Funcionario>) => {
  try {
    Funcionario.create(criarFuncionario);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};

export const findFuncionario = async (IDFuncionario: string) => {
  try {
    Funcionario.findByPk(IDFuncionario);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};

export const removeFuncionario = async (IDFuncionario: string) => {
  try {
    Funcionario.findByPk(IDFuncionario);
    return;
  } catch {
    throw new Error("Email já cadastrado");
  }
};
