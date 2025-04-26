import { Container } from 'react-bootstrap';
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

          <Link to="/contact" className="cta-link">
            Get a Quote
          </Link>

        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
