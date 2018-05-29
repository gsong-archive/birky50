//@flow strict
import * as React from "react";

import styled, { css } from "react-emotion";

import Card from "./Card";
import SectionHeader from "./SectionHeader";
import WindowSizeContext from "../../contexts/WindowSizeContext";
import { getBaseFontSize } from "../../styles/utils";
import { supportsGrid } from "../../styles/cssFeatures";

import type { Props as CardType } from "./Card";
import type { LabelComponent } from "./EmojiLabels";

export type Props = {
  title: React.Element<LabelComponent>,
  items: Array<CardType>,
};

export default ({ title, items }: Props) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <React.Fragment>
      <SectionHeader>{title}</SectionHeader>
      <WindowSizeContext.Consumer>
        {({ width }) => {
          const baseFontSize = getBaseFontSize();
          const numberOfColumns = Math.max(
            1,
            Math.floor(width / (baseFontSize * 18))
          );

          let style;
          if (supportsGrid) {
            style = css`
              grid-template-columns: repeat(${numberOfColumns}, 1fr);
            `;
          } else {
            const totalGridGap = baseFontSize * 1.5 * (numberOfColumns + 3);
            const cardWidth =
              (width - totalGridGap) / numberOfColumns / baseFontSize;
            style = css`
              > div {
                flex: 0 0 ${cardWidth}rem;
              }
            `;
          }

          return <Container className={style}>{cards}</Container>;
        }}
      </WindowSizeContext.Consumer>
    </React.Fragment>
  );
};

const Container = styled.div(
  css`
    display: grid;
    grid-gap: 1.5rem;
    margin-bottom: 0.75em;
  `,
  !supportsGrid &&
    css`
      display: flex;
      flex-wrap: wrap;

      > div {
        margin-right: 1.5rem;
        margin-bottom: 1.5rem;
      }
    `
);
