import type { Request, Response } from "express";
import { createPagamento, findPagamento } from "./PagamentoService.js";

const create = async (req: Request, res: Response) => {
  try {
    await createPagamento(req.body);
    res.status(200).json({ message: "Funcionario criado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const funcionario = await findPagamento(req.body.IDPagamento);
    res.status(200).json({ message: funcionario });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
