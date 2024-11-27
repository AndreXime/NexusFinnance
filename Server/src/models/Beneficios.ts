import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Beneficios', timestamps: true })
class Beneficios extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string; // Transporte", "Saude", "Alimentacao", "Outro

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare custo: number;

}

export default Beneficios;