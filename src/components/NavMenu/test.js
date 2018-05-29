import React from "react";

import { render } from "react-testing-library";

import NavMenu from "./index";

test("NavMenu renders properly", () => {
  const props = {
    sections: [
      {
        id: "id",
        navLabel: "Menu Item",
        LabelComponent: props => props.label,
      },
    ],
    onClick: jest.fn(),
  };
  const { container } = render(<NavMenu {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
