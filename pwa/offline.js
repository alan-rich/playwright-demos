const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ offline: false });
  const page = await context.newPage();

  await page.goto('https://gocovid19.netlify.app/');
  await page.screenshot({ path: 'screenshots/offline.png' });

  await browser.close();
})();
