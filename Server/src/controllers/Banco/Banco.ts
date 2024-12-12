import { Request, Response } from "express";
import { createBanco, findBanco } from "./BancoService.js";

const create = async (req: Request, res: Response) => {
  try {
    const Banco = await createBanco(req.body);
    res.status(200).json({ message: Banco });
  } catch {
    res.status(401).json({ message: "Já esse banco já foi cadastrado" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const { IDBanco } = req.body;
    const Banco = await findBanco(IDBanco);
    res.status(200).json({ message: Banco });
  } catch {
    res.status(401).json({ message: "Esse banco não existe" });
  }
};

export default { create, find };
