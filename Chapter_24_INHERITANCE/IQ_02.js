//one PArent -Multiple Chindren == this ic called Herarchical Inheritance

class TestCase { //Parent
    execute() {
        console.log("Running Generic Test");
    }
}

class UnitTest extends TestCase { //Child class 1 calling Parent
    execute() {
        console.log("Running unit Test = checking One Function ")
    }
}

class APITest extends TestCase {//Child class 2 calling Parent
    execute() {
        console.log("Running API Test = Sending HTTP Request")
    }
}

class E2ETest extends TestCase { //Child class 3 calling Parent
    execute() {
        console.log("Running E@E Test = Opening Browser")
    }
}

let Tests = [new UnitTest(), new APITest(), new E2ETest()];
Tests.forEach(function (test_all) {
    test_all.execute();
});
