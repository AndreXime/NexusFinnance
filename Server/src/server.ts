import express from "express";
import session from "express-session";
import cors from "cors";
import "./database"; // Conecta ao BD
import routes from "./routes_API"

const app = express();

app.set("x-powered-by", false);
app.use(cors());

app.use(express.json()); // Para entender requisições JSON
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

app.use(
  session({
    secret: process.env.SESSION_KEY || "a3A1njak2MC12DALJ", // Uma chave secreta para assinar o cookie da sessão
    resave: false, // Não salva a sessão de volta no store se ela não foi modificada
    saveUninitialized: true, // Salva sessões não inicializadas
    cookie: {
      secure: false,
      maxAge: undefined,
    },
  })
);

app.use("/api", routes);

// Inicializando servidor
const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`\nServer está em http://localhost:${port}/api\n`);
});
