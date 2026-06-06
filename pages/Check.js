export class CheckorCheckOutPage{
    constructor(page){
        this.page=page
        this.selectcheckbox= page.locator('[type="checkbox"]')
        
    }

    async selectcheckboxaction(){
        await this.selectcheckbox.nth(0).check()
    }
}