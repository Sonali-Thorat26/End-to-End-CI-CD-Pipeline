import React, { useState } from 'react';

function CounterApp() {
  // Initialize state 'count' with 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Simple React Counter</h1>
      <p style={{ fontSize: '24px' }}>Current Count: <strong>{count}</strong></p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Decrement
      </button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
