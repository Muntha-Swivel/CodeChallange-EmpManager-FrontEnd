import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "react-bootstrap/Button";
import { default as BForm } from "react-bootstrap/Form";
import userSchema from "../../../Validation/UserValidation";
import { addUser } from "../../../Store/employeeSlice";
import { editUser } from "../../../Store/employeeSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../../Store/employeeSlice";
import { AppThunk } from "../../../Store/employeeSlice";
import { IEmployeeForm } from "./EmployeeFormInterface";
import FormContainer from "../../FormContainer/FormContainer";
import { IEmployee } from "../../../Shared/Interfaces/EmployeeInterface";
function EmployeeForm({ edit }: IEmployeeForm) {
  const dispatch: any = useDispatch();
  const content = useSelector(employeeSelector());
  const user = content.user.employee;

  const add = async (user: IEmployee) => {
    dispatch(addUser(user));
  };

  const update = async (user: IEmployee) => {
    dispatch(editUser(user));
  };

  const initialValuesEdit = {
    id: user ? user._id : "",
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    gender: user ? user.gender : "",
  };

  const initialValuesAdd = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  };

  return (
    <FormContainer>
      <h1>Signup</h1>
      <Formik
        initialValues={edit ? initialValuesEdit : initialValuesAdd}
        validationSchema={userSchema}
        onSubmit={(values) => {
          console.log(values);
          if (edit == true) {
            update(values);
          } else {
            add(values);
          }
        }}
        enableReinitialize={true}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            {edit ? (
              <BForm.Group className="mb-3" controlId="BFormBasicEmail">
                <BForm.Label>Employee Id</BForm.Label>
                <BForm.Control
                  name="id"
                  placeholder="Employee Id"
                  onChange={handleChange}
                  value={values.id}
                  disabled={true}
                />
                {errors.id && touched.id ? <div>{errors.id}</div> : null}
              </BForm.Group>
            ) : (
              ""
            )}
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>First Name</BForm.Label>
              <BForm.Control
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Last Name</BForm.Label>
              <BForm.Control
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Email</BForm.Label>
              <BForm.Control
                name="email"
                placeholder="Email"
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Phone</BForm.Label>
              <BForm.Control
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Gender</BForm.Label>
              <BForm.Select
                aria-label="Default select example"
                name="gender"
                onChange={handleChange}
                value={values.gender}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </BForm.Select>
              {errors.gender && touched.gender ? (
                <div>{errors.gender}</div>
              ) : null}
            </BForm.Group>
            <Button type="submit">{edit ? "Update" : "Add User"}</Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default EmployeeForm;
