import { useState } from "react";
import { Nav, Button, Navbar, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyles = styled.div`
  a,
  .navbar-brand,
  navbar-nav,
  .nav-link {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

const Btn = styled.button`
  button {
    border-radius: 10px;
    margin-right: 5px;
    border: none;
  }
`;

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <LinkStyles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" style={{ marginRight: "10px" }}>
                  Home
                </Link>
                <Link to="/users" style={{ marginRight: "10px" }}>
                  Users
                </Link>
                <Link to="/about" style={{ marginRight: "10px" }}>
                  About
                </Link>
              </Nav>
              <Nav>
                <Button className="mr-2" onClick={handleShow}>
                  Log In
                </Button>
                <Button>Log Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </LinkStyles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="user@gmail.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="user123" />
              <Form.Text className="text-muted">Keep in mind.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Remember" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
