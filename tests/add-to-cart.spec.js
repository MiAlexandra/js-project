const { test, expect } = require('@playwright/test');

test('Add product to the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.click('.inventory_item button:has-text("Add to cart")');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await page.click('.shopping_cart_link');
    const productName = await page.locator('.inventory_item_name').textContent();
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(productName);

    await page.click('.cart_button:has-text("Remove")');
    await expect(page.locator('.cart_item')).toHaveCount(0);
});