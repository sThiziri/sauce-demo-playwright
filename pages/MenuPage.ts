import { Page } from "@playwright/test";

class MenuPage{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    elements = {
        menubar: ()=>this.page.getByRole('button', { name: 'Open Menu' }),
    
    }

    async clickMenu(){
        await this.elements.menubar().click();
    }
}

export default  MenuPage;