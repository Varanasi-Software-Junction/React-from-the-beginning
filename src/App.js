


import React from 'react';
import { useState } from 'react';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [max, setMax] = useState(a > b);
  return (
    <div>
      <center>
        <h1>A: {a}</h1>
        <h1>B: {b}</h1>
        <h1>Max: {max ? a : b}</h1>
        <button onClick={() => setA(a + 1)}>Increment A</button>
        <button onClick={() => setB(b + 1)}>Increment B</button>
        <button onClick={() => setMax(a > b)}>Update Max</button>
      </center>
    </div>
  );
}


export default App;
