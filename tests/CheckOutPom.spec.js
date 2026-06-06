import{test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { AddCartPage } from "../pages/AddCart"
import { CheckOutPage } from "../pages/CheckOut"

test.beforeEach(async({page})=>{
   await page.goto("https://www.saucedemo.com/")
    const loginpageforcheckout= new LoginPage(page)

    await loginpageforcheckout.login(

         "standard_user",
        "secret_sauce"
    )

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
   
     const addtocartforcheckout= new AddCartPage(page)

     await addtocartforcheckout.addcartaction()

})



    test("finish test", async({page})=>{
        const finishordertest= new CheckOutPage(page)

        await finishordertest.checkbtnaction(
            "ishu",
            "saini",
            "247232"
        )
    })