import React from "react";

import { render } from "react-testing-library";

import { generate } from "testUtils";

import CardList from "../CardList";

describe("CardList renders", () => {
  const props = {
    title: generate.words(),
    items: [generate.card(), generate.card()],
  };
  const { container } = render(<CardList {...props} />);

  test("title is visible", () =>
    expect(container.textContent).toMatch(props.title));

  test("cards are visible", () =>
    props.items.forEach(item =>
      expect(container.textContent).toMatch(item.name)
    ));
});
