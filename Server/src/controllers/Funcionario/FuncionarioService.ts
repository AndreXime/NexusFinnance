import { CreationAttributes } from "sequelize";
import { Funcionario, Empresa } from "../../models/databaseModels.js";

export const createFuncionario = async (criarFuncionario: CreationAttributes<Funcionario>) => {
  try {
    const empresaEncontrada = await Empresa.findByPk(criarFuncionario.empresaId);
    if (!empresaEncontrada) throw 1;

    await Funcionario.create(criarFuncionario);
    return;
  } catch (error) {
    if (error instanceof Error) throw new Error("Esse funcionario já existe");

    throw new Error(`Essa empresa não existe`);
  }
};

export const findFuncionario = async (IDFuncionario: string) => {
  const funcionarioEncontrada = await Funcionario.findByPk(IDFuncionario);
  if (!funcionarioEncontrada) throw new Error("Funcionario não existe");

  return funcionarioEncontrada;
};

export const removeFuncionario = async (IDFuncionario: string) => {
  const funcionario = await Funcionario.findByPk(IDFuncionario);
  if (!funcionario) throw new Error("Funcionario não existe");

  funcionario.empresaId = "Removido";
  await funcionario.save();

  return;
};
