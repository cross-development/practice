// ======================== Constructor Pattern ======================== //
// Создает новые объекты в их собственной области видимости.

// Используйте для создания новых объектов в их собственной области видимости.
const Person = function (name, age, favFood) {
	this.name = name;
	this.age = age;
	this.favFood = favFood;
};

// Прототип позволяет всем экземплярам Person ссылаться на него без повторения функции.
Person.prototype.greet = function () {
	console.log(
		`Hello, my name is ${this.name}, I'm ${this.age} years old, and my favorite food is ${this.favFood}`,
	);
};

// new создает пустой объект, функция-конструктор вызывается в контексте этого объекта
// "this" в конструкторе получает ссылку на этот объект и "набивается" свойствами
// Конструктор устанавливает значение для свойств этого объекта и возвращает его.
const bob = new Person('Bob', 22, 'Chicken');
bob.greet(); // Hello, my name is Bob, I'm 22 years old, and my favorite food is Chicken

// ES6 / ES2015 Классы
class Vehicle {
	constructor(type, color) {
		this.type = type;
		this.color = color;
	}

	getSpecs() {
		console.log(`Type: ${this.type}, Color: ${this.color}`);
	}
}

const someTruck = new Vehicle('Truck', 'red');
someTruck.getSpecs();
