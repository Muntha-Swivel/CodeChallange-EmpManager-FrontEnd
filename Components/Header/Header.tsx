import IconButton from "../IconButton/IconButton";
import GridIcon from "../Icons/Grid";
import ListIcon from "../Icons/List";
import Button from "react-bootstrap/Button";
import styles from "./Header.module.css";
import { IHeader } from "./HeaderInterface";
import { useRouter } from "next/router";
import PRIMARYCOLOR from "../../styles/primaryColor";
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";

const Header = ({ grid, onClick }: IHeader) => {
  const router = useRouter();

  const icon = grid ? <ListIcon /> : <GridIcon />;
  return (
    <div className={styles.container}>
      <IconButton
        icon={icon}
        btnStyle={{ backgroundColor: PRIMARYCOLOR }}
        onClick={onClick}
      />
      <PrimaryButton
        solid={true}
        text="Add Employees"
        onClick={() => router.push("./add")}
      />
      {/* <Button variant="primary" onClick={() => router.push("./add")} >
        Add Employee
      </Button> */}
    </div>
  );
};

export default Header;
