import{test,expect} from "@playwright/test"
import { ApiPage } from "../pages/api"
test("send api test", async({request})=>{
    const sendapiobj = new ApiPage(request)
    const collectionapi = await sendapiobj.senddataapi()
    console.log(collectionapi.sendresponse.status())
    console.log(collectionapi.jsonsenddata)
    expect(collectionapi.jsonsenddata.firstName).toBe("jass")
})