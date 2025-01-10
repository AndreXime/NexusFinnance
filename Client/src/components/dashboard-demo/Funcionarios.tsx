import Image from "next/image";
const Funcionarios: React.FC = () => {
  const funcionarios = {
    1: {
      nome: "João Silva",
      localizacao: "São Paulo, SP",
      cargo: "Analista de Sistemas",
      sexo: "Masculino"
    },
    2: {
      nome: "Maria Oliveira",
      localizacao: "Rio de Janeiro, RJ",
      cargo: "Desenvolvedora Front-End",
      sexo: "Feminino"
    },
    3: {
      nome: "Carlos Souza",
      localizacao: "Belo Horizonte, MG",
      cargo: "Gerente de Projetos",
      sexo: "Masculino"
    },
    4: {
      nome: "Ana Lima",
      localizacao: "Curitiba, PR",
      cargo: "Designer UX/UI",
      sexo: "Feminino"
    },
    5: {
      nome: "Fernanda Pereira",
      localizacao: "Porto Alegre, RS",
      cargo: "Cientista de Dados",
      sexo: "Feminino"
    },
    6: {
      nome: "Pedro Santos",
      localizacao: "Florianópolis, SC",
      cargo: "Desenvolvedor Back-End",
      sexo: "Masculino"
    },
    7: {
      nome: "Beatriz Costa",
      localizacao: "Brasília, DF",
      cargo: "Engenheira de Dados",
      sexo: "Feminino"
    },
    8: {
      nome: "Lucas Almeida",
      localizacao: "Salvador, BA",
      cargo: "Especialista em DevOps",
      sexo: "Masculino"
    },
    9: {
      nome: "Ricardo Martins",
      localizacao: "Fortaleza, CE",
      cargo: "Arquiteto de Software",
      sexo: "Masculino"
    },
    10: {
      nome: "Camila Rocha",
      localizacao: "Manaus, AM",
      cargo: "Testadora de Qualidade (QA)",
      sexo: "Feminino"
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <h1 className="text-center text-2xl font-bold mb-4 hidden lg:block">Quadro de funcionarios</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Object.values(funcionarios).map((funcionario, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          src={
                            funcionario.sexo == "Feminino"
                              ? "/demo_assets/blank_feminino.png"
                              : "/demo_assets/blank_masculino.png"
                          }
                          width={10}
                          height={10}
                          alt="foto do funcionario"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{funcionario.nome}</div>
                      <div className="text-sm opacity-50">{funcionario.localizacao}</div>
                    </div>
                  </div>
                </td>
                <td>{funcionario.cargo}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Detalhes</button>
                </th>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Funcionarios;
