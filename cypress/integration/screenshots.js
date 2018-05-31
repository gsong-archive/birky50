before(() => {
  cy.visit("");
});

describe("Screenshots at different resolutions", () => {
  context("Desktop", () => {
    const devices = ["macbook-15", "macbook-13"];
    devices.forEach(device => {
      it(device, () => {
        cy.viewport(device);
        cy.screenshot(device);
      });
    });
  });

  context("Mobile", () => {
    const devices = ["ipad-2", "iphone-6+", "iphone-6", "iphone-5"];
    const orientations = ["portrait", "landscape"];
    devices.forEach(device => {
      orientations.forEach(orientation => {
        it(`${device}-${orientation}`, () => {
          cy.viewport(device, orientation);
          cy.screenshot(`${device}-${orientation}`);
        });
      });
    });
  });
});
