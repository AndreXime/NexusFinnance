import type { Request, Response } from "express";
import { createTransacao, findTransacao } from "./TransacaoService.js";

const create = async (req: Request, res: Response) => {
  try {
    await createTransacao(req.body);
    res.status(200).json({ message: "Transação criado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const transacao = await findTransacao(req.body.IDTransacao);
    res.status(200).json({ message: transacao });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
