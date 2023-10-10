"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num.toString));
let user = [1, 'Val'];
user[0].toFixed;
user[1].charAt(2);
user.push(1);
let mySize = 2;
console.log('mySize => ', mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee2 = {
    name: 'val',
    retire: (myDate) => {
        console.log(myDate);
    },
};
let myEmployee = {
    id: 101,
    name: 'Alister',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let weight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let log2 = (message) => console.log(message);
log2 === null || log2 === void 0 ? void 0 : log2('This is log2 message');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function checkDocument(document) {
    if (typeof document === 'string')
        document.toUpperCase;
    if (document instanceof Document) {
    }
}
function processEvents_2() {
    let x = 1;
    while (x <= 10) {
        console.log('x => ', x);
        x++;
    }
}
//# sourceMappingURL=index.js.map