import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CgLogIn } from "@react-icons/all-files/cg/CgLogIn";
import "./Navigation.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar className="orangeColor" expand="lg">
          <Container>
            <Nav.Link>
              <Navbar.Brand className="navbarBrand">RIT</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link className="navbarLogin">
                <CgLogIn className="mx-2" size="1.5rem" />
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
