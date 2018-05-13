import React from "react";

import { css } from "emotion";

import SectionContext from "../../contexts/SectionContext";

export default ({ children }) => (
  <SectionContext.Consumer>
    {id => (
      <h1
        id={`${id}-description`}
        className={css`
          margin-bottom: 1rem;
        `}
      >
        {children}
      </h1>
    )}
  </SectionContext.Consumer>
);
