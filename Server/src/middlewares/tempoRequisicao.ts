import { Request, Response, NextFunction } from "express";

const middlewareTempo = (req: Request, res: Response, next: NextFunction) => {
  const start = process.hrtime();

  res.on("finish", () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const segundosPassados = (seconds + nanoseconds / 1e9).toFixed(3);
    console.log(`Request de ${req.method} ${req.originalUrl} demorou ${segundosPassados} segundos`);
  });

  next();
};

export default middlewareTempo;
