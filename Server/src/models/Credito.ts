import { Table, Column, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Credito", timestamps: true })
class Credito extends Model<InferAttributes<Credito>, InferCreationAttributes<Credito>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string; // Transporte", "Saude", "Alimentacao", "Outro

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare custo: number;

  @Column({ type: DataType.UUID, allowNull: false })
  declare bancoId: string;
}

export default Credito;
