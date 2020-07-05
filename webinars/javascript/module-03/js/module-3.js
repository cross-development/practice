'use strict';

const a = {
	x: 1,
};

const b = a;

console.log(a === b); // true

const product = {
	name: 'Wunder Waffles',
	price: 30,
	description: 'Sed mollis eros et ultrices',
	x: undefined,
};

const key = 'price';

console.log(product.name);
console.log(product[key]);

product.price = 50;
console.log(product.price);
console.log(product.qwe); // undefined

//!Shorthand properties=====================================

const makeProduct = (name, price) => {
	return {
		id: 1,
		name,
		price,
	};
};

console.log(makeProduct('Apples', 50));

//!Computed properties ========================================

const key = 'name';
const value = 10;

const obj = {
	a: 1,
	[key]: value,
};

console.log(obj);

// input name = "login" value = "mango"
// input name = "email" value = "mail@mail.com"

const target = {
	name: 'login',
	value: 'mango',
};

const formData = {
	[target.name]: target.value,
};

console.log(formData);

//! Methods of object=================================================

const product = {
	name: 'Wunder Waffles',
	price: 30,
	description: 'Sed mollis eros et ultrices',

	changePrice(newPrice) {
		this.price = newPrice;
		console.log(newPrice);
	},
};

product.changePrice(100);

//! Работа с коллекцией ===================================================
const storage = {
	items: [
		{ id: 'id-1', name: 'apples', price: 30 },
		{ id: 'id-2', name: 'apples', price: 30 },
	],

	getItems() {
		return this.items;
	},

	addProduct(product) {
		this.items.push(product);
	},

	removeProduct(id) {
		for (let i = 0; i < this.items.length; i += 1) {
			if (this.items[i].id === id) {
				this.items.splice(i, 1);
			}
		}
	},
};

console.table(storage.getItems());
storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });
console.table(storage.getItems());
storage.removeProduct('id-1');
console.table(storage.getItems());

//! Перебор объектов ===============================================

const product = {
	name: 'waffles',
	price: 50,
	quantity: 20,
};

console.log('name' in product); // true

for (const key in product) {
	console.log(`key: ${key}, value: ${product[key]}`);
}

const keys = Object.keys(product);

console.log(keys);

for (const key of keys) {
	console.log(`key: ${key}, value: ${product[key]}`);
}

const salary = {
	bob: 100,
	mary: 200,
	dick: 300,
};

let total = 0;

for (const key in salary) {
	console.log(salary[key]);
	total += salary[key];
}

console.log('total:', total);

const salaryKeys = Object.keys(salary);

const salaryKeys = Object.values(salary);

console.log(salaryKeys);

for (const value of salaryKeys) {
	console.log(value);
	total += value;
}

console.log('total:', total);

/*
 * ================================ПРАКТИКА =========================================
 */

const tasksCompleted = {
	ann: 29,
	david: 35,
	helen: 1,
	laurence: 99,
};

const findPersonWithMaxTasks = stats => {
	let max = 0;
	let name;

	const keys = Object.keys(stats);
	// console.log(keys);

	for (const key of keys) {
		if (max < stats[key]) {
			max = stats[key];
			name = key;
		}
	}

	return {
		name,
		tasksCompleted: max,
	};
};

console.log(
	findPersonWithMaxTasks({
		ann: 29,
		david: 35,
		helen: 1,
		laurence: 99,
	}),
);

console.log(
	findPersonWithMaxTasks({
		ann: 29,
		david: 135,
		helen: 1,
		laurence: 99,
	}),
);

// ============================================================

