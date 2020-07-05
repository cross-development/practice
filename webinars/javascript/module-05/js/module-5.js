'use strict';

//!===========CONSTRUCTOR======================
// [[Prototype]] === __proto__
console.log({});
const Counter = function ({ initialValue = 0, step = 1 }) {
	//при создании объекта в this записывается ссылка на пустой объект и дальше она "набивается" свойствами
	//this = {}
	// при создании объекта в свойство __proto__ записывается ссылка на свойство prototype функции конструктора
	// this.__proto__ = Counter.prototype;

	this.value = initialValue;
	this.step = step;

	//return this;
};

Counter.prototype.increment = function () {
	this.value += this.step;
};
// [[Call]] = вызывается через метод Call (внутренний метод) - здесь и сейчас
// Counter()

//[[Construct]] - внутренний метод, создание экземпляра
const counterA = new Counter({ initialValue: 10, step: 5 });
console.log('counterA.value: ', counterA.value);
counterA.increment();
console.log('counterA.value: ', counterA.value);

const counterB = new Counter({ initialValue: 100, step: 15 });
console.log('counterB.value: ', counterB.value);
counterB.increment();
console.log('counterB.value: ', counterB.value);
//?=============PLAGIN COUNTER=====================
const Counter = function ({ initialValue = 0, step = 1 }) {
	this.value = initialValue;
	this.step = step;
};

//Статические методы класса
Counter.doStuff = function () {
	console.log('doing stuff');
};

console.dir(Counter.doStuff());

Counter.prototype.increment = function () {
	this.value += this.step;
};

Counter.prototype.decrement = function () {
	this.value -= this.step;
};

const counter = new Counter({ initialValue: 10, step: 5 });

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValueField = document.querySelector('.js-counter-value');

const updateCounterValueField = () => {
	counterValueField.textContent = counter.value;
};

updateCounterValueField();

incrementBtn.addEventListener('click', () => {
	counter.increment();
	updateCounterValueField();
});

decrementBtn.addEventListener('click', () => {
	counter.decrement();
	updateCounterValueField();
});
