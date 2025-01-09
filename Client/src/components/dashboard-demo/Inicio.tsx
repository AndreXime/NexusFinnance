"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Inicio: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Labels do eixo X
    datasets: [
      {
        label: 'Vendas 2025',
        data: [30, 45, 25, 60, 80], // Dados do gráfico
        borderColor: 'rgba(75,192,192,1)', // Cor da linha
        tension: 0.1, // Curvatura da linha
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Vendas',
      },
    },
  };
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-4">Resumo rapido da sua empresa</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
      {/* Gráfico 1 */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-center text-xl mb-4">Gráfico 1</h3>
        <Line data={data} options={options} />
      </div>

      {/* Gráfico 2 */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-center text-xl mb-4">Gráfico 2</h3>
        <Line data={data} options={options} />
      </div>

      {/* Gráfico 3 */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-center text-xl mb-4">Gráfico 3</h3>
        <Line data={data} options={options} />
      </div>

      {/* Gráfico 4 */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-center text-xl mb-4">Gráfico 4</h3>
        <Line data={data} options={options} />
      </div>
    </div>
    </>  
  );
};

export default Inicio;
