import{test,expect} from "@playwright/test"
import { NewTabPage } from "../pages/newtab"

test("new tab test", async({page, context})=>{
     await page.goto("https://the-internet.herokuapp.com/windows")
     const createnewtabobj = new NewTabPage(page)
     await createnewtabobj.newtabaction(context)
})