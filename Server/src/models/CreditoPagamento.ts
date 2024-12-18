import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: "CreditoPagamento", timestamps: true })
class CreditoPagamento extends Model<
  InferAttributes<CreditoPagamento>,
  InferCreationAttributes<CreditoPagamento>
> {
  @PrimaryKey
  @Column({ type: DataType.UUID, allowNull: false })
  declare pagamentoId: string;

  @PrimaryKey
  @Column({ type: DataType.UUID, allowNull: false })
  declare creditoId: string;
}

export default CreditoPagamento;
