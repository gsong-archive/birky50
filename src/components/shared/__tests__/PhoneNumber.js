import React from "react";

import { render } from "react-testing-library";

import { generate } from "testUtils";

import PhoneNumber from "../PhoneNumber";

test("User can see phone number and link", () => {
  const props = { number: generate.phoneNumber() };
  const { container } = render(<PhoneNumber {...props} />);
  const link = container.querySelector("a");

  expect(container.textContent).toMatch(props.number);
  expect(link.href).toBe(`tel:${props.number}`);
});

test("PhoneNumber is rendered", () => {
  const props = { number: "503-123-4567" };
  const { container } = render(<PhoneNumber {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
