import React from "react";
import { IColumns } from "../../../Shared/Interfaces/TableInterface";
function TableHead({ columns }: IColumns) {
  return (
    <thead>
      <tr>
        {columns?.map((header) => (
          <th key={header.accessor}>{header.label}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
