import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Empresa', timestamps: true })
class Empresa extends Model{
  @Column({ type: DataType.STRING, allowNull: false })
  declare nome: string
  
  @Column({ type: DataType.STRING, allowNull: false })
  declare CNPJ: string

  @Column({ type: DataType.STRING, allowNull: false })
  declare endereco: string
}

export default Empresa;