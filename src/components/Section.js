import React from "react";

import { css } from "emotion";

import { SectionProvider } from "../contexts/SectionContext";

const forwardRef = (render, displayName = "") => {
  render.displayName = displayName;
  return React.forwardRef(render);
};

export default forwardRef(
  (props, ref) => (
    <SectionProvider id={props.id}>
      <section
        {...props}
        ref={ref}
        className={css`
          ${props.className};
          padding: 1.5rem;
        `}
      >
        {props.children}
      </section>
    </SectionProvider>
  ),
  "Section"
);
