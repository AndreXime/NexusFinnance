import { Router, Response, Request } from "express";
import { verifyToken, generateToken } from "./JWT.js";

const router = Router();

router.get("/", async (req: Request, res:Response) => {
  res.status(200).json({ response: "Olá voce" });
});

router.post("/login", async (req: Request, res: Response) => {
  const { email } = req.body
  
  const token = generateToken(email);
  res.cookie("token", token, {
    httpOnly: true, // Impede o acesso ao cookie via JavaScript
    secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
    sameSite: "strict", // Evita o envio do cookie em requisições cross-site
    expires: new Date(Date.now() + 3600000), // Expira em 1 hora
  });

  res.status(200).json({ response: "Olá voce tem um token com voce" });
});

router.get("/logout", verifyToken, async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true, // Impede o acesso ao cookie via JavaScript
    secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
    sameSite: "strict", // Evita o envio do cookie em requisições cross-site
  });
  
  res.status(200).json({ response: "Você foi deslogado" });
});

router.get("/protegido", verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ response: `Voce está logado como id :${req.userId}` });
});

router.use(async (req: Request, res:Response) => {
  res.status(404).json({ response: "Não encontrado" });
});

export default router;
