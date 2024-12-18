import { Request, Response } from "express";
import { createCredito, findCredito } from "./CreditoService.js";

// Req.body já está sanatizada com somente campos necessarios
const create = async (req: Request, res: Response) => {
  try {
    const { pagamentoId, ...body } = req.body;
    await createCredito(body, pagamentoId);
    res.status(200).json({ message: "Criado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const credito = await findCredito(req.body.creditoId);
    res.status(200).json({ message: credito });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
