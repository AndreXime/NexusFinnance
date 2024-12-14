import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Contador", timestamps: true })
class Contador extends Model<InferAttributes<Contador>, InferCreationAttributes<Contador>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare senha: string;

  @Column({ type: DataType.UUID, allowNull: false })
  declare empresaId: CreationOptional<string>;
}

export default Contador;
