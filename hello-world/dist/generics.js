"use strict";
var _a;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('key', 1);
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
}
let nums = new ArrayUtils();
nums.wrapInArray(10);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let result = fetch('url');
(_a = result.data) === null || _a === void 0 ? void 0 : _a.title;
function echo1(value) {
    return value;
}
function echo2(value) {
    return value;
}
function echo3(value) {
    return value;
}
class PersonClass {
    constructor(id) {
        this.id = id;
    }
}
function echo4(value) {
    return value;
}
echo1(1);
echo2({ name: 'val' });
echo4(new PersonClass(1));
class Store {
    constructor() {
        this._objects = [];
    }
    addToStore(obj) {
        this._objects.push(obj);
    }
    findStore(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    myfind(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
let store = new Store();
store.addToStore({ name: 'a', price: 1 });
store.findStore('name', 'a');
store.findStore('price', 1);
let rc1 = {
    name: 'val',
    price: 200,
};
//# sourceMappingURL=generics.js.map