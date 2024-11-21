import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes.js"
import { testConnection } from "./models/_Index.js";

const app = express();

app.set("x-powered-by", false);
app.use(
  cors({
    origin: "http://localhost:3000", // ou '*' para permitir todos os domínios (não recomendado em produção)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);

await testConnection(process.env.NODE_ENV || "Development");

app.use(cookieParser());
app.use(express.json()); // Para entender requisições JSON
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

app.use("/api", routes);

// Inicializando servidor
const port = 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`\nServer está em http://localhost:${port}/api\n`);
});
