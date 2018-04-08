import React from "react";

import { Row, Col } from "reactstrap";
import { Subscribe } from "unstated";

import Address from "./shared/Address";
import PhoneNumber from "./shared/PhoneNumber";
import SectionHeader from "./shared/SectionHeader";
import WindowSizeContainer from "../containers/WindowSizeContainer";
import { Calendar, PartyHat } from "./shared/EmojiLabels";

import eventIcs from "../static/files/event.ics";

export default () => (
  <React.Fragment>
    <Row>
      <Col>
        <SectionHeader>
          <PartyHat label="Celebration Details" />
        </SectionHeader>
      </Col>
    </Row>

    <Row>
      <Col md="4">
        <h2>When?</h2>
        <p className="mb-0">Saturday, June 23, 2018</p>
        <p className="mb-0">Starts at 4:00pm, dinner buffet at 5:00pm</p>
        <a href={eventIcs} download>
          <Calendar label="Add to calendar" />
        </a>

        <h2 className="mt-4">Where?</h2>
        <a href="http://vistalindacatering.com/">
          Vista Linda Mexican & Catering
        </a>
        <Address
          address="240 Boon Rd, Somers, MT 59932"
          url="https://goo.gl/maps/THRyvih62562"
        />
        <PhoneNumber number="(406) 857-3158" />

        <ul className="pt-4 pl-3">
          <li>Event will take place outdoors in a covered pavilion</li>
          <li>Dressy casual attire</li>
        </ul>

        <a
          href="https://goo.gl/forms/SKdVBcUt7LUQmP1K2"
          className="btn btn-secondary btn-lg btn-block mb-4 mb-md-0"
        >
          RSVP
        </a>
      </Col>

      <Col md="8">
        <Map />
      </Col>
    </Row>
  </React.Fragment>
);

class Map extends React.PureComponent {
  defaultWidth = 400;
  mapContainer = React.createRef()

  render = () => (
    <div ref={this.mapContainer}>
      <Subscribe to={[WindowSizeContainer]}>{this.renderMap}</Subscribe>
    </div>
  );

  renderMap = () => {
    const width = this.mapContainer.current
      ? this.mapContainer.current.clientWidth
      : this.defaultWidth;
    const height = getHeightFromWidth(width);

    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5868734347823!2d-114.24015338435312!3d48.07961667921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5366535871876905%3A0x3088f2289bea6c!2sVista+Linda+Mexican+%26+Catering!5e0!3m2!1sen!2sus!4v1520397563655"
        title="map"
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
      />
    );
  };
}

const getHeightFromWidth = width => {
  const max = 500;
  const min = 300;
  let height = Math.min(Math.floor(width / 4 * 3), max);
  height = Math.max(height, min);
  return height;
};
