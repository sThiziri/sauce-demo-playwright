import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';

test('click menu @tc-001-01 @menu', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
  //await page.click('#react-burger-menu-btn');

  const menuPage:MenuPage = new MenuPage(page);
  await menuPage.clickMenu();
});

test('click menuAll @tc-001-01 @menu @All', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 

  const menuPage:MenuPage = new MenuPage(page);
  await menuPage.clickMenu();
  await menuPage.clickMenuAll();
});

test('click menu About @tc-001-01 @menu @About', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 

  const menuPage:MenuPage = new MenuPage(page);
  await menuPage.clickMenu();
  await menuPage.clickMenuAbout();
  expect(page.url()).toBe('https://saucelabs.com/'); 
});

test('click menu Logout @tc-001-01 @menu @Logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 

  const menuPage:MenuPage = new MenuPage(page);
  await menuPage.clickMenu();
  await menuPage.clickMenuLogout();
  expect(page.url()).toBe('https://www.saucedemo.com/'); 
});

test('click menu Reset App State @tc-001-01 @menu @Reset', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 

  const menuPage:MenuPage = new MenuPage(page);
  await menuPage.clickMenu();
  await menuPage.clickMenuReset();
});
