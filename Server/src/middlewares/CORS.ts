import type { Request, Response, NextFunction } from "express";

const cors = (req: Request, res: Response, next: NextFunction) => {
   const origin = req.headers.origin;

   // Verifica se a origem é permitida
   if (origin !== process.env.URL_Client) {
      res.status(403).json({ message: "Acesso negado. Origem não autorizada." });
      return;
   }

   next();
};
 
 
export default cors;