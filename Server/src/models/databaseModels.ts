import { Sequelize } from "sequelize-typescript";
import Contador from "./Contador.js";
import Credito from "./Credito.js";
import Transacao from "./Transacoes.js";
import Banco from "./Banco.js";
import Pagamento from "./Pagamento.js";
import Empresa from "./Empresa.js";
import Funcionario from "./Funcionario.js";
import CreditoPagamento from "./CreditoPagamento.js";

const databaseUrl = process.env.databaseUrl || "postgres://nexusfin:nexusadmin@localhost:5432/rootDatabase";

const sequelize = new Sequelize(databaseUrl, {
  logging: false,
  dialect: "postgres",
  pool: {
    max: 5, min: 0,
    acquire: 30000, // Tempo máximo para uma conexão ser adquirida antes de lançar um erro
    idle: 10000,    // Tempo máximo que uma conexão pode ficar ociosa antes de ser liberada
  },
  models: [Contador, Funcionario, Transacao, Banco, Pagamento, Credito, Empresa, CreditoPagamento]
});

// Relacionamentos no sequelize precisa mencionar os 2 para a consulta ser mais facil

//Empresa -> Contador `Um-para-Muitos`
Empresa.hasMany(Contador, { foreignKey: "empresaId", as: "contadores" });
Contador.belongsTo(Empresa, { foreignKey: "empresaId", as: "empresa" });

//Empresa -> Funcionario `Um-para-Muitos`
Empresa.hasMany(Funcionario, { foreignKey: "empresaId", as: "funcionarios" });
Funcionario.belongsTo(Empresa, { foreignKey: "empresaId", as: "empresa" });

// Empresa -> Banco `Um-para-Muitos`
Empresa.hasMany(Banco, { foreignKey: "empresaId", as: "bancos" });
Banco.belongsTo(Empresa, { foreignKey: "empresaId", as: "empresa" });

// Funcionario -> Pagamento `Um-para-Muitos`
Funcionario.hasMany(Pagamento, { foreignKey: "funcionarioId", as: "pagamentos" });
Pagamento.belongsTo(Funcionario, { foreignKey: "funcionarioId", as: "funcionario" });

// Banco -> Transacoes `Um-para-Muitos`
Banco.hasMany(Transacao, { foreignKey: "bancoId", as: "transacoes" });
Transacao.belongsTo(Banco, { foreignKey: "bancoId", as: "banco" });

// Banco -> Pagamento `Um-para-Muitos`
Banco.hasMany(Pagamento, { foreignKey: "bancoId", as: "pagamentos" });
Pagamento.belongsTo(Banco, { foreignKey: "bancoId", as: "banco" });

//Banco -> Credito `Um-para-Muitos`
Banco.hasMany(Credito, { foreignKey: "bancoId", as: "creditos" });
Credito.belongsTo(Banco, { foreignKey: "bancoId", as: "banco" });

// Pagamento -> Credito `Muitos-para-Muitos`
Pagamento.belongsToMany(Credito, {
  through: CreditoPagamento,
  foreignKey: "pagamentoId",
  as: "creditos"
});
Credito.belongsToMany(Pagamento, {
  through: CreditoPagamento,
  foreignKey: "creditoId",
  as: "pagamentos"
});

export async function testConnection() {
  try {
    await sequelize.authenticate({ logging: false });
    console.info("Conexão com PostgreSQL estabelecida\n");
    if (process.env.DB_SYNC === 'true'){
      await sequelize.sync({ logging: false });
      console.info("Modelos sincronizados com o banco de dados\n");
    }
  } catch (err) {
    console.error("Erro ao conectar ao PostgreSQL:\n", err);
  }
}
export { Contador, Transacao, Banco, Pagamento, Credito, Empresa, Funcionario, CreditoPagamento };
