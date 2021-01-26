type TAdd = (itemName: string) => void;

type TRemove = (itemName: string) => void;

interface IInventory {
	items: string[];
	add: TAdd;
	remove: TRemove;
}

const inventory: IInventory = {
	items: ['Knife', 'Gas mask'],

	add(itemName) {
		console.log(`Adding ${itemName} to inventory`);

		this.items.push(itemName);
	},

	remove(itemName) {
		console.log(`Removing ${itemName} from inventory`);

		this.items = this.items.filter(item => item !== itemName);
	},
};

type TInvokeInvAction = (itemName: string, action: TAdd | TRemove) => void;

const invokeInventoryAction: TInvokeInvAction = function (itemName, action) {
	console.log(`Invoking action on ${itemName}`);
	action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Radiation sensor', inventory.add.bind(inventory));

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit', 'Radiation sensor']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));

console.log(inventory.items); // ['Knife', 'Medkit', 'Radiation sensor']
