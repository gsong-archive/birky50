import React from "react";

import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default () => {
  const labelWidth = 1;
  const inputWidth = 5;
  const sendTo = "birky50@damacy.net";

  return (
    <Row>
      <Col>
        <h1>🙋🏻‍♀️ Questions?</h1>
        <Form action={`https://formspree.io/${sendTo}`} method="POST">
          <FormGroup row>
            <Label for="contact_us_name" md={labelWidth}>
              Name
            </Label>
            <Col lg={inputWidth} md={inputWidth + 1}>
              <Input
                type="text"
                name="name"
                id="contact_us_name"
                placeholder="Your Name"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contact_us_email" md={labelWidth}>
              Email
            </Label>
            <Col lg={inputWidth} md={inputWidth + 1}>
              <Input
                type="email"
                name="email"
                id="contact_us_email"
                placeholder="Your Email"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contact_us_message" md={labelWidth}>
              Message
            </Label>
            <Col lg={inputWidth} md={inputWidth + 1}>
              <Input
                type="textarea"
                name="message"
                id="contact_us_message"
                placeholder="Message"
                rows="3"
                required
              />
            </Col>
          </FormGroup>
          <input
            type="hidden"
            name="_subject"
            value="Birky 50th Anniversary Message"
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <Row>
            <Col md={{ size: inputWidth, offset: labelWidth }}>
              <Button type="submit" color="primary">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
