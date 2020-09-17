import React from "react";

const Table = ({first, second, third, fourth}) => {
  return (
    <table style={{ width: "100%", textAlign: "center" }}>
      <tr>
        <th>{first}</th>
        <th>{second}</th>
        <th>{third}</th>
        <th>{fourth}</th>
      </tr>
      <tr>
        <td>1</td>
        <td>demo patient</td>
        <td>M / 42</td>
        <td>07-09-20</td>
      </tr>
    </table>
  );
};

export default Table;
