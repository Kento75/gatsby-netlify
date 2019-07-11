import React from 'react';
import {Form, Button} from 'react-bootstrap';

// components
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => (
  <PrimaryLayout column="col-10">
    <div className="pt-5">
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email..." />
        </Form.Group>
        <Form.Group controlId="contactForm.subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="email" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  </PrimaryLayout>
);
