require("dotenv").config();

const launch = {
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

module.exports = { launch };
