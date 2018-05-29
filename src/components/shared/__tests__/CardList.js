import React from "react";

import { render } from "react-testing-library";

import { generate } from "testUtils";
import { mockGetBaseFontSize, mockSupportsGrid } from "testUtils/mocks";

mockGetBaseFontSize.mock();
mockSupportsGrid(true);

const CardList = require("../CardList").default;

describe("CardList renders", () => {
  const props = {
    title: generate.words(),
    items: [...Array(10)].map(() => generate.card()),
  };
  const { container } = render(<CardList {...props} />);

  test("title is visible", () =>
    expect(container.textContent).toMatch(props.title));

  test("cards are visible", () =>
    props.items.forEach(item =>
      expect(container.textContent).toMatch(item.name)
    ));

  test("CardList is rendered", () => {
    const props = {
      title: "A Title",
      items: [
        {
          name: "ABC Co.",
          url: "https://som_url/",
          price: "$100–$200",
          address: "123 Main Street",
          addressUrl: "https://url_to_map/",
          phone: "415-123-4567",
          imgUrl: "https://url_to_image/",
        },
      ],
    };
    const { container } = render(<CardList {...props} />);
    expect(container).toMatchSnapshot();
  });
});

mockGetBaseFontSize.restore();
