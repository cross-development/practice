{
	type TItems = string[];

	class Storage {
		public items: TItems;

		constructor(items: TItems) {
			this.items = items;
		}

		public getItems(): TItems {
			return this.items;
		}

		public addItem(item: string): void {
			this.items.push(item);
		}

		public removeItem(item: string): void {
			for (let i = 0; i < this.items.length; i += 1) {
				if (this.items[i] === item) {
					const index = this.items.indexOf(item);
					this.items.splice(index, 1);
					break;
				}
			}
		}
	}

	const storage = new Storage([
		'Нанитоиды',
		'Пролонгер',
		'Железные жупи',
		'Антигравитатор',
	]);

	const items = storage.getItems();
	console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

	storage.addItem('Дроид');
	console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

	storage.removeItem('Пролонгер');
	console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}
