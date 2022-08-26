import React from "react";
import {ITableBody} from './TableBodyInterface'

function TableBody({ tableData, columns }: ITableBody) {
  return (
    <tbody>
      {tableData.map((tableData) => (
        <tr>
          {columns.map(({ accessor }) => {
            const tData = tableData[accessor] ? tableData[accessor] : "__";
            return <td>{tData}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

//tabledata obj []
//accessor
