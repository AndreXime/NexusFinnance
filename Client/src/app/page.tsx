"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <header className="hero min-h-screen">
          <div className="hero-content text-center">
            <div>
              <h1 className="text-5xl font-bold text-secondary brightness-200">Bem-vindo à NexusFinance</h1>
              <h3 className="text-2xl font-bold my-6">
                Simplificando a gestão para você focar no que realmente importa!
              </h3>
              <Link href={"/demonstracao"} className="btn btn-info">
                <FaArrowRight size={17} />
                Veja uma demonstração
              </Link>
            </div>
          </div>
        </header>

        <section className="m-5 mb-20 md:m-20 scroll-mt-[90px]" id="sobre">
          <h1 className="text-3xl mb-10 font-bold text-center text-secondary brightness-200">Sobre nós</h1>
          <h3 className="text-2xl mb-4 font-bold">Por que escolher a Nexus Finnance?</h3>
          <p className="text-base md:text-lg mb-3">
            Na NexusFinance HR, nossa missão é transformar a gestão financeira e de recursos humanos da sua
            empresa, oferecendo uma plataforma integrada e eficiente. Combinamos a gestão financeira com a
            administração de pessoal, focando em facilitar processos como folha de pagamento, controle de
            benefícios e geração de relatórios, sempre com precisão e praticidade.
          </p>
          <p className="text-base md:text-lg">
            Nossa plataforma foi desenvolvida para proporcionar uma visão clara e completa do seu negócio,
            unindo as áreas financeira e de recursos humanos em um único sistema. Isso significa mais
            agilidade, menos erros e uma gestão muito mais eficiente. Queremos que sua empresa tenha a
            liberdade de se concentrar no que realmente importa, enquanto cuidamos das complexidades
            operacionais.
          </p>
        </section>

        <section className="m-5 mb-20 md:m-20  scroll-mt-[90px]" id="funcionalidades">
          <h1 className="text-3xl mb-10 font-bold text-center text-secondary brightness-200">
            Funcionalidades principais
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <ul className="p-4 shadow rounded-lg flex-1">
              <li className="py-2">
                <h3 className="text-2xl font-bold text-primary"> Controle Financeiro e Contábil</h3>
              </li>
              <li className="py-2">
                <strong>Cadastro de Receitas e Despesas:</strong> Com total flexibilidade, categorize
                transações e crie lançamentos recorrentes.
              </li>
              <li className="py-2">
                <strong>Fluxo de Caixa:</strong> Acompanhe a saúde financeira da sua empresa com relatórios
                detalhados de entradas e saídas.
              </li>
              <li className="py-2">
                <strong>Contas Bancárias e Conciliação:</strong> Controle de múltiplas contas bancárias com
                integração direta aos extratos bancários.
              </li>
              <li className="py-2">
                <strong>Relatórios Contábeis:</strong> Geração de relatórios completos, como DRE, Balanço
                Patrimonial e previsão de fluxo de caixa.
              </li>
            </ul>
            <ul className="p-4 shadow rounded-lg flex-1">
              <li className="py-2">
                <h3 className="text-2xl font-bold text-primary">Gestão de Recursos Humanos</h3>
              </li>
              <li className="py-2">
                <strong>Folha de Pagamento:</strong>
                Automatize o cálculo de salários, considerando horas extras, comissões e descontos.
              </li>
              <li className="py-2">
                <strong>Benefícios:</strong> Controle de todos os benefícios oferecidos aos seus
                colaboradores.
              </li>
              <li className="py-2">
                <strong>Documentos Legais:</strong> Organize todos os documentos trabalhistas com alertas para
                renovação de contratos.
              </li>
            </ul>
          </div>
        </section>

        <section className="m-5 mb-20 md:m-20 scroll-mt-[90px]" id="faq">
          <h1 className="text-3xl mb-10 font-bold text-center text-secondary brightness-200">
            Perguntas Comuns
          </h1>
          <div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">O que é a NexusFinance?</div>
              <div className="collapse-content">
                <p>
                  A NexusFinance HR é uma plataforma integrada que une gestão financeira e de recursos humanos
                  em um único sistema, ajudando sua empresa a automatizar processos, como controle de folha de
                  pagamento, benefícios, fluxo de caixa e geração de relatórios.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Como a NexusFinance pode ajudar minha empresa?
              </div>
              <div className="collapse-content">
                <p>
                  A plataforma permite otimizar tarefas administrativas, aumentar a precisão nas informações
                  financeiras e de recursos humanos, e melhorar a eficiência operacional. Com a NexusFinance
                  HR, sua equipe pode se concentrar nas atividades estratégicas enquanto as rotinas
                  operacionais são automatizadas.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Quais são as funcionalidades principais da plataforma?
              </div>
              <div className="collapse-content">
                <ul>
                  <li>
                    <strong>Gestão Financeira:</strong> Controle de receitas e despesas, fluxo de caixa,
                    conciliação bancária e geração de relatórios contábeis.
                  </li>
                  <li>
                    <strong>Gestão de Recursos Humanos:</strong> Automação de folha de pagamento, controle de
                    benefícios, organização de documentos trabalhistas e alertas para vencimentos.
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                A plataforma é adequada para empresas de qualquer porte?
              </div>
              <div className="collapse-content">
                <p>
                  Sim! A NexusFinance HR foi desenvolvida para atender empresas de diferentes tamanhos e
                  setores. Sua flexibilidade permite personalizar os processos de acordo com as necessidades
                  do seu negócio.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                A plataforma é segura para armazenar dados financeiros e pessoais?
              </div>
              <div className="collapse-content">
                <p>
                  A NexusFinance HR segue rigorosos padrões de segurança e proteção de dados. Utilizamos
                  criptografia de ponta a ponta e garantimos a confidencialidade das informações dos nossos
                  clientes.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                A plataforma é compatível com outros sistemas que já uso na minha empresa?
              </div>
              <div className="collapse-content">
                <p>
                  Sim, a NexusFinance HR pode ser integrada a diversos sistemas financeiros e de gestão que
                  sua empresa já utiliza, facilitando a importação e exportação de dados de forma segura e sem
                  interrupções.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="m-5 mb-20 md:m-20 scroll-mt-[90px]" id="planos">
          <h1 className="text-3xl mb-10 font-bold text-center text-secondary brightness-200">
            Nossos planos de assinaturas
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="card bg-base-100 w-100 shadow-xl border border-solid">
              <figure className="px-10 pt-10">
                <Image
                  src="/landing_page/gratuito.svg"
                  height={100}
                  width={300}
                  alt="Foto de um individuo"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-accent">Individual</h2>
                <p>Ideal para profissionais autônomos ou equipes com até 4 colaboradores.</p>
                <div className="card-actions">
                  <button className="btn btn-success mt-5">Assine agora</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-100 shadow-xl border border-solid">
              <figure className="px-10 pt-10">
                <Image
                  src="/landing_page/pequeno.svg"
                  height={100}
                  width={300}
                  alt="Foto de um time pequeno"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">Startup</h2>
                <p>Perfeito para pequenos negócios com equipes entre 5 e 50 colaboradores.</p>
                <div className="card-actions">
                  <button className="btn btn-success mt-5">Assine agora</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-100 shadow-xl border border-solid">
              <figure className="px-10 pt-10">
                <Image
                  src="/landing_page/enterprise.svg"
                  height={100}
                  width={300}
                  alt="Foto de um time empresarial"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">Enterprise</h2>
                <p>Solução personalizada para grandes empresas com mais de 50 colaboradores.</p>
                <div className="card-actions">
                  <button className="btn btn-success mt-5">Assine agora</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
