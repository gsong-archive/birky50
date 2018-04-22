import puppeteer from "puppeteer";

import "../../env";

const DEFAULT_APP_URL = "http://localhost:3000";
const DEFAULT_SCROLL_CHECK_DELAY = 100;
let browser, page;

beforeAll(async () => {
  const headless =
    process.env.PUPPETEER_HEADLESS === undefined
      ? true
      : process.env.PUPPETEER_HEADLESS.toLowerCase() === "true"
        ? true
        : false;
  const slowMo =
    process.env.PUPPETEER_SLOW_MO === undefined
      ? 0
      : Number(process.env.PUPPETEER_SLOW_MO);
  const args =
    process.env.IN_DOCKER === undefined
      ? []
      : ["--no-sandbox", "--disable-setuid-sandbox"];
  const appUrl =
    process.env.APP_URL !== undefined ? process.env.APP_URL : DEFAULT_APP_URL;

  browser = await puppeteer.launch({
    headless,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    slowMo,
    args
  });
  console.log(await browser.version(), appUrl);
  page = await browser.newPage();
  await page.goto(appUrl);
});

describe("Click item in nav menu should scroll to section", () => {
  const sections = {
    Details: "Details",
    Airport: "Where to Fly",
    Lodging: "Where to Stay",
    Food: "Where to Eat",
    Activities: "What to Do",
    Questions: "Questions"
  };

  Object.entries(sections).forEach(([item, sectionLabel], i) => {
    test(item, async () => {
      const link = await getByText(page, "a", item);
      const section = await getByText(page, "section//*", sectionLabel);

      // 1. Click on nav menu link
      // 2. Wait for the screen to stop scrolling
      // 3. Make sure the section associated with the link is visible
      await link.click();
      const boundingBox = await boundingBoxAfterScroll(section);
      expect(boundingBox.y).toBeLessThan(page.viewport().height);

      await page.screenshot({
        path: `src/__tests__/e2e/screenshots/${i}-${item}.png`
      });
    });
  });
});

afterAll(async () => {
  await browser.close();
});

const boundingBoxAfterScroll = async element => {
  let boundingBox = await element.boundingBox();
  let stillScrolling = true;

  while (stillScrolling) {
    await delay(
      process.env.PUPPETEER_SCROLL_CHECK_DELAY || DEFAULT_SCROLL_CHECK_DELAY
    );
    const oldBoundingBox = boundingBox;
    boundingBox = await element.boundingBox();
    if (oldBoundingBox.y === boundingBox.y) stillScrolling = false;
  }

  return boundingBox;
};

const getByText = async (container, selector, text) => {
  const elements = await container.$x(
    `//${selector}[text()[contains(., '${text}')]]`
  );
  return elements[0];
};

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
