//@flow
import React from "react";

import { css } from "emotion";

import { SectionProvider } from "../../contexts/SectionContext";

const forwardRef = (render, displayName = "") => {
  render.displayName = displayName;
  // $FlowFixMe
  return React.forwardRef(render);
};

export default forwardRef((props, ref) => {
  const sectionProps = Object.assign({}, props, {
    ref,
    className: css`
      ${props.className};
      padding: 16px 24px 24px;
    `,
  });
  delete sectionProps.tag;
  const section = React.createElement(props.tag, sectionProps);

  return <SectionProvider id={props.id}>{section}</SectionProvider>;
}, "Section");
