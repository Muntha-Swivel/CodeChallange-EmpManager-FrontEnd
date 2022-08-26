import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "react-bootstrap/Button";
import { default as BForm } from "react-bootstrap/Form";
import userSchema from "../../../Validation/UserValidation";
import { addUser } from "../../../Store/employeeSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { employeeSelector } from "../../../Store/employeeSlice";
function AddUser(props) {
  const dispatch = useDispatch();
  const content = useSelector(employeeSelector());
  const user = content.user;

  const { firstName, lastName, email, phone, gender } = user;

  const add = async (user) => {
    dispatch(addUser(user));
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          gender: gender,
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          add(values);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>First Name</BForm.Label>
              <BForm.Control
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
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
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Phone</BForm.Label>
              <BForm.Control
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
              />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </BForm.Group>
            <BForm.Group className="mb-3" controlId="BFormBasicEmail">
              <BForm.Label>Gender</BForm.Label>
              <BForm.Select
                aria-label="Default select example"
                name="gender"
                onChange={handleChange}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </BForm.Select>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </BForm.Group>
            <Button type="submit">Add user </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
