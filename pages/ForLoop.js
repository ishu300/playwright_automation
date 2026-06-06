export class FoorLoop{
    constructor(page){
        this.page=page
        this.selectaddtocartitems= page.getByRole("button",{name:"Add to cart"})
        this.selectaddtocartbadge= page.locator('[data-test="shopping-cart-link"]')
        this.selectremoveitems= page.getByRole("button",{name:"Remove"})
    }

    async selectaddtocartitemsaction(){
        const countcartitems= await this.selectaddtocartitems.count()
        for(let i=0; i<countcartitems; i++){
            await this.selectaddtocartitems.first().click()
        }
    }

  async selectaddtocartbadgeaction(){
    await this.selectaddtocartbadge.click()
  }

 async selectremoveitemsaction(){
    const countremovebtn= await this.selectremoveitems.count()
    console.log(countremovebtn)
    for(let i=0; i<countremovebtn; i++){
        await this.selectremoveitems.nth(0).click()
    }
 }

}