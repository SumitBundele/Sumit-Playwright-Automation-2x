class BasePage {
    verify() {
        console.log("Verifing BasePage");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify : user name field exist in BasePage");
        console.log("Verify : Password field exist in BasePage");
        console.log("Verify : Login Button exist in BasePage");
    }
}

class Dashboard extends BasePage {
    verify() {
        console.log("Verify : Welcome Message shown");
        console.log("Verify : Sidebar Menu Loaded");

    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify : Cart Item Displayed");
        console.log("Verify : Total Price is correct");

    }
}
let Pages = [new LoginPage(), new Dashboard(), new CartPage()];
Pages.forEach(function (All_Pages) {
    All_Pages.verify();
    console.log("------")
});
