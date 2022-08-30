import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import PRIMARYCOLOR from "../styles/primaryColor";
const NavBar = () => {
  return (
    <Navbar variant="dark" style={{ backgroundColor: PRIMARYCOLOR }}>
      <Container>
        <Link href="/employee/list" passHref>
          <Navbar.Brand>Employee Manager</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          {/* <Link href="/employee/list" passHref>
            <Nav.Link>Employees</Nav.Link>
          </Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
