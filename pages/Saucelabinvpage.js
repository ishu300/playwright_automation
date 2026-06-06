export class InventoryPage{
    constructor(page){
        this.page=page
        this.selectitemfirst=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.selectitemsecond=page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.selectitemthird=page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
       this.selectitemwithbtn=page.getByRole("button",{name:"Add to cart"})
       
        this.carticonclick=page.locator('[data-test="shopping-cart-link"]')
        
    }

async selectitemaction(){
    await this.selectitemfirst.click()
    await this.selectitemsecond.click()
    await this.selectitemthird.click()
}

async selectitemwithbtnaction(){
    await this.selectitemwithbtn.nth(0).click()
    await this.selectitemwithbtn.nth(1).click()
}

async carticonclickaction (){
   await this.carticonclick.click()
}

}