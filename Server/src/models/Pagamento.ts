import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Pagamento", timestamps: true })
class Pagamento extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioBruto: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioLiquido: string;

  @Column({ type: DataType.DATE, allowNull: false })
  declare dataPagamento: Date;
}

export default Pagamento;
