import { Request, Response } from "express";
import { createTransacao, findTransacao } from "../services/Transacao.js";

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

export default { create, find };
