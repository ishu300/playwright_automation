import{test,expect} from "@playwright/test"
test("fail test to check ci pipeline in jenkins", async({page})=>{
    expect(true).toBe(false);
})