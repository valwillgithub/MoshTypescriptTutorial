function echo<T>(obj: T) {
	return obj;
}

function printName<T extends { name: string }>(obj: T) {
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
