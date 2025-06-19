import React, { useState } from 'react';

function RadioButtonAddSub() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('❌ Please enter valid numbers');
      return;
    }

    if (operation === 'add') {
      setResult(a + b);
    } else if (operation === 'sub') {
      setResult(a - b);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Calculator with Radio Buttons</h2>

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

      <div style={{ marginTop: '20px' }}>
        <label>
          <input
            type="radio"
            value="add"
            checked={operation === 'add'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Add
        </label>
        &nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="radio"
            value="sub"
            checked={operation === 'sub'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Sub
        </label>
      </div>

      <button
        onClick={handleCalculate}
        style={{ padding: '10px 20px', margin: '20px' }}
      >
        Calculate
      </button>

      <h1>Result: {result !== null ? result : '---'}</h1>
    </div>
  );
}

export default RadioButtonAddSub;
