import puppeteer from "puppeteer";

import "../env";

const DEFAULT_APP_URL = "http://localhost:3000";
const DEFAULT_SCROLL_CHECK_DELAY = 100;
const DEFAULT_SCREENSHOTS_FOLDER = "screenshots/puppeteer";

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
      : ["--no-sandbox", "--disable-setuid-sandbox"],
};

const appUrl =
  process.env.APP_URL === undefined ? DEFAULT_APP_URL : process.env.APP_URL;

const screenshotsFolder =
  process.env.PUPPETEER_SCREENSHOTS_FOLDER === undefined
    ? DEFAULT_SCREENSHOTS_FOLDER
    : process.env.PUPPETEER_SCREENSHOTS_FOLDER;

export const scrollCheckDelay =
  process.env.PUPPETEER_SCROLL_CHECK_DELAY || DEFAULT_SCROLL_CHECK_DELAY;

export const setup = async () => {
  const browser = await puppeteer.launch(launchOptions);
  console.log(await browser.version(), appUrl);
  const page = await browser.newPage();
  await page.goto(appUrl);
  return { browser, page };
};

export const screenshot = async (imageName, page, options = {}) => {
  await page.screenshot({
    path: `${screenshotsFolder}/${imageName}.png`,
    ...options,
  });
};

const desktops = {
  "macbook-13": { width: 1280, height: 800 },
  "macbook-15": { width: 1440, height: 900 },
};

const mobiles = {
  "ipad-portrait": { width: 768, height: 1024 },
  "iphone-se-portrait": { width: 320, height: 568 },
  "iphone-8-portrait": { width: 375, height: 667 },
  "iphone-8-plus-portrait": { width: 540, height: 960 },
  "iphone-x-portrait": { width: 375, height: 812 },
};

Object.entries(mobiles).forEach(([device, viewport]) => {
  mobiles[device.replace("portrait", "landscape")] = {
    width: viewport.height,
    height: viewport.width,
    isLandscape: true,
  };
});

Object.entries(mobiles).forEach(([device, viewport]) => {
  mobiles[device] = { ...viewport, isMobile: true, hasTouch: true };
});

export const devices = Object.assign({}, desktops, mobiles);
