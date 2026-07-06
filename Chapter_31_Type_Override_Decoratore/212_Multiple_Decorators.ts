function First(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log("First");
        return original.apply(this, args);
    };
}

function Second(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log("Second");
        return original.apply(this, args);
    };
}

class Dog {
    @First
    @Second
    bark() {
        return "Woof";
    }
}

console.log(new Dog().bark());
