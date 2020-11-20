'use strict';

function generateId() {
	const randomNumber = Math.random().toString().slice(2);
	return randomNumber;
}

const uuid = () =>
	([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
	);

const shop = {
	name: 'Shop #1',
	address: 'Kiev',
	items: [{ name: '', price: 100, amount: 2, category: '' }],

	showItems() {
		for (const { name, price, amount } of this.items) {
			console.log(`${name}: ${price}$, amount: ${amount}`);
		}
	},

	addItem(name, price, amount, category) {
		this.items.push({ id: uuid(), name, price, amount, category });
	},

	removeItem(id) {
		let indexToDelete = this.getItemPositionById(id);

		if (indexToDelete !== -1) {
			this.items = [...this.items.slice(0, indexToDelete), ...this.items.slice(indexToDelete + 1)];
		}
	},

	updateItem(id, newValues) {
		const indexToUpdate = this.getItemPositionById(id);

		const itemToUpdate = this.getItemById(id);

		this.items[indexToUpdate] = { ...itemToUpdate, ...newValues };
	},

	getItemPositionById(id) {
		let index = -1;

		for (let i = 0; i < this.items.length; i += 1) {
			const currentItem = this.items[i];

			if (currentItem.id === id) {
				index = i;
				break;
			}
		}
		return index;
	},

	getItemById(id) {
		const indexToDelete = this.getItemPositionById(id);

		return this.items[indexToDelete];
	},

	getItemsByValue(fieldName, fieldValue) {
		const result = [];
		for (const item of this.items) {
			if (item[fieldName] === fieldValue) {
				result.push(item);
			}
		}
		return result;
	},

	getItemsByRange(fieldName, rangeStart, rangeEnd) {
		const result = [];
		for (const item of this.items) {
			const fieldValue = item[fieldName];
			if (fieldValue >= rangeStart && fieldValue <= rangeEnd) {
				result.push(item);
			}
		}
		return result;
	},
};

const priceLessThan100 = shop.getItemsByRange('price', 0, 99);

for (const item of priceLessThan100) {
	shop.removeItem(item.id);
}

const priceLessThan50 = shop.getItemsByRange('price', 0, 50);

for (const item of priceLessThan50) {
	const { id, price } = item;
	shop.updateItem(id, { price: price + 20 });
}
