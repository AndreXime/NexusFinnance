import { Usuario } from "../models/Index.js";

interface userData {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
}

export const createUser = async (userData: userData) => {
  const { nome, email, senha, cargo } = userData;
  const newUser = await Usuario.create({
    nome: nome,
    email: email,
    cargo: cargo,
    senha: senha,
  });
  return newUser;
};

export const findAllUser = async () => {
  const allUsers = await Usuario.findAll();
  return allUsers;
};
