import type { Request, Response } from "express";
import { createBanco, findBanco } from "./BancoService.js";

const create = async (req: Request, res: Response) => {
  try {
    await createBanco(req.body);
    res.status(200).json({ message: "Banco criado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const Banco = await findBanco(req.body.IDBanco);
    res.status(200).json({ message: Banco });
  } catch {
    res.status(401).json({ message: "Esse banco não existe" });
  }
};

export default { create, find };
