import{test,expect} from "@playwright/test"
import { ApiPage } from "../pages/api"
test("get api test", async({request})=>{
   const apitestobj = new ApiPage(request)
   const getjsondata = await apitestobj.apidataget()
   
   console.log(getjsondata.apiresponse.status())
   console.log(getjsondata.jsondata)
   console.log(getjsondata.jsondata.products[0])
    expect(getjsondata.apiresponse.status()).toBe(200)

    

})