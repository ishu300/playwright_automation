export class IframePage{
    constructor(page){
        this.page=page
        this.selectiframe= page.frameLocator("#mce_0_ifr")
        this.selecttextarea = this.selectiframe.locator("p")
    }

    async iframeaction(){
        await this.selecttextarea.click()
        await this.page.keyboard.press("Control+A")
         await this.page.keyboard.press("Backspace")
        await this.selecttextarea.fill("This code wrote by playwright ")
    }

}