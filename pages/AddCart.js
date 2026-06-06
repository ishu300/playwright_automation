export class AddCartPage{
    constructor(page){
        this.page=page
        this.addtocartbtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.opencartbox= page.locator('[data-test="shopping-cart-link"]')
    }

    async addcartaction(){
     await this.addtocartbtn.click()
     await this.opencartbox.click()

  }
}