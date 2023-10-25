enum Color {
  Red,
  Green,
  White,
  Blue,
}

let selectColor: Color = Color.Blue;
console.log('Selected Color:', selectColor);

let result1: string | number;

function logType(arg: typeof result1 | Boolean): void {
  console.log('typeof arg ', typeof arg);
}

let func1 = logType('Daddy');
func1;

interface Car {
  make: string;
  model: string;
}

type Bus = {
  make: string;
  model: string;
  payloadCapacity: number;
};

type Vehicle = Bus | Car;

const BMW: Car = {
  make: 'BMW',
  model: 'X5',
};

const Trotro: Bus = {
  make: 'Toyota',
  model: 'Hiace',
  payloadCapacity: 25,
};

let vehicles: Vehicle[] = [BMW, Trotro];
vehicles.forEach((v) => {
  console.log(`Make: ${v.make}`);
  console.log(`Model: ${v.model}`);
  if ('payloadCapacity' in v) {
    console.log(`Model: ${v.payloadCapacity}`);
  }
  console.log('-------------------');
});

let func2 = (a: string | number): void => {
  typeof a === 'string'
    ? console.log(`${a} is a string`)
    : console.log(`${a} is a number`);
};
func2('musa dembele');

function func3(a: any): boolean {
  if (typeof a !== 'number') {
    throw new Error(`${a} is not a number }`);
  }

  if (a % 2 !== 0) {
    console.log(`${a} is an ODD number`);
    return true;
  } else {
    console.log(`${a} is an EVEN number`);
    return false;
  }
}

let rc = func3(88);
console.log('rc => ', rc);

const mixedData: (string | number | boolean)[] = [1, 2, 'Val', true, 4];
const numbersOnly: number[] = mixedData.filter(
  (ele): ele is number => typeof ele === 'number'
);
console.log('numbersOnly => ', numbersOnly);

const booleanOnly: number[] = mixedData.filter(
  (ele): ele is number => typeof ele === 'boolean'
);
console.log('booleanOnly => ', booleanOnly);
const stringOnly: number[] = mixedData.filter(
  (ele): ele is number => typeof ele === 'string'
);
console.log('stringOnly => ', stringOnly);

const countString = (a: string | string[]): number => {
  let sum: number = 0;
  if (Array.isArray(a)) {
    //const sumOf =  a.reduce((accumulator, currentValue) => accumulator + currentValue), 0;
    for (const i of a) {
      console.log(`${i} has length ${i.length}`);
      sum += i.length;
    }
    console.log('Total length of arrays is ', sum);
  } else {
    console.log(`${a} has length ${a.length}`);
    sum = a.length;
    console.log('sum => ', sum);
  }
  return sum;
};

countString(['Black', 'Man', 'In', 'Mirror']);
countString('Dede Blackman');

let min: number = 5;
let max: number = 10;

let random = Math.random();
console.log('random ', random);
console.log(max - min);
console.log(max - min + min);
console.log('1 => ', Math.floor(Math.random() * (max - min) + min));
console.log('2 => ', Math.floor(Math.random() * 10));

//Get random number of strings
(function getRandomStrings(len: number): string {
  const allStrings: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newstr: string = '';
  for (let i = 1; i <= len; i++) {
    let random: number = Math.random() * allStrings.length;
    newstr += allStrings.charAt(random);
  }
  console.log('newstr => ', newstr);
  return newstr;
})(20);
