import React from "react";

import { render } from "react-testing-library";

import { generate } from "testUtils";

import Address from "../Address";

test("User can see address and map link", () => {
  const props = { address: generate.address(), url: generate.url() };
  const { container } = render(<Address {...props} />);
  const link = container.querySelector("a");

  expect(container.textContent).toMatch(props.address);
  expect(link.href).toMatch(props.url);
});

test("Address is rendered", () => {
  const props = {
    address: "123 Main Street",
    url: "https://example.com",
  };
  const { container } = render(<Address {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
