import { addUser } from "../../../Store/employeeSlice";
import { editUser } from "../../../Store/employeeSlice";
import { IEmployee } from "../../../Shared/Interfaces/EmployeeInterface";

export const add = async (user: IEmployee, dispatch: any) => {
  dispatch(addUser(user));
};

export const update = async (user: IEmployee, dispatch: any) => {
  dispatch(editUser(user));
};
