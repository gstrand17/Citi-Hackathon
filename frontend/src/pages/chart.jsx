import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const GrowthChart = ({ x_axis, y_axis }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!x_axis || !y_axis || x_axis.length !== y_axis.length) return;

    const data = {
      labels: x_axis,
      datasets: [
        {
          label: 'Estimated Retirement Value',
          data: y_axis,
          fill: true,
          borderColor: '#1976d2',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          tension: 0.3,
        },
      ],
    };

    setChartData(data);
  }, [x_axis, y_axis]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4 text-center">📈 Growth Over Time</h3>
      <Line data={chartData} />
    </div>
  );
};

export default GrowthChart;
