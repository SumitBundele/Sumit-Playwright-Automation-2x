//Class A

class baseTest {
    setup() {
        console.log("Base Test1: OPen Browser")
    }
}

class APITest extends baseTest {
    setup() {
        console.log("APITest1 : Open Browser");
    }
}


let test = new APITest(); //as Class B is called it will pick Class B  setup () Method
test.setup();

//if there is not setup ()method present in Class B
//  --then by default it will call Class A Setup() Method

class baseTest2 {
    setup2() {
        console.log("Base Test2: OPen Browser")
    }
}

class APITest2 extends baseTest2 {
    // setup() {
    //     console.log("APITest : Open Browser");
    // }
}


let test2 = new APITest2(); //as Class B is called it will pick Class B  setup () Method
test2.setup2();
