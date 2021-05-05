// ======================== Factory Pattern ======================== //
// Используется для того, чтоб упростить создание объектов,
// проще генерировать экземпляры объектов,
// не требует использования конструктора.

// Несколько конструкторов для нашей фабрики
function Cat(options) {
	this.sound = 'Meow';
	this.name = options.name;
}

function Dog(options) {
	this.sound = 'Rawr';
	this.name = options.name;
}

function Wolf(options) {
	this.sound = 'woof';
	this.name = options.name;
}

function SomeOtherAnimal(options) {
	this.sound = '...';
	this.name = options.name;
}

// Animal Factory
function AnimalFactory() {}

// Тип Cat по умолчанию
AnimalFactory.prototype.animalType = Cat;

// метод для создания новых животных
AnimalFactory.prototype.createAnimal = function (options) {
	switch (options.animalType) {
		case 'cat':
			this.animalType = Cat;
			break;
		case 'dog':
			this.animalType = Dog;
			break;
		case 'wolf':
			this.animalType = Wolf;
			break;
		default:
			this.animalType = SomeOtherAnimal;
			break;
	}

	return new this.animalType(options);
};

const animalFactory = new AnimalFactory();

const doge = animalFactory.createAnimal({
	animalType: 'dog',
	name: 'Doge',
});

const cate = animalFactory.createAnimal({
	animalType: 'cat',
	name: 'Cate',
});

const wolfe = animalFactory.createAnimal({
	animalType: 'wolf',
	name: 'Wolfe',
});

const snowball = animalFactory.createAnimal({ name: 'Snowball' });

console.log(doge instanceof Dog); // true
console.log(doge); // выводит doge как dog объект

console.log(cate instanceof Cat); // true
console.log(cate); // выводит cate как cat объект

console.log(wolfe instanceof Wolf); // true
console.log(wolfe); // выводит wolfe как wolf объект

console.log(snowball instanceof SomeOtherAnimal); // true
console.log(snowball); // выводит snowball как someOtherAnimal объект
