import{test,expect} from "@playwright/test"
import { DoubleClickPage } from "../pages/Doubleclick"
test("double click and right click test", async({page})=>{
    await page.goto("https://demoqa.com/buttons")
    const clickobj= new DoubleClickPage(page)
    await clickobj.clickbtnactin()
    const confirmdoublemessage = page.locator("#doubleClickMessage")
    const confirmrightclickmsg= page.locator("#rightClickMessage")
    await expect(confirmdoublemessage).toHaveText("You have done a double click")
    await expect(confirmrightclickmsg).toHaveText("You have done a right click")
})