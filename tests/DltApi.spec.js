import{test,expect} from "@playwright/test"
import { ApiPage } from "../pages/api"
test("Delete api hit", async({request})=>{
    const dltapiobj = new ApiPage(request)
    const dltapicollection = dltapiobj.dltapidata()
    console.log( dltapicollection.deleteresponse.status())
    console.log(dltapicollection.deletejson)
    expect(dltapicollection.deleteresponse.status()).toBe(200)
})