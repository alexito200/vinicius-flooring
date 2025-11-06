import { Row, Col, Card, Button } from 'react-bootstrap';
import './Services.css';
import ButtonLink from './ButtonLink';

const serviceCards = [
  {
    title: 'Hardwood Installation & Refinishing',
    image: 'hardwood-kitchen.png',
    alt: 'Custom hardwood flooring installation with walnut planks in Edison, NJ',
    width: 900,
    height: 600,
    bullets: [
      'Custom layout and plank patterns',
      'Dustless sanding and refinishing',
      'Staining, sealing, and restoration',
      'Solid and engineered hardwood upgrades',
    ],
  },
  {
    title: 'Tile Flooring',
    image: 'tile-bathroom.png',
    alt: 'Porcelain tile flooring in a renovated East Brunswick, NJ kitchen',
    width: 900,
    height: 600,
    bullets: [
      'Ceramic, porcelain, and natural stone options',
      'Bathroom, kitchen, and whole-home installations',
      'Precision cuts and clean grout lines',
      'Radiant-heated floor options',
    ],
  },
  {
    title: 'Epoxy Coating',
    image: 'epoxy-garage.png',
    alt: 'Epoxy garage floor coating with decorative flakes in Piscataway, NJ',
    width: 900,
    height: 600,
    bullets: [
      'High-gloss or matte finishes',
      'Slip-resistant textures available',
      'Custom flake blends and color options',
      'Chemical- and impact-resistant surfaces',
    ],
  },
];

function Flooring() {
  return (
    <section aria-labelledby="services-heading">
      <div className="text-center text-light py-2">
        <h1 id="services-heading" className="mb-3 text-center">
          Explore Our Services
        </h1>
      </div>

      <Row className="g-4 px-3 py-5" as="div">
        {serviceCards.map((card) => (
          <Col md={4} key={card.title} as="article">
            <Card className="h-100 text-dark border-0" style={{ backgroundColor: '#F3EDE3' }}>
              <Card.Img
                variant="top"
                src={card.image}
                alt={card.alt}
                loading="lazy"
                width={card.width}
                height={card.height}
              />
              <Card.Body>
                <Card.Title className="service-desc">{card.title}</Card.Title>
                <Card.Text as="div">
                  <ul className="service-desc">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button as={ButtonLink} to="/contact" variant="success">
                  Book a Central Jersey Estimate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Flooring;
