import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

test('@tc-002 @produit @regression - Affichage des produits sur la page Inventory', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();

  
  const inventoryPage = new InventoryPage(page);

  
  const visible = await inventoryPage.estPageProduitVisible();
  expect(visible).toBe(true);

  
  const nombreDeProduits = await inventoryPage.getNombreDeProduits();
  expect(nombreDeProduits).toBeGreaterThan(0);
});
