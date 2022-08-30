import React, { useState } from "react";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../../Store/store";
import { fetchEmployees } from "../../Store/employeeSlice";
import { employeeSelector } from "../../Store/employeeSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EmployeesGrid from "../../Components/Employees/EmployeesGrid/EmployeesGrid";
import EmployeesTable from "../../Components/Employees/EmployeesTable/EmployeesTable";
import IconButton from "../../Components/IconButton/IconButton";
import GridIcon from "../../Components/Icons/Grid";
import ListIcon from "../../Components/Icons/List";
import Modal from "../../Components/Modal/Modal";
import { removeEmployee } from "../../Store/employeeSlice";
const About: NextPage = () => {
  const content = useSelector(employeeSelector());
  const posts = content.posts.employees;
  const [gridView, setGridView] = useState(true);

  const user = content.user.employee;

  const columns = [
    { label: "Photo", accessor: "photo" },
    { label: "Full Name", accessor: "firstName" },
    { label: "Last Name", accessor: "lastName" },
    { label: "Email", accessor: "email" },
    { label: "Phone", accessor: "phone" },
    { label: "Gender", accessor: "gender" },
  ];

  const dispatch = useDispatch();
  const icon = gridView ? <GridIcon /> : <ListIcon />;

  const deleteEmployee = () => {
    dispatch(removeEmployee(user._id));
  };
  return (
    <>
      <Row>
        <Modal
          confirmClick={deleteEmployee}
          header="Remove Employee"
          message="Are your sure you want to remove this employee?"
        />
        <Col md={3}>
          <IconButton
            icon={icon}
            btnStyle={{ backgroundColor: "blue" }}
            onClick={() => setGridView(!gridView)}
          />
          {/* <Button variant="primary">Add Employee</Button> */}
        </Col>
      </Row>

      <Row>
        {gridView ? (
          <EmployeesGrid data={posts} />
        ) : (
          <EmployeesTable columns={columns} data={posts} />
        )}
      </Row>
    </>
  );
};

export default About;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchEmployees());

    console.log("State on server", store.getState());

    return {
      props: {},
    };
  }
);
