import { css } from "emotion";

import RSVPLink from "../RSVPLink";

export default [
  {
    name: "Default",
    component: RSVPLink,
  },
  {
    name: "Specify width",
    component: RSVPLink,
    props: { width: "50%" },
  },
  {
    name: "Override with CSS class",
    component: RSVPLink,
    props: {
      className: css`
        font-style: oblique;
        background-color: green;
        padding: 1.25rem 1.5rem;
      `,
    },
  },
];
