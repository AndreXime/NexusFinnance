import { Sequelize } from "sequelize";

import UsuarioModel from "./Usuario.js";
import TransacoesModel from "./Transacoes.js";
import BancoModel from "./Banco.js";
import PagamentoModel from "./Pagamento.js";
import RelatorioModel from "./Relatorio.js";
import BeneficioModel from "./Beneficios.js";
import BeneficioUsuarioModel from "./BeneficiosUsuario.js";
import EmpresaModel from "./Empresa.js"

const databaseUrl = process.env.databaseUrl || "postgres://nexusfin:nexusadmin@localhost:5432/rootDatabase";

const sequelize = new Sequelize(databaseUrl, {
  logging: console.log,
});

const Usuario = UsuarioModel(sequelize);
const Transacoes = TransacoesModel(sequelize);
const BancoConta = BancoModel(sequelize);
const Relatorio = RelatorioModel(sequelize);
const Pagamento = PagamentoModel(sequelize);
const Beneficios = BeneficioModel(sequelize);
const BeneficioUsuario = BeneficioUsuarioModel(sequelize);
const Empresa = EmpresaModel(sequelize);

// Relacionamentos

// Relacionamento Empresa -> Contas Bancárias
Empresa.hasMany(BancoConta, { foreignKey: "empresaId" });
BancoConta.belongsTo(Empresa, { foreignKey: "empresaId" });

// Relacionamento Usuario -> Beneficio (muitos-para-muitos)
Usuario.belongsToMany(Beneficios, { through: BeneficioUsuario, foreignKey: 'usuarioId' });
Beneficios.belongsToMany(Usuario, { through: BeneficioUsuario, foreignKey: 'beneficioId' });

// Relacionamento Usuario -> Transacoes
Usuario.hasMany(Transacoes, { foreignKey: 'usuarioId' });
Transacoes.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Relacionamento BancoConta -> Transacoes
BancoConta.hasMany(Transacoes, { foreignKey: 'bancoId' });
Transacoes.belongsTo(BancoConta, { foreignKey: 'bancoId' });

// Relacionamento Usuario -> Relatorio
Usuario.hasMany(Relatorio, { foreignKey: 'usuarioId' });
Relatorio.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Relacionamento Usuario -> Pagamento (um-para-um)
Usuario.hasOne(Pagamento, { foreignKey: 'usuarioId' });
Pagamento.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Relacionamento Empresa -> Relatorio (empresa pode gerar relatórios)
Empresa.hasMany(Relatorio, { foreignKey: 'empresaId' });
Relatorio.belongsTo(Empresa, { foreignKey: 'empresaId' });

const testConnection = async () => {
   try {
      await sequelize.authenticate();
      await sequelize.sync({ force: true });
      console.log("Conexão com PostgreSQL estabelecida\n");
   } catch (err) {
      console.error("Erro ao conectar ao PostgreSQL:", err);
   }
};

testConnection();

export { sequelize };
export default { Usuario, Transacoes, BancoConta, Relatorio, Pagamento, Beneficios, BeneficioUsuario, Empresa };
