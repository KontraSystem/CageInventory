import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CgLogIn } from "@react-icons/all-files/cg/CgLogIn";
import "./Navigation.css";
import "../App.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="orangeColor max-w" expand="lg">
          <Container>
            <Nav.Link>
              <Navbar.Brand className="navbarBrand">RIT</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/active">Active</Nav.Link>
                <Nav.Link href="/courses">Courses</Nav.Link>
                <Nav.Link href="/inventory">Courses</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/" className="navbarLogout">
                  <CgLogIn className="mx-2" size="1.5rem" />
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
