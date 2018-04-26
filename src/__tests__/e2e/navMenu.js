import puppeteer from "puppeteer";

import "../../env";

const DEFAULT_APP_URL = "http://localhost:3000";
const DEFAULT_SCROLL_CHECK_DELAY = 100;
const DEFAULT_SCREENSHOTS_FOLDER = "screenshots/puppeteer";
let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch(launchOptions);
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
      await stoppedScrolling(section);
      await isVisibleInViewPort(section);

      await screenshot(`${i}-${item}`);
    });
  });
});

afterAll(async () => {
  await screenshot("full-page", { fullPage: true });
  await browser.close();
});

const stoppedScrolling = async element => {
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
};

const isVisibleInViewPort = async element => {
  const boundingBox = await element.boundingBox();

  expect(boundingBox.y).toBeGreaterThan(0);
  expect(boundingBox.y + boundingBox.height).toBeLessThan(
    page.viewport().height
  );
};

const getByText = async (container, selector, text) => {
  const elements = await container.$x(
    `//${selector}[text()[contains(., '${text}')]]`
  );

  return elements[0];
};

const screenshot = async (imageName, options = {}) => {
  await page.screenshot({
    path: `${screenshotsFolder}/${imageName}.png`,
    ...options
  });
};

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const launchOptions = {
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  headless:
    process.env.PUPPETEER_HEADLESS === undefined
      ? true
      : process.env.PUPPETEER_HEADLESS.toLowerCase() === "true"
        ? true
        : false,
  slowMo:
    process.env.PUPPETEER_SLOW_MO === undefined
      ? 0
      : Number(process.env.PUPPETEER_SLOW_MO),
  args:
    process.env.IN_DOCKER === undefined
      ? []
      : ["--no-sandbox", "--disable-setuid-sandbox"]
};
const appUrl =
  process.env.APP_URL === undefined ? DEFAULT_APP_URL : process.env.APP_URL;
const screenshotsFolder =
  process.env.PUPPETEER_SCREENSHOTS_FOLDER === undefined
    ? DEFAULT_SCREENSHOTS_FOLDER
    : process.env.PUPPETEER_SCREENSHOTS_FOLDER;
