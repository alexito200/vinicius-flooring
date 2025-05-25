import { Container, Button } from 'react-bootstrap';
import './Hero.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <Container className="d-flex flex-column justify-content-start h-100 text-start">
        <h1 className="hero-heading">
          <span>Timeless Flooring,</span><br />
          <span>Honest Craftsmanship</span>
        </h1>

            <Button
              variant="success"
              className="ms-3"
              style={{
                backgroundColor: "#A3B18A",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                maxWidth: "200px",
              }}
            >
              <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
                Get a Quote
              </Link>
            </Button>

        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
