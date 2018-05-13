import React from "react";

import { css } from "emotion";

import Card from "./Card";
import SectionHeader from "./SectionHeader";
import WindowSizeContext from "../../contexts/WindowSizeContext";

export default ({ title, items }) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <React.Fragment>
      <SectionHeader>{title}</SectionHeader>
      <WindowSizeContext.Consumer>
        {({ width }) => {
          const numberOfColumns = Math.max(1, Math.floor(width / 275));

          return (
            <div
              className={css`
                display: grid;
                grid-gap: 1.5rem;
                grid-template-columns: ${`repeat(${numberOfColumns}, 1fr)`};
                margin-bottom: 0.75em;
              `}
            >
              {cards}
            </div>
          );
        }}
      </WindowSizeContext.Consumer>
    </React.Fragment>
  );
};
