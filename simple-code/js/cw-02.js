'use strict';
/*
  Есть 3 переменные в которых хранится цена продуктов по отдельности
  в формате N$, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalPrice 
  общую цену покупок в формате N$.
  
  К примеру "сумма" '20$' и '30$' будет равна '50$'.
  
  Если все верно, то в консоли будет выведена строка '125$'
*/

const apples = '20$';
const bread = '5$';
const cheese = '100$';

let totalPrice;

totalPrice = Number.parseInt(apples) + Number.parseInt(bread) + Number.parseInt(cheese) + '$';

console.log(totalPrice); // '125$'
