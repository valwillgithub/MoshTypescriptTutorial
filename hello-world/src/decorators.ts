/* Class Decorators */
function Component(constructor: Function) {
	console.log('Component decorator called');
	constructor.prototype.uniqueId = Date.now();
	constructor.prototype.insertInDOM = () => {
		console.log('Inserting the component in the DOM');
	};
}

function Pipe(constructor: Function) {
	console.log('Pipe decorator called');
	constructor.prototype.pipe = true;
}

/* Parameterised Decorators */
type ComponentOptions = {
	selector: string;
};
function ComponentFactory(value: ComponentOptions) {
	return (constructor: Function) => {
		console.log('Component factory decorator called');
		constructor.prototype.options = value;
		constructor.prototype.uniqueId = Date.now();
		constructor.prototype.insertInDOM = () => {
			console.log('Component factory into DOM');
		};
	};
}

@Component
@ComponentFactory({ selector: '#myId' })
@Pipe
class ProfileComponent {}

/* Method decorators */
function Log(
	targetObject: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	const original = descriptor.value as Function;
	descriptor.value = function (...args: any) {
		console.log('Before');
		original.call(this, ...args);
		console.log('After');
	};
}

class PersonOne {
	@Log
	say(message: string) {
		console.log(message);
	}
}
let p1 = new PersonOne();
p1.say('PersonOne hello val');

/* Accessor decorators (getters and setters) */
function Capitalise(
	targetObject: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	const original = descriptor.get;
	descriptor.get = function () {
		// if(original !== null && original !== undefined){
		// 	original.call(this)
		// }
		const result = original!.call(this);
		return typeof result === 'string' ? result.toLocaleUpperCase() : result;
	};
}
class PersonTwo {
	constructor(public firstName: string, public lastName: string) {}
	@Capitalise
	get fullName() {
		//return 0;
		return `${this.firstName} ${this.lastName}`;
	}
}
//let p2 = new PersonTwo('val', 'will');
//console.log(p2.fullName);
console.log(new PersonTwo('val', 'will').fullName);

/* Property decorators */
function MinLength(length: number) {
	return (target: any, propertyName: string) => {
		let value: string;
		const descriptor: PropertyDescriptor = {
			get() {
				return value;
			},
			set(newValue: string) {
				if (newValue.length < length)
					throw new Error(
						`${propertyName} should be at least ${length} characters long`
					);
				value = newValue;
			},
		};
		Object.defineProperty(target, propertyName, descriptor);
	};
}

class User {
	@MinLength(4)
	password: string;
	constructor(password: string) {
		this.password = password;
	}
}

let u1 = new User('12345');
console.log(u1.password);
