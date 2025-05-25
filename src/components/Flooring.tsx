import { Row, Col, Card } from 'react-bootstrap';
import './Services.css';

function Flooring() {
  return (
    <>
      <div className="text-center text-light py-2">
        <h1 className="mb-3 text-center">Explore Our Services</h1>
      </div>

      <Row className="g-4 px-3 py-5">
        <Col md={4}>
          <Card className="h-100 text-dark border-0" style={{ backgroundColor: "#F3EDE3" }}>
            <Card.Img variant="top" src="/hardwood.png" />
            <Card.Body>
              <Card.Title className="service-desc">Hardwood Installation & Refinishing</Card.Title>
              <Card.Text>
                <ul className='service-desc'>
                  <li>Custom layout and plank patterns</li>
                  <li>Dustless sanding and refinishing</li>
                  <li>Staining, sealing, and restoration</li>
                  <li>Installation of solid and engineered hardwood</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-dark border-0" style={{ backgroundColor: "#F3EDE3" }}>
            <Card.Img variant="top" src="/tile.png" />
            <Card.Body>
              <Card.Title>Tile Flooring</Card.Title>
              <Card.Text>
                <ul className='service-desc'>
                  <li>Ceramic, porcelain, and natural stone options</li>
                  <li>Bathroom, kitchen, entryway, and whole-home installations</li>
                  <li>Precision cuts and clean grout lines</li>
                  <li>Heated floor options available</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 text-dark border-0" style={{ backgroundColor: "#F3EDE3" }}>
            <Card.Img variant="top" src="/epoxy.png" />
            <Card.Body>
              <Card.Title>Epoxy Coating</Card.Title>
              <Card.Text>
                <ul className='service-desc'>
                  <li>High-gloss or matte finishes</li>
                  <li>Slip-resistant textures available</li>
                  <li>Custom flake blends and color options</li>
                  <li>Chemical- and impact-resistant surfaces</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Flooring;
