
//**The** `**override**`
// **keyword- explicitly marks that a child method is intentionally overriding a parent method**

class BaseTest {
    setup(): void {
        console.log("BaseTest1: Open Browser");
    }
    teardown(): void {
        console.log("BaseTest1: Close Browser");
    }

}

class TestCase1 extends BaseTest {
    override setup(): void { //override -explicitly override the setup method of BaseTest class
        super.setup(); // Call the base class setup method
        console.log("TestCase1: Open Browser");
        console.log("TestCase1: Login to Application");
    }
}

class APITestCase extends BaseTest {
    override setup(): void { //override keyword  -explicitly override the setup method of BaseTest class
        super.setup(); // Call the base class setup method
        console.log("APITestCase: No Browser");
        console.log("APITestCase: Configure API Settings");
    }
}

let test = new TestCase1();
test.setup();
test.teardown();

console.log("---------------------------------------------------");
let test2 = new APITestCase();
test2.setup();
test2.teardown();
