import { Router, Response, Request } from "express";

import Contador from "./controllers/Contador/Contador.js";
import Empresa from "./controllers/Empresa/Empresa.js";
import Funcionario from "./controllers/Funcionario/Funcionario.js";
import Pagamento from "./controllers/Pagamento/Pagamento.js";
import Credito from "./controllers/Credito/Credito.js";
import Banco from "./controllers/Banco/Banco.js";
import Transacao from "./controllers/Transacao/Transacao.js";

import validateInput from "./middlewares/validateInput.js";
import { verifyAuth } from "./middlewares/JWT.js";

const router = Router();

/* 
  Algumas tabelas não podem ser excluídas, pois isso afetaria o
  funcionamento do sistema bancário, causando falta de informações para o banco.

  Consulte o swagger para saber mais sobre as rotas
*/

router.post("/user/login", validateInput("Login"), Contador.login);
router.post("/user/registrar", validateInput("Registrar"), Contador.register);
router.get("/user", verifyAuth, Contador.find);
router.post("/user/logout", verifyAuth, Contador.logout);

router.get("/empresa", verifyAuth, Empresa.find);
router.post("/empresa", verifyAuth, validateInput("Empresa"), Empresa.create);
router.post("/empresa/conectar", verifyAuth, Empresa.connect);

router.get("/funcionario", verifyAuth, Funcionario.find);
router.post("/funcionario", verifyAuth, validateInput("Funcionario"), Funcionario.create);
router.delete("/funcionario", verifyAuth, Funcionario.deletar);

router.get("/pagamento", verifyAuth, Pagamento.find);
router.post("/pagamento", verifyAuth, validateInput("Pagamento"), Pagamento.create);

router.get("/credito", verifyAuth, Credito.find);
router.post("/credito", verifyAuth, validateInput("Credito"), Credito.create);

router.get("/banco", verifyAuth, Banco.find);
router.post("/banco", verifyAuth, validateInput("Banco"), Banco.create);

router.get("/transacao", verifyAuth, Transacao.find);
router.post("/transacao", verifyAuth, validateInput("Transacao"), Transacao.create);

router.all("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Pong" });
});

router.use(async (req: Request, res: Response) => {
  res.status(404).json({ message: "Não encontrado" });
});

export default router;