const users = [
	{ name: 'Poly', age: 7, mood: 'happy' },
	{ name: 'Mango', age: 4, mood: 'blissful' },
	{ name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropertiesValues = (users, key) => {
	const values = [];

	for (const user of users) {
		// console.log(user[key]); // доступ к ключам объекта
		if (key in user) {
			values.push(user[key]);
		}
	}

	return values;
};

console.log(getAllPropertiesValues(users, 'name'));
console.log(getAllPropertiesValues(users, 'mood'));
console.log(getAllPropertiesValues(users, 'active'));

// ============================================================

const uploads = [
	{ name: 'psd', percentage: 14 },
	{ name: 'pdf', percentage: 20 },
	{ name: 'mp3', percentage: 50 },
	{ name: 'jpg', percentage: 70 },
];

const filterUploadsWithPercentage = (uploads, threshold) => {
	// console.log(uploads);
	// console.log(threshold);
	const filteredUploads = [];

	for (const upload of uploads) {
		if (upload.percentage >= threshold) {
			filteredUploads.push(upload);
		}
		// console.log(upload.percentage);
	}

	return filteredUploads;
};

console.table(filterUploadsWithPercentage(uploads, 20));
console.table(filterUploadsWithPercentage(uploads, 50));

//===============================================================

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 3000, 4000, 5000, 6000];

const combine = function (names, prices) {
	const result = [];

	for (let i = 0; i < names.length; i += 1) {
		const product = {
			name: names[i],
			price: prices[i],
		};

		result.push(product);
	}

	return result;
};

const products = combine(names, prices);
console.table(products);

//===================================================================

/*
 * ПАТТЕРН ОБЪЕКТ НАСТРОЕК +==============================================+
 */

const filterUploadsWithPercentage = function (params) {
	console.log(params.minThreshold);
};

filterUploadsWithPercentage({ uploads, minThreshold: 10, maxThreshold: 20 });

/*
 * ПАТТЕРН ENUMERABLE +==============================================+
 */
// перечисление (всегда с большой буквы в одинственном числе)
const DeliveryOption = {
	TAKEOUT: 1,
	COURIER: 2,
	POST: 3,
};

console.log(`Выбери опцию доставки: ${DeliveryOption.TAKEOUT} - самовывоз`);
console.log(`Выбери опцию доставки: ${DeliveryOption.COURIER} - курьер`);
console.log(`Выбери опцию доставки: ${DeliveryOption.POST} - почта`);

/*
 * SPREAD & REST ==========================================================
 */

//!SPREAD=======================
const { a, ...b } = { a: 1, b: 2, c: 3 }; //rest

const x = {
	y: 5,
	...{ g: 6, i: 9 }, // spread
};

const fn = function (...rest) {}; // rest
fn(...[1, 2, 3, 4, 5]); // spread

const numbers = [1, 2, 3, 4, 32, -1, -40];
console.log(Math.min(...numbers));

const numbers = [1, 2, 3, 4, 5];
const copyOfNumbers = numbers.slice();
const copyOfNumbers = [...numbers];

console.log(numbers === copyOfNumbers);

const objA = {
	a: 1,
	b: 2,
};

const objB = {
	a: 3,
	c: 4,
};

const objC = Object.assign({}, objA, objB);
console.log(objC);

const objA = {
	a: 1,
	b: 2,
};

const objB = {
	a: 3,
	c: 4,
};

const objC = {
	...objA,
	...objB,
	x: 8,
};

console.log(objC);

//ОБЪЕКТЫ МОЖНО РАСПЫЛЯТЬ ТОЛЬКО В ОБЪЕКТ. МАССИВ РАСПЫЛЯЕТСЯ ПОЭЛЕМЕНТНО
//!ДЕСТРУКТУРИЗАЦИЯ =======================
// без деструктуризации
const user = {
	name: 'Mango',
	room: 24,
	type: 'vip',
};

const message = `Гость ${user.name} прибывает как ${user.type} в комнату ${user.room}`;
console.log(message);

// с деструктуризацией
const { name, room, type } = {
	name: 'Mango',
	room: 24,
	type: 'vip',
};

// или так

const user = {
	name: 'Mango',
	room: 24,
	type: 'vip',
};

const { name, room, type } = user;

const message = `Гость ${name} прибывает как ${type} в комнату ${room}`;
console.log(message);

const greet = user => {
	const { name, room = 'regular', type } = user;
	return `Гость ${name} прибывает как ${type} в комнату ${room}`;
};

console.log(greet(user));

// с функциями
const greet = ({ name, room = 'regular', type } = {}) => {
	// const { name, room = 'regular', type } = user;
	return `Гость ${name} прибывает как ${type} в комнату ${room}`;
};

console.log(greet(user));

const profile = {
	name: 'Mango',
	email: 'mango@mail.com',
	address: {
		name: 'LaLaLa',
		city: 'Zimbabwe',
		country: 'Ukraine',
		street: 'Soborna',
	},
};

const { name: profileName } = profile;

const {
	name,
	email,
	address: { name: addressName, city, country, street },
} = profile;

console.log(addressName);

const tasks = {
	ann: 30,
	boris: 50,
	valera: 99,
};

const entries = Object.entries(tasks);
console.log(entries);

for (const [name, value] of entries) {
	// const name = entry[0],
	// const value = entry[1];

	console.log(name, value);
}

//! Работа с коллекцией

const storage = {
	items: [
		{ id: 'id-1', name: 'apples', price: 30 },
		{ id: 'id-2', name: 'apples', price: 30 },
	],

	getItems() {
		return this.items;
	},

	addProduct(product) {
		this.items.push(product);
	},

	findProduct(id) {
		for (let i = 0; i < this.items.length; i += 1) {
			const product = this.items[i];
			if (product.id === id) {
				return product;
			}
		}
	},

	removeProduct(id) {
		for (let i = 0; i < this.items.length; i += 1) {
			const product = this.items[i]; // ссылка на объект storage
			if (product.id === id) {
				this.items.splice(i, 1);
				return;
			}
		}
	},

	changePrice(id, price) {
		const product = this.findProduct(id);

		// guard clause - если все плохо - ВЫХОДИ!
		if (!product) {
			return;
		}

		product.price = price;
	},

	changeName(id, name) {
		const product = this.findProduct(id);
		product.name = name;
	},
};

console.table(storage.getItems());

storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });
console.table(storage.getItems());

storage.removeProduct('id-1');
console.table(storage.getItems());

storage.changePrice('id-3', 100);
console.table(storage.getItems());

storage.changeName('id-3', 'parsley');
console.table(storage.getItems());
