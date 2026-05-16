import{test,expect} from "@playwright/test"

//login website

test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await  page.locator("input[name='user-name']").type("standard_user")
  await  page.locator("input[name='password']").type("secret_sauce")
  await  page.locator("#login-button").click()
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

// add product in cart

test("add product test", async({page})=>{
    await page.locator('[data-test= "add-to-cart-sauce-labs-bike-light"]').click()
    await page.locator('[data-test="shopping-cart-link"]').click()
    await page.locator('[data-test="checkout"]').click()
    await page.locator('input[data-test="firstName"]').type("ishu")
    await page.locator('input[data-test="lastName"]').type("saini")   
    await page.locator('[data-test = "postalCode"]').type("12345")
    await page.locator('[data-test="continue"]').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await page.getByRole("button",{name:"Finish"}).click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
})

