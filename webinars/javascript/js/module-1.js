'use strict';
//========================================================================
//========================================================================
//! Module 1, Lesson 1
//========================================================================
//========================================================================

//должна быть инициализирована при объявлении и значение неизменно
// const number = 5;

// ни в коем случае нельзя менять эту переменную. Строгая констранта
// const MESSAGE_SUCCESS = 'привет!';

//может быть изменена дальше в коде
// let number = 5;

// console.log(number);

// number = 10;
// console.log(number);

//переменная не доступна до ее объявления, т.е.
// console.log(a); - даст is not defined (undeclared - не объявлена)
// let a; - даст undefined (не инициализирована, нет значения)

// const number = 10;
// const name = 'Mango';
// const isActive = true;
// const hasChildNodes = false;
// переменная пустая и лишена значения.
// const guest = null;
// undefined
// let names;

// проверить тип переменной (значения)
// const type = typeof names;
// console.log(guest);

//========================================================================

// const a = alert(555);
// console.log(a); - undefined

// const isGoing = confirm('Qwe');
// console.log(isGoing); - true / fasle

// const input = prompt('QWE EWQ ?');
// console.log(input); - " " / null

// const number = '2' + 2 * 3; - 26 string ('2' + (6) -> 2 * 3 = 6)

//========================================================================

// const min = 10;
// const max = 15;
// const number = 45;

// const isNumberInRange = number > min && number < max;
// console.log(isNumberInRange);

//========================================================================

// console.log(false == '0'); - true
// console.log(false === '0'); - false
// console.log(false === false); - true
// console.log(1 != true); - false
// console.log(1 !== true); - true
// console.log(NaN === NaN); - false
// console.log(NaN == NaN); - false

//========================================================================

// let input = prompt('Vvedite chislo ot 1 do 10'); // '5'

// input = Number(input); // '5' --> 5 / если 123qwe --> NaN (number)

// const isCorrect = input >= 1 && input <= 10;

// console.log(typeof input);
// console.log(isCorrect);

//========================================================================
//========================================================================

// const boxWidthInPx = '25px';

// const width = Number.parseInt(boxWidthInPx);
// console.log(width)

// const boxWidthInPx = '25.5px';

// const width = Number.parseFloat(boxWidthInPx);
// console.log(width)

//========================================================================

// let input = '123qwe';

// input = Number(input);

// const isNan = Number.isNaN(input);
// console.log(isNan);

//========================================================================

// console.log(0.1 + 0.2);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

//========================================================================

// const number = Math.floor(2.6); - на свое место возвращает значение (число)

// const random = Math.random();
// const number = random * (10 - 1);
// const result = number + 1;

// console.log(random);
// console.log(number);
// console.log(result);
// console.log(Math.round(result));
// console.log(Math.random() * (10 - 1) + 1);

//========================================================================
//========================================================================

// const lang = 'JavaScript';
// console.log(2 + '2');

// const firstName = 'John';
// const lastName = 'Doe';
// const fullName = firstName + lastName;

// console.log(fullName);

// console.log(5 + '6'); -> 5 + '6' = '56'
// console.log(5 + 5 + '6'); -> 5 + 5 = 10 + '6' = '106'
// console.log(5 + 5 + '' * 2); -> ''(0) * 2 = 0 + 5 + 5 = 10
// console.log(5 + 5 + ('10' / 2) * 2); -> '10' / 2 = 5 * 2 = 10 + 5 + 5 = 20
// console.log(5 + 5 + undefined * 2); -> NaN
// console.log(5 + 5 + null * 2); -> null(0) * 2 = 0 + 5 + 5 = 10

// const name = 'Mango';
// const isLowerCase = name.toLowerCase(); // не изменяет исходную строку
// const isUpperCase = name.toUpperCase(); // не изменяет исходную строку

// console.log(name.length);
// console.log(name);
// console.log(isLowerCase);
// console.log(isUpperCase);

// const title = 'Phasellus volutpat metus eget egestas';

// console.log(title.includes('metus'));

// const name = 'Mango';
// const age = 20;
// const mood = 'happy';

// const message = `My name is ${name}, I'm ${age} years old and I very ${mood}`;

// console.log(message);

