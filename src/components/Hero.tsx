import { Container, Button } from 'react-bootstrap';
import './Hero.css';
import ButtonLink from './ButtonLink';

function HeroSection() {
  return (
    <header className="hero-section" role="banner">
      <div className="hero-overlay">
        <Container className="d-flex flex-column justify-content-start h-100 text-start">
          <p className="hero-kicker">Flooring contractors serving Edison, NJ &amp; Central Jersey</p>
          <h1 className="hero-heading">
            <span>Timeless Flooring,</span>
            <br />
            <span>Honest Craftsmanship</span>
          </h1>
          <p className="hero-subheading">
            From hardwood refinishing to epoxy garage floors, Vinicius Flooring delivers precision installations, clean worksites,
            and transparent communication.
          </p>

          <Button as={ButtonLink} to="/contact" variant="success" className="hero-cta">
            Request a Free Estimate
          </Button>
        </Container>
      </div>
    </header>
  );
}

export default HeroSection;
