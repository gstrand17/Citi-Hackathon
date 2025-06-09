import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto';

const GrowthChart = ({ currentAge, retirementAge, annualContribution, incomePercent, annualReturn }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!currentAge || !retirementAge || !annualContribution) return;

    axios.get('http://localhost:5000/submit', {
      params: {
        current_age: currentAge,
        retirement_age: retirementAge,
        annual_contribution: annualContribution,
        income_percent: incomePercent,
        annual_return: annualReturn
      }
    })
    .then(response => {
        
        const res = response.data;

        const labels = res.x_axis.map(yearOffset => currentAge + yearOffset); // convert to actual age
        const values = res.y_axis;

        const data = {
            labels,
            datasets: [
            {
                label: 'Estimated 401(k) Value',
                data: values,
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
  }, [currentAge, retirementAge, annualContribution, incomePercent, annualReturn]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4 text-center">📈 401(k) Growth Over Time</h3>
      <Line data={chartData} />
    </div>
  );
};

export default GrowthChart;
