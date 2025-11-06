import { Container, Row, Col, Card, Modal, Carousel, Button } from 'react-bootstrap';
import { useState } from 'react';
import ContactSection from '../components/ContactSection';
import Flooring from '../components/Flooring';
import Why from '../components/why';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../seo/siteMetadata';
import ButtonLink from '../components/ButtonLink';

const galleryImages = [
  {
    src: 'hardwood-kitchen.png',
    alt: 'Wide plank hardwood flooring installed in an Edison, NJ living room',
    width: 1200,
    height: 800,
  },
  {
    src: 'tile-bathroom.png',
    alt: 'Porcelain tile bathroom renovation in New Brunswick, NJ',
    width: 1200,
    height: 800,
  },
  {
    src: 'epoxy-garage.png',
    alt: 'Epoxy garage floor coating with custom flakes in Piscataway, NJ',
    width: 1200,
    height: 800,
  },
];

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  return (
    <main>
      <Helmet>
        <title>Flooring Installation &amp; Refinishing in Edison, NJ | Vinicius Flooring</title>
        <meta
          name="description"
          content="Discover hardwood, tile, and epoxy flooring services from Vinicius Flooring. We serve Edison, New Brunswick, Piscataway, and the surrounding Central Jersey communities."
        />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta property="og:title" content="Flooring Installation &amp; Refinishing in Edison, NJ" />
        <meta
          property="og:description"
          content="Vinicius Flooring installs hardwood, tile, and epoxy floors for Central Jersey homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/services`} />
      </Helmet>

      <Container as="section" className="mt-4">
        <Flooring />
        <Why />

        <Row as="section" className="mb-5">
          <Col>
            <h2 className="text-center">Service Area</h2>
            <p className="text-center">
              From Edison and Highland Park to East Brunswick and Piscataway, NJ, our crew handles on-site consultations,
              precision installation, and meticulous cleanup for every flooring project.
            </p>
            <div className="text-center">
              <Button as={ButtonLink} to="/contact" variant="success">
                Schedule Your In-Home Estimate
              </Button>
            </div>
          </Col>
        </Row>

        {/* <Row as="section" className="mb-5">
          <Col>
            <h2 className="text-center">Project Gallery</h2>
            <p className="text-center text-muted">
              Explore recent hardwood, tile, and epoxy installations completed across Central Jersey homes and commercial spaces.
            </p>
            <Row as="div" className="justify-content-center" role="list">
              {galleryImages.map((image, idx) => (
                <Col key={image.src} xs={6} md={4} className="mb-3" role="listitem">
                  <Card onClick={() => handleImageClick(idx)} style={{ cursor: 'pointer' }}>
                    <Card.Img
                      variant="top"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={image.width}
                      height={image.height}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row> */}
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" aria-labelledby="gallery-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="gallery-modal-title">Central Jersey Flooring Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex ?? 0)}>
            {galleryImages.map((image) => (
              <Carousel.Item key={image.src}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={image.width}
                  height={image.height}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>

      <ContactSection headingLevel="h2" />
    </main>
  );
}

export default Services;
