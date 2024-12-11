'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registra os módulos necessários para gráficos de pizza
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = ({ data, chartTitle }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: chartTitle,
        font: {
          size: 18,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default ChartComponent;
