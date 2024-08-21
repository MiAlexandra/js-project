const { test, expect } = require('@playwright/test');

test('Perform Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
    await expect(page.locator('.inventory_item')).toHaveCountGreaterThan(1);
});