import React from "react";
import {Container, Form, Navbar } from "react-bootstrap";
import "./Login.css";
import "../components/Navigation.css";
import "../App.css";

export default function Login() {
  return (
    <div className="loginWrapper">
      <LoginNavigation />
      <div className="loginForm">
        <h1 className="loginTitle">Login</h1>
        <Form>
          <div className="container">
            <label for="username">RIT Username</label>
            <input type="text" name="username" required/>
            
            <label for="password">Password</label>
            <input type="password" name="password" required />
          </div>
        </Form>
      </div>
    </div>
  );
}

function LoginNavigation() {
  return (
    <>
      <Navbar className="orangeColor navigationLogin">
        <Container>
          <Navbar.Brand>
            <img alt="" src="./RIT_hor_k.png" width="40%" />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
