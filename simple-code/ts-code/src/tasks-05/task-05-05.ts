{
	interface ICarParams {
		speed?: number;
		price: number;
		maxSpeed: number;
		isOn?: boolean;
		distance?: number;
	}

	type TSpecs = {
		speed: number;
		price: number;
		maxSpeed: number;
		isOn: boolean;
		distance: number;
	};

	class Car {
		public speed: number;
		private _price: number;
		public maxSpeed: number;
		public isOn: boolean;
		public distance: number;

		static getSpecs({ maxSpeed, speed, isOn, distance, price }: TSpecs): void {
			console.log(
				`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
			);
		}

		constructor({
			speed = 0,
			price,
			maxSpeed,
			isOn = false,
			distance = 0,
		}: ICarParams) {
			this.speed = speed;
			this._price = price;
			this.maxSpeed = maxSpeed;
			this.isOn = isOn;
			this.distance = distance;
		}

		get price(): number {
			return this._price;
		}

		set price(newPrice: number) {
			this._price = newPrice;
		}

		public turnOn(): void {
			this.isOn = true;
		}

		public turnOff(): void {
			this.isOn = false;
			this.speed = 0;
		}

		public accelerate(value: number): void {
			if (this.speed + value <= this.maxSpeed) {
				this.speed += value;
			}
		}

		public decelerate(value: number): void {
			if (this.speed - value >= 0) {
				this.speed -= value;
			}
		}

		public drive(hours: number): void {
			if (this.isOn) {
				this.distance += hours * this.speed;
			}
		}
	}

	const mustang = new Car({ maxSpeed: 200, price: 2000 });

	mustang.turnOn();
	mustang.accelerate(200);
	mustang.drive(2);

	Car.getSpecs(mustang);
	// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

	mustang.decelerate(20);
	mustang.drive(1);
	mustang.turnOff();

	Car.getSpecs(mustang);
	// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

	console.log(mustang.price); // 2000
	mustang.price = 4000;
	console.log(mustang.price); // 4000
}
