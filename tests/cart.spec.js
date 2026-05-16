import{test,expect} from "@playwright/test"
// login test
test.beforeEach( async({page})=>{
   await page.goto("https://www.saucedemo.com/")
  await  page.locator("input[name='user-name']").type("standard_user")
  await  page.locator("input[name='password']").type("secret_sauce")
  await  page.locator("#login-button").click()
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
   
})

// add to cart test

test("add to cart test", async({page})=>{
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
   await page.locator(".shopping_cart_link").click()
   await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")


}
)