"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log(`${this.fullName} is Walking`);
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Lativi');
console.log(teacher.fullName);
printName([new Student(1, 'John', 'Smith'), new Teacher('Teacher', 'Kenny')]);
function printName(people) {
    for (let person of people) {
        console.log(person.fullName);
        person.walk();
    }
}
//# sourceMappingURL=objectOriented2.js.map