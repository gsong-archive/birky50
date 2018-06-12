import { screenshot, settings } from "testUtils/puppeteer";

beforeAll(async () => {
  jest.setTimeout(settings.jestTimeOut);
  await page.goto(settings.appUrl);
});

describe("Click item in nav menu should scroll to section", () => {
  const sections = {
    Details: "Celebration Details",
    Airport: "Where to Fly Into",
    Lodging: "Where to Stay",
    Food: "Where to Eat",
    Activities: "What to Do",
    Questions: "Questions",
  };

  Object.entries(sections).forEach(([navLabel, sectionLabel], i) => {
    test(navLabel, async () => {
      const link = await getByText(page, "nav//*", navLabel);
      const section = await getByText(page, "h1//*", sectionLabel);

      // 1. Click on nav menu link
      // 2. Wait for the screen to stop scrolling
      // 3. Make sure the section associated with the link is visible
      await link.click();
      await stoppedScrolling(section);
      await isVisibleInViewPort(section);

      await screenshot(`${i}-${navLabel}`, page);
    });
  });
});

const stoppedScrolling = async element => {
  let boundingBox = await element.boundingBox();
  let stillScrolling = true;

  while (stillScrolling) {
    await delay(settings.scrollCheckDelay);
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

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
