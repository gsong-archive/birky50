import React from "react";

import { render } from "react-testing-library";

import NavMenu from "../NavMenu";

test("NavMenu renders properly", () => {
  const props = {
    sections: [
      {
        id: "id",
        navLabel: "label",
        LabelComponent: props => <div>{props.label}</div>
      }
    ],
    onClick: jest.fn()
  };
  const { container } = render(<NavMenu {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
