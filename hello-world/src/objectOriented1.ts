class Account {
	/* readonly id: number;
	owner: string;
	private _balance: number;
	nickname?: string;

	constructor(id: number, owner: string, balance: number, nickname?: string) {
		this.id = id;
		this.owner = owner;
		this._balance = balance;
		this.nickname = nickname;
	}
    */
	constructor(
		public readonly id: number,
		public owner: string,
		private _balance: number,
		public nickname?: string
	) {}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error('Invalid amount');
		this._balance += amount;
	}

	get balance(): number {
		return this._balance;
	}

	set setbalance(value: number) {
		if (value < 0) throw new Error('Invalid value');
		this._balance += value;
	}

	//private calculateTax(): void {}
} // Class

let account = new Account(1, 'Val', 0);
account.deposit(100);
account.setbalance = 280;
console.log('account balance => ', account.balance);
console.log(typeof account);
console.log(account instanceof Account);
//=================================================================
//Index signature property
class SeatAssignment {
	[seatNumber: string]: string; //Index signature property
}
let seats = new SeatAssignment();
seats.A1 = 'Val';
seats.A2 = 'Will';
seats['A3'] = 'Kweku';

console.log('seats: ', seats);
//=================================================================
//Static Members
class Ride {
	private static _activeRides: number = 10;

	start() {
		Ride._activeRides++;
	}
	stop() {
		Ride._activeRides--;
	}
	static get activeRides() {
		return Ride._activeRides;
	}
} // class
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log('activeRides = ', Ride.activeRides);
