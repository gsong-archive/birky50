const isElementInViewport = el => {
  //special bonus for jQuery
  el = el[0];
  const rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.left >= 0;
};

const beVisible = section => {
  const result = isElementInViewport(section);
  expect(result).to.be.true;
};

describe("Click item in nav menu should scroll to section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

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
      cy
        .get("section")
        .contains(section)
        .should(beVisible);
      cy.wait(i * 300);
      cy.screenshot(`${i}-${item}`);
    });
  });
});
