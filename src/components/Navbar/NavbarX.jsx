import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarX = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          borderBottom: "1.5px solid white",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">JITHack 2022</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Stories
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Stories
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sponsors
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                FAQ
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarX;
