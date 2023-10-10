type UserType = {
	name: string;
	age: number;
	occupation?: string;
};

let user1: UserType = {
	name: 'Diddy',
	age: 25,
};

console.log('user1=> ', user1);

type Bird = {
	fly: () => void;
};

type Fish = {
	swim: () => void;
};

type Pet = Bird | Fish;
let myPet: Pet = {
	swim: () => {
		console.log('fish is swimming');
	},
};

//console.log('myPet => ', myPet.swim());
myPet.swim();

type WeekDays =
	| 'Monday'
	| 'Tuesday'
	| 'Wednessday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday'
	| 'Sunday';

let day: WeekDays = 'Monday';
