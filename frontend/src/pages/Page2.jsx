
import React, { useState, useEffect } from 'react';
import './Page2.css';
import GrowthChart from './chart';
function Page2() {
  const [form, setForm] = useState({
    current_age: 25,
    retirement_age: 65,
    annual_contribution: 60000,
    income_percent: 0.1,
    annual_return: 0.07
  });

  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const params = new URLSearchParams(form);
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
        <input name="income_percent" type="number" step="0.01" value={form.income_percent} onChange={handleChange} />

        <label>Annual Return %</label>
        <input name="annual_return" type="number" step="0.01" value={form.annual_return} onChange={handleChange} />

        <button onClick={handleSubmit}>Calculate</button>
      </div>

      {/* Right: Output */}
      <div className="ira-output">
        <h2>Results</h2>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {estimate ? (
          <div className="ira-result">
            <p><strong>Account Type:</strong> {estimate.account_type}</p>
            <p><strong>Annual Contribution:</strong> ${estimate.annual_contribution.toFixed(2)}</p>
            <p><strong>Estimated Value at Retirement:</strong> ${estimate.estimated_value.toFixed(2)}</p>
          </div>
        ) : (
          <p className="placeholder">Your results will appear here.</p>
        )}

        <GrowthChart />
      </div>


    </div>
  );
}

export default Page2;