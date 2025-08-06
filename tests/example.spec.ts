import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.waitForSelector('#inventory_container');
});

test('Ajouter un article au panier et vérifier le panier', async ({ page }) => {
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.click('.shopping_cart_link');
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});
