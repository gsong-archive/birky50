//@flow strict
import * as React from "react";

import styled from "react-emotion";

import Card from "./Card";
import SectionHeader from "./SectionHeader";
import WindowSizeContext from "../../contexts/WindowSizeContext";

import type { CardType } from "./Card";
import type { LabelComponent } from "./EmojiLabels";

type Props = {
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
          const numberOfColumns = Math.max(1, Math.floor(width / 275));
          const style = {
            gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
          };

          return <Container style={style}>{cards}</Container>;
        }}
      </WindowSizeContext.Consumer>
    </React.Fragment>
  );
};

const Container = styled("div")`
  display: grid;
  grid-gap: 1.5rem;
  margin-bottom: 0.75em;
`;
