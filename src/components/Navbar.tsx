import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#F3EDE3" }}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src="/favicon_64x64.png"
            alt="Vinicius Flooring Logo"
            width="64"
            height="64"
            className="d-inline-block align-top"
          />
          <span style={{ color: "#5B3A29", fontWeight: "bold", fontSize: "32px" }}>
            Vinicius Flooring
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" style={{ color: "#5B3A29" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ color: "#5B3A29" }}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/plans" style={{ color: "#5B3A29" }}>
              Plans
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#5B3A29" }}>
              Contact
            </Nav.Link>

            <Button
                variant="success"
                className="ms-3"
                style={{
                  backgroundColor: "#A3B18A",
                  border: "none",
                  color: "#fff",
                  fontWeight: "600",
                }}
            >
                <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
                    Get a Quote
                </Link>
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
