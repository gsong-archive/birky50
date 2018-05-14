const DEFAULT_APP_URL = "http://localhost:3000";

before(() => {
  const appUrl =
    Cypress.env("APP_URL") !== undefined
      ? Cypress.env("APP_URL")
      : DEFAULT_APP_URL;

  cy.visit(appUrl);
});

describe("Click item in nav menu should scroll to section", () => {
  const sections = {
    Details: "Celebration Details",
    Airport: "Where to Fly Into",
    Lodging: "Where to Stay",
    Food: "Where to Eat",
    Activities: "What to Do",
    Questions: "Questions"
  };
  let boundingBox;

  Object.entries(sections).forEach(([navLabel, sectionLabel], i) => {
    it(navLabel, () => {
      cy
        .get("h1")
        .contains(sectionLabel)
        .as("section")
        .then(section => (boundingBox = getBoundingBox(section)));

      // 1. Click on nav menu link
      // 2. Wait for the screen to stop scrolling
      // 3. The section associated with the link should be visible
      cy
        .get("nav")
        .contains(navLabel)
        .click();
      cy.window().then(window => {
        cy
          .get("@section")
          .should(stopScrolling)
          .and(beVisibleIn(window));
      });

      cy.screenshot(`${i}-${navLabel}`);
    });
  });

  const stopScrolling = $elements => {
    const prevBoundingBox = boundingBox;

    boundingBox = getBoundingBox($elements);
    expect(boundingBox.top).to.equal(prevBoundingBox.top);
  };

  const beVisibleIn = window => $elements => {
    const boundingBox = getBoundingBox($elements);

    expect(boundingBox.top).to.be.gt(0);
    expect(boundingBox.bottom).to.be.lt(window.innerHeight);
  };

  const getBoundingBox = $elements => {
    const element = $elements[0]; // jQuery
    const boundingBox = element.getBoundingClientRect();

    return boundingBox;
  };
});
