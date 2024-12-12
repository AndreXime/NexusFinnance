import { Request, Response } from "express";
import { createFuncionario, findFuncionario, removeFuncionario } from "../services/Funcionario.js";

const create = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email já utilizado" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email já utilizado" });
  }
};

const deletar = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email já utilizado" });
  }
};

export default { create, find, deletar };
