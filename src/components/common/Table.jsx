import React from "react";

function Table({ columns, data, tableDescriptor, onDelete }) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">
              {columnTitle}
            </th>
          ))}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index}</th>
            {columns.map((columnTitle) => (
              <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
            ))}
            <th>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(index)}
              >
                DELETE
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
