// import React from "react";

// const DataTable = ({ columns, data }) => {
//   return (
//     <table className="table-auto w-full bg-white shadow-lg">
//       <thead>
//         <tr>
//           {columns.map((col, index) => (
//             <th key={index} className="px-4 py-2 bg-gray-200 text-left">
//               {col}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index} className="hover:bg-gray-100">
//             {columns.map((col, colIndex) => (
//               <td key={colIndex} className="border px-4 py-2">
//                 {row[col]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DataTable;
import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th key={column} className="p-3 text-left border-b">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td key={column} className="p-3 border-b">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
