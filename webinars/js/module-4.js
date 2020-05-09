'use strict';

// const onGeolocationSuccess = function (position) {
//   console.log(position);
// };

// const onGeolocationError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGeolocationSuccess,
//   onGeolocationError
// );

//!====================CALLBACK FUNCTION========================
// const labels = [];

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// const createLabel = function (index) {
//   labels.push(`Label ${index + 1}`);
// };

// repeat(5, createLabel);

// console.log(labels);

//================================================================

// const filter = function (array, testCallback) {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// console.log(
//   filter([1, 2, 3, 4, 5], function (number) {
//     return number >= 3;
//   })
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function (number) {
//     return number === 3;
//   })
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function (number) {
//     return number <= 3;
//   })
// );

// console.log(
//   filter(["Vestibulum", "ullamcorper", "mauris", "ligula"], function (word) {
//     return word.length >= 7;
//   })
// );

// const arrayToChange = [1, 2, 3, 4, 5];
// const wordsToChange = ["Aenean", "tellus", "metus", "bibendum", "sed"];

// const map = (array, callback) => {
//   const result = [];

//   for (const el of array) {
//     const changes = callback(el);
//     const changes1 = additionCallback(changes);
//     result.push(changes1);
//   }
//   return result;
// };

// const multiplyCallback = (element) => element * 2;

// const additionCallback = (element) => element + 3;

// const lengthCallback = (word) =>
//   `Word of array: ${word}, length: ${word.length}`;

// console.log(map(arrayToChange, multiplyCallback));
// console.log(map(arrayToChange, additionCallback));
// console.log(map(wordsToChange, lengthCallback));

//!======================ARROW FUNCTION======================

// const add = function (a, b) {
//   return a + b;
// };

// const add1 = (a, b) => {
//   return a + b;
// };

// const add2 = (a, b) => a + b;

// const add3 = (a) => a;

// console.log("result of function expression:", add(1, 2));
// console.log("result of arrow function add1:", add1(2, 3));
// console.log("result of arrow function add2:", add2(3, 4));
// console.log("result of arrow function add3:", add3(5));

// const arrowFn = (...args) => args;

// console.log(arrowFn(1, 2, 3, 4, 5));

//================================================================

// const filter = (array, testCallback) => {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5], (number) => number >= 3));

// console.log(
//   filter([1, 2, 3, 4, 5], (number) => {
//     return number === 3;
//   })
// );

// console.log(filter([1, 2, 3, 4, 5], (number) => number <= 3));

// console.log(
//   filter(
//     ["Vestibulum", "ullamcorper", "mauris", "ligula"],
//     (word) => word.length >= 7
//   )
// );

//!=========================Environment==============================
// Global
// Parent: null

//[[Environment]] : Global env - во время объявления записывается глобальное свойство
// const fn = function (a) {
// создается во время вызова функции
// Fn env
// Parent: Global
// a: 5

// const b = 10;
// Fn env
// Parent: Global
// a: 5, b: 10

// при объявлении сохраняется ссылка на родительское окружение
// [[Environment]] : Fn env
// const innerFn = function (v) {
// создается во время вызова функции
// Parent: Fn env
// v: 10

// console.log(superGlobal);
// };
// Fn env
// Parent: Global
// a: 5, b: 10, innerFn: f

// innerFn(10);
// };

// Global
// Parent: null
// fn: f

// const superGlobal = 555;

// Global
// Parent: null
// superGlobal: 555, fn: f

// fn(5);

//======================================================

// Global
// Parent: null

//[[Environment]] : Global
// const fnA = function () {
    //fnA env
    // Parent: Global
    // console.log(a);
    
// };

// Global
// Parent: null
// fnA: f

//[[Environment]] : Global
// const outerFn = function () {
    //outerFn env
    // Parent: Global
	// const a = 5;
    //outerFn env
    // Parent: Global
    // a: 5

	// fnA();
// };
// Global
// Parent: null
// fnA: f, outerFn: f

// outerFn();


//!====================THIS========================

