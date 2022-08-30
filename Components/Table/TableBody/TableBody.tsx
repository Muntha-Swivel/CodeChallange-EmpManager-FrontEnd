import React, { Key } from "react";
import { ITableBody } from "./TableBodyInterface";
import { IEmployee } from "../../../Shared/Interfaces/EmployeeInterface";

function TableBody({ tableData, columns }: ITableBody) {
  return (
    <tbody>
      {tableData?.map((tableData) => (
        <tr key={tableData._id}>
          {columns.map(({ accessor }) => {
            const tData = tableData[accessor as keyof IEmployee]
              ? tableData[accessor as keyof IEmployee]
              : "__";
            return <td key={tableData._id}>{tData}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
