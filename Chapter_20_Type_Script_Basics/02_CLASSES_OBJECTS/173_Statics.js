class Student {
    constructor(name_Student, age, phone) { //non Static values
        this.name_Student = name_Student;
        this.age = age;
        this.phone = phone;

    }

    static name = "Paywright2x"; //Static veriable with Static values
    static MentorName = "Pramod";  //Static veriable with Static values

    static display() {
        console.log("Hi i am a common static function"); //Static Function can be used in Common

    }

}

const S1 = new Student("Sumit", 33, "9923664649");//S1 is object Reference
const S2 = new Student("Vivan", 30, "9928864649");//S2  is object Reference

//Non Static values wil be different for different objects
console.log(S1.name_Student); //S1 is object Reference
console.log(S2.name_Student);//S2  is object Reference

//Static values wil be same for all the objects
console.log(Student.name);
console.log(Student.MentorName);

console.log(Student.display());
