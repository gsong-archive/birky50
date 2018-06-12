import "../env";

const DEFAULT_APP_URL = "http://localhost:3000";
const DEFAULT_JEST_TIMEOUT = 5000;
const DEFAULT_SCREENSHOTS_FOLDER = "screenshots/puppeteer";
const DEFAULT_SCROLL_CHECK_DELAY = 100;

const appUrl =
  process.env.APP_URL === undefined ? DEFAULT_APP_URL : process.env.APP_URL;

const jestTimeOut =
  parseInt(process.env.JEST_TIMEOUT, 10) || DEFAULT_JEST_TIMEOUT;

const screenshotsFolder =
  process.env.PUPPETEER_SCREENSHOTS_FOLDER === undefined
    ? DEFAULT_SCREENSHOTS_FOLDER
    : process.env.PUPPETEER_SCREENSHOTS_FOLDER;

const scrollCheckDelay =
  process.env.PUPPETEER_SCROLL_CHECK_DELAY || DEFAULT_SCROLL_CHECK_DELAY;

export const settings = { appUrl, jestTimeOut, scrollCheckDelay };

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
