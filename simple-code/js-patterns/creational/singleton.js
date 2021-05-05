// ======================== Singleton Pattern ======================== //
// Используется для того, чтобы ограничиться одним экземпляром объекта.

const mySingleton = (function () {
	let instance;

	function init() {
		// Singleton

		// Приватный метод
		const privateMethod = () => console.log('I am private');

		// Приватная переменная
		const privateVariable = 'Im also private';

		const privateRandomNumber = Math.random();

		return {
			// Публичные методы и переменные
			publicProperty: 'The public can see me!',

			publicMethod() {
				console.log('I am also public');
			},

			getRandomNumber() {
				return privateRandomNumber;
			},
		};
	}

	return {
		// Возвращает инстанс объекта если он существует
		// или создает его, если инстанса нету
		getInstance() {
			if (!instance) {
				instance = init();
			}

			return instance;
		},
	};
})();

const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();

// singleA и singleB ссылаются на один и тот же объект
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
