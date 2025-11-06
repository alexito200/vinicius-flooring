import { Container, Row, Col } from 'react-bootstrap';
import { MapPinIcon } from '@heroicons/react/24/solid';
import './ServiceAreas.css';

type ServiceArea = {
  name: string;
  description: string;
};

const locations: ServiceArea[] = [
  {
    name: 'Edison, NJ',
    description: 'On-site estimates for hardwood installation, sanding, and epoxy garage floors across Edison neighborhoods.',
  },
  {
    name: 'Highland Park, NJ',
    description: 'Historic home refinishing with dustless sanding and custom stains that respect original character.',
  },
  {
    name: 'East Brunswick, NJ',
    description: 'Kitchen and bath tile upgrades with waterproof underlayment and precision grout work.',
  },
  {
    name: 'New Brunswick, NJ',
    description: 'Student rentals and townhomes refreshed with durable laminate, vinyl plank, and tile solutions.',
  },
  {
    name: 'Piscataway, NJ',
    description: 'Epoxy coatings for garages, warehouses, and athletic facilities with slip-resistant additives.',
  },
  {
    name: 'Metuchen, NJ',
    description: 'Boutique retail and office build-outs featuring statement hardwood and patterned tile.',
  },
  {
    name: 'South Plainfield, NJ',
    description: 'Floor leveling, moisture mitigation, and resilient flooring for busy commercial spaces.',
  },
  {
    name: 'Old Bridge, NJ',
    description: 'Basement finishing with luxury vinyl plank and waterproof tile for long-lasting comfort.',
  },
  {
    name: 'Somerset County, NJ',
    description: 'Custom stair treads, railings, and hardwood refinishing for expansive estate homes.',
  },
];

function ServiceAreas() {
  const columns: ServiceArea[][] = [[], [], []];
  locations.forEach((loc, i) => columns[i % 3].push(loc));

  return (
    <section className="service-areas-section py-5" aria-labelledby="service-areas-heading">
      <Container>
        <h2 id="service-areas-heading" className="service-areas-heading text-center mb-4">
          Proudly Serving Central Jersey Communities
        </h2>
        <p className="text-center mb-5">
          We bring samples, design guidance, and full-service installation to homes and businesses throughout Middlesex,
          Somerset, and Union counties.
        </p>
        <Row>
          {columns.map((col, index) => (
            <Col key={index} md={4} as="div">
              <ul className="location-list">
                {col.map((loc) => (
                  <li key={loc.name}>
                    <MapPinIcon className="icon" aria-hidden="true" />
                    <div>
                      <strong>{loc.name}</strong>
                      <p>{loc.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServiceAreas;
