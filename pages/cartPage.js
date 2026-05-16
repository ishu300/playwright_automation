export class CartTest{
    constructor(page){
        this.page=page
        this.addtocartbtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.opencartbox= page.locator('[data-test="shopping-cart-link"]')
        this.removecartitem= page.locator('[data-test="remove-sauce-labs-backpack"]')
        }

  async addcartaction(){
     await this.addtocartbtn.click()
  }

  async opencartaction(){
    await this.opencartbox.click()
  }

  async removecartaction(){
    await this.removecartitem.click()
  }

}