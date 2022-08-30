import { createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { makeStore } from "./store";

export const modalSlice = createSlice({
  name: "modal",

  initialState: { modal: false } as any,
  //initialState: {} as any,

  reducers: {
    toggleModal: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.modalSlice,
      };
    },
  },
});

export default modalSlice;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const toggleModal =
  (toggleState: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(
      modalSlice.actions.toggleModal({
        modal: toggleState,
      })
    );
  };

export const modalSelector = () => (state: AppState) =>
  state?.[modalSlice.name];
