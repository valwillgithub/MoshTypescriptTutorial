"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set setbalance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance += value;
    }
}
let account = new Account(1, 'Val', 0);
account.deposit(100);
account.setbalance = 280;
console.log('account balance => ', account.balance);
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Val';
seats.A2 = 'Will';
seats['A3'] = 'Kweku';
console.log('seats: ', seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 10;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log('activeRides = ', Ride.activeRides);
//# sourceMappingURL=objectOriented1.js.map