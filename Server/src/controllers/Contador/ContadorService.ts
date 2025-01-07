import type { CreationAttributes } from "sequelize";
import { Contador, Empresa } from "../../models/databaseModels.js";

export const registerUser = async (criarUsuario: CreationAttributes<Contador>) => {
  try {
    const newUser = await Contador.create(criarUsuario);

    return newUser.id;
  } catch(error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email: string, senha: string) => {
  const user = await Contador.findOne({
    where: {
      email: email,
      senha: senha
    }
  });
  if (!user) throw new Error("Usuario não existe");

  return user.id;
};

export const setEmpresaUser = async (id: string, empresaId: string) => {

  const [user, empresa] = await Promise.all([
      Contador.findByPk(id),
      Empresa.findByPk(empresaId),
  ]);

  if (!user) throw new Error("Usuario não existe");
  if (!empresa) throw new Error("Empresa não existe");

  user.empresaId = empresaId;
  user.save();

  return user;
};

export const findUser = async (id: string) => {
  const user = await Contador.findByPk(id, {
    attributes: ["nome", "email", "updatedAt"]
  });
  if (!user) throw new Error("Usuario não existe");

  return user;
};
