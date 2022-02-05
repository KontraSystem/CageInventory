import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import "./Login.css";
import "../components/Navigation.css";
import "../App.css"

export default function Login() {
  return (
    <div className="loginWrapper">
      <LoginNavigation />
      <Form className="formStyle">
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">RIT Username</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="formLabel">Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <div className="loginButton">
          <Button className="orangeColor border orangeColorHover" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

function LoginNavigation() {
  return (
    <>
      <Navbar className="orangeColor navigationLogin">
        <Container>
          <Navbar.Brand>
            <img alt="" src="./RIT_hor_k.png" width="35%" />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
