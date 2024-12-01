import { Router, Response, Request } from "express";
import { verifyToken, generateToken } from "./middlewares/JWT.js";
import validateInput from "./middlewares/validateInput.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Pong" });
});

router.post("/login", validateInput("login"), async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const token = generateToken(email);

    res.cookie("token", token, {
      httpOnly: true, // Impede o acesso ao cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
      sameSite: "strict",
      expires: new Date(Date.now() + 3600000),
    });

    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

router.post("/registro", validateInput("register"), async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const token = generateToken(email);

    res.cookie("token", token, {
      httpOnly: true, // Impede o acesso ao cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
      sameSite: "strict",
      expires: new Date(Date.now() + 3600000),
    });

    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Usuário já existe" });
  }
});

router.get("/logout", verifyToken, async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout efetuado com sucesso" });
});

router.get("/protegido", verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ message: `Voce está logado como id :${req.userId}` });
});

router.use(async (req: Request, res: Response) => {
  res.status(404).json({ message: "Não encontrado" });
});

export default router;
