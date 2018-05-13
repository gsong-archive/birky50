import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import Address from "./shared/Address";
import PhoneNumber from "./shared/PhoneNumber";
import RSVPLink from "./shared/RSVPLink";
import SectionHeader from "./shared/SectionHeader";
import WindowSizeContext from "../contexts/WindowSizeContext";
import { Calendar } from "./shared/EmojiLabels";
import { Link } from "../styles/components";

import eventIcs from "../static/files/event.ics";

export default ({ LabelComponent, sectionLabel }) => {
  return (
    <React.Fragment>
      <SectionHeader>
        <LabelComponent label={sectionLabel} />
      </SectionHeader>

      <Event>
        <EventDetails>
          <h2>When?</h2>
          <TightP>Saturday, June 23, 2018</TightP>
          <TightP>Starts at 4:00pm, dinner buffet at 5:00pm</TightP>
          <Link href={eventIcs} download>
            <Calendar label="Add to calendar" />
          </Link>

          <h2
            className={css`
              margin-top: 1.5rem;
            `}
          >
            Where?
          </h2>
          <Link href="http://vistalindacatering.com/" rel="nofollow">
            Vista Linda Mexican & Catering
          </Link>
          <address>
            <Address
              address="240 Boon Rd, Somers, MT 59932"
              url="https://goo.gl/maps/THRyvih62562"
            />
            <PhoneNumber number="(406) 857-3158" />
          </address>

          <ul
            className={css`
              padding: 0;
            `}
          >
            <LI>Event will take place outdoors in a covered pavilion</LI>
            <LI>Dressy casual attire</LI>
          </ul>

          <RSVPLink width="100%" />
        </EventDetails>
        <EventMap>
          <Map />
        </EventMap>
      </Event>
    </React.Fragment>
  );
};

class Map extends React.Component {
  defaultWidth = 400;
  mapContainer = React.createRef();

  render = () => (
    <div ref={this.mapContainer}>
      <WindowSizeContext.Consumer>{this.renderMap}</WindowSizeContext.Consumer>
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
        width="100%"
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

const LI = styled("li")`
  margin-left: 1.5rem;
`;

const TightP = styled("p")`
  margin: 0.25rem 0;
`;

const eventItem = css`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0 1rem;
`;

const breakpoints = [900];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const Event = styled("div")(
  css`
    display: flex;
    margin: 0 -1rem;
  `,
  mq({
    flexWrap: ["wrap", "nowrap"]
  })
);

const EventDetails = styled("div")(
  eventItem,
  mq({
    flexBasis: ["100%", "calc(100% / 3)"]
  })
);

const EventMap = styled("div")(
  eventItem,
  mq({
    flexBasis: ["100%", "calc(100% / 3 * 2)"],
    marginTop: ["1.5rem", "0"]
  })
);
