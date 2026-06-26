class BaseTest {
    setup() {
        console.log("Base : Open Browser")
    }
    teardown() {
        console.log("Base : Close Browser ")
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup()
        //usieng "Super" ->it will call parent class first function first and the child class function
        //if parent nat called using super -
        console.log("UI : Maximize window");
    }

    teardown() {
        console.log("UI : Take Screenshot");
        super.teardown();
    }

}

let test = new UITest();
test.setup();
