import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
  const RelatorioModel = sequelize.define("Relatorio", {
    type: {
      type: DataTypes.ENUM(
        "balance_sheet",
        "dre",
        "trial_balance",
        "cash_flow_forecast"
      ),
      allowNull: false,
    },
    generatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return RelatorioModel;
};
