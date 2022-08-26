import { IEmployee } from "../../Shared/Interfaces/EmployeeInterface";
export interface IColumn {
  label: string;
  accessor: string;
}

export interface IColumns {
  columns: IColumn[];
}

export interface ITable extends IColumns {
  data: IEmployee[];
}
