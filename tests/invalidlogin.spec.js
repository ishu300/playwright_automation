import{test,expect} from "@playwright/test"

test("invalid login test", async({page})=>{
  await  page.goto("https://www.saucedemo.com/")
   await page.locator("input[name= 'user-name']")
   await page.locator("input[name= 'password]")
   await page.locator("#login-button").click()
   await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username is required")
})