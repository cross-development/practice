{
	class User {
		public name: string;
		public age: number;
		public followers: number;

		constructor(name: string, age: number, followers: number = 0) {
			this.name = name;
			this.age = age;
			this.followers = followers;
		}

		public getInfo(): void {
			console.log(
				`User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
			);
		}
	}

	const cross = new User('Cross', 30, 100500);

	cross.getInfo();
}
