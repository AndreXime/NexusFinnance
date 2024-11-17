import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "rootDatabase",
  username: "nexusfin",
  password: "nexusadmin",
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão com PostgreSQL estabelecida"))
  .catch((err) => console.error("Erro ao conectar", err));

export default sequelize;
