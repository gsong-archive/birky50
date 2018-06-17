//@flow
import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import Address from "../shared/Address";
import Map from "./Map";
import PhoneNumber from "../shared/PhoneNumber";
import RSVPLink from "../shared/RSVPLink";
import { Calendar } from "../shared/EmojiLabels";
import { Link } from "../../styles/components";
import { bold } from "../../styles";
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
            <p className={bold}>
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
              className={bold}
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

        <EventNotes>
          <li>Event will take place outdoors in a covered pavilion</li>
          <li>Dressy casual attire</li>
        </EventNotes>

        <EventRSVP />
      </EventDetails>
      <EventMap>
        <Map />
      </EventMap>
    </Event>
  );
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

const EventNotes = styled.ul`
  grid-column: 1 / 3;
  padding: 0;
  margin-top: 2.25em;

  li {
    color: ${textColors.lightGray};
    margin-left: 1.5rem;
  }
`;

const EventRSVP = styled(RSVPLink)`
  grid-column: 1 / 3;
  margin-top: 0.375rem;
  width: 100%;
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
