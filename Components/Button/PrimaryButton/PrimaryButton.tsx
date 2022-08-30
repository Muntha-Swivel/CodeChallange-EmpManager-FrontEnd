import Button from "react-bootstrap/Button";
import PRIMARYCOLOR from "../../../styles/primaryColor";
import { IPrimaryButton } from "./PrimaryButtonInterface";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ solid, onClick, text }: IPrimaryButton) => {
  return (
    <Button
      variant="light"
      onClick={onClick}
      className={solid ? styles.whiteText : styles.blackText}
      style={
        solid
          ? { backgroundColor: PRIMARYCOLOR }
          : { borderColor: PRIMARYCOLOR }
      }
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
//() => router.push("./add")
