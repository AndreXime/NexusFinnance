import { Sequelize } from "sequelize";

const databaseUrl = process.env.databaseUrl || '';

const sequelize = new Sequelize(databaseUrl,{
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão com PostgreSQL estabelecida"))
  .catch((err) => console.error("Erro ao conectar", err));

export default sequelize;
