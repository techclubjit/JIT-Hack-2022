import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarX = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="gray" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="font-face-gm" style={{ fontSize: "1.5rem" }}>
              JITHack
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={1} href="#about">
                About
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Stories
              </Nav.Link> */}
              <Nav.Link eventKey={3} href="#sponsor">
                Sponsors
              </Nav.Link>
              <Nav.Link eventKey={4} href="#faqs">
                FAQ
              </Nav.Link>
              {/* <Nav.Link eventKey={5} href="#memes3">
                Team
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarX;
