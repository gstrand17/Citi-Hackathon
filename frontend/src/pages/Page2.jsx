import React, { useState } from 'react';
import './Page2.css';

function Page2() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://127.0.0.1:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div>
      <input className="input-field"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default Page2;