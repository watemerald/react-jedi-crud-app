import React from "react";
import Button from "./Button";
import { nanoid } from "nanoid";

function Table({ columns, data, tableDescriptor, onDelete }) {
  if (!data.length) {
    return <h2>There is no data for {tableDescriptor} page</h2>;
  }

  const createKey = (value) => {
    return value + nanoid();
  };

  const renderCell = (item, column) =>
    column.content ? column?.content(item) : item[column.colName];

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnt) => (
            <th key={createKey(columnt.colName)} scope="col">
              {columnt.colName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={createKey(item.name)}>
            <th scope="row">{++index}</th>
            {columns.map((column) => {
              return (
                <td key={createKey(item.name)}>{renderCell(item, column)}</td>
              );
            })}
            <td>
              <Button
                onClick={() => onDelete(item.id)}
                classes="btn btn-danger"
                label="Delete"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
