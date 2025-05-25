import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './ContactSection.css';

function ContactSection() {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity()) {
      const formData = new FormData(form);

      const response = await fetch('https://formspree.io/f/mblovoqa', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setValidated(false);
      } else {
        alert('There was a problem submitting the form.');
      }
    }

    setValidated(true);
  };

  return (
    <section className="contact-section py-5">
      <Container>
        <h2 className="text-center contact-heading mb-5">Get in Touch</h2>

        <Row className="justify-content-center">
          <Col md={8}>
            {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                Thank you! Your message has been sent.
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} placeholder="How can we help you?" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Honeypot field to prevent spam */}
              <Form.Group style={{ display: 'none' }}>
                <Form.Label>Leave this field empty</Form.Label>
                <Form.Control name="_gotcha" />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
