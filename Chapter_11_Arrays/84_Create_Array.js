//Create Array//Array literals (Preffered)
let browser = ["Chrom", "Firefox", "Safari"];
//Array constructer

let scores = new Array(3);// here 3 is lngth
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;

let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);
//Arrays.of 
let numbers = new Array(100, 200, 300, 400, 500);
console.log(numbers)

let test = Array.of(10, 20, 30, 40, 50);
console.log(test)

//Arrays.from
let chars = Array.from("Hello")
console.log(chars);
//Two dimentional Array
let Num = Array.from("12384656")
console.log(Num);




