import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";
import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

@Table({ tableName: "Transacao", timestamps: true })
class Transacao extends Model<InferAttributes<Transacao>, InferCreationAttributes<Transacao>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: CreationOptional<string>;

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

  @Column({ type: DataType.UUID, allowNull: false })
  declare bancoId: string;
}

export default Transacao;
