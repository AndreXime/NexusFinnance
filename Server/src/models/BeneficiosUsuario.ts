import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
  return sequelize.define("BeneficioUsuario", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    benefitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
