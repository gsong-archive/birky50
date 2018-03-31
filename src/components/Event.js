import React from "react";

import { Row, Col } from "reactstrap";

import Address from "./shared/Address";
import PhoneNumber from "./shared/PhoneNumber";
import { Consumer } from "../providers/WindowSizeProvider";
import { PartyHat } from "./shared/EmojiLabels";

export default () => (
  <React.Fragment>
    <Row>
      <Col>
        <h1>
          <PartyHat label="Celebration Details" />
        </h1>
      </Col>
    </Row>
    <Row>
      <Col md="4">
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
      <Col md="8">
        <Map />
      </Col>
    </Row>
  </React.Fragment>
);

class Map extends React.PureComponent {
  state = { width: 400, height: 300 };

  render = () => (
    <div ref={el => (this.mapContainer = el)}>
      <Consumer>{this.handleWindowResize}</Consumer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5868734347823!2d-114.24015338435312!3d48.07961667921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5366535871876905%3A0x3088f2289bea6c!2sVista+Linda+Mexican+%26+Catering!5e0!3m2!1sen!2sus!4v1520397563655"
        title="map"
        width={this.state.width}
        height={this.state.height}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );

  handleWindowResize = () => {
    const width = this.mapContainer
      ? this.mapContainer.clientWidth
      : this.state.width;
    const height = getHeightFromWidth(width);
    this.setState({ width, height });
  };
}

const getHeightFromWidth = width => {
  const max = 500;
  const min = 300;
  let height = Math.min(Math.floor(width / 4 * 3), max);
  height = Math.max(height, min);
  return height;
};
