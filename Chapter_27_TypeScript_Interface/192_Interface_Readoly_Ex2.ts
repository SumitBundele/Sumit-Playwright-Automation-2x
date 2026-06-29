interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 };
//point.x=5;--This is not possiable as it is set as readonly

//Readonly Array
interface Data {
    readonly item: readonly number[];
}
