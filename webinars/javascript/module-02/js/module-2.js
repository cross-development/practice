'use strict';
/*
 * МАССИВЫ
 */

const product = 'apples';
const products = ['apples', 'grapes', 'bananas'];

console.log(products[0]);
products[0] = 'chicken';

console.log(products[0]);
console.log(products.length);

console.log(products);

products[3] = 'hare';
console.log(products);

products[666] = '666';
console.log(products); // empty x 662 (пустые)
console.log(products[10]); // undefined

const board = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(board[1][2]);

const a = [1, 2, 3];

const b = [1, 2, 3];

console.log(a === b); // сравнение по ссылке (по адресу в памяти)
console.log(5 === 5); // сравнение по значению (по значению)

// создается копия значения (отдельная ячейка памяти)
let a = 5;
let b = a;

console.log('a: ', a);
console.log('b: ', b);

a = 10;

console.log('a: ', a);
console.log('b: ', b);

// сравнивается указатель в памяти (б указывает на а, на изначальный массив)
let a = [1, 2, 3];
let b = a;

console.log('a: ', a);
console.log('b: ', b);

console.log(a === b);

a[3] = 4;

console.log('a: ', a);
console.log('b: ', b);

// =====================================================

const products = ['apples', 'grapes', 'bananas'];
const message = 'Mauris turpis nunc blandit et';

console.log(message);

const words = message.split(' ');
console.log(words);

const snakeCaseMessage = words.join('_');
console.log(snakeCaseMessage);

const indexOfApples = products.indexOf('apples');
console.log(indexOfApples);

const isInProducts = products.includes('apples');
console.log(isInProducts);

// =====================================================

const users = ['Mango', 'Ajax', 'Poly'];
const login = prompt('Vvedite login');

const isRegistered = users.includes(login); // true или false

if (isRegistered) {
	console.log('Dobro pogalovat');
} else {
	console.log('Neverniy login');
}

// =====================================================

const numbers = [1, 2, 3, 4, 5];

numbers.push(4);
console.log(numbers.push()); // return length of array
console.log(numbers);

numbers.pop();
console.log(numbers.pop()); // return length of array
console.log(numbers);

const copy = numbers.slice(1, 5); // return copy of array
console.log(copy);

const cards = ['card-1', 'card-2', 'card-3', 'card-5', 'card-4'];

cards.splice(0, 3); //с какого индекса и сколько штук удалить
console.log(cards.splice(1, 2)); // возвращает массив удаленных элементов
console.log(cards);

cards.splice(1, 0, 'card-5'); // добавление элементов в массив
console.log(cards);

const index = cards.indexOf('card-5');
console.log(index);

const card = cards.splice(index, 1)[0];
console.log(cards);

cards.splice(1, 0, card);
console.log(cards);

/*
 *ФУНКЦИИ
 */
//function expression - функциональное выражение
// (x y) -> параметры
const add = function (x, y) {
	const summ = x + y;
	console.log('calling add function');
	return summ;
};

const resA = add(2, 3); // аргументы
console.log(resA);
console.log(add(3, 4));

console.log('function declaration', add1(1, 2));
add1(1, 2);
function add1(x, y) {
	const summ = x + y;
	console.log('calling add function');
	return summ;
}

//=========================================================

const string = 'Vivamus in erat ut urna';
const words = string.split(' ');

console.log(words);

let longestWord = words[0];

for (const word of words) {
	if (word.length > longestWord.length) {
		longestWord = word;
	}
}

console.log(longestWord);

const findLongestWord = function (string) {
	const words = string.split(' ');

	let longestWord = words[0];

	for (const word of words) {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
};

console.log(findLongestWord('Vestibulum suscipit nulla quis orci'));
console.log(findLongestWord('Curabitur a felis in nunc'));
console.log(findLongestWord('Aenean ut eros et nisl'));

//===========================================
//Array.includes handmade

const includes = function (array, value) {
	for (const item of array) {
		if (item === value) {
			return true;
		}
	}
	return false;
};

console.log(includes([1, 2, 3], 4));
console.log(includes([1, 2, 3, 4, 5], 2));
console.log(includes(['mango', 'poly', 'ajax'], 'poly'));

// ===========================================

const calculateCost = function (string, costPerWord = 10) {
	const words = string.split(' ');
	let total = words.length * costPerWord;

	return total;
};

const message = 'Vestibulum facilisis, purus nec, vitae euismod ligula urna in dolor.';
console.log(calculateCost(message, 20));

// Счетчик ============ПАРАМЕТРЫ ПО УМОЛЧАНИЮ==================

const counter = function (initialValue = 0, step = 1) {};

//============================================================
//в параметр array передается ссылка на оригинальный массив и в случае изменения его в ф-ции изменяется оригинал
const double = function (array) {
	console.log('array arg:', array);

	for (let i = 0; i < array.length; i += 1) {
		array[i] = array[i] * 2;
	}
};

const numbers = [1, 2, 3, 4, 5];
double(numbers);

console.log('numbers:', numbers);

//===========ПРЕДИКАТНАЯ ФУНКЦИЯ====================================
const isEqual = function (a, b) {
	return a === b;
};

console.log(isEqual(5, 2));
console.log(isEqual(5, 5));

//ПСЕВДОМАССИВ ARGUMENTS=====================================

const add = function () {
	console.log(arguments);

	let total = 0;

	for (let i = 0; i < arguments.length; i += 1) {
		total += arguments[i];
	}
	return total;
};

console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5, 6, 7));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//===========================================

const add = function () {
	// console.log(arguments);
	let args = Array.from(arguments);
	const mult = args[0];
	args = args.slice(1);
	let total = 0;

	for (let i = 0; i < args.length; i += 1) {
		total += args[i];
	}
	return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 2, 3, 4, 5, 6, 7));
console.log(add(15, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//===========================================
//...rest

const add = function (...args) {
	let total = 0;

	for (let i = 0; i < args.length; i += 1) {
		total += args[i];
	}
	return total;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 2, 3, 4, 5, 6, 7));
console.log(add(15, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//===========================================

const add = function (mult, ...args) {
	let total = 0;

	for (let i = 0; i < args.length; i += 1) {
		total += args[i];
	}
	return total * mult;
};

console.log(add(5, 1, 2, 3));
console.log(add(10, 2, 3, 4, 5, 6, 7));
console.log(add(15, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*
 *ЦИКЛЫ
 */

let counter = 0;

const products = ['apple', 'grape', 'banana'];

while (counter < products.length) {
	console.log(products[counter]);
	counter += 1;
}

console.log('after while');

let userInput;

do {
	userInput = prompt('Davai vvodi chto-to');
} while (userInput !== null);
//========================FOR=====================

const products = ['apple', 'grape', 'banana'];

for (let i = 0; i < products.length; i += 1) {
	console.log('i:', i);
	console.log(`products[${i}]`, products[i]);
}

for (const product of products) {
	console.log(product);
}

//for of  (для перебора) - делает копию элемента в переменную, не изменяет оригинальный массив
//for (для присвоения/изменения) - получает ссылку на оригинальный массив и изменяет его при изменении элементов в теле цикла

const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
	number *= 2;
	console.log(number);
}

console.log(numbers);

//==================================================

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

for (let i = 0; i < matrix.length; i += 1) {
	console.group(`Iteration ${i}`);

	console.log('i:', i);
	console.log(`matrix[${i}]`, matrix[i]);

	for (let j = 0; j < matrix[i].length; j += 1) {
		console.log(`matrix[${i}][${j}]`, matrix[i][j]);
	}

	console.groupEnd(`Iteration ${i}`);
}

//=====================================
