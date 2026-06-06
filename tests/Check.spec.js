import{test,expect} from "@playwright/test"
import { CheckorCheckOutPage } from "../pages/Check"

test("checkbox test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes")
    const checkboxobj = new CheckorCheckOutPage(page)
    await checkboxobj.selectcheckboxaction()
    
})