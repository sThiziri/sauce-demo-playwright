import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';

test('click menu', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
  
  const menuPage:MenuPage = new MenuPage(page);
  menuPage.clickMenu(); 
  
});

