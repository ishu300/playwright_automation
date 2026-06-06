import {test,expect} from "@playwright/test"
import { MouseHoverPage } from "../pages/Hover"
test("hover on element", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/hovers")
    const hoverelementobj= new MouseHoverPage(page)
    await hoverelementobj.hoverelementaction()
    await expect(hoverelementobj.selectuserdetailselement).toBeVisible()
})