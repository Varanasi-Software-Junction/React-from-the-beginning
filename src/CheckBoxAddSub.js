import React, { useState } from 'react';

function CheckBoxAddSub() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [isAdd, setIsAdd] = useState(true);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('❌ Please enter valid numbers');
      return;
    }

    setResult(isAdd ? a + b : a - b);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Calculator with Checkbox (Add/Sub)</h2>

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
        <label style={{ fontSize: '18px' }}>
          <input
            type="checkbox"
            checked={isAdd}
            onChange={(e) => setIsAdd(e.target.checked)}
          />
          &nbsp; {isAdd ? 'Add' : 'Sub'}
        </label>
      </div>

      <button
        onClick={handleCalculate}
        style={{ padding: '10px 20px', marginTop: '20px' }}
      >
        Calculate
      </button>

      <h1>Result: {result !== null ? result : '---'}</h1>
    </div>
  );
}

export default CheckBoxAddSub;
