import React from "react";
import { Card, Col, Container, Row, ListGroup, Button } from "react-bootstrap";
import Slider from "../Components/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "8rem" }}
                src="https://images.opencollective.com/bootstrap/a892851/background.png"
              />
              <Card.Body>
                <Card.Title>Card</Card.Title>
                <Card.Text>Learning Bootstrap</Card.Text>
                <Button variant="primary">Learn more..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "8rem" }}
                src="https://images.opencollective.com/bootstrap/a892851/background.png"
              />
              <Card.Body>
                <Card.Title>Card</Card.Title>
                <Card.Text>Learning Bootstrap</Card.Text>
                <Button variant="primary">Learn more..</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "8rem" }}
                variant="top"
                src="https://images.opencollective.com/bootstrap/a892851/background.png"
              />
              <Card.Body>
                <Card.Title>Card</Card.Title>
                <Card.Text>Learning Bootstrap</Card.Text>
                <Button variant="primary">Learn more..</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
