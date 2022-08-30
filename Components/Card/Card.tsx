import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import IconButton from "../IconButton/IconButton";
import AddUserIcon from "../Icons/AddUser";
import DeleteIcon from "../Icons/Delete";
import styles from "./Card.module.css";
import { IEmployee } from "../../Shared/Interfaces/EmployeeInterface";
import Link from "next/link";

function UserCard({
  firstName,
  lastName,
  email,
  phone,
  gender,
  photo,
  _id,
  onClickDelete,
}: IEmployee) {
  const deleteIcon = <DeleteIcon />;
  const addUserIcon = <AddUserIcon />;
  return (
    <Col>
      <Card className={styles.cardMain}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{firstName}</Card.Title>
          <Card.Text>{_id}</Card.Text>
          <div className={styles.btnContainer}>
            <Link href={`edit/${_id}`} passHref>
              <IconButton
                icon={addUserIcon}
                btnStyle={{ backgroundColor: "red" }}
              />
            </Link>
          </div>
          <div className={styles.btnContainer} style={{ marginRight: 5 }}>
            <IconButton
              icon={deleteIcon}
              btnStyle={{ backgroundColor: "aqua" }}
              onClick={onClickDelete}
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
