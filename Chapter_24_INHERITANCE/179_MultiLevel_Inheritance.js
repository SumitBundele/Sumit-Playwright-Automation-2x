//Grandfather -> Father->SOn
//BasePage->Authpage->AdminPage
class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN]" + this.name);
    }
}

//class B
class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN]" + user);
    }
}
//Class C
class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel") //class A value passing
    }
    manageUser() {
        console.log("[Admin] Managing Users")
    }
}
let admin = new AdminPage();
admin.open(); //call grandfather function -- Class A
admin.login("SuperAdmin"); //call father function  ---Class B
admin.manageUser();//call my function --Class C
