import Script from 'next/script';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/home.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <body className='bg-dark text-bg-dark'>
      <Navbar />
      <main>
        <header className='text-bg-dark'>
          <h1 className='mb-3 destaque fw-bold'>Bem-vindo à NexusFinance HR</h1>
          <h3>Simplificando a gestão para você focar no que realmente importa!</h3>
          <Link href='/acesso' className='btn btn-outline-custom mt-4 p-3 fw-bold'>
            Começar Agora
          </Link>
        </header>
        <section id='sobre-nos' className='container text-bg-dark'>
          <h2 className='pb-4 border-bottom fw-bold'>Sobre nós</h2>
          <h3>Nosso objetivos</h3>
          <p>
            Na NexusFinance HR, nossa missão é transformar a gestão financeira e de recursos humanos da sua
            empresa, oferecendo uma plataforma integrada e eficiente. Combinamos a gestão financeira com a
            administração de pessoal, focando em facilitar processos como folha de pagamento, controle de
            benefícios e geração de relatórios, sempre com precisão e praticidade.
          </p>

          <h3 className='mt-4'>Por que escolher a NexusFinance HR?</h3>
          <p>
            Nossa plataforma foi desenvolvida para proporcionar uma visão clara e completa do seu negócio,
            unindo as áreas financeira e de recursos humanos em um único sistema. Isso significa mais
            agilidade, menos erros e uma gestão muito mais eficiente. Queremos que sua empresa tenha a
            liberdade de se concentrar no que realmente importa, enquanto cuidamos das complexidades
            operacionais.
          </p>
        </section>
        <section id='funcionalidades' className='container py-5 text-bg-dark'>
          <h2 className='pb-4 border-bottom fw-bold'>Funcionalidades principais</h2>
          <div className='row'>
            <div className='col-6'>
              <h3 className='text-center'>Controle Financeiro e Contábil</h3>
              <ul>
                <li>
                  <strong>Cadastro de Receitas e Despesas:</strong> Com total flexibilidade, categorize
                  transações e crie lançamentos recorrentes.
                </li>
                <li>
                  <strong>Fluxo de Caixa:</strong> Acompanhe a saúde financeira da sua empresa com relatórios
                  detalhados de entradas e saídas.
                </li>
                <li>
                  <strong>Contas Bancárias e Conciliação:</strong> Controle de múltiplas contas bancárias com
                  integração direta aos extratos bancários.
                </li>
                <li>
                  <strong>Relatórios Contábeis:</strong> Geração de relatórios completos, como DRE, Balanço
                  Patrimonial e previsão de fluxo de caixa.
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <h3 className='text-center'>Gestão de Recursos Humanos</h3>
              <ul>
                <li>
                  <strong>Folha de Pagamento:</strong> Automatize o cálculo de salários, considerando horas
                  extras, comissões e descontos, além de gerar recibos detalhados.
                </li>
                <li>
                  <strong>Benefícios:</strong> Controle de todos os benefícios oferecidos aos seus
                  colaboradores, com cálculo automático de descontos e relatórios mensais ou anuais.
                </li>
                <li>
                  <strong>Documentos Legais:</strong> Organize todos os documentos trabalhistas, com alertas
                  para a renovação de contratos e vencimento de prazos.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id='faq' className='container text-bg-dark'>
          <h2 className='text-center mb-4 pb-4 border-bottom fw-bold'>Perguntas comuns</h2>
          <div className='accordion' id='faqAccordion'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingOne'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  O que é a NexusFinance HR?
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='headingOne'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  A NexusFinance HR é uma plataforma integrada que une gestão financeira e de recursos humanos
                  em um único sistema, ajudando sua empresa a automatizar processos, como controle de folha de
                  pagamento, benefícios, fluxo de caixa e geração de relatórios.
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  Como a NexusFinance HR pode ajudar minha empresa?
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  A plataforma permite otimizar tarefas administrativas, aumentar a precisão nas informações
                  financeiras e de recursos humanos, e melhorar a eficiência operacional. Com a NexusFinance
                  HR, sua equipe pode se concentrar nas atividades estratégicas enquanto as rotinas
                  operacionais são automatizadas.
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThree'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                >
                  Quais são as funcionalidades principais da plataforma?
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  <ul>
                    <li>
                      <strong>Gestão Financeira:</strong> Controle de receitas e despesas, fluxo de caixa,
                      conciliação bancária e geração de relatórios contábeis.
                    </li>
                    <li>
                      <strong>Gestão de Recursos Humanos:</strong> Automação de folha de pagamento, controle
                      de benefícios, organização de documentos trabalhistas e alertas para vencimentos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  A plataforma é adequada para empresas de qualquer porte?
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  Sim! A NexusFinance HR foi desenvolvida para atender empresas de diferentes tamanhos e
                  setores. Sua flexibilidade permite personalizar os processos de acordo com as necessidades
                  do seu negócio.{' '}
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  A plataforma é segura para armazenar dados financeiros e pessoais?
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  A NexusFinance HR segue rigorosos padrões de segurança e proteção de dados. Utilizamos
                  criptografia de ponta a ponta e garantimos a confidencialidade das informações dos nossos
                  clientes.{' '}
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  A plataforma é compatível com outros sistemas que já uso na minha empresa?
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  Sim, a NexusFinance HR pode ser integrada a diversos sistemas financeiros e de gestão que
                  sua empresa já utiliza, facilitando a importação e exportação de dados de forma segura e sem
                  interrupções.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src='vendor/bootstrap/bootstrap.bundle.min.js' strategy='beforeInteractive'></Script>
    </body>
  );
};

export default HomePage;
