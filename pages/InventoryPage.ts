import { Page } from "@playwright/test";

class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  elements = {
    productItems: () => this.page.locator('.inventory_item'),
    pageTitle: () => this.page.locator('.title'),
    cartButton: () => this.page.locator('.shopping_cart_link'),
  };

  async getNombreDeProduits(): Promise<number> {
    return await this.elements.productItems().count();
  }

  async estPageProduitVisible(): Promise<boolean> {
    return await this.elements.pageTitle().isVisible();
  }

  async estBoutonPanierVisible(): Promise<boolean> {
    return await this.elements.cartButton().isVisible();
  }

  async cliquerSurPanier(): Promise<void> {
    await this.elements.cartButton().click();
  }
}

export default InventoryPage;
