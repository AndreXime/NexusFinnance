import { Table, Column, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: "Credito", timestamps: true })
class Credito extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string; // Transporte", "Saude", "Alimentacao", "Outro

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare custo: number;
}

export default Credito;
