//@flow
import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import Address from "../shared/Address";
import PhoneNumber from "../shared/PhoneNumber";
import RSVPLink from "../shared/RSVPLink";
import WindowSizeContext from "../../contexts/WindowSizeContext";
import { Calendar } from "../shared/EmojiLabels";
import { Link } from "../../styles/components";
import { boxShadow1 } from "../../styles";
import { calcSpacing, convertListToEm } from "../../styles/utils";
import { supportsGrid } from "../../styles/cssFeatures";
import { textColors } from "../../styles/variables";

import eventIcs from "../../static/files/event.ics";

export default () => {
  return (
    <Event>
      <EventDetails>
        <div>
          <EventDetailTitle>When?</EventDetailTitle>
          <EventDetailContent>
            <p
              className={css`
                font-weight: bold;
              `}
            >
              <time dateTime="2018-06-23 16:00">Saturday, June 23, 2018</time>
            </p>
            <p>Starts at 4:00pm, dinner buffet at 5:00pm</p>
            <Link
              href={eventIcs}
              className={css`
                display: inline-block;
              `}
              download
            >
              <Calendar label="Add to calendar" />
            </Link>
          </EventDetailContent>
        </div>

        <div>
          <EventDetailTitle className={whereHeader}>Where?</EventDetailTitle>
          <EventDetailContent>
            <Link
              href="http://vistalindacatering.com/"
              rel="nofollow"
              className={css`
                font-weight: bold;
              `}
            >
              Vista Linda Mexican & Catering
            </Link>
            <address>
              <Address
                address="240 Boon Rd, Somers, MT 59932"
                url="https://goo.gl/maps/THRyvih62562"
              />
              <PhoneNumber number="(406) 857-3158" />
            </address>
          </EventDetailContent>
        </div>

        <ul
          className={css`
            ${spanned};
            padding: 0;
            margin-top: 2.25em;
          `}
        >
          <LI>Event will take place outdoors in a covered pavilion</LI>
          <LI>Dressy casual attire</LI>
        </ul>

        <RSVPLink
          width="100%"
          className={css`
            ${spanned};
            margin-top: 0.375rem;
          `}
        />
      </EventDetails>
      <EventMap>
        <Map />
      </EventMap>
    </Event>
  );
};

class Map extends React.Component<{}> {
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
        height={height}
        allowFullScreen
        className={css`
          ${boxShadow1};
          width: 100%;
          border: 0;
        `}
      />
    );
  };
}

const getHeightFromWidth = width => {
  const max = 500;
  const min = 300;
  let height = Math.min(Math.floor((width / 4) * 3), max);
  height = Math.max(height, min);
  return height;
};

const EventDetailTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  color: ${textColors.gray};
  margin: 0 0 0;
`;

const EventDetailContent = styled.div`
  a,
  p {
    display: block;
    margin: ${calcSpacing(1.5)}em 0 0;
  }
`;

const LI = styled.li`
  color: ${textColors.lightGray};
  margin-left: 1.5rem;
`;

const breakpoints1 = convertListToEm([1010]);
const mq1 = facepaint(breakpoints1.map(bp => `@media (min-width: ${bp}em)`));

const Event = styled.div(
  mq1({
    display: [null, "grid"],
    gridTemplateColumns: [null, "1fr 2fr"],
    gridColumnGap: [null, "1.125rem"],
  }),
  !supportsGrid &&
    mq1({
      display: [null, "flex"],
      justifyContent: [null, "space-between"],
      "> *:first-child": {
        flex: [null, `0 0 32%`],
      },
      "> *:last-child": {
        flex: [null, `0 0 65%`],
      },
    })
);

const EventMap = styled.div(
  mq1({
    marginTop: ["1.5rem", "0"],
  })
);

const spanned = css(mq1({ gridColumn: ["1 / 3"] }));

const breakpoints2 = convertListToEm([590, 1010]);
const mq2 = facepaint(breakpoints2.map(bp => `@media (min-width: ${bp}em)`));

const EventDetails = styled.div(
  mq2({
    display: [null, "grid", "block"],
    gridTemplateColumns: [null, "1fr 1fr"],
    gridColumnGap: [null, "10vw"],
  }),
  !supportsGrid &&
    mq2({
      display: [null, "flex", "block"],
      flexWrap: "wrap",
      "> *:first-child": {
        marginRight: [null, "10vw"],
      },
    })
);

const whereHeader = css(mq2({ marginTop: ["2.25em", 0, "2.25em"] }));
