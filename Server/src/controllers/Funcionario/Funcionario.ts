import { Request, Response } from "express";
import { createFuncionario, findFuncionario, removeFuncionario } from "./FuncionarioService.js";

const create = async (req: Request, res: Response) => {
  try {
    createFuncionario(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    findFuncionario(req.body.id);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const deletar = async (req: Request, res: Response) => {
  try {
    removeFuncionario(req.body.id);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find, deletar };
