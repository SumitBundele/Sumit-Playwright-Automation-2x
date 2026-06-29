class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Opening the page");
    }
    close() {
        console.log("closing thge page");
    }
}


class Login extends BasePage {

}//I donet have any function but i can use my parent BasePage() function -
//concept of Inheritance

const Page = new Login
Page.open(); //using parent function
Page.close(); //calling parent functuions
