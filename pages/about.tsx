import React from "react";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../Store/employeeSlice";
import { wrapper } from "../Store/store";
import { fetchSubject } from "../Store/employeeSlice";
import { selectSubject } from "../Store/employeeSlice";
import UserCard from "../Components/Card/Card";

const About: NextPage = () => {
  return <h1>About</h1>;
};

export default About;
