class Logger1 {
  constructor(public filename: string) {}

  writeToFile() {
    console.log('Merge conflict resolved: Writing to file => ', this.filename);
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

let person2 = new Person2('Merged', 'Conflict');

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

abstract class GeometricShape {
  abstract calculateArea(): number;
}
class CalculateCircleArea extends GeometricShape {
  constructor(public radius: number) {
    super();
  }

  override calculateArea(): number {
    const pi = Math.PI;
    const area = pi * Math.pow(this.radius, 2);
    return area;
  }
}

let getRadius = new CalculateCircleArea(15);
console.log('radius is ', getRadius.calculateArea());

class CalculateTrianleArea extends GeometricShape {
  constructor(private h: number, private b: number) {
    super();
  }

  override calculateArea(): number {
    const area = (this.h * this.b) / 2;
    return area;
  }
}

let myTriangle = new CalculateTrianleArea(200, 100);
console.log('Triangle Area is: ', myTriangle.calculateArea());
