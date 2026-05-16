import{test,expect} from "@playwright/test"

test("login test", async({page})=>{
  await  page.goto("https://www.saucedemo.com/")
   await page.locator("input[name='user-name']").type("standard_user")
  await  page.locator("input[name='password']").type("secret_sauce")
  await page.locator ("#login-button").click()
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  await page.getByRole("button",{name:"open menu"}).click()
  await page.getByRole("link",{name:"logout"}).click()
  await expect(page).toHaveURL("https://www.saucedemo.com/")
})