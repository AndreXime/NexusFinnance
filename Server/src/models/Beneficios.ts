import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
  return sequelize.define("Beneficios", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("Transporte", "Saude", "Alimentacao", "Outro"),
      allowNull: false,
    },
    custo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
