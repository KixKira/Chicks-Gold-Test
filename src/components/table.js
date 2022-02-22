import React from "react";

const Table = ({ rowsTable }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Bucket X</th>
              <th scope="col">Bucket Y</th>
              <th scope="col">Explanation</th>
            </tr>
          </thead>
          <tbody>
            {rowsTable.length > 0 &&
              rowsTable.map((row, key) => (
                <tr key={key}>
                  <td>{row.X}</td>
                  <td>{row.Y}</td>
                  <td>{row.instrucction}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
