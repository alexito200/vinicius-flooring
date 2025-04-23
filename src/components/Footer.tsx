import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer py-5">
      <Container>
        <Row>
          {/* Logo & Tagline */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand">
              <img src="/favicon_64x64.png" alt="Vinicius Flooring" className="footer-logo" />
              <h5 className="brand-name">Vinicius Flooring</h5>
              <p className="tagline">Timeless Flooring, Honest Craftsmanship</p>
            </div>
          </Col>

          {/* Navigation */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h6 className="footer-heading">Contact</h6>
            <div className="footer-contact">
              <div className="contact-item">
                <PhoneIcon className="icon" />
                <span>(908) 555-1234</span>
              </div>
              <div className="contact-item">
                <EnvelopeIcon className="icon" />
                <span>info@viniciusflooring.com</span>
              </div>
              <p className="location-note">Serving Central NJ and surrounding areas</p>
            </div>
          </Col>
        </Row>

        <hr />

        <p className="text-center copyright mt-4">
          © {new Date().getFullYear()} Vinicius Flooring. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
