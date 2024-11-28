import { Table, Model } from "sequelize-typescript";

@Table({ tableName: "BeneficioUsuario", timestamps: true })
class BeneficioUsuario extends Model {}

export default BeneficioUsuario;
