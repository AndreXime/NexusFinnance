import { Request, Response } from "express";
import { createEmpresa, findEmpresa } from "../services/Empresa.js";

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

const connect = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email já utilizado" });
  }
};

export default { create, find, connect };
