import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { InventoryPage } from "../pages/Saucelabinvpage"

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const loginpageforwait= new LoginPage(page)
    await loginpageforwait.login(
         "standard_user",
        "secret_sauce"
    )
     await page.waitForURL("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("using explicitwait for item loading", async({page})=>{
    
    await page.waitForSelector('[data-test="inventory-item-name"]')
    const addtocartobj= new InventoryPage(page)

    await addtocartobj.selectitemaction()
// use count for count inventory items
    const inventoryitemscheck= page.locator('[data-test="inventory-item"]')
   const inventcountstep=  await inventoryitemscheck.count()
   console.log(inventcountstep)
     expect(inventcountstep).toBe(6)

// use nth() to select inventory item

await addtocartobj.selectitemwithbtnaction()


// use count to count cartitem
     await addtocartobj.carticonclickaction()

     const addtocartitem=page.locator('[data-test="inventory-item"]')
     const addtocartitemstore= await addtocartitem.count()
     console.log(addtocartitemstore)
     await expect(addtocartitemstore).toBe(5)


})



