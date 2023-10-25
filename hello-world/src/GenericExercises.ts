function echo<T>(obj: T) {
  return obj;
}

function printName1<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

class UniqueIdentifier<T> {
  constructor(public uniqueID: T) {}

  printUniqueId() {
    console.log(this.uniqueID);
  }
}

let uniqueNum = new UniqueIdentifier(23456);
uniqueNum.printUniqueId();

let uniqueStr = new UniqueIdentifier('valdorama');
uniqueStr.printUniqueId();

function anyTypeFunction<T>(arg: T): T {
  return arg;
}

let anyType = anyTypeFunction({ name: 'williams', age: 23 });
console.log('anyType => ', anyType);

type typeToMap = {
  name: string;
  age: number;
  year: Date;
};

type makeOptional<T> = {
  [K in keyof T]?: T[K];
};

type makeReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let myOptionalType: makeOptional<typeToMap> = {
  name: 'Silvester',
  age: 10,
};

let myReadOnlyType: makeReadOnly<typeToMap> = {
  name: 'Silvester',
  age: 10,
  year: new Date(),
};

//myReadOnlyType.age = 23;
