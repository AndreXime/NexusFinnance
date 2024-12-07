import { Table, Column, Model, DataType, PrimaryKey, Default } from "sequelize-typescript";

@Table({ tableName: "Contador", timestamps: true })
class Contador extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare senha: string;
  
}

export default Contador;
