import React, { useState } from 'react';

function ButtonAddSub() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    setResult(a + b);
  };

  const handleSub = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    setResult(a - b);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Add/Subtract App</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <br />
      <button onClick={handleAdd} style={{ padding: '10px 20px', margin: '10px' }}>Add</button>
      <button onClick={handleSub} style={{ padding: '10px 20px', margin: '10px' }}>Sub</button>
      <h1>Result: {result !== null ? result : '---'}</h1>
    </div>
  );
}

export default ButtonAddSub;
