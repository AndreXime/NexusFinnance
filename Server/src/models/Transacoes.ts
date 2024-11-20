// models/Transaction.js
import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
  return sequelize.define("Transacao", {
    tipo: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
