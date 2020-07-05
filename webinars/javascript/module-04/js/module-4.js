'use strict';

const onGeolocationSuccess = function (position) {
	console.log(position);
};

const onGeolocationError = function (error) {
	console.log(error);
};

window.navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);

//!====================CALLBACK FUNCTION========================
const labels = [];

function repeat(n, action) {
	for (let i = 0; i < n; i += 1) {
		action(i);
	}
}

const createLabel = function (index) {
	labels.push(`Label ${index + 1}`);
};

repeat(5, createLabel);

console.log(labels);

//================================================================

const filter = function (array, testCallback) {
	const result = [];

	for (const el of array) {
		const passed = testCallback(el);

		if (passed) {
			result.push(el);
		}
	}

	return result;
};

console.log(
	filter([1, 2, 3, 4, 5], function (number) {
		return number >= 3;
	}),
);

console.log(
	filter([1, 2, 3, 4, 5], function (number) {
		return number === 3;
	}),
);

console.log(
	filter([1, 2, 3, 4, 5], function (number) {
		return number <= 3;
	}),
);

console.log(
	filter(['Vestibulum', 'ullamcorper', 'mauris', 'ligula'], function (word) {
		return word.length >= 7;
	}),
);

const arrayToChange = [1, 2, 3, 4, 5];
const wordsToChange = ['Aenean', 'tellus', 'metus', 'bibendum', 'sed'];

const map = (array, callback) => {
	const result = [];

	for (const el of array) {
		const changes = callback(el);
		const changes1 = additionCallback(changes);
		result.push(changes1);
	}
	return result;
};

const multiplyCallback = element => element * 2;

const additionCallback = element => element + 3;

const lengthCallback = word => `Word of array: ${word}, length: ${word.length}`;

console.log(map(arrayToChange, multiplyCallback));
console.log(map(arrayToChange, additionCallback));
console.log(map(wordsToChange, lengthCallback));

//!======================ARROW FUNCTION======================

const add = function (a, b) {
	return a + b;
};

const add1 = (a, b) => {
	return a + b;
};

const add2 = (a, b) => a + b;

const add3 = a => a;

console.log('result of function expression:', add(1, 2));
console.log('result of arrow function add1:', add1(2, 3));
console.log('result of arrow function add2:', add2(3, 4));
console.log('result of arrow function add3:', add3(5));

const arrowFn = (...args) => args;

console.log(arrowFn(1, 2, 3, 4, 5));

//================================================================

const filter = (array, testCallback) => {
	const result = [];

	for (const el of array) {
		const passed = testCallback(el);

		if (passed) {
			result.push(el);
		}
	}

	return result;
};

console.log(filter([1, 2, 3, 4, 5], number => number >= 3));

console.log(
	filter([1, 2, 3, 4, 5], number => {
		return number === 3;
	}),
);

console.log(filter([1, 2, 3, 4, 5], number => number <= 3));

console.log(filter(['Vestibulum', 'ullamcorper', 'mauris', 'ligula'], word => word.length >= 7));

//!=========================Environment==============================
// Global
// Parent: null

//[[Environment]] : Global env - во время объявления записывается глобальное свойство
const fn = function (a) {
	// создается во время вызова функции
	// Fn env
	// Parent: Global
	// a: 5

	const b = 10;
	// Fn env
	// Parent: Global
	// a: 5, b: 10

	// при объявлении сохраняется ссылка на родительское окружение
	// [[Environment]] : Fn env
	const innerFn = function (v) {
		// создается во время вызова функции
		// Parent: Fn env
		// v: 10

		console.log(superGlobal);
	};
	// Fn env
	// Parent: Global
	// a: 5, b: 10, innerFn: f

	innerFn(10);
};

// Global
// Parent: null
// fn: f

const superGlobal = 555;

// Global
// Parent: null
// superGlobal: 555, fn: f

fn(5);

//======================================================

// Global
// Parent: null

//[[Environment]] : Global
const fnA = function () {
	//fnA env
	// Parent: Global
	console.log(a);
};

// Global
// Parent: null
// fnA: f

//[[Environment]] : Global
const outerFn = function () {
	//outerFn env
	// Parent: Global
	const a = 5;
	//outerFn env
	// Parent: Global
	// a: 5

	fnA();
};
// Global
// Parent: null
// fnA: f, outerFn: f

outerFn();

//!====================THIS========================
// use strict - undefined, not use strict - window
const fn = function () {
	console.log(this);
};

fn();

//this определяется не методом объявления а методом вызова (когда у метода кто-то есть слева до точки)
const showLabel = function () {
	console.log(this);
	console.log(this.label);
};

