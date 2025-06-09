
import GrowthChart from './chart';
import React, { useState, useEffect } from 'react';
import './Page2.css';

function Page2() {
  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams({
      current_age: 25,
      retirement_age: 65,
      annual_contribution: 60000,
      income_percent: 0.1,
      annual_return: 0.07
    });

    fetch(`http://127.0.0.1:5000/rothira?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setEstimate(data);
      })
      .catch(err => setError('Request failed: ' + err.message));
  }, []);

  return (
    <div>

      <h2>Roth IRA Estimate</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : estimate ? (
        <div>
          <p>Account Type: {estimate.account_type}</p>
          <p>Annual Contribution: ${estimate.annual_contribution.toFixed(2)}</p>
          <p>Estimated Value at Retirement: ${estimate.estimated_value.toFixed(2)}</p>
        </div>
      ) : (
        <p>Loading estimate...</p>
      )}
      <GrowthChart />
    </div>
  );
}


export default Page2;