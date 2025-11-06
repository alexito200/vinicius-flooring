import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavigationBar.css";
import ButtonLink from "./ButtonLink";

function NavigationBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
            loading="lazy"
            className="d-inline-block align-top"
          />
          <span style={{ color: "#5B3A29", fontWeight: "bold", fontSize: "32px" }}>
            Vinicius Flooring
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/plans", label: "Plans" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={item.path}
                className={`nav-link-custom ${isActive(item.path) ? "active-tab" : ""}`}
              >
                {item.label}
              </Nav.Link>
            ))}

            <Button
              as={ButtonLink}
              to="/contact"
              variant="success"
              className="ms-3"
              style={{
                backgroundColor: "#A3B18A",
                border: "none",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Get a Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
