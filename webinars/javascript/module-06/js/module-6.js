'use strict';

/*
 * Иммутабельность
 */
// const storage = {
// 	_items: [{ label: 'item-1' }, { label: 'item-2' }],

// 	get items() {
// 		return this._items;
// 	},

// 	add(item) {
// 		this._items = [...this._items, item];
// 	},
// };

// console.log(storage.items);
// storage.add({ label: 'item-3' });
// console.log(storage.items);

/*
 * Методы массива
 * array.method(callback[currentValue, index, array])
 */
const numbers = [1, 2, 3, 4, 5];

const products = [
	{ id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
	{ id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
	{ id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];

const users = [
	{ id: 'id-1', name: 'Mango', isActive: true },
	{ id: 'id-2', name: 'Poly', isActive: false },
	{ id: 'id-3', name: 'Ajax', isActive: true },
	{ id: 'id-4', name: 'Chelsey', isActive: false },
];

const log = array => console.log(array);
/*
 *Array.map() - возвращает новый массив той же длинны с измененными элементами
 */
// const doubled = numbers.map(number => {
// 	return number * 2;
// });
// log(numbers);
// log(doubled);

// const labels = products.map(product => {
// 	return product.label;
// });
// log(labels);

// const updatedProducts = products.map(product => {
// 	return {
// 		...product,
// 		price: product.price * 1.1,
// 	};
// });
// log(products);
// log(updatedProducts);

/*
 *Custom map
 */
// const map = (array, callback) => {
// 	const resultArray = [];
//
// 	for (let i = 0; i < array.length; i += 1) {
// 		const element = array[i];
// 		const res = callback(element);
// 		resultArray.push(res);
// 	}
// 	return resultArray;
// };
//
// const doubled = map(numbers, number => {
// 	return number * 2;
// });
// log(doubled);

/*
 *Array.filter() - возвращает новый массив, если callback вернул true,
 * то элемент записывается в новый массив. Если false - вернет пустой массив
 */
// const filtered = numbers.filter(number => {
// 	return number < 3;
// });
// log(filtered);

// const cheapProducts = products.filter(product => {
// 	return product.price < 100;
// });
// log(cheapProducts);

// const availableProducts = products.filter(product => {
// 	return product.quantity > 50;
// });
// log(availableProducts);

// const activeUsers = users.filter(user => {
// 	return user.isActive;
// });
// log(activeUsers);

// const inactiveUsers = users.filter(user => {
// 	return !user.isActive;
// });
// log(inactiveUsers);

/*
 *Array.find() - найти что-то по идентификатору,если callback возвращает true, вернет сам элемент
 *(не возвращает новый массив). Находит первый уникальный элемент. Если нету элемента - вернет undefined
 */
// const user = users.find(user => {
// 	return user.id === 'id=1';
// });
// log(user);

/*
 *Array.every() - результатом работы возвращает true или false. Вернет true если все элементы подходят под условие
 */
// const allUserActive = users.every(user => {
// 	return user.isActive;
// });
// log(allUserActive);

/*
 *Array.some() - результатом работы возвращает true или false. Вернет true если хотя бы один элемент подходят под условие
 */
// const isSomeUserActive = users.some(user => {
// 	return user.isActive;
// });
// log(isSomeUserActive);

// 44:39 из 1:36:22