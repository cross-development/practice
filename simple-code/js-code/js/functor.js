/* MayBe is a type of Functor, which means it's going to 
implement a map function but in a different way.
*/

const MayBe = function (val) {
	this.value = val;
};

MayBe.of = function (val) {
	return new MayBe(val);
};

MayBe.prototype.isNothing = function () {
	return this.value === null || this.value === undefined;
};

MayBe.prototype.map = function (fn) {
	return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

// Usage
// An example with string. Result: { value: 'STRING' }
MayBe.of('string').map(x => x.toUpperCase());

// An example with string and chaining. Result: { value: 'This is CHAINING'}
MayBe.of('string').map(x => x.toUpperCase()).map(x => `This is ${x}`);

// We don't care if 'x' is null or undefined. Result: { value: null }
MayBe.of(null).map(x => x.toUpperCase());
