import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { setUser } from "../../../Store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { employeeSelector } from "../../../Store/employeeSlice";
import { wrapper } from "../../../Store/store";
import EmployeeForm from "../../../Components/Form/AddUserForm/EmployeeForm";

const EditEmployee: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  return <EmployeeForm edit={true} />;
};

export default EditEmployee;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;

    await store.dispatch(setUser(id));

    return {
      props: {},
    };
  }
);
