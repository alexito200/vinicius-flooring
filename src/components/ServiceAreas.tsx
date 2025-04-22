import { Container, Row, Col } from 'react-bootstrap';
import { MapPinIcon } from '@heroicons/react/24/solid';
import './ServiceAreas.css';

const locations = [
  "Blackwells Mills", "Browntown", "Clyde", "East Brunswick",
  "East Franklin", "Edison", "Franklin Township", "Highland Park",
  "Manville", "Metuchen", "Millstone", "Milltown", "North Brunswick",
  "Old Bridge", "Pleasant Plains", "Piscataway", "Sayreville",
  "South Bound Brook", "South River", "Spotswood"
];

function ServiceAreas() {
    const columns: string[][] = [[], [], []];
  locations.forEach((loc, i) => columns[i % 3].push(loc));

  return (
    <section className="service-areas-section py-5">
      <Container>
        <h2 className="service-areas-heading text-center mb-4">
          Proudly Serving the Central Jersey Area, Including:
        </h2>
        <Row>
          {columns.map((col, index) => (
            <Col key={index} md={4}>
              <ul className="location-list">
                {col.map((loc, i) => (
                  <li key={i}>
                    <MapPinIcon className="icon" />
                    {loc}
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
