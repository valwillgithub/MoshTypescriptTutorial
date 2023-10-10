"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
function ComponentFactory(value) {
    return (constructor) => {
        console.log('Component factory decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Component factory into DOM');
        };
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component,
    ComponentFactory({ selector: '#myId' }),
    Pipe
], ProfileComponent);
function Log(targetObject, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    };
}
class PersonOne {
    say(message) {
        console.log(message);
    }
}
__decorate([
    Log
], PersonOne.prototype, "say", null);
let p1 = new PersonOne();
p1.say('PersonOne hello val');
function Capitalise(targetObject, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        return typeof result === 'string' ? result.toLocaleUpperCase() : result;
    };
}
class PersonTwo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalise
], PersonTwo.prototype, "fullName", null);
console.log(new PersonTwo('val', 'will').fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let u1 = new User('12345');
console.log(u1.password);
//# sourceMappingURL=decorators.js.map