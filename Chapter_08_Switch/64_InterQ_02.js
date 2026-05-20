let x = 10;
//the first will run automatically 
// and the second will never run because of the first case
switch (x) {
    case 10:
        let b1 = 1
        console.log(b1);
        break;
    case 10:
        let b2 = 2
        console.log(b2);
        break;

    default:
        console.log("Invalid value");
}
