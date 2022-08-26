import React from "react";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../Store/employeeSlice";
import { wrapper } from "../../Store/store";
import { fetchEmployees } from "../../Store/employeeSlice";
import { employeeSelector } from "../../Store/employeeSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmployeesGrid from "../../Components/Employees/EmployeesGrid/EmployeesGrid";
import EmployeesTable from "../../Components/Employees/EmployeesTable/EmployeesTable";

const About: NextPage = () => {
  const content = useSelector(employeeSelector());
  const posts = content.posts.employees;

  const columns = [
    { label: "Photo", accessor: "photo" },
    { label: "Full Name", accessor: "firstName" },
    { label: "Last Name", accessor: "lastName" },
    { label: "Email", accessor: "email" },
    { label: "Phone", accessor: "phone" },
    { label: "Gender", accessor: "gender" },
  ];

  const dispatch = useDispatch();
  const test = () => {
    dispatch(updateName({ name: "Munnthasir" }));
  };
  return (
    <>
      <Row>
        <Col md={3}>
          <Button variant="primary">Add Employee</Button>
        </Col>
      </Row>

      <Row>
        <EmployeesGrid data={posts} />
      </Row>
      <Row>
        <EmployeesTable columns={columns} data={posts} />
      </Row>
    </>
  );
};

export default About;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     ({ req, res, ...etc }) => {
//       console.log(
//         "2. Page.getServerSideProps uses the store to dispatch things"
//       );
//       store.dispatch(updateName({ name: "dude" }));
//     }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchEmployees());

    console.log("State on server", store.getState());
  }
);
