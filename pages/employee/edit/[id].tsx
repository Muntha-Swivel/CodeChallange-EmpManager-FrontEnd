import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { setUser } from "../../../Store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { employeeSelector } from "../../../Store/employeeSlice";
import { wrapper } from "../../../Store/store";

const EditEmployee: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  return <div>Employee id {id}</div>;
};

export default EditEmployee;

// export const getServerSideProps = (context) => {
//   const id = context.params.id;

//   console.log(id);

//   return {
//     props: {
//       id: "hello",
//     },
//   };
// };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log(context.params.id);
    const id = context.params.id;

    await store.dispatch(setUser(id));
  }
);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// const user = {
//   firstName: "Muntha",
//   lastName: "Rodriguez",
//   email: "Darrin_Rippin@gmail.com",
//   number: "+94771277218",
//   gender: "M",
//   id: "1",
//   photo: "https://randomuser.me/api/portraits/men/92.jpg",
// };
