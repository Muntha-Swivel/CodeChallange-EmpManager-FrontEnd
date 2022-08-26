import React from "react";
import Table from "react-bootstrap/Table";
import TableHead from "../../Table/TableHead/TableHead";
import TableBody from "../../Table/TableBody/TableBody";
import { ITable } from "../../../Shared/Interfaces/TableInterface";

function EmployeesTable({ data, columns }: ITable) {
  return (
    <Table striped bordered hover>
      <TableHead columns={columns} />
      <TableBody tableData={data} columns={columns} />
    </Table>
  );
}

export default EmployeesTable;
