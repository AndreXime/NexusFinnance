import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Funcionario", timestamps: true })
class Funcionario extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare cargo: string;

  @Column({ type: DataType.DATE, allowNull: false })
  declare dataEntrada: Date;
}

export default Funcionario;
