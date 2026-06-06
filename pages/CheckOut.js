export class CheckOutPage{
    constructor(page){
        this.page=page
        this.checkoutbtn= page.getByRole('button',{name:"Checkout"})
        this.firstnametext= page.locator('[data-test="firstName"]')
        this.lastnametext= page.locator('[data-test="lastName"]')
        this.postalcodetext=page.locator('[data-test="postalCode"]')
        this.continueclickbtn=page.locator('[data-test="continue"]')
        this.finishclickbtn=page.locator('[data-test="finish"]')
    }

  async checkbtnaction(firstname,lastname,postalcode){
    await this.checkoutbtn.click()
    await this.firstnametext.type(firstname)
    await this.lastnametext.type(lastname)
    await this.postalcodetext.type(postalcode)
    await this.continueclickbtn.click()
    await this.finishclickbtn.click()
  }

  

}