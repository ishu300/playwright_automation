import {test,expect} from "@playwright/test"
import { IfElsePage } from "../pages/Ifelse"

test("fill username and pswrd to use ifelse",async({page})=>{
  await  page.goto("https://www.saucedemo.com/")
  const loginpageifelse = new IfElsePage(page)
      await loginpageifelse.filllogincredentials(
  
           "standard_user",
          "secret_sauce"
      )
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

      await loginpageifelse.addtocartaction()
      


    })

