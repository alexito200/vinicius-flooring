import { Container, Row, Col, Button } from 'react-bootstrap';
import { Tree, Grid3x3Gap, LayersHalf } from 'react-bootstrap-icons';
import './Services.css';
import ButtonLink from './ButtonLink';

const serviceHighlights = [
  {
    Icon: Tree,
    title: 'Hardwood Floors',
    description: 'Dustless sanding, staining, and custom patterns for Edison, NJ homes.',
    linkText: 'Hardwood Installation',
  },
  {
    Icon: Grid3x3Gap,
    title: 'Tile & Stone',
    description: 'Porcelain, ceramic, and marble layouts for Central Jersey kitchens and baths.',
    linkText: 'Tile Flooring Services',
  },
  {
    Icon: LayersHalf,
    title: 'Epoxy Floors',
    description: 'Flake, quartz, and metallic epoxy for garages and commercial spaces.',
    linkText: 'Epoxy Coating Options',
  },
];

function Services() {
  return (
    <section className="services-section py-5" aria-labelledby="home-services-heading">
      <Container>
        <h2 id="home-services-heading" className="text-center services-heading mb-5">
          Flooring Services for Central Jersey Properties
        </h2>
        <Row className="text-center" as="div">
          {serviceHighlights.map(({ Icon, title, description, linkText }) => (
            <Col md={4} key={title} className="d-flex flex-column align-items-center" as="article">
              <div className="service-icon d-flex align-items-center justify-content-center rounded-circle" aria-hidden="true">
                <Icon size={48} color="#4F6F52" />
              </div>
              <h3 className="service-title mt-3">{title}</h3>
              <p className="service-desc">{description}</p>
              <Button as={ButtonLink} to="/contact" variant="outline-success">
                {linkText}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
