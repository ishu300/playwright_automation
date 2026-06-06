export class DropDownPage{
    constructor(page){
        this.page=page
        this.selectdropdown= page.locator("#dropdown")
        
    }

    async dropdownaction(){
        await this.selectdropdown.selectOption("2")
        
    }
}