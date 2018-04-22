before(() => {
  cy.visit("http://localhost:3000");
});

describe("Click item in nav menu should scroll to section", () => {
  let rect;
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
        .then(sections => (rect = getRect(sections)));

      cy.contains(item).click();
      cy.get("@sections").should(stopScrolling);
      cy.window().then(window => {
        cy.get("@sections").should(beVisibleIn(window));
      });

      cy.screenshot(`${i}-${item}`);
    });
  });

  const getRect = $elements => {
    const element = $elements[0];
    const _rect = element.getBoundingClientRect();
    return _rect;
  };

  const stopScrolling = $elements => {
    const prevRect = rect;
    rect = getRect($elements);
    expect(rect.top).to.equal(prevRect.top);
  };

  const beVisibleIn = window => $elements => {
    const rect = getRect($elements);
    expect(rect.top).to.be.lt(window.innerHeight);
  };
});
