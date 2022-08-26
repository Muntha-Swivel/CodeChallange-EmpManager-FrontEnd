import React from "react";
import styles from "./IconButton.module.css";
import AddUserIcon from "../Icons/AddUser";
import DeleteIcon from "../Icons/Delete";
import { IIconButton } from "./IconButtonInterface";
export default function IconButton({ icon, btnStyle, onClick }: IIconButton) {
  return (
    <>
      <button onClick={onClick} className={styles.btn} style={btnStyle}>
        {icon}
      </button>
    </>
  );
}
