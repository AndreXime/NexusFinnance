import { CreationAttributes } from "sequelize";
import { Contador } from "../../models/databaseModels.js";

export const registerUser = async (criarUsuario: CreationAttributes<Contador>) => {
  try {
    const newUser = await Contador.create(criarUsuario);

    return newUser.id;
  } catch {
    throw new Error("Email já cadastrado");
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

export const findUser = async (id: string) => {
  const user = await Contador.findByPk(id, {
    attributes: ["nome", "email", "updatedAt"]
  });
  if (!user) throw new Error("Usuario não existe");

  return user;
};
