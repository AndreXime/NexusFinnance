import { Table, Column, Model, DataType, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'Transacao', timestamps: true })
class Transacao extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string;//ENUM: gain ou experense
    
  @Column({ type: DataType.STRING, allowNull: true })
  declare descricao: string;
    
  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare valor: number;
    
  @Column({ type: DataType.DATE, allowNull: false })
  declare data: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  declare categoria: string;
  
}

export default Transacao;