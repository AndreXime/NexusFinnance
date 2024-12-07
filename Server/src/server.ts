import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import routes from "./routes.js";
import { testConnection } from "./models/Index.js";

const app = express();

// Gambiarra pra conseguir pegar o json para o Swagger
import { createRequire } from "module";
const swaggerDocument = createRequire(import.meta.url)("../swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set("x-powered-by", false);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

testConnection();

app.use(cookieParser());
app.use(express.json()); // Para entender requisições JSON
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

app.use("/api", routes);

// Inicializando servidor
const port = 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server está em http://localhost:${port}/api\n`);
});
