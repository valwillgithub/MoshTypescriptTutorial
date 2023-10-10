let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

function render(document: string) {
	console.log(document);
}
//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num.toString));

//Tuples
let user: [number, string] = [1, 'Val'];
user[0].toFixed;
user[1].charAt(2);
user.push(1);

//Enums
const enum Size1 {
	Small = 1,
	Medium = 2,
	Large = 3,
}
const enum Size2 {
	Small = 's',
	Medium = 'm',
	Large = 'l',
}
let mySize: Size1 = Size1.Medium;
console.log('mySize => ', mySize);

//Functions
function calculateTax(income: number, taxYear = 2023): number {
	//if ((taxYear || 2022) < 2022)
	if (taxYear < 2022) return income * 1.2;
	return income * 1.3;
}
calculateTax(10000, 2022);

//Objects
//let employee1 = { id: 1 };
let employee2: {} = {
	name: 'val',
	retire: (myDate: Date) => {
		console.log(myDate);
	},
};

//Type Aliases
type Employee = {
	id: number;
	name: string;
	retire: (date: Date) => void;
};

let myEmployee: Employee = {
	id: 101,
	name: 'Alister',
	retire: (date: Date) => {
		console.log(date);
	},
};
// Union Types
function kgToLbs(weight: number | string) {
	if (typeof weight === 'number') return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

//Intersection Types
let weight: number & string;
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};
//Literals
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';

// Nullable types
function greet(name: string | null) {
	if (name) console.log(name.toUpperCase());
	else console.log('Hello');
}

//Optional Chaining
type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
//if (customer !== null && customer !== undefined) console.log(customer.birthday);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator for Arrays
//if (cutomers !== null && customers !== undefined)
//customers?.[0]

//Optional call operator
let log: any = null;
log?.('a');
let log2: any = (message: string) => console.log(message);
log2?.('This is log2 message');

//Nullish Coaelscing operator is ??
let speed: number | null = null;
let ride = {
	//Falsy values in javascript (undefined, null, '', false, 0)
	//speed: speed !== null? speed : 30
	speed: speed ?? 30, //using Nullish Coaelscing operator
};
//Type Assertion (Tell Typescript what the type should be)
//let phone = document.getElementById('phone') as HTMLInputElement;
//let phone = <HTMLInputElement>document.getElementById('phone');
//console.log(phone.value);

//Unknown types
function checkDocument(document: unknown) {
	//Type Narrowing
	// typeof operator works with primitive types (string, number, boolean, etc
	if (typeof document === 'string') document.toUpperCase;

	// instanceof operator used with custom objects created with classes
	if (document instanceof Document) {
	}
}

//never type: used to annotate functions that never return or always throw an error.
/*
function processEvents(): never {
	while (true) {
		//Read a message from a queue
	}
}

processEvents();
console.log('will not be reached');
*/
function processEvents_2(): void {
	let x: number = 1;
	while (x <= 10) {
		console.log('x => ', x);
		x++;
		//Read a message from a queue
	}
}
