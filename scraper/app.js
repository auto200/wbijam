const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });

  //step 1 - get list of wbijam episode pages
  const page = await browser.newPage();
  await page.goto("https://jujutsu.wbijam.pl/pierwsza_seria.html");

  const wbijamEpisodePages = await page.evaluate(() =>
    [...document.querySelectorAll(".lista td a")].map((el) => el.href).reverse()
  );

  const cdaEpisodeSrcs = wbijamEpisodePages.map(async (episodePage) => {
    const page = await browser.newPage();

    await page.goto(episodePage);
    const wbijamCDAPlayerPageId = await page.evaluate(() =>
      [...document.querySelectorAll(".lista td")]
        .find((el) => el.innerText === "cda")
        .parentElement.querySelector("span")
        .getAttribute("rel")
    );

    await page.goto(
      `https://jujutsu.wbijam.pl/odtwarzacz-${wbijamCDAPlayerPageId}.html`
    );
    const cdaVideoId = await page.evaluate(() => {
      const iframe = [...document.querySelectorAll("iframe")].find((el) =>
        el.src.includes("cda")
      );
      const url = iframe.src.split("/");
      return url[url.length - 1];
    });

    await page.goto(`https://www.cda.pl/video/${cdaVideoId}`);
    const directCdaVideoSrc = await page.evaluate(
      () => document.querySelector("video").src
    );

    await page.close();
    return directCdaVideoSrc;
  });

  console.log(await Promise.all(cdaEpisodeSrcs));

  await browser.close();
})();
