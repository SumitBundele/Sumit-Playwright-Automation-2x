function Print() {
    console.log("Norml Function");  //Norma Order
}
Print();


function PlaceOrder(Menu, SumitCallback) {
    console.log("Hi,Your Order is placed"); //Hi, your order is placed
    SumitCallback();
}
//First Way
PlaceOrder("Pizza", Print); //Normal Function


//second way

PlaceOrder("Burger", function () {

    console.log("Ananomus function - I am also a function without Name");
});


//third way to call the function


PlaceOrder("Momos", () => {

    console.log("Arrow function  - I am also a function without Name");
});
