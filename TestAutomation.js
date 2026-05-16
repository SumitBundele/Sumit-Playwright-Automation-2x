// install first:
// npm init -y
// npm install -D @playwright/test
// npx playwright install

const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

    // 1. Open the login page
    await page.goto('https://example.com/login');

    // 2. Enter username
    await page.fill('#username', 'testuser');

    // 3. Enter password
    await page.fill('#password', 'testpassword');

    // 4. Click login button
    await page.click('#loginButton');

    // 5. Validate successful login (example check)
    await expect(page).toHaveURL(/dashboard/);

    // OR check element after login
    // await expect(page.locator('text=Welcome')).toBeVisible();

});