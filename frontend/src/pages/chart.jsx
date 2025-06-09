import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto';

const GrowthChart = ({ currentAge, retirementAge, annualContribution }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!currentAge || !retirementAge || !annualContribution) return;

    axios.get('http://localhost:5000/submit', {
      params: {
        current_age: currentAge,
        retirement_age: retirementAge,
        annual_contribution: annualContribution
      }
    })
    .then(response => {
      const growth = response.data.growth_data;

      const data = {
        labels: growth.map(entry => entry.age),
        datasets: [
          {
            label: 'Estimated 401(k) Value',
            data: growth.map(entry => entry.value),
            fill: true,
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
            tension: 0.3
          }
        ]
      };

      setChartData(data);
    })
    .catch(error => {
      console.error('Error fetching chart data:', error);
    });
  }, [currentAge, retirementAge, annualContribution]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4 text-center">📈 401(k) Growth Over Time</h3>
      <Line data={chartData} />
    </div>
  );
};

export default GrowthChart;
