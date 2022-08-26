import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { makeStore } from "./store";
import { userAgent } from "next/server";
import axios from "axios";
import { IEmployee } from "../Shared/Interfaces/EmployeeInterface";
import { stat } from "fs";

const employee: IEmployee = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "M",
  photo: "",
};

export const emplyeeSlice = createSlice({
  name: "subject",

  initialState: { title: "", posts: [], user: employee } as any,
  //initialState: {} as any,

  reducers: {
    updateName: (state, action) => {
      return action.payload;
    },
    updatePosts: (state, action) => {
      return action.payload;
    },
    setUser: (state, action) => {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { updateName } = emplyeeSlice.actions;
export default emplyeeSlice;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const fetchEmployees =
  (name: any): AppThunk =>
  async (dispatch) => {
    const res = await fetch("http://192.168.1.26:5000/employee");
    const json = await res.json();

    dispatch(
      emplyeeSlice.actions.updatePosts({
        posts: json,
      })
    );
  };

export const addUser =
  (user: any): AppThunk =>
  async (dispatch) => {
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
        "http://192.168.1.26:5000/employee",
        newUser
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

export const setUser =
  (id: any): AppThunk =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `http://192.168.1.26:5000/employee/getEmployee/${id}`
      );
      dispatch(
        emplyeeSlice.actions.setUser({
          user: res.data,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

export const employeeSelector = () => (state: AppState) =>
  state?.[emplyeeSlice.name];

// const newPost = {
//     userId: 1,
//     title: 'A new post',
//     body: 'This is the body of the new post'
// };

// const sendPostRequest = async () => {
//     try {
//         const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
