before(() => {
  cy.visit("http://localhost:3000");
});

beforeEach(() => cy.window().as("window"));

describe("Click item in nav menu should scroll to section", () => {
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
      cy.contains(item).click();
      cy.get("@window").then(window => {
        cy
          .get("section")
          .contains(section)
          .should(beVisible(window));
      });
      cy.screenshot(`${i}-${item}`);
    });
  });
});

const beVisible = window => section => {
  const result = isElementInViewport(window, section);
  expect(result).to.be.true;
};

const isElementInViewport = (window, elements) => {
  //special bonus for jQuery
  const element = elements[0];
  const rect = element.getBoundingClientRect();

  return rect.top <= window.innerHeight;
};
