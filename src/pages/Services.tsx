import { Container, Row, Col, Card, Modal, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import ContactSection from '../components/ContactSection';
import Flooring from '../components/Flooring';
import Why from '../components/why';

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    '/hardwood-kitchen.png',
    '/tile-bathroom.png',
    '/epoxy-garage.png'
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  return (
    <>
    <Container className="mt-4">

    <Flooring />
    <Why />

      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Service Area</h2>
          <p className="text-center">
            Proudly serving northern and central New Jersey, including Bergen, Essex, Union, and surrounding counties.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center">Our Gallery</h2>
          <Row className="justify-content-center">
            {galleryImages.map((src, idx) => (
              <Col key={idx} xs={6} md={4} className="mb-3">
                <Card onClick={() => handleImageClick(idx)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={src} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
            {galleryImages.map((src, idx) => (
              <Carousel.Item key={idx}>
                <img className="d-block w-100" src={src} alt={`Slide ${idx}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>

    </Container>
      <ContactSection />
      </>
  );
}

export default Services;