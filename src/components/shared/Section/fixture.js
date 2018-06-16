//@flow
import React from "react";

import { createFixture } from "react-cosmos-flow/fixture";

import Section from "./cosmos";
import sections from "../../../data/sections";

export default sections.map(section => {
  const ref = React.createRef();

  return createFixture({
    name: section.navLabel,
    description:
      "`data` prop is a section spec, `forwardedRef` is a React component ref",
    component: Section,
    props: {
      data: section,
      forwardedRef: ref,
    },
  });
});
