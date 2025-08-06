import { Page } from "@playwright/test";

class CheckoutPage{
    readonly page : Page;
    
    constructor(page: Page){
        this.page = page;
    }
    elements = {
        firstName: ()=>this.page.locator('#first-name'),
        lastName:()=> this.page.locator('#last-name'),
        zipCode: ()=>this.page.locator('#postal-code'),
        continueBtn: ()=>this.page.getByRole('button', {name: 'Continue'}),
        cancelBtn: ()=>this.page.getByRole('button', {name: 'Cancel'}),
        ctnShoppBtn: ()=>this.page.getByRole('button', {name: 'Continue Shopping'})
    
    }
    async saisirFirstName(fn: string){
        await this.elements.firstName().fill(fn);
    }
    async saisirLastName(ln: string){
        await this.elements.lastName().fill(ln);
    }
    async saisirZipCode(zip: string){
        await this.elements.zipCode().fill(zip);
    }
    async verifier(){
        await this.elements.continueBtn().click();
    }
    async annuler(){
        await this.elements.cancelBtn().click();
    }
    async shopping(){
        await this.elements.ctnShoppBtn().click();
    }
    
}

export default  CheckoutPage;