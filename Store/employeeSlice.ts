import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { makeStore } from "./store";
import { userAgent } from "next/server";
import axios from "axios";
import { IEmployee } from "../Shared/Interfaces/EmployeeInterface";
import { stat } from "fs";
import { Modal } from "react-bootstrap";

const employee: IEmployee = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "M",
  photo: "",
};

export const emplyeeSlice = createSlice({
  name: "employee",

  initialState: { posts: [], user: employee, modal: false } as any,
  //initialState: {} as any,

  reducers: {
    updatePosts: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeEmployee: (state, action) => {
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
        ...action.payload.employee,
      };
    },
  },
});

export default emplyeeSlice;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const fetchEmployees = (): AppThunk => async (dispatch) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}employee`);
  const json = await res.json();

  dispatch(
    emplyeeSlice.actions.updatePosts({
      posts: json,
    })
  );
};

export const addUser =
  (user: any): AppThunk =>
  async () => {
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
    };
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}employee`,
        newUser
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

export const editUser =
  (user: any): AppThunk =>
  async () => {
    const newUser = {
      empId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}employee/update`,
        newUser
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

export const removeEmployee =
  (id: any): AppThunk =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}employee/removeEmployee/${id}`
      );
      const json = await res.json();

      dispatch(
        emplyeeSlice.actions.removeEmployee({
          posts: json,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

export const setUser =
  (id: any): AppThunk =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}employee/getEmployee/${id}`
      );
      const json = await res.json();
      dispatch(
        emplyeeSlice.actions.setUser({
          user: json,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

export const employeeSelector = () => (state: AppState) =>
  state?.[emplyeeSlice.name];
