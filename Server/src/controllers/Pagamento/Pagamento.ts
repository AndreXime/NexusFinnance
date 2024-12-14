import { Request, Response } from "express";
import { createPagamento, findPagamento } from "./PagamentoService.js";

const create = async (req: Request, res: Response) => {
  try {
    createPagamento(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    findPagamento(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
