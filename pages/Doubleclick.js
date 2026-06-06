export class DoubleClickPage{
    constructor(page){
        this.page=page
        this.selectdoublebtn = page.getByRole("button",{name:"Double Click Me"})
        this.selectrightclickbtn = page.getByRole("button",{name:"Right Click Me"})
    }
async clickbtnactin(){
    await this.selectdoublebtn.dblclick()
    await this.selectrightclickbtn.click({button:"right"})
}

}