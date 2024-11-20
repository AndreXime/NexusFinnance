// models/BankAccount.js
import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize:Sequelize) => {
  return sequelize.define("BancoConta", {
    name: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    accountNumber: DataTypes.STRING,
    bankName: DataTypes.STRING,
  });

};
