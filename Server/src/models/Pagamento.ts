import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Pagamento", timestamps: true })
class Pagamento extends Model<InferAttributes<Pagamento>, InferCreationAttributes<Pagamento>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioBruto: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioLiquido: string;

  @Column({ type: DataType.DATE, allowNull: false })
  declare dataPagamento: Date;

  @Column({ type: DataType.UUID, allowNull: false })
  declare bancoId: string;

  @Column({ type: DataType.UUID, allowNull: false })
  declare funcionarioId: string;
}

export default Pagamento;
