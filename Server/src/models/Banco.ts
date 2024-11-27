// models/BankAccount.js
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'BancosConta', timestamps: true })
class BancoConta extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare saldo: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare numeroConta: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nomeBanco: string;
}

export default BancoConta;
