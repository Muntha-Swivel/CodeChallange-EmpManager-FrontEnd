import React from "react";
import EmployeeForm from "../../Components/Form/AddUserForm/EmployeeForm";
import axios from "axios";
import FormContainer from "../../Components/FormContainer/FormContainer";

function add() {
  return (
    <>
      <EmployeeForm edit={false} />
    </>
  );
}

export default add;
