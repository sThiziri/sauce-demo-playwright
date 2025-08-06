import { Page } from "@playwright/test";

class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  elements = {
    productItems: () => this.page.locator('.inventory_item'), 
    pageTitle: () => this.page.locator('.title'), 
  };

  async getNombreDeProduits(): Promise<number> {
    return await this.elements.productItems().count();
  }

  async estPageProduitVisible(): Promise<boolean> {
    return await this.elements.pageTitle().isVisible();
  }
}

export default InventoryPage;