//========================================================================
//========================================================================
//! Module 1, Lesson 2
//========================================================================
//========================================================================

/*
 * Логические операторы
 */
// && - если первый операнд - false, то результат будет false (первый операнд),
// если первый операнд true, то результатом будет второй операнд (true или false)
// "ИЛИ" (||) - запинается на правде и "И" (&&) - запинается на лжи

// const min = 10;
// const max = 30;
// const value = 45;

// const isInRange = value >= 10 && value <= 30; // true && true (value = 25)
// const isInRange = value >= 10 && value <= 30; // true && false (value = 45)
// const isInRange = 1 && 2; // true && true
// console.log(isInRange);

// console.log(1 && 2 && 3 && 4); // 4 -> true
// console.log(1 && 2 && 0 && 4); // 0 -> false
// console.log(0 && 1); // 0 -> false
// console.log(false && true); // false -> false
// console.log(true && false); // false -> false
// console.log(true && ''); // '' -> false
// console.log(true && '0'); // '0' -> true

//========================================================================

// || - если первый операнд true то результат будет true (первый операнд),
// если первый операнд false , то результатом будет второй операнд (true или false)
// "ИЛИ" (||) - запинается на правде и "И" (&&) - запинается на лжи

// const min = 10;
// const max = 30;
// const value = 25;

// const isInRange = value < 10 || value > 30;
// console.log(isInRange); // false

// console.log(1 || 2); // 1
// console.log(0 || 1); // 1
// console.log('' || 1); // 1
// console.log('' || null); // null

//========================================================================
// console.log(!1); // false
// console.log(!0); // true
// console.log(!!1); // true
// console.log(!!0); // false
// console.log(!Infinity); // false
// console.log(!!Infinity); // true
// console.log(!NaN); // true
// console.log(!!NaN); // false
// console.log(!undefined); // true
// console.log(!!undefined); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(undefined)); // false

/*
 * Ветвления
 */

// const min = 10;
// const max = 30;
// const value = 25;

// let message;

// const isInRange = value > 10 && value < 30;

// if (isInRange) {
// 	message = 'telo if';
// } else {
// 	message = 'telo else';
// }

// console.log(message);

//========================================================================

// const min = 10;
// const max = 30;
// const value = 125;

// let message;

// if (value < 10) {
// 	message = 'Less then 10';
// } else if (value > 20 && value < 50) {
// 	message = 'Greater then 20 and less then 50';
// } else if (value > 60 && value < 80) {
// 	message = 'Greater then 60 and less then 80';
// } else {
// 	message = 'pffff';
// }

// console.log(message);

//========================================================================
// SCROPE

//Global scope
// const a = 5;

// if (15 > 10) {
// 	console.log(a); // access to global scope
//block scope
// 	const message = 'Hello';
// }
// Global scope
// console.log(message); // false access to block scope

// //Global
// const value = 4;

// if (true) {
// 	// A
// 	const value = 1;
// 	console.log(value);

// 	if (true) {
// 		// B
// 		const value = 2;
// 		console.log(value);
// 	}
// }

// if (true) {
// 	// C
// 	const value = 3;
// 	console.log(value);
// }
// //Global
// console.log(value);

// const isActive = true;
// let message;

// if (isActive) {
// 	message = 'Active';
// } else {
// 	message = 'Inactive';
// }

// console.log(message);

// const message = isActive ? 'Active' : 'Inactive';
// console.log(message); // true

/*
 * Switch
 */

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const promptLabel = `Введите опцию доставки: ${TAKEOUT} - самовывоз, ${COURIER} - курьер, ${POST} - почта`;

// let userChoice = prompt(promptLabel);
// let message;

// if (userChoice === null) {
// 	// '1'
// 	message = 'Очень жаль, приходите еще!';
// 	// 1
// } else {
// 	userChoice = Number(userChoice);

// 	switch (userChoice) {
// 		case TAKEOUT:
// 			message = 'Ну и вывози сам, жлоб!';
// 			break;

// 		case COURIER:
// 			message = 'Супер, за лишние деньги тебе все доставим!';
// 			break;

// 		case POST:
// 			message = 'Посылка придет завтра!';
// 			break;

// 		default:
// 			message = 'Ничего не выбрано!';
// 	}
// }

// console.log(message);