const printLabel = function (callback) {
	const label = callback();

	console.log(`Product label: ${label}`);
};
//==========================================================
const product = {
	label: 'Adidas',
	showLabel() {
		console.log(this);
		console.log(this.label);
	},
};

product.showLabel = showLabel;
product.showLabel();

printLabel(product.showLabel);

// В обычных функциях this определяется тем, как она была вызвана (кто ее вызывает)
// В стрелочных функциях this определяется тем, где она была объявлена (лексический контекст)

// Если объявлена в глобальной области видимости - будет window
const showLabel = () => {
	console.log(this);
	console.log(this.label);
};

const product = {
	label: 'Adidas',
	// this будет взята с глобальной области (window) в которой создан объект
	showLabel: () => {
		console.log(this);
		console.log(this.label);

		// const fn = function () {
		// console.log(this);
		// };
		// будет undefined, т.к. функция была никем не вызвана
		// fn();

		//this будет данный объект, т.к. она создана в области видимости функции (родительский контекст которого это объект)
		const fn = () => {
			console.log(this);
		};
		fn();
	},
};
// Даже после присвоения ссылки на функцию к методу объекта, то this все равно будет window
product.showLabel = showLabel;
product.showLabel();

//==========================================================
const sell = function (product, price) {
	console.log(`Manager ${this.name} sold ${product} for ${price}`);
	this.sales += 1;
};

const mango = {
	name: 'Mango',
	sales: 10,
};

const poly = {
	name: 'Poly',
	sales: 20,
};
mango.sell('TV');
poly.sell('GPU');

sell.call(mango, 'TV', 50);
sell.call(poly, 'GPU', 100);

sell.apply(mango, ['GPU', 50]);
sell.apply(poly, ['GPU', 100]);

const product = {
	label: 'Adidas',

	showLabel() {
		console.log(this);
		console.log(this.label);

		return this.label;
	},
};

const printLabel = function (callback) {
	const label = callback();

	console.log(`Product label: ${label}`);
};

const boundShowLabel = product.showLabel.bind(product);
// boundShowLabel();

printLabel(boundShowLabel);
//==========================================================

//================== Constructor===================

const Manager = function (name, sales = 0) {
	// this = {}

	this.name = name;
	this.sales = sales;

	this.sell = function (product, price) {
		console.log(`Manager ${this.name} sold ${product} for ${price}`);
		this.sales += 1;
	};

	// return this;
};
// new = оператор, который вызывает функцию конструктор и создает новый экземпляр объекта
const mango = new Manager('Mango', 5);
console.log(mango);
mango.sell('TV', 50);

const poly = new Manager('Poly', 10);
console.log(poly);
poly.sell('GPU', 100);

//==========================================================

const bark = function () {
	console.log(this);
};

bark(); // - будет undefined / window - without use strict
//==========================================================
const makeSound = function () {
	console.log(this.sound);
};

const dog = {
	sound: 'woof',
};
//функция присвоена как метод объекта дог
dog.bark = makeSound;
dog.bark(); // = будет woof, т.к. метод вызван в контексте объекта (дог)
//==========================================================
const makeSound = function () {
	console.log(this.sound);
};

const dog = {
	sound: 'woof',
};

dog.bark = makeSound;

const fn = function (callback) {
	callback();
};

fn(dog.bark); // - будет ошибка - нету метода bark в undefined (TypeError)
fn(dog.bark.bind(dog)); // - передаем копию функции через бинд (если используется контекст)
//==========================================================

const makeSound = () => {
	console.log(this);
};

makeSound(); // - this будет window, она игнорирует строгий режим
//==========================================================

const makeSound = () => {
	console.log(this);
};

const dog = {
	sound: 'woof',
};

dog.bark = makeSound;

dog.bark(); // this будет window, т.к. стрелка объявлена в глобальной области
//==========================================================
const makeSound = () => {
	console.log(this);
};

const dog = {
	sound: 'woof',
};

dog.bark = makeSound;

makeSound.call(dog); // this будет window
//==========================================================
const makeSound = () => {
	console.log(this);
};

const dog = {
	sound: 'woof',
};

dog.bark = makeSound;
makeSound.call(dog);

const bound = makeSound.bind(dog);
bound(); // this будет window
//==========================================================

const dog = {
	sound: 'woof',

	fn() {
		const makeSound = () => {
			console.log(this);
		};

		return makeSound;
	},
};

const makeSound = dog.fn();
makeSound(); // this будет dog т.к. стрелка объявлена в области видимости функции fn у которой родитель - объект, т.е. this будет dog
