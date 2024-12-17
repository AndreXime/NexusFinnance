import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import { testConnection } from "./models/databaseModels.js";
import middlewareTempo from "./middlewares/tempoRequisicao.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  /* @ts-expect-error: Não vai existir e nem precisar desse arquivo na produção */
  import("../swaggerSetup.cjs")
    .then((swaggerSetup) => {
      swaggerSetup.default(app);
    })
    .catch((err) => {
      console.error("Erro no swagger:", err);
    });
}

app.use(
  cors({
    origin: process.env.URL_Client || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.set("x-powered-by", false); // Desativa assinatura do express nas requisiçoes
app.use(middlewareTempo); // Mede o tempo de que o servidor demora em cada requisição
app.use(cookieParser()); // Para pode usar cookies entre o client e o server
app.use(express.json()); // Para entender requisições JSON
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

testConnection(); // Inicia e testa a conexao com o banco de dados

app.use("/api", routes); // Rotas gerais

if (false) {
  // Inicializando servidor
  const port = Number(process.env.PORT) || 4000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server está em http://localhost:${port}/api\n`);
  });
}

export default app;
