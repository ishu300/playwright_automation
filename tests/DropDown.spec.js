import{test,expect} from "@playwright/test"
import { DropDownPage } from "../pages/Dropdown"

test("select dropdown options", async({page})=>{
    page.goto("https://the-internet.herokuapp.com/dropdown")
    const dropdownobj = new DropDownPage(page)
    await dropdownobj.dropdownaction()
    const optiondropwdown = page.locator("#dropdown")
    await expect(optiondropwdown).toHaveValue("2")
})