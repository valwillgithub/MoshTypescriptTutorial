//Abstract class
abstract class Shape {
	constructor(public color: string) {}

	abstract render(): void;
} //Class

class Circle extends Shape {
	constructor(public radius: number, color: string) {
		super(color);
	}

	override render(): void {
		console.log('Rendering a circle');
	}
}

//Interface
interface ICalendar {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}

class GoogleCalendar implements ICalendar {
	//name: string;
	constructor(public name: string) {}
	addEvent(): void {
		throw new Error('Method not implemented.');
	}
	removeEvent(): void {
		throw new Error('Method not implemented.');
	}
}
/*
 EXERCISES
 */
class Logger {
	constructor(public file: string) {}

	writeFile(message: string) {
		console.log(message);
	}
}

class Person1 {
	constructor(public firstName: string, public lastName: string) {}
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

class Employee1 extends Person1 {
	constructor(public salary: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}
}

interface Address {
	street: string;
	city: string;
	zipCode: string;
}

interface Employee2 {
	name: string;
	salary: number;
	address: Address;
}
