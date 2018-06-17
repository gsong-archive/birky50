//@flow
import { createFixture } from "react-cosmos-flow/fixture";
import { css } from "emotion";

import RSVPLink from "./index";

export default [
  createFixture({
    name: "Default",
    component: RSVPLink,
  }),
  createFixture({
    name: "Override with CSS class",
    description: "`className` prop is an Emotion `css` class name.",
    component: RSVPLink,
    props: {
      className: css`
        font-style: oblique;
        background-color: green;
        padding: 1.25rem 1.5rem;
      `,
    },
  }),
];
