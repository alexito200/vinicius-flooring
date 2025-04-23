import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';

function Services() {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center services-heading mb-5">Our Services</h2>
        <Row className="text-center">
          <Col md={4}>
            <img src="/hardwood-icon.png" alt="Hardwood" className="service-icon" />
            <h4 className="service-title">Hardwood</h4>
            <p className="service-desc">Lorem ipsum dolor sit amet.<br />Consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src="/tile-icon.png" alt="Tile" className="service-icon" />
            <h4 className="service-title">Tile</h4>
            <p className="service-desc">Lorem ipsum dolor sit amet.<br />Consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src="/epoxy-icon.png" alt="Epoxy" className="service-icon" />
            <h4 className="service-title">Epoxy</h4>
            <p className="service-desc">Lorem ipsum dolor sit amet.<br />Consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
