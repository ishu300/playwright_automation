export class LoginPage{

constructor(page){
     this.page=page
     this.userinputname= page.locator('[data-test="username"]')
     this.userinputpswrd= page.locator('[data-test="password"]')
     this.userclickbtn= page.locator('[data-test="login-button"]')
}

async login(username,password){
    await this.userinputname.fill(username)
    await this.userinputpswrd.fill(password)
    await this.userclickbtn.click()
}


}