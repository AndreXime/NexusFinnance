'use client';
import ChartComponent from './chart';

const Inicio: React.FC = (Empresa) => {
  const data = {
    labels: ['Funcionarios', 'Transacoes', 'Outros'],
    datasets: [
      {
        label: 'Distribuição de Vendas',
        data: [10, 30, 40], // Porcentagens para cada categoria
        backgroundColor: ['#c11fc0', '#1f6fc1', '#1fc120'],
        borderColor: ['#c11fc0', '#1f6fc1', '#1fc120'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {Empresa ? (
        <>
          <h2>Resumo rapido da sua empresa</h2>
          <div className='Grafico row g-5'>
            <div className='col-6'>
              <ChartComponent data={data} chartTitle='Distribuição de gastos da empresa' />
            </div>
            <div className='col-6'>
              <ChartComponent data={data} chartTitle='Distribuição de gastos da empresa' />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Cadastre sua empresa</h1>
          <form>
            <div className='mb-3'>
              <label htmlFor='nomeEmpresa' className='form-label'>
                Nome da Empresa
              </label>
              <input
                type='text'
                className='form-control'
                id='nomeEmpresa'
                placeholder='Digite o nome da empresa'
                required
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='cnpj' className='form-label'>
                CNPJ
              </label>
              <input
                type='text'
                className='form-control'
                id='cnpj'
                placeholder='Digite o CNPJ'
                required
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='endereco' className='form-label'>
                Endereço
              </label>
              <input
                type='text'
                className='form-control'
                id='endereco'
                placeholder='Digite o endereço completo'
                required
              ></input>
            </div>
            <button type='submit' className='btn btn-primary'>
              Enviar
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Inicio;
