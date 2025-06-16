


import React from 'react';
import { useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [max, setMax] = useState((a >= b && a >= c) ? a : (b >= c) ? b : c);


  const handleChangeA = (event) => {
    setA(event.target.value);
  };
  const handleChangeB = (event) => {
    setB(event.target.value);
  };
  const handleChangeC = (event) => {
    setC(event.target.value);
  };
  return (
    <div>
      <center>
        <h1>A: {a}</h1>
        <h1>B: {b}</h1>
        <h1>C: {c}</h1>
        <h1>Max: {max}</h1>
        <input type="text" value={a} onChange={handleChangeA} />
        <input type="text" value={b} onChange={handleChangeB} />
        <input type="text" value={c} onChange={handleChangeC} />
        <button onClick={() => setMax((a >= b && a >= c) ? a : (b >= c) ? b : c)}>Update Max</button>
      </center>
    </div>
  );
}


export default App;
