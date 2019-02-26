import React from 'react';
import puppeteer from 'puppeteer';

describe('renders without crashing', () => {
  test(
    'we can open the app',
    async () => {
      let browser = await puppeteer.launch({
        headless: true,
      });
      let page = await browser.newPage();

      await page.goto('http://localhost:5000');


      browser.close();
    },
    16000
  );
});
