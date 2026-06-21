import { test, expect } from '@playwright/test'
//page --Inbuilt Fixture Automatically given to you in playwright,

//these are the function you can directly use in Playwright
test("Verify the Title will be TTA Cart", async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);
});
