import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/movieZoneLogo.png";

const Navigation = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img
              alt="logo"
              src={logo}
              width="120"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/allmovies">
                Movies
              </Nav.Link>
              <Nav.Link as={HashLink} to="/">
                Tv Shows
              </Nav.Link>
              <Nav.Link as={HashLink} to="/">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
