import { Sequelize } from "sequelize-typescript";
import Usuario from "./Usuario.js";
import Beneficio from "./Beneficios.js";
import Transacao from "./Transacoes.js";
import BancoConta from "./Banco.js";
import Pagamento from "./Pagamento.js";
import Relatorio from "./Relatorio.js";
import BeneficioUsuario from "./BeneficiosUsuario.js";
import Empresa from "./Empresa.js";

const databaseUrl =
  process.env.databaseUrl || "postgres://nexusfin:nexusadmin@localhost:5432/rootDatabase";

const sequelize = new Sequelize(databaseUrl, {
  logging: false,
  dialect: "postgres",
  models: [
    Usuario,
    Transacao,
    BancoConta,
    Pagamento,
    Relatorio,
    Beneficio,
    BeneficioUsuario,
    Empresa,
  ],
});

// Empresa -> BancoConta (Um-para-Muitos)
Empresa.hasMany(BancoConta, { foreignKey: "empresaId", as: "contasBancarias" });
BancoConta.belongsTo(Empresa, { foreignKey: "empresaId", as: "empresa" });

// Usuario -> Beneficio (Muitos-para-Muitos) com tabela intermediária BeneficioUsuario
Usuario.belongsToMany(Beneficio, {
  through: BeneficioUsuario,
  foreignKey: "usuarioId",
  as: "beneficios",
});
Beneficio.belongsToMany(Usuario, {
  through: BeneficioUsuario,
  foreignKey: "beneficioId",
  as: "usuarios",
});

// Usuario -> Transacao (Um-para-Muitos)
Usuario.hasMany(Transacao, { foreignKey: "usuarioId", as: "transacoes" });
Transacao.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

// BancoConta -> Transacao (Um-para-Muitos)
BancoConta.hasMany(Transacao, { foreignKey: "bancoContaId", as: "transacoes" });
Transacao.belongsTo(BancoConta, {
  foreignKey: "bancoContaId",
  as: "bancoConta",
});

// Usuario -> Relatorio (Um-para-Muitos)
Usuario.hasMany(Relatorio, { foreignKey: "usuarioId", as: "relatorios" });
Relatorio.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

// Usuario -> Pagamento (Um-para-Um)
Usuario.hasOne(Pagamento, { foreignKey: "usuarioId", as: "pagamento" });
Pagamento.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

// Empresa -> Relatorio (Um-para-Muitos)
Empresa.hasMany(Relatorio, { foreignKey: "empresaId", as: "relatorios" });
Relatorio.belongsTo(Empresa, { foreignKey: "empresaId", as: "empresa" });

export async function testConnection() {
  const env = process.env.NODE_ENV || "Development";
  try {
    await sequelize.authenticate({ logging: false });
    console.info("Conexão com PostgreSQL estabelecida\n");
    if (env !== "production") {
      await sequelize.sync({ force: true, logging: false });
    }
  } catch (err) {
    console.error("Erro ao conectar ao PostgreSQL:\n", err);
  }
}
export {
  Usuario,
  Transacao,
  BancoConta,
  Relatorio,
  Pagamento,
  Beneficio,
  BeneficioUsuario,
  Empresa,
};
