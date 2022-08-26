import { IColumn } from "../../../Shared/Interfaces/TableInterface";
import { IEmployee } from "../../../Shared/Interfaces/EmployeeInterface";
export interface ITableBody {
  tableData: IEmployee[];
  columns: IColumn[];
}
