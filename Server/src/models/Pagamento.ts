import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Pagamento', timestamps: true })
class Pagamento extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare nomeFuncionario: string;
    
  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioBruto: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare deducoes: string;
    
  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare beneficios: string;
  
  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare salarioLiquido: string;

  @Column({ type: DataType.DATE, allowNull: false })
  declare dataPagamento: Date;
}

export default Pagamento;
