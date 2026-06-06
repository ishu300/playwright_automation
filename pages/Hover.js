export class MouseHoverPage{
    constructor(page){
        this.page=page
        this.selecthoverelement= page.locator(".figure")
        this.selectuserdetailselement= page.getByText("name: user1 View profile")
    }

    async hoverelementaction(){
        this.selecthoverelement.nth(0).hover()
    }
}