import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout(props: any) {
  return (
    <Container>
      <Row>{props.children}</Row>
    </Container>
  );
}

export default Layout;
