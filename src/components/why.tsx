import { Row, Col, Card } from 'react-bootstrap';
import { ShieldCheck, People, ChatDots } from 'react-bootstrap-icons';
import { SparklesIcon } from '@heroicons/react/24/solid';

function Why() {
  return (
    <>
      <Row className="text-center text-light py-5">
        <Col>
          <h2 className="mb-0 text-center fs-4">Why Choose Vinicius Flooring?</h2>
        </Col>
      </Row>

      <Row className="justify-content-center text-center g-4 px-4 pb-5">
        <Col xs={6} md={4} lg={2}>
          <Card className="bg-transparent text-light border-0">
            <Card.Body>
              <div className="mb-2">
                <ShieldCheck className="text-success" size={24} />
              </div>
              <Card.Title className="fs-6 text-dark">Licensed & Insured</Card.Title>
              <Card.Text className="text-dark small">For your peace of mind</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card className="bg-transparent text-light border-0">
            <Card.Body>
              <div className="mb-2">
                <People className="text-success" size={24} />
              </div>
              <Card.Title className="fs-6 text-dark">Family-Run Business</Card.Title>
              <Card.Text className="text-dark small">Honesty and care you can trust</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card className="bg-transparent text-light border-0">
            <Card.Body>
              <div className="mb-2">
                <SparklesIcon className="text-success" style={{ width: "24px", height: "24px"}} />
              </div>
              <Card.Title className="fs-6 text-dark">Clean Worksites</Card.Title>
              <Card.Text className="text-dark small">Respectful, tidy crews</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Card className="bg-transparent text-light border-0">
            <Card.Body>
              <div className="mb-2">
                <ChatDots className="text-success" size={24} />
              </div>
              <Card.Title className="fs-6 text-dark">Clear Communication</Card.Title>
              <Card.Text className="text-dark small">No surprises, just clarity</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Why;
