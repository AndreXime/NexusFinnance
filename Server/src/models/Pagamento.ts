import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
   
  const PagamentoModel = sequelize.define("Pagamento", {
    nomeFuncionario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salarioBruto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deducoes: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    beneficios: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    salarioLiquido: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dataPagamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return PagamentoModel;
};
