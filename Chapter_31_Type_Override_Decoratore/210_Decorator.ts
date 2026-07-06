// - Decorators are special functions that ATTACH to classes, methods, or properties
//  using the `@` symbol. They modify behavior without changing original code.


// - Special `@functions`  that attach to classes, methods,
// or properties Modify behavior without changing original code

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const Original = descriptor.value;
    descriptor.value = function (...arge: any[]) {
        console.log(`called ${methodName} with args`, arge);
        return Original.apply(this, arge);
    }

}
class Claculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}
const calc = new Claculator();
calc.add(2, 3);
