import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subject from "./employeeSlice";
import { createWrapper } from "next-redux-wrapper";
import subjectSlice from "./employeeSlice";

// const combinedReducers = combineReducers({
//   todoReducer,
// });

// export const makeStore: any = () => {
//   configureStore({
//     reducer: combinedReducers,
//   });
// };

// reducer: {

//     [subjectSlice.name]: subjectSlice.reducer,

export const makeStore = () =>
  configureStore({
    reducer: {
      [subjectSlice.name]: subjectSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
