{
	class StringBuilder {
		private _value: string;

		constructor(value: string) {
			this._value = value;
		}

		get value(): string {
			return this._value;
		}

		public append(str: string): void {
			this._value += str;
		}
		public prepend(str: string): void {
			this._value = str + this._value;
		}
		public pad(str: string): void {
			this.prepend(str);
			this.append(str);
		}
	}

	const stringBuilder = new StringBuilder('Mango and Poly are awesome');

	const value = stringBuilder.value;
	console.log(value);

	stringBuilder.append('lalala');
	console.log(stringBuilder.value);

	stringBuilder.prepend('lalala');
	console.log(stringBuilder.value);

	stringBuilder.pad('lalala');
	console.log(stringBuilder.value);
}
