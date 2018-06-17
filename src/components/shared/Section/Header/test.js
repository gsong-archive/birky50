//@flow strict
import React from "react";

import { render } from "react-testing-library";

import SectionHeader from "./index";
import { Airplane } from "../../EmojiLabels";

test("SectionHeader is rendered", () => {
  const { container } = render(
    <SectionHeader color="yellow">
      <Airplane label="Hi" />
    </SectionHeader>
  );

  expect(container.firstChild).toMatchSnapshot();
});
