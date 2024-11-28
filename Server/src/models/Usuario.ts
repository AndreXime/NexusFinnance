import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "Usuario", timestamps: true })
class Usuario extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare cargo: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare senha: string;
}

export default Usuario;
