"use client"
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement, ArcElement);

const Inicio: React.FC = () => {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const lucroBruto =   [9000, 9000, 2500, 6000, 8000, 1500, 20000, 13000, 10000, 14000, 11500, 20000];
  const gastosBrutos = [3000, 15000, 4000, 12000, 5000, 1000, 10000, 10000, 5000, 11000, 8500, 13000];

  const valoresLiquidos = lucroBruto.map((lucro, index) => lucro - gastosBrutos[index]);

  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Lucro Bruto',
        data: lucroBruto,
        borderColor: '#4CAF50', // Verde suave, mas vibrante
        backgroundColor: 'rgba(76, 175, 80, 0.4)', // Verde claro, visível
        tension: 0.1, 
        fill: true,
      },
      {
        label: 'Gastos Brutos',
        data: gastosBrutos,
        borderColor: '#E53935', // Vermelho suave, mas impactante
        backgroundColor: 'rgba(229, 57, 53, 0.4)', // Azul claro, mais forte
        tension: 0.1, 
        fill:true
      },
    ]
  };

  const geradorColor = (data) => {
    return data.map((value) => 
      value < 0 ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)'
    );
  };

  const dataliquido = {
    labels: meses,
    datasets: [
      {
        label: 'Saldo Líquido',
        data: valoresLiquidos,
        backgroundColor: geradorColor(valoresLiquidos),
        borderColor: geradorColor(valoresLiquidos).map((color) =>
          color.replace('0.6', '1') // Aumenta a opacidade para a borda
        ),
        borderWidth: 1,
        tension: 0.1,
      },
    ]
  }

  const dataTipoGasto = {
    labels: ["Funcionarios","Produtos","Manuntenção","Impostos"],
    datasets: [
      {
        label: "Categoria de gastos",
        data: [5000,10000,4000,5000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Funcionarios (Cor suave de rosa)
          'rgba(54, 162, 235, 0.6)', // Produtos (Azul claro)
          'rgba(255, 159, 64, 0.6)', // Manuntenção (Laranja)
          'rgba(153, 102, 255, 0.6)'  // Impostos (Roxo suave)
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Funcionarios
          'rgba(54, 162, 235, 1)', // Produtos
          'rgba(255, 159, 64, 1)', // Manuntenção
          'rgba(153, 102, 255, 1)'  // Impostos
        ],
        borderWidth: 1,
        tension: 0.1,
      },
    ]
  }

  const dataTipoLucro = {
    labels: ["Produtos", "Parcerias", "Assinaturas", "Consultorias"],
    datasets: [
      {
        label: "Categoria de lucros",
        data: [5500, 2000, 3000, 1500],
        backgroundColor: [
          'rgba(233, 30, 99, 0.6)', 
          'rgba(33, 150, 243, 0.6)', 
          'rgba(255, 87, 34, 0.6)', 
          'rgba(156, 39, 176, 0.6)'  
        ],
        borderColor: [
          'rgba(233, 30, 99, 1)', 
          'rgba(33, 150, 243, 1)', 
          'rgba(255, 87, 34, 1)', 
          'rgba(156, 39, 176, 1)'  
        ],
        borderWidth: 1,
        tension: 0.1,
      },
    ]
  }  

  const options = {
    responsive: true
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-4">Resumo rapido da sua empresa</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-center text-xl mb-4">Lucros e gastos em 2024</h3>
          <Line data={data} options={options} />
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-center text-xl mb-4">Saldo liquido</h3>
          <Bar data={dataliquido} options={options} />
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-center text-xl mb-4">Categoria dos gastos</h3>
          <Pie data={dataTipoGasto} options={options} />
        </div>

        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-center text-xl mb-4">Categoria dos lucro</h3>
          <Pie data={dataTipoLucro} options={options} />
        </div>
      </div>
    </>  
  );
};

export default Inicio;
