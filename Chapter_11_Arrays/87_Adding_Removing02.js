let arr = [1, 2, 3]

arr.push(4, 5, 6);
console.log(arr);

// Splice (Start:number ,deleteCount?: .....itemToAdd)

arr = [1, 2, 3, 4, 5, 6]
//Indexe = 0,1,2,3,4,5

// arr.splice(2, 1);
// console.log(arr);

//Splice (Start:number ,deleteCount?: .....itemToAdd)

// delectcount =0
// itemtoadd =99
// arr.splice(2, 0, 99);
// console.log(arr);

//Replace 

// arr.splice(2, 1, 99);
// console.log(arr);

arr = [1, 2, 3, 4, 5, 6, 7]
arr.splice(2, 2, 10, 20);
console.log(arr);

//3& 4 Replaced by 10,20



