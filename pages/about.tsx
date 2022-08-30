import React from "react";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { employeeSelector } from "../Store/employeeSlice";

const About: NextPage = () => {
  const content = useSelector(employeeSelector());
  const user = content.user.employee;
  console.log(user);

  return <h1>About</h1>;
};

export default About;
