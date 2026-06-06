import{test,expect} from "@playwright/test"
import { ApiPage } from "../pages/api"
test("put api hit", async({request})=>{
    const putapiobj = new ApiPage(request)
    const putapicollection = await putapiobj.putapidata()
    console.log(putapicollection.putdata.status())
    console.log(putapicollection.putapijson)
    expect(putapicollection.putdata.status()).toBe(200)
})