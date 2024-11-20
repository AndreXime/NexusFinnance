import { Router, Response, Request, NextFunction } from "express";
const router = Router();
import { verifyToken, generateToken} from "./JWT.js";

router.get("/", async (req: Request, res:Response) => {
  res.status(200).json({ response:"Olá voce" });
});

router.get("/login", async (req: Request, res: Response) => {
  const token = generateToken(69696969);

  res.cookie("token", token, {
    httpOnly: true, // Impede o acesso ao cookie via JavaScript
    secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
    sameSite: "strict", // Evita o envio do cookie em requisições cross-site
    expires: new Date(Date.now() + 3600000), // Expira em 1 hora
  });

  res.status(200).json({ response: "Olá voce tem um token com voce" });
});

router.get("/protegido", verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ response: `Voce está logado como id :${req.userId}` });
});

router.use(async (req: Request, res:Response, next:NextFunction) => {
  res.status(404).json({ response: "Não encontrado" });
});

export default router;
