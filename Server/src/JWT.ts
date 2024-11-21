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
export const verifyToken = (req: Request, res: Response, next: NextFunction):void=> {
  const token = req.cookies.token;
  
  if (!token) {
    res.status(403).json({ response: "Acesso negado." });
    return;
  }

  jwt.verify(token!, secretKey, (err:any, decoded:any) => {
    if (err) {
      res.status(401).json({ message: "Token inválido." });
      return;
    }

    if (!decoded) {
      res.status(401).json({ message: "Token não pode ser decodificado." });
      return;
    }

    req.userId = (decoded as DecodedToken).userId; // Armazenar o ID do usuário no req para uso posterior
    next();
  });
};
