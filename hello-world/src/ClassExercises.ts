class Logger1 {
	constructor(public filename: string) {}

	writeToFile() {
		console.log('Writing to file again not => ', this.filename);
	}
}

let log1 = new Logger1('longfile.txt');
log1.writeToFile();

class Person2 {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

let person2 = new Person2('James', 'Hightower');
console.log(person2.fullName);

class Employee2 extends Person2 {
	constructor(public salary: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}
}

let emp = new Employee2(3000, 'Willi', 'Wonker');
console.log('emp', emp);
interface IAdress {
	street: string;
	cirty: string;
	zipCode: number;
}

interface IEmployee {
	name: string;
	salary: number;
	address: IAdress;
}
