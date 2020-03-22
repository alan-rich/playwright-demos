const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('pageerror', console.log);

  await page.goto('http://whatsmyuseragent.org/', {
    waitUntil: 'domcontentloaded',
  });

  const html = await page.content();
  console.log(html);

  await browser.close();
})();
