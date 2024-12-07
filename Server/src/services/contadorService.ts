import { Contador } from "../models/Index.js";

interface userRegister {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
}

export const registerUser = async (userData: userRegister) => {
  try {
    const { nome, email, senha, cargo } = userData;
    const newUser = await Contador.create({
      nome,
      email,
      senha,
      cargo
    });
    return newUser.get("id");
  } catch {
    throw new Error("Email já cadastrado");
  }
};

interface userLogin {
  email: string;
  senha: string;
}

export const loginUser = async (userData: userLogin) => {
  const { email, senha } = userData;
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
