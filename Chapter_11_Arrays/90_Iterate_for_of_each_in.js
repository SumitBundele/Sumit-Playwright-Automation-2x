let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("-------")

//for ...of(cleanest for Values )

for (i of tests) {
    console.log(i);
}

console.log("-------")

tests.forEach((i, Index) => {
    console.log(i, Index);
})

console.log("-------")
//in case of in use veriable
let students = ["sumit", "Teju", "vivan", "shubham"];
for (let j in students) {
    console.log(j, "-->", students[j]); //Index =in
}


console.log("-------")


for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
