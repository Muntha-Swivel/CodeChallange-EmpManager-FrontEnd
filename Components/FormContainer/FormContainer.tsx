import React from "react";
import styles from "./FormContainer.module.css";
import { IFormContainer } from "./FormContainerInterface";
const FormContainer = ({ children }: IFormContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default FormContainer;
