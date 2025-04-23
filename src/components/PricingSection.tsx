import { Container, Row, Col, Button } from 'react-bootstrap';
import './PricingSection.css';

function PricingSection() {
  return (
    <section className="pricing-section py-5">
      <Container>
        <h2 className="text-center pricing-heading mb-5">Our Pricing Plans</h2>
        <Row className="g-4">
          {/* Budget Plan */}
          <Col md={4}>
            <div className="pricing-card">
              <h4 className="plan-title">Budget</h4>
              <p className="plan-price">Starting at $4.99/sq ft</p>
              <ul className="plan-features">
                <li>Laminate or basic tile</li>
                <li>Installation only</li>
                <li>No disposal or trim work</li>
                <li>Basic layout</li>
              </ul>
              <Button variant="outline-success" className="plan-button">Request Quote</Button>
            </div>
          </Col>

          {/* Standard Plan */}
          <Col md={4}>
            <div className="pricing-card popular">
              <div className="badge">Most Popular</div>
              <h4 className="plan-title">Standard</h4>
              <p className="plan-price">Starting at $7.99/sq ft</p>
              <ul className="plan-features">
                <li>Solid hardwood or mid-tier tile</li>
                <li>Old floor removal & disposal</li>
                <li>Trim finishing</li>
                <li>1-year warranty</li>
              </ul>
              <Button variant="success" className="plan-button">Request Quote</Button>
            </div>
          </Col>

          {/* Premium Plan */}
          <Col md={4}>
            <div className="pricing-card">
              <h4 className="plan-title">Premium</h4>
              <p className="plan-price">Custom pricing</p>
              <ul className="plan-features">
                <li>Luxury materials & patterns</li>
                <li>Subfloor leveling & moisture barrier</li>
                <li>Furniture moving</li>
                <li>5-year warranty</li>
              </ul>
              <Button variant="outline-success" className="plan-button">Schedule Consultation</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PricingSection;
