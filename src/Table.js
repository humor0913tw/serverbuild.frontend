import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Brand</th>
          <th scope="col">Hostname</th>
          <th scope="col">Model</th>
          <th scope="col">Serial Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.svr_id}>
            <th scope="row">{item.svr_id}</th>
            <td>{item.brand}</td>
            <td>{item.hostname}</td>
            <td>{item.model}</td>
            <td>{item.serial_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
