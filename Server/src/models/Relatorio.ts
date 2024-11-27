import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Relatorio', timestamps: true })
class Relatorio extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare tipo: string; //"balance_sheet","dre", "trial_balance","cash_flow_forecast"
  
  @Column({ type: DataType.DATE, allowNull: false })
  declare dataOcorrida: Date;
}

export default Relatorio;