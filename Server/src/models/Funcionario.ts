import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Funcionario", timestamps: true })
class Funcionario extends Model<InferAttributes<Funcionario>, InferCreationAttributes<Funcionario>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare cargo: string;

  @Column({ type: DataType.DATE, allowNull: false })
  declare dataEntrada: Date;

  @Column({ type: DataType.UUID, allowNull: false })
  declare empresaId: string;
}

export default Funcionario;
