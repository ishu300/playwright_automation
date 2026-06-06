export class IfElsePage{
    constructor(page){
        this.page=page
        this.selectusernamefield= page.locator('[placeholder="Username"]')
        this.selectpswrdfield = page.locator('[placeholder="Password"]')
        this.selectsubmitbtn = page.locator('[data-test="login-button"]')
        this.selectaddtocartbtn = page.getByRole("button",{name:"Add to cart"})
        this.selectaddcartbadge= page.locator('[data-test="shopping-cart-badge"]')
        this.clickoncartlink= page.locator('[data-test="shopping-cart-link"]')
        this.selectremovecartbtn= page.getByRole("button",{name:"Remove"})
    }


async filllogincredentials(username, password){
    const usernameinput= await this.selectusernamefield.inputValue()
    const pswrdinput = await this.selectpswrdfield.inputValue()
    if(usernameinput === "" && pswrdinput === ""){
      await this.selectusernamefield.fill(username)
     await  this.selectpswrdfield.fill(password)
      await this.selectsubmitbtn.click()
    } else {
        console.log("fields are already filled")
    }
}

async addtocartaction(){
    const countaddcartbtn = await this.selectaddtocartbtn.count()
   for(let i=0; i<countaddcartbtn; i++){
    await this.selectaddtocartbtn.nth(0).click()
   }
  await this.clickoncartlink.click()
  const countcartbadge= await this.selectaddcartbadge.count()
  const countremovebtn= await this.selectremovecartbtn.count()
  if(countcartbadge === countaddcartbtn){
     for(let i=0; i<countremovebtn; i++){
        await this.selectremovecartbtn.nth(0).click()
     } 
  }else{
        console.log("cart already empty")
     }

}

}

 