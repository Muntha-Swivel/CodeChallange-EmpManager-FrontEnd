import { useDispatch } from "react-redux";
import { toggleModal } from "../../Store/modalSlice";
import { setUser } from "../../Store/employeeSlice";
import { IEmployee } from "../../Shared/Interfaces/EmployeeInterface";
import { wrapper } from "../../Store/store";
import { test } from "../../Store/store";
import { AppThunk } from "../../Store/modalSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
const removeEmployee = async (employee: IEmployee, dispatch) => {
  dispatch(toggleModal(true));
  dispatch(setUser(employee._id));
};

export { removeEmployee };

// export const removeEmployee = wrapper.useWrappedStore((store) => async () => {
//   await store.dispatch(toggleModal(true));

//   console.log("State on server", store.getState());
// });
