export class NewTabPage{
    constructor(page){
        this.page=page
        this.selectlink= page.getByRole("link",{name:"Click Here"})
    }

async newtabaction(context){
   const newtabpromise= context.waitForEvent("page")
   await this.selectlink.click()
   const savenewtabobj= newtabpromise
   return savenewtabobj
}

}