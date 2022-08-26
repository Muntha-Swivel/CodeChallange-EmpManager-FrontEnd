import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { wrapper } from "../Store/store";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../Store/employeeSlice";
import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { employeeSelector } from "../Store/employeeSlice";
import { Formik, Form, Field } from "formik";
import AddUser from "../Components/Form/AddUserForm/AddUser";

const Home: NextPage = (props) => {
  const todo = useSelector(employeeSelector());
  return <AddUser />;
};

export default Home;

// export async function getStaticProps() {
//   const res = await axios.get("http://192.168.1.26:5000");
//   let data = res.data.users;

//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//     revalidate: 5,
//   };

// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/1`
//     );
//     const { data } = await response.json();`
//     console.log(data);
//     store.dispatch(updateName({ name: "hello" }));
//   }
// );

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const fetchSubject =
//   (id: any): AppThunk =>
//   async (dispatch) => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/1`
//     );
//     const { data } = await response.json();
//     dispatch(updateName({ name: data.title }));
//   };
