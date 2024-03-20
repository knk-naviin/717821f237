import React, { useState } from 'react';

function AverageCalculator() {
  const [result, setResult] = useState({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: null
  });

  const fetchNumbers = async (numberType) => {
    try {
      const response = await fetch(`http://20.244.56.144/numbers/${numberType}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <button onClick={() => fetchNumbers('primes')}>Fetch Prime Numbers</button>
        <button onClick={() => fetchNumbers('fibo')}>Fetch Fibonacci Numbers</button>
        <button onClick={() => fetchNumbers('even')}>Fetch Even Numbers</button>
        <button onClick={() => fetchNumbers('rand')}>Fetch Random Numbers</button>
      </div>
      <div>
        <p>Previous Window State: {result.windowPrevState.join(', ')}</p>
        <p>Current Window State: {result.windowCurrState.join(', ')}</p>
        <p>Numbers from 3rd party server: {result.numbers.join(', ')}</p>
        <p>Average: {result.avg !== null ? result.avg.toFixed(2) : 'N/A'}</p>
      </div>
    </div>
  );
}

export default AverageCalculator;
