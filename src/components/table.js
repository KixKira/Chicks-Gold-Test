import React from "react";

const Table = () => {
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
            <tr>
              <td>Value</td>
              <td>Value</td>
              <td>Value</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
