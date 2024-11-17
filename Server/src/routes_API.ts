import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  res.status(200).json({ response:"Olá voce" });
});

router.use( async (req, res, next) => {
  res.status(404).json({ response:"Não encontrado" });
});

export default router;
