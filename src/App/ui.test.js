import { devices, screenshot, setup } from "testUtils/puppeteer";

let browser, page;

beforeAll(async () => {
  const objects = await setup();
  browser = objects.browser;
  page = objects.page;
});

describe("Take screenshots at various sizes", () => {
  Object.entries(devices).forEach(([device, viewport]) => {
    test(device, async () => {
      await page.setViewport(viewport);
      await screenshot(device, page, { fullPage: true });
    });
  });
});

afterAll(async () => {
  await browser.close();
});
