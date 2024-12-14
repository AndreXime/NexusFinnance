import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Banco", timestamps: true })
class Banco extends Model<InferAttributes<Banco>, InferCreationAttributes<Banco>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare saldo: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare agencia: string;

  @Column({ type: DataType.UUID, allowNull: false })
  declare empresaId: string;
}

export default Banco;
