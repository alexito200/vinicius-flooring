import { Container, Row, Col, Button } from 'react-bootstrap';
import '../components/PricingSection.css';
import { CheckCircle } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet-async';
import ButtonLink from '../components/ButtonLink';
import { SITE_URL } from '../seo/siteMetadata';

function PlansPage() {
  return (
    <main>
      <Helmet>
        <title>Flooring Service Plans for Central Jersey Homes | Vinicius Flooring</title>
        <meta
          name="description"
          content="Compare hardwood, tile, and epoxy flooring service plans from Vinicius Flooring. Financing-friendly options for Edison, NJ homeowners and commercial spaces."
        />
        <link rel="canonical" href={`${SITE_URL}/plans`} />
        <meta property="og:title" content="Flooring Service Plans for Central Jersey Homes" />
        <meta
          property="og:description"
          content="Choose between budget, standard, and premium flooring plans tailored to Edison and Central Jersey projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/plans`} />
      </Helmet>
      <section className="pricing-section py-5">
        <Container>
          <h1 className="text-center pricing-heading mb-5">Flooring Plans</h1>
          <p className="text-center text-muted mb-4">
            Whether you're on a tight budget or looking for a high-end, custom experience, we offer a plan that fits your goals in Edison, New Brunswick, and the greater Central Jersey area.
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
              <Button as={ButtonLink} to="/contact" variant="outline-success" className="plan-button">
                Request Quote
              </Button>
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
              <Button as={ButtonLink} to="/contact" variant="success" className="plan-button">
                Request Quote
              </Button>
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
              <Button as={ButtonLink} to="/contact" variant="outline-success" className="plan-button">
                Schedule Consultation
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h5 className="text-muted">Need help deciding?</h5>
            <Button as={ButtonLink} to="/contact" variant="outline-dark">
              Speak with a Flooring Specialist
            </Button>
          </Col>
        </Row>
        </Container>
      </section>
    </main>
  );
}

export default PlansPage;
