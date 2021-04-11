const myObject = {
	a: 1,
	b: 2,
	c: 3,
};

Object.defineProperty(myObject, Symbol.iterator, {
	writable: false,
	enumerable: false,
	configurable: true,
	value: function () {
		let idx = 0;
		const obj = this;
		const keys = Object.keys(obj);

		return {
			next: function () {
				return {
					value: obj[keys[idx++]],
					done: idx > keys.length,
				};
			},
		};
	},
});

const it = myObject[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (const v of myObject) {
	console.log(v);
}
