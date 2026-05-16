import{test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { CartTest } from "../pages/cartPage"

test("cart test", async({page})=>{
    await page.goto("https://www.saucedemo.com/")

    const loginpageforcart= new LoginPage(page)
    
    await loginpageforcart.login(

    "standard_user",
        "secret_sauce"

    )

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    const cartpageforitems= new CartTest(page)

    await cartpageforitems.addcartaction()
    await cartpageforitems.opencartaction()
    await cartpageforitems.removecartaction()

})