import { Container, Row, Col, Button } from 'react-bootstrap';
import '../components/PricingSection.css';
import { CheckCircle } from 'react-bootstrap-icons';

function PlansPage() {
  return (
    <section className="pricing-section py-5">
      <Container>
        <h2 className="text-center pricing-heading mb-5">Flooring Plans</h2>
        <p className="text-center text-muted mb-4">
          Whether you're on a tight budget or looking for a high-end, custom experience, we offer a plan that fits your goals.
        </p>

        <Row className="g-4">
          {/* Budget Plan */}
          <Col md={4}>
            <div className="pricing-card">
              <h4 className="plan-title">Budget</h4>
              <p className="plan-price">Starting at $4.99/sq ft</p>
              <ul className="plan-features">
                <li><CheckCircle className="text-success me-2" /> Laminate or basic tile</li>
                <li><CheckCircle className="text-success me-2" /> Installation only</li>
                <li><CheckCircle className="text-success me-2" /> No disposal or trim work</li>
                <li><CheckCircle className="text-success me-2" /> Basic layout</li>
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
                <li><CheckCircle className="text-success me-2" /> Solid hardwood or mid-tier tile</li>
                <li><CheckCircle className="text-success me-2" /> Old floor removal & disposal</li>
                <li><CheckCircle className="text-success me-2" /> Trim finishing</li>
                <li><CheckCircle className="text-success me-2" /> 1-year warranty</li>
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
                <li><CheckCircle className="text-success me-2" /> Luxury materials & patterns</li>
                <li><CheckCircle className="text-success me-2" /> Subfloor leveling & moisture barrier</li>
                <li><CheckCircle className="text-success me-2" /> Furniture moving</li>
                <li><CheckCircle className="text-success me-2" /> 5-year warranty</li>
              </ul>
              <Button variant="outline-success" className="plan-button">Schedule Consultation</Button>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h5 className="text-muted">Need help deciding?</h5>
            <Button variant="outline-dark" href="/contact">Speak with a Flooring Specialist</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PlansPage;
