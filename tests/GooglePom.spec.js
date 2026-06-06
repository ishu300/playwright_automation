import{test,expect} from "@playwright/test"
import { GooglePage } from "../pages/Google"

test.beforeEach( async({page})=>{
    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
})

test("test for search inside box", async({page})=>{
   const verifygoogletitleobj= new GooglePage(page)
    await verifygoogletitleobj.homepageaction("instagram")
    await expect(page).toHaveURL(/instagram/)

    const resulttext =await  page.getByText("instagram")
    await expect(resulttext).toBeVisible()

    const imageverify=  page.getByRole("img",{name:"Instagram"})
    await expect(imageverify).toBeVisible()
})