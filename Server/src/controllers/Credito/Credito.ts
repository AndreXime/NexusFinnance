import { Request, Response } from "express";
import { createCredito, findCredito } from "./CreditoService.js";

// Req.body já está sanatizada com somente campos necessarios
const create = async (req: Request, res: Response) => {
  try {
    await createCredito(req.body, req.body.pagamentoId);
    res.status(200).json({ message: "Criado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const { creditoId } = req.body;
    const credito = await findCredito(creditoId);
    res.status(200).json({ message: credito });
  } catch (error) {
    res.status(401).json({ message: error.message || "Erro desconhecido" });
  }
};

export default { create, find };
