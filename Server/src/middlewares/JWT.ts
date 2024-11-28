import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secretKey = process.env.JWT_KEY || "nZz87qv5CRKn63o0IBa3";

interface DecodedToken extends JwtPayload {
  userId: string;
}

export const generateToken = (userId: string): string => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expira em 1 hora
  return token;
};

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token;
  try {
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, secretKey) as DecodedToken;

    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: "Não autenticado" });
    return;
  }
};
