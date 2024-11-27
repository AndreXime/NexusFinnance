import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.JWT_KEY || "nZz87qv5CRKn63o0IBa3";

interface DecodedToken extends JwtPayload {
  userId: string;
}

// Função para gerar o JWT
export const generateToken = (userId:string):string => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expira em 1 hora
  return token;
};

// Middleware para verificar o JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction): void=> {
  const token = req.cookies.token;
  
  if (!token) {
    res.status(403).json({ response: "Acesso negado." });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey) as DecodedToken;

    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ response: "Token inválido." });
  }
};
