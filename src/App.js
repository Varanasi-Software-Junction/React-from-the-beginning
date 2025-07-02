import React from 'react';
import ExcelTable from './ExcelTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Excel Style Table in React with Tailwind CSS</h1>
      <ExcelTable />
    </div>
  );
}

export default App;