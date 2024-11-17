import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
   
  const Payroll = sequelize.define("Payroll", {
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baseSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deductions: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    benefits: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    netSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Payroll;
};
