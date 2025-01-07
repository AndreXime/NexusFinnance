import type { Request, Response } from "express";
import { createEmpresa, findEmpresa, connectEmpresa } from "./EmpresaService.js";

const create = async (req: Request, res: Response) => {
  try {
    await createEmpresa(req.body);
    res.status(200).json({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const empresa = await findEmpresa(req.body.IDEmpresa);
    res.status(200).json({ message: empresa });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const connect = async (req: Request, res: Response) => {
  try {
    await connectEmpresa(req.body.IDEmpresa);
    res.status(200).json({ message: "Conectado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find, connect };
