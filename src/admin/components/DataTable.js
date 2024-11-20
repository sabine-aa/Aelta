import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <table className="table-auto w-full bg-white shadow-lg">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="px-4 py-2 bg-gray-200 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="border px-4 py-2">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
