import { Router, Response, Request } from "express";
import User from "./controllers/User.js";

import validateInput from "./middlewares/validateInput.js";
import { verifyAuth } from "./middlewares/JWT.js";

const router = Router();

router.get("/user", verifyAuth, User.find);
router.post("/user/register", validateInput("register"), User.register);
router.post("/user/login", validateInput("login"), User.login);
router.post("/user/logout", verifyAuth, User.logout);

router.all("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Pong" });
});

router.use(async (req: Request, res: Response) => {
  res.status(404).json({ message: "Não encontrado" });
});

export default router;
