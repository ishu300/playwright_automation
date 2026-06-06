import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { FoorLoop } from "../pages/ForLoop"

test.beforeEach( async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const loginpageforloop= new LoginPage(page)
    await loginpageforloop.login(
        "standard_user",
        "secret_sauce"
    )
    await page.waitForURL("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

})

test("add or remove items to use for loop", async({page})=>{
    const forloopobj= new FoorLoop(page)

    await forloopobj.selectaddtocartitemsaction()

    const addtocartbadge= page.locator('[data-test="shopping-cart-badge"]')
    await expect(addtocartbadge).toHaveText("6")

 await forloopobj.selectaddtocartbadgeaction()
    await page.waitForURL("https://www.saucedemo.com/cart.html")
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
    await forloopobj.selectremoveitemsaction()
    const removecartbadge= page.locator('[data-test="shopping-cart-badge"]')
    await expect(removecartbadge).not.toBeVisible()

})

