import type { Request, Response } from "express";
import { createFuncionario, findFuncionarios, removeFuncionario } from "./FuncionarioService.js";

const create = async (req: Request, res: Response) => {
  try {
    await createFuncionario(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const funcionario = await findFuncionarios(req.body.IDFuncionario);
    res.status(200).json({ message: funcionario });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const deletar = async (req: Request, res: Response) => {
  try {
    await removeFuncionario(req.body.IDFuncionario);
    res.status(200).json({ message: "Removido com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find, deletar };
