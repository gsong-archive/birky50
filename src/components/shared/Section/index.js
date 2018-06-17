//@flow
import * as React from "react";

import { css } from "emotion";

import Container from "./Container";
import Header from "./Header";

import type { SectionDatum } from "../../Section.type";

export type Props = {
  data: SectionDatum,
  forwardedRef: { current: null | React$ElementRef<React.ElementType> },
};

export default ({ data, forwardedRef }: Props) => {
  const {
    id,
    sectionLabel,
    sectionTag,
    SectionComponent,
    LabelComponent,
    color,
  } = data;
  // flowlint-next-line sketchy-null-string:off
  const tag = sectionTag ? sectionTag : "section";

  return (
    <Container
      tag={tag}
      id={id}
      key={id}
      ref={forwardedRef}
      aria-labelledby={`${id}-description`}
    >
      <Header color={color}>
        <LabelComponent label={sectionLabel} />
      </Header>

      <div
        className={css`
          padding: 0 24px;
        `}
      >
        <SectionComponent />
      </div>
    </Container>
  );
};
