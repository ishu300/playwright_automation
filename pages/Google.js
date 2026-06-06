export class GooglePage{
    constructor(page){
        this.page=page
        this.searchbox= page.getByRole("combobox",{name:"Search"})
        this.clicksearchbtn= page.getByRole("button",{name:"Google Search"})
        
    }

   async homepageaction(searchanything){
   await this.searchbox.fill(searchanything)
   await this.clicksearchbtn.press("Enter")
   
   }

  
}