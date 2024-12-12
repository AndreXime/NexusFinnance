import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import routes from "./routes.js";
import { testConnection } from "./models/databaseModels.js";
import middlewareTempo from "./middlewares/tempoRequisicao.js";

const app = express();

// Metodo para conseguir obter o json para o Swagger
import { createRequire } from "module";
const swaggerDocument = createRequire(import.meta.url)("../swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  cors({
    origin: "http://localhost:3000",
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

// Inicializando servidor
const port = 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server está em http://localhost:${port}/api\n`);
});
