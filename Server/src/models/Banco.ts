import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Banco", timestamps: true })
class Banco extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare saldo: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare agencia: string;
}

export default Banco;
