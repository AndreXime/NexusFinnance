import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
  return sequelize.define("Empresa", {
    nome: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    endereco: DataTypes.STRING,
  });
};
