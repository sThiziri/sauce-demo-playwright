import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CheckoutPage from '../pages/CheckoutPage';


test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  const ip: InventoryPage = new InventoryPage(page);
  ip.elements.cliquereSurPanier().click();
  const cartPage: CartPage = new CartPage(page);
  cartPage.elements.checkout().click();
  

})
test('continuer le shopping', {tag :['@tc-001','@regression']}, async ({ page }) => {
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
});

test('confirmer l achat', {tag :['@tc-001','@regression']}, async ({ page }) => {
    const checkoutPage: CheckoutPage = new CheckoutPage(page);
    checkoutPage.saisirFirstName('Arezki');
    checkoutPage.saisirLastName('Belaid');
    checkoutPage.saisirZipCode('12345');
    checkoutPage.verifier();
    await expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html'); 
});