import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Helmet } from 'react-helmet-async';
import './Footer.css';
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_DESCRIPTION,
  SERVICE_AREAS,
  SITE_URL,
} from '../seo/siteMetadata';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  description: BUSINESS_DESCRIPTION,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  image: `${SITE_URL}/favicon.png`,
  areaServed: SERVICE_AREAS.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_ADDRESS.streetAddress,
    addressLocality: BUSINESS_ADDRESS.addressLocality,
    addressRegion: BUSINESS_ADDRESS.addressRegion,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressCountry: BUSINESS_ADDRESS.addressCountry,
  },
  sameAs: ['https://maps.app.goo.gl/viniciusFlooring'],
};

function Footer() {
  return (
    <footer className="site-footer py-5">
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Helmet>
      <Container>
        <Row>
          {/* Logo & Tagline */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand">
              <img
                src="/favicon_64x64.png"
                alt="Vinicius Flooring monogram logo"
                className="footer-logo"
                loading="lazy"
                width={64}
                height={64}
              />
              <h5 className="brand-name">{BUSINESS_NAME}</h5>
              <p className="tagline">Timeless Flooring, Honest Craftsmanship</p>
            </div>
          </Col>

          {/* Navigation */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h6 className="footer-heading">Contact</h6>
            <div className="footer-contact">
              <div className="contact-item">
                <PhoneIcon className="icon" />
                <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`}>{BUSINESS_PHONE}</a>
              </div>
              <div className="contact-item">
                <EnvelopeIcon className="icon" />
                <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
              </div>
              <div className="contact-item">
                <MapPinIcon className="icon" />
                <span>{`${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion}`}</span>
              </div>
              <p className="location-note">Serving Central NJ and surrounding areas</p>
            </div>
          </Col>
        </Row>

        <hr />

        <p className="text-center copyright mt-4">
          © {new Date().getFullYear()} Vinicius Flooring. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
