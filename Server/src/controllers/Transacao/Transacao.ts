import { Request, Response } from "express";
import { createTransacao, findTransacao } from "./TransacaoService.js";

const create = async (req: Request, res: Response) => {
  try {
    createTransacao(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    findTransacao(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
