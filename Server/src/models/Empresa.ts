import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Empresa", timestamps: true })
class Empresa extends Model<InferAttributes<Empresa>, InferCreationAttributes<Empresa>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare CNPJ: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare endereco: string;
}

export default Empresa;
