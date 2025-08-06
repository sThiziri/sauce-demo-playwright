import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

test('@tc-002 @produit @regression - Vérification de la page Inventory et redirection panier', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();

  
  const inventoryPage = new InventoryPage(page);

  const pageVisible = await inventoryPage.estPageProduitVisible();
  expect(pageVisible).toBe(true);

  const nbProduits = await inventoryPage.getNombreDeProduits();
  expect(nbProduits).toBeGreaterThan(0);

  
  const boutonPanierVisible = await inventoryPage.estBoutonPanierVisible();
  expect(boutonPanierVisible).toBe(true);

  // Clic sur le bouton panier et vérifier la redirection
  await inventoryPage.cliquerSurPanier();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});
