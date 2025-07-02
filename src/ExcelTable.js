import React, { useState } from 'react';

function ExcelTable() {
  const [data, setData] = useState([
    ["Name", "Age", "Country"],
    ["Kishan", "20", "Bhadohi"],
    ["Prince", "19.5", "Bhadohi"],
    ["Azad", "2.8", "South"],
    ["Azad", "2.8", "South"],
  ]);

  const handleChange = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {data[0].map((header, colIndex) => (
              <th key={colIndex} className="border px-4 py-2 bg-blue-100 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(rowIndex + 1, colIndex, e.target.value)}
                    className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelTable;