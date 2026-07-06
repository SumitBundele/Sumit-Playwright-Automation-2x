function Logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("Called Decorator ");
        return originalMethod.apply(this, args);
    };
}

class Greeter {

    @Logged
    hello() {
        return "Hi sumit";
    }
}
let r = new Greeter().hello();
console.log(r);
