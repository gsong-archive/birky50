const DEFAULT_APP_URL = "http://localhost:3000";

before(() => {
  const appUrl =
    Cypress.env("APP_URL") !== undefined
      ? Cypress.env("APP_URL")
      : DEFAULT_APP_URL;
  cy.visit(appUrl);
});

describe("Click item in nav menu should scroll to section", () => {
  let boundingBox;
  const sections = {
    Details: "Details",
    Airport: "Where to Fly",
    Lodging: "Where to Stay",
    Food: "Where to Eat",
    Activities: "What to Do",
    Questions: "Questions"
  };

  Object.entries(sections).forEach(([item, section], i) => {
    it(item, () => {
      cy
        .get("section")
        .contains(section)
        .as("sections")
        .then(sections => (boundingBox = getBoundingBox(sections)));

      // 1. Click on nav menu link
      // 2. Wait for the screen to stop scrolling
      // 3. The section associated with the link should be visible
      cy.contains(item).click();
      cy.window().then(window => {
        cy
          .get("@sections")
          .should(stopScrolling)
          .and(beVisibleIn(window));
      });

      cy.screenshot(`${i}-${item}`);
    });
  });

  const stopScrolling = $elements => {
    const prevBoundingBox = boundingBox;
    boundingBox = getBoundingBox($elements);
    expect(boundingBox.top).to.equal(prevBoundingBox.top);
  };

  const beVisibleIn = window => $elements => {
    const boundingBox = getBoundingBox($elements);
    expect(boundingBox.top).to.be.lt(window.innerHeight);
  };

  const getBoundingBox = $elements => {
    const element = $elements[0];
    const boundingBox = element.getBoundingClientRect();
    return boundingBox;
  };
});
