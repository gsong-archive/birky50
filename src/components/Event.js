import React from "react";

import { Container, Row, Col } from "reactstrap";

import Address from "./shared/Address";
import PhoneNumber from "./shared/PhoneNumber";

export default () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Celebration Details</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <a href="http://vistalindacatering.com/">
            Vista Linda Mexican & Catering
          </a>
        </h2>
        <Address
          address="240 Boon Rd, Somers, MT 59932"
          url="https://goo.gl/maps/THRyvih62562"
        />
        <PhoneNumber number="(406) 857-3158" />
      </Col>
      <Col>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5868734347823!2d-114.24015338435312!3d48.07961667921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5366535871876905%3A0x3088f2289bea6c!2sVista+Linda+Mexican+%26+Catering!5e0!3m2!1sen!2sus!4v1520397563655"
          title="map"
          width="400"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Col>
    </Row>
  </Container>
);
