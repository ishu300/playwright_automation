import{test,expect} from "@playwright/test"
import { IframePage } from "../pages/iframe"
test("iframe test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/iframe")
    const iframeobj = new IframePage(page)
    await iframeobj.iframeaction()
    await expect(iframeobj.selecttextarea).toHaveText("This code wrote by playwright")
})