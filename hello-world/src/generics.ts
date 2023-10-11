/* Generic Classes */
class KeyValuePair<K, V> {
	constructor(public key: K, public value: V) {}
}

//let pair = new KeyValuePair<string, number>('key', 1);
let pair = new KeyValuePair('key', 1);
//pair.value

/* Generic Functions */
class ArrayUtils {
	wrapInArray<T>(value: T) {
		return [value];
	}
}

let nums = new ArrayUtils();
nums.wrapInArray(10);

/* Generic Interfaces */
/* 
http://mywebsite.com/users
http://mywebsite.com/products
*/
interface IResults<T> {
	data: T | null;
	error: string | null;
}

interface IUser {
	username: string;
}
interface IProduct {
	title: string;
}

function fetch<T>(url: string): IResults<T> {
	console.log(url);
	return { data: null, error: null };
}

let result = fetch<IUser>('url');
//result.data?.username;
result.data!.username;

/* Generic Constraints */
function echo1<T extends number | string>(value: T): T {
	return value;
}

// constraint by an Object
function echo2<T extends { name: string }>(value: T): T {
	return value;
}

// constraint by an Interface
function echo3<T extends IProduct>(value: T): T {
	return value;
}

class PersonClass {
	constructor(public id: number) {}
}

// constraint by an Class
function echo4<T extends PersonClass>(value: T): T {
	return value;
}

echo1(1);
echo2({ name: 'val' });
//echo3(new IProduct());
echo4(new PersonClass(1));

/* Extending Generic Classes */
interface IProduct2 {
	name: string;
	price: number;
}

class Store<T> {
	protected _objects: T[] = [];

	addToStore(obj: T): void {
		this._objects.push(obj);
	}

	// keyof operator: if T is IProduct2, then keyof T => 'name' or 'price'
	// keyof operator: returns a union of properties of a given type
	findStore(property: keyof T, value: unknown): T | undefined {
		return this._objects.find((obj) => obj[property] === value);
	}
}
// passing on generic type parameter
class CompressibleStore<T> extends Store<T> {
	compress() {}
}

// restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
	myfind(name: string): T | undefined {
		return this._objects.find((obj) => obj.name === name);
	}
}

// fixing the generic type parameter
class ProductStore extends Store<IProduct> {
	filterByCategory(category: string): IProduct[] {
		console.log(category);
		return [];
	}
}
// keyOf operator
let store = new Store<IProduct2>();
store.addToStore({ name: 'a', price: 1 });
store.findStore('name', 'a');
store.findStore('price', 1);

// Type Mapping Index Signature and keyof
interface Item {
	name: string;
	price: number;
}

//ReadOnly
type ReadOnly<T> = {
	readonly [K in keyof T]: T[K]; // get properties of Item and their types
};

//Optional
type Optional<T> = {
	[K in keyof T]?: T[K];
};

//Nullable
type Nullable<T> = {
	[K in keyof T]: T[K] | null;
};
let rc1: ReadOnly<Item> = {
	name: 'val',
	price: 200,
};

//rc1.name = 'fifi';
