import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import employeeSlice from "./employeeSlice";
import modalSlice from "./modalSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: true,
  });


export const test = makeStore();
export const wrapper = createWrapper(makeStore);

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
