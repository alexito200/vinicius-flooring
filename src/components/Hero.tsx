import { Container } from 'react-bootstrap';
import './Hero.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <Container className="d-flex flex-column justify-content-center h-100 text-start">
          <h1 className="hero-heading">Welcome to Vinicius Flooring</h1>
          <Link to="/contact" className="cta-link">
            Get a Quote
          </Link>

        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
