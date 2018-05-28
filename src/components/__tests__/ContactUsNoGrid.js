import React from "react";

import { render } from "react-testing-library";

import { mockSupportsGrid } from "testUtils/mocks";

import ContactUs from "../ContactUs";
import { WomanRaisingHand } from "../shared/EmojiLabels";

test("ContactUs renders properly", () => {
  mockSupportsGrid(false);
  const { container } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );

  expect(container).toMatchSnapshot();
});
