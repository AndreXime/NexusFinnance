import { Contador } from "../models/Index.js";

interface userRegister {
  nome: string;
  email: string;
  senha: string;
}

export const registerUser = async ({nome,email,senha}: userRegister) => {
  try {
    const newUser = await Contador.create({
      nome,
      email,
      senha,
    });
    return newUser.get("id");
  } catch {
    throw new Error("Email já cadastrado");
  }
};

interface loginSchema{
  email: string,
  senha: string
}

export const loginUser = async ({email, senha}: loginSchema) => {
  const user = await Contador.findOne({
    where: {
      email: email,
      senha: senha
    }
  });
  if (!user) throw new Error();

  return user.get("id"); // Retorna objeto com apenas { id: valor }
};

export const findUser = async (userId: string) => {
  const user = await Contador.findByPk(userId);
  if (!user) {
    throw new Error();
  }
  return user;
};
