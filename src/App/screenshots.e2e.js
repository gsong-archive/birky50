import { devices, screenshot, settings } from "testUtils/puppeteer";

beforeAll(async () => {
  jest.setTimeout(settings.jestTimeOut);
  await page.goto(settings.appUrl);
});

describe("Take screenshots at various sizes", () => {
  Object.entries(devices).forEach(([device, viewport]) => {
    test(device, async () => {
      await page.setViewport(viewport);
      await screenshot(device, page, { fullPage: true });
    });
  });
});
