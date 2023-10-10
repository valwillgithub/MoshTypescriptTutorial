/* Open Closed Principle
//Classes should be open for extension and closed for modification
*/
//Inheritance
class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName() {
		//return this.firstName + ' ' + this.lastName;
		return `${this.firstName} ${this.lastName}`;
	}

	//protected walk() {
	walk() {
		console.log(`${this.fullName} is Walking`);
	}
} //Class
class Student extends Person {
	constructor(public studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}

	takeTest() {
		console.log('Taking a test');
	}
}

class Teacher extends Person {
	override get fullName() {
		//return 'Professor ' + this.firstName +' '+ this.lastName;
		return 'Professor ' + super.fullName;
	}
}

let teacher = new Teacher('John', 'Lativi');
console.log(teacher.fullName);

//Polymorphism
printName([new Student(1, 'John', 'Smith'), new Teacher('Teacher', 'Kenny')]);

function printName(people: Person[]) {
	for (let person of people) {
		console.log(person.fullName);
		person.walk();
	}
}
