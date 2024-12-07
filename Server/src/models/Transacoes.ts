import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Transacao", timestamps: true })
class Transacao extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare descricao: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare valor: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare data: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare categoria: string;
}

export default Transacao;
