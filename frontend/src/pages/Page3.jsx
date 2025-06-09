import React, { useState } from 'react';
import './Page2.css';
import GrowthChart from './chart';

function Page3() {
  const [form, setForm] = useState({
    current_age: 25,
    retirement_age: 65,
    annual_contribution: 60000,
    income_percent: 10, // use whole number for input
    annual_return: 7
  });

  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const params = new URLSearchParams({
      ...form,
      income_percent: form.income_percent / 100,
      annual_return: form.annual_return / 100
    });

    try {
      const res = await fetch(`http://localhost:5000/rothira?${params.toString()}`);
      const data = await res.json();
      if (data.error) {
        setEstimate(null);
        setError(data.error);
      } else {
        setError(null);
        setEstimate(data);
      }
    } catch (err) {
      setError("Failed to fetch: " + err.message);
    }
  };

  return (
    <div className="ira-wrapper">
      {/* Left: Form */}
      <div className="ira-form">
        <h2>Roth IRA Calculator</h2>

        <label>Current Age</label>
        <input name="current_age" type="number" value={form.current_age} onChange={handleChange} />

        <label>Retirement Age</label>
        <input name="retirement_age" type="number" value={form.retirement_age} onChange={handleChange} />

        <label>Annual Income</label>
        <input name="annual_contribution" type="number" value={form.annual_contribution} onChange={handleChange} />

        <label>Income % Invested</label>
        <input name="income_percent" type="number" value={form.income_percent} onChange={handleChange} />

        <label>Annual Return %</label>
        <input name="annual_return" type="number" value={form.annual_return} onChange={handleChange} />

        <button onClick={handleSubmit}>Calculate</button>
      </div>

      {/* Right: Output */}
      <div className="ira-output">
        <h2>Results</h2>
        {error ? (
          error === "The annual contribution is above the limit" ? (
            <div style={{ color: 'orange' }}>
              <p>⚠️ Your calculated annual contribution exceeds the Roth IRA limit.</p>
              <p>Please lower your income percentage or check the contribution rules.</p>
            </div>
          ) : (
            <p style={{ color: 'red' }}>Error: {error}</p>
          )
        ) : estimate ? (
          <div className="ira-result">
            <p><strong>Account Type:</strong> {estimate.account_type}</p>
            <p><strong>Annual Contribution:</strong> ${estimate.annual_contribution.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p><strong>Estimated Value at Retirement:</strong> ${estimate.estimated_value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          </div>
        ) : (
          <p className="placeholder">Your results will appear here.</p>
        )}
               {estimate?.x_axis && estimate?.y_axis && (
  <GrowthChart x_axis={estimate.x_axis} y_axis={estimate.y_axis} />
    )}
      </div>
    </div>
  );
}

export default Page3;